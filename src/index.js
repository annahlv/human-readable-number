const numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    1002: "twen",
    1003: "thir",
    1004: "for",
    1005: "fif",
    1008: "eigh",
    1010: "teen",
    1100: "ty",
    100: "hundred",
};

module.exports = function toReadable(number) {
  let s = '' + number; 
  if (number === 0) return "zero";
    if (number <= 12) return numbers[number];
    if (number > 12 && number < 20) {
      if (s[1] == 3) {
        return numbers[1003] + numbers[1010];
      } else if (s[1] == 5) {
        return numbers[1005] + numbers[1010];
      } else if (s[1] == 8) {
        return numbers[1008] + numbers[1010];
      } else return numbers[s[1]] + numbers[1010];
    } 
    if (number >= 20 && number < 100) {
      if (s[1] == 0) {
        if (s[0] == 2) {
            return numbers[1002] + numbers[1100];
        } else if (s[0] == 3) {
            return numbers[1003] + numbers[1100];
        } else if (s[0] == 4) {
            return numbers[1004] + numbers[1100];
        } else if (s[0] == 5) {
            return numbers[1005] + numbers[1100];
        } else if (s[0] == 8) {
            return numbers[1008] + numbers[1100];
        } else return numbers[s[0]] + numbers[1100];
      } else {
        if (s[0] == 2) {
            return numbers[1002] + numbers[1100] + " " + numbers[s[1]];
        } else if (s[0] == 3) {
            return numbers[1003] + numbers[1100] + " " + numbers[s[1]];
        } else if (s[0] == 4) {
            return numbers[1004] + numbers[1100] + " " + numbers[s[1]];
        } else if (s[0] == 5) {
            return numbers[1005] + numbers[1100] + " " + numbers[s[1]];
        } else if (s[0] == 8) {
            return numbers[1008] + numbers[1100] + " " + numbers[s[1]];
        } else return numbers[s[0]] + numbers[1100] + " " + numbers[s[1]];
      }
    }
};
