const path = require("path");

function setupServerRoutes(app) {
    app.get("/", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
    });

    app.get("/book/:book", (req, res) => {
        const book = req.params.book;
        const data = {};

        res.render("book", data);
    });
}

module.exports = setupServerRoutes;
