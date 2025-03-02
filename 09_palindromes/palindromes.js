const palindromes = function (string) {
const abcs = '1234567890qwertyuiopasdfghjklzxcvbnm';

const filtered = string.toLowerCase().split('').filter((string) => abcs.includes(string)).join('');
const reversed = filtered.split('').reverse().join('');

return reversed === filtered;
};

// Do not edit below this line
module.exports = palindromes;
