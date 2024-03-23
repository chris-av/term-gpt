export const clearScreen = (): void => {
  process.stdout.write("\x1b[2J\x1b[0;0H");
}
