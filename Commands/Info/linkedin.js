module.exports = {
  name: "linkedin",
  description: "Información relacionada a nuestra cuenta de linkedin.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Linkedin")
      .setURL("https://www.linkedin.com/company/apx-school/")
      .setThumbnail(
        "https://media-exp1.licdn.com/dms/image/C4E0BAQGk_j92h0gI1w/company-logo_200_200/0/1627516077948?e=1644451200&v=beta&t=08XNDQf_-prz_DLgq9kS-2bBUGLje_GdMA7J-OR-VBU"
      )
      .setDescription(
        `
        :busts_in_silhouette: apx es una comunidad dedicada a acompañar y conectar a todas las personas que quieren aprender a programar, **introducirse al mercado laboral** de la tecnología o desarrollar su propio proyecto.👩🏼‍💻👨🏻‍💻
        `
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
