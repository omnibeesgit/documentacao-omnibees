---
sidebar_label: RF 1.1: Wizard Novo Cliente
title: RF 1.1: Wizard Novo Cliente
description: Este documento detalha o processo de criação de novos clientes através do 'Wizard Novo Cliente' na plataforma Beehive. Abrange a validação de identificação fiscal para evitar duplicados, a configuração de dados essenciais do cliente e da propriedade (endereço, contactos, faturação), a criação de um utilizador inicial e a atribuição de permissões e gestores de conta, garantindo a correta parametrização e segurança do novo registo.
slug: /beehive/gestao-de-hoteis/novo-cliente
---

# RF 1.1: Wizard Novo Cliente

(Copiado do conteúdo do documento [WA 01 - Property Management.docx](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/Documentos%20Publicos/BeeHive/Documenta%C3%A7%C3%A3o%20Por%20Ecr%C3%A3s/01%20-%20Gest%C3%A3o%20de%20Hoteis/WA%2001%20-%20Property%20Management.docx?d=wcb9ac058248b4a18869e8c950ff71ab9&csf=1&web=1&e=dmqVur))

**Requisito Funcional**

Neste painel, é possível configurar todas as informações obrigatórias para a criação de um novo cliente. É acessível apenas a utilizadores do tipo Gestor de Conta.

Para aceder à configuração de todos os detalhes do novo cliente, é necessário, num primeiro passo, inserir a identificação fiscal do cliente que se pretende criar.
O sistema valida a criação de cliente duplicado por identificação fiscal, pedindo ao utilizador que insira os dados.

![pop up validacao cliente duplicado](</assets/beehive/gestao-de-hoteis/novo-cliente/pop up validacao cliente duplicado.JPG> "pop up validacao cliente duplicado")

Se existir em qualquer Extranet ou na Omnibees um cliente com a mesma identificação fiscal, o sistema dá um alerta indicando qual/quais os clientes com identificação fiscal igual e não permite a criação do cliente.

![cliente duplicado](</assets/beehive/gestao-de-hoteis/novo-cliente/cliente duplicado.JPG> "cliente duplicado")

Mediante uma permissão específica, o sistema pode permitir criar o cliente mesmo que com identificação fiscal duplicada. A permissão específica chama-se "Criar cliente ou propriedade potencialmente duplicada".

![cliente duplicado continuar](</assets/beehive/gestao-de-hoteis/novo-cliente/cliente duplicado continuar.JPG> "cliente duplicado continuar")

Ao contrário do que acontece na Omnibees, em Extranet um utilizador que tenha a permissão "Criar cliente ou propriedade potencialmente duplicada" não conseguirá criar clientes duplicados.
Em Extranet, ter ou não esta permissão terá o mesmo efeito: é apresentado o alerta de cliente(s) duplicado(s) e o sistema não permite avançar.

O *Wizard* de Novo Cliente tem o seguinte aspeto:
![wizard novo cliente](</assets/beehive/gestao-de-hoteis/novo-cliente/wizard novo cliente.JPG> "wizard novo cliente")

**Critérios de Aceitação**

O *Wizard* de Novo Cliente tem um fluxo onde o Gestor de Conta pode configurar:

*   Principais detalhes do cliente
*   Criação de uma propriedade
*   As informações de faturação da propriedade
*   Criação de um utilizador
*   Atribuição de uma ou mais permissões ao utilizador
*   Associação da nova propriedade a um ou mais gestores de conta

| **Campo**                                | **Obrigatório?**                                     |
| :--------------------------------------- | :--------------------------------------------------- |
| **Cliente**                              | N/A                                                  |
| **Nome Comercial**                       | S                                                    |
| **Nome Fiscal**                          | S                                                    |
| **ID Salesforce**                        | N                                                    |
| **Número de Hotéis**                     | S                                                    |
| **Número Fiscal**                        | S                                                    |
| **País**                                 | S                                                    |
| **CEP / Código Postal**                  | S                                                    |
| **Tipo**                                 | S (apenas visível quando o país do cliente é Brasil) |
| **Endereço / Morada**                    | S                                                    |
| **Número**                               | S (apenas visível quando o país do cliente é Brasil) |
| **Complemento**                          | N (apenas visível quando o país do cliente é Brasil) |
| **Bairro**                               | S (apenas visível quando o país do cliente é Brasil) |
| **Estado**                               | S                                                    |
| **Cidade**                               | S                                                    |
| **Email**                                | S                                                    |
| **Telefone**                             | N                                                    |
| **Telemóvel/Celular**                    | N                                                    |
| **Website**                              | N                                                    |
| **Pessoa de Contacto**                   | S                                                    |
| **Email da Pessoa de Contacto**          | S                                                    |
| **Telefone da Pessoa de Contacto**       | S                                                    |
| **Propriedade**                          | N/A                                                  |
| **Nome**                                 | S                                                    |
| **ID Salesforce**                        | N                                                    |
| **Idioma Base**                          | S                                                    |
| **Moeda Base**                           | S                                                    |
| **Fuso Horário**                         | S                                                    |
| **Categoria da Propriedade**             | S                                                    |
| **Total de Apartamentos**                | S                                                    |
| **Permite Crianças**                     | N                                                    |
| **Classificação**                        | N                                                    |
| **País**                                 | S                                                    |
| **CEP / Código Postal**                  | N                                                    |
| **Endereço / Morada**                    | N                                                    |
| **Estado**                               | S                                                    |
| **Cidade**                               | S                                                    |
| **Latitude**                             | S                                                    |
| **Longitude**                            | S                                                    |
| **Pessoa de Contacto**                   | S                                                    |
| **Email**                                | S                                                    |
| **Telefone da Pessoa de Contacto**       | S                                                    |
| **Faturamento / Faturação**              | N/A                                                  |
| **O mesmo que a empresa**                | N                                                    |
| **Nome da Propriedade**                  | S                                                    |
| **Nome Fiscal**                          | S                                                    |
| **Número Contribuinte**                  | S                                                    |
| **Email**                                | N                                                    |
| **Telefone**                             | N                                                    |
| **País**                                 | S                                                    |
| **CEP / Código Postal**                  | S                                                    |
| **Tipo**                                 | S (apenas visível quando o país do cliente é Brasil) |
| **Endereço / Morada**                    | S                                                    |
| **Número**                               | S (apenas visível quando o país do cliente é Brasil) |
| **Complemento**                          | N (apenas visível quando o país do cliente é Brasil) |
| **Bairro**                               | S (apenas visível quando o país do cliente é Brasil) |
| **Estado**                               | S                                                    |
| **Cidade**                               | S                                                    |
| **Usuário / Utilizador**                 | N/A                                                  |
| **Prefixo**                              | S                                                    |
| **Nome Próprio**                         | S                                                    |
| **Sobrenome**                            | N                                                    |
| **Data de Nascimento**                   | N                                                    |
| **Email**                                | S                                                    |
| **Telefone**                             | N                                                    |
| **Categoria**                            | N                                                    |
| **Número de Visualizações do CC**        | S (10 por definição)                                 |
| **Usuário / Utilizador**                 | S                                                    |
| **Senha / Palavra-Passe**                | N                                                    |
| **Data de Expiração da Senha / Palavra-Passe** | S (a data por padrão é o dia atual + 60 dias)        |
| **Autenticação de dois fatores**         | N (inativo por definição)                            |
| **Usuário / Utilizador bloqueado**       | N (inativo por definição)                            |
| **Permissões**                           | N/A                                                  |
| **Lista de Permissões**                  | N                                                    |
| **Nome da Permissão**                    | N                                                    |
| **Gestores de Conta**                    | N/A                                                  |
| **Lista de Gestores de Conta**           | N                                                    |
| **Nome de Gestor de Conta**              | N                                                    |

O painel deve validar as permissões do utilizador e mostrar as informações de acordo.
Enquanto navega no *wizard*, o utilizador tem sempre a possibilidade de voltar atrás para rever ou mudar as informações previamente preenchidas.
O utilizador, para avançar para o passo seguinte, deve preencher todos os campos obrigatórios no formato correto.

**Aba Cliente**

O número de hotéis é um valor numérico e deve ser maior do que zero.

É possível preencher as informações da morada diretamente no formulário ou escolher a morada através do Google Maps.
Ao utilizar o Google Maps, é possível pesquisar por uma morada específica ou escolher uma localização diretamente no mapa. Este deve incluir funcionalidades como *zoom in* e *zoom out*, vista de satélite, vista de rua e a opção "a minha localização". Depois de encontrar a localização correta, é possível usar a morada, as coordenadas GPS ou ambas.

Os campos (endereço/morada) "Tipo" e "Número" apenas são visíveis quando o utilizador seleciona "Brasil" como país. A API deve retornar a lista de (endereço/morada) tipos.

O campo CNPJ/CPF é preenchido por definição com o valor inserido no *pop-up* de validação de CNPJ/CPF duplicado.
O formato do CNPJ/CPF (número de contribuinte) pode variar consoante o país. Caso não esteja no formato correto, será mostrada uma mensagem de erro.
Uma vez que o CNPJ/CPF (número de contribuinte) é um campo importante usado para questões de faturação e que a maioria dos nossos clientes está no Brasil, quando o utilizador escolhe o país "Brasil", o sistema deve mostrar e validar se o campo está no seguinte formato: `99.999.999/9999-99` (`size 0-18`).

Para o país Brasil, os campos Nome Comercial, Nome Fiscal, CNPJ/CPF (número de contribuinte), Endereço/Morada e Número não podem conter caracteres especiais. Esta informação é também usada para questões de faturação, quando esta é por cliente.

A API deve retornar a lista de Países, Estados e Cidade. Quando um utilizador seleciona determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades. A lista de cidades corresponde ao Estado selecionado.

O formato do Email e do Email da Pessoa de Contacto deve ter validação. `@` é caractere obrigatório, deve ser único e deve estar no seguinte formato: `text@text.text`.

**Aba Propriedade**

É possível criar propriedades com o mesmo nome ou com o nome da empresa.

O número de quartos/apartamentos é um valor numérico e deve ser maior que zero.

É possível inserir a morada diretamente no formulário ou selecionar no Google Maps com os mesmos comportamentos e funcionalidades descritas anteriormente.

A API deve retornar a lista de Idiomas Base, Moedas Base, Fusos Horários e Categorias de Propriedades.

O sistema valida as informações inseridas nos campos "Longitude" e "Latitude".
`Latitude` deve estar entre 90 e -90.
`Longitude` deve estar entre 180 e -180.

**Aba Faturamento/Faturação**

Regras "O mesmo que a empresa":

*   O utilizador seleciona a opção "O mesmo que a empresa". Os campos subsequentes devem ser preenchidos automaticamente com as informações do cliente:
    *   Nome da Propriedade - para o país Brasil, não são permitidos caracteres especiais
    *   Nome Fiscal - para o país Brasil, não são permitidos caracteres especiais
    *   CNPJ/CPF (Número Contribuinte) - para o país Brasil, não são permitidos caracteres especiais
    *   Email
    *   Telefone
    *   País
    *   Tipo – visível apenas quando o utilizador seleciona "Brasil" como país
    *   Endereço – para o país Brasil, não são permitidos caracteres especiais
    *   Número - visível apenas quando o utilizador seleciona "Brasil" como país – não são permitidos caracteres especiais
    *   Estado
    *   Cidade
    *   CEP / Código Postal
*   O utilizador seleciona/marca a opção "O mesmo que a empresa" e o formulário é automaticamente preenchido com as informações do cliente. Caso o utilizador remova/desmarque a opção selecionada, o formulário deve ser limpo.
*   O utilizador seleciona/marca a opção "O mesmo que a empresa" e o formulário é automaticamente preenchido com as informações do cliente. Caso o utilizador edite alguma informação, a opção "O mesmo que a empresa" deve ser automaticamente removida/desmarcada.

Quando a opção "O mesmo que a empresa" não está selecionada/marcada, a UI aplica as mesmas regras mencionadas anteriormente para o país Brasil e também a validação do formato dos campos, tais como CNPJ/CPF, email, entre outros.

O nome da empresa é um campo obrigatório, pois é utilizado para questões de faturação, quando esta é por cliente.

**Aba Usuário/Utilizador**

É obrigatório criar um novo utilizador quando se está a configurar um novo cliente. Todas as restrições de formato definidas no capítulo Utilizadores – Criação de Utilizador devem ser consideradas no painel das principais informações do utilizador.

A propriedade criada deve ser automaticamente associada ao novo utilizador.

**Aba Permissões**

A lista de permissões deve conter todas as permissões criadas pelo utilizador administrador ou gestor de conta.

Não é obrigatório selecionar permissões. É possível escolher uma ou mais permissões para o utilizador. É possível ver os detalhes das permissões (modo de visualização apenas).

**Aba Gestores de Conta**

A lista de Gestores de Conta deve incluir todos os Gestores de Conta que existem no sistema.

Não é obrigatório escolher um Gestor de Conta. É possível associar vários Gestores de Conta à propriedade.

A propriedade criada no momento é automaticamente atribuída ao gestor de conta que a está a criar.

**Aba Confirmação**

No último passo do *Wizard* de Cliente deve ser mostrado ao utilizador um resumo de todas as configurações que fez.

Depois de criar o cliente, é possível criar outro cliente e reiniciar o formulário do *Wizard* ou terminá-lo. Quando finalizado, é possível mudar o contexto da aplicação para a nova propriedade.

O campo "Cliente White-label" é automaticamente preenchido com o white-label em contexto, apesar de não aparecer no *Wizard* de Novo Cliente.

O cliente aparece na lista de clientes do mesmo White-label (na Extranet onde foi criado e na Omnibees) com a indicação de qual o seu White-label, ou seja, a partir do momento da criação com sucesso, o cliente fica disponível na Extranet onde foi criado e na Omnibees para todos os utilizadores que tenham acesso. Não fica disponível noutras Extranets.

---

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner       | Referência de alteração | Observações                               |
| :---------------- | :---------- | :---------------------- | :---------------------------------------- |
| 03-09-2025        | N8N         | -                       | Conversão da documentação para Docusaurus |
| 14-12-2022        | Ana Antunes | O-940                   | Novo Form de Clientes                     |