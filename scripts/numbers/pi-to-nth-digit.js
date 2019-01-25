const piToNth = (num) => {
   if (num > 0 && num <= 1000) {
      return Math.PI.toFixed(num);
   } else {
      return 'Please input a number between 1 - 1000';
   }
}

console.log(piToNth(10));