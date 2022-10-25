const now = String(Date.now());

module.exports = (config) => {
  config.addShortcode('version', function () {
    return now
  })

  config.addShortcode('modelSize', function(depth, length) {
    return depth + "'&times" +  length + "'";
  });

  config.addShortcode('modelArea', function(depth, length) {
    
    return (parseInt(depth) * parseInt(length)).toString();
  });

  config.addShortcode('modelPrice', function(price) {
    return parseInt(price).toLocaleString("en", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });    
  });
  
  // Needed to prevent eleventy from ignoring changes to `webpack.njk`
  // since it is in our `.gitignore`
  config.setUseGitIgnore(true);

  // Allow eleventy to understand yaml files
  // mostly because we want comments support in data file.
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));
  config.addPassthroughCopy({ 'public': './' });
  //config.addPassthroughCopy({ 'public/api/app': './api/app' });
  //config.addPassthroughCopy({ 'public/api/database': './api/database' });
  //config.addPassthroughCopy({ 'public/api/routes': './api/routes' });
  //config.addPassthroughCopy({ 'public/api/public': './api/public' });
  config.addPassthroughCopy({'src/_bundle/images': 'assets/images'});
  config.addPassthroughCopy({'src/_bundle/fonts': 'assets/fonts'});

  
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    htmlTemplateEngine: 'njk'
  }
}
