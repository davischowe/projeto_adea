import Cubo from "../model/cubo.js"

describe("testes da classe cubo", ()=>{
    test("teste da area total do cubo", ()=>{
        const aresta = 4
        const areaTotalEsperada = 6 * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularAreaTotal()).toBeCloseTo(areaTotalEsperada,2)
    })
    test("teste do volume do cubo", ()=>{
        const aresta = 4
        const volumeEsperado = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado,2)
    })
})