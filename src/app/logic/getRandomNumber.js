export const randomNumber = () => {
  const randomNumber = parseInt((Math.random() * 10).toFixed(0));
  return randomNumber == 10 ? 9 : randomNumber;
};
