const server = require('./api/server');
const PORT = process.env.PORT || 5000;


// endpoints are



server.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
