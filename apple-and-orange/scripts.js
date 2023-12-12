"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Count the number of apples that fall on the house
  const applesOnHouse = apples.filter(
    (apple) => a + apple >= s && a + apple <= t
  ).length;

  // Count the number of oranges that fall on the house
  const orangesOnHouse = oranges.filter(
    (orange) => b + orange >= s && b + orange <= t
  ).length;
  console.log(applesOnHouse);
  console.log(orangesOnHouse);
}
function main() {
  const firstMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const s = parseInt(firstMultipleInput[0], 10);

  const t = parseInt(firstMultipleInput[1], 10);

  const secondMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const a = parseInt(secondMultipleInput[0], 10);

  const b = parseInt(secondMultipleInput[1], 10);

  const thirdMultipleInput = readLine().replace(/\s+$/g, "").split(" ");

  const m = parseInt(thirdMultipleInput[0], 10);

  const n = parseInt(thirdMultipleInput[1], 10);

  const apples = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((applesTemp) => parseInt(applesTemp, 10));

  const oranges = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((orangesTemp) => parseInt(orangesTemp, 10));

  countApplesAndOranges(s, t, a, b, apples, oranges);
}
