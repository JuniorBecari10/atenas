const data = require("../data");

function setupApiRoutes(app) {
    app.get("/api/books", (_, res) => res.json({ books: data.data.books }));
}

module.exports = setupApiRoutes;
