#1.Given a list of numbers, create a new list containing each number squared.
nums = [1, 2, 3, 4, 5]
# Expected: [1, 4, 9, 16, 25]
squared_nums = [x**2 for x in nums]
print(squared_nums)


#2.Convert a list of words to uppercase.
words = ["python", "data", "engineer"]
# Expected: ["PYTHON", "DATA", "ENGINEER"]
upper_case_words = [word.upper() for word in words]
print(upper_case_words)


#3.From a list of numbers, create a new list with only the even numbers.
nums = [10, 15, 20, 25, 30]
# Expected: [10, 20, 30]
even_nums = [num for num in nums if num % 2 == 0]
print(even_nums)

#4.Given a list of names, filter out those shorter than 5 characters.
names = ["Bob", "Alice", "Charlie", "Eve"]
# Expected: ["Alice", "Charlie"]
longer_names = [name for name in names if len(name) >= 5]
print(longer_names)

#5.From a list of integers, create a new list with double the value of each odd number.
nums = [1, 2, 3, 4, 5]
# Expected: [2, 6, 10]
doubled_odd_nums = [num * 2 for num in nums if num % 2 != 0]
print(doubled_odd_nums)

#6.Extract the id values of all records with "status": "complete".
records = [
    {"id": 1, "status": "complete"},
    {"id": 2, "status": "pending"},
    {"id": 3, "status": "complete"}
]
# Expected: [1, 3]
complete_ids = [record["id"] for record in records if record["status"] == "complete"]
print(complete_ids)

#7.Write a one-line list comprehension that flattens a nested list:
nested = [[1, 2], [3, 4], [5]]
# Expected: [1, 2, 3, 4, 5]
flat_list = [x for sublist in nested for x in sublist]
print(flat_list)
