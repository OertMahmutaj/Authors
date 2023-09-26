const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.post('/api/author/new', AuthorController.createAuthor); 
    app.get('/api/author', AuthorController.getAllAuthors); 
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.patch('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);



}