var http = require("http");
const prompt = require("prompt-sync")({ sigint: true });

//create a server object:
http
  .createServer(function (req, res) {
    console.log("listening to port 8080..");
    res.write(generatePattern()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
function generatePattern() {
 var n = prompt("Enter height"); 
  let string = "";
  // External loop
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  return string;
}
