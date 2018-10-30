//tarjeta de credito.
card("4201990000825688");

function card (num) {
  var newArr = num.split('').reverse();
  var couple = [];
//Accediendo a los elementos en posición par y multiplicarlos.
  for (var i = 1; i <= newArr.length; i += 2){
    newArr[i] = parseInt(newArr[i]*2);
    couple.push(newArr[i]);
    console.log(couple)

  }

  var odd = [];
  //Accediendo a los elementos en posición impar y sumarlos    
  for (var k = 0; k < newArr.length; k += 2){
    newArr[k] = parseInt(newArr[k]);
    var oddSum =+ odd.push(newArr[k]);
    console.log(odd)
    
  }
  
//Suma de los elementos pares e impares 
//   var totalAmount = ;

}


 

