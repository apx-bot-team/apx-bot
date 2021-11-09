module.exports = {
   name: "bot",
   description: "Información relacionada al bot.",
   async execute(message, arg, client, discord) {
      const embedBotInfo = new discord.MessageEmbed()
         .setColor("#F7C74C")
         .setTitle("Información del bot")
         .setAuthor(client.user.username)
         .setDescription(
            `${client.user.username} es un bot de Discord creado en Node.js usando Discord.js.`
         )
         .addField(
            "Creators",
            "[Tobias Facello](https://github.com/tobiasfacello)\n [Marcos Reuquen](https://github.com/Marcosreuquen)\n [Alexis Muñoz](https://github.com/alexismunoz1)",
            true
         )
         .addFields(
            { name: "Library", value: "[Discord.js](https://discord.js.org/#/)", inline: true },
            { name: "Version", value: "1.0.0", inline: true }
         )
         .addField("Repository ", "https://github.com/apx-bot-team/apx-bot", true)
         .setThumbnail("https://i.ibb.co/mqzvmTD/logo-bot-apx-negro.png");
      message.reply({ embeds: [embedBotInfo] });
   },
};
