const { AoiClient, LoadCommands } = require("aoi.js"); // Elleme

const bot = new AoiClient({
    token: "MTM0NzYzNDE1NTQ1ODAwMjk5NA.GXokV8._vCuUV6EOVXMch55SoIxSmF4h23Jp0a1QruoRY", // " İçine Bot Tokenini Gir
    prefix: "+", // " İçine Prefixini Gir
    intents: ["Guilds", "GuildMessages", "MessageContent"], // İntentler
    events: ["onMessage", "onInteractionCreate"], // Eventler
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") // Komutları Yükler

// Değiskenler
bot.variables ({
  xp:"0"
})
