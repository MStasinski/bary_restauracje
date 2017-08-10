// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('pizza');
  },

  actions: {

    deleteLibrary(pizza) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        pizza.destroyRecord();
      }
    }
  }

});
