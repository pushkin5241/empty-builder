const mix = require('laravel-mix');

mix.disableNotifications();

mix.setPublicPath('dist');

mix.options({
    processCssUrls: false,
});

mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copy('src', 'dist', false);
mix.copy('resources/images', 'dist/images', false);
mix.copy('resources/fonts', 'dist/fonts', false);

mix.sass('resources/styles/app.scss', 'dist/css');
mix.js('resources/scripts/app.js', 'dist/scripts').extract();
