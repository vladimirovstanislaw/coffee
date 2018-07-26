(function (window) {
  'use strict';
  var App=window.App || {};
  var count=1;

  function Truck(db) {
    this.truckId=count;
    this.db=db;
    count++;
  }
  Truck.prototype.getId = function () {
    return this.truckId;
  };
  Truck.prototype.createOrder = function (order) {
    console.log('Adding order for '+ order.emailAddress);
    return this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function (customerId) {
    console.log('Delevering oreder for '+customerId);
    return this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function () {
    return this.db.getAll()
    .then(function (orders) {
    var customerIdArray= Object.keys(orders);
    console.log('Truk #'+ this.truckId+' has pending orders: ');
    customerIdArray.forEach(function (id) {
      console.log(orders[id]);
    }.bind(this));
  }.bind(this));
  };
  App.Truck=Truck;
  window.App=App;
})(window);
