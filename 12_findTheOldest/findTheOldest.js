const findTheOldest = function(arr) {
   // returns an object
   return arr
      .reduce((oldest, currPerson) => {
         let currentYear = (new Date()).getFullYear();
         let currPersonAge = 0;
         let prevPersonAge = 0;
         
         // calc age of currPerson
         if (!currPerson.yearOfDeath) { // check if currPerson still alive
            currPersonAge = currentYear - currPerson.yearOfBirth;
         } else {
            currPersonAge = currPerson.yearOfDeath - currPerson.yearOfBirth;
         }

         // calc age of prevPerson
         if (!oldest.yearOfDeath) { // check if prevPerson still alive
            prevPersonAge = currentYear - oldest.yearOfBirth;
         } else {
            prevPersonAge = oldest.yearOfDeath - oldest.yearOfBirth;
         }

         return currPersonAge > prevPersonAge ? currPerson : oldest;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
