---
sidebar_label: Atividades
title: Atividades
description: Este documento detalha a criação, gestão e eliminação de Atividades na plataforma, que podem ser selecionadas pelos hóspedes no Motor de Reservas para personalizar suas estadias e serem alvo de campanhas de marketing direcionadas.
slug: /atividades
---

# Atividades

As Atividades são criadas no menu Gestão da Propriedade e escolhidas no Motor de Reservas durante a reserva, onde o hóspede pode selecionar as suas atividades preferidas. A lista de Atividades escolhidas pelo hóspede está ligada ao seu perfil para que possa ser alvo de campanhas de marketing direcionadas às suas preferências (por exemplo: se gostar de esquiar, pode receber uma *newsletter* a promover um pacote para um fim de semana de *ski* no hotel).

## Lista de Atividades

Neste ecrã são listadas todas as Atividades da propriedade.

![Lista Atividades.JPG](/assets/beehive/gestao-de-propriedade/atividades/Lista Atividades.JPG)

A lista deve conter as seguintes informações:

*   Atividade
*   Categoria

Deve ser possível pesquisar por qualquer coluna da lista, e o campo "pesquisar" deve considerar o operador "contém".

Deve ser possível ordenar por qualquer coluna da lista. O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A), e o terceiro clique regressa à ordem inicial.

A ação "Editar" deve ser visível apenas se um item for selecionado.

A ação "Eliminar" deve ser visível apenas se um ou mais itens forem selecionados.

As "mais opções" (representadas na interface pelos três pontos) devem ser visíveis apenas quando um único item é selecionado e a única opção é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).

No menu suspenso que lista os itens ativos e eliminados, o utilizador seleciona a opção "Eliminados" para listar todas as Atividades Eliminadas. A lista de Atividades Eliminadas deve incluir uma coluna extra com a informação da data de eliminação.

O utilizador clica em "Atualizar" para recarregar o ecrã com as informações atualizadas.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Criar e Editar Atividades

Neste ecrã é possível criar e editar Atividades.

O utilizador deve preencher todos os campos obrigatórios e guardá-los. Quando a operação é concluída, a Atividade estará pronta para ser utilizada.

![Criação_Edição Atividade.JPG](/assets/beehive/gestao-de-propriedade/atividades/Criação_Edição Atividade.JPG)

| **Campo**     | **Obrigatório?** |
| :------------ | :--------------- |
| **Nome**      | Sim              |
| **Categoria** | Sim              |

O Nome da Atividade e da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade.

O Nome da Atividade deve ter um máximo de 100 caracteres, e o Nome da Categoria um máximo de 50 caracteres.

O utilizador pode criar uma nova Categoria de Atividade ou utilizar uma existente.

Deve ser possível listar todas as Categorias de Atividades existentes. A lista de Categorias deve incluir paginação (50 itens).

:::info
Quando a atividade está a ser criada, a opção "Histórico de Alterações" não deve estar visível. Esta opção é visível apenas no modo de edição.
:::

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

O utilizador clica em "Atualizar" para recarregar o ecrã com as informações atualizadas.
:::warning
Antes de atualizar, o utilizador é avisado que todas as possíveis alterações efetuadas serão perdidas.
:::

## Eliminar Atividades

É possível eliminar uma ou mais atividades.

É possível eliminar uma ou mais atividades dentro da mesma ação.

Se o utilizador tentar eliminar várias atividades e, por qualquer razão, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atividade deve ser eliminada.
O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

<h2>Histórico</h2>

### Histórico de alterações e referências
| Data da alteração | Owner            | Referência de alteração | Observações                       |
| :---------------- | :--------------- | :---------------------- | :-------------------------------- |
| 27-08-2025        | N8N              | -                       | Conversão da documentação para docusaurus |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação          |