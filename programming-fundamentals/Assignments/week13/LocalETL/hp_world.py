import requests
import pandas as pd
import sqlite3
from typing import List
from pprint import pprint

from utilities import camel_to_snake

HP_URL = "https://api.potterdb.com/v1/characters"
DB_FILE = "characters_data.db"
NA_VALUES = [" ", "", "N/A", "NULL", "null"]


def extract(HP_URL) -> List[dict] | None:
    """Fetches data from the API and returns the raw data (JSON/list)."""
    # Put API requests and initial JSON loading here.
    try:
        response = requests.get(HP_URL)
        response.raise_for_status()

        characters = response.json()

        print("Data extracted successfully!")

        return characters["data"]

    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")


def transform(raw_data: List[dict]) -> pd.DataFrame:
    """Performs all necessary cleaning and processing on the data."""
    # Returns the clean DataFrame.

    df = pd.json_normalize(
        raw_data,
        meta=[
            "id",
            "type",
            ["attributes", "slug"],
            ["attributes", "alias_names"],
            ["attributes", "animagus"],
            ["attributes", "blood_status"],
            ["attributes", "boggart"],
            ["attributes", "born"],
            ["attributes", "died"],
            ["attributes", "eye_color"],
            ["attributes", "family_members"],
            ["attributes", "gender"],
            ["attributes", "hair_color"],
            ["attributes", "height"],
            ["attributes", "house"],
            ["attributes", "image"],
            ["attributes", "jobs"],
            ["attributes", "marital_status"],
            ["attributes", "name"],
            ["attributes", "nationality"],
            ["attributes", "patronus"],
            ["attributes", "romances"],
            ["attributes", "skin_color"],
            ["attributes", "species"],
            ["attributes", "titles"],
            ["attributes", "wands"],
            ["attributes", "weight"],
            ["attributes", "wiki"],
            "links_self",
        ],
        sep="_",
        errors="ignore",
    )

    df.drop(
        columns=[
            "0",
            "id",
            "type",
            "attributes_alias_names",
            "attributes_animagus",
            "attributes_boggart",
            "attributes_eye_color",
            "attributes_hair_color",
            "attributes_height",
            "attributes_nationality",
            "attributes_romances",
            "attributes_skin_color",
            "attributes_weight",
            "attributes_patronus",
            "links_self",
            "attributes_marital_status",
        ],
        errors="ignore",
        inplace=True,
    )

    df["attributes_family_members"] = df["attributes_family_members"].str.join(", ")
    df["attributes_jobs"] = df["attributes_jobs"].str.join(", ")
    df["attributes_titles"] = df["attributes_titles"].str.join(", ")
    df["attributes_wands"] = df["attributes_wands"].str.join(", ")

    rename_map = {
        "attributes_slug": "slug",
        "attributes_blood_status": "blood_status",
        "attributes_name": "name",
        "attributes_house": "house",
        "attributes_image": "image",
        "attributes_species": "species",
        "attributes_gender": "gender",
        "attributes_born": "date_of_birth",
        "attributes_died": "death",
        "attributes_family_members": "family_members",
        "attributes_jobs": "jobs",
        "attributes_titles": "titles",
        "attributes_wands": "wands",
        "attributes_wiki": "wiki",
    }
    df = df.rename(columns=rename_map)

    df.columns = [camel_to_snake(str(col)) for col in df.columns]

    # dropping accidental numeric columns
    df = df.loc[:, ~df.columns.str.isnumeric()]

    df.columns = df.columns.str.strip() 

    # making sure missing vales are filled with unknown
    df.fillna(
        {
            "blood_status": "Unknown",
            "species": "Unknown",
            "gender": "Unknown",
            "date_of_birth": "Unknown",
            "death": "Unknown",
            "gender": "Unknown",
            "house": "Unknown",
            "image": "Unknown",
        },
        inplace=True,
    )

    # Applying strip  to remove whitespace from all string columns
    for col in df.select_dtypes(include="object").columns:
        df[col] = df[col].str.strip()

    return df


def load(clean_df: pd.DataFrame, DB_FILE: str, table_name: str) -> None:
    """Connects to the database and loads the data."""
    # Loads the clean_df to SQLite using df.to_sql().
    with sqlite3.connect(DB_FILE) as conn:
        clean_df.to_sql(
            name="magicians",
            con=conn,
            if_exists="replace",
            index=False
        )
    print("Data loaded into SQLite successfully!")


def main():
    """Coordinates the ETL pipeline by calling extract -> transform -> load."""
    data = extract(HP_URL)
    if data is None:
        print("Aborting... data is None.")
        return

    clean_df = transform(data)
    load(clean_df, DB_FILE, "magicians")

    print(clean_df.info())
    print(clean_df.head)


if __name__ == "__main__":
    main()
