---
sidebar_label: Configurações Gerais
title: Configurações Gerais
description: Este documento descreve as configurações gerais de um hotel, divididas em Disponibilidade e Segurança, incluindo a visualização, criação e atualização de definições, bem como o histórico de alterações.
slug: /beehive/gestao-de-propriedade/configuracoes-gerais
---

# Configurações Gerais

A área de Configurações Gerais é reservada para as informações relacionadas com as preferências de configuração da propriedade e as configurações de segurança. Por essa razão, as Configurações Gerais estão divididas em dois grupos:

*   Disponibilidade
*   Segurança

## FR 1.1: Get General Settings

**Requisito Funcional**

Neste ecrã é possível visualizar todas as configurações gerais do hotel.

![Screenshot 2022-05-06 110414](</assets/beehive/gestao-de-propriedade/configuracoes-gerais/Screenshot 2022-05-06 110414.png> "Screenshot 2022-05-06 110414")

Fig 1 - Configuração de disponibilidade e segurança

**Critérios de Aceitação**

O ecrã deve conter a seguinte informação:

| **Campo**                      |                              |
| :----------------------------- | :--------------------------- |
| **Disponibilidade**            |                              |
| &nbsp;&nbsp;&nbsp;**Tipo de Disponibilidade**  |                              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Quarto**                   |                              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Tarifa**                   |                              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Misto                        |                              |
| &nbsp;&nbsp;&nbsp;**Gestão de Disponibilidade** |                              |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Devolver Disponibilidade** |                              |
| **Segurança**                  |                              |
| &nbsp;&nbsp;&nbsp;Protect Credit Card          |                              |
| &nbsp;&nbsp;&nbsp;Provide Credit Card Details  |                              |

O próprio hoteleiro pode definir as configurações iniciais do Tipo de Disponibilidade do hotel (primeira vez); depois disso, esta informação aparecerá apenas em modo *read-only* para os utilizadores. Apenas um Gestor de Conta consegue alterar, de acordo com a regra definida abaixo (Configurações Gerais de Atualização).

Para esses casos, os campos estarão em modo *read-only* ou não, dependendo das alterações que o gestor de conta pode ou não fazer. (A API é responsável por validar as regras e retornar apenas os Tipos de Disponibilidade válidos, aqueles que podem ser editados pelo *account*). Os tipos de Disponibilidade que o *account* não pode editar aparecerão em modo *read-only*.

O utilizador clica no botão "Atualizar" para preencher o formulário com a última informação atualizada. Antes do *refresh*, o utilizador deve ser alertado que todas as possíveis alterações serão perdidas.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## FR 1.1: General Settings Permissions

**Requisitos Funcionais**

No ecrã de Configurações Gerais, apenas o campo "Devolver Disponibilidade" pode ser editado pelos utilizadores e *account managers*. Os outros campos apenas podem ser editados por *Account Managers* que tiverem a permissão específica para esta ação.

**Critérios de Aceitação**

Por padrão, nenhum utilizador (nem utilizador nem *account managers*) consegue editar as configurações do hotel e o tipo de disponibilidade. Isto apenas pode ser feito por *Account Managers* que têm associada a permissão "Definições de Segurança e de Tipo de Disponibilidade do Hotel".

A permissão aplica-se aos seguintes campos:

*   Tipo de disponibilidade
*   Cartão de crédito protegido
*   Visualizar dados de Cartão de Crédito no detalhe das reservas e na impressão de reservas
*   Disponibilizar dados do Cartão de Crédito na impressão de reservas
*   Ativar Bee2Pay
*   Enviar todas as reservas para Bee2Pay

A permissão não se aplica ao campo "Devolver Disponibilidade", que pode ser editado por qualquer utilizador a qualquer momento.

## RF 1.2: Criar / Atualizar Configurações Gerais

**Requisito Funcional**

Neste ecrã, é possível criar e atualizar todas as configurações gerais do hotel.

**Critério de Aceitação**

O ecrã contém a seguinte informação:

| **Campo**                                                          | **Obrigatório?**                                                   |                                                                                                                           |
| :----------------------------------------------------------------- | :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ |
| **Disponibilidade**                                                | S                                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;Tipo de Disponibilidade                                          | S                                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quarto                                                             | N                                                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tarifa                                                             | N                                                                                                                         |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Misto                                                              | N                                                                                                                         |
| &nbsp;&nbsp;&nbsp;Gestão de Disponibilidade                                        | S                                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Devolver Disponibilidade                                            | N (S por padrão)                                                                                                         |
| **Segurança**                                                      | N                                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;Cartão de Crédito Protegido                                      | N (N por padrão)                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;Visualizar os dados de Cartão de Crédito no Detalhe das Reservas | N (N por padrão)                                                  |                                                                                                                           |
| &nbsp;&nbsp;&nbsp;Disponibilizar dados do Cartão de Crédito na impressão de reservas | N (N por padrão)                                                                                                        |
| &nbsp;&nbsp;&nbsp;Ativar Bee2Pay - Hotel Solutions                                   | N (N por padrão)                                                                                                        |
| &nbsp;&nbsp;&nbsp;Enviar todas as reservas para o Bee2Pay                            | N (S por padrão - em contexto Omnibees, na criação do hotel esta opção vem ativa por padrão) passa a S se Bee2Pay = S |
|                                                                    |                                                                    |                                                                                                                           |

### Configurações de Disponibilidade

A configuração do Tipo de Disponibilidade permite ao hotel escolher como pretende controlar a disponibilidade. Existem 3 tipos de disponibilidade diferentes:

| **Campo**               | **Descrição**                                                                                                                                     |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tipo de Disponibilidade | > Defines the type of availability used by the hotel. (One of the three options that follow is mandatory (room or rate or Mixed))                   |
| &nbsp;&nbsp;&nbsp;**Quarto**            | Distribuir todo o inventário disponível. > (Option mutually exclusive of rate and mixed)                                                             |
| &nbsp;&nbsp;&nbsp;**Tarifa**            | Distribuir conforme o valor do *allotment* da tarifa, independentemente do inventário disponível. > (Option mutually exclusive of Inventory and Mixed) |
| &nbsp;&nbsp;&nbsp;**Misto**             | Tipo de Disponibilidade, por quarto ou tarifa, será configurado ao nível da tarifa. > (Option mutually exclusive of Inventory and rate.)              |

> None of the 3 Availability Type options must be active by default, and it is mandatory that the user choose one of them.

> The hotelier himself (normal user) can set the initial definition of the Availability Type of hotel (first time), after that for the users this information should appear in read only mode. Only one Account Manager can change it according to the following rules:

*   From rate to mixed
*   From room to mixed
*   From mixed to rate only if all existing rates (excluding the deleted ones) are working with rate availability type (allotment)
*   From mixed to room only if all existing rates (excluding the deleted ones) are working with room availability type (inventory)
*   If the hotel doesn't have any rate created yet, it is possible to change the Availability Type ​to any existing option (rate, room or mixed)

> The field “Return availability” it is used to give the hotelier flexibility to choose whether he wants to return the canceled rooms to availability or not (cancellation of one or more rooms of the reservation or the reservation as a whole). Typically, the hotel wants to return the canceled room to availability, for this reason the default value must be true.

Nota: A modificação de reserva não é afetada por esta configuração. Qualquer modificação de reserva que liberta uma data, a disponibilidade é devolvida.

### Security Configurations

Estas configurações referem-se a parâmetros de segurança e de integração com Bee2Pay, conforme descrito na tabela abaixo (Feature O-286).

![Screenshot 2022-05-10 110540](</assets/beehive/gestao-de-propriedade/configuracoes-gerais/Screenshot 2022-05-10 110540.png> "Screenshot 2022-05-10 110540")

| **Configuração**                                                    | **Descrição**                                                                                                                                                                                                                                                                                                                                          | **Regras**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cartão de crédito protegido**                                     | > The “Protect Credit Card” setting allows the hoteliers to contract the tokenization service included in the Omnibees. This service was created in order to ensure greater security in storing and processing transactions involving credit card payments.                                                                                           | > This Omnibees service uses braspag tokenization system for storing the Credit Cards details (thus guaranteeing the PCI compliance rules). When Omnibees receives a reservation paid with Credit Card, sends the data to BrasPag that is then responsible for storing it in safety. In Omnibees database, only a token generated by Braspag is stored, this token will be used as the correlation key of the Credit Card in both systems. Only Account Managers have permissions to change the “Protect Credit Card” setting. This option is deactivate by default. User selects “Refresh” button to fill the list with the latest information. Before the refresh, the user should be warned that all the possible changes will be lost. The screen should validate the User Permissions and show the information accordingly.<br/><br/>O campo da bandeira também é ocultado quando esta *flag* está ativa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **Visualizar dados de cartão de crédito no detalhe das reservas**   | Esta configuração permite que o cartão de crédito seja visualizado no Omnibees, no detalhe da reserva.                                                                                                                                                                                                                                            | Quando o utilizador ativar a configuração de **Visualizar dados do cartão de crédito no detalhe das reservas**: <br/>Todos os utilizadores que cumprirem as seguintes regras poderão visualizar detalhes de cartão de crédito: <br/>1. Ter permissão para ver os dados de cartões de crédito. As permissões envolvidas na visualização de detalhes de Cartão de Crédito são: <br/>    *   `Show Credit Card Details` (código 5026): para ver os detalhes do CC <br/>    *   `Assign Permissions To Credit Card Access` (código 5039): Para atribuir a permissão anterior a outro utilizador.<br/>    *   `View Credit Card from Email` (código 5020): esta *feature* não foi migrada.<br/>2. Consegue ver os detalhes do cartão de crédito NÃO-VCN até 2 dias após o *checkout*.<br/>3. Consegue ver os detalhes do cartão de crédito VCN até 5 dias após a sua data de expiração.<br/>4. Consegue fazer N pedidos para ver detalhes de cartão de crédito por período de tempo. Por padrão, cada utilizador pode ver até 20 vezes os detalhes do cartão de crédito por cada 10 minutos, 60 vezes por cada hora e 120 vezes por cada 24 horas.<br/>    Esta configuração é possível de alterar diretamente na BD, visto que a opção de alterar no ecrã de utilizador foi removida ([User Story 91909](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/%5Fworkitems/edit/91909): Retirar número de visualizações).<br/>    Caso o utilizador exceda o limite de visualizações, fica bloqueado (`user locked`) e ainda perde a permissão para ver dados de cartão de crédito.<br/>    Caso o utilizador exceda o limite de visualizações, é enviado um e-mail de alerta para os seguintes destinatários:<br/>    *   melanie.teixeira@omnibees.com<br/>    *   juridico.compliance@omnibees.com<br/>    *   francisco.pereira@omnibees.com<br/>    *   teresa.cristina@omnibees.com<br/>    *   erick.bezerra@omnibees.com<br/>    *   leandro.menegon@omnibees.com<br/>    *   qualidade.operacoes@omnibees.com<br/>    *   omnibeeserrors@omnibees.com<br/>5. Em algumas noites da semana, a visualização de cartão de crédito é totalmente desativada.<br/>6. Nenhum gestor de conta consegue ver cartões de crédito, mesmo que a permissão seja atribuída via base de dados.<br/><br/>Quando o utilizador inativar a configuração de **Visualizar dados do cartão de crédito no detalhe das reservas**: <br/>Nenhum utilizador pode visualizar os dados de cartão de crédito dentro desse hotel, mesmo tendo permissão para tal.<br/>A ativação e inativação dessa configuração deve guardar histórico de alterações. |
| **Disponibilizar dados do cartão de crédito na impressão de reservas** | Esta configuração permite visualizar os detalhes do cartão de crédito na impressão de uma reserva.                                                                                                                                                                                                                                                 | Para poder ter esta opção ativa, é necessário que a opção anterior "Visualizar dados de cartão de crédito no detalhe das reservas" esteja também ativa. Ainda é necessário cumprir as mesmas regras descritas nessa configuração para conseguir visualizar os detalhes do cartão de crédito na impressão da reserva.<br/>A ativação e inativação dessa configuração deve guardar histórico de alterações.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Ativar Bee2Pay - Travel Solutions**                               | Esta configuração ativa a integração deste hotel com o Bee2Pay. Passa a estar disponível na página de gestão de reservas o botão para aceder ao Bee2Pay (com autenticação integrada), e todas as reservas são enviadas para o Bee2Pay, independentemente do meio de pagamento ou origem.                                                             | Quando o utilizador ativar a configuração de **Ativar o Bee2Pay**:<br/>*   O botão de "Go to Bee2Pay" na Gestão de Reservas ficará visível.<br/>*   O sistema ativa automaticamente a *flag* de envio das reservas para o Bee2Pay.<br/>*   Esta ativação/inativação deve manter o registo de histórico.<br/><br/>Quando o utilizador desativar a configuração de **Ativar o Bee2Pay**:<br/>*   O botão de "Go to Bee2Pay" na Gestão de Reservas desaparece.<br/>*   O sistema não altera a *flag* de envio de reservas automaticamente.<br/>*   Esta ativação/inativação deve manter o registo de histórico.<br/><br/>**O Fluxo de integração com Bee2Pay** pode ser consultado [**AQUI**](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/Bee2Pay.aspx?).<br/>Esta configuração só fica efetiva 60 minutos após a sua ativação.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Enviar todas as reservas para o Bee2Pay**                         | Esta configuração ativa o envio de todas as reservas para o Bee2Pay. Todas as reservas passam a ser enviadas para o Bee2Pay, independentemente do meio de pagamento ou origem. Esta configuração é independente da configuração de ativar o Bee2Pay; no entanto, só pode ser desativada caso a configuração de ativar o Bee2Pay também esteja desativada. | Quando o utilizador ativar a configuração de **Enviar todas as reservas para o Bee2Pay**:<br/>*   Com o Bee2Pay ligado ou desligado, a integração de reservas passa a funcionar, integrando 100% das reservas que entrarem na Gestão de Reservas do hotel.<br/>*   Com o Bee2Pay ligado ou desligado, o botão de "Go to Bee2Pay" na Gestão de Reservas ficará visível.<br/><br/>Quando o utilizador desativar a configuração de **Enviar todas as reservas para o Bee2Pay**:<br/>*   Todas as reservas que entrarem na Gestão de Reservas do hotel não serão integradas com o Bee2Pay.<br/>*   O utilizador só consegue desativar esta *flag* caso o Bee2Pay esteja inativo.<br/>*   A ativação e inativação dessa configuração deve guardar histórico de alterações.<br/><br/>Esta configuração só fica efetiva 60 minutos após a sua ativação.<br/>Na criação de uma propriedade em contexto Omnibees, esta opção fica ativa por omissão, sendo possível inativá-la se a opção "Ativar Bee2Pay - Travel Solutions" também estiver inativa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Definições Gerais: Lista de Histórico de Alterações

**Requisitos Funcionais**

Nesse ecrã é possível listar todas as alterações realizadas (últimos 6 meses) nas configurações das Definições Gerais do Hotel.

![Screenshot 2022-05-06 110714](</assets/beehive/gestao-de-propriedade/configuracoes-gerais/Screenshot 2022-05-06 110714.png> "Screenshot 2022-05-06 110714")

**Critérios de Aceitação**

O utilizador pode aceder à lista através da opção "Histórico de Alterações" disponível no menu "Mais Opções". Esse menu "Mais Opções" deve ser implementado nesta US. Deve-se garantir a UI e usabilidade desse menu, conforme consta nas Guidelines.

A lista de Histórico de Alterações deve incluir informações sobre todas as alterações que são realizadas no ecrã de Definições Gerais.

A lista de Histórico de Alterações é agrupada por Mês, do mais recente para o mais antigo; caso haja algum mês que não tenha nenhuma alteração realizada, esse mês não deve ser mostrado.

Cada alteração listada deve incluir as seguintes informações:

*   O Utilizador que realizou a alteração, conforme:
    *   Ícone com a primeira letra do nome próprio e apelido do utilizador com a cor de fundo;
    *   A cor do fundo dos ícones deve ser atribuída aleatoriamente ao utilizador, sendo que, se o mesmo utilizador for listado várias vezes (se o histórico possui várias alterações realizadas pelo mesmo utilizador), para facilitar a leitura, o sistema deve garantir que a mesma cor é sempre atribuída ao utilizador em questão.
    *   Nome Próprio
    *   Apelido
*   Utilizador
    *   Por vários motivos, os históricos antigos nem sempre possuem as informações sobre quem realizou a alteração; nesses casos, o sistema deve assumir o valor padrão "Utilizador Anônimo", a cor de fundo deve ser cinza e, ao invés de mostrar o ícone com as duas primeiras letras (sendo a primeira do nome próprio e a primeira do apelido do utilizador), um ponto de exclamação (!) deve ser exibido.
*   A ação realizada, que no caso desse ecrã sempre será de edição.
*   Data e hora em que o utilizador realizou a alteração, que deve ser sempre mostrada no fuso horário do hotel, com o seguinte formato (dependendo da linguagem do utilizador):
    *   UK (mm/dd/aaaa hh:mm AM ou PM)
    *   Outras línguas (dd/mm/aaaa hh:mm)
*   Tipo da alteração realizada nas Definições Gerais, nomeadamente a indicação de que a configuração foi editada pelo utilizador incluindo:
    *   As áreas que foram afetadas pela atualização. As áreas correspondem à hierarquia de informações configuradas para o hotel, que no ecrã são representadas pelos separadores:
        *   Disponibilidade
        *   Segurança

O botão de Detalhes sempre deve estar disponível para visualização dos detalhes da alteração realizada pelo utilizador enquanto o documento exista no Couchbase.

Todas as alterações devem ser guardadas no Couchbase e, devido a questões de performance/capacidade de armazenamento, o sistema somente armazena alterações por no máximo 6 meses. Assim, os históricos de alterações são listados no *sidepanel* se existirem no Couchbase; se não existirem, não são listados.

Devem possuir tradução em todos os idiomas suportados pelo sistema.

## Definições Gerais: Detalhe do Histórico de Alterações

**Requisitos Funcionais**

Nesse ecrã é possível verificar o detalhe de uma ou mais alterações realizadas no ecrã de Definições Gerais.

![Screenshot 2022-05-06 110812](</assets/beehive/gestao-de-propriedade/configuracoes-gerais/Screenshot 2022-05-06 110812.png> "Screenshot 2022-05-06 110812")

**Critérios de Aceitação**

O utilizador pode conferir o detalhe de cada alteração listada individualmente.

No cabeçalho deve ser exibido o caminho do ecrã e dois botões:

*   Botão de Voltar: quando clicado, deve retornar à página anterior de configuração das Definições Gerais com o *sidepanel* fechado.
*   Botão Histórico de Alterações: quando clicado, deve exibir a lista de histórico (*sidepanel*), sendo que o histórico que está a ser mostrado deve estar destacado.

O detalhe do histórico deve incluir a informação sobre quem, a ação realizada e quando, conforme segue:

*   O Utilizador que realizou a alteração, contendo:
    *   Nome Próprio
    *   Apelido
*   Utilizador
*   A ação realizada, que no caso desse ecrã sempre será de edição.
*   Data e hora em que o utilizador realizou a alteração, que deve ser sempre mostrada no fuso horário do hotel, com o seguinte formato (dependendo da linguagem do utilizador):
    *   UK (mm/dd/aaaa hh:mm AM ou PM)
    *   Outras línguas (dd/mm/aaaa hh:mm)

O histórico de edição das Definições Gerais deve seguir a seguinte estrutura:

*   Disponibilidade
    *   Tipo de Disponibilidade (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Quarto, Tarifa ou Misto
    *   Devolver Disponibilidade (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não
*   Segurança
    *   Cartão de Crédito Protegido (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não
    *   Visualizar dados do Cartão de Crédito no Detalhe das Reservas (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não
    *   Ativar Bee2Pay - Hotel Solutions (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não

As informações listadas acima devem ser mostradas somente se aplicáveis; caso nenhuma alteração tenha sido realizada nesses campos, eles não devem ser mostrados na atualização em questão.

Devem possuir tradução em todos os idiomas suportados pelo sistema.

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 16-03-2023 | Flávia Guerreiro | - | Migração da documentação |

### UI / UX

[https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Proative-Actions](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Proative-Actions)

| Data da última alteração | URL Design | Referência de alteração |
|---|---|---|
| 18-01-2024 | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/) | [O-359](https://omnibees.aha.io/features/O-359) |
| 09-08-21 | [https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/](https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/) | [O-516](https://omnibees.aha.io/features/O-516) |
| ND | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Extras](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Extras) | ND |