import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('books', function() {});
  //this.route('book', { path: '/books/:book_id' });
  //this.route('spanish', { path: '/books/spanish' });
  //this.route('french', { path: '/books/french' });
  //this.route('price', { path: '/books/price' });
  //this.route('quantity', { path: '/books/quantity' });

  this.resource('books', function() {
    this.resource('book', { path: '/:book_id' });
    this.resource('spanish', { path: '/spanish' });
    this.resource('french', { path: '/french' });
    this.resource('price', { path: '/price' });
    this.resource('quantity', { path: '/quantity' });
  });

  this.route('upload', { path: '/upload' });
});

export default Router;