# Proyecto: Información Dinámica sobre Gatos

## Introducción

Este proyecto es un ejemplo de cómo utilizar HTML, CSS y JavaScript para mostrar información dinámica sobre gatos. Los datos se obtienen desde un archivo JSON a través de una solicitud HTTP, se procesan en JavaScript, y se muestran en una página web.

## Tabla de Contenidos

- [Estructura del Código](#estructura-del-código)
  - [HTML](#html)
  - [JavaScript](#javascript)
    - [Selección de Elementos del DOM](#selección-de-elementos-del-dom)
    - [Inicialización de Variables](#inicialización-de-variables)
    - [Fetch para Obtener el JSON](#fetch-para-obtener-el-json)
    - [Procesamiento de Datos](#procesamiento-de-datos)
    - [Inserción de Datos en el DOM](#inserción-de-datos-en-el-dom)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Dependencias](#dependencias)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Estructura del Código

### HTML

El documento HTML cuenta con una estructura básica que incluye los siguientes elementos:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8"/>
  <title>JSON: Task 1</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <h1>Cat Information</h1>
  <section class="preview"></section>
  <script>
    // JavaScript code here
  </script>
</body>
</html>
```

- **Doctype y etiqueta html:** Definen el tipo de documento y el lenguaje.
- **Head:**
  - `<meta charset="utf-8"/>`: Especifica la codificación de caracteres.
  - `<title>`: Define el título de la página.
  - `<link>`: Vincula el documento HTML con una hoja de estilo CSS externa.
- **Body:**
  - `<h1>`: Encabezado principal de la página.
  - `<section class="preview">`: Contenedor donde se mostrará la información de los gatos.
  - `<script>`: Contiene el código JavaScript que maneja la lógica de la aplicación.

### JavaScript

#### Selección de Elementos del DOM

```javascript
const section = document.querySelector('section');
```
- Selecciona el elemento `<section>` del DOM para su posterior manipulación.

#### Inicialización de Variables

```javascript
let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called ';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';
```
- Crea dos elementos `<p>` para mostrar información.
- Inicializa variables para almacenar información sobre madres gatas y gatitos.
- Define la URL de donde se obtendrán los datos JSON.

#### Fetch para Obtener el JSON

```javascript
fetch(requestURL)
  .then(response => response.text())
  .then(text => {
      console.log("Data fetched:", text);
      displayCatInfo(text);
  })
  .catch(error => console.error("Error fetching data:", error));
```
- Utiliza la API Fetch para obtener los datos del archivo JSON.
- Maneja la respuesta, convierte los datos a texto y los pasa a la función `displayCatInfo`.
- Implementa manejo de errores básico.

#### Procesamiento de Datos

```javascript
function displayCatInfo(catString) {
    console.log("Processing data...");
    let total = 0;
    let male = 0;
    let female = 0;
    const cats = JSON.parse(catString);

    // Procesamiento de datos aquí
}
```
- Parsea el string JSON a un objeto JavaScript.
- Inicializa contadores para el total de gatitos y su género.
- Itera sobre los datos para contar gatitos y construir la información de las madres gatas.

#### Inserción de Datos en el DOM

```javascript
para1.textContent = motherInfo;
para2.textContent = kittenInfo;
section.appendChild(para1);
section.appendChild(para2);
```
- Asigna el texto procesado a los elementos `<p>` creados anteriormente.
- Añade estos elementos al `<section>` en el DOM.

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de tener un servidor web local configurado (por ejemplo, usando extensiones de VS Code o herramientas como XAMPP).
3. Coloca los archivos en el directorio raíz de tu servidor web.

## Uso

1. Abre el archivo HTML en tu navegador a través del servidor web local.
2. La página cargará automáticamente y mostrará la información de los gatos.

## Características

- Obtención dinámica de datos desde un archivo JSON externo.
- Procesamiento de datos para mostrar información resumida.
- Visualización de nombres de madres gatas y estadísticas de gatitos.

## Dependencias

- Este proyecto no tiene dependencias externas. Utiliza JavaScript vanilla y la API Fetch incorporada en navegadores modernos.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de hacer un pull request.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

