var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'wass'
    },
    port: 3000,
    db: 'mongodb://localhost/wass-development'
    
  },

  test: {
    root: rootPath,
    app: {
      name: 'wass'
    },
    port: 3000,
    db: 'mongodb://localhost/wass-test'
    
  },

  production: {
    root: rootPath,
    app: {
      name: 'wass'
    },
    port: 3000,
    db: 'mongodb://localhost/wass-production'
    
  }
};

module.exports = config[env];
