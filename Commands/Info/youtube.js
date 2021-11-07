module.exports = {
  name: "youtube",
  description: "Información relacionada a nuestra cuenta de youtube.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Youtube")
      .setURL("https://www.youtube.com/c/apxschool")
      .setThumbnail(
        "https://yt3.ggpht.com/ytc/AKedOLTCyibbUVywwxTrBXoqNWBHsXyR_KdIyqX1lecccA=s88-c-k-c0x00ffffff-no-rj"
      )
      .setDescription(
        "Comunidad abierta de personas que programan 🤓 \nEscuela online, a tu ritmo y acompañadx 👩🏼‍💻👨🏻‍💻\nVos también podés aprender a programar 💪🏼"
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
