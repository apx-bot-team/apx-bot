//! El módulo 'fs' (File System) permite trabajar con el sistema de archivos de la computadora.
const fs = require("fs");

module.exports = (client, discord) => {
   console.log("-------------------- COMANDOS --------------------");
   // Lee todos los archivos dentro de la carpeta 'Commands'.
   fs.readdirSync("./Commands/").forEach((dir) => {
      // La constante 'commands' lee y almacena cada uno de los archivos que tengan la terminación '.js'.
      const commands = fs.readdirSync(`./Commands/${dir}`).filter((file) => file.endsWith(".js"));

      // Por cada archivo '.js' de 'commands'...
      for (const file of commands) {
         // Requiere cada uno de los comandos que se encuentren en una carpeta (dir) y, luego, desde su respectivo archivo (file).
         const cmd = require(`../Commands/${dir}/${file}`);

         // Comprueba si el comando está correctamente declarado.
         if (cmd.name) {
            console.log(cmd.name);
            // Se añade el comando al cliente (nombre y funcionamiento en su totalidad).
            client.commands.set(cmd.name, cmd);
         } else if (!cmd.name) {
            console.log(`Error: ${cmd.name}`); // Si no se carga correctamente, imprime el error.
         }
      }
   });
   console.log("-------------------- COMANDOS --------------------");
};
