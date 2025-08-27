---
sidebar_label: Ações Automáticas
title: Ações Automáticas
description: Este documento detalha a configuração e gestão de Ações Automáticas no sistema, incluindo o envio de emails para diversos eventos de reserva, pré e pós-estadia, tarifas e limites de crédito, com foco nos requisitos funcionais e critérios de aceitação para cada tipo de ação.
slug: /acoes-automaticas
---

# Ações Automáticas

Emails configurados pelo hotel, que são enviados pelo sistema de eventos (ex: confirmação de reserva). O painel de Ações Automáticas deve validar a permissão com o código 358, ou seja, apenas o utilizador com permissão para tal consegue aceder a este painel.

## Configurar Ações Automáticas (RF 1.1)

### Requisito Funcional

Neste painel, é possível configurar Ações Automáticas.

![proactive actions general.JPG](/docs/beehive/gestao-de-propriedade/acoes-automaticas/proactive actions general.JPG)

### Critérios de Aceitação

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
Quando um evento é configurado corretamente, deve ser marcado com um *check* a verde.
:::

As ações adicionais (representadas na interface pelos três pontos) devem ser visíveis apenas quando um item está selecionado, e a única ação adicional disponível é "Histórico de Alterações".
O utilizador clica no botão "Atualizar" para recarregar a lista com as informações atualizadas.
O painel deve validar as permissões dos utilizadores e mostrar as informações de acordo.

## Ações Automáticas: Nova Reserva / Reserva Alterada / Reserva Cancelada (RF 1.1.1)

### Requisito Funcional

Configurar um ou mais emails para serem enviados quando uma nova reserva é efetuada, alterada ou cancelada. Para estes três eventos diferentes, a configuração de email é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

### Critérios de Aceitação

| **Campo**                                | **Obrigatório?** |
| :--------------------------------------- | :--------------- |
| **Enviar para**                          | Sim              |
| &nbsp;&nbsp;&nbsp;**Hóspede**          | Não              |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens** | Não              |
| &nbsp;&nbsp;&nbsp;**Empresas**          | Não              |
| &nbsp;&nbsp;&nbsp;**Outro**             | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Não              |
| **Assunto**                              | Sim              |
| **Origem da Reserva**                    | Não              |
| **Modelo**                               | Não              |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | Não              |

É possível configurar vários emails com diferentes configurações para diferentes eventos.
Para cada email, é obrigatório definir para quem o email deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.

O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os valores possíveis do campo "Origem da Reserva" são:

*   Todos (valor padrão)
*   Motor de Reservas
*   Canais

A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de email e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Pré-Estadia (RF 1.1.2)

### Requisito Funcional

Configurar um ou mais emails para serem enviados alguns dias antes da data de *check-in*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

### Critérios de Aceitação

| **Campo**                                   | **Obrigatório?** |
| :------------------------------------------ | :--------------- |
| **Enviar para**                             | Sim              |
| &nbsp;&nbsp;&nbsp;**Hóspede**             | Não              |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens**   | Não              |
| &nbsp;&nbsp;&nbsp;**Empresas**            | Não              |
| &nbsp;&nbsp;&nbsp;**Outro**               | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Não              |
| **Assunto**                                 | Sim              |
| **Dias**                                    | Sim              |
| **Modelo**                                  | Não              |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório**  | Não              |
| &nbsp;&nbsp;&nbsp;**Incluir Resumo da Reserva** | Não              |
| &nbsp;&nbsp;&nbsp;**Incluir Detalhes Completos da Reserva** | Não              |
| &nbsp;&nbsp;&nbsp;**Lista de Atrações**   | Não              |
| &nbsp;&nbsp;&nbsp;**Lista de Atividades** | Não              |

É possível configurar vários emails de Pré-Estadia com diferentes configurações.
Para cada email, é obrigatório definir para quem o email deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

:::info
Os dias antes do *check-in* devem ser maiores ou iguais a zero e não têm nenhum valor por definição.
:::

A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de email e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os campos "Incluir Resumo da Reserva" e "Incluir Detalhes Completos da Reserva" não estão selecionados por padrão.
A API deve retornar a Lista de Atrações e a Lista de Atividades do hotel.

## Ações Automáticas: Pós-Estadia (RF 1.1.3)

### Requisito Funcional

Configurar um ou mais emails para serem enviados alguns dias após a data de *check-out*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

### Critérios de Aceitação

| **Campo**                                   | **Obrigatório?** |
| :------------------------------------------ | :--------------- |
| **Enviar para**                             | Sim              |
| &nbsp;&nbsp;&nbsp;**Hóspede**             | Não              |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens**   | Não              |
| &nbsp;&nbsp;&nbsp;**Empresas**            | Não              |
| &nbsp;&nbsp;&nbsp;**Outro**               | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Não              |
| **Assunto**                                 | Sim              |
| **Dias**                                    | Sim              |
| **Modelo**                                  | Não              |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório**  | Não              |
| &nbsp;&nbsp;&nbsp;**Incluir Eventos**     | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                       | Não              |
| &nbsp;&nbsp;&nbsp;**Incluir Códigos Promocionais** | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                       | Não              |
| &nbsp;&nbsp;&nbsp;**Incluir Pacotes**     | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                       | Não              |

É possível configurar vários emails de Pós-Estadia com diferentes configurações.
Para cada email, é obrigatório definir para quem o email deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

:::info
Os dias depois do *check-out* devem ser maiores ou iguais a zero e não têm nenhum valor por definição.
:::

A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de email e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
É possível definir se o email de Pós-Estadia deve incluir informações sobre eventos, códigos promocionais e pacotes que ocorrerão nos meses seguintes.

:::info
O limite de meses deve ser maior ou igual a zero e não tem nenhum valor por definição.
:::

## Ações Automáticas: Pedido de Reserva / Pedido de Reserva Cancelado / Pedido de Reserva Recusado (RF 1.1.4)

### Requisito Funcional

Configurar um ou mais emails para serem enviados quando é efetuado um Pedido de Reserva ou quando este é Recusado ou Cancelado. Para estes três eventos, a configuração de email é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

### Critérios de Aceitação

| **Campo**                                | **Obrigatório?** |
| :--------------------------------------- | :--------------- |
| **Enviar para**                          | Sim              |
| &nbsp;&nbsp;&nbsp;**Hóspede**          | Não              |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens** | Não              |
| &nbsp;&nbsp;&nbsp;**Empresas**          | Não              |
| &nbsp;&nbsp;&nbsp;**Outro**             | Não              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Não              |
| **Assunto**                              | Sim              |
| **Modelo**                               | Não              |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | Não              |

É possível configurar vários emails com configurações diferentes para diferentes eventos.
Para cada email, é obrigatório definir para quem o email deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de email e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Nova Tarifa / Atualização de Tarifa / Atividade Erros de Canal / Atividade Erros de PMS (RF 1.1.5)

### Requisito Funcional

Configurar um ou mais emails para serem enviados quando uma nova tarifa é criada, quando uma tarifa é atualizada ou quando ocorre um erro ao enviar informações para os canais ou PMS. Para estes três eventos diferentes, a configuração de email é igual.

### Critérios de Aceitação

| **Campo**                                | **Obrigatório?** |
| :--------------------------------------- | :--------------- |
| **Enviar para**                          | Sim              |
| &nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Não              |
| **Assunto**                              | Sim              |
| **Modelo**                               | Não              |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | Não              |

É possível configurar vários emails com configurações diferentes para diferentes eventos.
É obrigatório definir para quem o email deve ser enviado. É obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de email e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Ações Automáticas: Limite de Crédito (RF 1.1.6)

### Requisito Funcional

Configurar um ou mais emails para serem enviados quando o limite de visualizações dos dados de cartão de crédito é atingido.

### Critérios de Aceitação

| **Campo**                                | **Obrigatório?** |
| :--------------------------------------- | :--------------- |
| **Enviar para**                          | Sim              |
| &nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | Sim              |
| **Assunto**                              | Sim              |

É possível configurar vários emails de Limite de Crédito com diferentes configurações.
É obrigatório definir para quem o email deve ser enviado. É obrigatório adicionar, pelo menos, um endereço de email, embora seja possível adicionar vários endereços de email. O formato de email deve ser válido. `@` é um caractere obrigatório e deve ser único. O email deve seguir o seguinte formato: `[exemplo@dominio.com](mailto:exemplo@dominio.com)`.
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Pré-visualização de Template de Email

Nas configurações de um *template* de email de ações automáticas, é possível pré-visualizar um modelo-tipo do email que é enviado.

A pré-visualização apresentada leva em consideração se é um *template* de hotel ou de hóspede, e o tipo de email (nova reserva, reserva cancelada, entre outros).

![preview template email.JPG](/docs/beehive/gestao-de-propriedade/acoes-automaticas/preview template email.JPG)
(Exemplo de pré-visualização de *template* de email de hóspede de reserva confirmada)

### UI / UX
| Data da última alteração | URL Design | Referência de alteração |
| :----------------------- | :--------- | :---------------------- |
| ND                       | [https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Proative-Actions](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=%24%2FOmnibees%2FOB%2FUI%20Design%2FProtur%2FMain%2FOMNIBEES_v02%2FRelease%2FProative-Actions) | ND |

<h2>Histórico</h2>

### Histórico de alterações e referências
| Data da alteração | Owner | Referência de alteração | Observações |
| :---------------- | :---- | :---------------------- | :---------- |
| 27-08-2025        | N8N   | -                       | Conversão da documentação para docusaurus |