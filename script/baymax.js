const { get } = require('axios');

module.exports.config = {
 name: "baymax",
 credits: "Marjhun Baylon",
  version: '1.0.0',
  role: 0,
  aliases: ['bay']
};

module.exports.run = async function ({ api, event, args }) {
 let prompt = args.join(' ');
 const id = event.senderID;

 function sendMessage(msg) {
  api.sendMessage(msg, event.threadID, event.messageID);
 }

 const apiUrl = "http://eu4.diresnode.com:3301"; // available model: baymax_gpt, gojo_gpt

 if (!prompt) return sendMessage("Missing input!\n\nIf you want to reset the conversation with " + this.config.name + " you can use “" + this.config.name + " clear”");

 sendMessage("🔍…");

 try {
  const response = await get(`${apiUrl}/baymax_gpt?prompt=${encodeURIComponent(prompt)}&idd=${id}`);
  sendMessage(response.data.baymax);
 } catch (error) {
  sendMessage(error.message);
 }
};
