import Route from '@ember/routing/route';

export default Route.extend({
    session: Ember.inject.service(),
    
    actions: {
        login() {
            this.get('session').open('jwt', {email: "email", password: "password"}).then(result => {
                console.log(1)
                this.transitionTo('telaadmin')
            })       
        }
    }
});