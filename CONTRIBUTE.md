## Para empezar...
Gracias por considerar contribuir a este proyecto. Cabe destacar que no siempre necesitas escribir código para contribuir. Podes hacerlo de las siguientes formas:

### En las sección "Issues"

- ### *Reportar un bug 🪳*
Antes de enviar un nuevo reporte verifique que dicho bug no haya sido reportado o resuelto. De lo contrario, podes crear un **New Issue** utilizando el template **Bug report**. Incluya toda la información que tenga para una mejor solución por parte de los desarrolladores.

- ### *Proponer un nuevo feature 💡*
Para proponer nuevos features, podes crear un **New Issue** utilizando el template **Feature request** describiendo detalladamente dicho feature.

- ### *Solicitar una mejora a un feature existente 🦾*
Para solicitar mejoras, podes crear un **New Issue** utilizando el template **Update request** describiendo dicha mejora.
 
- ### *Crear un pull request 🚀*
Si queres contribuir a este proyecto como desarrollador, es importante que [forkees el repositorio original](https://github.com/apx-bot-team/apx-bot/fork) y [crees un nuevo pull request](https://github.com/apx-bot-team/apx-bot/compare).

#### Configuración necesaria 🔧
Para instalar las dependencias necesarias, dirigirse al directorio del proyecto donde se encuentra el archivo `package.json` y en la terminal ejecutar el comando ```npm install``` o ```yarn install```.

```
"dependencies": {
 "discord.js": "^13.3.1",
 "dotenv": "^10.0.0",
 "nodemon": "^2.0.14"
}
```

Una vez instaladas las dependencias, tener encuenta las siguientes indicaciones:
- Seguir los formatos/convenciones previamente establecidos.
- Añadir los nuevos features en los directorios correspondientes.
- Crear un archivo **.env** donde va a almacenarse el `DSTOKEN` y el `PREFIX`. Dicho `DSTOKEN` es necesario para despertar al bot,*comunicate con alguno de los contribuyentes*, los mismos te brindaran el dato necesario.
- Por último, desde la terminal (dando por hecho que estas en el directorio del proyecto) ejecutar el comando `npm run dev` o `yarn dev` para despertar al bot (o manualmente usando `nodemon node index.js`).

Habiendo finalizado el desarrollo y testeo del código a contribuir, commitearlo **usando el formato de commits previamente establecido** al repositorio forkeado y **crear el pull request** al repositorio original.

- ### Responder a un **Issue** o **Pull Request**.

Es importante que cada Issue tenga su Label respectivo. De esta forma se mantiene un buen orden y registro de los diferentes Issues.
