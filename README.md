# Consulta de Endereço via API CEP

Desenvolva um aplicativo em React Native que permita ao usuário consultar informações de endereço utilizando a API CEP Aberto. O usuário deverá inserir um CEP e, ao submeter o formulário, o aplicativo deverá:

## Funcionalidades

- Fazer uma requisição à API CEP para recuperar os dados de endereço.
- Exibir na tela as informações retornadas (como logradouro, bairro, cidade, estado, etc.).
- Tratar erros, exibindo uma mensagem apropriada caso o CEP seja inválido ou não encontrado.
- Exibir um indicador de carregamento enquanto a requisição estiver em andamento.

## Requisitos

### Formulário de Entrada

- Um campo de texto para que o usuário insira o CEP.
- Um botão para submeter a consulta.

### Requisição à API CEP

- Utilize o método HTTP `GET` para consultar a API.
- A URL da API e sua documentação podem ser acessadas em: [CEP API](https://viacep.com.br/) (ou outra API de sua preferência).

### Tratamento de Erros

- Caso o CEP informado não seja encontrado ou a API retorne erro, exiba uma mensagem de erro ao usuário.

### Feedback Visual

- Mostre um indicador de carregamento enquanto a requisição estiver em andamento.
- Atualize a interface conforme a resposta da API (sucesso ou erro).

### Boas Práticas

- Organize o código utilizando componentes funcionais e hooks (como `useState` e `useEffect`).
- Mantenha o código limpo e modularizado.
