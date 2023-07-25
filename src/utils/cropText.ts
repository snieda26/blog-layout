export const cropText = (text: string, charCount: number): string =>
  text.length > charCount ? text.substring(0, charCount).concat("...") : text;
