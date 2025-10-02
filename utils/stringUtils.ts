export const firstLetterUppercase = (word: string) => {
  const lowercaseWord = word.toLowerCase();
  return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
}; 