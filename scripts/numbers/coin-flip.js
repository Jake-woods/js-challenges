const coinFlipper = (input) => {
   let flip = {
      head: 0,
      tail: 0
   };

   for (let i = 1; i <= input; i++) {
      const randomNum = Math.floor(Math.random() * 2) + 1;

      if (randomNum === 1) {
         flip.head++;
      } else {
         flip.tail++;
      }
   }

   return `Heads: ${flip.head} : Tails ${flip.tail}`
}

console.log(coinFlipper(10))