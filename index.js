/*
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, you got this
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just hack it…
I need this code, but don't know where, perhaps should make some middleware, don't worry, just hack it
Go code!
*/

const server = require("./server.js");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n***Server Running on http://localhost:${port} ***\n`);
});
