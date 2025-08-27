---
sidebar_label: Atrações
title: Atrações
description: Este documento detalha a gestão de atrações, incluindo a listagem, criação, edição e eliminação de atrações e suas categorias, com foco na configuração de detalhes, localização e imagens para exibição em motores de reserva.
slug: /atracoes
---

# Atrações

As atrações são criadas no menu **Gestão da Propriedade** e, se assim o desejar, o hotel poderá enviá-las no e-mail de Pré-Estadia das Ações Automáticas. Além disso, são exibidas no motor de reservas, fornecendo informações adicionais sobre as áreas circundantes e locais de interesse.

## Lista de Atrações

Neste ecrã são listadas todas as atrações da propriedade.

![Lista Atrações.JPG](/docs/beehive/gestao-de-propriedade/atracoes/Lista Atrações.JPG)

A lista contém a seguinte informação:

*   Data de Eliminação (apenas para as atrações eliminadas)
*   Nome
*   Categoria
*   URL
*   Estado

Deve ser possível pesquisar por qualquer coluna da lista, e o campo "pesquisar" deve considerar o operador "contém". (Não é possível pesquisar pela data de eliminação).

Deve ser possível ordenar por qualquer coluna da lista. O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A) e o terceiro clique regressa à ordem inicial.

Deve ser possível filtrar por qualquer coluna da lista. Todos os filtros devem ser texto livre e o filtro deve considerar o operador "contém".

Para a Data de Eliminação (apenas visível na lista das Atrações Removidas), deve considerar o operador "igual", e o *date picker* deve ter selecionado por padrão a data atual.

A ação "Editar" deve ser visível apenas se um item for selecionado.

Deve ser possível eliminar uma ou mais atrações numa só ação. A opção "Eliminar" é visível apenas se um ou mais itens forem selecionados.

:::info Nota
No menu *drop-down* que lista os itens ativos e os eliminados, o utilizador seleciona a opção "Eliminar" para listar todas as Atrações Eliminadas. A lista de Atrações Eliminadas deve incluir uma coluna extra para a data de eliminação. Para esta coluna, o formato da data muda de acordo com o idioma:
*   UK (mm/dd/aaaa hh:mm:ss AM/PM)
*   Outros idiomas (dd/mm/aaaa hh:mm:ss)
:::

As "mais opções" (representadas na interface por três pontos) devem ser visíveis apenas quando um único item é selecionado, e a única opção é "Histórico de Alterações".

Deve ser possível definir o ecrã como Favorito (para ser incluído no Menu de Navegação de Favoritos).

O utilizador clica em "Atualizar" para recarregar o ecrã com as informações atualizadas.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Criar e Editar Atrações

Neste ecrã é possível criar e editar uma atração.

O utilizador deve preencher todos os campos obrigatórios e salvar. Quando a operação é concluída, a Atração estará pronta para ser utilizada.

![Nova Atração.JPG](/docs/beehive/gestao-de-propriedade/atracoes/Nova Atração.JPG)

| **Campo**       | **Obrigatório?**      |
| :-------------- | :-------------------- |
| **Nome**        | Sim                   |
| **Descrição**   | Sim                   |
| **Categoria**   | Sim                   |
| **Estado**      | Sim (ativo por padrão) |
| **URL**         | Não                   |
| **Localização** | N/A                   |
| **Endereço**    | Não                   |
| **País**        | Não                   |
| **Cidade**      | Não                   |
| **Estado**      | Não                   |
| **Latitude**    | Não                   |
| **Longitude**   | Não                   |
| **Fotos**       | N/A                   |
| **Fotos**       | Não                   |

Nome, descrição e nome da categoria podem ser definidos em vários idiomas. O idioma padrão deve ser o idioma base da propriedade.

O Nome deve ter um máximo de 100 caracteres e deve ser único. A descrição deve ter um máximo de 4000 caracteres.

O Nome da Categoria pode ter até um máximo de 50 caracteres.

O utilizador deve poder selecionar uma categoria da lista de todas as categorias de atrações existentes.

O URL deve ser válido, seguindo o padrão:

```regex
^(((ht|f){1}(tp(s?)\:[\/]{2}))|((www\.){1}))[-a-zA-Z0-9@:%\_\+.\~#?&\/=]+$
```

É possível preencher o endereço diretamente nos campos ou através do Google Maps.

Quando se está a usar o Google Maps, é possível pesquisar por uma morada específica ou escolher uma localização diretamente pelo mapa (este deve incluir funcionalidades como *zoom in* e *zoom out*, vista de satélite, vista de rua e a minha localização). Depois de encontrar a localização correta, é possível usar a morada, as coordenadas GPS ou ambas.

A API deve retornar a lista de Países, Estados e Cidades. Quando um utilizador seleciona determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades, cuja lista corresponde ao Estado selecionado.

O sistema valida a informação inserida nos campos "Longitude" e "Latitude". A Latitude deve estar entre 90 e -90. A Longitude deve estar entre 180 e -180.

O utilizador pode carregar/eliminar 1 foto:

*   O tamanho máximo é de 1MB.
:::info Nota
Avaliar com a equipa técnica se está a ser feita alguma compressão à imagem para se perceber se este limite é viável.
:::
*   Gerar *thumbnail* de 100x100px (*resize* + *centered crop*).
*   Tamanho mínimo: 960px de largura (Largura mínima para o Motor de Reservas móvel).
*   Formatos suportados: \*.JPG, \*.JPEG, \*.PNG.

O utilizador pode pré-visualizar a foto.

Quando a atração está a ser criada, a opção "Histórico de Alterações" não deve estar visível. Esta opção é visível apenas no modo de edição.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada. Antes de atualizar, o utilizador é avisado de que todas as alterações não salvas serão perdidas.

## Eliminar Atrações

É possível eliminar uma ou mais atrações.

É possível eliminar uma ou mais atrações dentro da mesma operação.

:::danger Cuidado
Se o utilizador tentar eliminar várias atrações e, por qualquer motivo, alguma das eliminações falhar, a operação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atração deve ser eliminada.
:::

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Categorias de Atrações

Neste ecrã é possível listar todas as categorias de atrações. Na própria lista é possível gerir as categorias: adicionar, editar e eliminar.

A lista deve incluir a seguinte informação:

*   Nome

Deve ser possível pesquisar e ordenar pelo nome da categoria. Não há opção de filtro.

A lista deve incluir paginação (50 itens).

O utilizador pode adicionar uma nova categoria, definindo o nome da categoria. O nome da categoria deve ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

Deve ser possível editar e eliminar categorias de atrações existentes.

Para atualizar a lista de Categorias de Atrações com a informação mais recente, é necessário selecionar o botão "Atualizar".

### Adicionar Categoria diretamente na Atração (painel lateral esquerdo)

Neste ecrã é possível criar uma nova categoria para ser usada em qualquer atração.

O utilizador deve preencher todos os campos obrigatórios e guardar. Quando a operação é concluída com sucesso, a categoria estará pronta para ser usada.

O utilizador pode adicionar uma nova categoria, definindo o nome da categoria. O nome da categoria deve ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

## Histórico

### Histórico de alterações e referências
| Data da alteração | Owner            | Referência de alteração | Observações                               |
| :---------------- | :--------------- | :---------------------- | :---------------------------------------- |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação                  |
| 27-08-2025        | N8N              | -                       | Conversão da documentação para docusaurus |

### UI / UX
| Data da última alteração | URL Design                                                                                                                                       | Referência de alteração |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| ND                       | [https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=%24%2FOmnibees%2FOB%2FUI%20Design%2FProtur%2FMain%2FOMNIBEES_v02%2FRelease%2FAttractions](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Attractions) | ND                      |