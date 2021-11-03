module.exports = {
   name: "comunidad",
   description: "Información relacionada a la comunidad.",
   async execute(message, arg, client, discord) {
      const embedComuInfo = new discord.MessageEmbed()
         .setColor("#F7C74C")
         .setTitle("Información de la comunidad")
         .setAuthor(client.user.username)
         .setDescription(
            "apx es una comunidad dedicada a acompañar y conectar a todas las personas que quieren introducirse al mercado laboral de la tecnología."
         )
         .addField("Website", "https://apx.school/")
         .setThumbnail("https://i.ibb.co/TY2n53d/logo-apx-comunidad.png")
         .setFooter("");
      message.reply({ embeds: [embedComuInfo] });
   },
};
