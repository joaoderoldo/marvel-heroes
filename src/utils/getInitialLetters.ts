const getInitialLetters = (word: string): string => {
  const splitedWord = word.trim().split(" ");

  return splitedWord
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
};

export default getInitialLetters;
