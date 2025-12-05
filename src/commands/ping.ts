import {
  Command,
  Declare,
  Options,
  createBooleanOption,
  createStringOption,
  type CommandContext
} from 'seyfert';
import { MessageFlags } from 'seyfert/lib/types';

const options = {
  ocultar: createBooleanOption({
    description: "Ocultar respuesta",
  }),
  idioma: createStringOption({
    description: "Idioma de respuesta",
    choices: [
      { name: "English", value: "en" },
      { name: "Español", value: "es" }
    ]
  })
}

@Declare({
  name: 'ping',
  description: 'Muestra el ping en Discord'
})
@Options(options)
export default class PingCommand extends Command {

  async run(ctx: CommandContext<typeof options>) {
    const flags = ctx.options.ocultar ? MessageFlags.Ephemeral : undefined;
    const lang = ctx.options.idioma;

    // Obtener las traducciones del idioma
    const t = ctx.t.get(lang);

    // latencia promedio entre shards
    const ping = ctx.client.gateway.latency;

    await ctx.write({
      content: t.foo.ping({ ping }),
      flags,
    });
  }

}