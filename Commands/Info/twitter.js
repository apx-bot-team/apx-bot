module.exports = {
  name: "twitter",
  description: "Información relacionada a nuestra cuenta de twitter.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Twitter")
      .setURL("https://twitter.com/apxschool")
      .setThumbnail(
        "https://pbs.twimg.com/profile_images/1414701210846830598/BZkU-Z0K_400x400.png"
      )
      .setDescription(
        `
        Comunidad abierta de **personas que programan**.🤓\n
        Escuela online, a tu ritmo y acompañadx.👩🏼‍💻👨🏻‍💻\n
        Vos también podés aprender a programar.💪🏼\n
        `
      )
      .setFooter(
        "🐦 Seguinos en Twitter para enterarte de todas las novedades"
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
