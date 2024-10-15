let opcaoSelecionada = '';
let itemSelecionado = '';

$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefaValor = $('#novaTarefa').val();
        const adicionaTarefa = $(`<li>${novaTarefaValor}</li>`);
        adicionaTarefa.appendTo('ul')
        $('#novaTarefa').val('');
        verificaSelecao();
    })
    verificaSelecao();
})

const verificaSelecao = function() {
// dentro da ul o click no li irá retornar a função
    $('ul').on('click', 'li', function() {
        itemSelecionado = $(this);
        itemSelecionado.addClass("selecionada")
        opcoes();
    });
}

const opcoes = function () {
    $(".opcoes").slideDown(500);
    $(".opcoes").on("click", "button", (function(e) {
        opcaoSelecionada = e.target.id;
        itemSelecionado.removeClass("selecionada")
        if (opcaoSelecionada == "apagar") {
            $('#finalizar, #editar').slideUp();
            $('#apagar').on("click", function(){
                itemSelecionado.addClass("apagar")
                $('#apagar').slideUp(500);
            })
// Irá apagar a li selecionada
        } else if (opcaoSelecionada == "finalizar") {
            $('#apagar, #editar').slideUp();
            $('#finalizar').on("click", function(){
                itemSelecionado.addClass("concluida");
                $('#finalizar').slideUp(500);
            })
// Irá marcar como concluída a li selecionada
        } else if (opcaoSelecionada == "editar") {
            $('#finalizar, #apagar').slideUp();
            $('#editar').on("click", function(){
                const mudaTarefa = $('#novaTarefa').val();
                itemSelecionado.text(mudaTarefa)
                $('#editar').slideUp(500);
            })
// Irá editar a li selecionada
        }
    }));
};

// o código está apresentando um bug, 
// só funciona na primeira utilização das opções após ela as opções não aparecem novamente.