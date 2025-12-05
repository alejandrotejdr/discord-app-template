import { createEvent } from 'seyfert';

export default createEvent({
// botReady se ejecuta cuando todos los shards y servidores están listos.
// `once` sirve para que el evento se ejecute una sola vez.
  data: { once: true, name: 'botReady' },
  run(user, client) {

    client.logger.info(`${user.username} está listo`);

  }
})