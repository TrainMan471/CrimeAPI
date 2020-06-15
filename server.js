const express = require('express');

const Port = 2000;//The port the server will listen // TODO:
const app =  express();



app.use(express.static('public'));

app.listen(Port, () => {
  console.log(`Server is listening on port: ${Port}`);
});
