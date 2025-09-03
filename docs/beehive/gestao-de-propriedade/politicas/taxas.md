---
sidebar_label: Taxas
title: Taxas
description: Este documento detalha a gestão de taxas, especificando como impostos são aplicados a tarifas de propriedade. Abrange a sua listagem, criação, edição e eliminação, incluindo diferentes tipos de cobrança, considerações de multi-propriedade e permissões de utilizador.
slug: /beehive/gestao-de-propriedade/politicas/taxas
---

# Taxas

As taxas definem os impostos que são aplicados às tarifas de propriedade.

Uma taxa pode ser aplicada por noite e por quarto (ex: berço extra), pode ser aplicada por noite e por pessoa (ex: instalações de spa), pode ser por estadia e por pessoa (ex: transfer de carro) ou por estadia e por quarto (ex: frigorífico).

## Lista de Taxas

Neste ecrã, são listadas todas as Taxas do hotel em contexto, incluindo Taxas Multi-Propriedade que tenham o hotel selecionado.

![ListaTaxasHotel.png](</assets/beehive/gestao-de-propriedade/politicas/taxas/ListaTaxasHotel.png> "ListaTaxasHotel.png")

A lista deve conter as seguintes informações:

*   **Nome**
*   **Descrição**
*   **Valor**
*   **Ícone de Item Externo** _(se aplicável)_

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna **Editável por** indica se o registo é multi-propriedade ou de hotel.

*   **Multi-Propriedade**: para registos criados e geridos em multi-propriedade ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registos criados em multi-propriedade e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-propriedade.

Deve ser possível filtrar por qualquer coluna da lista, exceto pela Descrição. Os filtros possíveis são:

*   **Nome**
*   **Valor** _(em percentagem ou em moeda)_
*   **Editável por** _(lista de seleção única)_

O filtro "Nome" deve ser do tipo texto livre.
O filtro "Valor" é do tipo numérico de valores maiores que zero e com duas casas decimais.
O filtro "Editável por" deve ser do tipo seleção, onde só pode ser selecionada uma das duas opções listadas.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna "Editável por".
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
As ações adicionais (representadas na interface por três pontos) devem ser visíveis apenas quando um item é selecionado, e a única ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu "Favoritos").

Para visualizar a lista de todas as Taxas eliminadas (incluindo taxas multi-propriedade que tenham o hotel associado), é necessário aceder a essa lista através de **Taxas > Eliminados**.

Para atualizar a lista de taxas com as informações mais recentes, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Taxas

Neste ecrã, é possível criar ou editar uma taxa. Todos os campos obrigatórios devem ser preenchidos para que se possa gravar com sucesso. Quando esta operação for concluída, a taxa estará pronta para ser utilizada.

![EditaTaxasHotel.png](</assets/beehive/gestao-de-propriedade/politicas/taxas/EditaTaxasHotel.png> "EditaTaxasHotel.png")

| **Campo**                | **Obrigatório?**                            |
| :----------------------- | :------------------------------------------ |
| **Detalhes**             | N/A                                         |
| Nome                     | Sim                                         |
| Descrição                | Sim                                         |
| Valor                    | Sim                                         |
| **Tipo de Cobrança**     |                                             |
| Por Noite ou Por Estadia | Sim                                         |
| Por Quarto ou Por Pessoa | Sim                                         |

O nome e a descrição da Taxa podem ser definidos em vários idiomas.
O idioma predefinido deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

O valor deve estar em percentagem por predefinição e, para este caso, deve ser maior ou igual a zero e menor ou igual a 100%. A opção “outras moedas” apenas deve ficar visível se a opção selecionada for 'Moeda' em vez de 'Percentagem'.

O valor pode ser definido em várias moedas. A moeda predefinida deve ser a moeda base da propriedade e as restantes moedas devem ser aquelas que foram configuradas na propriedade como moedas adicionais.

Ao apagar um valor definido em moeda, o sistema verifica se a taxa está associada a tarifas ou pacotes que estejam definidos nessa mesma moeda e, em caso afirmativo, o utilizador é avisado de que essa moeda deve ter um valor definido.

Para as opções de tipo de cobrança, é obrigatório que o utilizador selecione uma das duas opções possíveis: por noite ou por estadia, e por quarto ou por pessoa.

**Taxas Multi-Propriedade** (Editável por = Multi-Property) podem ser consultadas pelo utilizador sem necessidade de permissão especial para tal.
Ao aceder aos detalhes de uma taxa multi-propriedade, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição e os valores definidos em outras moedas.

![EditaTaxasHotelRede.png](</assets/beehive/gestao-de-propriedade/politicas/taxas/EditaTaxasHotelRede.png> "EditaTaxasHotelRede.png")

Quando a taxa está a ser criada, as ações adicionais (representadas na interface por três pontos) não devem estar visíveis, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não gravadas serão perdidas caso decida atualizar.

## Eliminar Taxas

É possível eliminar uma ou várias Taxas.
Deve ser possível eliminar uma ou várias Taxas na mesma ação.

Não é possível eliminar **Taxas Multi-Propriedade** (Editável por = Multi-Property).
Não é possível eliminar Taxas que estejam atribuídas a tarifas ou pacotes.

Se o utilizador tentar eliminar várias taxas e, por qualquer motivo, uma das taxas falhar, a ação deve ser revertida. Se a eliminação de uma taxa falhar, nenhuma outra taxa deve ser eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Taxas Multi-Propriedade, consultar** [Políticas Multi-Propriedade](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx).

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 03-09-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 02-03-2022 | Flávia Guerreiro | [Feature O-550](https://omnibees.aha.io/features/O-550) | Inclusão de Taxas de Multi-Propriedade<br/>Tradução da documentação para PT |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bA57C4C9D-1971-4CD3-BF00-D450975769EE%7d&file=Offers.docx&action=default&mobileredirect=true&cid=78619946-0877-49f6-8bf5-12097adc8725) | Primeira documentação criada para Taxas |