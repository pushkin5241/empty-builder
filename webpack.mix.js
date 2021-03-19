const {mix} = require('laravel-mix');

mix.setPublicPath('dist');

/*mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});*/

mix.options({
    processCssUrls: false,
});

mix.disableNotifications();

mix.copy('src', 'dist', false);
mix.copy('resources/images', 'dist/images', false);
mix.copy('resources/fonts', 'dist/fonts', false);

mix.sass('resources/styles/app.scss', 'dist/css')
    .js('resources/scripts/app.js', 'dist/scripts');
