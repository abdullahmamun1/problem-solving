/**
 * Problem 1: Staircase
 *
 * @param n - Height of the staircase (number of rows)
 * @returns The staircase as a string, with rows separated by "\n"
 *
 * @complexity
 * Time: O(n^2), since the output contains n rows of length n
 * Space: O(n^2) for the result string
 */
function staircase(n: number): string {
  const rows: string[] = [];

  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return rows.join("\n");
}

/**
 * Problem 2: Grading Students
 *
 * @param grades - Array of student grades
 * @returns A new array with the final grades
 *
 * @complexity
 * Time: O(n), one pass over the grades
 * Space: O(n) for the result array
 */
function gradingStudents(grades: number[]): number[] {
  return grades.map((grade: number): number => {
    if (grade < 38) return grade;

    const nextMultipleOf5: number = Math.ceil(grade / 5) * 5;
    return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
  });
}

/**
 * Problem 3: Time Conversion
 *
 * @param s - Time string in "hh:mm:ssAM" or "hh:mm:ssPM" format
 * @returns The time in 24-hour "HH:MM:SS" format
 *
 * @complexity
 * Time: O(1), the input has a fixed length
 * Space: O(1)
 */
function timeConversion(s: string): string {
  const period: string = s.slice(-2).toUpperCase();
  const [hourPart, minutes, seconds] = s.slice(0, -2).split(":");
  let hour: number = parseInt(hourPart, 10) % 12;

  if (period === "PM") hour += 12;

  return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
}

/**
 * Problem 4: String Repeat
 *
 * @param n - Number of times to repeat the string (non-negative integer)
 * @param s - The string to repeat
 * @returns The string s repeated exactly n times, or "" if n is 0
 *
 * @complexity
 * Time: O(n * m), where m is the length of s
 * Space: O(n * m) for the result string
 */
function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}

/**
 * Problem 5: Reversed Strings
 *
 * @param str - The string to reverse
 * @returns A new string with the characters in reverse order, or "" if str is empty
 *
 * @complexity
 * Time: O(n), where n is the length of str
 * Space: O(n) for the character array and result string
 */
function solution(str: string): string {
  return [...str].reverse().join("");
}

/**
 * Problem 6: Sum of Positive
 *
 * @param arr - Array of integers
 * @returns The sum of all numbers strictly greater than 0, or 0 if there are none
 *
 * @complexity
 * Time: O(n), one pass over the array
 * Space: O(1)
 */
function positiveSum(arr: number[]): number {
  return arr.reduce(
    (sum: number, num: number): number => (num > 0 ? sum + num : sum),
    0,
  );
}

/**
 * Problem 7: Grasshopper - Summation
 *
 * @param num - A positive integer
 * @returns The sum of all integers from 1 through num, inclusive
 *
 * @complexity
 * Time: O(1), uses the formula n * (n + 1) / 2
 * Space: O(1)
 */
function summation(num: number): number {
  return (num * (num + 1)) / 2;
}

/**
 * Problem 8: Convert a Boolean to a String
 *
 * @param b - The Boolean value to convert
 * @returns "true" if b is true, otherwise "false"
 *
 * @complexity
 * Time: O(1)
 * Space: O(1)
 */
function booleanToString(b: boolean): string {
  return b ? "true" : "false";
}

/**
 * Problem 9: Fizz Buzz
 *
 * @param n - The last integer in the sequence (sequence starts at 1)
 * @returns An array of n strings: "FizzBuzz" for multiples of 15, "Fizz" for multiples
 *          of 3, "Buzz" for multiples of 5, otherwise the number as a string
 *
 * @complexity
 * Time: O(n), one pass from 1 to n
 * Space: O(n) for the result array
 */
function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }

  return result;
}

/**
 * Problem 10: Running Sum of 1D Array
 *
 * @param nums - Array of integers
 * @returns A new array where each index i holds the sum of nums[0..i]
 *
 * @complexity
 * Time: O(n), one pass over the array
 * Space: O(n) for the result array
 */
function runningSum(nums: number[]): number[] {
  const result: number[] = [];
  let sum: number = 0;

  for (const num of nums) {
    sum += num;
    result.push(sum);
  }

  return result;
}

/**
 * Problem 11: Richest Customer Wealth
 *
 * @param accounts - 2D array where accounts[i][j] is the money customer i holds in bank j
 * @returns The maximum total wealth (sum of a row) across all customers
 *
 * @complexity
 * Time: O(m * n), where m is the number of customers and n is the number of banks
 * Space: O(1)
 */
function maximumWealth(accounts: number[][]): number {
  let max: number = 0;

  for (const customer of accounts) {
    const wealth: number = customer.reduce(
      (sum: number, amount: number): number => sum + amount,
      0,
    );
    if (wealth > max) max = wealth;
  }

  return max;
}

/**
 * Problem 12: Remove Duplicates from Sorted Array
 *
 * @param nums - Integer array sorted in non-decreasing order (modified in-place)
 * @returns The number of unique elements k; the first k positions of nums hold them in order
 *
 * @complexity
 * Time: O(n), single pass with two pointers
 * Space: O(1), no extra array is used
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let k: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

/**
 * Problem 13: Contains Duplicate
 *
 * @param nums - Array of integers
 * @returns true if any value appears at least twice, otherwise false
 *
 * @complexity
 * Time: O(n), one pass with constant-time Set lookups
 * Space: O(n) for the Set of seen values
 */
function containsDuplicate(nums: number[]): boolean {
  const seen: Set<number> = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

/**
 * Problem 14: Move Zeroes
 *
 * @param nums - Integer array, modified in-place
 * @returns void (the original array is rearranged so all zeros are at the end)
 *
 * @complexity
 * Time: O(n), single pass with two pointers
 * Space: O(1), no extra array is used
 */
function moveZeroes(nums: number[]): void {
  let insertPos: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
      insertPos++;
    }
  }
}

/**
 * Problem 15: Merge Sorted Array
 *
 * @param nums1 - Sorted array of length m + n; first m slots are valid, last n are empty (modified in-place)
 * @param m - Number of valid elements in nums1
 * @param nums2 - Sorted array with n valid elements
 * @param n - Number of elements in nums2
 * @returns void (the merged result is written directly into nums1)
 *
 * @complexity
 * Time: O(m + n), single pass filling nums1 from the back
 * Space: O(1), no extra array is used
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i: number = m - 1;
  let j: number = n - 1;
  let k: number = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
}

console.log("Problem-1");
console.log(staircase(4));

console.log("Problem-2");
console.log(gradingStudents([73, 67, 38, 33]));

console.log("Problem-3");
console.log(timeConversion("07:05:45PM"));

console.log("problem-4");
console.log(repeatStr(3, "ha"));

console.log("problem-5");
console.log(solution("world"));

console.log("problem-6");
console.log(positiveSum([1, -4, 7, 12]));

console.log("problem-7");
console.log(summation(8));

console.log("problem-8");
console.log(booleanToString(true));

console.log("problem-9");
console.log(fizzBuzz(15));

console.log("problem-10");
console.log(runningSum([1, 2, 3, 4]));

console.log("problem-11");
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]),
);

console.log("problem-12");
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

console.log("problem-13");
console.log(containsDuplicate([1, 2, 3, 1]));

console.log("problem-14");
const nums14: number[] = [0, 1, 0, 3, 12];
moveZeroes(nums14);
console.log(nums14);

console.log("problem-15");
const nums1: number[] = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
