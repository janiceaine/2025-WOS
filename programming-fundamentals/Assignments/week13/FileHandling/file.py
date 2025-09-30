import csv
import json
import os
from data.user_profile import user_profile

#1. Text File Practice
with open('data/notes.txt', 'r') as f:
    # We can read and write within this block. 'f' is the file handle.
    content = f.read()
    print(content)

#2. CSV Practice
with open('data/students.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
       if int(row['score']) > 80:
              print(row['name']) 

#3. JSON Practice
with open('data/user.json', 'w') as file:
        json.dump(user_profile, file, indent=4) #created user.json file
        
with open('data/user.json', 'r') as file:
     newData = json.load(file)
     print(newData['name'])

#4. Jam Master
with open('data/students.csv', 'r') as csv_file:
     reader = csv.DictReader(csv_file)
     data = list(reader)

with open('data/students.json', 'w') as json_file:
     json.dump(data, json_file, indent=4)

# worked alongside Janis, Salvador, Orlando and Sampson