import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {
    this.route('usuario', { path: 'usuario/:usuario_id' });
    this.route('mentoria', { path: 'mentoria/:mentoria_id' });
    this.route('categoria', { path: 'categoria/:categoria_id' });
  });
  this.route('admin');
  this.route('logout');
});

export default Router;
