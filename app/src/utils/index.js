export const formatFieldName = (string) => {
  return string
    .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
    .trim()
    .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first letter
};
