const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')

mix.disableNotifications()

mix.setPublicPath('dist')

mix.options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
})

mix.copy('src/templates', 'dist')
mix.copy('src/images', 'dist/images')
mix.copy('src/fonts', 'dist/fonts')

mix.js('src/scripts/app.js', 'dist/scripts')
    .sass('src/styles/app.scss', 'dist/styles')