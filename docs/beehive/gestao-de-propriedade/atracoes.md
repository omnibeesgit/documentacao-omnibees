---
sidebar_label: Atrações
title: Atrações
description: Este documento descreve a gestão de atrações na plataforma, abordando a criação, edição, listagem e eliminação de atrações e suas categorias, incluindo detalhes sobre campos, validações e configurações multilíngues.
slug: /beehive/gestao-de-propriedade/atracoes
---

# Atrações

As atrações são criadas no menu **Gestão da Propriedade** e, se assim o hotel entender, poderão ser enviadas no e-mail de Pré-Estadia das **Ações Automáticas**. Elas são exibidas no Motor de Reservas, fornecendo informações adicionais sobre as áreas circundantes e pontos de interesse.

## Lista de Atrações

Neste ecrã são listadas todas as atrações da propriedade.

![Lista de Atrações](</assets/beehive/gestao-de-propriedade/atracoes/Lista Atrações.JPG> "Lista de Atrações")

A lista deve conter as seguintes informações:

*   Data de Eliminação (apenas para as atrações eliminadas)
*   Nome
*   Categoria
*   URL
*   Estado

Deve ser possível pesquisar por qualquer coluna da lista, e o campo "**Pesquisar**" deve considerar o operador "contém" (não é possível pesquisar pela data de eliminação).

Deve ser possível ordenar por qualquer coluna da lista.
:::tip
O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A), e o terceiro clique regressa à ordem inicial.
:::

Deve ser possível filtrar por qualquer coluna da lista. Todos os filtros devem ser de **texto livre**, e o filtro deve considerar o operador "contém".

Para a **Data de Eliminação** (apenas visível na lista das Atrações Removidas), deve-se considerar o operador "igual", e o **seletor de data** deve ter selecionado, por definição, a data atual.

A ação "**Editar**" deve ser visível apenas se um item for selecionado.

Deve ser possível eliminar uma ou mais atrações numa só ação. A opção "**Eliminar**" é visível apenas se um ou mais itens forem selecionados.

No menu *dropdown* que lista os itens ativos e eliminados, o utilizador seleciona a opção "**Eliminados**" para listar todas as Atrações eliminadas. A lista de Atrações eliminadas deve incluir uma coluna extra para a data de eliminação.

Para a coluna **Data de Eliminação**, o formato da data muda de acordo com o idioma:
*   Reino Unido (mm/dd/aaaa hh:mm:ss AM/PM)
*   Outros idiomas (dd/mm/aaaa hh:mm:ss)

As "**Mais opções**" (representadas na *UI* por três pontos) devem ser visíveis apenas quando um único item é selecionado, e a única opção é "**Histórico de Alterações**".

Deve ser possível **definir** o ecrã como favorito (para ser incluído no Menu de Navegação de Favoritos).

O utilizador clica em "**Atualizar**" para recarregar o ecrã com a informação atualizada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Criar e Editar Atrações

Neste ecrã é possível criar e editar atrações.

O utilizador deve preencher todos os campos obrigatórios e **salvar**. Quando a operação é concluída, a **Atração** estará pronta para ser utilizada.

![Nova Atração](</assets/beehive/gestao-de-propriedade/atracoes/Nova Atração.JPG> "Nova Atração")

| **Campo**       | **Obrigatório?**         |
| :-------------- | :----------------------- |
| **Nome**        | Sim                      |
| **Descrição**   | Sim                      |
| **Categoria**   | Sim                      |
| **Estado**      | Sim (ativo por padrão) |
| **URL**         | Não                      |
| **Localização** | N/A                      |
| **Endereço**    | Não                      |
| **País**        | Não                      |
| **Cidade**      | Não                      |
| **Estado**      | Não                      |
| **Latitude**    | Não                      |
| **Longitude**   | Não                      |
| **Fotos**       | N/A                      |
| **Fotos**       | Não                      |

**Nome**, **Descrição** e **Nome da Categoria** podem ser definidos em vários idiomas. O idioma **padrão** deve ser o idioma base da propriedade.

O **Nome** deve ter um máximo de 100 caracteres e deve ser único. A **Descrição** deve ter um máximo de 4000 caracteres.

O **Nome da Categoria** pode ter até um máximo de 50 caracteres.

O utilizador deve poder selecionar uma categoria da lista de todas as categorias de atrações existentes.

O **URL** deve ser válido. A expressão regular para validação é:
```
^(((ht|f){1}(tp(s?)\\:\[\\/\]{2}))|((www\\.){1}))\[-a-zA-Z0-9@:%\_\\+.\~#?&\\/=\]+$
```

É possível preencher o endereço diretamente nos campos ou através do **Google Maps**.

Quando se está a usar o **Google Maps**, é possível pesquisar por uma morada específica ou escolher uma localização diretamente pelo mapa (este deve incluir funcionalidades como *zoom in* e *zoom out*, vista de satélite, vista de rua, a minha localização). Depois de encontrar a localização correta, é possível usar a morada, as coordenadas GPS ou ambas.

A **API** deve retornar a lista de **Países**, **Estados** e **Cidades**. Quando um utilizador seleciona um determinado país, a lista de **Estados** corresponde ao país selecionado. O mesmo acontece para as **Cidades**: a lista de cidades corresponde ao **Estado** selecionado.

O sistema valida a informação inserida nos campos "**Longitude**" e "**Latitude**". A **Latitude** deve estar entre 90 e -90. A **Longitude** deve estar entre 180 e -180.

O utilizador pode carregar ou eliminar 1 foto:

*   O tamanho máximo é de 1MB.
    :::info
    Avaliar com a equipa técnica se está a ser feita alguma compressão na imagem para se perceber se este limite é viável.
    :::
*   Gerar *thumbnail* de 100x100px (redimensionar e cortar centralizado).
*   Tamanho mínimo de 960px de largura (Largura mínima para o Motor de Reservas em dispositivos móveis).
*   Formatos suportados:
    *   `.JPG`
    *   `.JPEG`
    *   `.PNG`

O utilizador pode pré-visualizar a foto.

Quando a atração está a ser criada, a opção "**Histórico de Alterações**" não deve estar visível. Esta opção é visível apenas no modo de edição.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

O utilizador clica em "**Atualizar**" para recarregar o ecrã com a informação atualizada.
:::tip
Antes de atualizar, o utilizador é avisado de que todas as possíveis alterações efetuadas serão perdidas.
:::

## Eliminar Atrações

É possível eliminar uma ou mais atrações.

É possível eliminar uma ou mais atrações dentro da mesma ação.
:::danger
Se o utilizador tentar eliminar várias atrações e, por qualquer razão, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atração deve ser eliminada.
:::
O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo.

## Categorias de Atrações

Neste ecrã, é possível listar todas as **Categorias de Atrações**. Na própria lista, é possível gerir as categorias: adicionar, editar e eliminar.

A lista deve incluir a seguinte informação:

*   Nome

Deve ser possível pesquisar e ordenar pelo **Nome da Categoria**. Não há opção de filtro.

A lista deve incluir paginação (50 itens).

O utilizador pode adicionar uma nova categoria definindo o **Nome da Categoria**. O **Nome da Categoria** deve ser único.

O **Nome da Categoria** pode ser definido em vários idiomas. O idioma **padrão** deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

Deve ser possível editar e eliminar **Categorias de Atrações** existentes.

Para atualizar a lista de **Categorias de Atrações** com a informação mais recente, é necessário selecionar o botão "**Atualizar**".

### Adicionar Categoria diretamente na Atração (Painel Lateral Esquerdo)

Neste ecrã, é possível criar uma nova categoria para ser usada em qualquer atração.

O utilizador deve preencher todos os campos obrigatórios e **salvar**. Quando a operação é concluída com sucesso, a categoria estará pronta para ser usada.

O utilizador pode adicionar uma nova categoria definindo o **Nome da Categoria**. O **Nome da Categoria** deve ser único.

O **Nome da Categoria** pode ser definido em vários idiomas. O idioma **padrão** deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

## Histórico
**Histórico de alterações e referências**
| Data da alteração | Owner            | Referência de alteração | Observações                               |
|-------------------|------------------|-------------------------|-------------------------------------------|
| 28-08-2025        | N8N              | -                       | Conversão da documentação para docusaurus |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação                  |