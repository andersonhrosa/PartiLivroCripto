# PartiLivro
![Logo PartiLivro](/src/img/logoNew.jpeg)

## Tabela de Conteúdos

- [PartiLivro](#partilivro)
  - [Tabela de Conteúdos](#tabela-de-conteúdos)
  - [Sobre ](#sobre-)
    - [Proponente ](#proponente-)
    - [Contexto ](#contexto-)
    - [Descrição ](#descrição-)
    - [Estórias dos Usúarios ](#estórias-dos-usúarios-)
    - [Diagrama de Classes UML ](#diagrama-de-classes-uml-)


## Sobre <a name = "about"></a>

### Proponente <a name = "proponente"></a>
**Anderson Henrique da Rosa**

### Contexto <a name = "contexto"></a>
Projeto da disciplina de **Laboratório de Projeto de Sistemas**, do curso de **Ciência da Computação da Puc Minas - Poços de Caldas**.

### Descrição <a name = "descrição"></a>
Sistema deve possibilitar o compartilhamento de livros entre os usuários através de uma aplicação descentralizada Web3. Um usuário pode tanto pegar um livro emprestado quanto emprestar os que ele possui. Cada usuário pode cadastrar e disponibilizar para empréstimo quantos livros quiser, porém só poderá emprestar uma quantidade limitada de livros, quantidade esta só aumentará conforme o usuário realize mais empréstimos para outros usuários.

### Estórias dos Usúarios <a name = "user-story"></a>

1. Como um usuário não cadastrado, gostaria de realizar o cadastro para ter acesso de contribuidor ou leitor. Após o cadastro desejo me auntenticar para ter acesso a aplicação. 

2. Como contribuidor, gostaria de compartilhar meus livros na plataforma, de forma que consiga cadastrar, editar, excluir e listar os livros do meu acervo.

3. Como contribuidor, quero gerenciar os empréstimos, podendo verificar e aprovar pedidos de empréstimo, assim como registrar a devolução.

4. Como leitor, desejo emprestar um livro de um contribuidor, podendo assim listar e selecionar um título de interesse. Ao selecionar um exemplar, devo selecionar a data de devolução do livro.

5. Como leitor, desejo listar os livros que emprestei e verificar suas respectivas datas de devolução.

6. Como leitor, gostaria de visualizar os dados de contato do contribuidor para dar finalizar o empréstimo.


<!---
### Casos de Uso <a name = "use-case"></a>
| Nome     | Categoria | Descrição |
| ----------- | ----------- | ----------- |
| Marcelo | Contribuidor| Pessoa que tem livros ociosos e deseja compartilha-los com outras pessoas. Pode cadastrar os livros que deseja emprestar, através de uma conta que lhe dá acesso ao sistema e permite vincular os livros desejados ao seu catálogo pessoal. Além de cadastrar, consegue editar e remover os títulos que cadastrou. Também pode listar todos os livros que cadastrou e verificar se há algum pedido de empréstimo para algum título cadastrado. E ainda, quando houver um pedido de empréstimo poderá aprova-lo, mudando o estado do item para “emprestado”, ou rejeita-lo colocando-o como “disponível” novamente. Por fim, no momento da devolução do livro, este poderá alterar o estado do item para “disponível”, desvinculando o livro do ultimo leitor. |
| Pedro | Leitor| Pessoa registrada na plataforma que deseja fazer empréstimos de livros de algum contribuidor. Ela pode listar todos os livros que estão disponíveis para empréstimo e ao selecionar um título de interesse, poderá solicitar o empréstimo, definindo a data de devolução do título. Após isto o título passará para o estado de “solicitado”, impossibilitando o empréstimo para os demais usuários. Dada a aprovação do empréstimo, o livro ficará vinculado a conta do usuário, de onde será possível listar os títulos que emprestou junto a data de devolução deste. |
-->

### Diagrama de Classes UML <a name = "diagrama"></a>
![Diagrama de Classes PartiLivro](/src/img/ClasseUML.png)
<!---### Diagrama UML <a name = "diagrama"></a>
![Diagrama de Classes PartiLivro](/assets/img/PartiLivro.png)
<!---
## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo.

## Usage <a name = "usage"></a>

Add notes about how to use the system.

https://github.com/techwithtim/Flask-Web-App-Tutorial
https://www.youtube.com/watch?v=dam0GPOAvVI
-->
