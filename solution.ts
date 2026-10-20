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
