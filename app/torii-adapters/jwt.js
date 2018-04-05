export default Ember.Object.extend({
  store: Ember.inject.service(), // inject the ember-data store

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authorization){
        // console.log(authorization)
      return {
        currentUser: authorization
      };

  }
});