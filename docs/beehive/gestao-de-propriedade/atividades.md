---
sidebar_label: Atividades
title: Atividades
description: Este documento descreve as funcionalidades de gestão de atividades, incluindo a criação, edição, eliminação e listagem de atividades e categorias associadas, e como estas interagem com o Motor de Reservas e campanhas de marketing.
slug: /beehive/gestao-de-propriedade/atividades
---

# Atividades

As **Atividades** são criadas no menu **Gestão da Propriedade** e escolhidas no **Motor de Reservas** durante a reserva, onde o hóspede pode selecionar as suas atividades preferidas. A lista de atividades escolhidas pelo hóspede **está** ligada ao seu perfil para que possa ser alvo de campanhas de marketing direcionadas às suas preferências (por exemplo: se gostar de esquiar, pode receber uma newsletter a promover um pacote para um fim de semana de **esqui** no hotel).

## Lista de Atividades

Neste ecrã são listadas todas as atividades da propriedade.

![Lista de Atividades](</assets/beehive/gestao-de-propriedade/atividades/Lista Atividades.JPG> "Lista de Atividades")

A lista deve conter a seguinte informação:

*   Atividade
*   Categoria

Deve ser possível pesquisar por qualquer coluna da lista e o campo "pesquisar" deve considerar o operador "contém".

Deve ser possível ordenar por qualquer coluna da lista. O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A) e o terceiro clique regressa à ordem inicial.

A ação "Editar" deve ser visível apenas se um item for selecionado.

A ação "Eliminar" deve ser visível apenas se um ou mais itens forem selecionados.

As "mais opções" (representadas na interface por três pontos) devem ser visíveis apenas quando um único item é selecionado e a única opção é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).

No menu de seleção (dropdown) que lista os itens ativos e eliminados, o utilizador seleciona a opção "Eliminados" para listar todas as atividades eliminadas. A lista de atividades eliminadas deve incluir uma coluna extra com a informação da data de eliminação.

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Criar e Editar Atividades

Neste ecrã é possível criar e editar atividades.

O utilizador deve preencher todos os campos obrigatórios e **gravar**. Quando a operação é concluída, a atividade estará pronta para ser utilizada.

![Criação e Edição de Atividade](</assets/beehive/gestao-de-propriedade/atividades/Criação_Edição Atividade.JPG> "Criação e Edição de Atividade")

| **Campo** | **Obrigatório?** |
| :-------- | :--------------- |
| **Nome**  | S                |
| **Categoria** | S                |

O nome da atividade e da categoria pode ser **definido** em vários idiomas. O idioma **predefinido** deve ser o idioma base da propriedade.

O nome da atividade deve ter um máximo de 100 caracteres e o nome da categoria um máximo de 50 caracteres.

O utilizador pode criar uma nova categoria de atividade ou **utilizar** uma existente.

Deve ser possível listar todas as categorias de atividades existentes. A lista de categorias deve incluir paginação (50 itens).

Quando a atividade está a ser criada, a opção "Histórico de Alterações" não deve estar visível. Esta opção é visível apenas no modo de edição.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada. Antes de atualizar, o utilizador é **avisado de que** todas as possíveis alterações efetuadas serão perdidas.

## Eliminar Atividades

É possível eliminar uma ou mais atividades.

É possível eliminar uma ou mais atividades dentro da mesma ação.

Se o utilizador tentar eliminar várias atividades e, por qualquer razão, alguma das eliminações **falhar**, a ação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atividade deve ser eliminada.
O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Categorias de Atividades

Neste ecrã é possível listar todas as categorias de atividades. Na própria lista é possível gerir as categorias, adicionar, editar e eliminar categorias.

![Lista de Categorias](</assets/beehive/gestao-de-propriedade/atividades/Lista de Categorias.JPG> "Lista de Categorias")

A lista contém a seguinte informação:

*   Nome

É possível pesquisar e ordenar pelo nome da categoria. **Não existe** a opção de filtro.

A lista deve incluir paginação (50 itens).

O utilizador pode adicionar uma nova categoria, definindo o nome da categoria. O nome da categoria pode ser definido em diversos idiomas. O idioma **predefinido** deve ser o idioma base da propriedade.

É possível editar e eliminar Categorias de Atividade existentes.

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada.

## Adicionar Categoria diretamente na Atividade (left side panel)

Neste ecrã, é possível criar uma nova categoria de atividade para ser usada em qualquer atividade.

O utilizador deve preencher todos os campos obrigatórios e **gravar**. Quando a operação é concluída, a categoria de atividade estará pronta para ser utilizada.

![Nova Categoria via Painel Lateral](</assets/beehive/gestao-de-propriedade/atividades/Nova Categoria Side Panel.JPG> "Nova Categoria via Painel Lateral")

O utilizador pode adicionar uma nova categoria de atividade, definindo o nome da categoria.

O nome da categoria pode ser definido em diversos idiomas. O idioma **predefinido** deve ser o idioma base da propriedade.

## Histórico