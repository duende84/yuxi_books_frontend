import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //return this.store.query('book', { language: 'Spanish' });
    return Ember.$.getJSON('http://localhost:3000/api/v1/spanish.json');
  }
});