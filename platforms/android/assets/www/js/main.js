$(document).ready(function() {


  var numeros = {

    ambulancia: 131,
    bomberos: 132,
    carabineros: 133,
    investigaciones: 134,
    familia: 149

  };

  function exit() {

    navigator.app.exitApp();

  }

  function call(who) {

    document.location.href = 'tel:' + numeros[who];

  }

  function setOptional($this) {

    $($this).click(function() {
      // TODO: RETRIEVE CONTACTS
    });

  }

  $('input[name=fono]').click(function() {

    call(this.id);

  });

  $('#optional').click(function() {

    /* TODO: set optional */

  });

  $('a[name=exit]').click(function(){

    exit();

  });

});
