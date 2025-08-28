---
sidebar_label: Atividades
title: Atividades
description: Este documento detalha a gestão de "Atividades", desde a sua criação e edição até a listagem e eliminação, explicando como são escolhidas pelos hóspedes no Motor de Reservas e como suas preferências são utilizadas.
slug: /beehive/gestao-de-propriedade/atividades
---

# Atividades

As Atividades são criadas no menu **Gestão da Propriedade** e escolhidas no Motor de Reservas durante a reserva, onde o hóspede pode selecionar as suas atividades preferidas. A lista de Atividades escolhidas pelo hóspede está ligada ao seu perfil para que possa ser alvo de campanhas de marketing direcionadas às suas preferências (por exemplo: se gostar de esquiar, pode receber uma *newsletter* a promover um pacote para um fim de semana de esqui no hotel).

## Lista de Atividades

Neste ecrã são listadas todas as Atividades da propriedade.

![Lista Atividades](</assets/beehive/gestao-de-propriedade/atividades/Lista Atividades.JPG> "Lista Atividades")

A lista deve conter as seguintes informações:

*   Atividade
*   Categoria

Deve ser possível pesquisar por qualquer coluna da lista, e o campo "**Pesquisar**" deve considerar o operador "contém".

Deve ser possível ordenar por qualquer coluna da lista.
:::tip
O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A), e o terceiro clique regressa à ordem inicial.
:::

A ação "**Editar**" deve ser visível apenas se um item for selecionado.

A ação "**Eliminar**" deve ser visível apenas se um ou mais itens forem selecionados.

As "**Mais opções**" (representadas na *UI* por três pontos) devem ser visíveis apenas quando um único item é selecionado, e a única opção é "**Histórico de Alterações**".

A lista deve incluir paginação (50 itens).

No menu *dropdown* que lista os itens ativos e eliminados, o utilizador seleciona a opção "**Eliminados**" para listar todas as Atividades eliminadas. A lista de Atividades eliminadas deve incluir uma coluna extra com a informação da data de eliminação.

O utilizador clica em "**Atualizar**" para recarregar o ecrã com a informação atualizada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Criar e Editar Atividades

Neste ecrã é possível criar e editar Atividades.

O utilizador deve preencher todos os campos obrigatórios e salvar. Quando a operação é concluída, a Atividade estará pronta para ser utilizada.

![Criação/Edição Atividade](</assets/beehive/gestao-de-propriedade/atividades/Criação_Edição Atividade.JPG> "Criação/Edição Atividade")

| **Campo**     | **Obrigatório?** |
| :------------ | :--------------- |
| **Nome**      | Sim              |
| **Categoria** | Sim              |

O **Nome** da Atividade e da Categoria podem ser definidos em vários idiomas. O idioma *default* deve ser o idioma base da propriedade.

O **Nome** da Atividade deve ter um máximo de 100 caracteres e o **Nome** da Categoria, um máximo de 50 caracteres.

O utilizador pode criar uma nova **Categoria de Atividade** ou utilizar uma existente.

Deve ser possível listar todas as **Categorias de Atividades** existentes. A lista de **Categorias** deve incluir paginação (50 itens).

Quando a atividade está a ser criada, a opção "**Histórico de Alterações**" não deve estar visível. Esta opção é visível apenas no modo de edição.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

O utilizador clica em "**Atualizar**" para recarregar o ecrã com a informação atualizada.
:::tip
Antes de atualizar, o utilizador é avisado de que todas as possíveis alterações efetuadas serão perdidas.
:::

## Eliminar Atividades

É possível eliminar uma ou mais atividades.

É possível eliminar uma ou mais atividades dentro da mesma ação.
:::info
Se o utilizador tentar eliminar várias atividades e, por qualquer razão, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registro falhar, nenhuma outra atividade deve ser eliminada.
:::
O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Histórico
**Histórico de alterações e referências**
| Data da alteração | Owner            | Referência de alteração | Observações                               |
|-------------------|------------------|-------------------------|-------------------------------------------|
| 28-08-2025        | N8N              | -                       | Conversão da documentação para docusaurus |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação                  |