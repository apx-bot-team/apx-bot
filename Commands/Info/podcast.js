module.exports = {
  name: "podcast",
  description: "Información relacionada a nuestro podcast Código elegante.",
  async execute(message, arg, client, discord) {
    const embedComuInfo = new discord.MessageEmbed()
      .setColor("#F7C74C")
      .setTitle("Código Elegante")
      .setURL(
        "https://open.spotify.com/show/6mFrVAn87UJr0cDXwZ1puU?si=fUxA0WL3SZSV97gMucn4EA&dl_branch=1&nd=1"
      )
      .setThumbnail(
        "https://i.scdn.co/image/ab6765630000ba8a79078e4dfa2b7eb7609b9638"
      )
      .setDescription(
        `
        🎙️**¿Sabías que tenemos un podcast?** 🎙️

        Todas las semanas Flor, Marce y el Capi conversan sobre los temas más interesantes del mundo de la tecnología en [Código L-Gante](https://open.spotify.com/show/6mFrVAn87UJr0cDXwZ1puU?si=fUxA0WL3SZSV97gMucn4EA&dl_branch=1&nd=1), un espacio para aprender y divertirte que podés encontrar en Spotify. 🗣️

        ¿Tenés algún episodio favorito?
        `
      );
    message.reply({ embeds: [embedComuInfo] });
  },
};
