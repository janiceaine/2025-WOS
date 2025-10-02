import pandas as pd
NA_VALUES = [" ", "", "N/A", "NULL", "null"]

def main():
    df = pd.read_csv('raw_sales_data.csv', na_values=NA_VALUES)
    df.columns = df.columns.str.strip()
    name_map= {
        'Order_ID' : 'order_id',
        'Customer_Email' : 'customer_email',  
        'Product_Name' : 'product_name', 
        'Price ($)' : 'price', 
        'Region' : 'region', 
        'Status' : 'status', 
        'Discount_Applied' : 'discount_applied', 
        'Date' : 'date'
    }
    df.rename(columns=name_map, inplace=True)
    print(df.columns)

    df['customer_email'] = df['customer_email'].str.lower().str.strip()
    df['region'] = df['region'].str.lower().str.strip()

    # Identify duplicates
    #print(df.duplicated(subset=['order_id']))

    # Remove duplicates
    df.drop_duplicates(subset=['order_id'], keep='first', inplace=True)

    df = df.dropna(subset=['price'], inplace=False)
    df['discount_applied'].fillna(0.0, inplace=True)

    print(df)

    df.info()

    df['status'] = df['status'].str.lower().str.strip()

    east_completed = df[
        (df['status'] == 'completed') &
        (df['region'] == 'east') &
        (df['price'] > 100)
    ]

    east_completed = east_completed.sort_values(by='price', ascending=False)

    east_completed.to_csv('east_region_report.csv', index=False)
    #print(east_completed)

if __name__ == "__main__":
    main()