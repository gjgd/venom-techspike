const venom = require('venom-bot');

venom
	.create(
		'session',
		() => {},
		() => {},
		{
			browserArgs: ['--no-sandbox'],
		}
	).then((client) => start(client))
	.catch((error) => {
		console.error(error);
	});

function start(client) {
  client.onMessage(async (message) => {
    console.log(`received ${message.body}`);
    try {
      if (message.body === '!time') {
        const result = await client.sendText(message.from, `${Date.now()}`);
        console.log(result.status);
      }
      if (message.body === 'Hi') {
        const result = await client.sendText(
          message.from,
          `Hi ${message.sender.shortName}`,
        );
        console.log(result.status);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
