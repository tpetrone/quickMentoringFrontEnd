import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    return this.get('session').close().then(() => {
      this.transitionTo('login');
    });
  }

});
