import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'Azul'

    test('debe de mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...')).toBeTruthy()
    })

    test('debe de mostrar items cuando se cargan las imágenes useFetchGif', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'HOLA MUNDO',
                url: 'https://localhost/maria.jpg'
            },
            {
                id: 'DEF',
                title: 'HOLA MUNDO',
                url: 'https://localhost/jose.jpg'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2)
    })
})