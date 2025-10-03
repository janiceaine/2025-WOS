import requests
import pandas as pd
import sqlite3
import argparse

from typing import List
from pprint import pprint
from utilities import camel_to_snake
from colorama import Fore, Style, init

HP_URL = "https://hp-api.onrender.com/api/characters/house/gryffindor"
DB_FILE = "gryffindor_data.db"
NA_VALUES = [" ", "", "N/A", "NULL", "null"]


def extract(HP_URL) -> List[dict] | None:
    """Fetches data from the API and returns the raw data (JSON/list)."""
    # Put API requests and initial JSON loading here.
    try:
        response = requests.get(HP_URL)
        response.raise_for_status()

        characters = response.json()

        print(Fore.GREEN + "Data extracted successfully!")

        return characters

    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")


def transform(raw_data: list) -> pd.DataFrame:
    """Cleans and normalizes Gryffindor character data."""

    # Normalize the list of dictionaries into a flat DataFrame
    df = pd.json_normalize(
        raw_data,
        meta=[
            "name",
            "alternate_name",
            "species",
            "gender",
            "house",
            "dateOfBirth",
            "yearOfBirth",
            "wizard",
            "ancestry",
            "eyeColour",
            "hairColour",
            ["wand", "wood"],
            ["wand", "core"],
            ["wand", "length"],
            "patronus",
            "hogwartsStudent",
            "hogwartsStaff",
            "actor",
            "alternate_actors",
            "alive",
            "image",
        ],
        sep="_",
        errors="ignore",
    )

    df.drop(columns=["alternate_actors"], errors="ignore", inplace=True)

    df["alternate_names"] = df["alternate_names"].str.join(", ")
    # df["wand_wood"] = df["wand_wood"].str.join(", ")

    # Rename some key columns for clarity
    rename_map = {
        "name": "name",
        "alternate_name": "alternate_name",
        "species": "species",
        "gender": "gender",
        "house": "house",
        "dateOfBirth": "date_of_birth",
        "yearOfBirth": "year_of_birth",
        "wizard": "wizard",
        "ancestry": "ancestry",
        "eyeColour": "eye_color",
        "hairColour": "hair_color",
        "wand_wood": "wand_wood",
        "wand_core": "wand_core",
        "wand_length": "wand_length",
        "patronus": "patronus",
        "hogwartsStudent": "hogwarts_student",
        "hogwartsStaff": "hogwarts_staff",
        "actor": "actor",
        "alive": "alive",
        "image": "image_url",
    }
    df.rename(columns=rename_map, inplace=True)

    df.columns = [camel_to_snake(col) for col in df.columns]

    # dropping accidental numeric columns
    df = df.loc[:, ~df.columns.str.isnumeric()]

    # All the columns have been converted to strings
    for col in df.columns:
        df[col] = df[col].astype(str).str.strip()

    # Replacing empty strings, None, or NaN with "Unknown" across all columns
    df = df.replace(
        {None: "Unknown", "": "Unknown", "nan": "Unknown", "None": "Unknown"}
    )

    # Filling missing values with "Unknown"
    df.fillna(
        {
            "name": "Unknown",
            "alternate_names": "Unknown",
            "species": "Unknown",
            "gender": "Unknown",
            "house": "Unknown",
            "date_of_birth": "Unknown",
            "year_of_birth": "Unknown",
            "wizard": "Unknown",
            "ancestry": "Unknown",
            "eye_color": "Unknown",
            "hair_color": "Unknown",
            "patronus": "Unknown",
            "hogwarts_student": "Unknown",
            "hogwarts_staff": "Unknown",
            "actor": "Unknown",
            "alive": "Unknown",
            "image_url": "Unknown",
            "wand_core": "Unknown",
            "wand_length": "Unknown",
            "wand_wood": "Unknown",
        },
        inplace=True,
    )

    # Strip whitespace from string columns
    for col in df.select_dtypes(include="object").columns:
        df[col] = df[col].str.strip()

    return df


def load(df: pd.DataFrame, db_file: str, table_name: str):
    """Load the DataFrame into a SQLite database."""
    with sqlite3.connect(db_file) as conn:
        df.to_sql(name=table_name, con=conn, if_exists="replace", index=False)
    print(
        Fore.BLUE
        + f"Data loaded {len(df)} names into SQLite table '{table_name}' successfully!"
    )


def get_config():
    """Parse command-line arguments for DB and table config."""
    parser = argparse.ArgumentParser(description="Gryffindor Characters ETL Pipeline")
    parser.add_argument(
        "--db", # Add a --db argument to specify the SQLite database filename
        default="gryffindor_data.db", #If filename is not provided, it defaults to 'gryffindor_data.db'
        type=str,
        #required=True, # to be explicit, this forces user to include arguemts even when default is set
        help="SQLite database filename",
    )
    parser.add_argument(
        "--table", # Add a --table argument to specify the Sname of the table inside the database
        default="gryffindor_characters", # Defaults to 'gryffindor_characters' if tablename is not provided
        type=str,
        #required=True, # to be explicit, this forces user to include arguemts even when default is set
        help="Table name inside the database",
    )
    return parser.parse_args()


def main():
    args = get_config()

    """Coordinates the ETL pipeline by calling extract -> transform -> load."""
    gryffindor = extract(HP_URL)
    if gryffindor is None:
        print(Fore.RED + "Aborting... data is None.")
        return

    clean_df = transform(gryffindor)
    # only loading if DataFrame has rows
    if clean_df.empty:
        print(Fore.RED + "No rows to load. Aborting...")
        return

    load(clean_df, DB_FILE, "gryffindor_characters")

    print(clean_df.info())
    print(clean_df.head())

    # pprint(clean_df[:1])
    # pprint(clean_df[:1].to_dict(orient="records"))


if __name__ == "__main__":
    init(autoreset=True)
    main()
