
# Ejercicio: Algoritmo de Luhn.
Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

## Pseudocodigo.
1. Pedir al usuario su numero de tarjeta.
2. Pasar los números a un array.
3. Invertir los números.
4. Identificar los numero que estan en posicion par y los que estan en impar.
5. Multiplicar por dos los numeros en posicion par. 
6. Si el resultado de la multiplicacion anterios dio una cifra de dos digitos,
   suma los dos digitos.
7. El resultado de la suma anterior, sumarlo a los numeros impares.
7. Si el resultado es un numero divisible de 10 la tarjeta es valida.
8. Si no lo es, arrojar un mensajes para decir que es invalido.

## Diagrama de flujo.
A continuación se incluye diagrama de flujo
![diagrama de flujo] (https://www.lucidchart.com/publicSegments/view/0b840469-33e8-41cc-b8a9-25fc3dfb4f4b/image.jpeg);