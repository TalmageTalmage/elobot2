
// const Discord = require('discord.js');

// const { prefix } = require('../../config/config.json');


// module.exports = {
//     name: 'help',
//     category: "Bot",

//     description: 'List all of my commands or info about a specific command.',
//     aliases: ['commands'],
//     usage: '[command name]',
//     cooldown: 5,
//     execute(message, args) {
//         console.log('his')
//         const data = [];
//         const { commands } = message.client;

//         if (!args.length) {

//             const embed = new Discord.MessageEmbed()
//                 .setTitle('Here\'s a list of all my commands:')
//                 .addFields(
//                     { name: '**Commands:**', value: commands.map(command => command.name).join(', ') },
//                     { name: '\u200B', value: `For help on a specific command send: \`${prefix}help [command name]\`` }
//                 )

//             return message.author.send({ embed: embed })
//                 .then(() => {
//                     if (message.channel.type === 'dm') return;
//                     message.channel.send(`<:Approved:798312918130360340> I've sent you a DM with all of my commands, ${message.author}.`);
//                 })
//                 .catch(error => {
//                     console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
//                     message.channel.send(`<:Warn:798312918763438100> Seems like I can't DM you, ${message.author}. Do you have DMs disabled?`);
//                 });
//         }

//         const name = args[0].toLowerCase();
//         const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

//         if (!command) {
//             return message.reply('that\'s not a valid command!');
//         }

//         data.push(`**Name:** ${command.name}`);

//         if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
//         if (command.description) data.push(`**Description:** ${command.description}`);
//         if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

//         data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

//         message.channel.send(data, { split: true });
//     },
// };