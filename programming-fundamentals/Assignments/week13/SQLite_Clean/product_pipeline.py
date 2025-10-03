import pandas as pd
import requests
import sqlite3
from pandas import DataFrame

API_URL = "https://dummyjson.com/products"
DB_FILE = "product_data.db"
NA_VALUES = [" ", "", "N/A", "NULL", "null"]

def extract():
    """Fetches data from the API and returns the list of products (the 'products' key)."""
    # Use the requests library here
    # Remember the API response contains {'products': [...], 'total': 100, ...}
    try:
        response = requests.get(API_URL)
        response.raise_for_status()

        data = response.json()

        print("Data extracted successfully!")

        return data["products"]
    
    except FileNotFoundError as e:
        print(f"Error: file not found: {e.filename}")
    except Exception as e:
        print(f"Error: error loading file: {e}")

def transform(product_list: list[dict]) -> DataFrame:
    """Flattens the product list and selects/cleans key fields."""
    # Use pandas.json_normalize() here
    df = pd.json_normalize(
            product_list,
            sep="_"
        )

    df.drop(columns=["reviews", "images", "thumbnail", "tags"], errors="ignore", inplace=True)
    #df["tags"] = df["tags"].str.join(", ") (do this rather than dropping)
    #df["images"] = df["images"].str.join(", ")

    return df

def load(df: DataFrame) -> None:
    """Loads the final DataFrame into a SQLite database table."""
    # Use sqlite3.connect() and df.to_sql() here
    with sqlite3.connect(DB_FILE) as conn:
        df.to_sql(
            name="inventory",
            con=conn,
            if_exists="replace",
            index=False
        )
    print("Data loaded into SQLite successfully!")

if __name__ == "__main__":
    # Call your functions in sequence: E -> T -> L
    products = extract()
    if products is None:
        exit()

    clean_df = transform(products)
    load(clean_df)