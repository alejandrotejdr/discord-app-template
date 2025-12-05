import { config } from "seyfert";

process.loadEnvFile(".env");

export default config.bot({
    token: process.env.BOT_TOKEN ?? "",
    locations: {
        base: "src", // replace with "src" if using bun
        commands: "commands",
        events: 'events', // - src/events será nuestra carpeta para los eventos
        langs: "languages" // - src/languages será nuestro directorio de idiomas
    },
    intents: ["Guilds", "GuildInvites", "GuildMembers", "GuildVoiceStates"],
    // This configuration is optional, in case you want to receive interactions via HTTP
    // This allows you to use both the gateway and the HTTP webhook
    publicKey: "...", // replace with your public key
    port: 4444, // replace with your application's port

});