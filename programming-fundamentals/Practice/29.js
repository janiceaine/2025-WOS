function missingValue(unorderedNums) {
  unorderedNums.sort((a, b) => a - b);

  for (let i = 0; i < unorderedNums.length - 1; i++) {
    if (unorderedNums[i + 1] !== unorderedNums[i] + 1){
        return unorderedNums[i] + 1;
    } 
  }
  return null;
}
