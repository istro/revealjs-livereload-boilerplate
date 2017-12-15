## Reveal.js + Livereload (with gulp) boilerplate

If you find yourself making slides for presentations now and then, [reveal.js](https://revealjs.com/) is a sweet way to make awesome slide decks.

If you're more comfortable writing markdown and and prefer your own text editor to their online tool - you might want to use something to reload your slidedeck on save.

**This boilerplate does exactly that - serve `index.html` and reload it on change.** You can also add a css file at the root level, livereload will work for that as well.

Prerequisites: [npm](https://github.com/npm/npm)

Getting started: 

### Clone this repo including reveal.js (added here as a submodule):
```
git clone --recursive git@github.com:istro/revealjs-livereload-boilerplate.git
```

## Start writing up your presenttion in three trivial steps:

### Ready: 
#### Install gulp & related couple of packages

```
npm install
```

### Set: 
#### Serve up `index.html` locally, with auto reload on save:

```
gulp
```

### Go!

Add your content to `index.html` per [reveal.js](https://revealjs.com/) docs.
