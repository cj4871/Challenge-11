const express = require('express')
const fs = require('fs')
const PORT = process.env.PORT || 3001
let db = require('./db/db.json')
const path = require('path')

const app = express();
const noteId =require('./helpers/uuid')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
//get route 
app.get('/api/notes', (req, res) =>{
    db = JSON.parse(fs.readFileSync('./db/db.json')) || []
    res.json(db)
});
//post route
app.post("/api/notes", (req,res) =>{
    const {title,text} = req.body
    console.log(req.body)

    if(title && text) {
        const newNote = {
            id: noteId(),
            title,
            text,
        }
    }
})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
