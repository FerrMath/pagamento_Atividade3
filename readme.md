## Contexto
E outro projeto da empresa na qual você trabalha, você precisará usar seus conhecimentos em Javascript para implementar o comportamento de uma página de pagamento de um site de compras. Será possível pagar com Pix ou cartão de crédito e a página deverá se comportar adequadamente, mostrando os campos necessários e o valor calculado corretamente, já que há descontos ou juros aplicados em cada caso.
 
## Atividade
Observe os wireframes a seguir. Eles mostram a página com a opção Pix selecionada e com a opção Cartão de crédito selecionada.

![Wireframe com a opção Pix selecionada](./wireframes/pix.png)

![Wireframe com a opção Cartão de crédito selecionada](./wireframes/cc.png)


## Requisitos
Baseando-se nos wireframes, construa uma página HTML e programe os seguintes comportamentos:

* Ao clicar em Informar dados, caso o campo valor esteja em branco, deverá ser emitido um alerta ou ser mostrada na página uma mensagem informando que o campo deve ser preenchido.

* Ao clicar no botão Informar dados, tendo o item Pix selecionado, exibe-se um painel com as informações necessárias para Pix. Deve-se ainda mostrar o total aplicando 10% de desconto sobre o valor informado.

* Caso o item Cartão de crédito esteja selecionado, então mostra-se o formulário solicitando dados do cartão, que aplicará os seguintes comportamentos:

    * Ao digitar no campo Número, a bandeira do cartão será definida pela inicial da numeração. Se iniciar com “1234”, será mostrado um ícone e, se iniciar com “4321”, será mostrado outro ícone à frente do campo (a escolha da imagem fica a seu critério).
    * Ao digitar um valor que não inicie com “1234” nem com “4321”, deverá ser mostrada a mensagem “Número de cartão inválido”.
    * Ao abrir o painel, deve-se calcular e mostrar os valores de parcelamento, considerando que:
        * 1 a 3 parcelas são sem juros

        * 4 parcelas implicam 5% de juros sobre o valor informado inicialmente
        
        * 5 parcelas implicam em 10% de juros sobre o valor informado inicialmente
    
    * Ao selecionar uma opção no campo Parcelas, o valor Total abaixo do painel deve ser atualizado

* Ao clicar no botão Pagar, deve-se mostrar apenas uma mensagem de sucesso.
Em nenhuma condição, ambos os painéis (Pix e Cartão de crédito) podem aparecer ao mesmo tempo.