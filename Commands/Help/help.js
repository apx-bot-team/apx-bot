//* Ayuda del bot

module.exports = {
   name: "help",
   description: "Información necesaria para el uso del bot.",
   async execute(message, arg, client, discord) {
      message.channel.send(`Hola ${message.author}! En qué te puedo ayudar?`);
   },
};
