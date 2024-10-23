async function getBooks() {
    return (await sendGet('books')).books;
}
