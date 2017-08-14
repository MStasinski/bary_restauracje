// app/routes/libraries/index.js
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('pracownik');
  },

  actions: {

    deleteLibrary(pracownik) {
      let confirmation = confirm('Czy jesteś pewny?');

      if (confirmation) {
        pracownik.destroyRecord();
      }
    }
  }

});
