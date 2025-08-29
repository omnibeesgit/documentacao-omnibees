---
sidebar_label: Ações Automáticas
title: Ações Automáticas
description: Este documento detalha a configuração e gestão de Ações Automáticas (e-mails automatizados) no sistema, cobrindo diferentes tipos de eventos como Nova Reserva, Pré-Estadia, Pós-Estadia, Pedidos de Reserva e alertas de sistema.
slug: /beehive/gestao-de-propriedade/acoes-automaticas
---

# Ações Automáticas

E-mails configurados pelo hotel que são enviados pelo sistema de eventos (ex.: confirmação de reserva).
O painel de Ações Automáticas deve validar a permissão com o código 358, ou seja, apenas consegue aceder a este painel o utilizador que tenha permissão para tal.

## RF 1.1: Configurar Ações Automáticas

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

Quando um evento é configurado corretamente, deve ser marcado com um *check* a verde.
As ações adicionais (representadas na interface de utilizador pelos três pontos) devem estar visíveis apenas quando um item é selecionado, e a única ação adicional disponível é "Histórico de Alterações".
O utilizador clica no botão "Atualizar" para preencher a lista com a informação atualizada.
O painel deve validar as Permissões de Utilizador e mostrar as informações de acordo.

## RF 1.1.1: Ações Automáticas: Nova Reserva / Reserva Alterada / Reserva Cancelada

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando uma nova reserva é efetuada, alterada ou cancelada.
Para estes três diferentes eventos, a configuração de e-mail é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório?**                |
| :------------------------ | :------------------------------ |
| **Enviar para**           | S                               |
| &nbsp;&nbsp;&nbsp;**Hóspede**           | N                               |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens** | N                               |
| &nbsp;&nbsp;&nbsp;**Empresas**          | N                               |
| &nbsp;&nbsp;&nbsp;**Outro**             | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | N |
| **Assunto**               | S                               |
| **Origem da Reserva**     | N                               |
| **Modelo**                | N                               |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | N |

É possível configurar vários e-mails com diferentes configurações para diferentes eventos.
Para cada e-mail é obrigatório definir para quem o e-mail deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`

O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os valores possíveis para o campo "Origem da Reserva" são:

*   Todos (valor por padrão)
*   Motor de Reservas
*   Canais

A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.

## RF 1.1.2: Ações Automáticas: Pré-Estadia

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados alguns dias antes da data de *check-in*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                                   | **Obrigatório?**                |
| :------------------------------------------ | :------------------------------ |
| **Enviar para**                             | S                               |
| &nbsp;&nbsp;&nbsp;**Hóspede**                       | N                               |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens**             | N                               |
| &nbsp;&nbsp;&nbsp;**Empresas**                      | N                               |
| &nbsp;&nbsp;&nbsp;**Outro**                         | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | N |
| **Assunto**                                 | S                               |
| **Dias**                                    | S                               |
| **Modelo**                                  | N                               |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório**            | N                               |
| &nbsp;&nbsp;&nbsp;**Incluir Resumo da Reserva**     | N                               |
| &nbsp;&nbsp;&nbsp;**Incluir Detalhes Completos da Reserva** | N |
| &nbsp;&nbsp;&nbsp;**Lista de Atrações**             | N                               |
| &nbsp;&nbsp;&nbsp;**Lista de Atividades**           | N                               |

É possível configurar vários e-mails de Pré-Estadia com diferentes configurações.
Para cada e-mail é obrigatório definir para quem o e-mail deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os dias antes do *check-in* devem ser maiores ou iguais a zero e não possuem nenhum valor por padrão.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os campos "Incluir Resumo da Reserva" e "Incluir Detalhes Completos da Reserva" não estão selecionados por padrão.
A API deve retornar a Lista de Atrações e a Lista de Atividades do hotel.

## RF 1.1.3: Ações Automáticas: Pós-Estadia

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados alguns dias após a data de *check-out*.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                                   | **Obrigatório?**                |
| :------------------------------------------ | :------------------------------ |
| **Enviar para**                             | S                               |
| &nbsp;&nbsp;&nbsp;**Hóspede**                       | N                               |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens**             | N                               |
| &nbsp;&nbsp;&nbsp;**Empresas**                      | N                               |
| &nbsp;&nbsp;&nbsp;**Outro**                         | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | N |
| **Assunto**                                 | S                               |
| **Dias**                                    | S                               |
| **Modelo**                                  | N                               |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório**            | N                               |
| &nbsp;&nbsp;&nbsp;**Incluir Eventos**               | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | N |
| &nbsp;&nbsp;&nbsp;**Incluir Códigos Promocionais** | N |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | N |
| &nbsp;&nbsp;&nbsp;**Incluir Pacotes**               | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Meses**                     | N |

É possível configurar vários e-mails de Pós-Estadia com diferentes configurações.
Para cada e-mail é obrigatório definir para quem o e-mail deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.
Os dias depois do *check-out* devem ser maiores ou iguais a zero e não possuem nenhum valor por padrão.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser definidos na configuração da propriedade.
É possível definir se o E-mail de Pós-Estadia deve incluir informações sobre eventos, códigos promocionais e pacotes que ocorrerão nos meses seguintes. O limite de meses deve ser maior ou igual a zero e não possui nenhum valor por padrão.

## FR 1.1.4: Ações Automáticas: Pedido de Reserva / Pedido de Reserva Cancelado / Pedido de Reserva Recusado

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando é efetuado um Pedido de Reserva ou quando este é Recusado ou Cancelado. Para estes três eventos, a configuração de e-mail é igual.
O utilizador deve preencher todos os campos obrigatórios e guardá-los.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório?**                |
| :------------------------ | :------------------------------ |
| **Enviar para**           | S                               |
| &nbsp;&nbsp;&nbsp;**Hóspede**           | N                               |
| &nbsp;&nbsp;&nbsp;**Agente de Viagens** | N                               |
| &nbsp;&nbsp;&nbsp;**Empresas**          | N                               |
| &nbsp;&nbsp;&nbsp;**Outro**             | N                               |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | N |
| **Assunto**               | S                               |
| **Modelo**                | N                               |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | N |

É possível configurar múltiplos e-mails com configurações diferentes para diferentes eventos.
Para cada e-mail é obrigatório definir para quem o e-mail deve ser enviado. O campo "Enviar para" tem as seguintes opções:

*   Hóspede
*   Agente de Viagens
*   Empresas
*   Outro

Se o utilizador selecionar a opção "Enviar para: Outro", é obrigatório adicionar, pelo menos, um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.

## FR 1.1.5: Ações Automáticas: Nova Tarifa / Atualização de Tarifa / Atividade Erros de Canal / Atividade Erros de PMS

**Requisito Funcional**

Configurar um ou mais e-mails para serem enviados quando uma nova tarifa é criada, quando uma tarifa é atualizada ou quando ocorre um erro ao enviar informações para os canais ou PMS. Para estes três eventos, a configuração de e-mail é igual.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório?** |
| :------------------------ | :--------------- |
| **Enviar para**           | S                |
| &nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | N |
| **Assunto**               | S                |
| **Modelo**                | N                |
| &nbsp;&nbsp;&nbsp;**Texto Introdutório** | N |

É possível configurar vários e-mails com configurações diferentes para diferentes eventos.
É obrigatório definir para quem o e-mail deve ser enviado. É obrigatório adicionar pelo menos um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser definidos na configuração da propriedade.
A API deve retornar os modelos disponíveis para cada evento. Para cada modelo, o utilizador consegue aceder a uma pré-visualização do modelo de e-mail e definir um texto introdutório.
O texto introdutório pode ser configurado em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.

## RF 1.1.6: Ações Automáticas: Limite de Crédito

**Requisito Funcional**

Configurar um ou mais e-mails a serem enviados quando o limite de visualizações dos dados de cartão de crédito é atingido.

**Critérios de Aceitação**

| **Campo**                 | **Obrigatório** |
| :------------------------ | :-------------- |
| **Enviar para**           | S               |
| &nbsp;&nbsp;&nbsp;**Lista de Endereços de Email** | S |
| **Assunto**               | S               |

É possível configurar vários e-mails de Limite de Crédito com diferentes configurações.
É obrigatório definir para quem o e-mail deve ser enviado. É obrigatório adicionar pelo menos um endereço de e-mail, embora seja possível adicionar vários endereços de e-mail. O formato de e-mail deve ser válido. O `@` é um caractere obrigatório e deve ser único, e o e-mail deve estar de acordo com o seguinte formato: `[text@text.text](mailto:text@text.text)`
O assunto pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas devem ser os definidos na configuração da propriedade.

## Preview de Template de Email

Nas configurações de um *template* de e-mail de ações automáticas é possível pré-visualizar um modelo-tipo do e-mail que é enviado.

O *preview* apresentado tem em consideração se é um *template* de hotel ou de hóspede e o tipo de e-mail (nova reserva, reserva cancelada, entre outros).

![preview template email](</assets/beehive/gestao-de-propriedade/acoes-automaticas/preview template email.JPG> "preview template email")
(Exemplo de *preview* de *template* de e-mail de hóspede de reserva confirmada)

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 16-03-2023 | Flávia Guerreiro | - | Migração da documentação |

### UI / UX

| Data da última alteração | URL Design | Referência de alteração |
|---|---|---|
| 18-01-2024 | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/) | [O-359](https://omnibees.aha.io/features/O-359) |
| 09-08-21 | [https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/](https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/) | [O-516](https://omnibees.aha.io/features/O-516) |
| ND | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Extras](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Extras) | ND |