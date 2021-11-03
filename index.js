console.clear();

//! Configuración
require("dotenv").config();

const discord = require("discord.js");

const client = new discord.Client({
	intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

//! Código

client.commands = new discord.Collection();
client.events = new discord.Collection();

// Arreglo de manejadores. Por cada archivo, se requiere de la carpeta Han	dlers para acceder a los mismos.
["commandHandler", "eventHandler"].forEach((file) => {
	require(`./Handlers/${file}`)(client, discord);
});

//! Token del bot
client.login(process.env.DSTOKEN);

//! Prefijo para llamar al bot.
const prefix = process.env.PREFIX;

