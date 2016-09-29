switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({ env: 'production' });
        break;
    default:
        module.exports = require('./config/webpack.dev')({ env: 'development' });
}