
  describe('The function for checking amount of items over a threshold', function(){

      it('should find that the following items are over 20 in this list', function(){
          assert.equal('[{"name":"pears","qty":37},{"name":"bananas","qty":27}]', findItemsOver(itemList, 20));
      });
      it('should find that there are no items over 40 in this list', function(){
          assert.equal([], findItemsOver(itemList, 40));
      });
  });
