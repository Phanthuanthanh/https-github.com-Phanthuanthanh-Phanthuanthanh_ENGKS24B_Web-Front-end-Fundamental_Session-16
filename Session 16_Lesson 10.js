let firstNumber = Number(prompt("Mời bạn nhập số bất kỳ thứ nhất:"));

let secondNumber =  Number(prompt("Mời bạn nhập số bất kỳ thứ hai:"));

let result = Math.round(Math.random()*(secondNumber-firstNumber) + firstNumber);

alert(`Số bất kì từ ${firstNumber} đến ${secondNumber} là ${result}`);
