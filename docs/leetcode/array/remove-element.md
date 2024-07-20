---
title: 27 Remove Element
head:
  - - meta
    - name: description
      content: swift leetcode
  - - meta
    - name: keywords
      content: swift, leetcode
layout: doc
---

# 27 Remove Element

[Open problem in leetcode](https://leetcode.com/problems/remove-element/)

```swift
class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        nums = nums.filter { $0 != val }
        return nums.count
    }
}
```