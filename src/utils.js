export const maxValue = (values) =>
  values.reduce((acc, curr) => {
    if (Number(curr) > acc) return Number(curr);
    return acc;
  }, 0);
