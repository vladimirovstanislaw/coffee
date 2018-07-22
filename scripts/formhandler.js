(function (window) {
  'use strict';
  var App=window.App || {};
  var $=window.jQuery;

  function FormHandler(selector) {
    if(!selector){
      throw new Error("No selector provided.");
    }
    //var formElement={};
    this.$formElement=jQuery(selector);
    if(this.$formElement.lenght===0){
      throw new Error("Could not find with this selector: " + selector);
    }
  }
  FormHandler.prototype.addSubmitHandler = function (fn) {
    console.log("Setting submit handler for form.");
    this.$formElement.on('submit', function (event) {
      event.preventDefault();

      var data={};
      jQuery(this).serializeArray().forEach(function (item) {
        data[item.name]=item.value;
        console.log(item.name+" is "+item.value);
      });
      if($("#coffeeOrder").val()==='vaska' & $("#strengthLevel").val()===100)
      {
        console.log('VASKA IS THE MOST POWERFULL RUSSIAN KOT');
      }
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    })
  };
  FormHandler.prototype.addInputHandler = function (fn) {
    console.log('Setting input handler for form.');
    this.$formElement.on('input','[name="emailAddress"]', function (event) {
      var emailAddress=event.target.value;
      var message='';
      if(fn(emailAddress))
      {
          event.target.setCustomValidity('');
      }
      else
      {
        message=emailAddress+' is not an authorized email_address.'
        event.target.setCustomValidity(message);
      }
    });
  };
  FormHandler.prototype.isVaska = function (fn) {
    this.$formElement.on('input','[name="strength"]', function (event) {

    });
  };
  App.FormHandler=FormHandler;
  window.App=App;
})(window);
