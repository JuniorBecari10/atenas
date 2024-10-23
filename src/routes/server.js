const path = require("path");
const { data } = require("../data");

function setupServerRoutes(app) {
    app.get("/", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
    });

    app.get("/book/:book", (req, res) => {
        const book = req.params.book;
        const bookData = data.books.find(b => b.id === book);
        
        if (bookData === undefined)
            return res.redirect("/");

        res.render("book", { book: bookData });
    });
}

module.exports = setupServerRoutes;
