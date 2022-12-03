export const formatNumber = (number: number | string, compact = false, max = 2): string => {
  if (number === undefined || (typeof number === "string" && isNaN(Number(number)))) return "0";
  const formatter = new Intl.NumberFormat("en", {
    notation: compact ? "compact" : undefined,
    maximumFractionDigits: max,
  });
  return formatter.format(Number(number));
};

export const titleFormat = (title: string): string => {
  if (title.includes("-")) {
    return title
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
  return title
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
