import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en AddCategory', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);

        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: 'Azul' } })

        expect(input.value).toBe('Azul')
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Amarillo'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        //Forzamos los eventos de insertar el valor y enviar el formulario
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)

        expect(input.value).toBe('')

        //Saber si se ha hecho la llamada a la función
        expect(onNewCategory).toHaveBeenCalled()
        //Saber cuantas veces se ha llamado la función
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        //Saber que fue llamada con el valor del input que hemos especificado
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('no debe de llamar el onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />)

        const form = screen.getByRole('form')

        //Forzamos los eventos de enviar el formulario
        fireEvent.submit(form)

        //No fue llamado ninguna vez
        //OPC1
        expect(onNewCategory).toHaveBeenCalledTimes(0)
        //OPC2
        expect(onNewCategory).not.toHaveBeenCalled()
    })
})