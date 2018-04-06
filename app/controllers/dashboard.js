import Controller from '@ember/controller';
import Materialize from 'materialize';

export default Controller.extend({

  actions: {
    userClick(id) {
      this.transitionToRoute('dashboard.usuario', id)
    }
  }
});
