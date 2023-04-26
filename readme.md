# Fade Effect

### Elementos aparecendo quando estão em focus

<a href="https://phscezario.github.io/fade-focus/" target="new">Veja Aqui</a>

## Como usar:

#### Adicionar a classe anim no elemento desejado.

#### Também adicione uma das classe abaixo:

-   _fade-in:_ Para efeito de fade-in, **< div class="fade-in"> Conteúdo da DIV < /div>**.

-   _fade-left:_ Para animação da esquerda para direita, **< div class="fade-left"> Conteúdo da DIV < /div>**.

-   _fade-right:_ Para animação da direita para esquerda, **< div class="fade-right"> Conteúdo da DIV < /div>**.

-   _fade-up:_ Para animação de cima para baixo, **< div class="fade-up"> Conteúdo da DIV < /div>**.

-   _fade-down:_ Para animação de baixo para cima, **< div class="fade-down"> Conteúdo da DIV < /div>**.

-   _fade-cascade:_ Essa classe define que itens filhos irão aparecer em cascata, **< div class="fade-cascade">**, ela pode ser usada em conjunto com todas acima.

### Atributos

-   _data-animation-time_ = ( Float ) Valor numérico que define o tempo de animação.

-   _data-animation-delay_ = ( Float ) Valor numérico que define o tempo para animação iniciar.

-   _data-animation-direction_ = String que define a direção do elementos filhos, apenas funciona com o _fade-cascade_, as opções possíveis são: `up, down, left, right`.

-   _data-animation-increment_ = ( Float ) Valor numérico que define o incremento dos elementos filhos e só funciona com o _fade-cascade_, o lavor padrão é: `0.5`.
