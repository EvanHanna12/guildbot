const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix, token } = require('./config.json');

client.once('ready', () => {
    console.log('Ready!');
});

const commandFolder = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFolder) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const name = args.shift().toLowerCase();

    if (!client.commands.has(name)) return;

    const command = client.commands.get(name);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply("Oops! I've ran into a problem with that command. \nPlease try again or join our support server! \nhttps://discord.gg/VvxsXB");
    }
});

client.login(token)