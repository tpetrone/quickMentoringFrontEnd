export default Ember.Object.extend({
  ajax: Ember.inject.service(),

  open(authentication) {
    const email = authentication.email; 
    const password = authentication.password;

    return new Ember.RSVP.Promise((resolve, reject) => {
      return this.get('ajax').request("/usuario/login", {
        method:'post', 
        data: { email, password } 
      }).then((user) => { 
        return resolve(user);
      });
    });
  }
});