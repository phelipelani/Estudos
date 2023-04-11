const countId = (): number => {
  let id: number = 1;
  const newId = ++id;
  console.log(newId)
  return newId;
};
countId()
