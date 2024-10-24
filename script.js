let editando = false;
let itemEditado = null;

$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefaValor = $('#novaTarefa').val();

        if (!editando) {
            const adicionaTarefa = $(`<li>${novaTarefaValor}</li>`);
            adicionaTarefa.appendTo('ul');
        } else {
            itemSelecionado.text(novaTarefaValor);
            editando = false;
            itemSelecionado = null;
            $('button[type="submit"]').text('Adicionar');
        }

        $('#novaTarefa').val('');
        verificaSelecao();
    });

    verificaSelecao();

    $('#apagar').on("click", function() {
        if (itemSelecionado) {
            itemSelecionado.addClass("apagar").remove();
            $(".opcoes").slideUp(500);
        }
    });

    $('#finalizar').on("click", function() {
        if (itemSelecionado) {
            itemSelecionado.addClass("concluida");
            itemSelecionado.removeClass("selecionada");
            $(".opcoes").slideUp(500);
        }
    });

    $('#editar').on("click", function() {
        if (itemSelecionado) {
            const tarefaAtual = itemSelecionado.text();
            $('#novaTarefa').val(tarefaAtual);
            
            $('button[type="submit"]').text('Salvar Alteração');
            editando = true;
            itemEditado = itemSelecionado;

            itemSelecionado.removeClass("selecionada");
            $(".opcoes").slideUp(500);
        }
    });
});

const verificaSelecao = function() {
    $('ul').on('click', 'li', function() {
        itemSelecionado = $(this);
        $('li').removeClass("selecionada");
        itemSelecionado.addClass("selecionada");
        opcoes();
    });
};

const opcoes = function () {
    $(".opcoes").slideDown(500);
};