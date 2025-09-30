import pandas as pd

def main():
    df = pd.read_csv('messy_inventory.csv')
    name_map = {
        'Item ID ' : 'item_id',
        'Category Name' : 'category_name',
        ' Unit Price ($)' : 'unit_price_usd',
        'Quantity_in_Stock' : 'quantity_in_stock',
        ' DATE CREATED' : 'date_created'
    }
    df.rename(columns=name_map, inplace=True)
    #print(df.columns)

    df['category_name'] = df['category_name'].str.lower().str.strip()
    
    #print(df['category_name'])

    #print(df)

    df.to_csv('inventory_cleaned.csv', index=False, encoding='utf-8')

    print(f"Process is Complete. 🎉")

if __name__ == "__main__": 
    main()

# worked alongside Janis, Beril and Salvador