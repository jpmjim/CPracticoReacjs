# Curso Práctico de Reactjs
React es una libreria de JS para desarrollar interfazes de usurario donde solo nos vamos a enfocar de la vista dentro del modelo MCV "modelo vista controlador". Resuelve las vistas de nuestra aplicación arquitectura basada en componentes. Apoyado por facebook en el desarrollo.

JSX
Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

Virual DOM
Es una copia del DOM real y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app, como lo comente antes esto es por que se compara el Virtual DOM con el DOM Real encontrando los cambios.

Ciclo de vida
Este concepto es ampliamente conocido en la programación, en este curso vamos a conocer cual es el ciclo de vida de los elementos que vamos a crear en react desde que nace, se combina hasta que muere.

Estado 
Son los datos que están dentro del componente. Estos pueden ser actualizados usando diferentes métodos. Los estados son muy importantes en React, pues son encargados de actualizarse cada vez que se cambian, afectando a los demás nodos del virtual DOM.

Eventos 
Los componentes, pueden configurarse con eventos como onclick para responder antes ciertas interacciones con el usuario, tal como los haríamos en Html

React Hooks 
Es otra manera de escribir los componentes con estado, si usar clases. No se pretenden reemplazar, sin embargo, usar funciones para los componentes pueden facilitar el entendimiento de la aplicación.

Instalaciónes
Dependencias producción
npm react react-dom
npm i @babel/core @babel/preset-env @babel/preset-react 
npm i webpack webpack-cli webpack-dev-server
npm i babel-loader html-loader html-webpack-plugin

Componentes para estilos "sass" "css" en dependencias de desarrollo
npm i mini-css-extract-plugin css-loader style-loader sass sass-loader -D


