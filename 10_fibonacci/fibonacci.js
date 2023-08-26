const fibonacci = function(fibIndex) {
   let pre = 0,
      curr = 1,
      sum = 0;
   fibIndex = Number(fibIndex);
   
   if (fibIndex < 0)
      return 'OOPS';
   else if (fibIndex === 0)
      return 0;
   else if (fibIndex === 1)
      return 1;

   for (let i = 2; i <= fibIndex; i++) {
      sum = pre + curr;
      pre = curr;
      curr = sum;
   }

   return sum;
};

// Do not edit below this line
module.exports = fibonacci;