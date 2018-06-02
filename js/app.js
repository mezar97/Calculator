var max_amount = 400000;
var min_amount = 5000;
var default_amount = 100000;
var step_amount = 1000;
var interest = 13.40;

var max_repayment = 15;
var min_repayment = 1;
var default_repayment = 15;
var step_repayment = 1;

$(document).ready(function() {
    $('#amount').change(function() {
        var months = $('#repayment').val() * 12;
        $('#monthly_cost').val(Math.round($(this).val() * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1)))));
    });

    $('#repayment').change(function() {
        var months = $(this).val() * 12;
        $('#monthly_cost').val(Math.round($('#amount').val() * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1)))));
    });

    $('#amount').trigger('change');
});


 $( function() {
   $( ".range" ).slider({
     range: "max",
     min :min_amount,
     max :max_amount,

     value: default_amount,
     
     slide: function( event, ui ) {
       $( "#amount",).val( ui.value );
     },
     change: function(){
         var months = $('#amount').val() * 12;
         $('#monthly_cost').val(Math.round($('#amount').val() * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1)))));   
        $('#amount').trigger('change');
     }
   });
 } );

 $( function() {
    $( ".range1" ).slider({
      range: "max",
      min :min_repayment,
      max :max_repayment,
      
 
      value:default_repayment,
      
      slide: function( event, ui ) {
        $( "#repayment",).val( ui.value );
      },
      change: function(){
         var months = $('#repayment').val() * 12;
         $('#monthly_cost').val(Math.round($(this).val() * (interest / 100) / 12 / (1 - Math.pow(1 + (interest / 100) / 12, (months * -1)))));   
         $('#amount').trigger('change');
      }
    });
  } );
