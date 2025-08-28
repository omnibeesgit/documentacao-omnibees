---
sidebar_label: Ações Automáticas
title: Ações Automáticas
description: Este documento detalha a configuração de Ações Automáticas, emails personalizados enviados pelo sistema em resposta a eventos específicos como novas reservas, alterações, cancelamentos, pré/pós-estadia e erros de canal/PMS. Abrange também a gestão de atrações e suas categorias, com regras de criação, edição e exclusão.
slug: /beehive/gestao-de-propriedade/acoes-automaticas
---

# Ações Automáticas

E-mails configurados pelo hotel que são enviados pelo sistema de eventos (ex: confirmação de reserva).
O painel de Ações Automáticas deve validar a permissão com o código 358, ou seja, apenas o utilizador com esta permissão consegue aceder a este painel.

## Configurar Ações Automáticas

**Requisito Funcional**

Neste painel é possível configurar Ações Automáticas.

![proactive actions general](</assets/beehive/gestao-de-propriedade/acoes-automaticas/proactive actions general.JPG> "proactive actions general")

**Critérios de Aceitação**

A lista de eventos deve incluir:

*   Nova Reserva
*   Reserva Alterada
*   Pré-Estadia
*   Pós-Estadia
*   Reserva Cancelada
*   Pedido de Reserva
*   Pedido de Reserva Cancelado
*   Pedido de Reserva Recusado
*   Nova Tarifa
*   Atualização de Tarifa
*   Atividade Erros de Canal
*   Limite de Crédito
*   Atividade Erros de PMS

:::tip
Quando um evento é configurado corretamente, deve ser marcado com um *check* verde.
:::

As ações adicionais (representadas na UI pelos três pontos) devem estar visíveis apenas quando um item está selecionado, e a única ação adicional disponível é "**Histórico de Alterações**".

O utilizador clica no botão "**Atualizar**" para preencher a lista com a informação atualizada.

O painel deve validar as Permissões de Utilizadores e mostrar as informações de acordo.

## Ações Automáticas: Nova Reserva / Reserva Alterada / Reserva Cancelada

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando uma nova reserva é efetuada, alterada ou cancelada. Para estes três diferentes eventos, a configuração de e-mail é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório?**                |
| :------------------------ | :------------------------------ |
| **Enviar para**           | Sim                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Hóspede**              | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Agente de Viagens**    | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Empresas**             | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Outro**                | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Não                             |
| **Assunto**               | Sim                             |
| **Origem da Reserva**     | Não                             |
| **Modelo**                | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Texto Introdutório**   | Não                             |

É possível configurar vários e-mails com diferentes configurações para diferentes eventos.
Para cada e-mail, é obrigatório definir para quem o e-mail deve ser enviado. O campo "**Enviar para**" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "**Enviar para: Outro**", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).

O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os valores possíveis do campo "**Origem da Reserva**" são:

*   Todos (valor por padrão)
*   Motor de Reservas
*   Canais

A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Pré-Estadia

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados alguns dias antes da data de *check-in*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                                   | **Obrigatório?**                |
| :------------------------------------------ | :------------------------------ |
| **Enviar para**                             | Sim                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Hóspede**                      | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Agente de Viagens**            | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Empresas**                     | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Outro**                        | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Não                             |
| **Assunto**                                 | Sim                             |
| **Dias**                                    | Sim                             |
| **Modelo**                                  | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Texto Introdutório**           | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Incluir Resumo da Reserva**    | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Incluir Detalhes Completos da Reserva** | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Atrações**            | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Atividades**          | Não                             |

É possível configurar vários e-mails de Pré-Estadia com diferentes configurações.
Para cada e-mail, é obrigatório definir para quem o e-mail deve ser enviado. O campo "**Enviar para**" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "**Enviar para: Outro**", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os dias antes do *check-in* devem ser maiores ou iguais a zero e não possuem nenhum valor por padrão.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os campos "**Incluir Resumo da Reserva**" e "**Incluir Detalhes Completos da Reserva**" não estão selecionados por padrão.
A API deve retornar a **Lista de Atrações** e a **Lista de Atividades** do hotel.

## Ações Automáticas: Pós-Estadia

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados alguns dias após a data de *check-out*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                         | **Obrigatório?**                |
| :-------------------------------- | :------------------------------ |
| **Enviar para**                   | Sim                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Hóspede**              | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Agente de Viagens**    | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Empresas**             | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Outro**                | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Não                             |
| **Assunto**                       | Sim                             |
| **Dias**                          | Sim                             |
| **Modelo**                        | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Texto Introdutório**   | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Incluir Eventos**      | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Incluir Códigos Promocionais** | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Incluir Pacotes**      | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | Não                             |

É possível configurar vários e-mails de Pós-Estadia com diferentes configurações.
Para cada e-mail, é obrigatório definir para quem o e-mail deve ser enviado. O campo "**Enviar para**" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "**Enviar para: Outro**", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os dias depois do *check-out* devem ser maiores ou iguais a zero e não possuem nenhum valor por padrão.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
É possível definir se o E-mail de Pós-Estadia deve incluir informação sobre eventos, códigos promocionais e pacotes que irão ocorrer nos meses seguintes. O limite de meses deve ser maior ou igual a zero e não possui nenhum valor por padrão.

## Ações Automáticas: Pedido de Reserva / Pedido de Reserva Cancelado / Pedido de Reserva Recusado

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando é efetuado um Pedido de Reserva ou quando este é Recusado ou Cancelado. Para estes três eventos, a configuração de e-mail é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório?**                |
| :------------------------ | :------------------------------ |
| **Enviar para**           | Sim                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Hóspede**              | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Agente de Viagens**    | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Empresas**             | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Outro**                | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Não                             |
| **Assunto**               | Sim                             |
| **Modelo**                | Não                             |
| &nbsp;&nbsp;&nbsp;&nbsp;**Texto Introdutório**   | Não                             |

É possível configurar múltiplos e-mails com configurações diferentes para diferentes eventos.
Para cada e-mail, é obrigatório definir para quem o e-mail deve ser enviado. O campo "**Enviar para**" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "**Enviar para: Outro**", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Nova Tarifa / Atualização de Tarifa / Atividade Erros de Canal / Atividade Erros de PMS

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando uma nova tarifa é criada, quando uma tarifa é atualizada ou quando ocorre um erro ao enviar informações para os canais ou PMS. Para estes três eventos diferentes, a configuração de e-mail é igual.

**Critérios de Aceitação**

| **Campo**                       | **Obrigatório?** |
| :------------------------------ | :--------------- |
| **Enviar para**                 | Sim              |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Não              |
| **Assunto**                     | Sim              |
| **Modelo**                      | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;**Texto Introdutório** | Não              |

É possível configurar vários e-mails com configurações diferentes para diferentes eventos.
É obrigatório definir para quem o e-mail deve ser enviado. É obrigatório adicionar pelo menos um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Limite de Crédito

**Requisito Funcional**

Configurar um ou mais e-mails a serem enviados quando o limite de visualizações dos dados de cartão de crédito é atingido.

**Critérios de Aceitação**

| **Campo**                       | **Obrigatório?** |
| :------------------------------ | :--------------- |
| **Enviar para**                 | Sim              |
| &nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de E-mail** | Sim              |
| **Assunto**                     | Sim              |

É possível configurar vários e-mails de Limite de Crédito com diferentes configurações.
É obrigatório definir para quem o e-mail deve ser enviado. É obrigatório adicionar pelo menos um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato do e-mail deve ser válido (ex: `exemplo@dominio.com`).
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Preview de Template de E-mail

Nas configurações de um *template* de e-mail de ações automáticas, é possível pré-visualizar um modelo-tipo do e-mail que é enviado.

O *preview* apresentado tem em consideração se é um *template* de hotel ou de hóspede e o tipo de e-mail (nova reserva, reserva cancelada, entre outros).

![preview template email](</assets/beehive/gestao-de-propriedade/acoes-automaticas/preview template email.JPG> "preview template email")
(Exemplo de *preview* de *template* de e-mail de hóspede de reserva confirmada)

## Eliminar Atrações

É possível eliminar uma ou mais atrações.

É possível eliminar uma ou mais atrações dentro da mesma ação.
:::danger
Se o utilizador tentar eliminar várias atrações e, por qualquer razão, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atração deve ser eliminada.
:::
O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Categorias de Atrações

Neste ecrã, é possível listar todas as **Categorias de Atrações**. Na própria lista, é possível gerir as categorias: adicionar, editar e eliminar.

A lista deve incluir a seguinte informação:

*   Nome

Deve ser possível pesquisar e ordenar pelo **Nome da Categoria**. Não há opção de filtro.

A lista deve incluir paginação (50 itens).

O utilizador pode adicionar uma nova categoria definindo o **Nome da Categoria**. O **Nome da Categoria** deve ser único.

O **Nome da Categoria** pode ser definido em vários idiomas. O idioma **padrão** deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

Deve ser possível editar e eliminar **Categorias de Atrações** existentes.

Para atualizar a lista de **Categorias de Atrações** com a informação mais recente, é necessário selecionar o botão "**Atualizar**".

### Adicionar Categoria diretamente na Atração (Painel Lateral Esquerdo)

Neste ecrã, é possível criar uma nova categoria para ser usada em qualquer atração.

O utilizador deve preencher todos os campos obrigatórios e **salvar**. Quando a operação é concluída com sucesso, a categoria estará pronta para ser usada.

O utilizador pode adicionar uma nova categoria definindo o **Nome da Categoria**. O **Nome da Categoria** deve ser único.

O **Nome da Categoria** pode ser definido em vários idiomas. O idioma **padrão** deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

## Histórico
**Histórico de alterações e referências**
| Data da alteração | Owner            | Referência de alteração | Observações                               |
|-------------------|------------------|-------------------------|-------------------------------------------|
| 28-08-2025        | N8N              | -                       | Conversão da documentação para docusaurus |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação                  |

### UI / UX
| Data da última alteração | URL Design                                                                                                                                       | Referência de alteração |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| ND                       | [https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=%24%2FOmnibees%2FOB%2FUI%20Design%2FProtur%2FMain%2FOMNIBEES_v02%2FRelease%2FAttractions](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=%24%2FOmnibees%2FOB%2FUI%20Design%2FProtur%2FMain%2FOMNIBEES_v02%2FRelease%2FAttractions) | ND                       |