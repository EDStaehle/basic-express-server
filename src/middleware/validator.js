'use strict'

module.exports = (req, res, next) => {
req.query?.name ? next(): noName()

function noName(){
  res.status(500)
  next('you have no name? DOUBT IT. put a name')
}
};
