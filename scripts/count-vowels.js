const vowelCounter = (input) => {
   let vowelCount = 0;
   input.split('').forEach((i) => {
      i = i.toLowerCase();
      if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
         vowelCount++;
      }
   })
   return vowelCount;
}

console.log(vowelCounter('its me'));