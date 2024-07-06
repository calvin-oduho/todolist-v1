
import express from "express";
import bodyParser from "body-parser";
import date from "./date.cjs";

const app = express();
const port = 3002;
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {

   const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
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
    console.log(`Port ${port}: Listening...`);
});