module.exports = async (client) => {
   console.log(`Bot is ready as ${client.user.username}!\n Status: ${client.presence.status} 🟢`);
   client.user.setActivity("!help", { type: "LISTENING" });
};
