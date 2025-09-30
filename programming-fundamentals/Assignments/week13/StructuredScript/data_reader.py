import json
import csv
import os
from colorama import Fore, Style

def load_config(filepath):
    with open(filepath, 'r') as file:
        return json.load(file)
    
def read_data(filepath):
    with open(filepath, 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        return list(reader)
    
def write_report(filepath, records):
    with open(filepath, 'w') as file:
        file.write(f"Total record processed: {len(records)}\n")
        for record in records:
            file.write(f"Record {record['RecordID']}: {record['name']}\n")

def main():
    print()

if __name__ == "__main__":
    config = load_config("config.json")
    #print(config)

    data = read_data(config["source_file"])
    #print(data)

    processed = []
    for i, row in enumerate(data, start=1):
        if i > config["record_limit"]:
            break      
        row["RecordID"] = i
        processed.append(row)
        #print(processed)

    write_report(config["output_report"], processed)

    print(Fore.GREEN + f"Report written to {config['output_report']}" + Style.RESET_ALL)