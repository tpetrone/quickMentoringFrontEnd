'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    sassOptions: {
     includePaths: [
       'bower_components/materialize/sass'
     ]
   }
    
  }); 

  
  return app.toTree();
};
