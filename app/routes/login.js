import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),
  
  beforeModel() {
    console.log(this.get('session.isAuthenticated'))
  },

  actions: {
    login() {
      this.get('session').open('jwt', {email: "email", password: "password"}).then(result => {
        this.transitionTo('dashboard')
      })       
    }
  }
});