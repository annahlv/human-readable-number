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
    let s = "" + number;
    function belowHundred(n, s) {
        if (n === 0) return "zero";
        if (n <= 12) return numbers[n];
        if (n > 12 && n < 20) {
            if (s[1] == 3) {
                return numbers[1003] + numbers[1010];
            } else if (s[1] == 5) {
                return numbers[1005] + numbers[1010];
            } else if (s[1] == 8) {
                return numbers[1008] + numbers[1010];
            } else return numbers[s[1]] + numbers[1010];
        }
        if (n >= 20 && n < 100) {
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
                } else
                    return numbers[s[0]] + numbers[1100] + " " + numbers[s[1]];
            }
        }
    }
    if (number < 100) {
        return belowHundred(number, s);
    } else if (number % 100 == 0) {
        return numbers[s[0]] + " " + numbers[100];
    } else {
        let dozen = number % 100;
        let d = s.substring(1);
        console.log("number: " + number);
        console.log("dozen: " + dozen);
        return (
            numbers[s[0]] + " " + numbers[100] + " " + belowHundred(dozen, d)
        );
    }
};
