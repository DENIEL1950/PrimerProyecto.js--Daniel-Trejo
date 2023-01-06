//Primer ejercicios con programacion funcional
console.log("Hola Mundo -_-");

const numeros = [10,20,23,9,11,19,33,30,60,90];

//Usando programacion estruturada, imprima los elementos del array

//for(i=0; i<=numeros; i++)
for(var i=0; i<numeros; i++)
{
    console.log("El array es");
    console.log(numeros[i]);
}

console.log('\nElementos del array forma v1:')    //Salto de línea

//imrprimir el vector usando programacion funcional
console.log("Programcion funcional");
numeros.forEach(x =>{
    console.log(x);
})

console.log('\nElementos del array forma v2:')    //Salto de línea
numeros.forEach(function(x){
    console.log(x)}
)

//imprimir los elemtos pares del vector
console.log('\nElementos pares del vector');
for( k=0; k<numeros.length; k++)
{
    if(numeros[k]%2==0)
        console.log(numeros[k]);
}

console.log('\nElementos pares del vector v2');
//filtaer: filtra aquellos ekekmtos que cumplan con una condición
const pares = numeros.filter(item =>{
    return item%2==0}
)
console.log(pares);
const paresv3 = numeros.filter( item => item%2==0);
console.log('\nPares vercion simpleficada', paresv3)

//Imprima los elemtos impares del vector
const impares = numeros.filter( item =>{
    return item % 2 !==0}
)
console.log('\nArray imparares:')    //Salto de línea
console.log(impares);     //Impreme los numeros impares

//Diseñe la funcion que reciba un vector de enteros y devuelva 
//solo los numeros multiplos de 3
const multiplosdeTres = function(arrayNumeros){
    return arrayNumeros.filter( item =>{
        return item%3==0;
    })
}

//llamo a la funcion
console.log(multiplosdeTres(numeros));
const vector = [3,9,12,15,21,58];
console.log('\nMultiplos de 3:', multiplosdeTres(vector));

//Declaro un vector de nombres de personas. A continuacion, imprimalos en pantalla
console.log('\nVector de nombres:')
protas=["Daniel", "Carlos", "Pedro", "Ivan", "Walter", "Caceres"]
protas.forEach(item => console.log(item))

console.log("\nActividad en Clase \nSeparar la siguiente palabra");
/*
Se tiene un conjunto de palabras, y cada palabra esta separado por un espacio en blanco.
Se pide, utilizando la funcion split, imprimir cada palabra por separado. Por ejemplo:
Bienvanidos a la PUCE sede Esmeraldas
resultado esperado:
-Bienvenidos
-a
-la
-PUCE
-sede
-Esmeraldas
*/
const palabra="Bienvanidos a la PUCE sede Esmeraldas"
console.log(palabra);
console.log('\n')    //Salto de línea
// Dividiendo la cadena "Palabra" usando el carácter espacio
dividir = palabra.split(' ').forEach(item => console.log(item));
console.log('\n')
