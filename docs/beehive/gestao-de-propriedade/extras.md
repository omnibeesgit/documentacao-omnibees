---
sidebar_label: Extras
title: Extras
description: Este documento descreve os Extras, serviços ou condições adicionais que podem ser incluídos em uma reserva, detalhando sua criação, edição, listagem, filtros, tipos de cobrança, gerenciamento de fotos e o processo de eliminação, incluindo considerações para Extras Multi-Property.
slug: /
---

# Extras

Extras são serviços ou condições adicionais que podem ser incluídos em uma reserva, fora do quarto. Por exemplo: café da manhã, meia-pensão, uma massagem, um buquê de flores, etc. Os extras podem ou não ter custo associado; ou seja, podem ser cortesia do hotel (como café da manhã ou massagem incluídos na estadia) ou podem ser cobrados à parte.

## Lista de Extras

São listados todos os Extras do hotel em contexto, incluindo Extras Multi-Property que tenham o hotel selecionado.

![ListExtras1.png](./Documentação Produto - Extras_files/08.png)

A lista deve conter as seguintes informações:

*   Nome
*   Regime Alimentar
*   Valor
*   Editável por
*   Estado
*   Ícone de Item Externo _(se aplicável)_

O ícone de item externo deve incluir uma *tooltip* com a seguinte informação: "Item criado no sistema externo Omnibees."

A coluna **Editável por** indica se o registro é de Multi-Property ou de hotel.

*   **Multi-Property**: para registros criados e gerenciados em Multi-Property ("Quem pode editar?" = Multi-Property);
*   **Hotel**: para registros criados em Multi-Property e gerenciados pelo hotel ("Quem pode editar?" = Hotel); para registros criados e gerenciados pelo hotel e para todos os registros já criados antes da funcionalidade de Multi-Property.

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   Nome _(texto livre)_
*   Regime Alimentar _(lista de seleção única)_
*   Valor (moeda) _(numérico)_
*   Editável por _(lista de seleção única)_
*   Estado _(lista de seleção única)_

O filtro **Nome** deve ser do tipo texto livre. Os filtros de **Regime Alimentar**, **Editável por** e **Estado** devem ser do tipo seleção, onde só pode ser selecionada uma das opções listadas. O filtro **Valor** é do tipo numérico para valores maiores que zero e com duas casas decimais.

Deve ser possível pesquisar por qualquer coluna da lista, exceto pelas colunas **Editável por** e **Estado**.
Deve ser possível ordenar por qualquer coluna da lista.

A ação de eliminação deve ser visível apenas se um ou mais itens forem selecionados. Ações adicionais _(representadas na interface por três pontos)_ devem ser visíveis apenas quando um item é selecionado. As ações adicionais são: "Compartilhar", "URL do Motor de Reservas" e "Histórico de Alterações".
As ações "Compartilhar" e "URL do Motor de Reservas" são exibidas apenas se a permissão "Extras" tiver a ação "Ligado" marcada.

A lista deve incluir paginação (50 itens).
Deve ser possível definir a tela como favorita (a tela é incluída no menu **Favoritos**).

Para visualizar a lista de todos os Extras eliminados (incluindo extras Multi-Property que tenham o hotel associado), é necessário acessar essa lista através de **Extras > Eliminados**.

Para atualizar a lista de extras com as informações mais recentes, é necessário selecionar o botão "Atualizar".

A tela deve validar as permissões do usuário e exibir as informações de acordo com essas permissões.

## Criar / Editar Extras

Nesta tela é possível criar ou editar um extra. Todos os campos obrigatórios devem ser preenchidos para que se possa salvar com sucesso. Quando esta operação for concluída, o extra estará pronto para ser utilizado.

![Extras2.png](./Documentação Produto - Extras_files/09.png)

| **Campo**                      | **Obrigatório?**                                                      | **Observações**                                                                                                  |
| :----------------------------- | :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Configurações**              | N/A                                                                   |                                                                                                                  |
| **Detalhes**                   | N/A                                                                   |                                                                                                                  |
| Nome                           | Sim                                                                   |                                                                                                                  |
| Descrição                      | Sim                                                                   |                                                                                                                  |
| Valor                          | Sim                                                                   |                                                                                                                  |
| E-mail de Notificação          | Não                                                                   |                                                                                                                  |
| Extra do Tipo Regime Alimentar | Não                                                                   |                                                                                                                  |
| Regime Alimentar               | Sim                                                                   | Quando Extra do Tipo Regime Alimentar for selecionado                                                            |
| **Tipo de Cobrança**           | N/A                                                                   |                                                                                                                  |
| Por Noite ou Por Estadia       | Sim                                                                   |                                                                                                                  |
| Por Quarto ou Por Pessoa       | Sim                                                                   |                                                                                                                  |
| **Fotos**                      | N/A                                                                   |                                                                                                                  |
| Fotos                          | Não                                                                   |                                                                                                                  |
| **Tarifas e Pacotes**          |                                                                       |                                                                                                                  |
| Tarifas e Pacotes              | Não                                                                   |                                                                                                                  |
| Incluído/Diferentes Períodos   | Sim (Se a opção Adicional não estiver selecionada)                    |                                                                                                                  |
| Períodos                       | Não                                                                   | Cada período é constituído por duas datas De e Até. Para a mesma tarifa, não podem existir períodos coincidentes. |
| Adicional                      | Sim (se a opção Incluído/Diferentes Períodos não estiver selecionada) |                                                                                                                  |

Nome e Descrição podem ser definidos em vários idiomas. O idioma padrão deve ser o idioma base da propriedade, e os idiomas restantes devem ser os suportados pelo sistema.

O valor pode ser definido em várias moedas. A moeda padrão deve ser a moeda base da propriedade, e as demais moedas devem ser aquelas que foram configuradas na propriedade como moedas adicionais.

Ao apagar um valor definido em uma moeda, o sistema verifica se o extra está associado a tarifas ou pacotes que estejam definidos nessa mesma moeda. Em caso afirmativo, o usuário é avisado de que essa moeda deve ter um valor definido.

Ao criar um novo extra, o estado padrão é **Ativo**.

Para as opções de **Tipo de Cobrança**, é obrigatório selecionar uma das duas opções possíveis: "por noite" ou "por estadia" e "por quarto" ou "por pessoa".

Quando a opção "Extra do Tipo Regime Alimentar" é selecionada, é obrigatório selecionar um tipo de regime. Os tipos de regime disponíveis são:

*   Café da Manhã
*   Meia-Pensão
*   Pensão Completa
*   Tudo Incluído

O **E-mail de Notificação** deve incluir uma *tooltip* com a seguinte informação: "Serviço ou pessoa a ser notificado automaticamente no caso de o extra ser incluído em alguma reserva feita através do motor de reservas." Essas informações de e-mail normalmente são usadas quando o extra é fornecido por uma empresa externa (por exemplo: *rent-a-car*).

É possível fazer *upload*, eliminar ou fazer *download* de uma ou mais fotos.

É possível marcar uma foto como principal. Essa foto será exibida como foto principal no **Motor de Reservas** do hotel. O ícone de estrela deve incluir uma *tooltip* com a seguinte informação: "Foto principal". Uma vez utilizada esta ação, não é mais possível não ter pelo menos uma foto marcada como principal.

É possível visualizar as fotos em uma galeria.

O sistema suporta os seguintes tipos de imagem:

*   \*.jpg
*   \*.jpeg
*   \*.png

**Extras Multi-Property** _(Editável por = Multi-Property)_ podem ser consultados pelo usuário sem necessidade de nenhuma permissão especial. Ao acessar os detalhes de um extra Multi-Property, todos os dados estarão bloqueados, não sendo possível editá-los. O usuário poderá consultar as traduções definidas para o **Nome** e **Descrição**, os valores definidos em outras moedas e as fotos.

![010.png](./Documentação Produto - Extras_files/010.png)

Quando o extra está sendo criado, a opção de Ações adicionais _(representadas na interface por três pontos)_ não deve estar visível, apenas no modo de edição/consulta.

A tela deve validar as permissões do usuário e exibir as informações de acordo com essas permissões.

O botão "Atualizar" preenche o formulário com os dados mais recentes.

Antes de atualizar, o sistema pergunta ao usuário se ele realmente deseja atualizar e alerta que todas as alterações não salvas serão perdidas caso decida fazê-lo.

### Tarifas e Pacotes

São listadas todas as tarifas e pacotes (não eliminados) de hotel. Tarifas Multi-Property **não** são listadas.

:::info Nota
Na lista de tarifas, só são exibidas tarifas Omnibees; tarifas de extranets não podem ser exibidas.
:::

É possível associar e/ou remover uma ou várias tarifas/pacotes.

Ao associar/remover uma tarifa/pacote a um extra, essa ação deverá ser refletida também em **Tarifas**, no separador **Extras Incluídos** e/ou no separador de **Extras Adicionais**.

Para associar uma tarifa/pacote a um extra, é obrigatório escolher se o extra para aquela tarifa será incluído e/ou um adicional.

Caso seja definido que o extra é incluído na tarifa/pacote, existe a possibilidade de se definir um ou vários períodos para o extra em cada tarifa.

Para extras incluídos, é validado se a tarifa que está sendo associada ao extra já possui outro extra incluído com tipo de regime alimentar definido, visto que apenas é permitido ter um extra com regime alimentar por cada tarifa.

Quer o extra seja definido como incluído ou adicional, o sistema valida se esse extra tem valor definido para a moeda da tarifa que está sendo associada.

Todas as alterações feitas na aba **Tarifas e Pacotes** ficam registradas nos históricos de alterações de **Extras** e de **Tarifas**.

![Screenshot_367.png](./Documentação Produto - Extras_files/Screenshot_367.png)

## Eliminar Extras

É possível eliminar um ou vários Extras, mesmo que estejam associados a tarifas/pacotes.
É possível eliminar um ou vários Extras na mesma ação.

:::caution Importante
Não é possível eliminar Extras Multi-Property (Editável por = Multi-Property).
Não é possível eliminar Extras que estejam atribuídos a tarifas ou pacotes.
:::

:::danger Cuidado
Se o usuário tentar eliminar vários extras e, por qualquer motivo, um dos extras falhar, a ação deve ser revertida. Se a eliminação de um extra falhar, nenhum outro extra deve ser eliminado.
:::

Os extras eliminados são removidos das tarifas/pacotes a que estavam associados e vice-versa.

Essas ações ficam registradas nos históricos de alterações de **Extras** e de **Tarifas**.

A tela deve validar as permissões do usuário e exibir as informações de acordo com essas permissões.

**Para mais detalhes sobre o funcionamento de Extras Multi-Property, consulte [Extras Multi-Property](https://omnibeesportugal.sharepoint.com/sites/documentacaoproduto/SitePages/Beehive/MultiProperty/Extras%20Multi-Property.aspx).**

---

### Histórico de alterações e referências
| Data da alteração | Owner            | Referência de alteração                                                                   | Observações                                                                 |
| :---------------- | :--------------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| 26-03-2024        | Flávia Guerreiro | [O-359](https://omnibees.aha.io/features/O-359)                                           | Aba Tarifas e Pacotes                                                       |
| 15-11-2021        | Flávia Guerreiro | [Feature O-516](https://omnibees.aha.io/features/O-516)                                   | Inclusão de Extra Multi-Property<br />Tradução da documentação para PT      |
| ND                | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7b370C447F-DBA0-4972-A293-CC6450F58FF6%7d&file=02%20Extras.docx&action=default&mobileredirect=true) | Primeira documentação criada para Extras                                    |
| 07-06-2024        | N8N              | -                                                                                         | Conversão da documentação para docusaurus                                   |

### UI / UX
| Data da última alteração | URL Design                                                                                                                                       | Referência de alteração |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| 18-01-2024               | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/)     | [O-359](https://omnibees.aha.io/features/O-359)          |
| 09-08-21                 | [https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/](https://xd.adobe.com/view/d401b40e-1fcd-4ec9-a4be-10603b5e94b1-8152/screen/9cd0ff42-7a3c-4b0d-9277-aa2bbfbbfc86/) | [O-516](https://omnibees.aha.io/features/O-516)          |
| ND                       | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Extras](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Extras) | ND                      |