module.exports.config = {
 name: "out",
 version: "1.0.0",
 role: 2,
 credits: "Marjhun Baylon",
 description: "Leave the group",
 aliases: ["leave"],
};

module.exports.run = async function({ api, event, args }) {
     if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
     if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}