
<a name="readme-top"></a>

<br />
<div align="center">
  <h3 align="center">Phishing</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#sobre-el-proyecto">Sobre el proyeto</a>
      <ul>
        <li><a href="#built-with">Servicios y programas utilizados</a></li>
      </ul>
    </li>
    <li>
      <a href="#estadisticas-y-proceso-de-creación-del-proyecto">Getting Started</a>
    </li>
    <li><a href="#autores">Autores</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyeto

[![Pagina][https://photos.app.goo.gl/UDz8CgXnbcF8AQtV7]](https://phishing-detector-oqe8.onrender.com/)

Este es un proyecto elaborado para la materia de Inteligencia Artificial de la Universidad Autónoma de Chihuahua impartida por el Doctor Luis Carlos Gonzalez Gurrola.
Nuestra implementación trata de prevenir el phishing mediante el analisis de una URL, esto debido a que hoy en día el phishing es uno de los cyberataques más comunes que existen y esto sigue en aumento, por lo que creemos que es importante alguna herramienta para detenerlo o aminorarlo.
El reto en este proyecto era entrenar un modelo que resolviera nuestra problematica, subirlo en la nube, en nuestro caso Google Cloud, y tener una página en la que pudieramos usarlo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Servicios y programas utilizados

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjazK6LycT7AhVyFkwKHZwPAIcYABABGgJvYQ&ae=2&ohost=www.google.com&cid=CAESa-D295g9L_u5c_j5tbmWXNPKMkFczdDV4u0f4Qc49LJ56EFyODrOnFXmcXEOnVeAr-O_gJtFLRTgTpWtyn1RvbwxovS81mF351U06UGo3bxQ-tiJOBf4IpIHj-L-mAStaxLiI0PtltrYY1YS&sig=AOD64_2dr1I6KBkrKfHGaMPR39o5QCz3GQ&q&adurl&ved=2ahUKEwjWyp2LycT7AhWPlWoFHUghB9IQ0Qx6BAgKEAE](Google Cloud) .- Entrenar el modelo, subir el dataset, subir el modelo, crear el endpoint, crear las credenciales, crear el API y crear las funciones Lambda
* [https://www.kaggle.com/](Kaggle) .- Dataset de entrenamiento de nuestro modelo
* [https://nodejs.org/en/](NodeJS) .- Backend
* [https://expressjs.com/](ExpressJS) .- Framework
* [https://render.com/](Render) .- Hosteo de la página 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Estadisticas y proceso de creación del proyecto

Primero entrenamos nuestro modelo siguiendo el código de Ashish Kumar de Kaggle, el cuál nos arrojó un accuracy del 96% para Logistic Regression y un 97% para MultinomialNB, posteriormente lo entrenamos en Google Cloud con AutoML, dandonos una precisión del 99.8%.

![Graficas](https://photos.app.goo.gl/DCeF4hsNQCDcjyG1A)

Una vez teniendo nuestro modelo entrenado, procedemos a hacer el endpoint para estableces la comunicación a este desde Google Cloud.
![Endpoint](https://photos.app.goo.gl/mX6s4SrgzPvAgJEn9)

Después de esto creamos nuestro API y establecemos la conexión con el servidor desde nuestro local y verificamos que recibimos una respuesta.
![Local](https://photos.app.goo.gl/6oCy3tYVBmcpfUQA7)

Una vez comprobamos que tenemos una conexión con el modelo subimos el repositorio a Render para hostearlo
![Render](https://photos.app.goo.gl/qZtNDAxFnu977r6c6)

Después de esto establecemos la conexión y las credenciales para Google Cloud desde render
![Credenciales]()


<!-- CONTACT -->
## Autores

Daniel Cota - 329701

Dalí Gomez - 32981

<p align="right">(<a href="#readme-top">back to top</a>)</p>
