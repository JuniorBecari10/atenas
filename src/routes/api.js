const { data, saveToDatabase } = require("../data");

function setupApiRoutes(app) {
    app.get("/api/books", (_, res) => res.json({ books: data.books }));

    app.post("/api/borrow", (req, res) => {
        const book = req.body.book;
        const bookIndex = data.books.findIndex(b => b.id === book);
        
        if (bookIndex === -1)
            return res.status(404);
        
        if (data.books[bookIndex].quantity === 0)
            return res.status(403);

        data.books[bookIndex].quantity--;
        saveToDatabase();
    });

    app.post("/api/return", (req, res) => {
        const book = req.body.book;
        const bookIndex = data.books.findIndex(b => b.id === book);
        
        if (bookIndex === -1)
            return res.status(404);

        data.books[bookIndex].quantity++;
        saveToDatabase();
    });
}

module.exports = setupApiRoutes;
