
# Ejercicio: Algoritmo de Luhn.
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

## Pseudocodigo.
1. Pedir al usuario su numero de tarjeta.
2. Pasar los números a un array.
3. Invertir los números.
4. Multiplicar por dos los numeros en posicion par. 
5. Si el resultado de la suma anterios dio una cifra de dos digitos,
   sumar nuevamente los dos digitos.
6. El resultado de la suma anterior, sumarlo a los numeros impares.
7. Si el reltado es un numero divisible de 10 la tarjeta es valida.
8. Si no lo es, arrojar un mensajes para decir que es invalido.

## Diagrama de flujo.
A continuación se incluye diagrama de flujo
![diagrama de flujo] (https://www.lucidchart.com/documents/edit/85449269-bc3f-45b6-938b-40ff68fc1486)