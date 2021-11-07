module.exports = {
  name: "twitch",
  description: "Información relacionada a nuestra cuenta de twitch.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Twitch")
      .setURL("https://www.twitch.tv/apxschool")
      .setThumbnail(
        "https://static-cdn.jtvnw.net/jtv_user_pictures/7aafd71c-966b-4571-84ec-bc5ebc0064f9-profile_image-70x70.png"
      )
      .setDescription(
        `
        👾 Seguinos en Twitch para ver todos los contenidos en vivo:\n
        https://www.twitch.tv/apxschool
        `
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
