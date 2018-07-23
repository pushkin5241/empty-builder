const {mix} = require('laravel-mix');
let ImageminPlugin = require('imagemin-webpack-plugin').default;

mix.setPublicPath('dist');

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.options({
    processCssUrls: false,
});

mix.webpackConfig({
    plugins: [
        new ImageminPlugin({
            pngquant: {
                quality: '95-100',
            },
            test: /\.(jpe?g|png|gif|svg)$/i,
        })
    ]
});

mix.disableNotifications();

mix.copy('src', 'dist', false);
mix.copy('resources/images', 'dist/images', false);
mix.copy('resources/fonts', 'dist/fonts', false);

mix.sass('resources/styles/app.scss', 'dist/css')
    .js('resources/scripts/app.js', 'dist/scripts');