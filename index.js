const arabtools = require("arab-tools");

const { Client } = require('discord.js-selfbot-v13'); // works with any library that uses discord.js-like syntax;

const client = new Client();

// Create a new class bot
const Bot = new arabtools.user(client);
require("dotenv")["config"]()
client.login(process.env.token);
client.on("ready", () => {
    console.log("Client Started")
    require("./bot")
    Pkg()
})


const { autoLeveling, giveaway, voiceStay } = require("./config");

// You Must Join The Server To Work






// Auto Leveling


Bot.leveling({
    channel: autoLeveling.channel,

    randomLetters: autoLeveling.randomLetters, // if true it spams random letters

    time: autoLeveling.time, // delay between each message in ms

    type: autoLeveling.type // The language, can be "ar"
})


async function Pkg() {

    // Auto Reaction


    Bot.autoreaction({
        customBotID: giveaway.customBotID, // optional option, There is 2 default bots


        timeout: giveaway.timeout, // time you want the account to delay the reaction


        blacklistedwords: giveaway.blacklistedwords, // Some admins like to see the accounts that uses autoreaction so this is a secuirty measure, put words like "test" so the bot won't react on these giveaways


        ownerId: giveaway.ownerId, //kind of an optional option, but you can put your id and that id will be returned when you win a giveaway


    });

    Bot.on("giveawayCreated", (data) => {
        console.log(data)
        // output: {url: messageURL, embed: the embed of the giveaway, bot: the bot that made the giveaway}
    })

    Bot.on('wins', (data) => {
        console.log(data)
        //output: {data: message(Message Object), owner: the id you put in ownerId, inv: server Invite}
    })



    Bot.VoiceStay({
        guild: voiceStay.guild,
        channel: voiceStay.channel
    });


}