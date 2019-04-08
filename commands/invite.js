module.exports = {
    name: 'invite',
    description: 'Bot invites.',
    execute(message, args) {
        message.channel.send('These are the invites associated with me, GuildBot! \nMy support server: `https://discord.gg/VvxsXB` \nMy invite: `https://discordapp.com/api/oauth2/authorize?client_id=494271858393350144&permissions=8&scope=bot`');
    },
};