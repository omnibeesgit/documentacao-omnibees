```markdown
---
sidebar_label: Configurações Gerais
title: Configurações Gerais
description: Este documento detalha as configurações gerais de uma propriedade, abrangendo preferências de disponibilidade e segurança, requisitos funcionais, critérios de aceitação e o histórico de alterações.
slug: /beehive/gestao-de-propriedade/outras-deinicoes-e-seguranca
---

# Configurações Gerais

A área de Configurações Gerais é reservada para as informações relacionadas com as preferências de configuração da propriedade e com as configurações de segurança. Por essa razão, as configurações gerais são divididas em dois grupos:

*   Disponibilidade
*   Segurança

## FR 1.1: Obter Configurações Gerais

**Requisito Funcional**

Neste ecrã, é possível visualizar todas as configurações gerais do hotel.

![Screenshot 2022-05-06 110414.png](</assets/beehive/gestao-de-propriedade/outras-deinicoes-e-seguranca/Screenshot 2022-05-06 110414.png "Screenshot 2022-05-06 110414.png")

Fig. 1 - Configuração de Disponibilidade e Segurança

**Critérios de Aceitação**

O ecrã deve conter as seguintes informações:

| **Campo**                      |                              |
| ------------------------------ | ---------------------------- |
| **Disponibilidade**            |                              |
|                                | **Tipo de Disponibilidade**  |
|                                |                              | **Quarto**                   |
|                                |                              | **Tarifa**                   |
|                                |                              | Misto                        |
| **Gestão de Disponibilidade**  |                              |
|                                |                              | **Devolver Disponibilidade** |
| **Segurança**                  |                              |
|                                | Protect Credit Card          |
|                                | Provide Credit Card Details  |

O próprio hoteleiro pode definir as configurações iniciais do Tipo de Disponibilidade do hotel (primeira vez). Depois disso, esta informação aparecerá apenas em modo _read-only_. Apenas um Gestor de Conta consegue mudar, de acordo com a regra definida abaixo (Configurações Gerais de Atualização).

Para esses casos, os campos estarão em modo _read-only_ ou não, dependendo das alterações que o gestor de conta pode ou não fazer. (A API é responsável por validar as regras e retornar apenas os Tipos de Disponibilidade válidos, aqueles que podem ser editados pelo _account_). Os tipos de Disponibilidade que o _account_ não pode editar aparecerão em modo _read-only_.

O utilizador deve clicar no botão "Atualizar" para preencher o formulário com as últimas informações atualizadas. Antes do _refresh_, o utilizador deve ser alertado de que todas as possíveis alterações serão perdidas.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## FR 1.1: Permissões das Configurações Gerais

**Requisitos Funcionais**

No ecrã de Configurações Gerais, apenas o campo "Devolver Disponibilidade" pode ser editado por _users_ e _account managers_. Os outros campos apenas podem ser editados por _Account Managers_ que tiverem a permissão específica para esta ação.

**Critérios de Aceitação**

Por _default_, nenhum utilizador (nem _user_ nem _account manager_) consegue editar as configurações do hotel e o tipo de disponibilidade. Isto apenas pode ser feito por _Account Managers_ que têm associada a permissão "Definições de Segurança e de Tipo de Disponibilidade do Hotel".

A permissão aplica-se aos seguintes campos:

*   Tipo de disponibilidade
*   Cartão de crédito protegido
*   Visualizar dados de Cartão de Crédito no detalhe e na impressão das reservas
*   Disponibilizar dados do Cartão de Crédito na impressão de reservas
*   Ativar Bee2pay
*   Enviar todas as reservas para Bee2pay

A permissão não se aplica ao campo "Devolver Disponibilidade" que pode ser editado por qualquer _user_ a qualquer momento.

## RF 1.2: Criar / Atualizar Configurações Gerais

**Requisito Funcional**

Neste ecrã, é possível criar e atualizar todas as configurações gerais do hotel.

**Critérios de Aceitação**

O ecrã contém as seguintes informações:

| **Campo**                                                          | **Obrigatório?**                   |                                                                                                                           |
| ------------------------------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Disponibilidade**                                                | S                                  |                                                                                                                           |
|                                                                    | Tipo de Disponibilidade            | S                                                                                                                         |
|                                                                    |                                    | Quarto                                                             | N                                                                                                                         |
|                                                                    |                                    | Tarifa                                                             | N                                                                                                                         |
|                                                                    |                                    | Misto                                                              | N                                                                                                                         |
|                                                                    | Gestão de Disponibilidade          | S                                                                                                                         |
|                                                                    |                                    | Devolver Disponibilidade                                           | N (S por _default_)                                                                                                       |
| **Segurança**                                                      | N                                  |                                                                                                                           |
|                                                                    | Cartão de Crédito Protegido        | N (N por _default_)                                                |                                                                                                                           |
|                                                                    | Visualizar os dados de Cartão de Crédito no Detalhe das Reservas | N (N por _default_)                                                |                                                                                                                           |
|                                                                    | Disponibilizar dados do Cartão de Crédito na impressão de reservas | N (N por _default_)                                                |                                                                                                                         |
|                                                                    | Ativar Bee2Pay - Travel Solutions  | N (N por _default_)                                                |                                                                                                                         |
|                                                                    | Enviar todas as reservas para o Bee2Pay                            | N (S por _default_ - em contexto Omnibees, na criação do hotel esta opção vem ativa por _default_) passa a S se Bee2pay = S |
|                                                                    |                                    |                                                                                                                         |

### Configurações de Disponibilidade

A configuração do Tipo de Disponibilidade permite ao hotel escolher como pretende controlar a sua disponibilidade. Há 3 tipos de disponibilidade diferentes:

| **Campo**               | **Descrição**                                                                                                                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tipo de Disponibilidade | Define o tipo de disponibilidade utilizado pelo hotel. (Uma das três opções seguintes é obrigatória (_room_, _rate_ ou _Mixed_))                                                                                                             |
|                         | **Quarto**                                                                                                                                                                                                                                 | Distribuir todo o inventário disponível. (_Option mutually exclusive of rate and mixed_)                                                                                                     |
|                         | **Tarifa**                                                                                                                                                                                                                                 | Distribuir conforme o valor do _allotment_ da tarifa, independentemente do inventário disponível. (_Option mutually exclusive of Inventory and Mixed_)                                            |
|                         | **Misto**                                                                                                                                                                                                                                  | O Tipo de Disponibilidade, por quarto ou tarifa, será configurado ao nível da tarifa. (_Option mutually exclusive of Inventory and rate_.)                                                       |

```
None of the 3 Availability Type options must be active by default, and it is mandatory that the user choose one of them.
```

```
The hotelier himself (normal user) can set the initial definition of the Availability Type of hotel (first time), after that for the users this information should appear in read only mode. Only one Account Manager can change it according to the following rules:
```

*   From _rate_ to _mixed_
*   From _room_ to _mixed_
*   From _mixed_ to _rate_ only if all existing rates (excluding the deleted ones) are working with _rate availability type (allotment)_
*   From _mixed_ to _room_ only if all existing rates (excluding the deleted ones) are working with _room availability type (inventory)_
*   If the hotel doesn't have any rate created yet, it is possible to change the _Availability Type_ to any existing option (_rate_, _room_ or _mixed_)

```
The field “Return availability” is used to give the hotelier flexibility to choose whether they want to return the canceled rooms to availability or not (cancellation of one or more rooms of the reservation or the reservation as a whole). Typically, the hotel wants to return the canceled room to availability; for this reason, the default value must be true.
```

Nota: A modificação de reserva não é afetada por esta configuração. Qualquer modificação de reserva que liberta uma data, a disponibilidade é devolvida.

### Security Configurations

Estas configurações referem-se a parâmetros de segurança e de integração com Bee2Pay, conforme descrito na tabela abaixo. (Feature O-286).

![Screenshot 2022-05-10 110540.png](</assets/beehive/gestao-de-propriedade/outras-deinicoes-e-seguranca/Screenshot 2022-05-10 110540.png "Screenshot 2022-05-10 110540.png")

| **Configuração**                                                    | **Descrição**                                                                                                                                                                                                                                                                                                                                          | **Regras**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cartão de crédito protegido                                        | The “Protect Credit Card” setting allows the hoteliers to contract the tokenization service included in the Omnibees. This service was created in order to ensure greater security in storing and processing transactions involving credit card payments.                                                                                           | This Omnibees service uses braspag tokenization system for storing the Credit Cards details (thus guaranteeing the PCI compliance rules). When Omnibees receives a reservation paid with Credit Card, sends the data to BrasPag that is then responsible for storing it in safety. In Omnibees database, only a token generated by Braspag is stored, this token will be used as the correlation key of the Credit Card in both systems. Only Account Managers have permissions to change the “Protect Credit Card” setting. This option is deactivate by default. User selects “Refresh” button to fill the list with the latest information. Before the refresh, the user should be warned that all the possible changes will be lost. The screen should validate the User Permissions and show the information accordingly. O campo da bandeira também é escondido quando esta _flag_ está ativa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Visualizar dados de Cartão de Crédito no detalhe das reservas      | Esta configuração permite que o cartão de crédito seja visualizado no Omnibees, no detalhe da reserva.                                                                                                                                                                                                                                              | Quando o utilizador ativar a configuração de **Disponibilizar dados do cartão de crédito na impressão de reservas**: Todos os utilizadores que cumprirem com as seguintes regras poderão visualizar detalhes de cartão de crédito: 1 - Ter permissão para ver os dados de cartões de crédito. As permissões envolvidas na visualização de detalhes de Cartão de Crédito são: Show Credit Card Details (código 5026): para ver os detalhes do CC; Assign Permissions To Credit Card Access (código 5039): Para atribuir a permissão anterior a outro utilizador; View Credit Card from Email (código 5020): esta _feature_ não foi migrada. 2 - Consegue ver os detalhes do cartão de crédito NÃO VCN até 2 dias após _checkout_. 3 - Consegue ver os detalhes do cartão de crédito VCN até 5 dias após a sua data de expiração. 4 - Consegue fazer N pedidos para ver detalhes de cartão de crédito por período de tempo. Por _default_, cada utilizador pode ver até 20 vezes os detalhes do cartão de crédito por cada 10 minutos, 60 vezes por cada hora e 120 vezes por cada 24 horas. Esta configuração é possível de alterar direto na BD, visto que a opção de alterar no ecrã de utilizador foi removida ([User Story 91909](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/%5Fworkitems/edit/91909): Retirar número de visualizações). Caso o utilizador exceda o limite de visualizações, fica bloqueado (_user locked_) e ainda perde a permissão para ver dados de cartão de crédito. Caso o utilizador exceda o limite de visualizações, é enviado um email de alerta para os seguintes destinatários: melanie.teixeira@omnibees.com; juridico.compliance@omnibees.com; francisco.pereira@omnibees.com; teresa.cristina@omnibees.com; erick.bezerra@omnibees.com; leandro.menegon@omnibees.com; qualidade.operacoes@omnibees.com; omnibeeserrors@omnibees.com. 5 - Em algumas noites da semana, a visualização de cartão de crédito é totalmente desabilitada. 6 - Nenhum gestor de conta consegue ver cartões de crédito, mesmo que a permissão seja atribuída por via de Base de Dados. Quando o utilizador inativar a configuração de **Disponibilizar dados do cartão de crédito na impressão de reservas**: Nenhum utilizador pode visualizar os dados de cartão de crédito dentro desse hotel, mesmo tendo permissão para tal. A ativação e inativação dessa configuração deve guardar histórico de alterações. |
| Disponibilizar dados do Cartão de Crédito na impressão de reservas | Esta configuração permite visualizar os detalhes do cartão de crédito na impressão de uma reserva.                                                                                                                                                                                                                                                 | Para poder ter esta opção ativa, é necessário que a opção anterior "Visualizar dados de cartão de crédito no detalhe das reservas" esteja também ativa. Ainda é necessário cumprir com as mesmas regras descritas nessa configuração para conseguir visualizar os detalhes do cartão de crédito na impressão da reserva. A ativação e inativação dessa configuração deve guardar histórico de alterações.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Ativar Bee2pay - Travel Solutions                                  | Esta configuração ativa a integração deste hotel com a Bee2Pay. Passa a estar disponível na página de gestão de reservas o botão para aceder ao Bee2Pay (com autenticação integrada) e são enviadas todas as reservas para a Bee2Pay, independentemente do meio de pagamento ou origem.                              | Quando o utilizador ativar a configuração de **Ativar o Bee2Pay**: o botão "Go to Bee2Pay" na Gestão de Reservas ficará visível; o sistema ativa automaticamente a _flag_ de envio das reservas para Bee2Pay. Esta ativação/inativação deve manter o registo de histórico. Quando o utilizador desativar a configuração de **Ativar o Bee2Pay**: o botão "Go to Bee2Pay" na Gestão de Reservas desaparece; o sistema não altera a _flag_ de envio de reservas automaticamente. Esta ativação/inativação deve manter o registo de histórico. **O Fluxo de integração com Bee2Pay** pode ser consultado [**AQUI**](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/Bee2Pay.aspx?). Esta configuração só fica efetiva 60 min depois da sua ativação.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Enviar todas as reservas para o Bee2Pay                             | Esta configuração ativa o envio de todas as reservas para a Bee2Pay. Passam a ser enviadas todas as reservas para a Bee2Pay, independentemente do meio de pagamento ou origem. Esta configuração é independente da configuração de ativar Bee2Pay, no entanto só pode ser desligada caso a configuração de ativar Bee2Pay esteja também desligada. | Quando o utilizador ativar a configuração de **Enviar todas as reservas para o Bee2Pay**: Com o Bee2Pay ligado ou desligado, a integração de reservas passa a funcionar, integrando 100% das reservas que entrarem na Gestão de Reservas do hotel. Com o Bee2Pay ligado ou desligado, o botão "Go to Bee2Pay" na Gestão de Reservas ficará visível. Quando o utilizador desativar a configuração de **Enviar todas as reservas para o Bee2Pay**: Todas as reservas que entrarem na Gestão de Reservas do hotel não serão integradas com o Bee2Pay. O utilizador só consegue desligar esta _flag_ caso o Bee2Pay esteja inativo. A ativação e inativação dessa configuração deve guardar histórico de alterações. Esta configuração só fica efetiva 60 min depois da sua ativação. Na criação de uma propriedade em contexto Omnibees, esta opção fica ativa por omissão, sendo possível inativá-la se a opção "Ativar Bee2Pay - Travel Solutions" também estiver inativa.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Definições Gerais: Lista de Histórico de Alterações

**Requisitos Funcionais**

Nesse ecrã, é possível listar todas as alterações realizadas (últimos 6 meses) nas configurações das Definições Gerais do Hotel.

![Screenshot 2022-05-06 110714.png](</assets/beehive/gestao-de-propriedade/outras-deinicoes-e-seguranca/Screenshot 2022-05-06 110714.png "Screenshot 2022-05-06 110714.png")

**Critérios de Aceitação**

O utilizador pode aceder à lista através da opção "Histórico de Alterações" disponível no menu "Mais Opções". Esse menu "Mais Opções" deve ser implementado nessa US. Deve-se garantir o _UI_ e usabilidade desse menu, assim como consta nas _Guidelines_.

A lista de Histórico de Alterações deve incluir informações sobre todas as alterações que são realizadas no ecrã de Definições Gerais.

A lista de Histórico de Alterações é agrupada por Mês, do mais recente para o mais antigo. Caso haja algum mês que não tenha nenhuma alteração realizada, esse mês não deve ser mostrado.

Cada alteração listada deve incluir as seguintes informações:

*   O Utilizador que realizou a alteração, conforme:
    *   Ícone com as primeiras letras do nome próprio e apelido do utilizador com a cor de _background_;
    *   A cor do _background_ dos ícones deve ser atribuída aleatoriamente ao utilizador. Contanto que, se o mesmo utilizador for listado várias vezes (se o histórico possui várias alterações realizadas pelo mesmo utilizador), para facilitar a leitura, o sistema deve garantir que sempre é atribuída a mesma cor para o utilizador em questão.
    *   Nome Próprio
    *   Apelido
    *   Utilizador
    *   Por vários motivos, os históricos antigos nem sempre possuem as informações sobre quem realizou a alteração. Nesses casos, o sistema deve assumir o valor padrão "Utilizador Anônimo", a cor de _background_ deve ser cinza e, ao invés de mostrar o ícone com as duas primeiras letras (sendo a primeira do nome próprio e a primeira do apelido do utilizador), um ponto de exclamação (!) deve ser mostrado.
*   A ação realizada, que no caso desse ecrã sempre será de edição.
*   Data e hora em que o utilizador realizou a alteração e sempre deve ser mostrada no fuso horário do hotel, com o seguinte formato (dependendo da linguagem do utilizador):
    *   UK (mm/dd/aaaa hh:mm AM ou PM)
    *   Outras línguas (dd/mm/aaaa hh:mm)
*   Tipo da alteração realizada nas Definições Gerais, nomeadamente a indicação de que a configuração foi editada pelo utilizador incluindo:
    *   As áreas que foram afetadas pela atualização. As áreas correspondem à hierarquia de informações configuradas para o hotel, que no ecrã são representadas pelos separadores:
        *   Disponibilidade
        *   Segurança

O botão "Detalhes" deve estar sempre disponível para visualização dos detalhes da alteração realizada pelo utilizador enquanto o documento existir no Couchbase.

Todas as alterações devem ser guardadas no Couchbase e, devido a questões de performance/capacidade de armazenamento, o sistema somente armazena alterações por, no máximo, 6 meses. Assim, os históricos de alterações são listados no _sidepanel_ se existirem no Couchbase; se não existirem, não são listados.

Devem possuir tradução em todos os idiomas suportados pelo sistema.

## Definições Gerais: Detalhe do Histórico de Alterações

**Requisitos Funcionais**

Nesse ecrã, é possível verificar o detalhe de uma ou mais alterações realizadas no ecrã de Definições Gerais.

![Screenshot 2022-05-06 110812.png](</assets/beehive/gestao-de-propriedade/outras-deinicoes-e-seguranca/Screenshot 2022-05-06 110812.png "Screenshot 2022-05-06 110812.png")

**Critérios de Aceitação**

O utilizador pode conferir o detalhe de cada alteração listada individualmente.

No cabeçalho, deve ser mostrado o caminho do ecrã e dois botões:

*   Botão "Voltar": quando clicado, deve voltar para a página anterior de configuração das Definições Gerais com o _sidepanel_ fechado.
*   Botão "Histórico de Alterações": quando clicado, deve mostrar a lista de histórico (_sidepanel_), sendo que o histórico que está a ser mostrado deve estar destacado.

O detalhe do histórico deve incluir as informações sobre quem, a ação realizada e quando, conforme segue:

*   O Utilizador que realizou a alteração, contendo:
    *   Nome Próprio
    *   Apelido
    *   Utilizador
*   A ação realizada, que no caso desse ecrã, sempre será de edição.
*   Data e hora em que o utilizador realizou a alteração e sempre deve ser mostrada no fuso horário do hotel, com o seguinte formato (dependendo da linguagem do utilizador):
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
    *   Disponibilizar dados do Cartão de Crédito (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não
    *   Ativar Bee2Pay - Travel Solutions (valor novo ou antigo) - se aplicável
        *   Possíveis valores: Sim ou Não

As informações listadas acima devem ser mostradas somente se forem aplicáveis. Caso não tenha sido realizada nenhuma alteração nesses campos, eles não devem ser mostrados no _update_ em questão.

Devem possuir tradução em todos os idiomas suportados pelo sistema.

## Histórico

### Histórico de alterações e referências:

| Data da alteração | Owner | Referência de alteração | Observações |
|-------------------|-------|-------------------------|-------------|
| 04-09-2025        | N8N   | -                       | Conversão da documentação para Docusaurus |
| 11-03-2025        | Ana Antunes | Explicitado o detalhe implicito sobre a devolução de disponibilidade para a modificação de reserva | a configuração de devoluçao de disponibilidade é aplicada a cancelamentos |
| 21-02-2024        | Ana Antunes | Atualização para cartões VCN [https://omnibees.aha.io/features/O-2042](https://omnibees.aha.io/features/O-2042) | dados de cc vcn são eliminados 5 dias após a data de expiraçao |
| 16-08-2023        | Hélder Araújo | Atualização [https://omnibees.aha.io/features/O-1707](https://omnibees.aha.io/features/O-1707) | Ao criar propriedade a opção de enviar reservas para bee2pay deve ficar ativa por default |
| 10-05-2022        | Ana Antunes | Passagem para Wiki | ND |
| ND                | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bDDA6AA35-B3E1-47B7-BBF1-B582A8A026B1%7d&file=WA%2004%20-%20Rate%20Calendar%20Excel%20v2%20Atualizado.docx&action=default&mobileredirect=true) | ND |
| ND                | Ana Antunes | Atualização [https://omnibees.aha.io/features/O-286](https://omnibees.aha.io/features/O-286) | Atualizados os serviços de configuração de segurança e visualizaçao de CC |
```