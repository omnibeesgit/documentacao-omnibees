```markdown
---
sidebar_label: RF 1.1: Wizard Novo Cliente
title: RF 1.1: Wizard Novo Cliente
description: Este documento detalha o funcionamento do Wizard de Novo Cliente, que permite a configuração de dados essenciais para a criação de um novo cliente e propriedade, incluindo validações de duplicidade e regras específicas para o preenchimento de campos.
slug: /beehive/gestao-de-hoteis/novo-cliente
---

# RF 1.1: Wizard Novo Cliente

**Requisito Funcional**

Neste painel, é possível criar todas as informações obrigatórias para a configuração de um novo cliente, sendo acessível apenas a utilizadores do tipo "Gestor de Conta".

Para aceder à configuração de todos os detalhes do novo cliente, é necessário, num primeiro passo, inserir a identificação fiscal do cliente a ser criado. O sistema verifica a existência de clientes duplicados por identificação fiscal.

![pop up validacao cliente duplicado](</assets/beehive/gestao-de-hoteis/novo-cliente/pop up validacao cliente duplicado.png> "pop up validacao cliente duplicado")

Se existir, em qualquer extranet ou no Omnibees, um cliente com a mesma identificação fiscal, o sistema exibe um alerta indicando qual(is) cliente(s) possui(em) essa identificação e não permite a criação do novo cliente.

![cliente duplicado](</assets/beehive/gestao-de-hoteis/novo-cliente/cliente duplicado.png> "cliente duplicado")

Mediante uma permissão específica, o sistema pode permitir criar o cliente mesmo com identificação fiscal duplicada. Essa permissão específica chama-se "Criar cliente ou propriedade potencialmente duplicada".

![cliente duplicado continuar](</assets/beehive/gestao-de-hoteis/novo-cliente/cliente duplicado continuar.png> "cliente duplicado continuar")

Ao contrário do que acontece no Omnibees, na Extranet, um utilizador que tenha a permissão "Criar cliente ou propriedade potencialmente duplicada" não conseguirá criar um cliente duplicado. Na Extranet, ter ou não a permissão "Criar cliente ou propriedade potencialmente duplicada" tem o mesmo efeito: é apresentado o alerta de cliente(s) duplicado(s) e o sistema não permite avançar.

O Wizard de Novo Cliente tem o seguinte aspeto:
![wizard novo cliente](</assets/beehive/gestao-de-hoteis/novo-cliente/wizard novo cliente.png> "wizard novo cliente")

**Critérios de Aceitação**

O Wizard de Novo Cliente possui um fluxo onde o Gestor de Conta pode configurar:

*   Principais detalhes do cliente
*   Criar uma propriedade
*   A informação de faturação da propriedade
*   Criar um utilizador
*   Atribuir uma ou mais permissões ao utilizador
*   Associar a nova propriedade a um ou mais gestores de conta

| Campo | Obrigatório? | |
|:---|:---|:---|
| **Cliente** | N/A | |
| | **Nome Comercial** | S |
| | **Nome Fiscal** | S |
| | **ID Salesforce** | N |
| | **Nº Hotéis** | S |
| | **Número Fiscal** | S |
| | **País** | S |
| | **CEP / Código Postal** | S |
| | **Tipo** | S (apenas visível quando o país do cliente for Brasil) |
| | **Endereço / Morada** | S |
| | **Número** | S (apenas visível quando o país do cliente for Brasil) |
| | **Complemento** | N (apenas visível quando o país do cliente for Brasil) |
| | **Bairro** | S (apenas visível quando o país do cliente for Brasil) |
| | **Estado** | S |
| | **Cidade** | S |
| | **Email** | S |
| | **Telefone** | N |
| | **Celular / Telemóvel** | N |
| | **Website** | N |
| | **Pessoa de Contacto** | S |
| | **Email da Pessoa de Contacto** | S |
| | **Telefone da Pessoa de Contacto** | S |
| **Propriedade** | N/A | |
| | **Nome** | S |
| | **ID Salesforce** | N |
| | **Idioma Base** | S |
| | **Moeda Base** | S |
| | **Fuso Horário** | S |
| | **Categoria da Propriedade** | S |
| | **Total de Apartamentos** | S |
| | **Permite Crianças** | N |
| | **Classificação** | N |
| | **País** | S |
| | **CEP / Código Postal** | N |
| | **Endereço / Morada** | N |
| | **Estado** | S |
| | **Cidade** | S |
| | **Latitude** | S |
| | **Longitude** | S |
| | **Pessoa de Contato** | S |
| | **Email** | S |
| | **Telefone da Pessoa de Contato** | S |
| **Faturamento / Faturação** | N/A | |
| | **O mesmo que a empresa** | N |
| | **Nome da Propriedade** | S |
| | **Nome Fiscal** | S |
| | **Número Contribuinte** | S |
| | **Email** | N |
| | **Telefone** | N |
| | **País** | S |
| | **CEP / Código Postal** | S |
| | **Tipo** | S (apenas visível quando o país do cliente for Brasil) |
| | **Endereço / Morada** | S |
| | **Número** | S (apenas visível quando o país do cliente for Brasil) |
| | **Complemento** | N (apenas visível quando o país do cliente for Brasil) |
| | **Bairro** | S (apenas visível quando o país do cliente for Brasil) |
| | **Estado** | S |
| | **Cidade** | S |
| **Usuário / Utilizador** | N/A | |
| | **Prefixo** | S |
| | **Nome Próprio** | S |
| | **Sobrenome** | N |
| | **Data de Nascimento** | N |
| | **Email** | S |
| | **Telefone** | N |
| | **Categoria** | N |
| | **Número de Visualizações do CC** | S (10 por padrão) |
| | **Usuário / Utilizador** | S |
| | **Senha / Palavra-Passe** | N |
| | **Data de Expiração da Senha / Palavra-Passe** | S (a data por padrão é o dia atual + 60 dias) |
| | **Autenticação de dois fatores** | N (inativo por padrão) |
| | **Usuário / Utilizador bloqueado** | N (inativo por padrão) |
| **Permissões** | N/A | |
| | **Lista de Permissões** | N |
| | **Nome da Permissão** | N |
| **Gestores de Conta** | N/A | |
| | **Lista de Gestores de Conta** | N |
| | **Nome de Gestor de Conta** | N |

O painel deve validar as permissões do utilizador e exibir a informação de acordo. Enquanto navega no Wizard, o utilizador tem sempre a possibilidade de voltar atrás para rever ou alterar a informação previamente preenchida. O utilizador, para avançar para o passo seguinte, deve preencher todos os campos obrigatórios no formato correto.

**Aba Cliente**

O número de hotéis é um valor numérico e deve ser maior que zero.

É possível preencher a informação da morada diretamente no formulário ou selecioná-la através do Google Maps. Ao usar o Google Maps, é possível pesquisar por uma morada específica ou escolher uma localização diretamente pelo mapa (este deve incluir funcionalidades como zoom in e zoom out, vista de satélite, vista de rua e a minha localização). Após encontrar a localização correta, é possível usar a morada, as coordenadas GPS ou ambas.

Os campos "Tipo" e "Número" (relativos ao endereço/morada) são visíveis apenas quando o utilizador seleciona "Brasil" como país. A API deve retornar a lista de tipos de endereço/morada.

O campo CNPJ/CPF é, por definição, preenchido com o valor inserido no pop-up de validação de CNPJ/CPF duplicado. O formato do CNPJ/CPF (número contribuinte) pode variar consoante o país. Caso não esteja no formato correto, será exibida uma mensagem de erro. Uma vez que o CNPJ/CPF (número contribuinte) é um campo importante utilizado para questões de faturamento/faturação e a maioria dos nossos clientes estão no Brasil, quando o utilizador escolhe o país "Brasil", o sistema deve exibir e validar se o campo está no seguinte formato: 99.999.999/9999-99 (tamanho 0-18).

Para o país Brasil, os campos nome comercial, nome fiscal, CNPJ/CPF (número contribuinte), endereço/morada e número não podem conter caracteres especiais. Esta informação é também utilizada para questões de faturamento/faturação, quando esta é por cliente.

A API deve retornar a lista de Países, Estados e Cidades. Quando um utilizador seleciona determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades, cuja lista corresponde ao Estado selecionado.

O formato do Email e do Email da Pessoa de Contacto deve ser validado. O caractere '@' é obrigatório, deve ser único e o formato deve ser: [text@text.text](mailto:text@text.text).

**Aba Propriedade**

É possível criar propriedades com o mesmo nome ou com o nome da empresa.

O número de quartos/apartamentos é um valor numérico e deve ser maior que zero.

É possível inserir a morada diretamente no formulário ou selecioná-la no Google Maps, com os mesmos comportamentos e funcionalidades descritas anteriormente.

A API deve retornar a lista de Idiomas Base, Moedas Base, Fusos Horários e Categorias de Propriedades.

O sistema valida a informação inserida nos campos "Longitude" e "Latitude". A Latitude deve estar entre 90 e -90. A Longitude deve estar entre 180 e -180.

**Aba Faturamento/Faturação**

Regras para a opção "O mesmo que a empresa":

*   Quando o utilizador seleciona a opção "O mesmo que a empresa", os campos que se seguem devem ser preenchidos automaticamente com a informação do cliente:
    *   Nome da Propriedade – para o Brasil, não são permitidos caracteres especiais.
    *   Nome Fiscal – para o Brasil, não são permitidos caracteres especiais.
    *   CNPJ/CPF (Número Contribuinte) – para o Brasil, não são permitidos caracteres especiais.
    *   Email
    *   Telefone
    *   País
    *   Tipo – visível apenas quando o utilizador seleciona "Brasil" como país.
    *   Endereço – para o Brasil, não são permitidos caracteres especiais.
    *   Número – visível apenas quando o utilizador seleciona "Brasil" como país, não são permitidos caracteres especiais.
    *   Estado
    *   Cidade
    *   CEP / Código Postal
*   Quando o utilizador seleciona/marca a opção "O mesmo que a empresa", o formulário é automaticamente preenchido com a informação do cliente. Caso o utilizador remova/desmarque a opção selecionada, o formulário deve ser limpo.
*   Quando o utilizador seleciona/marca a opção "O mesmo que a empresa", o formulário é automaticamente preenchido com a informação do cliente. Caso o utilizador edite alguma informação, a opção "O mesmo que a empresa" deve ser automaticamente removida/desmarcada.

Quando a opção "O mesmo que a empresa" não está selecionada/marcada, a UI aplica as mesmas regras mencionadas anteriormente para o Brasil e também a validação do formato dos campos, tais como Nº de CNPJ/CPF, Email, entre outros.

O nome da empresa é um campo obrigatório, pois é utilizado para questões de faturamento/faturação quando esta é por cliente.

**Aba Usuário/Utilizador**

É obrigatório criar um novo utilizador ao configurar um novo cliente. Todas as restrições de formato definidas no capítulo Utilizadores – Criação de Utilizador devem ser consideradas no painel das principais informações do utilizador.

A propriedade que está a ser criada deve ser automaticamente associada ao novo utilizador.

**Aba Permissões**

A lista de permissões deve conter todas as permissões criadas pelo utilizador admin ou gestor de conta.

Não é obrigatório selecionar permissões. É possível escolher uma ou mais permissões para o utilizador. É possível visualizar os detalhes das permissões (modo de visualização apenas).

**Aba Gestores de Conta**

A lista de Gestores de Conta deve incluir todos os Gestores de Conta existentes no sistema.

Não é obrigatório escolher um Gestor de Conta. É possível associar vários Gestores de Conta à propriedade.

A propriedade criada no momento é automaticamente atribuída ao gestor de conta que a está a criar.

**Aba Confirmação**

No último passo do Wizard de Cliente, deve ser exibido ao utilizador um resumo de todas as configurações realizadas.

Após criar o cliente, é possível criar outro cliente e reiniciar o formulário do Wizard ou finalizá-lo. Quando finalizado, é possível mudar o contexto da aplicação para a nova propriedade.

O campo "Cliente Whitelabel" é automaticamente preenchido com o Whitelabel em contexto, apesar de não aparecer no Wizard de Novo Cliente. O cliente aparece na lista de clientes do mesmo Whitelabel (na extranet onde foi criado e no Omnibees) com a indicação do seu Whitelabel, ou seja, a partir do momento da criação com sucesso, o cliente fica disponível na extranet onde foi criado e no Omnibees para todos os utilizadores que tenham acesso. Não fica disponível noutras extranets.

## Histórico

### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|-------------------|-------|-------------------------|-------------|
| 03-09-2025        | N8N   | -                       | Conversão da documentação para Docusaurus |
| 14-12-2022        | Ana Antunes | O-940                   | Novo Form de Clientes |

### UI/UX
```