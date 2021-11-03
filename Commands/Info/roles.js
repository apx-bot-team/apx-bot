const { execute } = require("./comunidad");

module.exports = {
	name: "roles",
	description: "Información relacionada a los roles de la comunidad.",
	async execute(message, arg, client, discord) {
		const embedComuInfo = new discord.MessageEmbed()
			.setColor("#F7C74C")
			.setTitle("Roles")
			.setAuthor(client.user.username)
			.setDescription(
				"Tenemos como misión fortalecer y mejorar dando pequeños pasitos a diario. Uno de esos objetivos es mejorar la participación de cada unx de ustedes en los canales del servidor. Esto incluye preguntas, dudas, memes, info, curiosidades, eventos, contenidos, etc."
			)
			.addField(
				"Hubo un cambio respecto a los roles de cada miembro. Como somos muy nerds elegimos una temática nerd. En esté caso Star Wars.",
				"Tendremos roles fijos para miembros del staff de apx y otros que serán dinámicos y basados en el nivel experiencia de cada miembro.\n Cada mensaje que enviamos, genera ciertos puntos de experiencia (XP) y estos puntos sirven para subir de nivel."
			)
			.addField(
				"Todxs los integrantes de la comunidad...",
				"Empezaran en Nivel 1 (Initiate) y la escala será la siguiente:"
			)
			.setImage("https://i.ibb.co/PtfhYbN/imagen-roles.png")
			.setFooter(
				"Master Yoda (Marce) \n Dark Lord Sith (Capi) \n Jedi Master (Staff) \n Jedi Guardian (Seleccionados) \n Jedi Knight (Nivel > 15) \n Padawan (Nivel > 5) \n Initiate (Nuevos Miembros)"
			);
		message.reply({ embeds: [embedComuInfo] });
	},
};
