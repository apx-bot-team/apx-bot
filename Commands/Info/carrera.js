module.exports = {
	name: "carrera",
	description: "Información relacionada a la carrera.",
	async execute(message, arg, client, discord) {
		if (!arg[0]) {
			const embedCarreraInfo = new discord.MessageEmbed()
				.setColor("#F7C74C")
				.setTitle("Carrera | Desarrollador Web Fullstack")
				.setDescription(
					"Aprendé todo lo necesario para conseguir tu primer trabajo en tecnología."
				)
				.addField(
					"Lo que tenes que saber...",
					`
                    🚀 **Arrancá desde cero**\n No necesitas conocimientos previos para comenzar la carrera. Empezá desde cero con explicaciones sencillas y desafíos para realizar a tu ritmo y en comunidad.
                    \n📚 **Cursada 100% flexible**\n Sin cronogramas predefinidos. Accedé a los contenidos cuando quieras, la cantidad de veces que lo necesites y desde múltiples dispositivos.
                    \n👔 **Soporte 24/7**\n En el servidor exclusivo de Discord podés despejar todas tus dudas en cualquier momento e interactuar con otros estudiantes.
                    `
				)
				.addField(
					"Para más información...",
					`
                **Comandos**: ***!carrera contenido***\n
                **Link a la carrera**: https://apx.school/carreras/dwf\n
                **¡Congelá el precio!**: https://apx.school/carreras/dwf#ready\n
                **Link a video explicativo**: https://www.youtube.com/watch?v=CNGNK80wKPY
                `
				)
				.setThumbnail(
					"https://res.cloudinary.com/dnamyvmsq/image/upload/f_auto/v1630627074/apx/tmp/they.png"
				);

			message.reply({ embeds: [embedCarreraInfo] });
		}

		if (arg[0] == "contenido") {
			const embedCarreraContenido = new discord.MessageEmbed()
				.setColor("#F7C74C")
				.setTitle("Carrera | Desarrollador Web Fullstack")
				.setDescription(
					"Aprendé todo lo necesario para conseguir tu primer trabajo en tecnología."
				)
				.addField(
					"Modalidad y Contenido",
					`
                    ⏳ **Duración**\n El tiempo estimado es de 1 año (acceso al contenido por 2 años).
                    \n✍ **Clases**\n Las clases son 100% asincrónicas, online y a tu ritmo.
                    \n💪 **Dedicación**\n Flexible, te organizas como querés (sugerimos 2 horas por día).
                    \n **Módulos**\n El contenido de la carrera está dividido en 12 módulos correlativos que van incorporando gradualmente nuevas tecnologías y niveles de complejidad.
                    `
				)
				.addFields(
					{
						name: "Módulo 1",
						value: "Fundamentos",
						inline: true,
					},
					{
						name: "Módulo 2",
						value: "Programación Orientada a Objetos",
						inline: true,
					},
					{
						name: "Módulo 3",
						value: "HTML & CSS",
						inline: true,
					},
					{
						name: "Módulo 4",
						value: "JavaScript",
						inline: true,
					},
					{
						name: "Módulo 5",
						value: "Arquitectura Web",
						inline: true,
					},
					{
						name: "Módulo 6",
						value: "Firebase",
						inline: true,
					},
					{
						name: "Módulo 7",
						value: "Bases de Datos - Postgre",
						inline: true,
					},
					{
						name: "Módulo 8",
						value: "React + TypeScript",
						inline: true,
					},
					{
						name: "Módulo 9",
						value: "E-commerce: Backend",
						inline: true,
					},
					{
						name: "Módulo 10",
						value: "E-commerce: Frontend",
						inline: true,
					},
					{
						name: "Módulo 11",
						value: "Proyecto X - Grupal",
						inline: true,
					},
					{
						name: "Módulo 12",
						value: "Mundo laboral",
						inline: true,
					}
				)
				.addField(
					"Para más información...",
					`
                **Link a la carrera**: https://apx.school/carreras/dwf\n
                **¡Congelá el precio!**: https://apx.school/carreras/dwf#ready\n
                **Link a video explicativo**: https://www.youtube.com/watch?v=CNGNK80wKPY
                `
				)
				.setThumbnail(
					"https://res.cloudinary.com/dnamyvmsq/image/upload/f_auto/v1630627074/apx/tmp/they.png"
				);
			message.reply({ embeds: [embedCarreraContenido] });
		}
	},
};
