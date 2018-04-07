import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service(),

  actions: {
    login() {
      const email = this.controller.get('email');
      const password = this.controller.get('password');

      this.get('session').open('jwt', {email: email, password: password}).then(result => {
        this.transitionTo('dashboard')
      });
    }
  }
});