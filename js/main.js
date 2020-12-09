  var zucchine =[
    {
      nome: "zucchina di faenza",
      peso: 12,
      lunghezza: 10
    },
    {
      nome: "zucchina di firenze",
      peso: 15,
      lunghezza: 10
    },
    {
      nome: "zucchina di milano",
      peso: 17,
      lunghezza: 10
    },
    {
      nome: "zucchina di genova",
      peso: 12,
      lunghezza: 10
    },
    {
      nome: "zucchina di parma",
      peso: 22,
      lunghezza: 10
    }
  ]
var somma = 0;
 for (var key in zucchine){
   var pesoZucchine = zucchine[key].peso;
   somma = somma + pesoZucchine;

 }
 console.log(somma);


function split(string){
  return string.split("")
}
function reverse(array) {
   return array.reverse();
}
function join(array) {
   return array.join()
}
function reverseString(string) {
  return join(reverse(split(string)));
}
console.log(reverseString("ciao"))
