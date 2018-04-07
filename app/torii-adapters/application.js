export default Ember.Object.extend({
  store: Ember.inject.service(), // inject the ember-data store

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authorization){
    return new Ember.RSVP.Promise(function(resolve, reject){
      if (authorization) {
        localStorage.setItem('quiMentoring:accessToken', authorization.accessToken);
        return resolve({accessToken: authorization.accessToken});
      } else {
        return reject()
      }
    });
  },

  fetch() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      const authorization = localStorage.getItem('quiMentoring:accessToken');
      if (authorization) {
        return resolve({accessToken: authorization});
      } else {
        return reject();
      }
    });
  },

  close() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      localStorage.removeItem('quiMentoring:accessToken')
      return resolve({accessToken: {}});
    }); 
  }
});