# JavaScript/TypeScript Problem Solutions

Solutions to 20 coding problems, all written in TypeScript in a single file: `solution.ts`.

## Run

No project setup is needed. From this folder, run:

```bash
npx tsx solution.ts
```

Each problem prints a label (for example `problem-3`) followed by a sample output.

## Rules followed

- All 20 solutions live in one file, `solution.ts`.
- Function names and parameters match the problem signatures exactly.
- No hardcoded outputs. Every solution works for any valid input.
- In-place problems (12, 14, 15, 18) modify the input array directly and do not build a new one.
- Each function has a doc comment with `@param`, `@returns` and `@complexity`.

## Problems

| #   | Problem                             | Function              | Approach                                                                          | Time     | Space  |
| --- | ----------------------------------- | --------------------- | --------------------------------------------------------------------------------- | -------- | ------ |
| 1   | Staircase                           | `staircase`           | Build each row with `repeat` for spaces and `#`                                   | O(n²)    | O(n²)  |
| 2   | Grading Students                    | `gradingStudents`     | Round up to the next multiple of 5 if the gap is under 3 and grade is at least 38 | O(n)     | O(n)   |
| 3   | Time Conversion                     | `timeConversion`      | Use `hour % 12`, then add 12 for PM                                               | O(1)     | O(1)   |
| 4   | String Repeat                       | `repeatStr`           | Built-in `String.prototype.repeat`                                                | O(n·m)   | O(n·m) |
| 5   | Reversed Strings                    | `solution`            | Spread into characters, reverse, join                                             | O(n)     | O(n)   |
| 6   | Sum of Positive                     | `positiveSum`         | `reduce`, adding only values greater than 0                                       | O(n)     | O(1)   |
| 7   | Grasshopper: Summation              | `summation`           | Formula `n(n + 1) / 2`                                                            | O(1)     | O(1)   |
| 8   | Convert a Boolean to a String       | `booleanToString`     | Ternary returning `"true"` or `"false"`                                           | O(1)     | O(1)   |
| 9   | Fizz Buzz                           | `fizzBuzz`            | Check 15 first, then 3, then 5                                                    | O(n)     | O(n)   |
| 10  | Running Sum of 1D Array             | `runningSum`          | Keep a running total while iterating                                              | O(n)     | O(n)   |
| 11  | Richest Customer Wealth             | `maximumWealth`       | Sum each row and track the maximum                                                | O(m·n)   | O(1)   |
| 12  | Remove Duplicates from Sorted Array | `removeDuplicates`    | Two pointers, overwrite in place                                                  | O(n)     | O(1)   |
| 13  | Contains Duplicate                  | `containsDuplicate`   | `Set` of seen values                                                              | O(n)     | O(n)   |
| 14  | Move Zeroes                         | `moveZeroes`          | Two pointers, swap non-zeros forward                                              | O(n)     | O(1)   |
| 15  | Merge Sorted Array                  | `merge`               | Fill `nums1` from the back with three pointers                                    | O(m + n) | O(1)   |
| 16  | 3Sum                                | `threeSum`            | Sort, fix one number, two pointers for the rest, skip duplicates                  | O(n²)    | O(n)   |
| 17  | Plus One                            | `plusOne`             | Add one from the end and carry on 9s                                              | O(n)     | O(n)   |
| 18  | Reverse String                      | `reverseString`       | Two pointers swapping from both ends                                              | O(n)     | O(1)   |
| 19  | Length of Last Word                 | `lengthOfLastWord`    | Scan from the end, skip trailing spaces, count the word                           | O(n)     | O(1)   |
| 20  | Longest Common Prefix               | `longestCommonPrefix` | Shrink the first string until every string starts with it                         | O(S)     | O(1)   |

Notes on the complexity columns:

- In problem 4, `m` is the length of the string being repeated.
- In problem 11, `m` is the number of customers and `n` is the number of accounts per customer.
- In problem 20, `S` is the total number of characters across all strings.

## Edge cases handled

- Empty input: empty string, empty array, or `n = 0` where the problem allows it.
- Grades below 38 are never rounded (problem 2).
- `12 AM` becomes `00` and `12 PM` stays `12` (problem 3).
- All-9 digits grow the array by one digit, such as `[9, 9, 9]` to `[1, 0, 0, 0]` (problem 17).
- Leading, trailing and repeated spaces are ignored (problem 19).
- Duplicate triplets are skipped in 3Sum, even with repeated input values (problem 16).
