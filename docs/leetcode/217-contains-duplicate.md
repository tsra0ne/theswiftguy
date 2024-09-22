---
title: 217. Contains Duplicate
author:
  - name: Sravan Goud
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: 217. Contains Duplicate
  - - meta
    - property: og:url
      content: https://theswiftguy.in/leetcode/217-contains-duplicate
---

# 217. Contains Duplicate

<br/>

::: info
**Problem:** [https://leetcode.com/problems/contains-duplicate/](https://leetcode.com/problems/contains-duplicate/)

**Complexity:** O(n)
:::

```swift
class Solution {
    func containsDuplicate(_ nums: [Int]) -> Bool {
        var numCount: [Int: Int] = [:]
        for i in nums {
            if numCount[i] != nil {
                return true
            } else {
                numCount[i] = 1
            }
        }
        return false
    }
}

var solution = Solution()

var testcase1 = solution.containsDuplicate([1,2,3,1])
print(testcase1) // true

var testcase2 = solution.containsDuplicate([1,2,3,4])
print(testcase2) // false

var testcase3 = solution.containsDuplicate([1,1,1,3,3,4,3,2,4,2])
print(testcase3)// true
```