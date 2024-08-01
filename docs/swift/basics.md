---
title: Swift Basics
head:
  - - meta
    - name: description
      content: swift language basics
  - - meta
    - name: keywords
      content: swift
layout: doc
---

# Swift Basics

[[toc]]

## Printing to Console

```swift
var greeting = "Hello, playground"
print(greeting)
```

* This line prints the value stored in the `greeting` variable to the console.

## Comments

### Single-line comments

```swift
// This is a single-line comment
```

* Comments are used to explain code and are ignored by the compiler.
* Single-line comments start with `//`.

### Multi-line comments

```swift
/*
  This a multiline comment
  that goes to
  multiple lines
*/
```

* Multi-line comments start with `/*` and end with `*/`.

## Naming Conventions

### Camel Case

```swift
let firstGreeting = "Hello, world!"
let thisIsMyFirstGreeting = "Hello, world!"
```

* Swift uses camel case for variable and constant names.
* The first word is lowercase, and subsequent words start with a capital letter.

## Summary

### The provided code demonstrates

* Printing output to the console.
* Different types of comments for code explanation.
* Swift's naming conventions using camel case.

## Additional Notes:

* While the code is correct, it's essential to use descriptive variable names to improve code readability. For example, instead of `greeting`, you could use `welcomeMessage`.
* Indentation and proper formatting enhance code clarity.
* Consider adding more comments to explain the purpose of the code, especially for larger projects.
* By following these guidelines, you can write cleaner and more maintainable Swift code.
