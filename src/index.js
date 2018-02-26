module.exports = function getZerosCount(number, base) {

  let arr = [];
  let num = 2;

  function  simpleВecomposition (x) {
    if (x === '1') {
      arr.push(1);
    }
    if(x % num === 0){
      arr.push(num);
      x = x / num;
      simpleВecomposition(x);
    }else if(x % num !== 0){
      if(!(x <= num)){
        num++;
        simpleВecomposition(x);
      }
    }
  }

  let numbers =[]
  let powCount=1;
  let pow=[]

  function getPow(arr){
    for(let i=0;i<arr.length;i++){
       if (arr[i]==arr[i+1]){
        powCount++;
    }
    if(arr[i]!=arr[i+1] || arr[i+1]===undefined){
        pow.push(powCount)
        numbers.push(arr[i])
        powCount=1;
      }
    }
  }

  simpleВecomposition(base);
  getPow(arr);
  let zeros = 0;

  for(let x=0;x<numbers.length;x++){
    for (let i = numbers[x]; number/i >= 1; i *=numbers[x]){
      zeros += Math.floor(number/i);
    }
    numbers[x]=zeros;
    zeros=0;

  }

  let min = numbers[0];

  for(let x=0;x<numbers.length;x++){
    if (numbers[x] < min) min = numbers[x]/pow[x];
    else  min = numbers[x]/pow[x]
  }
  return(Math.floor(min));
  
}
