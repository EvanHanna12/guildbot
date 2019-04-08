module.exports = {
    name: 'kick',
    description: 'Kick somebody!',
    execute(message, args) {
        const mentionedUser = message.mentions.users.first();
        if (!message.mentions.users.size) {
            return message.reply('Who should I kick? Try again and mention a user!')
        } else if (mentionedUser.perms.has("KICK_MEMBERS")) {
            message.reply('That user cannot be kicked!')
        } else {
            mentionedUser.kick()
        }
    }
}