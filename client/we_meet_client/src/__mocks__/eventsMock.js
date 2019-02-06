
beforeAll(async () => {

    const responses = {
        events: {
            status: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                events: [
                    { id: 1, title: 'Event 1' },
                    { id: 2, title: 'Event 2' }
                ]
            })
        }
    }

    await page.on('request', async interceptedRequest => {
        const endpoint = interceptedRequest.url().split('/').pop();
        if (responses[endpoint]) {
            interceptedRequest.respond(responses[endpoint]);
        } else {
            interceptedRequest.continue();
        }
    });

    await page.setRequestInterception(true);

});

afterEach(async () => {
    await page.removeListener("request", () => {});
})


