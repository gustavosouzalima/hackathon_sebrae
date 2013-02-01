var titulo_caixa = "Item",
    campo_vazio = "Click para escrever";

// iniciar editables
function removeMsg(){
  $('#msg').hide('slow');
}

$('.campo_existente').editable({
  type: 'text',
  // pk: 1,
  url: urlJson,
  title: titulo_caixa,
  emptytext: campo_vazio,
  placement: "top",
  success: function(response) {
      if(response.success) {
        $('#msg').addClass('alert-success').removeClass('alert-error').html(response.msg).show();
        setTimeout(removeMsg,3000)
      } else if(response.error) {
        $('#msg').removeClass('alert-success').addClass('alert-error').html(response.msg).show();
        setTimeout(removeMsg,3000)
      }
  }
});


// fazer com que o campo seja required
$('.campo_editavel').editable('option', 'validate', function(v) {
    if(v == '') return 'Não pode ser vazio!';
});


// botao de adicionar novo item
$(".cell-container").mouseout(function(){
  $("button:first",this).hide();
}).mouseover(function(){
  $("button:first",this).show();
});


Array.max = function( array ){
return Math.max.apply( Math, array );
};


$(".btn-adicionar").click(function () {
  // pego o id do botao que eh o igual a classe que quero adicionar o item
  var todasClassesBotao = $(this).attr('class');
  var classeBotao = todasClassesBotao.split(" ")[0];

  // console.log($("a#"+classeBotao).attr('data-pk'));
  keys = []
  $("a#"+classeBotao).each(function() {
    // console.log(parseInt($(this).attr('data-pk')))
    keys.push(parseInt($(this).attr('data-pk')));
  });

  var maiorIndice = Array.max(keys);

  $("div"+"."+classeBotao).append('<a href="#" id="'+classeBotao+'" class="campo_dinamico editable-click editable-empty" data-type="text" data-placeholder="Required" title="'+titulo_caixa+'" data-pk="'+(maiorIndice + 1)+'">'+campo_vazio+'</a><br>');
});


$('.add-new-item').editable({
    selector: 'a',
    url: urlJson,
    success: function(response) {
        if(response.success) {
          $('#msg').addClass('alert-success').removeClass('alert-error').html(response.msg).show();
          setTimeout(removeMsg,3000)
        } else if(response.error) {
          $('#msg').removeClass('alert-success').addClass('alert-error').html(response.msg).show();
          setTimeout(removeMsg,3000)
        }
    }
});







