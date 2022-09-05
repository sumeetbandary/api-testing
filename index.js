const express = require('express');
const app = express();
const port = 3000;
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({username: 'sample name'});
});

app.listen(port, () => {
    console.log('Example app listening on port port!');
});

//Run app, then load http://localhost:port in a browser to see the output.