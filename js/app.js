//tarjeta de credito.
card("4201990000825688");

function card (num) {
  let newArray = num.split('').reverse();
  let couple = [];
  let saveHigher = [];
  let saveLess = [];
//Accediendo a los elementos en posición par y multiplicarlos.
  for (let i = 1; i <= newArray.length; i += 2){
    newArray[i] = parseInt(newArray[i]*2);
    couple.push(newArray[i]);
    couple.map(function(couple){
      if (couple > 9) {
        saveHigher.push(couple);
      } else {
        saveLess.push(couple);
      }
    });
    // let divide = Array.from(saveHigher);
    console.log(saveHigher);

  }

  let odd = [];
  //Accediendo a los elementos en posición impar y sumarlos    
  for (let k = 0; k < newArray.length; k += 2){
    newArray[k] = parseInt(newArray[k]);
    let oddSum =+ odd.push(newArray[k]);
    //console.log(odd)
    
  }
  
//Suma de los elementos pares e impares 
//   var totalAmount = ;

}


 

