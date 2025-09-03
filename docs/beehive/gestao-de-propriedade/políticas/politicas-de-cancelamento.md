---
sidebar_label: Políticas de Cancelamento
title: Políticas de Cancelamento
description: Este documento detalha a gestão de políticas de cancelamento, incluindo a sua criação, edição, eliminação e listagem. Aborda também a sua aplicação em contexto hoteleiro e multi-propriedade, e as permissões de utilizador associadas.
slug: /beehive/gestao-de-propriedade/políticas/politicas-de-cancelamento
---

# Políticas de Cancelamento

As políticas de cancelamento servem como uma garantia para o hotel de que o hóspede que está a reservar um quarto está realmente interessado em hospedar-se no hotel e pensará duas vezes antes de cancelar a reserva.

A reserva incluirá a informação sobre o valor da política de cancelamento, para que o hoteleiro possa cobrar o hóspede em conformidade.

## Lista de Políticas de Cancelamento

Neste ecrã são listadas todas as Políticas de Cancelamento do hotel em contexto, incluindo Políticas de Cancelamento Multi-Propriedade que tenham o hotel selecionado.

![ListaCancelamentoHotel.png](</assets/beehive/gestao-de-propriedade/políticas/politicas-de-cancelamento/ListaCancelamentoHotel.png> "ListaCancelamentoHotel.png")

A lista deve conter as seguintes informações:

*   Nome
*   Descrição
*   Custo de Cancelamento
*   Cancelamento Até
*   Editável por
*   Ícone de Item Externo _(se aplicável)_

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna **Editável por** indica se o registo é multi-propriedade ou de hotel.

*   **Multi-Propriedade**: para registos criados e geridos em multi-propriedade ("Quem pode editar?" = Multi-Propriedade);
*   **Hotel**: para registos criados em multi-propriedade e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-propriedade.

Deve ser possível filtrar por qualquer coluna da lista, exceto pela Descrição. Os filtros possíveis são:

*   Nome
*   Custo (_em percentagem ou em moeda_)
*   Número de noites
*   Cancelamento até
*   Editável por _(lista de seleção única)_

O filtro "Nome" deve ser do tipo texto livre.
O filtro "Custo" é do tipo numérico, com valores maiores que zero e duas casas decimais.
Os filtros "Número de noites" e "Cancelamento até" são do tipo numérico, com valores inteiros e maiores que zero.
O filtro "Editável por" deve ser do tipo seleção, onde só pode ser selecionada uma das duas opções listadas.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna "Editável por".
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
As ações adicionais (representadas na interface por três pontos) devem ser visíveis apenas quando um item é selecionado, e a única ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu "Favoritos").

Para visualizar a lista de todas as Políticas de Cancelamento eliminadas (incluindo políticas de cancelamento multi-propriedade que tenham o hotel associado), é necessário aceder a essa lista através de **Políticas de Cancelamento > Eliminados**.

Para atualizar a lista de políticas de cancelamento com a informação mais recente, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Políticas de Cancelamento

Neste ecrã é possível criar ou editar uma política de cancelamento. Todos os campos obrigatórios devem ser preenchidos para que se possa gravar com sucesso. Quando esta operação for concluída, a política de cancelamento estará pronta para ser utilizada.

![EditCancelamentoHotel.png](</assets/beehive/gestao-de-propriedade/políticas/politicas-de-cancelamento/EditCancelamentoHotel.png> "EditCancelamentoHotel.png")

| **Campo**              | **Obrigatório?**                            |
| :--------------------- | :------------------------------------------ |
| **Detalhes**           | N/A                                         |
| Nome                   | Sim                                         |
| Descrição              | Sim                                         |
| Permite Cancelamento   | Não                                         |
| Cancelamento Até       | Sim (Se "Permite Cancelamento" selecionado) |
| Custos de Cancelamento | Sim (Se "Permite Cancelamento" selecionado) |

O nome e a descrição da Política de Cancelamento podem ser definidos em vários idiomas.
O idioma predefinido deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

O custo pode ser definido em várias moedas. A moeda predefinida deve ser a moeda base da propriedade e as restantes moedas devem ser aquelas que foram configuradas na propriedade como moedas adicionais.

Dependendo do valor definido em "Cancelamento até", o valor de custo em "Custos de Cancelamento" pode ter diferentes restrições:

*   Se o valor de "Cancelamento Até" for >0, o custo tem de ser maior que zero.
*   Se o valor de "Cancelamento Até" for = 0, o custo pode ser maior ou igual a zero.

Ao apagar um valor definido em moeda, o sistema verifica se a política de cancelamento está associada a tarifas ou pacotes definidos nessa mesma moeda e, em caso afirmativo, o utilizador é avisado de que essa moeda deve ter um valor definido.

O custo de cancelamento em percentagem ou valor significa que será contabilizada a percentagem do valor total da reserva ou o valor fixo configurado.

O custo de cancelamento em número de noites significa que será contabilizado o valor referente às primeiras N noites da reserva, sendo N o número de noites configurado na política.

**Políticas de Cancelamento Multi-Propriedade** (_Editável por_ = Multi-Propriedade) podem ser consultadas pelo utilizador sem necessidade de permissão especial para tal.
Ao aceder aos detalhes de uma política de cancelamento multi-propriedade, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição e os valores definidos em outras moedas.

![CancelamentoRedeHotel.png](</assets/beehive/gestao-de-propriedade/políticas/politicas-de-cancelamento/CancelamentoRedeHotel.png> "CancelamentoRedeHotel.png")

Quando a política de cancelamento está a ser criada, as ações adicionais (representadas na interface por três pontos) não devem estar visíveis, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não gravadas serão perdidas caso decida atualizar.

## Eliminar Políticas de Cancelamento

É possível eliminar uma ou várias Políticas de Cancelamento.
Deve ser possível eliminar uma ou várias Políticas de Cancelamento na mesma ação.

Não é possível eliminar **Políticas de Cancelamento Multi-Propriedade** (_Editável por_ = Multi-Propriedade).
Não é possível eliminar Políticas de Cancelamento que estejam atribuídas a tarifas ou pacotes.

Se o utilizador tentar eliminar várias políticas de cancelamento e, por qualquer motivo, uma das políticas falhar, a ação deve ser revertida. Se a eliminação de uma política falhar, nenhuma outra política deve ser eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Políticas de Cancelamento Multi-Propriedade consultar** [Políticas Multi-Propriedade](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx).

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 03-09-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 31-08-2022 | Ana Antunes | - | Regra para cálculo de custo de cancelamento por número de noites |
| 28-02-2022 | Flávia Guerreiro | [Feature O-541](https://omnibees.aha.io/features/O-541) | Inclusão de Políticas de Cancelamento Multi-Property<br/>Tradução da documentação para PT |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bA57C4C9D-1971-4CD3-BF00-D450975769EE%7d&file=Offers.docx&action=default&mobileredirect=true&cid=78619946-0877-49f6-8bf5-12097adc8725) | Primeira documentação criada para Políticas de Cancelamento |