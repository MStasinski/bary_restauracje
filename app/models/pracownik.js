import DS from 'ember-data';

export default DS.Model.extend({
  rank: DS.attr('number'),
  name: DS.attr('string'),
  surname: DS.attr('string'),
  phone: DS.attr('number'),
  email: DS.attr('string'),
  password: DS.attr('string'),
 
  allowDriver: DS.attr('boolean'),
  allowOrders: DS.attr('boolean'),
  allowPost: DS.attr('boolean'),
  allowNotyfication: DS.attr('boolean')


});
