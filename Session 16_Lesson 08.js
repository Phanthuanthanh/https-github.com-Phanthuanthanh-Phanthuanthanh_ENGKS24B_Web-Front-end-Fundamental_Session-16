let firstNumber = prompt("Mời bạn nhập số thứ nhất:");

let secondNumber = prompt("Mời bạn nhập số thứ hai:");

let thridNumber = prompt("Mời bạn nhập số thứ ba:");

if (firstNumber > secondNumber && secondNumber > thridNumber){
    alert(`Số ${firstNumber} là số lớn nhất`);

}else if(secondNumber > firstNumber && secondNumber > thridNumber){
    alert(`Số ${secondNumber} là số lớn nhất`);

}else if(thridNumber > firstNumber && thridNumber > secondNumber){
    alert(`Số ${thridNumber} là số lớn nhất`);
}

