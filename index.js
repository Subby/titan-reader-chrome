const minSplitLength = 2;
export const processText = (text) => {
  let processedText = '';
  const splitText = text.split(' ');
  for(const word of splitText) {
       if(word.length > minSplitLength) {
        const wordHalved = word.length / 2;
        const wordBolded = '<span class="bolded">' + word.substring(0, wordHalved) + '</span>';
        const wordNonBolded = '<span class="non-bolded">' + word.substring(wordHalved) + '</span>';
        processedText = processedText  + wordBolded + wordNonBolded + ' ';
    } else {
        const wordBolded = '<span class="bolded">' + word + '</span>' + ' ';
        processedText = processedText + wordBolded;
    }
  }
  return processedText;
};
