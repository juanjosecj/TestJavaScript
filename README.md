# PRUEBA CON JEST EN JAVASCRIPT

## instalar librerias

```
>mkdir TESTJAVASCRIPT
cd TESTJAVASCRIPT
>npm init -y
>npm install jest
```

| Comando                      | Descripción                                 |
| ---------------------------- | ------------------------------------------- |
| mkdir  {nombre del proyecto} | Crea una carpeta para el proyecto           |
| cd {nombre del proyecto}     | Se usa para ingresar a la raiz del proyecto |
| npm init -y                  | Crea el paquete .json                       |
| npm install jest             | Instala la libreria para la prueba          |

## Crear un archivo para probar
### example.js
```
function suma(a,b){
    return a + b;
}
module.export = suma;
```

## **Crear un archivo de prueba**
Al momento de hacer una prueba usando **test** este tiene que tener el mismo nombre cuando se esta realizando la prueba

### example.test.js
```
const suma = require('./suma');

test('la función suma 1 + 2 debe dar 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('la función suma 5 + 10 debe dar 5', () => {
  expect(suma(5, 10)).toBe(15);
});
```

