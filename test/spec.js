describe('chunk', function() {
  it('should split arrays into chunks', function() {
    expect(chunk([1,2,3,4,5,6,7,8,9,10], 2)).toEqual([ [1,2,3,4,5], [6,7,8,9,10] ]);
  });
});