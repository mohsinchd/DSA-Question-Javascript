const removeElement = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i--, 1);
    }
  }

  console.log(array);
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
