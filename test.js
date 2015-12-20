describe("When using karma-angular", function(){
  it("should be possible to access angular.mock.module", function(){
    expect(angular.mock.module).to.exist;
  });
  it("should be possible to access angular.mock.inject", function(){
    expect(angular.mock.inject).to.exist;
  });
});