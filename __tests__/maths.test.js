import { sumar, restar, multiplicar, dividir } from '../maths';

describe('Calculos matemáticos', () => {
  test('Prueba de suma', () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test('Prueba de multiplicación', () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
  test('Prueba de resta', () => {
    expect(restar(3, 2)).toBe(1);
  });
  test('Prueba de división', () => {
    expect(dividir(4, 2)).toBe(2);
  });
});
