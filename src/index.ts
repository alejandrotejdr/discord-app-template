import type English from './languages/en';
import { Client, extendContext } from "seyfert";
import type { ParseClient, ParseLocales } from 'seyfert';
import type * as defaultLang from './languages/es';

const context = extendContext(() => ({ nutria: 'tierna' }));

declare module 'seyfert' {

    interface UsingClient extends ParseClient<Client<true>> { }
    interface DefaultLocale extends ParseLocales<typeof defaultLang> {}
    interface UsingClient extends ParseClient<Client<true>> { }
    interface ExtendContext extends ReturnType<typeof context> {}

    interface DefaultLocale extends ParseLocales<typeof English> { }

}

const client = new Client();

client.start()
  .then(() => client.uploadCommands({ cachePath: './commands.json' }));