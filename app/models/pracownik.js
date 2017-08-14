import DS from 'ember-data';

export default DS.Model.extend({
  rank: DS.attr('number'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('number'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  driver: DS.attr('boolean'),
  manager: DS.attr('boolean'),
  notAllowOrders: DS.attr('boolean'),


});
