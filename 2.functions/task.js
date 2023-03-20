function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
    }
    let avg = (sum/arr.length).toFixed(2);
    return { min: min, max: max, avg: Number(avg) };
  }

function summElementsWorker(...arr) {
  let sum = 0;
  if (arr.length == 0) {
    return sum;
  } else {
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      }
      return sum;
  }
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  if (arr.length == 0) {
    return difference;
  } else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } 
    if (arr[i] < min) {
      min = arr[i];
    }
    difference = max - min;
    }
    return difference;
}
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
let sumOddElement = 0;
let difference = 0;
if (arr.length == 0) {
  return difference;
} else {
for (let i = 0; i < arr.length; i++) {
  if (arr[i]%2 == 0) {
    sumEvenElement += arr[i];
  } else {
    sumOddElement += arr[i];
  }
  difference = sumEvenElement - sumOddElement;
}
return difference;
}
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;
  if (arr.length == 0) {
    return avg;
  } else {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
    avg = sumEvenElement/countEvenElement;
  }
  return avg;
  }
}


function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity;
for (let i = 0; i < arrOfArr.length; i++) {
  const result = func(...arrOfArr[i]);
 if (result > maxWorkerResult) {
  maxWorkerResult = result;
} 
}
return maxWorkerResult;
}
