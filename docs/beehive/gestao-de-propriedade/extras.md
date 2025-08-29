---
sidebar_label: Extras
title: Extras
description: Este documento descreve a gestão de Extras, que são serviços ou condições adicionais para reservas, cobrindo a sua listagem, criação, edição e eliminação, incluindo detalhes sobre configurações de valor, associação a tarifas e pacotes, e considerações para Extras Multi-Property.
slug: /beehive/gestao-de-propriedade/extras
---

# Extras

Extras são serviços ou condições adicionais que podem ser incluídos numa reserva, independentemente do quarto. Por exemplo: café da manhã, meia pensão, uma massagem, um buquê de flores, etc.
Os extras podem ou não ter custo associado, ou seja, podem ser cortesia do hotel (como café da manhã ou massagem incluídos na estadia) ou podem ser cobrados à parte.

## Lista de Extras

São listados todos os Extras do hotel em contexto, incluindo Extras Multi-Property que tenham o hotel selecionado.

![ListExtras1](</assets/beehive/gestao-de-propriedade/extras/08.png> "ListExtras1")

A lista deve conter as seguintes informações:

*   Nome
*   Regime Alimentar
*   Valor
*   Editável por
*   Estado
*   Ícone de Item Externo _(se aplicável)_

O ícone de item externo deve incluir uma tooltip com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna "Editável por" indica se o registo é de multi-property ou de hotel.

*   **Multi-Property**: para registos criados e geridos em Multi-Property ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registos criados em Multi-Property e geridos pelo hotel ("Quem pode editar?" = Hotel); para registos criados e geridos pelo hotel; e para todos os registos já criados antes da funcionalidade de Multi-Property.

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   Nome _(texto livre)_
*   Regime Alimentar _(lista de seleção única)_
*   Valor (moeda) _(numérico)_
*   Editável por _(lista de seleção única)_
*   Estado _(lista de seleção única)_

O filtro Nome deve ser do tipo texto livre.
Os filtros de Regime Alimentar, Editável por e Estado devem ser do tipo seleção, onde só pode ser selecionada uma das opções listadas.
O filtro Valor é do tipo numérico, aceitando valores maiores que zero e com duas casas decimais.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pelas colunas Editável por e Estado.
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados.
Ações adicionais (representadas na interface de utilizador por 3 pontos) devem ser visíveis apenas quando um item é selecionado, e as ações adicionais são: "Compartilhar", "URL do Motor de Reservas" e "Histórico de Alterações".
As ações "Compartilhar" e "URL do Motor de Reservas" apenas são mostradas se a permissão "Extras" tiver a ação "Ligado" marcada.

A lista deve incluir paginação (50 itens).
Deve ser possível definir o ecrã como favorito (o ecrã é incluído no menu Favoritos).

Para visualizar a lista de todos os Extras eliminados (incluindo extras multi-property que tenham o hotel associado), é necessário aceder a essa lista através de Extras > Eliminados.

Para atualizar a lista de extras com a informação mais recente, é necessário selecionar o botão "Atualizar".

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

## Criar / Editar Extras

Neste ecrã é possível criar ou editar um extra. Todos os campos obrigatórios devem ser preenchidos para que se possa guardar com sucesso. Quando esta operação for concluída, o extra estará pronto para ser utilizado.

![Extras2](</assets/beehive/gestao-de-propriedade/extras/09.png> "Extras2")

| **Campo**                      | **Obrigatório?**                                                      | **OBS**                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Configurações**              | N/A                                                                   |                                                                                                                  |
| **Detalhes**                   | N/A                                                                   |                                                                                                                  |
| Nome                           | Sim                                                                   |                                                                                                                  |
| Descrição                      | Sim                                                                   |                                                                                                                  |
| Valor                          | Sim                                                                   |                                                                                                                  |
| E-mail de Notificação          | Não                                                                   |                                                                                                                  |
| Extra do Tipo Regime Alimentar | Não                                                                   |                                                                                                                  |
| Regime Alimentar               | Sim                                                                   | Quando Extra do Tipo Regime Alimentar selecionado                                                                |
| **Tipo de Cobrança**           | N/A                                                                   |                                                                                                                  |
| Por Noite ou Por Estadia       | Sim                                                                   |                                                                                                                  |
| Por Quarto ou Por Pessoa       | Sim                                                                   |                                                                                                                  |
| **Fotos**                      | N/A                                                                   |                                                                                                                  |
| Fotos                          | Não                                                                   |                                                                                                                  |
| **Tarifas e Pacotes**          |                                                                       |                                                                                                                  |
| Tarifas e Pacotes              | Não                                                                   |                                                                                                                  |
| Incluído/Diferentes Períodos   | Sim (se a opção Adicional não estiver selecionada)                    |                                                                                                                  |
| Períodos                       | Não                                                                   | Cada período é constituído por duas datas, "De" e "Até". Para a mesma tarifa, não podem existir períodos coincidentes. |
| Adicional                      | Sim (se a opção Incluído/Diferentes Períodos não estiver selecionada) |                                                                                                                  |

Nome e Descrição podem ser definidos em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

O valor pode ser definido em várias moedas. A moeda padrão deve ser a moeda base da propriedade e as restantes moedas devem ser aquelas que foram configuradas na propriedade como moedas adicionais.

Ao apagar um valor definido em moeda, o sistema verifica se o extra está associado a tarifas ou pacotes que estejam definidos nessa mesma moeda e, em caso afirmativo, o utilizador é avisado de que essa moeda deve ter um valor definido.

Ao criar um novo extra, o estado padrão é ativo.

Para as opções de Tipo de Cobrança, é obrigatório selecionar uma das duas opções possíveis: "por noite" ou "por estadia", e "por quarto" ou "por pessoa".

Quando a opção "Extra do Tipo Regime Alimentar" é selecionada, é obrigatório selecionar um tipo de regime. Os tipos de regime disponíveis são:

*   Café da Manhã
*   Meia Pensão
*   Pensão Completa
*   Tudo Incluído

O E-mail de Notificação deve incluir uma tooltip com a seguinte informação: "Serviço ou pessoa a ser notificado automaticamente no caso de o extra ser incluído em alguma reserva feita através do motor de reservas."
Estas informações de e-mail normalmente são usadas quando o extra é fornecido por uma empresa externa (por exemplo, rent-a-car).

É possível fazer upload, eliminar ou fazer download de uma ou mais fotos.

É possível marcar uma foto como principal. Essa foto será mostrada como foto principal no Motor de Reservas do hotel. O ícone de estrela deve incluir uma tooltip com a seguinte informação: "Foto principal". Uma vez utilizada esta ação, já não é possível não ter pelo menos uma foto marcada como principal.

É possível visualizar as fotos numa galeria.

O sistema suporta os seguintes tipos de imagem:

*   \*.jpg
*   \*.jpeg
*   \*.png

Extras Multi-Property (Editável por = Multi-Property) podem ser consultados pelo utilizador sem necessidade de nenhuma permissão especial para tal.
Ao aceder aos detalhes de um extra multi-property, todos os dados estarão bloqueados, não sendo possível editá-los.
O utilizador poderá consultar as traduções definidas para o Nome e a Descrição, os valores definidos em outras moedas e as fotos.

![010](</assets/beehive/gestao-de-propriedade/extras/010.png> "010")

Quando o extra está a ser criado, a opção de Ações adicionais (representadas na interface de utilizador por 3 pontos) não deve estar visível, apenas no modo de edição/consulta.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.

Antes de atualizar, o sistema pergunta ao utilizador se quer mesmo atualizar e alerta que todas as alterações não guardadas serão perdidas, caso decida atualizar.

### Tarifas e Pacotes

São listadas todas as tarifas e pacotes do hotel que não foram eliminados. Tarifas Multi-Property **não** são listadas.

_Nota: Na lista de tarifas só são mostradas tarifas Omnibees, não podem ser mostradas tarifas de extranets._

É possível associar e/ou remover uma ou várias tarifas/pacotes.

Ao associar/remover uma tarifa/pacote a um extra, essa ação terá de ser refletida também em Tarifas, no separador "Extras Incluídos" e/ou no separador "Extras Adicionais".

Para associar uma tarifa/pacote a um extra, é obrigatório escolher se o extra para aquela tarifa é incluído e/ou um adicional.

Caso seja definido que o extra é incluído na tarifa/pacote, existe a possibilidade de se definir um ou vários períodos para o extra em cada tarifa.

Para extras incluídos, é validado se a tarifa que está a ser associada ao extra já possui outro extra incluído com tipo de regime alimentar definido, isto porque apenas é permitido ter um extra com regime alimentar por cada tarifa.

Quer o extra seja definido como incluído ou adicional, o sistema valida se esse extra tem valor definido para a moeda da tarifa que está a ser associada.

Todas as alterações feitas na aba "Tarifas e Pacotes" ficam registadas nos históricos de alterações de Extras e de Tarifas.

![Screenshot_367](</assets/beehive/gestao-de-propriedade/extras/Screenshot_367.png> "Screenshot_367")

## Eliminar Extras

É possível eliminar um ou vários Extras, mesmo que estejam associados a tarifas/pacotes.

É possível eliminar um ou vários Extras na mesma ação.

Não é possível eliminar Extras Multi-Property (Editável por = Multi-Property).

Não é possível eliminar Extras que estejam atribuídos a tarifas ou pacotes.

Se o utilizador tentar eliminar vários extras e, por qualquer motivo, um dos extras falhar, a ação deve ser revertida. Se a eliminação de um extra falhar, nenhum outro extra deve ser eliminado.

Os extras eliminados são removidos das tarifas/pacotes a que estavam associados e vice-versa.

Estas ações ficam registadas nos históricos de alterações de Extras e de Tarifas.

O ecrã deve validar as permissões do utilizador e mostrar as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Extras Multi-Property, consultar [Extras Multi-Property](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Extras%20Multi-Property.aspx).**

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