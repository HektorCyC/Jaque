function kNesimo(nums, k) {
    // Ordena los numeros y evalua el array.
    return nums.sort(function(a, b) {
      return b - a;
    })[k - 1];
  }
  
  let array = [7, 2, 5, 9, 8, 3];
  let k = 2;
  console.log(kNesimo(array, k));  

  module.exports = kNesimo;