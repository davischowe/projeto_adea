
import Cubo from "../model/cubo.js"

describe("testes da classe cubo", ()=>{
    test("teste da area total do cubo", ()=>{
        const aresta = 4
        const areaTotalEsperada = 6 * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })
    test("teste do volume do cubo", ()=>{

import Cubo from "../model/Cubo.js"

describe("Testes da classe cubo", () => {
    test("Teste da área total do cubo", () => {
        const aresta = 4
        const areaTotalEsperada = 6 * (aresta * aresta)
        const cubo = new Cubo(aresta)

        expect(cubo.calcularArea()).toBeCloseTo(areaTotalEsperada, 2)
    })

    test('Teste do volume do cubo', () => {

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    })
})

