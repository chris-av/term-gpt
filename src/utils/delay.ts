export const delay = (val: number) => {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(true), val);
  });
}

