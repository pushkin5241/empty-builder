const {mix} = require('laravel-mix');
let ImageminPlugin = require('imagemin-webpack-plugin').default;

mix.setPublicPath('public');

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

mix.copy('src', 'public', false);
mix.copy('resources/images', 'public/images', false);
mix.copy('resources/fonts', 'public/fonts', false);

mix.sass('resources/styles/template.scss', 'public/css')
    .sass('resources/styles/media.scss', 'public/css')
    .js('resources/scripts/app.js', 'public/scripts');