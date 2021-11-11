module.exports = {
  name: "instagram",
  description: "Información relacionada a nuestra cuenta de instagram.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Instagram")
      .setURL("https://www.instagram.com/apx.school/")
      .setThumbnail(
        "https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/217973495_1662780450585305_3596189842885151260_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZhSIywZFMPoAX8mMLmd&edm=ALbqBD0BAAAA&ccb=7-4&oh=ff64ef6399741c4893df99310930f449&oe=6194FC53&_nc_sid=9a90d6"
      )
      .setAuthor(client.user.username)
      .setDescription(
        `Comunidad abierta de **personas que programan**🤓\n
        Escuela online, a tu ritmo y acompañadx. 👩🏼‍💻👨🏻‍💻\n
        Vos también podés aprender a programar. 💪🏼`
      )
      .setFooter(
        "📸 Seguinos en Instagram para enterarte de todas las novedades"
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
