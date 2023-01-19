# CoderHouse_EntregaFinal_JS

<pre> Paso a paso en el repositorio para no olvidar </pre>

### crea un nuevo repositorio en la línea de comando

- echo "# CoderHouse_EntregaFinal_JS" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin - git@- github.com:duvabh/CoderHouse_EntregaFinal_JS.- git
- git push -u origin main

### empujar un repositorio existente desde la línea de comando

- git remote add origin - git@- github.com:duvabh/CoderHouse_EntregaFinal_JS.- git
- git branch -M main
- git push -u origin main

### Instalacion SASS

- Instala nodejs
- Instala npm
- Inicia el npm
  `npm init`
- Instala el nodemon:
  `npm install -D node-sass nodemon`
- Crea la carpeta SCSS y CSS y sus archivos respectivos.
- Edita el package.json e inserta los lineas.
  ```
  "build-css":
  "node-sass --include-path scss scss/prueba.scss css/pruebacss.css",
  "watch-css": "nodemon -e scss -x \"npm run build-css\"" ~~~
  ```
- Compila con:
  `npm run watch-css`
