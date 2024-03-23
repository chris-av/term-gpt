type Color = "black" | "red" | "green" | "white" | "grey" | "reset";

const ansiMap: Record<Color, string> = {
  "black": "30m",
  "red": "31m",
  "green": "32m",
  "white": "37m",
  "grey": "90m",
  "reset": "0m"
} as const;

export const colorize = (question: string, color: Color = "green") => {
  const ansiCode = ansiMap[color];
  return `\x1b[${ansiCode}${question}\x1b[${ansiMap["reset"]}`;
}

