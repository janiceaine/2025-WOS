# Gryffindor Character ETL Pipeline

## Data Source
This project uses the [HP API](https://hp-api.onrender.com/api/characters/house/gryffindor), which provides character data from the Gryffindor house in the Harry Potter universe. The API returns a list of 47 characters, each with attributes like name, species, wand details, and more.

## Business Question
How can we clean and organize Gryffindor character data into a structured format for analysis and storytelling?

This pipeline prepares the data for questions like:
- Which characters have known wand attributes?
- How many Gryffindor characters are listed as alive or deceased?
- What traits (e.g. ancestry, patronus) are most commonly missing?

## Cleaning Steps Performed
- **Flattening Nested Data**: Used `pandas.json_normalize()` to extract nested wand fields (`wand.wood`, `wand.core`, `wand.length`) into flat columns.
- **Column Standardization**: Renamed all columns to `snake_case` using a custom `camel_to_snake()` function for consistency.
- **Missing Data Handling**:
  - Replaced `None`, empty strings, and `NaN` with `"Unknown"` across all columns.
  - Applied `.fillna()` to ensure no critical fields are left blank.
- **String Cleanup**: Stripped leading/trailing whitespace from all string columns.
- **Data Validation**: Ensured the final DataFrame is not empty before loading into the database.
- **Terminal Styling**: Used `colorama` to color-code status messages for better readability during execution.

## Output
- SQLite database file: `gryffindor_data.db`
- Table name: `gryffindor_characters`
- Total characters processed: 47
- Fields with partial data: `year_of_birth`, `wand_length`, `patronus`, etc.

## How to Run
1. Install dependencies: `pip install -r requirements.txt`
2. Run the pipeline: `python gryffindor_pipeline.py` or `py gryffindor.py --db gryffindor_data.db --table gryffindor_characters`
3. View the database using any SQLite viewer (e.g. VS Code extension)

## Features
- Modular ETL structure (`extract()`, `transform()`, `load()`)
- Color-coded terminal output for success, warnings, and errors
- Easy to extend for other Hogwarts houses or character traits

## Future Improvements

To enhance data integrity, flexibility, and scalability, future versions of this pipeline may include:

- **House Validation**: Prevent Gryffindor data from being loaded into mismatched tables or databases.
- **Dynamic House Selection**: Add a `--house` argument to support other Hogwarts houses and auto-adjust the API and table name.
- **Safe Load Modes**: Introduce a `--mode` flag (`replace`, `append`, `skip`) to control how data is written and protect existing records.
