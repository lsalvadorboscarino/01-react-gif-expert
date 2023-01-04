import { getByRole, render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {
    const title = 'Esto es un título'
    const url = 'url.com'

    test('Debe corresponder con el snapshoot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />)

        //expect(screen.getByRole('img').src).toContain(url);
        const { src, alt } = screen.getByRole('img')
        expect(src).toContain(url)
        expect(alt).toBe(title)
    })

    test('debe de mostra el título en el componente', () => {
        render(<GifItem title={title} url={url} />)

        expect(screen.getByText(title)).toBeTruthy()
    })
})