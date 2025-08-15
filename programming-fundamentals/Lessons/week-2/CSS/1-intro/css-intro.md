# Intro to CSS

CSS stands for Cascading Style Sheets

We will be linking external style sheets to our HTML documents.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro to CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Intro to CSS</h1>
</body>
</html>
```

## Anatomy of a CSS Rule


**SYNTAX OF A RULE:**
```CSS
selectorc{
    property: value;
}
```

**Example**

```CSS
h1 {
    color: blue;
}
```

### Selector

**Element Selector**

    h1, h2, h3, p, a, div, span, ul, li, etc

    Selects every single element of that instance of the HTML tag.


**Class Selector**

    Class selectors begin with a dot (.)

    Example: .navbar
**ID Selector**
ID selectors begin with a (#).

##CSS Specificity

What happens when an element is being targeted by more than one selector?

    Specificity wins!

    Points system:
    id: 100 pts
    class: 10 pts
    element: 1 pt
