//! El módulo 'fs' (File System) permite trabajar con el sistema de archivos de la computadora.
const fs = require("fs");

module.exports = (client, discord) => {
   console.log("-------------------- EVENTOS --------------------");
   // Lee todos los archivos dentro de la carpeta 'Events'.
   fs.readdirSync("./Events/").forEach((dir) => {
      // La constante 'events' lee y almacena cada uno de los archivos que tengan la terminación '.js'.
      const events = fs.readdirSync(`./Events/${dir}`).filter((file) => file.endsWith(".js"));

      // Por cada archivo '.js' de 'events'...
      for (const file of events) {
         try {
            // Requiere cada uno de los eventos que se encuentren en una carpeta (dir) y, luego, desde su respectivo archivo (file).
            let evn = require(`../Events/${dir}/${file}`);

            // Comprueba 'evn' es un evento y, además, no es de tipo 'string'.
            if (evn.event && typeof evn.event !== "string") {
               // Imprime en consola en caso de haber un error en el archivo.
               console.log(`Error: ${file}`);
               continue;
            }
            // Establece o modifica el evento (si el archivo del evento es 'messageCreate.js' lo modifica a 'messageCreate' como evento).
            evn.event = evn.event || file.replace(".js", "");
            // Carga el evento sobre el cliente.
            client.on(evn.event, evn.bind(null, client, discord));
            console.log(`Evento cargado: ${file}`);
            // Atrapa el error y lo imprime en consola.
         } catch (error) {
            console.log("Error en la carga de eventos");
            console.log(error);
         }
      }
   });
   console.log("-------------------- EVENTOS --------------------");
};
