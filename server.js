const  express  = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
res.sendFile(__dirname + "/index.html");
});


app.get("/api/crafts", (req, res) => {
    const crafts = [];
    crafts[0]={
        name: "Beaded JellyFish",
        description: "Create a hanging jellyfish using eggcartons and multicolored beads",
        supplies: [
            "string",
            "egg cartons",
            "beads"
        ]
    };



    res.json(crafts);
});


app.listen(3000, ()=> {

    console.log("Listening");
});