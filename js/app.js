//Creando variable tarjeta de credito.
var card = [4,2,0,1,9,9,0,0,0,0,8,2,5,6,8,8];
//Invirtiendo los valores.
card.reverse();

function isValidCard (card) {

//Creando bucle for para recorrer los elementos del Array
  for (var i = 0; i <= card.length; i += 2){
 //Accediendo a los valores en posicion par    
    var couple = (card[i]*2);
//for anidado para ingresar a los valores de couple    
    for (var k = 0; k <= couple.length; k++){
      console.log(couple[k]);
      //separar los digitos y sumarlos 
    }
  }
//Acceder a los numeros en posicion impar  
  for (var j = 1; j <= card.length; j += 2){
  	var odd = (card[j]);
  }
//sumar los pares e impares
var resultado = (couple + odd); 
if(sum%10===0){
	alert ("Su tarjeta es valida")
}
else{
	alert ("Su tarjeta no es valida"); 
}
}
}
isValidCard(card);