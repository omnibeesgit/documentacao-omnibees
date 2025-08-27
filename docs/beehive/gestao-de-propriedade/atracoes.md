---
sidebar_label: Atrações
title: Atrações
description: Este documento detalha a gestão de atrações, incluindo a listagem, criação, edição e eliminação de atrações e suas categorias, com foco na configuração de detalhes, localização e imagens para exibição em motores de reserva.
slug: /
---

# Atrações

As atrações são criadas no menu **Gestão da Propriedade** e, se assim o desejar, o hotel poderá enviá-las no e-mail de Pré-Estadia das Ações Automáticas. Elas também são exibidas no motor de reservas, fornecendo informações adicionais sobre as áreas circundantes e locais de interesse.

## Lista de Atrações

Nesta tela são listadas todas as atrações da propriedade.

![Lista Atrações.JPG](/docs/beehive/gestao-de-propriedade/Lista Atrações.JPG)

A lista contém as seguintes informações:

*   Data de Eliminação (apenas para as atrações excluídas)
*   Nome
*   Categoria
*   URL
*   Estado

Deve ser possível pesquisar por qualquer coluna da lista, e o campo "pesquisar" deve considerar o operador "contém". (Não é possível pesquisar pela data de eliminação).

Deve ser possível ordenar por qualquer coluna da lista. O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A) e o terceiro clique regressa à ordem inicial.

Deve ser possível filtrar por qualquer coluna da lista. Todos os filtros devem ser texto livre e o filtro deve considerar o operador "contém".

Para a Data de Eliminação (apenas visível na lista das Atrações Removidas), deve considerar o operador "igual", e o *date picker* deve ter selecionado por padrão a data atual.

A ação "Editar" deve ser visível apenas se um item for selecionado.

Deve ser possível eliminar uma ou mais atrações em uma só ação. A opção "Eliminar" apenas é visível se um ou mais itens forem selecionados.

:::info Nota
No menu *drop-down* que lista os itens ativos e eliminados, o usuário seleciona a opção "Eliminar" para listar todas as Atrações Eliminadas. A lista de Atrações Eliminadas deve incluir uma coluna extra para a data de eliminação.
:::

Para a coluna "Data de Eliminação", o formato da data muda de acordo com o idioma:

*   UK (mm/dd/aaaa hh:mm:ss AM/PM)
*   Outros idiomas (dd/mm/aaaa hh:mm:ss)

As "mais opções" (representadas na interface por três pontos) devem ser visíveis apenas quando um único item é selecionado, e a única opção é "Histórico de Alterações".

Deve ser possível definir a tela como Favorita (para ser incluída no Menu de Navegação de Favoritos).

O usuário clica em "Atualizar" para recarregar a tela com as informações atualizadas.

A tela deve validar as permissões do usuário e exibir as informações de acordo.

## Criar e Editar Atrações

Nesta tela é possível criar e editar uma atração.

O usuário deve preencher todos os campos obrigatórios e salvar. Quando a operação é concluída, a Atração estará pronta para ser utilizada.

![Nova Atração.JPG](/docs/beehive/gestao-de-propriedade/Nova Atração.JPG)

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

O usuário deve poder selecionar uma categoria da lista de todas as categorias de atrações existentes.

O URL deve ser válido e seguir um formato padrão.

```regex
^(((ht|f){1}(tp(s?)\:[\/]{2}))|((www\.){1}))[-a-zA-Z0-9@:%\_\+.\~#?&\/=]+$
```

É possível preencher o endereço diretamente nos campos ou através do Google Maps.

Quando se está usando o Google Maps, é possível pesquisar por um endereço específico ou escolher uma localização diretamente pelo mapa (este deve incluir funcionalidades como *zoom in* e *zoom out*, vista de satélite, vista de rua e a minha localização). Após encontrar a localização correta, é possível usar o endereço, as coordenadas GPS ou ambas.

A API deve retornar a lista de Países, Estados e Cidades. Quando um usuário seleciona um determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades, cuja lista corresponde ao Estado selecionado.

O sistema valida as informações inseridas nos campos "Longitude" e "Latitude". A Latitude deve estar entre 90 e -90. A Longitude deve estar entre 180 e -180.

O usuário pode carregar/eliminar uma foto:

*   O tamanho máximo é de 1MB.
:::info Nota
Avaliar com a equipe técnica se alguma compressão de imagem está sendo aplicada para verificar a viabilidade deste limite.
:::
*   Gerar *thumbnail* de 100x100px (redimensionamento + corte centralizado).
*   Tamanho mínimo: 960px de largura (Largura mínima para o Motor de Reservas móvel).
*   Formatos suportados: \*.JPG, \*.JPEG, \*.PNG.

O usuário pode pré-visualizar a foto.

Quando a atração está sendo criada, a opção "Histórico de Alterações" não deve estar visível. Esta opção é visível apenas no modo de edição.

A tela deve validar as permissões do usuário e exibir as informações de acordo.

O usuário clica em "Atualizar" para recarregar a tela com as informações atualizadas. Antes de atualizar, o usuário é avisado de que todas as alterações não salvas serão perdidas.

## Eliminar Atrações

É possível eliminar uma ou mais atrações.

É possível eliminar uma ou mais atrações dentro da mesma ação.

:::danger Cuidado
Se o usuário tentar eliminar várias atrações e, por qualquer motivo, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registro falhar, nenhuma outra atração deve ser eliminada.
:::

A tela deve validar as permissões do usuário e exibir as informações de acordo.

## Categorias de Atrações

Nesta tela é possível listar todas as categorias de atrações. Na própria lista é possível gerenciar as categorias: adicionar, editar e eliminar.

A lista deve incluir as seguintes informações:

*   Nome

Deve ser possível pesquisar e ordenar pelo nome da categoria. Não há opção de filtro.

A lista deve incluir paginação (50 itens).

O usuário pode adicionar uma nova categoria, definindo o nome da categoria. O nome da categoria deve ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

Deve ser possível editar e eliminar categorias de atrações existentes.

Para atualizar a lista de Categorias de Atrações com as informações mais recentes, é necessário selecionar o botão "Atualizar".

### Adicionar Categoria diretamente na Atração (left side panel)

Nesta tela é possível criar uma nova categoria para ser usada em qualquer atração.

O usuário deve preencher todos os campos obrigatórios e salvar. Quando a operação é concluída com sucesso, a categoria estará pronta para ser usada.

O usuário pode adicionar uma nova categoria, definindo o nome da categoria. O nome da categoria deve ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

## Histórico

### Histórico de alterações e referências
| Data da alteração | Owner            | Referência de alteração                                                                   | Observações                                                                 |
| :---------------- | :--------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| 07-06-2024        | N8N              | -                                                                                         | Conversão da documentação para docusaurus                                   |
| 26-03-2024        | Flávia Guerreiro | [O-359](https://omnibees.aha.io/features/O-359)                                           | Aba Tarifas e Pacotes                                                       |
| 15-11-2021        | Flávia Guerreiro | [Feature O-516](https://omnibees.aha.io/features/O-516)                                   | Inclusão de Extra Multi-Property<br />Tradução da documentação para PT      |
| ND                | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7b370C447F-DBA0-4972-A293-CC6450F58FF6%7d&file=02%20Extras.docx&action=default&mobileredirect=true) | Primeira documentação criada para Extras                        |

### UI / UX
| Data da última alteração | URL Design                                                                                                                                       | Referência de alteração |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| 18-01-2024               | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/)     | [O-359](https://omnibees.aha.io/features/O-359)          |
| 09-08-21                 | [https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/](https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/) | [O-516](https://omnibees.aha.io/features/O-516)          |
| ND                       | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Extras](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Extras) | ND                      |