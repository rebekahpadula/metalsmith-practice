var Metalsmith = require('metalsmith');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
    .metadata({
        title: 'Metalsmith Practice',
        description: 'This is a description of my website.'
    })
    // here's where to find the stuff
    .source('./src')
    // here's where to put it
    .destination('./')
    .clean(true)

    // plugins
    .use(markdown())
    .use(permalinks({
        relative: false
    }))
    .use(layouts({
        engine: 'handlebars'
    }))
    .build(function(err) {
        if(err) throw err
    });