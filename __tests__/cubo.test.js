import Cubo from "../model/Cubo.js"

describe("Testes da classe cubo", () => {
    test("Teste da área total do cubo", () => {
        const aresta = 4
        const areaTotalEsperada = 6 * (aresta * aresta)
        const cubo = new Cubo(aresta)

        expect(cubo.calcularArea()).toBeCloseTo(areaTotalEsperada, 2)
    })

    test('Teste do volume do cubo', () => {
        const aresta = 4
        const volumeEsperado = aresta * aresta * aresta
        const cubo = new Cubo(aresta)

        expect(cubo.calcularVolume()).toBeCloseTo(volumeEsperado, 2)
    })
})
