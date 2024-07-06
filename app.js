
import express from "express";
import bodyParser from "body-parser";
import file from "./file.cjs";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const port = 3002;
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get("/", (req, res) => {
   const day = file.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(file.capitalize(item));
        res.redirect("/work");
    } else {
        items.push(file.capitalize(item));
        res.redirect("/");
    }
});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(port, () => { 
    console.log(`Listening on => localhost:${port}/`);
});