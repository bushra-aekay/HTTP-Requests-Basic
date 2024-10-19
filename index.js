import express from 'express'; //importing express from the module
const app = express(); //creating an app using the express object.
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>") //homepage is the endpoint
});

app.get("/about", (req, res) => {
    res.send("<h1>Computerscii</h1>") //res.send is the function used to send the HTTP response
});

app.get("/contact", (req, res) => {
    res.send("<h1>123456789</h1>")
});


app.listen(port, () => { //.listen is the method listening for requests.// (port, callback function). the anonymous function is looking for requests on port(location on server) 3000 and the callback fn is triggered if everything is done.
    console.log(`server is running on port ${port}`); //the app.listen starts the server on specified port and listens for requests to process and respond. The callback function is triggered once the server is running and is sucessfully listening.
});

