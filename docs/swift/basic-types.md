---
title: Basic Types
head:
  - - meta
    - name: description
      content: swift basic types
  - - meta
    - name: keywords
      content: swift, string, boolean, date, numbers, double, type safety
layout: doc
---

# Basic Types

[[toc]]

## Fundamental Types

### String

A sequence of characters.

```swift
let myFirstItem: String = "Hello, World!"
```

- **Reference:** Strings can be referenced to create new variables.

```swift
let myTitle = myFirstItem
```

### Boolean

A logical value that can be either `true` or `false`.

```swift
let mySecondItem: Bool = true
let myThirdItem: Bool = false
```

### Date

Represents a specific point in time.

```swift
let myFirstDate: Date = Date()
```

### Numbers

- **Int:** Integer values (whole numbers).

```swift
let myFirstNumber: Int = 1
```

- **Double:** Floating-point numbers with double precision.

```swift
let mySecondNumber: Double = 1.0
```

- **CGFloat:** Floating-point type used for graphics and user interface elements.

```swift
let mythirdNumber: CGFloat = 1.0
```

### Type Safety

Swift's type safety prevents you from assigning incompatible values to variables.

```swift
// This will cause a compiler error:
let myFourthItem: Bool = "Hello"
```

### Additional Notes

- You can omit the type annotation in many cases, as Swift can infer the type from the value.
- For more complex data structures, Swift offers arrays, dictionaries, and custom types like structs, classes, and enums.