const path = require("path");
const { data } = require("../data");

function setupServerRoutes(app) {
    app.get("/", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "index.html"));
    });

    app.get("/admin", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "admin.html"));
    });

    app.get("/student", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "student.html"));
    });

    app.get("/worker", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "worker.html"));
    });

    app.get("/professor", (_, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "views", "professor.html"));
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
