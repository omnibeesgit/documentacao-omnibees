---
sidebar_label: Gestão de Reservas
title: Gestão de Reservas
description: Este documento detalha a gestão de reservas, incluindo a listagem, filtragem, ações de pagamento, exportação, pré-visualização, marcação de leitura, detalhes, cancelamento e histórico, além de considerações para a Extranet.
slug: /beehive/gestao-de-reservas/reservas
---
# Gestão de Reservas

## Listagem de Reservas

```In this screen, it is possible to list all the property Reservations.```

![Lista de Reservas](</assets/beehive/gestao-de-reservas/reservas/lista-de-reservas.png> "Lista de Reservas")

A lista deve conter todas as reservas feitas para a propriedade em contexto, com as seguintes informações:

*   Número da Reserva
*   Data da Reserva (data e hora) - sempre no fuso horário do hotel
*   Check-in (data)
*   Check-out (data)
*   Nome do Hóspede
    *   Deve ser mostrado o nome do hóspede preenchido ao nível do `guest` da reserva. Caso não exista, deve ser mostrado o nome do `guest` do primeiro quarto da reserva. Só se não existir nenhum nome de hóspede em toda a reserva é que o campo deve ficar vazio.
*   Número de Quartos
    *   Para reservas com estado igual a Booked, Modified, Booking On Request, Pending, Cancel Pending ou Accepted On Request, deve ser sempre mostrado o número total de quartos que tenham estado (do quarto) diferente de Cancelled.
    *   Para reservas com estado igual a Cancelled, Refused On Request, Cancelled On Request ou Channel Cancel On Request, deve ser sempre mostrado o número total de quartos que estavam em estado diferente de Cancelled quando a reserva foi cancelada.
*   Total - sempre na moeda base do hotel
    *   Para reservas com estado igual a Booked, Modified, Booking On Request, Pending, Cancel Pending ou Accepted On Request, deve ser sempre mostrado o total dos preços de todos os quartos que tenham estado (do quarto) diferente de Cancelled.
    *   Para reservas com estado igual a Cancelled, Refused On Request, Cancelled On Request ou Channel Cancel On Request, deve ser sempre mostrado o total dos preços de todos os quartos que estavam em estado diferente de Cancelled quando a reserva foi cancelada.
*   Canal / Operadora HN
    *   Este campo está obrigatoriamente sempre preenchido.
    *   No caso do Booking Engine, Canal TMC ou Canal empresas, os nomes devem ser mostrados no idioma do utilizador.
*   Agência de Viagens / Escritório de Agência de Viagens / Empresa
    *   Só é preenchido para reservas feitas pelo Canal TMC ou Canal empresas.
*   Estado

```It should be possible to filter by any column of the list. The possible filters are:```

```Reservations Number and Guest Name (including room's guest name) are of type free-text and should consider the "contains" operator```
```Reservations Date, Check-in, Check-out (isEqual) are of date type```
```Date from is date type.```
```Ideally, the user should fill in both fields “From” and “To”, so that the search is limited to the date range entered. In this case:```
```Date From filter should be greater or equal than “To” and lesser or equal than “From"```
```However, the user can fill in only one of the fields, in this case:```
```If the user just fill in the "From" field, the filter should be greater or equal than “From”.```
```If the user just fill in the "To" field, the filter should be lesser or equal than “To”```
```The “To” must be automatically filled in with the date entered in the “From” field, although the user can clean the value.```
```Date to is date type.```
```Ideally, the user should fill in both fields “From” and “To”, so that the search is limited to the date range entered. In this case:```
```Date From filter should be greater or equal than “To” and lesser or equal than “From"```
```However, the user can fill in only one of the fields, in this case:```
```If the user just fill in the "From" field, the filter should be greater or equal than “From”.```
```If the user just fill in the "To" field, the filter should be lesser or equal than “To”```
```The “To” must be automatically filled in with the date entered in the “From” field, although the user can clean the value.```
```Rooms and total are of numeric type should consider the " IsEqualTo " operator```
```Channel, T.A, Corporate, Status are enumerations ) and the filter should consider the "equals" operator```
```It should be possible to search by any column of the list and the search should consider the "contains" operator```
```It should be possible to sort by any column of the list. First click order ascendant (a to Z), second click order descendent (Z to A) and third click back to the default order (created date)```

Cada estado de reserva deve ter uma cor específica:

*   Booked - Verde
*   Modified - Verde
*   Cancelled - Vermelho
*   Booking On Request – Azul
*   Pending - Amarelo
*   Refused On Request - Vermelho
*   Cancelled On Request - Vermelho
*   Cancel Pending - Amarelo
*   Accepted On Request – Verde
*   Channel Cancel On Request - Vermelho

```The options Export, Export Perot and Mark Multiple as Paid should be always visible.```

```The edit action should be visible only if one item is selected.```

```When one item is selected, the edit , the “Mark as paid” and the additional actions (represented in the UI by tree point) should be visible. The possible additional actions are:```

*   Marcar como não lida
*   Imprimir
*   Histórico da Reserva

```When more than one item is selected the option the additional actions (represented in the UI by tree point) should be visible containing only the “Mark as unread” and “Mark as unread” option.```

```The list should include pagination (50 items).```

```It should be possible to set the screen as Favorite (to be included in the Favorites navigation Menu)```

```User selects “Export”, chooses the file format he wants to export the reservations List and as a result, all the columns must be included in the generated file. Due to performance issues only the maximum of 1000 records should be exported.```

```User selects “Refresh” button to fill the list with the latest information.```

```The screen should validate the User Permissions and show the information accordingly.```

Na inserção da reserva, é-lhe associado o `WhitelabelClient_UID` do cliente `Whitelabel` de uma das tarifas da reserva.

Existem canais (push) que não enviam informação da `rate` na reserva, não sendo possível obter a informação dessa `rate` e consequentemente do seu `whitelabel`. Nestes casos, é usado o `whitelabel` da propriedade como `fallback`.

*   se a reserva tiver `rate`, atribui-se o WL da `rate`
*   se a reserva não tiver `rate`, atribui-se o WL da propriedade

## Marcar como Pago e Marcar Múltiplas como Pagas

```The agencies/operators usually once a month pay the hotel for all the reservations made using Pre-paid and/or billed payment type. It is necessary for the hotel to be able to collect and filter the reservations that are currently unpaid and marked them as paid in one step only. It should be also possible do mark the reservations as paid individually.```

![Marcar como pago](</assets/beehive/gestao-de-reservas/reservas/marcar-como-pago.png> "Marcar como pago")

```In the “Mark as paid” button, it is possible to Mark one reservations as paid. This button should only be visible when a single reservation is selected with payment type Pre-paid and/or billed that is still unpaid.```

```In the “Mark Multiple as paid” button, it is possible to based on a filtering criteria defined by the user mark multiple reservations as paid. It should be possible to filter by:```

```Reservations Create Date from(IsGreaterThanOrEqualTo), Reservations Date to (IsLessThanOrEqualTo), Check-in from (IsGreaterThanOrEqualTo), Check-in to (IsLessThanOrEqualTo) , Check-out from (IsLessThanOrEqualTo) and Check-out to (IsGreaterThanOrEqualTo) filters are of date type```
```Reservation number free text type```
```T.A, Corporate, Operators that are enumerations. The Operators filter should allow multiple selection.```

```Only reservations that are still unpaid, with payment type Pre-paid and/or billed and with status equal to Booked, Pending, Modified, booking On Request, Cancel Pending, accepted On Request and Channel Cancel On Request should be showed in the list. All the reservations should be selected by default although the user can change it and select only the ones he whats to update (one, multiple or all).```

```The list of Unpaid reservations should have the following columns:```

*   Número da Reserva
*   Data da Reserva
*   Check-in
*   Check-out
*   Nome do Hóspede
*   Quartos
*   Total
*   Canal
*   Agência de Viagens / Empresa
*   Estado

```It should be possible to search by any column of the list.```

```For the tree dates filters (created date, check in and check out) the Date To should be greater or equal than Date from.```

```Depending on the source (operator, channel, T.A or company) and on the payment type, when the reservation is marked as paid the credit should be updated.```

```For the Channels with type Pull and for the operators (Hoteisnet):```

```When payment type = billed, if there is any invoiced credit limit defined in the Channel Settings screen the credit used should be updated```
```When payment type = pre-payment, if there is any the pre-payment credit defined in the Channel Settings screen the credit used should be updated```

```For the Travel Agents and Corporate```

```When payment type = billed, if there is any invoiced credit defined in the Travel Agent, Travel Agent Office or Corporate screen the credit used should be updated```
```When payment type = pre-payment, if there is any pre-payment credit defined in the Travel Agent, Travel Agent Office or Corporate screen the credit used should be updated```

```If the credit limit has already been exceeded, the credit used should be updated anyway.```

## Exportar Perot

```In this screen, it is possible to export a list of Reservations of the property to an external system named Perot.```

```The "export to Perot" button must be available, only if the hotel have activate and configured the integration with Perot in the external systems configuration area.```

```This "export to Perot" option generates a binary file, encrypted with a PGP public key without "ASCII armor". This file is then placed in an FTP over SSH.```

```The system allows the user to choose whether to export from the last export date (shows the date and time of the last export) or to choose the dates he want to export (with a maximum export period of 3 months).```

```When the user chooses the dates he want to export the date from and the date to are mandatory.```

```After the action is completed, the file generated with the list of exported reservations for Perot should be made available to the user.```

```If any error occur during the export it should be displayed on the screen.```

## Pré-visualização

```In the list of the property reservations, it is possible to acces a preview with the summary of a single reservation.```

![Pré-visualização da Reserva](</assets/beehive/gestao-de-reservas/reservas/preview-reserva.png> "Pré-visualização da Reserva")

```For each reservation listed the user can preview its details.```

```The preview should contais the following informations for each room included in the reservation:```

*   Nome do Tipo de Quarto
*   Preço da Tarifa/Quarto
*   Data de Check-in e Check-out
*   Nome da Tarifa
*   Nome do Hóspede
*   Ocupação do Quarto (se alguma criança estiver incluída na reserva, as idades devem ser mostradas)
*   Nº PMS (se aplicável)
*   Lista de ofertas incluídas na tarifa / `rate` (se aplicável)
*   Tipo de Pagamento utilizado na reserva

## Marcar como Lida / Marcar como Não Lida

```In a daily routine, the hotel checks the reservations newly arrived, due to that it is necessary for the hotel to be able to identify the ones he already checked/verified.```

```All the reservations that were not read should be identified (bold).```

```The user may mark one or multiple reservations as read.```

```The user may also change reservations marked as read to unread.```

```A reservation is only marked as read when this action is taken by the user, if the reservation is seen and not marked as read by the user the line should continue to bold and identified as not seen.```

## Detalhe da Reserva

![Detalhes da Reserva](</assets/beehive/gestao-de-reservas/reservas/detalhes-da-reserva.png> "Detalhes da Reserva")

| Campo                              |                                         |                                         |   |
| :--------------------------------- | :-------------------------------------- | :-------------------------------------- | :- |
| **Resumo**                         |                                         |                                         |   |
|                                    | Número da Reserva                       |                                         |   |
|                                    | Data da Reserva                         |                                         |   |
|                                    | Número do PMS                           |                                         |   |
|                                    | Estado da Reserva                       |                                         |   |
|                                    | Check-in                                |                                         |   |
|                                    | Check-out                               |                                         |   |
|                                    | Nº de Noites                            |                                         |   |
|                                    | Canal / Operadora / BE                  |                                         |   |
|                                    |                                         | CNPJ do Canal                           |   |
|                                    |                                         | Fonte do Canal                          |   |
|                                    | Nome do Tipo de Quarto                  |                                         |   |
|                                    | Ocupação                                |                                         |   |
|                                    | Total (Moeda do Hotel)                  |                                         |   |
|                                    | Total (Moeda da Tarifa)                 |                                         |   |
|                                    | Total (Moeda do Hóspede)                |                                         |   |
|                                    | Total Taxas (Moeda do Hotel)            |                                         |   |
|                                    | Total Taxas (Moeda da Tarifa)           |                                         |   |
|                                    | Total Taxas (Moeda do Hóspede)          |                                         |   |
| **Fonte**                          |                                         |                                         |   |
|                                    | Nome do Hóspede (nível da reserva)      |                                         |   |
|                                    | Nome da TPI                             |                                         |   |
|                                    | Afiliado                                |                                         |   |
|                                    | Fonte de Mercado                        |                                         |   |
|                                    | Fonte do Canal                          |                                         |   |
|                                    | Http Referrer                           |                                         |   |
| **Pagamento**                      |                                         |                                         |   |
|                                    | Moeda                                   |                                         |   |
|                                    | Tipo de Pagamento                       |                                         |   |
|                                    | Tipo de Cartão                          |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Data de Validade                        |   |
|                                    |                                         | Número do Cartão                        |   |
|                                    |                                         | CVV                                     |   |
|                                    | Pagamento Parcial                       |                                         |   |
|                                    |                                         | Nº de Pagamentos Parciais               |   |
|                                    |                                         | Valor da Parcela                        |   |
|                                    |                                         | Juros                                   |   |
|                                    | Custos de Cancelamento                  |                                         |   |
|                                    | Notas                                   |                                         |   |
|                                    | Detalhes da Transação                   |                                         |   |
|                                    |                                         | Número                                  |   |
|                                    |                                         | Data                                    |   |
|                                    |                                         | Valor                                   |   |
|                                    |                                         | Mensagem                                |   |
|                                    |                                         | Tipo                                    |   |
|                                    |                                         | Estado                                  |   |
| **Tipos de Quartos**               |                                         |                                         |   |
|                                    | Lista de Tipos de Quartos               |                                         |   |
|                                    |                                         | Nome do Quarto                          |   |
|                                    |                                         | Preço Total                             |   |
|                                    |                                         | Nome do Hóspede                         |   |
|                                    |                                         | Nº de Adultos                           |   |
|                                    |                                         | Nº de Crianças                          |   |
|                                    |                                         |                                         | Lista de Idades |
|                                    |                                         | Email do Hóspede                        |   |
|                                    |                                         | Hora de Chegada                         |   |
|                                    |                                         | Número da Reserva                       |   |
|                                    |                                         | Número do PMS                           |   |
|                                    |                                         | Tipo de Comissão                        |   |
|                                    |                                         | Comissão                                |   |
|                                    |                                         | Nome da Tarifa                          |   |
|                                    |                                         | Preço da Tarifa/Quarto                  |   |
|                                    |                                         |                                         | Dia |
|                                    |                                         |                                         | Preço |
|                                    |                                         | Lista de Ofertas                        |   |
|                                    |                                         |                                         | Nome |
|                                    |                                         |                                         | Desconto |
|                                    |                                         |                                         | Incentivo Aplicado Desde |
|                                    |                                         |                                         | Incentivo Aplicado Até |
|                                    |                                         | Nível de Fidelidade                     |   |
|                                    |                                         |                                         | Desconto |
|                                    |                                         | Lista de Extras                         |   |
|                                    |                                         |                                         | Nome |
|                                    |                                         |                                         | Preço |
|                                    |                                         |                                         | Está Incluído |
|                                    |                                         |                                         | Data |
|                                    |                                         | Lista de Taxas                          |   |
|                                    |                                         |                                         | Nome |
|                                    |                                         |                                         | Preço |
| **Detalhes do Hóspede**            |                                         |                                         |   |
|                                    | Nome do Hóspede                         |                                         |   |
|                                    | Email do Hóspede                        |                                         |   |
|                                    | Telefone do Hóspede                     |                                         |   |
|                                    | País do Hóspede                         |                                         |   |
|                                    | Chegada da Transferência por            |                                         |   |
|                                    | Hora de Chegada da Transferência        |                                         |   |
|                                    | Informação Adicional da Transferência   |                                         |   |
|                                    | Lista de Pedidos Especiais              |                                         |   |
|                                    |                                         | Pedido Especial                         |   |
|                                    | Lista de Atividades                     |                                         |   |
|                                    |                                         | Atividade                               |   |
| **Promoções**                      |                                         |                                         |   |
|                                    | Código Promocional                      |                                         |   |
|                                    | Código de Grupo                         |                                         |   |
|                                    | Número do Cartão de Fidelidade          |                                         |   |
|                                    | Nível de Fidelidade                     |                                         |   |
|                                    | Campanha                                |                                         |   |
| **Informação de Faturação**        |                                         |                                         |   |
|                                    | Nome do Contacto                        |                                         |   |
|                                    | NIF                                     |                                         |   |
|                                    | Email                                   |                                         |   |
|                                    | Telefone                                |                                         |   |
|                                    | Morada                                  |                                         |   |
|                                    | Código Postal                           |                                         |   |
|                                    | Cidade                                  |                                         |   |
|                                    | País                                    |                                         |   |
| **Agente de Viagens**              |                                         |                                         |   |
|                                    | Nome                                    |                                         |   |
|                                    | NIF                                     |                                         |   |
|                                    | Moeda                                   |                                         |   |
|                                    | PCC                                     |                                         |   |
|                                    | Vendedor                                |                                         |   |
|                                    | Morada                                  |                                         |   |
|                                    |                                         | Morada                                  |   |
|                                    |                                         | Código Postal                           |   |
|                                    |                                         | Cidade                                  |   |
|                                    |                                         | Estado                                  |   |
|                                    |                                         | País                                    |   |
|                                    | Contactos                               |                                         |   |
|                                    |                                         | Telefone                                |   |
|                                    |                                         | Email                                   |   |
|                                    |                                         | Fax                                     |   |
|                                    |                                         | Telefone Móvel                          |   |
|                                    | Contactos Diretos                       |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Email                                   |   |
|                                    |                                         | Fax                                     |   |
|                                    |                                         | Telefone Móvel                          |   |
|                                    | Desconto da Tarifa                      |                                         |   |
|                                    |                                         | Tipo de Quarto                          |   |
| **Empresa**                        |                                         |                                         |   |
|                                    | Nome                                    |                                         |   |
|                                    | NIF                                     |                                         |   |
|                                    | Moeda                                   |                                         |   |
|                                    | Funcionário                             |                                         |   |
|                                    | Morada                                  |                                         |   |
|                                    |                                         | Morada                                  |   |
|                                    |                                         | Código Postal                           |   |
|                                    |                                         | Cidade                                  |   |
|                                    |                                         | Estado                                  |   |
|                                    |                                         | País                                    |   |
|                                    | Contactos                               |                                         |   |
|                                    |                                         | Telefone                                |   |
|                                    |                                         | Email                                   |   |
|                                    |                                         | Fax                                     |   |
|                                    |                                         | Telefone Móvel                          |   |
|                                    | Contactos Diretos                       |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Email                                   |   |
|                                    |                                         | Fax                                     |   |
|                                    |                                         | Telefone Móvel                          |   |
|                                    | Desconto da Tarifa                      |                                         |   |
|                                    |                                         | Tipo de Quarto                          |   |
| **Políticas**                      |                                         |                                         |   |
|                                    | Nome da Política de Cancelamento        |                                         |   |
|                                    | Descrição da Política de Cancelamento   |                                         |   |
|                                    | Custo de Cancelamento                   |                                         |   |
|                                    | Nome da Política de Depósito            |                                         |   |
|                                    | Descrição da Política de Depósito       |                                         |   |
|                                    | Valor do Depósito                       |                                         |   |
|                                    | Nome de Outra Política                  |                                         |   |
|                                    | Descrição de Outra Política             |                                         |   |
| **Detalhes do Canal**              |                                         |                                         |   |
|                                    | Detalhes Principais                     |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Código                                  |   |
|                                    |                                         | CNPJ                                    |   |
|                                    |                                         | Email                                   |   |
|                                    |                                         | Morada                                  |   |
|                                    |                                         | Código Postal                           |   |
|                                    |                                         | Cidade                                  |   |
|                                    |                                         | Estado                                  |   |
|                                    |                                         | País                                    |   |
|                                    | Contactos Comerciais                    |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Telefone                                |   |
|                                    |                                         | Email                                   |   |
|                                    | Contactos Financeiros                   |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Telefone                                |   |
|                                    |                                         | Email                                   |   |
|                                    | Contactos Internacionais                |                                         |   |
|                                    |                                         | Nome                                    |   |
|                                    |                                         | Telefone                                |   |
|                                    |                                         | Email                                   |   |
|                                    | Anexos                                  |                                         |   |
|                                    |                                         | Lista de Anexos                         |   |
| **Notas**                          |                                         |                                         |   |
|                                    | Notas                                   |                                         |   |
|                                    | Notas Internas                          |                                         |   |

## Cabeçalho do Resumo

```In the header when the reservation is made by a channel the user should be able to see the date and time when the reservation was saved in Omnibees system (in the hotel timezone) and also the date and time when the reservation was created in the channel .```

```Date format changes according to the language:```

```UK (mm/dd/yyyy hh:mm AM or PM)```
```Dansk (dd.mm.yyyy hh:mm)```
```Other Languages (dd/mm/yyyy hh:mm)```

## Cartão de Resumo

```For reservations with only one room:```

```The “Rooms and Occupancy” area should show the name of the room and the total number of adults ad childs```

```For reservations with more than one room:```

```The “Rooms and Occupancy” area should show the rtotal number of rooms and the total number of adults and childs```
```If the rooms have different checkin/out dates, the Checkin and Checkout date must be replaced by a message “Multiple Dates” and the nº of nights must be replaced by a message “See details below”.```
```If all the rooms have same Checkin/out dates, the Checkin and Checkout date must show the number of nights of one room```
```The total price is the final reservation price (sum of all rooms)```

```When a reservation is made by an operator Hoteisnet, the tax number must be included and the details of that O​perator Hoteisnet​ must be available to the user (just for query). Together with the ​details, also the files attachments associated with it should be available for download.```

```When the reservation is made by the booking engine channel, the source (mobile or desktop) must be included.```

```When a reservation is made by a TPI, together with the channel name also, the name of the travel agent, travel agent office or corporate must be included.```

```In the worst-case scenario it may be required to show the reservation total price and total taxes in three different currencies, namely in the hotel, rate and guest currency.```

```If the rate currency is different from the hotel currency totals in rate currency must be shown```
```If the guest currency is different from the rate currency totals in guest currency must be shown```

## Cartão de Fonte

```The Source card shows information related to the main details of the reservation source.```

## Cartão de Pagamento

```The Details card shows information related to the reservation payment.```

```Independently of the payment type used by the guest in the reservation, the Currency and the payment type options are always showed. Cancelation costs must be included if applicable.```

```When payment type = Bank deposit```

```Notes option must be included and field if applicable.```

```When payment type = Bank deposit or Credit Card```

```The OB system offers three options for managing credit card data:```

```Through the tokenization service provided by the hotel payment gateway```
```Through the Omnibees tokenization service (Braspag)```
```Without tokenization service, credit card info stored directly in Omnibees```

```Hotel has tokenization service provided by the hotel payment gateway active:```

```The Credit card detail are not stored in OB database, the user will not be able to access the information through OB. A message informing the user to check the credit card detail in its Payment gateway BackOffice is show.```

```Hotel has Omnibees tokenization service (Braspag) active:```

```If the hotel hired the Omnibees tokenization service the credit card details are not stored in OB database, to access the information the user is forward to a customized web page. That web page connects with the payment gateway Braspag that is responsible by storing the CC info. The user is forced to login in the web page to be able to see the data.```

```The access to this web page is only available for user with permission to see credit card details (permission XPTO please ask OB team for the ID).```

```The web page allows multi-language (language should be sent as an URL parameter).```

```The service provider (Braspag) charges for each transaction / query made on its platform, to allow OB to charge the hotel for those transitions, OB must count the number of queries made by the hotel. This count will then be used by OB billing procedure.```

```If the hotel deactivates the OB tokenization service, whenever he checks credit card details of reservations made before that change, he must be informed that the data does not exist in the OB, since at the time of the reservation he had contracted the tokenization service. Message: "There is no data in the system for this reservation. Please confirm that on the date of reservation you have contracted the protected credit card service."```

```Hotel without tokenization service```

```If the hotel does not have any tokenization service, the credit card details are stored in OB database.```

```When reservation detail is open, it should have the following information:```

*   Tipo de Cartão
*   Nome do Titular
*   Data de Validade
*   Número do Cartão – O número é encriptado, exceto os últimos 4 dígitos
*   CVV - Encriptado

```Credit card number and CVV is only available for the users that have permission to see credit card detail (permission XPTO please ask OB team for the ID).```

```When the payment type is Credit Card, if the reservation was made with partial payment, the number of parcel, the installment value and the interest rate.```

```For Credit Card payment type, if the hotel uses a payment gateway to manage its credit card payments, the details of the transaction must be included.```

```When payment type = Paypal```

```For paypal, the payment card only contains the payment type and just if the hotel uses a payment gateway to manage its credit card payments, the details of the transaction must be also included.```

**Dados do cartão de crédito:**

Uma reserva com dados de CC com check-in no futuro e, portanto, dados de CC disponíveis:

Um utilizador com permissão para ver CC:

*   Quando o hotel tem a visualização de CC no detalhe da reserva **ativa**, o utilizador acede ao detalhe da reserva:
    *   visualiza os dados de CC parciais (mascarados)
    *   consegue pedir para visualizar os dados de CC completos (olho sobre o cartão) e visualiza com sucesso (esta visualização fica registada em LOG).
*   Quando o hotel tem a visualização de CC no detalhe da reserva **inativa**, o utilizador acede ao detalhe da reserva:
    *   visualiza os dados de CC parciais (mascarados)
    *   Não consegue pedir para visualizar os dados de CC completos (olho sobre o cartão) e não consegue por via de API obter estes dados (esta tentativa de visualização fica registada em LOG).
*   Quando o hotel tem a visualização de CC na impressão da reserva **ativa**, o utilizador acede à impressão da reserva:
    *   Esta traz os dados completos de CC (esta visualização fica registada em LOG).
*   Quando o hotel tem a visualização de CC na impressão da reserva **inativa**, o utilizador acede à impressão da reserva:
    *   Esta traz os dados de CC mascarados (esta tentativa de visualização fica registada em LOG).

Um utilizador sem permissão para ver CC:

*   Quando o hotel tem a visualização de CC no detalhe da reserva **ativa ou inativa**, o utilizador acede ao detalhe da reserva:
    *   visualiza os dados de CC parciais (mascarados)
    *   Não consegue pedir para visualizar os dados de CC completos (olho sobre o cartão) e não consegue por via de API obter estes dados (esta tentativa de visualização fica registada em LOG).
*   Quando o hotel tem a visualização de CC na impressão da reserva **ativa ou inativa**, o utilizador acede à impressão da reserva:
    *   Esta traz os dados de CC mascarados (esta tentativa de visualização fica registada em LOG).

NOTA: Uma reserva com dados de CC com check-in no passado (há mais de 5 dias) e, portanto, dados de CC indisponíveis, não permite que ninguém visualize dados, nem mesmo mascarados.

Caso o tipo de pagamento utilizado seja um cartão de crédito virtual, a informação "VCN" estará presente no campo "Tipo de Pagamento".

## Cartão de Tipos de Quartos

```The Room types card shows information related to the reservation rooms and guests.```

```There is an area reserved for guest details with the following information:```

*   Nome do Hóspede
    *   Número de adultos, número de crianças e as respetivas idades
*   Email do Hóspede
*   Hora de chegada (mostrar valor apenas se aplicável)
*   Nº da Reserva
*   Nº do PMS (mostrar valor apenas se aplicável)
*   Tipo de Comissão (mostrar valor apenas se aplicável)
*   Comissão (mostrar valor apenas se aplicável)

```There another area reserved for room details. By default when the user opens the manage reservation screen a simplified view of the room details is show, if the user wants to see price details he can access a detailed view.```

```The simple view has the following information:```

*   Nome do Quarto
*   Preço Total
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Nome da Tarifa
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Ofertas
    *   Nome da oferta
    *   Tipo de oferta
    *   Desconto (Moeda do Hotel)
    *   Desconto (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Nome do nível de fidelidade
    *   Desconto (Moeda do Hotel)
    *   Desconto (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Extras incluídos
*   Lista de Extras não incluídos
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Taxas
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel

```The price details view has the following information:```

*   Nome do Quarto
*   Preço Total
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Nome da Tarifa
    *   Preço Total da Tarifa (Moeda do Hotel)
    *   Preço Total da Tarifa (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
    *   Preço da Tarifa por dia (desde a data de check-in (inclusive) até à data de check-out (exclusive)) (Moeda do Hotel)
    *   Preço da Tarifa por dia (desde a data de check-in (inclusive) até à data de check-out (exclusive)) (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Ofertas
    *   Nome da oferta
    *   Tipo de oferta
    *   Aplicado de “Data de Início” a “Data de Fim”
    *   Desconto (Moeda do Hotel)
    *   Desconto (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Nome do nível de fidelidade
    *   Desconto (Moeda do Hotel)
    *   Desconto (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Extras incluídos
*   Lista de Extras não incluídos
    *   Lista de Data e Hora
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel
*   Lista de Taxas
    *   Preço (Moeda do Hotel)
    *   Preço (Moeda da Tarifa) – incluído apenas se a moeda da tarifa for diferente da moeda do hotel

```If the reservation has multiple rooms, the screen should show a Room Type Card for each room containing the same information and rules listed above. The only differences are the Check-in and checkout dates must be included behind the Room type name, the button to cancel room must be included in the card and if the room is cancelled the status “Room Cancelled” should be shown.```

## Cartão do Hóspede

```The Guest Card shows information related to the Guest main details.```

## Cartão de Promoções

```The Promotions Card shows information related to the Promotions that may be included in the reservation (Promotional Codes, Group Codes, loyalty etc).```

```The Promotions Card is only visible if the reservation includes any promotion.```

## Cartão de Informações de Faturação

```The Billing Information Card is only visible if the reservation has billing details field.```

## Cartão TA/Empresa

```The source Card is only visible if the reservation source is a travel agent, travel agent office or a company.```

## Cartão de Políticas

```The name and description of the polices that are included in the reservation rate/s should be shown.```

```If cancelation costs and deposit amount are applicable when in currency, they are always in the hotel currency.```

## Cartão de Notas

```The Notes Card is only visible if the reservation has notes field.```

## Reserva On Request

```In this screen, it is possible to accept or refuse a Reservation on request.```

![Reserva On Request](</assets/beehive/gestao-de-reservas/reservas/reserva-on-request.png> "Reserva On Request")

```When the reservation is in a status equals to booking On Request in the reservation header two additional options must be available.```

*   Aceitar reserva `on request`
*   Recusar reserva `on request`

```Whether the user selects any of those two options a confirmation popup should be displayed to the user and only after confirmation the status of the the reservation should be updated. The date and user who performed the action needs to be stored in Omnibees.```

```API notes:```

```On acceptance the system needs to send a new booking email and allotments need to be updated.```

```On refusal an email should be sent to guest.```

## Cancelar Reserva ou Quarto

```In this screen, it is possible to cancel a Reservation or to cancel a specific room of a reservation with multiple rooms.```

![Cancelar Reserva ou Quarto](</assets/beehive/gestao-de-reservas/reservas/cancelar-reserva.png> "Cancelar Reserva ou Quarto")

| Campo                              |   |
| :--------------------------------- | :- |
| **Cancelar Reserva**               |   |
|                                    | Número da Reserva |
|                                    | Motivo do Cancelamento da Reserva |
|                                    | Comentário do Cancelamento da Reserva |

```Accounts can cancel reservations or reservation rooms if the reservation status is different from: Canceled (2), RefusedOnRequest (6), CanceledOnRequest (7), CancelPending (8) or OnRequestChannelCancel (10) or the room status is different from: Canceled (2), RefusedOnRequest (6), CanceledOnRequest (7) or OnRequestChannelCancel (10).```

```Hotel Users can cancel reservations (not reservation room) only if the reservation is from BE channel, if the reservation status is different from: Canceled (2), RefusedOnRequest (6), CanceledOnRequest (7), CancelPending (8) or OnRequestChannelCancel (10) and until 5 days after de checkout date.```

```When the user cancels a reservation or a room of a reservation, he can include a cancellation reason together with a comment. When the reservation is cancelled (not the room) the user can check the cancellation reason and the comment).```

```If the reservation only has one room, it should only be possible to cancel the whole reservation. If the reservation has multiple rooms, it should be possible to cancel just the rooms (status of the room equal to cancelled and status of the reservation equals to modify), when the reservation has all the rooms in state cancelled the reservation itself becames cancelled.```

```The behavior on the totals prices of the reservation may vary according to the following rules:```

```If user cancel the reservation, the totals will not change```
```If user cancel a room, but that reservation is only for one room, totals will not change```
```If user cancel a room, but that reservation is for two room, totals will change (it will be decremented the room price from the total of the reservation)```

```Account Managers can always cancel reservations regardless of the type of restrictions the reservation has.```

## Imprimir Reserva

```In this screen, it is possible to print a specific Reservation.```

```The system should generate a file with the reservation preview (report) and that file should be send to print.```

```(API logic)```

```To print a reservation the system should validate if the configuration to include credit card data in print is enabled or not and if the user has the permission to see credit card details. This same validation should be taken into account when previewing the reservation (report generated before the print).```

```The logic must comply with the following rule:```

```If the configuration to include the Credit Card data in the print is disabled and the user doesn’t have the permission to see credit card , the credit card number, CVV and Expire date should not be shown.```
```If the configuration to include the Credit Card data in the print is enable and the user doesn’t have the permission to see credit card details just the last 4 digits of the card number should be shown, the rest of the number should be masked and also the CVV should be masked```
```If the configuration to include the Credit Card data in the print is disabled and the user has the permission to see credit card details, credit card number, CVV and Expire date should not be shown.```
```If the configuration to include the Credit Card data in the print is enable and the user has the permission to see credit card details all the credit card data must be shown.```

## Enviar Reservas por E-mail

```In this screen, it is possible to send the report with the reservation details to a list of email addresses.```

![Enviar Reservas por E-mail](</assets/beehive/gestao-de-reservas/reservas/enviar-reservas-email.png> "Enviar Reservas por E-mail")

```It is possible to send the reservation detail to one or multiple email addresses.```

```The file generated by the reservation preview (report) should be send in that email.```

## Visualizar Histórico da Reserva

```In this screen it is possible to check a Reservation history.```

![Histórico da Reserva](</assets/beehive/gestao-de-reservas/reservas/historico-reserva.png> "Histórico da Reserva")

```The screen should show the log of all the changes made in a reservation or in a reservation room status.```

```The log should include:```

*   Data e Hora
*   ```Date format changes according to the language:```
*   ```UK (mm/dd/yyyy hh:mm:ss AM or PM)```
*   ```Other Languages (dd/mm/yyyy hh:mm:ss)```
*   Estado
*   ```User who performed the change```
*   Motivo
*   Comentários

```The user can check the details of the reservation at the date of the change. The system should show the reservation preview with the same information mention above plus the created by and created date (on the resume header).```

## Reservas na Extranet

Na Extranet, no ecrã Gestão de Reservas, apenas estão acessíveis as reservas com origem nos canais/operadoras da Extranet.

As reservas de tarifas da Extranet que são convertidas para Omnibees não são migradas. Mantêm o `whitelabel` de criação.

A reserva gerada por uma credencial `Whitelabel` fica com o `Whitelabel_UID` do respetivo `Whitelabel`.

Quando um PMS consulta as reservas, devem-lhe ser devolvidas reservas `Omnibees` e reservas geradas por uma credencial `Whitelabel`.

## Histórico