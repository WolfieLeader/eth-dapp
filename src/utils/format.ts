export const compactBigNumber = (number: number): string => {
  const formatter = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  });
  return formatter.format(number);
};
