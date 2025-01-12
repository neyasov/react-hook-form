export default (input: string): string[] => {
  const result: string[] = [];

  input.replace(
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    (
      match: string,
      mathNumber: string,
      mathQuote: string,
      originalString: string,
    ): any => {
      result.push(
        mathQuote
          ? originalString.replace(/\\(\\)?/g, '$1')
          : mathNumber || match,
      );
    },
  );

  return result;
};
