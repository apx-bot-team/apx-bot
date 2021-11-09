//! Configuración
require("dotenv").config();

//! Prefijo para llamar al bot.
const prefix = process.env.PREFIX;

module.exports = async (client, discord, message) => {
   //! Analizador de mensajes
   // Si el mensaje es de tipo mensaje directo, detiene el proceso.
   if (message.channel.type == "dm") return;
   // Si el mensaje proviene de otro bot, detiene el proceso para prevenir bucles infinitos.
   if (message.author.bot) return;
   // Si el contenido del mensaje no empieza con el prefijo establecido, detiene el proceso.
   if (!message.content.startsWith(prefix)) return;

   //! Analizador de comandos
   // Separa el prefijo del contenido del mensaje y lo asigna a 'commandBody'.
   const commandBody = message.content.slice(prefix.length);
   // Toma el contenido de 'commandBody'. Donde hay espacios lo divide en subcadenas. Crea una matriz con el comando y cualquier argumento incluído.
   const args = commandBody.split(" ");
   // Elimina el primer elemento de la matriz (comando ingresado). Convierte el comando a minúsculas y lo asigna a 'command'
   const cmd = args.shift().toLowerCase();

   // Obtiene el nombre del comando.
   const command = client.commands.get(cmd); // Ejecuta el comando original según escribamos sus alias.

   // Si se ingresa un comando no existente, el bot informará.
   if (command) {
      command.execute(message, args, client, discord);
   } else if (!command) {
      return message.channel.send("Comando no existente ❌");
   }
};
