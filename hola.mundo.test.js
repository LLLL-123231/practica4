// index.test.js
const holaMundo = require('./hola.mundo');

test('debe de retornar Hola Mundo', () => {
    expect(holaMundo()).toBe('Hola Mundo');
});
