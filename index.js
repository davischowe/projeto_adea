import Cubo from "./model/cubo.js";

let aresta = 7

const cubo1 = new Cubo(aresta)

let areaTotal = cubo1.calcularAreaTotal()
let volume = cubo1.calcularVolume()

console.log('a area total do cubo um é:', areaTotal)
console.log('o Volume do cubo um é : ', volume)

console.log('<-------------------------------->')


let aresta2 = 8
const cubo2 = new Cubo(aresta2)

 areaTotal = cubo2.calcularAreaTotal()
 volume = cubo2.calcularVolume()

 console.log('a area total do cubo dois é:', areaTotal)
console.log('o Volume do cubo dois é : ', volume)





// teste