SpecialStuff = function(){};
SpecialStuff.prototype.version = '0.1';
define(['jquery'], function($){
  $(function(){
    console.log("an awesome work featuring jQuery v" + $.prototype.jquery + " and SpecialStuff v" + SpecialStuff.prototype.version);
  });
});