import re

def camel_to_snake(name: str) -> str:
    # Step 1: Add underscore between lowercase and capital letters
    name = re.sub(r"(.)([A-Z][a-z]+)", r"\1_\2", name)

    # Step 2: Handle cases like "getHTTPResponse" → "get_http_response"
    name = re.sub(r"([a-z0-9])([A-Z])", r"\1_\2", name)

    # Step 3: Convert everything to lowercase
    return name.lower()
