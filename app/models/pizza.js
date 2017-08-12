import DS from 'ember-data';

export default DS.Model.extend({
  rank: DS.attr('number'),
  price0: DS.attr('number'),
  price1: DS.attr('number'),
  price2: DS.attr('number'),
  price3: DS.attr('number'),
  price4: DS.attr('number'),
  price5: DS.attr('number'),
  sold: DS.attr('boolean'),
  name: DS.attr('string'),
  desc: DS.attr('string')

});
