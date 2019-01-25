const isPalindrome = (input) => {
   input = input.toLowerCase();

   const revInput = input.split('').map((i) => {
      return i;
   }).reverse().join('')

   return input === revInput ? true : false;
}

console.log(isPalindrome('racecar'))