//* Testeo del bot

module.exports = {
   name: "test",
   description: "Testea el correcto funcionamiento del bot.",
   async execute(message, arg, client, discord) {
      message.channel.send("Glad you are testing!");
   },
};
