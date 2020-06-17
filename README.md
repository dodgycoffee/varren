# Varren
A minimal gulp 4 build starter

## Installation
Install is nice and simple. Open a brand new project, and just run:
```
npx dodgycoffee/varren
```

## Commands
After install is complete, the following build commands will be available:

- `gulp test` verifies gulp is working. If this fails you'll need to run `npm install --global gulp-cli`
- `gulp build` runs the production build step (minification, sourcemaps, image optimisation, etc)
- `gulp optimise` runs the image optimiser only (good for right after adding a bunch of new source images)
- `gulp watch` runs the watcher. This will monitor scss/js files for changes and auto-build development on save. Excludes the image optimisation step

> To add or modify commands, simple edit your gulpfile.js file

## FAQ
- **How do I do *specifically* so and so?**
    - It's impossible I quit.