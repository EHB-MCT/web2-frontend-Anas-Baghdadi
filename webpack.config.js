const path = require('path');

module.exports = {

    entry: {
        index: './src/index.js',
        favorites: './src/favorites.js',
        login: './src/login.js',
        register: './src/register.js',
        meals: './src/meals.js',
        plan: './src/plan.js',
        recipes: './src/plan.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'development'

};
