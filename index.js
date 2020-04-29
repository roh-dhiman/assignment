const minus = $('.quantity__minus');
const plus = $('.quantity__plus');
const input = $('.quantity__input');
var value = input.val();

$(document).ready(function() {
    minus.click(function(e) {
    e.preventDefault();

    if (value > 1) {
    value--;
    }
    input.val(value);
    });

    plus.click(function(e) {
    e.preventDefault();

    value++;
    input.val(value);
    })
});

$('#btnClick').on('click',function(){

    $(this).removeClass("btn-light").addClass("btn-success");
    $('#btnClick2').removeClass("btn-success").addClass("btn-light");
    if($('#div1').css('display')=='none'){
    $('#div1').show();
    $('#div2').hide();
    $('#div3').html('<h5>Aashirvaad Atta - Whole Wheat, 10 kg Pouch</h5> <p><b>Rs. 399</b></p>');
    }
});

$('#btnClick2').on('click',function(){
    $(this).removeClass("btn-light").addClass("btn-success");
    $('#btnClick').removeClass("btn-success").addClass("btn-light");

    if($('#div2').css('display')=='none'){
        $('#div2').show();
        $('#div1').hide();
        $('#div3').html('<h5>Aashirvaad Atta - Whole Wheat, 5 kg Pouch</h5> <p><b>Rs. 209</b></p>');
    }
});

$('#btnClick3').on('click',function() {
    if($('#div1').css('display')!='none'){
        var v = value*399;
        $('#div4').html('  = Rs '+v);
    }
    else{
        var v = value*209;
        $('#div4').html('  = Rs '+v);
    }
});