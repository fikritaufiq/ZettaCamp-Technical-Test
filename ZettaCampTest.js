let numbers = {
    a: 2,
    b: 4
  };
  
  function result(numbers) {
    [numbers.a, numbers.b] = [numbers.b, numbers.a];
    return numbers;
  }
  
  console.log(result(numbers));