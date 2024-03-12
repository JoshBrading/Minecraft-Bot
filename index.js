import mineflayer from "mineflayer"
import {mineflayer as mineflayerViewer} from "prismarine-viewer"
import dotenv from "dotenv"

const bot = mineflayer.createBot({
    username: process.env.USERNAME,
    verbose: true,
    port: process.env.PORT,
    host: process.env.HOST,
    auth: "microsoft"
})

bot.on('connect', () => {
    console.log('[Debug] Logged in as user: [' + bot._client.username + ']');
    console.log('[Debug] Logged in as user: [' + bot.username + ']');
});

bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3007, firstPerson: true })
})