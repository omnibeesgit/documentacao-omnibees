---
sidebar_label: Políticas Gerais
title: Políticas Gerais
description: Este documento detalha a gestão de Políticas Gerais, incluindo a sua criação, edição, eliminação e listagem. Aborda também a categorização das políticas, a sua aplicação em contexto hoteleiro e multi-propriedade, e as permissões de utilizador associadas.
slug: /beehive/gestao-de-propriedade/politicas/politicas-gerais
---

# Políticas Gerais

As políticas gerais são meramente informativas, não têm nenhum impacto sobre os preços.
As políticas gerais podem ser categorizadas para criar grupos como:

*   Políticas de Animais de Estimação
*   Políticas de Cartão de Crédito
*   Plano Familiar
*   …

## Lista de Políticas Gerais

Neste ecrã são listadas todas as Políticas Gerais do hotel em contexto, incluindo Políticas Gerais Multi-Propriedade que tenham o hotel selecionado.

![05.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-gerais/05.png> "05.png")

A lista deve conter as seguintes informações:

*   Nome
*   Descrição
*   Editável por
*   Ícone de Item Externo _(se aplicável)_

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna "Editável por" indica se o registo é multi-propriedade ou de hotel.

*   **Multi-Propriedade**: para registos criados e geridos em multi-propriedade ("Quem pode editar?" = Multi-Propriedade);
*   **Hotel**: para registos criados em multi-propriedade e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-propriedade.

Deve ser possível filtrar por qualquer coluna da lista, exceto pela Descrição. Os filtros possíveis são:

*   Nome _(texto livre)_
*   Editável por _(lista de seleção única)_

O filtro Nome deve ser do tipo texto livre.
O filtro Editável por deve ser do tipo seleção, onde só pode ser selecionada uma das duas opções listadas.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna "Editável por".
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
As ações adicionais (representadas na interface por três pontos) devem ser visíveis apenas quando um item é selecionado, e a única ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu "Favoritos").

Para visualizar a lista de todas as Políticas Gerais eliminadas (incluindo políticas gerais multi-propriedade que tenham o hotel associado), é necessário aceder a essa lista através de Políticas Gerais > Eliminados.

Para atualizar a lista de políticas gerais com a informação mais recente, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Políticas Gerais

Neste ecrã é possível criar ou editar uma política geral. Todos os campos obrigatórios devem ser preenchidos para que se possa gravar com sucesso. Quando esta operação for concluída, a política geral estará pronta para ser utilizada.

![PG2.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-gerais/PG2.png> "PG2.png")

| **Campo**                   | **Obrigatório?** |
| :-------------------------- | :--------------- |
| **Detalhes**                | N/A              |
| Nome                        | Sim              |
| Descrição                   | Sim              |
| Categoria da Política Geral | Não              |

O nome e a descrição da política geral e da categoria podem ser definidos em vários idiomas.
O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

O utilizador pode criar uma nova categoria de política geral ou utilizar uma já existente.
Deve ser possível listar todas as categorias de políticas gerais existentes. _Para mais detalhes sobre Categorias consultar_ [Políticas Gerais: Categorias](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/Documenta%C3%A7%C3%A3o%20por%20Menu/Gest%C3%A3o%20Propriedades/Categorias%20Pol%C3%ADticas%20Gerais.aspx)

**Políticas Gerais Multi-Propriedade** (_Editável por_ = Multi-Propriedade) podem ser consultadas pelo utilizador sem necessidade de permissão especial para tal.
Ao aceder aos detalhes de uma política geral multi-propriedade, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição.

![06.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-gerais/06.png> "06.png")

Quando a política geral está a ser criada, as ações adicionais (representadas na interface por três pontos) não devem estar visíveis, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não gravadas serão perdidas caso decida atualizar.

## Eliminar Políticas Gerais

É possível eliminar uma ou várias Políticas Gerais.
Deve ser possível eliminar uma ou várias Políticas Gerais na mesma ação.

Não é possível eliminar **Políticas Gerais Multi-Propriedade** (_Editável por_ = Multi-Propriedade).
Não é possível eliminar Políticas Gerais que estejam atribuídas a tarifas ou pacotes.

Se o utilizador tentar eliminar várias políticas gerais e, por qualquer motivo, uma das políticas falhar, a ação deve ser revertida. Se a eliminação de uma política falhar, nenhuma outra política deve ser eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Políticas Gerais Multi-Propriedade consultar** **[Políticas Multi-Propriedade](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx)**

## Histórico