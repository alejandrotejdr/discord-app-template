import { createEvent } from 'seyfert';

export default createEvent({
  data: { name: 'guildDelete' },
  run(unguild, client) {
    // unguild es el servidor del que se expulsó o se eliminó.
    // También es posible que el servidor haya sido eliminado.
    if (unguild.unavailable) return;

    client.logger.info(`Me han expulsado de: ${unguild.id}`);
  }
})