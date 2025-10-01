import pandas as pd
from pandas import DataFrame
import requests

POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/pikachu"
NA_VALUES = [" ", "", "N/A", "NULL", "null"]

# Getting data 
def extract(filepath: str) -> dict | None:
    # Send the GET request
    try:
        response = requests.get(POKEAPI_URL)
        response.raise_for_status()

        print("Request Successful!")
        return response.json() # gives us a dict
    
    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")

# Organizing data into clean table
def transform_abilities(pikachu: dict) -> DataFrame:
    # flattening abilities list into a table
    abilities_df = pd.json_normalize(
        pikachu,
        record_path="abilities",
        meta=["id", "name"],
        sep="_"
    )
    abilities_df = abilities_df[["id", "name", "ability_name", "is_hidden", "slot"]]
    #adding a lable for this category
    abilities_df["category"] = "ability"

    return abilities_df

def transform_types(pikachu: dict) -> DataFrame:
    # flattening types list into a table
    types_df = pd.json_normalize(
        pikachu,
        record_path="types",
        meta=["id", "name"],
        sep="_"
    )
    types_df = types_df[["id", "name", "type_name", "slot"]]
    #adding a lable for this category
    types_df["category"] = "type"

    return types_df

def load(abilities_df: DataFrame, types_df: DataFrame) -> None:
    abilities_df.to_csv("pokemon_abilities.csv", index=False)
    types_df.to_csv("pokemon_types.csv", index=False)
    print("Files saved sucessfully")

def main():
    pikachu = extract(POKEAPI_URL)
    if pikachu is None:
        return
    
    abilities_df= transform_abilities(pikachu)
    types_df = transform_types(pikachu)

    load(abilities_df, types_df)

if __name__ == "__main__":
    main()