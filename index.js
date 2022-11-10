import express, { json } from "express";



const app = express();

const port = 3000;





app.use("/next", (request, response, next) => {
    console.log("the next function will be executing this"); //app.use is used to set up the middleware stack 
    next(); //next() in called to move on to the next middleware .
},

    (request,response) => {
        response.send("next is used"); //middleware stack
    }

);


app.use("/images", express.static("images")); //express.static is used to serve static files such as images, css files etc




//http methods

app.post("/item", (request, response) => { //http post method
    console.log(request.body);
    response.send(request.body);
});

app.post("/create", (request, response) => { //http post method
    response.send("The is a POST request at /create");
});

app.put("/edit", (request, response) => {
    response.send("The is a PUT request at /edit"); //http put method
});

app.delete("/delete", (request, response) => {
    response.send("The is a DELETE request at /delete");//http delete method
});


app.get("/redirect", (request, response) => { //http get method
    response.redirect("http://www.facebook.com");//redirect method.
});



app.route("/class")
.get((request, response) => { //route chaining.
    throw new Error();
})
.post((request, response) => {
    response.send("post used");
})
.put((request, response) => {
    response.send("put used");
}); 



app.listen(port, () => {
    console.log(`this is using the port ${port}`);
    // console.log(data);
});