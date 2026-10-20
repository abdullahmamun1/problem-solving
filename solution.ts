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
