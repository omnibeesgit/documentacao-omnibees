---
sidebar_label: Atrações
title: Atrações
description: Este documento descreve a gestão de atrações, desde a sua listagem, criação, edição e eliminação, incluindo a gestão de categorias e a integração com Google Maps para localização.
slug: /beehive/gestao-de-propriedade/atracoes
---

# Atrações

As atrações são criadas no menu Gestão da Propriedade e, se assim o entender, o hotel poderá enviá-las no e-mail de Pré-Estadia das Ações Automáticas.
```
The attractions are created in the Property Backoffice and will be displayed in the booking engine providing extra information about the surrounding areas and places of interest (confirmar).
```

## Lista de Atrações

Neste ecrã são listadas todas as atrações da propriedade.

![Lista Atrações](</assets/beehive/gestao-de-propriedade/atracoes/Lista Atrações.JPG> "Lista Atrações")

A lista deve conter as seguintes informações:

*   Data de Eliminação (apenas para as atrações eliminadas)
*   Nome
*   Categoria
*   URL
*   Estado

Deve ser possível pesquisar por qualquer coluna da lista e o campo "pesquisar" deve considerar o operador "contém" (Não é possível pesquisar pela data de eliminação).

Deve ser possível ordenar por qualquer coluna da lista. O primeiro clique ordena de forma ascendente (A a Z), o segundo clique ordena de forma descendente (Z a A) e o terceiro clique regressa à ordem inicial.

Deve ser possível filtrar por qualquer coluna da lista. Todos os filtros devem ser de texto livre e o filtro deve considerar o operador "contém".

Para a Data de Eliminação (apenas visível na lista das Atrações Removidas), deve considerar o operador "igual", e o seletor de data deve ter selecionada, por definição, a data atual.

A ação "Editar" deve ser visível apenas e só se um item for selecionado.

Deve ser possível eliminar uma ou mais atrações numa só ação. A opção "Eliminar" apenas é visível se um ou mais itens forem selecionados.

```
In the drop menu that lists the active and the deleted items, the user selects the “Delete” option to list all the Deleted Attractions. The list of deleted Attractions should include an extra column for the delete date.

For the Deleted Date column, the Date format changes according to the language:

* UK (mm/dd/aaaa hh:mm:ss AM/PM)
* Outros idiomas (dd/mm/aaaa hh:mm:ss)
```

As "mais opções" (representadas na interface de utilizador por três pontos) devem ser visíveis apenas e só quando um único item é selecionado e a única opção é "Histórico de Alterações".

Deve ser possível definir o ecrã como Favorito (para ser incluído no Menu de Navegação de Favoritos).

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Criar e Editar Atrações

Neste ecrã é possível criar e editar uma atração.

O utilizador deve preencher todos os campos obrigatórios e guardar. Quando a operação é concluída, a atração estará pronta para ser utilizada.

![Nova Atração](</assets/beehive/gestao-de-propriedade/atracoes/Nova Atração.JPG> "Nova Atração")

| **Campo**       | **Obrigatório?**      |
| --------------- | --------------------- |
| **Nome**        | S                     |
| **Descrição**   | S                     |
| **Categoria**   | S                     |
| **Estado**      | S (ativo por default) |
| **URL**         | N                     |
| **Localização** | N/A                   |
| **Endereço**    | N                     |
| **País**        | N                     |
| **Cidade**      | N                     |
| **Estado**      | N                     |
| **Latitude**    | N                     |
| **Longitude**   | N                     |
| **Fotos**       | N/A                   |
| **Fotos**       | N                     |

Nome, descrição e nome da categoria podem ser definidos em vários idiomas. O idioma padrão deve ser o idioma base da propriedade.

O Nome deve ter um máximo de 100 caracteres e deve ser único. A descrição deve ter um máximo de 4000 caracteres.

O Nome da Categoria pode ter até um máximo de 50 caracteres.

O utilizador deve poder selecionar uma categoria da lista de todas as categorias de atrações existentes.

O URL tem que ser válido `^(((ht|f){1}(tp(s?)\\:\[\\/\]{2}))|((www\\.){1}))\[-a-zA-Z0-9@:%\_\\+.\~#?&\\/=\]+$`

É possível preencher o endereço diretamente nos campos ou através do Google Maps.

Quando se está a usar o Google Maps é possível pesquisar por uma morada específica ou escolher uma localização diretamente pelo mapa (este deve incluir as funcionalidades como zoom in, zoom out, vista de satélite, vista de rua e a minha localização). Depois de encontrar a localização correta, é possível usar a morada, as coordenadas GPS ou ambas.

A API deve retornar a lista de Países, Estados e Cidades. Quando um utilizador seleciona determinado país, a lista de Estados corresponde ao país selecionado. O mesmo acontece para as cidades. A lista de cidades corresponde ao Estado selecionado.

O sistema valida a informação inserida nos campos "Longitude" e "Latitude". A Latitude deve estar entre 90 e -90. A Longitude deve estar entre 180 e -180.

O utilizador pode carregar/eliminar uma foto:

*   O tamanho máximo é de 1MB (avaliar com equipa técnica se está a ser feita alguma compressão à imagem para se perceber se este limite é viável)
*   Gerar `100x100px thumbnail` (resize + centered crop)
*   Tamanho mínimo 960 de largura (Largura mínima do BE mobile)
*   Formatos suportados: \*.JPG, \*.JPEG, \*.PNG

O utilizador pode pré-visualizar a foto.

Quando a atração está a ser criada, a opção "Histórico de Alterações" não deve estar visível. Esta opção é visível apenas no modo de edição.

O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

O utilizador clica em "Atualizar" para recarregar o ecrã com a informação atualizada. Antes de atualizar, o utilizador é avisado que todas as possíveis alterações efetuadas serão perdidas.

## Eliminar Atrações

É possível eliminar uma ou mais atrações.

É possível eliminar uma ou mais atrações dentro da mesma ação.

Se o utilizador tentar eliminar várias atrações e, por qualquer razão, alguma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um registo falhar, nenhuma outra atração deve ser eliminada.
O ecrã deve validar as permissões do utilizador e mostrar a informação de acordo.

## Categorias de Atrações

Neste ecrã é possível listar todas as categorias de atrações. Na própria lista é possível gerir as categorias: adicionar, editar e eliminar.

A lista deve incluir a seguinte informação:

*   Nome

Deve ser possível pesquisar e ordenar pelo nome da categoria. Não há opção de filtro.

A lista deve incluir paginação (50 itens).

O utilizador pode adicionar uma nova categoria definindo o nome da categoria. O nome da categoria tem que ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

Deve ser possível editar e eliminar categorias de atrações existentes.

Para atualizar a lista de Categorias de Atrações com a informação mais recente, é necessário selecionar o botão "Atualizar".

### Adicionar Categoria diretamente na Atração (left side panel)

Neste ecrã é possível criar uma nova categoria para ser usada em qualquer atração.

O utilizador deve preencher todos os campos obrigatórios e guardar. Quando a operação é concluída com sucesso, a categoria estará pronta para ser usada.

O utilizador pode adicionar uma nova categoria definindo o nome da categoria. O nome da categoria tem que ser único.

O Nome da Categoria pode ser definido em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

## Histórico
### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 26-03-2024 | Flávia Guerreiro | [O-359](https://omnibees.aha.io/features/O-359) | Aba Tarifas e Pacotes |
| 15-11-2021 | Flávia Guerreiro | [Feature O-516](https://omnibees.aha.io/features/O-516) | Inclusão de Extra Multi-Property Tradução da documentação para PT |
| ND | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7b370C447F-DBA0-4972-A293-CC6450F58FF6%7d&file=02%20Extras.docx&action=default&mobileredirect=true) | Primeira documentação criada para Extras |

### UI / UX

| Data da última alteração | URL Design | Referência de alteração |
|---|---|---|
| 18-01-2024 | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/) | [O-359](https://omnibees.aha.io/features/O-359) |
| 09-08-21 | [https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/](https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/) | [O-516](https://omnibees.aha.io/features/O-516) |
| ND | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Extras](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Extras) | ND |