module.exports = {
   name: "bot",
   description: "Información relacionada a el bot.",
   async execute(message, arg, client, discord) {
      const embedBotInfo = new discord.MessageEmbed()
         .setColor("#F7C74C")
         .setTitle("Información del bot")
         .setAuthor(client.user.username)
         .setDescription(
            `${client.user.username} es un bot de Discord creado en JavaScript usando Discord.js.`
         )
         .addField("Version", "1.0.0", true)
         .addField("Library", "discord.js", true)
         .addField("Creator", "tobiasfacello#0730", true)
         .addField("Repository", "https://github.com/apxbot")
         .setThumbnail("https://i.ibb.co/mqzvmTD/logo-bot-apx-negro.png")
         .setURL("https://github.com/apxbot");
      message.reply({ embeds: [embedBotInfo] });
   },
};
