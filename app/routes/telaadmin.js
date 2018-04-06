import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service(),

    beforeModel() {
        console.log(this.get('session.isAuthenticated'))
    }
});
