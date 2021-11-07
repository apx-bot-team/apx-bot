module.exports = {
  name: "blog",
  description: "Información relacionada a nuestro blog.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Blog")
      .setURL("https://apx.school/blog")
      .setThumbnail(
        "https://cdn.sanity.io/images/9uwkxuld/production/3040fb5844ed03ddfe29ace69ddf39366e3533ec-1440x250.png?w=600&h=300&auto=format&fit=crop"
      )
      .setDescription(
        `
        :books: **¿Sabías que tenemos un blog?** :books:\n
        Ahí podés encontrar muchisima información como\n
        *tips de Flor*:nerd:\n
        *Coder-Box*:book:\n
        *y más...*\n\n

        [¿Vamos a leer?](https://apx.school/blog)
        `
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
