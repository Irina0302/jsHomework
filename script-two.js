

// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.
<
var SimpleNumber = function () {
   var min= prompt('Введите первое число');
   var max =prompt('Введите второе число');
    for(i = min;i<=max;i++ ){
   if(i==2||i==3||i==5||i==7||i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
      console.log(i);
  }
}
console.log(i);
}
SimpleNumber()

