/*global describe, beforeEach, it*/
'use strict';

var assert  = require('assert');

describe('bootstrap-dunique generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app/index');
    assert(app !== undefined);
  });
});