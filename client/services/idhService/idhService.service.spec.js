'use strict';

describe('Service: idhService', function() {
  // load the service's module
  beforeEach(module('idhAngularApp.idhService'));

  // instantiate service
  var idhService;
  beforeEach(inject(function(_idhService_) {
    idhService = _idhService_;
  }));

  it('should do something', function() {
    expect(!!idhService).to.be.true;
  });
});
