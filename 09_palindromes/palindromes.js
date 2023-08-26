const palindromes = function (str) {
   let cleanStr = "";

   // clean input
   for (let i = 0; i < str.length; i++) {
      const char = str[i];

      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
         cleanStr += char.toLowerCase();
      }
   }

   for (let i = 0; i < Math.ceil(cleanStr.length / 2); i++) {
      j = cleanStr.length - i - 1;
      if (cleanStr[i] !== cleanStr[j]) return false;
   }

   return true;
};

// Do not edit below this line
module.exports = palindromes;

// 0 1 2 3 4 5 6
// r a c e c a r

// j = length - i - 1
// i = 0, j = 6
// i = 6, j = 0

// remove any chars that are not the alphabet
// calculate for loop cap
//    - Math.ceil(arr.length / 2)
// iterate through & compare: