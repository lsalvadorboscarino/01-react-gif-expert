import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => {
    test('debe de añadir una categoría al enviar el formulario', () => {
        const inputValue = 'Amarillo'

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        const category = screen.getByText('Amarillo')

        expect(category).toBeTruthy()
    })

    test('no debe de añadir una categoría si ya existe', () => {
        const inputValue = 'Amarillo'

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        const category = screen.getAllByText('Amarillo')

        expect(category.length).toBe(1)
    })

})