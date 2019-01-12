const Celebrity = require('../models/celebrity.model');

module.exports.list = (req, res, next) => {
  Celebrity.find()
    .then( celebrities => res.render('celebrity/list', { celebrities }))
    .catch(err => next(err))
}

module.exports.create = (req, res, next) => {
  res.render('celebrity/create');
}

module.exports.doCreate = (req, res, next) => {
  const celebrity = new Celebrity(req.body);
  console.log(celebrity);

  celebrity.save()
    .then((celebrity) => { res.redirect('/celebrities' )});
}

module.exports.get = (req, res, next) => {
  Celebrity.findById(req.params.id)
    .then(celebrity => res.render('celebrity/detail', { celebrity }));
}

module.exports.delete = (req, res, next) => {
  Celebrity.findByIdAndDelete(req.params.id)
    .then(celebrity => res.redirect('/celebrity'));
}

