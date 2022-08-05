const removeDuplicates = (array) => {
  const uniqueElements = new Set();

  array.forEach((num) => {
    uniqueElements.add(num);
  });

  return [...uniqueElements];
};

const uniqueElements = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(uniqueElements);
