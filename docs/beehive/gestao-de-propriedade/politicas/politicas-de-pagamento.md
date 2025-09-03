---
sidebar_label: Políticas de Depósito/Garantia
title: Políticas de Depósito/Garantia
description: Este documento detalha a gestão de políticas de depósito/garantia, incluindo a sua criação, edição, eliminação e listagem. Aborda também a sua aplicação em contexto hoteleiro e multi-propriedade, e as permissões de utilizador associadas.
slug: /beehive/gestao-de-propriedade/politicas/politicas-de-pagamento
---

# Políticas de Depósito/Garantia

As políticas de depósito/garantia servem como uma garantia para o hotel de que o hóspede que está a reservar um quarto está realmente interessado em hospedar-se no hotel.

A reserva incluirá a informação sobre o valor da política de depósito, para que o hoteleiro possa cobrar o hóspede em conformidade.

## Lista de Políticas de Depósito/Garantia

Neste ecrã, são listadas todas as Políticas de Depósito/Garantia do hotel em contexto, incluindo Políticas de Depósito/Garantia Multi-Propriedade que tenham o hotel selecionado.

![ListaDepositoHotel.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-pagamento/ListaDepositoHotel.png> "ListaDepositoHotel.png")

A lista deve conter as seguintes informações:

*   **Nome**
*   **Descrição**
*   **Valor do Depósito**
*   **Depósito Até**
*   **Editável por**
*   **Ícone de Item Externo** (se aplicável)

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna **Editável por** indica se o registo é multi-propriedade ou de hotel.

*   **Multi-Propriedade**: para registos criados e geridos em multi-propriedade ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registos criados em multi-propriedade e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-propriedade.

Deve ser possível filtrar por qualquer coluna da lista, exceto pela Descrição. Os filtros possíveis são:

*   **Nome**
*   **Custo** (_em percentagem ou em moeda_)
*   **Número de noites**
*   **Depósito até**
*   **Editável por** _(lista de seleção única)_

O filtro "Nome" deve ser do tipo texto livre.
O filtro "Custo" é do tipo numérico, com valores maiores que zero e duas casas decimais.
Os filtros "Número de noites" e "Depósito até" são do tipo numérico, com valores inteiros e maiores que zero.
O filtro "Editável por" deve ser do tipo seleção, onde só pode ser selecionada uma das duas opções listadas.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna "Editável por".
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
As ações adicionais (representadas na interface por três pontos) devem ser visíveis apenas quando um item é selecionado, e a única ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu "Favoritos").

Para visualizar a lista de todas as Políticas de Depósito/Garantia eliminadas (incluindo políticas de depósito/garantia multi-propriedade que tenham o hotel associado), é necessário aceder a essa lista através de **Políticas de Depósito/Garantia > Eliminados**.

Para atualizar a lista de políticas de depósito/garantia com a informação mais recente, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Políticas de Depósito/Garantia

Neste ecrã é possível criar ou editar uma política de depósito/garantia. Todos os campos obrigatórios devem ser preenchidos para que se possa gravar com sucesso. Quando esta operação for concluída, a política de depósito/garantia estará pronta para ser utilizada.

![EditDepositoHotel.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-pagamento/EditDepositoHotel.png> "EditDepositoHotel.png")

| **Campo**                 | **Obrigatório?**                                 |
| :------------------------ | :----------------------------------------------- |
| **Detalhes**              | N/A                                              |
| Nome                      | Sim                                              |
| Descrição                 | Sim                                              |
| Aplicar valor de depósito | Não                                              |
| Depósito Até              | Sim (Se "Aplicar valor de depósito" selecionado) |
| Valor do depósito         | Sim (Se "Aplicar valor de depósito" selecionado) |
| Tipos de Garantia         | Não                                              |

O nome e a descrição da Política de Depósito/Garantia podem ser definidos em vários idiomas.
O idioma predefinido deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

O custo pode ser definido em várias moedas. A moeda predefinida deve ser a moeda base da propriedade e as restantes moedas devem ser aquelas que foram configuradas na propriedade como moedas adicionais.

Ao apagar um valor definido em moeda, o sistema verifica se a política de depósito/garantia está associada a tarifas ou pacotes definidos nessa mesma moeda e, em caso afirmativo, o utilizador é avisado de que essa moeda deve ter um valor definido.

Os valores possíveis para os Tipos de Garantia são:

*   Cartão de Crédito
*   Nome/Endereço da Agência de Viagens
*   Nome/Endereço da Empresa
*   Nome/Endereço do Hóspede
*   Número IATA da Agência de Viagens
*   ID/CD da Empresa
*   Depósito Aceite em Garantia

**Políticas de Depósito/Garantia Multi-Propriedade** (_Editável por_ = Multi-Property) podem ser consultadas pelo utilizador sem necessidade de permissão especial para tal.
Ao aceder aos detalhes de uma política de depósito/garantia multi-propriedade, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição e os valores definidos em outras moedas.

![DepositoRedeHotel.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-pagamento/DepositoRedeHotel.png> "DepositoRedeHotel.png")

Quando a política de depósito/garantia está a ser criada, as ações adicionais (representadas na interface por três pontos) não devem estar visíveis, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não gravadas serão perdidas caso decida atualizar.

## Eliminar Políticas de Depósito/Garantia

É possível eliminar uma ou várias Políticas de Depósito/Garantia.
Deve ser possível eliminar uma ou várias Políticas de Depósito/Garantia na mesma ação.

Não é possível eliminar **Políticas de Depósito/Garantia Multi-Propriedade** (_Editável por_ = Multi-Property).
Não é possível eliminar Políticas de Depósito/Garantia que estejam atribuídas a tarifas ou pacotes.

Se o utilizador tentar eliminar várias políticas de depósito/garantia e, por qualquer motivo, uma das políticas falhar, a ação deve ser revertida. Se a eliminação de uma política falhar, nenhuma outra política deve ser eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Políticas de Depósito/Garantia Multi-Propriedade, consultar** [Políticas Multi-Propriedade](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx).

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 03-09-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 28-02-2022 | Flávia Guerreiro | [Feature O-530](https://omnibees.aha.io/features/O-530) | Inclusão de Políticas de Depósito/Garantia de Multi-Property<br/>Tradução da documentação para PT |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bA57C4C9D-1971-4CD3-BF00-D450975769EE%7d&file=Offers.docx&action=default&mobileredirect=true&cid=78619946-0877-49f6-8bf5-12097adc8725) | Primeira documentação criada para Políticas de Depósito/Garantia |