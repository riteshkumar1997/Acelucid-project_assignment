var http = require("http");

// function for validating potential dates from text.
function validDate() {
  const moment = require("moment");
  var pattern = /([0-9]{8})/g;
  var text = "Hdjsh asd2324234jghjsd hjsdg sdhk 12212021 idf32432 32423 d34234jh dfh";
  var arrayOfPotentialDates = text.match(pattern);
  if (!arrayOfPotentialDates) {
    return "Text contains a Invalid Date";
  }
  for (var i of arrayOfPotentialDates) {
    let t = moment(i, "MMDDYYYY");
    if (t.isValid()) {
      return `Text contains a Valid Date ${i}`;
    }
  }
  return "Text contains a Invalid Date";
}

http
  .createServer(function (req, res) {
    console.log("listening to port 8080..");
    res.write(validDate());
    res.end();
  })
  .listen(8080);
