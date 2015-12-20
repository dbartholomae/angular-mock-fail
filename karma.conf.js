module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai', 'angular'],
    files: ['test.js'],
    reporters: ['dots'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};