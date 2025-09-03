---
sidebar_label: Políticas para Crianças
title: Políticas para Crianças
description: Este documento detalha a gestão de políticas para crianças, especificando restrições e ofertas baseadas na idade. Abrange a sua criação, edição e eliminação, a listagem em contexto hoteleiro e multi-propriedade, e as permissões de utilizador associadas, incluindo regras sobre ocupação e variação de preço.
slug: /beehive/gestao-de-propriedade/politicas/politicas-de-crianca
---

# Políticas para Crianças

As políticas para crianças especificam se alguém que não é adulto (bebê, júnior, infantil, adolescente, etc.) tem certas restrições ou ofertas.

A política para crianças pode ou não contar para a ocupação total do quarto.

## Lista de Políticas para Crianças

Neste ecrã, são listadas todas as Políticas para Crianças do hotel em contexto, incluindo Políticas para Crianças Multi-Propriedade que tenham o hotel selecionado.

Para que seja possível fazer reservas com crianças de determinadas idades, é necessário que existam políticas para crianças configuradas no hotel para essas idades.
Idades entre os 0 e os 17 anos que não estejam contidas em nenhuma política para crianças configurada no hotel, não são disponibilizadas para reservas.
Sempre que o utilizador aceder ao ecrã de políticas para crianças, é mostrada uma mensagem de informação com esta regra.

![P.criança4.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança4.png> "P.criança4.png")

A lista deve conter as seguintes informações:

*   **Nome**
*   **Idade Mín.**
*   **Idade Máx.**
*   **Cobrar como**
*   **Variação de Preço**
*   **Ícone de Item Externo** (se aplicável)

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna **Editável por** indica se o registo é multi-propriedade ou de hotel.

*   **Multi-Propriedade**: para registos criados e geridos em multi-propriedade ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registos criados em multi-propriedade e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-propriedade.

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   **Nome**
*   **Idade Mín.**
*   **Idade Máx.**
*   **Cobrar como** _(lista de seleção única)_
*   **Variação de Preço** _(em percentagem ou em moeda)_
*   **Editável por** _(lista de seleção única)_

O filtro "Nome" deve ser do tipo texto livre.
Os filtros "Idade Mín." e "Idade Máx." são do tipo numérico, com valores inteiros e maiores que zero.
O filtro "Cobrar como" é do tipo seleção, onde só pode ser selecionada uma das três opções listadas. As opções do filtro "Cobrar como" são as seguintes:

*   Criança
*   Gratuito
*   Adulto

O filtro "Variação de Preço" é do tipo numérico, com valores maiores que zero e duas casas decimais; pode ser incremental ou decremental e em moeda ou em percentagem.
O filtro "Editável por" é do tipo seleção, onde só pode ser selecionada uma das duas opções listadas. As opções do filtro "Editável por" são as seguintes:

*   Multi-Property
*   Hotel

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna "Editável por".
Deve ser possível ordenar por qualquer coluna da lista, exceto pela coluna "Cobrar como".

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
As ações adicionais (representadas na interface por três pontos) devem ser visíveis apenas quando um item é selecionado, e a única ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu "Favoritos").

Para visualizar a lista de todas as Políticas para Crianças eliminadas (incluindo políticas para crianças multi-propriedade que tenham o hotel associado), é necessário aceder a essa lista através de **Políticas para Crianças > Eliminados**.

Para atualizar a lista de políticas para crianças com as informações mais recentes, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Políticas para Crianças

Neste ecrã é possível criar ou editar uma política para crianças. Todos os campos obrigatórios devem ser preenchidos para que se possa gravar com sucesso. Quando esta operação for concluída, a política para crianças estará pronta para ser utilizada.

![P.criança5.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança5.png> "P.criança5.png")

| **Campo**                | **Obrigatório?**                                |
| :----------------------- | :---------------------------------------------- |
| **Detalhes**             | N/A                                             |
| Nome                     | Sim                                             |
| Descrição                | Sim                                             |
| **Configurações**        |                                                 |
| Idade mín.               | Sim                                             |
| Idade máx.               | Sim                                             |
| Cobrar Crianças como     | Sim                                             |
| Crianças                 | Não                                             |
| Ativar Variação de Preço | Não                                             |
| Valor                    | Sim (Se "Ativar Variação de Preço" selecionado) |
| Grátis                   | Não                                             |
| Adulto                   | Não                                             |
| Contar por ocupação      | Não                                             |

O nome e a descrição da Política para Crianças podem ser definidos em vários idiomas.
O idioma predefinido deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

A opção "Ativar Variação de Preço" inclui uma informação com a seguinte observação: "Ao ativar a variação de preço para crianças, será aplicado um valor ou uma percentagem sobre o preço definido para crianças na atualização de tarifas."

O utilizador deve definir se a Variação de Preço (valor ou percentagem) aumenta ou diminui o preço definido para crianças na atualização de tarifas.
A Variação de Preço é em percentagem por predefinição e o valor deve ser maior que zero e menor ou igual a 100%.
O valor de variação de preço pode ser definido em várias moedas. A moeda predefinida é a moeda base da propriedade e as moedas restantes são as moedas adicionais definidas na configuração da propriedade.
A opção "outras moedas" só fica visível se o utilizador definir o valor em moeda.

A opção "Contar por ocupação" faz com que a criança dentro das idades definidas na política conte para a ocupação máxima do quarto.

Não há um limite máximo para políticas para crianças. As idades definidas nas políticas para crianças têm de ser mutuamente exclusivas em qualquer um dos três tipos de políticas (as idades não podem ser duplicadas entre políticas para crianças do mesmo hotel).

**Políticas para Crianças Multi-Propriedade** (_Editável por_ = Multi-Property) podem ser consultadas pelo utilizador sem necessidade de permissão especial para tal.
Ao aceder aos detalhes de uma política para crianças multi-propriedade, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição e os valores definidos em outras moedas.

![P.criança6.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança6.png> "P.criança6.png")

Quando a política para crianças está a ser criada, as ações adicionais (representadas na interface por três pontos) não devem estar visíveis, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não gravadas serão perdidas caso decida atualizar.

## Eliminar Políticas para Crianças

É possível eliminar uma ou várias Políticas para Crianças.
Deve ser possível eliminar uma ou várias Políticas para Crianças na mesma ação.

Não é possível eliminar **Políticas para Crianças Multi-Propriedade** (_Editável por_ = Multi-Property).
Não é possível eliminar Políticas para Crianças que estejam atribuídas a tarifas ou pacotes.

Se o utilizador tentar eliminar várias políticas para crianças e, por qualquer motivo, uma das políticas falhar, a ação deve ser revertida. Se a eliminação de uma política falhar, nenhuma outra política deve ser eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Políticas para Crianças Multi-Propriedade, consultar** [Políticas Multi-Propriedade](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx).

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 03-09-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 28-02-2022 | Flávia Guerreiro | [Feature O-530](https://omnibees.aha.io/features/O-530) | Inclusão de Políticas de Depósito/Garantia de Multi-Property<br/>Tradução da documentação para PT |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bA57C4C9D-1971-4CD3-BF00-D450975769EE%7d&file=Offers.docx&action=default&mobileredirect=true&cid=78619946-0877-49f6-8bf5-12097adc8725) | Primeira documentação criada para Políticas de Depósito/Garantia |