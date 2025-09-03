---
sidebar_label: Clientes
title: Clientes
description: Este documento detalha a gestão de clientes, cobrindo a listagem, adição, atualização e eliminação de registos. Inclui informações sobre validação de dados, permissões específicas para gestores de conta e administradores, gestão de white-label e redes, bem como os impactos destas configurações na interface do utilizador.
slug: /beehive/gestao-de-hoteis/clientes
---

# Clientes

(Copiado do conteúdo do documento [WA 01 - Property Management.docx](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/Documentos%20Publicos/BeeHive/Documenta%C3%A7%C3%A3o%20Por%20Ecr%C3%A3s/01%20-%20Gest%C3%A3o%20de%20Hoteis/WA%2001%20-%20Property%20Management.docx?d=wcb9ac058248b4a18869e8c950ff71ab9&csf=1&web=1&e=dmqVur))

## RF 1.2.1: Lista de Clientes

**Requisito Funcional**

Neste painel estão listados todos os clientes associados ao Gestor de Conta autenticado no sistema. Este painel é apenas acessível a utilizadores do tipo Gestor de Conta.

![lista de clientes](</assets/beehive/gestao-de-hoteis/clientes/lista de clientes.JPG> "lista de clientes")

**Critérios de Aceitação**

A lista contém as seguintes informações:

*   ID
*   Nome
*   Número de Hotéis
*   Cliente White-label
*   Estado

É possível filtrar por qualquer coluna da lista. O filtro do nome é texto livre, o estado (com as opções ativo/inativo) e o cliente white-label (lista) são do tipo enumeração, e o ID e Número de Hotéis são do tipo numérico.

É possível pesquisar e ordenar por qualquer coluna da lista.

Não é possível eliminar clientes.

Não é possível inativar clientes que tenham propriedades ativas.

![filtros lista clientes](</assets/beehive/gestao-de-hoteis/clientes/filtros lista clientes.JPG> "filtros lista clientes")

A ação de inativar/ativar cliente está visível apenas se um item for selecionado. Quando o estado do item selecionado é Ativo, o botão deve ser "Inativar cliente". Quando o estado é Inativo, o botão deve ser "Ativar cliente".

Em ambas as ações, Ativar ou Inativar cliente, é obrigatório adicionar um comentário e é ainda possível verificar o histórico de estado do cliente.

O histórico de estado do cliente lista toda a informação relacionada com as mudanças de estado, nomeadamente a data e os respetivos comentários.

O formato da data do histórico de estado do cliente muda consoante o idioma:

*   `UK (mm/dd/aaaa)`
*   `Dinamarquês (dd.mm.aaaa)`
*   `Outros idiomas (dd.mm.aaaa)`

As ações adicionais (representadas por três pontos) devem estar visíveis apenas quando um item está selecionado e a única ação adicional é "Histórico de Alterações".

A lista deve ter paginação (50 itens).

Deve ser possível definir o painel como Favorito (para ser incluído nos Favoritos do Menu de Navegação).

Uma vez que não é possível eliminar Clientes, a opção "Remover" não está neste painel.

O utilizador clica em "Atualizar" para carregar a lista com as informações atualizadas.

## RF 1.2.2: Adicionar e Atualizar Clientes

**Requisito Funcional**

Tal como acontece no *Wizard* de Novo Cliente, no painel de "Clientes", caso queiramos criar um novo cliente, numa primeira fase, o sistema solicita a inserção da identificação fiscal do cliente que se pretende criar.

O sistema valida a criação de cliente duplicado por identificação fiscal, pedindo ao utilizador que insira os dados.

![pop up validacao cliente duplicado](</assets/beehive/gestao-de-hoteis/clientes/pop up validacao cliente duplicado.JPG> "pop up validacao cliente duplicado")

Se existir em qualquer extranet ou na Omnibees um cliente com a mesma identificação fiscal, o sistema dá um alerta indicando qual/quais os clientes com identificação fiscal igual e não permite a criação do cliente.

![cliente duplicado](</assets/beehive/gestao-de-hoteis/clientes/cliente duplicado.JPG> "cliente duplicado")

Mediante uma permissão específica, o sistema pode permitir criar o cliente mesmo que com identificação fiscal duplicada. A permissão específica chama-se "Criar cliente ou propriedade potencialmente duplicada".

![cliente duplicado continuar](</assets/beehive/gestao-de-hoteis/clientes/cliente duplicado continuar.JPG> "cliente duplicado continuar")

Ao contrário do que acontece na Omnibees, em Extranet um utilizador que tenha a permissão "Criar cliente ou propriedade potencialmente duplicada" não conseguirá criar clientes duplicados.
Em Extranet, ter ou não esta permissão terá o mesmo efeito: é apresentado o alerta de cliente(s) duplicado(s) e o sistema não permite avançar.

Neste painel, é possível criar um cliente. O utilizador deve preencher todos os campos obrigatórios e guardá-los.
Quando a operação é concluída com sucesso, o cliente estará pronto.

Esta área é apenas acessível para utilizadores do tipo Gestor de Conta.

**Nota**: Na edição de um cliente, se o campo "CNPJ" for editado, o sistema fará a validação de duplicados.

**Critérios de Aceitação**

As informações do cliente estão agrupadas em 5 áreas/*tabs* diferentes:

*   Configurações
*   Endereço
*   Contactos
*   Faturação
*   Redes

| **Campo**                                       | **Obrigatório?**                                           |
| :---------------------------------------------- | :--------------------------------------------------------- |
| **Configurações**                               | N/A                                                        |
| **Nome Comercial**                              | S                                                          |
| **Nome Fiscal**                                 | S                                                          |
| **ID Salesforce**                               | N                                                          |
| **Número de Hotéis**                            | S                                                          |
| **CNPJ/CPF**                                    | S                                                          |
| **Cliente White-label**                         | S                                                          |
| **Logótipo do Cliente**                         | N                                                          |
| **Endereço**                                    | N/A                                                        |
| **País**                                        | S                                                          |
| **CEP / Código Postal**                         | S                                                          |
| **Tipo**                                        | S (apenas visível quando o país do cliente é Brasil)       |
| **Endereço**                                    | S                                                          |
| **Número**                                      | S (apenas visível quando o país do cliente é Brasil)       |
| **Complemento**                                 | N (apenas visível quando o país do cliente é Brasil)       |
| **Bairro**                                      | S (apenas visível quando o país do cliente é Brasil)       |
| **Estado**                                      | S                                                          |
| **Cidade**                                      | S                                                          |
| **Contactos**                                   | N/A                                                        |
| **Email**                                       | S                                                          |
| **Telefone**                                    | N                                                          |
| **Telemóvel/Celular**                           | N                                                          |
| **Website**                                     | N                                                          |
| **Pessoa de Contacto**                          | S                                                          |
| **Email da Pessoa de Contacto**                 | S                                                          |
| **Telefone**                                    | S                                                          |
| **Faturação**                                   | N/A                                                        |
| **Usar dados de faturação diferentes**          | N                                                          |
| **Nome Comercial**                              | S                                                          |
| **Nome Fiscal**                                 | S                                                          |
| **CNPJ/CPF**                                    | S                                                          |
| **Email**                                       | S                                                          |
| **Telefone**                                    | N                                                          |
| **País**                                        | S                                                          |
| **CEP / Código Postal**                         | S                                                          |
| **Tipo**                                        | S (apenas visível quando o país do cliente é Brasil)       |
| **Endereço / Morada**                           | S                                                          |
| **Número**                                      | S (apenas visível quando o país do cliente é Brasil)       |
| **Complemento**                                 | S (apenas visível quando o país do cliente é Brasil)       |
| **Bairro**                                      | S (apenas visível quando o país do cliente é Brasil)       |
| **Estado**                                      | S                                                          |
| **Cidade**                                      | S                                                          |
| **Redes**                                       | N/A                                                        |
| **Lista de Redes**                              | N                                                          |
| **Redes**                                       | N                                                          |

É possível criar clientes com o mesmo nome ou com o nome da empresa.

O número de hotéis é um valor numérico e deve ser maior do que zero.

O campo CNPJ/CPF é preenchido por definição com o valor inserido no *pop-up* de validação de CNPJ/CPF duplicado.
O formato do CNPJ/CPF (número de contribuinte) pode variar consoante o país. Caso não esteja no formato correto, será mostrada uma mensagem de erro.
Uma vez que o CNPJ/CPF (número de contribuinte) é um campo importante usado para questões de faturação e que a maioria dos nossos clientes está no Brasil, quando o utilizador escolhe o país "Brasil", o sistema deve mostrar e validar se o campo está no seguinte formato: `99.999.999/9999-99` (`size 0-18`).

Para o país Brasil, os campos Nome Comercial, Nome Fiscal, CNPJ/CPF (número de contribuinte), Endereço/Morada e Número não podem conter caracteres especiais. Esta informação é também usada para questões de faturação, quando esta é por cliente.

O campo "Cliente White-label" é preenchido por definição com o valor do cliente white-label em contexto. Este não é editável. Apenas os utilizadores que tenham a permissão "Modificar o White-label em cliente, propriedade e redes" conseguem editar o campo.
Os utilizadores que tenham esta permissão conseguem ter o campo Cliente White-label editável tanto na criação como na edição de cliente (esta condição aplica-se apenas na Omnibees. Em extranet, a permissão não tem qualquer efeito, ficando o campo "Cliente White-label" sempre *read-only*).
Este campo só é editável (apenas na Omnibees. Em extranet fica sempre *read-only*) mediante uma permissão própria e já existente para o mesmo campo na propriedade.

O sistema deve carregar a lista com todas as White-labels criadas no sistema.
O campo "Cliente White-label" está visível apenas neste formulário e não aparece no *Wizard* de novo cliente, mas o sistema preenche automaticamente com o White-label em contexto.
Este campo deve constar no histórico de alterações tal como outros campos.

O tamanho do logótipo deve ser menor ou igual a 1MB. O sistema suporta os seguintes formatos:

*   \*.jpg \*.jpeg
*   \*.png

O utilizador consegue ver uma pré-visualização do logótipo carregado.

A morada deve ser preenchida diretamente no formulário.
Os campos (endereço/morada) "Tipo" e "Número" apenas são visíveis quando o utilizador seleciona "Brasil" como país. A API deve retornar a lista de (endereço/morada) tipos.
A API deve retornar a lista de Países, Estados e Cidade. Quando um utilizador seleciona determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades. A lista de cidades corresponde ao Estado selecionado.

O formato do Email e do Email da Pessoa de Contacto deve ter validação. `@` é caractere obrigatório, deve ser único e deve estar no seguinte formato: `text@text.text`.

**Faturação**

A *tab* "**Faturação**" agrupa alguns dados que estão na *tab* "Configurações", "Endereço" e "Contactos". Esta *tab* já está pré-preenchida com os mesmos valores e com a opção para alterá-los clicando em "usar dados de faturação diferentes". Devem ser aplicadas exatamente as mesmas validações e regras nestes campos que nos campos copiados.

**Redes**

A *tab* "**Redes**" – só é permitido escolher as redes de um cliente depois de definido o white-label desse cliente. Caso contrário, é apresentada uma mensagem.

A *tab* "Redes" permite associar ao cliente redes já criadas. Tem a funcionalidade de criar, editar e remover redes (para o white-label em contexto). O painel lateral de criação e edição/remoção apresenta o nome e white-label da rede.
Por omissão, o campo "Cliente White-label" aparece com o valor do white-label do cliente em que a rede é criada, independentemente do white-label em contexto e fica disponível para associar a qualquer cliente do mesmo white-label. Apenas utilizadores com a permissão "Modificar o valor de cliente White-label em cliente, propriedade e redes" conseguem ter o campo "Cliente White-label" editável tanto na criação como na edição da rede.
É possível associar uma ou mais redes ao cliente. A lista de redes inclui todas as redes que existem no sistema.

Este campo deve constar no histórico de alterações como os outros campos.

**Propriedades**

A *tab* "**Propriedades**" – esta *tab* apenas está visível no modo de edição do cliente. São listadas todas as propriedades do cliente com a indicação da rede de cada uma das propriedades.

Depois de guardar o novo cliente, o sistema abrirá automaticamente o painel de "Nova Propriedade" para que o utilizador continue o processo.

Enquanto o cliente está a ser criado, a opção "Histórico de Alterações" não está disponível, apenas no modo de edição.

O painel deve validar as permissões do utilizador e mostrar as informações de acordo.

O utilizador clica no botão "Atualizar" para carregar o formulário com as informações atualizadas. Antes de clicar, o utilizador deve ser avisado que todas as alterações poderão ser perdidas.

O cliente aparece na lista de clientes do mesmo White-label (na extranet onde foi criado e na Omnibees) com a indicação de qual o seu White-label, ou seja, a partir do momento da criação com sucesso, o cliente fica disponível na extranet onde foi criado e na Omnibees para todos os utilizadores que tenham acesso. Não fica disponível noutras extranets.

Ao inativar/ativar um cliente, o utilizador tem de inserir um motivo no campo "Comentários". Ao guardar, caso o cliente tenha uma ou mais propriedades associadas, surgirá um alerta, impedindo o utilizador de prosseguir com a ação de inativar o cliente.

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 03-09-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 11-03-2025 | Ana Antunes | Explicitado o detalhe implícito sobre a devolução de disponibilidade para a modificação de reserva | A configuração de devolução de disponibilidade é aplicada a cancelamentos |
| 21/02/2024 | Ana Antunes | Atualização para cartões VCN<br>[https://omnibees.aha.io/features/O-2042](https://omnibees.aha.io/features/O-2042) | Dados de CC VCN são eliminados 5 dias após a data de expiração |
| 16/08/2023 | Hélder Araújo | Atualização<br>[https://omnibees.aha.io/features/O-1707](https://omnibees.aha.io/features/O-1707) | Ao criar propriedade, a opção de enviar reservas para Bee2Pay deve ficar ativa por default |
| 10/05/2022 | Ana Antunes | Passagem para Wiki | - |
| - | Ana Antunes | Atualização<br>[https://omnibees.aha.io/features/O-286](https://omnibees.aha.io/features/O-286) | Atualizados os serviços de configuração de segurança e visualização de CC |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bDDA6AA35-B3E1-47B7-BBF1-B582A8A026B1%7d&file=WA%2004%20-%20Rate%20Calendar%20Excel%20v2%20Atualizado.docx&action=default&mobileredirect=true) | - |