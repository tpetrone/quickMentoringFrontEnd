export default Ember.Object.extend({
  store: Ember.inject.service(), // inject the ember-data store

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authorization){
    return new Ember.RSVP.Promise(function(resolve, reject){
      localStorage.setItem('currentUser', authorization);
      resolve({currentUser: authorization});
    });
  },

  fetch() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      const authorization = localStorage.getItem('currentUser')
      if(authorization) {
        return resolve({currentUser: authorization});
      } else {
        return reject();
      }
    });
  },

  close() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      localStorage.removeItem('currentUser')
      return resolve({currentUser: {}});
    }); 
  }
});