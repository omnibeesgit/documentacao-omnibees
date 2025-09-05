---
sidebar_label: Políticas para Crianças
title: Políticas para Crianças
description: Este documento detalha as políticas para crianças, suas configurações, filtros e ações como criação, edição e exclusão dentro do sistema, incluindo aspectos de multi-propriedade.
slug: /beehive/gestao-de-propriedade/politicas/politicas-de-crianca
---
# Políticas para Crianças

As políticas para crianças especificam se alguém que não é adulto (bebê, júnior, infantil, adolescente, etc.) tem certas restrições ou ofertas.

A política para crianças pode ou não contar para a ocupação total do quarto.

## Lista de Políticas para Crianças

Neste ecrã são listadas todas as Políticas para Crianças do hotel em contexto, incluindo Políticas para Crianças Multi-Property que tenham o hotel selecionado.

Para que seja possível fazer reservas com crianças de determinadas idades, é necessário que existam políticas para crianças configuradas no hotel para essas idades. Idades entre 0 e 17 anos que não estejam contidas em nenhuma política para crianças configurada no hotel não são disponibilizadas para reservas. Sempre que o utilizador aceder ao ecrã de políticas para crianças, é mostrada uma mensagem de informação com esta regra.

![P.criança4.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança4.png> "P.criança4.png")

A lista deve conter as seguintes informações:

*   Nome
*   Idade Mín
*   Idade Máx
*   Cobrar como
*   Variação de Preço
*   Ícone de Item Externo _(se aplicável)_

O ícone de item externo deve incluir uma tooltip com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna _Editável por_ indica se o registo é multi-property ou de hotel.

*   **Multi-Property**: para registos criados e geridos em multi-property ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registos criados em multi-property e geridos pelo hotel ("Quem pode editar?" = Hotel), para registos criados e geridos pelo hotel e para todos os registos já criados antes da funcionalidade de multi-property.

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   Nome
*   Idade Mín
*   Idade Máx
*   Cobrar como _(lista de seleção única)_
*   Variação de Preço _(em percentagem ou em moeda)_
*   Editável por _(lista de seleção única)_

O filtro Nome é do tipo texto livre.
Os filtros Idade Mín e Idade Máx são do tipo numérico, aceitando valores inteiros e maiores que zero.
O filtro Cobrar como é do tipo seleção, onde só pode ser selecionada uma das três opções listadas. As opções do filtro Cobrar como são as seguintes:

*   Criança
*   Gratuito
*   Adulto

O filtro Variação de Preço é do tipo numérico para valores maiores que zero e com duas casas decimais, podendo ser incremental ou decremental, e em moeda ou em percentagem.
O filtro Editável por é do tipo seleção, onde só pode ser selecionada uma das duas opções listadas. As opções do filtro Editável por são as seguintes:

*   Multi-Property
*   Hotel

Deve ser possível pesquisar por qualquer coluna da lista, exceto pela coluna Editável por.
Deve ser possível ordenar por qualquer coluna da lista, exceto pela coluna Cobrar como.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
Ações adicionais (representadas na UI por 3 pontos) devem ser visíveis apenas quando um item é selecionado, e a ação adicional é "Histórico de Alterações".

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu Favoritos).

Para visualizar a lista de todas as Políticas para Crianças eliminadas (incluindo políticas para crianças multi-property que tenham o hotel associado), é necessário aceder a essa lista através de *Políticas para Crianças > Eliminados*.

Para atualizar a lista de políticas para crianças com a informação mais recente, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Políticas para Crianças

Neste ecrã é possível criar ou editar uma política para crianças. Todos os campos obrigatórios devem ser preenchidos para que se possa guardar com sucesso. Quando esta operação for concluída, a política para criança estará pronta para ser utilizada.

![P.criança5.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança5.png> "P.criança5.png")

| **Campo**                | **Obrigatório?**                                |
| :----------------------- | :---------------------------------------------- |
| **Detalhes**             | N/A                                             |
| Nome                     | Sim                                             |
| Descrição                | Sim                                             |
| **Configurações**        |                                                 |
| Idade mín                | Sim                                             |
| Idade máx                | Sim                                             |
| Cobrar Crianças como     | Sim                                             |
| Crianças                 | Não                                             |
| Ativar Variação de Preço | Não                                             |
| Valor                    | Sim (Se “Ativar Variação de Preço” selecionado) |
| Grátis                   | Não                                             |
| Adulto                   | Não                                             |
| Contar por ocupação      | Não                                             |

O Nome e Descrição da Política para Crianças podem ser definidos em vários idiomas.
O idioma padrão deve ser o idioma base da propriedade e os idiomas restantes devem ser os suportados pelo sistema.

A opção *Ativar Variação de Preço* inclui uma informação (`info`) com a seguinte descrição: "Ao ativar a variação de preço para crianças, um valor ou percentagem será aplicado sobre o preço definido para crianças na atualização de tarifas."

O utilizador deve definir se a Variação de Preço (valor ou percentagem) aumenta ou diminui o preço definido para crianças na atualização de tarifas.
A Variação de Preço é, por padrão, em percentagem, e o valor deve ser maior que zero e menor ou igual a 100%.
O valor de variação de preço pode ser definido em várias moedas. A moeda padrão é a moeda base da propriedade e as moedas restantes são as moedas adicionais definidas na configuração da propriedade.
A opção "Outras Moedas" só fica visível se o utilizador definir o valor em Moeda.

A opção Contar por ocupação faz com que a criança dentro das idades definidas na política conte para a ocupação máxima do quarto.

Não há um limite máximo para políticas para crianças. As idades definidas nas políticas para crianças têm de ser mutuamente exclusivas em qualquer um dos três tipos de políticas (as idades não podem se duplicar entre políticas para crianças do mesmo hotel).

**Políticas para Crianças Multi-Property** (*Editável por* = Multi-Property) podem ser consultadas pelo utilizador sem a necessidade de nenhuma permissão especial para tal.
Ao aceder aos detalhes de uma política para crianças multi-property, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e Descrição e os valores definidos em outras moedas.

![P.criança6.png](</assets/beehive/gestao-de-propriedade/politicas/politicas-de-crianca/P.criança6.png> "P.criança6.png")

Quando a política para crianças está a ser criada, a opção de *Ações Adicionais* (representadas na UI por 3 pontos) não deve estar visível, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.
Antes de atualizar, o sistema pergunta ao utilizador se realmente deseja atualizar e alerta que todas as alterações não guardadas serão perdidas caso decida atualizar.

## Eliminar Políticas para Crianças

É possível eliminar uma ou várias Políticas para Crianças.
Deve ser possível eliminar uma ou várias Políticas para Crianças na mesma ação.

Não é possível eliminar Políticas para Crianças Multi-Property (Editável por = Multi-Property).

Se o utilizador tentar eliminar várias políticas para crianças e, se por qualquer motivo, uma das políticas falhar, a ação deve ser revertida. Se a eliminação de uma política falhar, nenhuma outra política será eliminada.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Políticas para Crianças Multi-Property, consultar** [Políticas Multi-Property](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Pol%C3%ADticas%20Multi-Property.aspx).

## Histórico

### Histórico de alterações e referências:

| Data da alteração | Owner            | Referência de alteração                                                                                                              | Observações                                                                      |
| :---------------- | :--------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| 2025-09-05        | N8N              | -                                                                                                                                    | Conversão da documentação para Docusaurus                                        |
| 21-03-2022        | Flávia Guerreiro | [Feature O-140](https://omnibees.aha.io/features/O-140)                                                                              | Inclusão de Políticas para Crianças Multi-Property Tradução da documentação para PT |
| 21-03-2022        | Pedro Martins    | [Feature O-410](https://omnibees.aha.io/features/O-410)                                                                              | Inclusão da regra para crianças que não vendem                                   |
| ND                | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7bA57C4C9D-1971-4CD3-BF00-D450975769EE%7d&file=Offers.docx&action=default&mobileredirect=true&cid=78619946-0877-49f6-8bf5-12097adc8725) | Primeira documentação criada para Políticas para Crianças                        |