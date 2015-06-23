$(document).ready(function() {


  var numeros = {

    ambulancia: 131,
    bomberos: 132,
    carabineros: 133,
    investigaciones: 134,
    familia: 149

  };

  function call(who) {

    document.location.href = 'tel:' + numeros[who];

  }

  $('input[name=fono]').click(function() {

    call(this.id);

  });

});
