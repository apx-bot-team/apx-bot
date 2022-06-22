module.exports = {
   name: "clear",
   aliases: ["borrar", "limpiar", "delete", "del"],
   description: "Elimina la cantidad de mensajes que pasemos como argumento.",
   async execute(message, arg, client, discord) {
      if (!arg[0]) {
         return message.reply("Ingrese la cantidad de mensajes que desea borrar.");
      }
      if (isNaN(arg[0])) {
         return message.reply("Por favor, ingresa un número.");
      }
      if (arg[0] < 1) {
         return message.reply("Ingrese una cantidad mayor a 1");
      }
      if (arg[0] > 100) {
         return message.reply("Ingrese una cantidad menor a 100");
      }

      await message.channel.messages.fetch({ limit: arg[0] }).then((messages) => {
         message.channel.bulkDelete(messages);
      });
   },
};
// TETS