const count = (count = 0, action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return (count += 1);
    default:
      return count;
  }
};

export default count;
