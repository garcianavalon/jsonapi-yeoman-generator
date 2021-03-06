'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-jsonapi-express:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'testing'});
  });

  it('creates files', () => {
    assert.file([
      'core/core_handler.js',
      'core/base_handler.js',
      'core/transconsole.js',
      'data_handlers/stub.js',
      'config/actions.js',
      'config/db.js',
      'bin/www',
      'adapters/http.js',
      'test/core/core_handler.test.js',
      'test/core/base_handler.test.js',
      'test/core/transconsole.test.js',
      'test/data_handlers/stub.test.js',
      'test/app.test.js',
      '.gitignore',
      'app.js',
      'docker-compose.test.yml',
      'docker-compose.yml',
      'Dockerfile',
      'package.json',
      'README.md'
    ]);
  });
});
