const moment = require("moment");

module.exports = {
	name: "user",
	description: "Información relacionada a un usuario.",
	async execute(message, arg, client, discord) {
		const target = message.mentions.users.first() || message.author;
		const member = message.guild.members.cache.get(target.id);
		const embedInfoUsuario = new discord.MessageEmbed()
			.setColor("#F7C74C")
			.setAuthor(
				`Información de usuario: @${target.username}`,
				target.displayAvatarURL()
			)
			.setDescription("Información relacionada al usuario.")
			.setThumbnail(target.displayAvatarURL())
			.addField(
				"Miembro de Discord desde",
				`${moment(target.createdAt).format(
					"MMMM Do YYYY, h:mm:ss a"
				)}\n**-** ${moment(target.createdAt).startOf("day").fromNow()}`
			)
			.addField(
				"Miembro del servidor desde",
				`${moment(member.joinedAt).format(
					"MMMM Do YYYY, h:mm:ss a"
				)}\n**-** ${moment(member.joinedAt).startOf("day").fromNow()}`
			)
			.addField(
				"Apodo",
				member.nickname ? member.nickname : "No tiene apodo",
				true
			)
			.addField(
				"Roles",
				`${member.roles.cache.map((rol) => rol).join(" ")}`
			)
			.setFooter(`ID: ${target.id}`);
		message.channel.send({ embeds: [embedInfoUsuario] });
	},
};
