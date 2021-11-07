module.exports = {
  name: "instagram",
  description: "Información relacionada a nuestra cuenta de instagram.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Instagram")
      .setURL("https://www.instagram.com/apx.school/")
      .setThumbnail(
        "https://instagram.faep9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/217973495_1662780450585305_3596189842885151260_n.jpg?_nc_ht=instagram.faep9-2.fna.fbcdn.net&_nc_ohc=7Tbgp5DVahAAX_enfPl&edm=ABfd0MgBAAAA&ccb=7-4&oh=7aa3391ab18772428e1a7b1043f6b7d1&oe=618D1353&_nc_sid=7bff83"
      )
      .setAuthor(client.user.username)
      .setDescription(
        "Comunidad abierta de personas que programan 🤓 \nEscuela online, a tu ritmo y acompañadx 👩🏼‍💻👨🏻‍💻\nVos también podés aprender a programar 💪🏼"
      )
      .setFooter(
        "📸 Seguinos en instagram para enterarte de todas las novedades"
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
