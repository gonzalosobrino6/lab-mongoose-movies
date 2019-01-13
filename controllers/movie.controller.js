const Movie = require('../models/movie.model');

module.exports.list = (req, res, next) => {
  Movie.find()
    .then( movies => res.render('movie/list', { movies }))
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('movie/create');
}

module.exports.doCreate = (req, res, next) => {
  const movie = new Movie(req.body);
  console.log(movie);

  movie.save()
    .then(movie => { res.redirect('/movies' )});
}

module.exports.edit = (req, res, next) => {
  const movies = Movies.find()
  
    .then(movies => {
      res.render('movie/create', { movies });
  })
}

module.exports.doEdit = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      console.log(movies);
      movies.set(req.body);

      movies.save()
        .then((movies) => { res.redirect('/movies' )});
    })
}

module.exports.get = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => res.render('movie/detail', { movie }));
}

module.exports.delete = (req, res, next) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(movie => res.redirect('/movies')); // movies to reference the route
}

