var http = require("http");

const forge = require("mappersmith");

const github = forge({
  clientId: "github",
  host: "https://status.github.com",
  resources: {
    Status: {
      current: { path: "/api/status.json" },
      messages: { path: "/api/messages.json" },
      lastMessage: { path: "/api/last-message.json" }
    }
  }
});
console.log("test");
github.Status.lastMessage({
  test: "test"
}).then(response => {
  console.log(`status: ${response.data()}`);
});

//create a server object:
http
  .createServer(function(req, res) {
    res.write("Hell o World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
