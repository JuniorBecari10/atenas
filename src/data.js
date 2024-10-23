const fs = require("fs");

let data = {
    books: [
        {
            name: 'Antígona',
            author: 'Sófocles',
            subject: 'Filosofia',
        },
        {
            name: 'Apologia de Sócrates',
            author: 'Platão',
            subject: 'Filosofia',
        },
        {
            name: 'Ilíada',
            author: 'Homero',
            subject: 'Filosofia',
        },
        {
            name: 'Metafísica',
            author: 'Aristóteles',
            subject: 'Filosofia',
        },
        {
            name: 'Odisseia',
            author: 'Homero',
            subject: 'Filosofia',
        },
    ],
};

const DATABASE_FILE_NAME = "database.json";

function readDatabase() {
    console.log("Reading database...");

    if (fs.existsSync(DATABASE_FILE_NAME)) {
        fs.readFile(DATABASE_FILE_NAME, "utf8", (error, data) => {
            if (error) {
                console.log("Couldn't read database.");
                throw error;
            }
    
            hotel = JSON.parse(data);
        });

        console.log("Database loaded successfully.");
    }
    else
        console.log("Database file doesn't exist, starting a new one...");

    console.log();
}

function saveToDatabase() {
    const json = JSON.stringify(data);
    fs.writeFile(DATABASE_FILE_NAME, json, "utf8", error => {
        if (error) {
            console.log("Couldn't write database to file.");
            throw error;
        }
    });
}

module.exports = {
    data,
    DATABASE_FILE_NAME,
    readDatabase,
    saveToDatabase,
};
