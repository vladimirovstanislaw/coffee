(function (window) {
  'use strict';
  var App=window.App || {};
  var $=window.jQuery;

  function RemoteDataStore(url) {
    if(!url){
      throw new Error('No remote URL supplie!');
    }
    this.serverUrl=url;
  }
  RemoteDataStore.prototype.add = function (key,val) {
    $.post(this.serverUrl,val, function (serverResponse) {
      console.log(serverResponse);
    });
  };
  RemoteDataStore.prototype.getAll = function () {
    $.get(this.serverUrl, function (serverResponse) {
      console.log(serverResponse);
    });
  };

  App.RemoteDataStore=RemoteDataStore;
  window.App=App;
})(window);
//var remoteDS= new App.RemoteDataStore("http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders");
