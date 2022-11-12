const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    // app.post('/author', AuthorController.createNewAuthor);
    app.get('/api', AuthorController.index);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}