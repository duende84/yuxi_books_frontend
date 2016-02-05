import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  country: DS.attr('string'),
  language: DS.attr('string'),
  price: DS.attr('number'),
  quantity: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date')
});