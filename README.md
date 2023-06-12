# Morgana Front Challenge
_Interactive mortgage calculator._

_Morgana-front-challenge project was created with vanilla Javascript, HTML and CSS from scratch._


## Deployment 🚀
Follow this [link to the project deployment](https://morgana.purplerose.dev/).


## Starting 🚀
These instructions will allow you to obtain a copy of the project on your local machine.

### Pre-requirements 📋

- Git
- Node.js
- A package manager like Yarn or Npm or Pnpm

### Installation 🔧
To start the application execute the following instructions:

```
git clone git@github.com:rrortegaa/morgana-front-challenge.git
```
or 
```
git clone https://github.com/rrortegaa/morgana-front-challenge.git
```

Clones the repository on your local machine, then access the directory and execute:

```
npm install
```

Installs and updates project dependencies. Finally, run:

```
npm run dev
```

The app runs in [localhost:5173](http://localhost:5173/)


## Built with 🛠️

* [BEM CSS](http://getbem.com/) - Methodology to create reusable components and code sharing in front-end development
* [Git](https://git-scm.com/) - Free and open source distributed version control system
* [Node](https://nodejs.org/en/) - JavaScript runtime environment
* [Vite](https://vitejs.dev/) - A module bundler for modern JavaScript applications


## Authors ✒️

* **Rosa Ortega Aburto** - [rrortegaa](https://github.com/rrortegaa) - [purplerose](https://purplerose.dev)


⭐️ ⭐️ ⭐️ ⭐️ ⭐️


# front_challege

Prueba tecnica para puesto Front End.

Realizar el simulador que se encuentra en el portal de morgana.mx las reglas de dicho simulador son las siguientes.

-------------------------------------------- REGLAS ---------------------------------------------------------------

1. Precio del inmueble minimo de 500,000.
2. Enganche de 10% al 90% (este se debe de calcular y mostrar en el input, de igual manera si ingresamos una cantidad debe de calcular el porcentaje) 
3. El plazo seleccionado por default es de 15 años.
4. Tasa mostrada del 10.5% pero para calculos se usara el valor de 0.0098.


----------------------------------- FORMULA PARA PAGO MENSUAL -----------------------------------------------------

Pago mensual = (monto_credito * tasa_mensual) / 1 ((1 + tasa_mensual) ^ -plazo_meses)

monto_credito = monto del credito pedido; 


tasa_mensual = valor proporcionado en las reglas;


plazo_meses = numero de meses del periodo del prestamo (la cantidad se usa en negativos para la formula);


-------------------------------------- CRITERIOS DE ACEPTACION ----------------------------------------------------

- El diseño debera de ser igual al simulador que se muestra en el portal de morgana.
- Debera de tener las mismas validaciones y comportamiento.
- Responsivo solo para mobile.
- Los datos obtenidos se deberan de mostrar en una pagina nueva.
- La pagina nueva es con diseño libre, tener en cuenta la linea de diseño de morgana
- Se tomara en cuenta el tiempo de desarrollo.
- Las tecnologias a usar son HTML, CSS Y JS.


Por ultimo realizar una rama nueva y subir tus cambios a este repositorio.






