---
sidebar_label: Tipos de Quarto
title: Tipos de Quarto
description: Este documento descreve a gestão de Tipos de Quarto, a unidade básica de uma propriedade. Inclui informações sobre como listar, criar, editar e eliminar tipos de quarto, detalhando suas características, configurações de ocupação, amenidades, fotos, e a associação a tarifas e pacotes.
slug: /beehive/gestao-de-propriedade/quartos
---

# Tipos de Quarto

Um tipo de quarto é a unidade básica de uma propriedade/hotel. Tem uma quantidade disponível, normalmente a quantidade física de quartos desse tipo que existem no hotel, e algumas características associadas, como amenidades, fotos, etc.

## Lista de Tipos de Quarto

Neste ecrã é possível listar todos os Tipos de Quarto da Propriedade.

![Lista de Tipos de Quarto](</assets/beehive/gestao-de-propriedade/quartos/Lista Tipos de Quarto.png> "Lista de Tipos de Quarto")

A lista deve incluir as seguintes informações:

*   Nome
*   Limites de Preços (Preço máx./mín.)
*   Máx. / Mín. adultos
*   Máx. crianças
*   Cama Extra
*   Ícone de Registo de Sistema Externo

:::info
O ícone de Registo de Sistema Externo deve incluir uma *tooltip* com a seguinte informação: "Registo de Sistema Externo".
:::

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   Nome
*   Preço Mín. (moeda)
*   Preço Máx. (moeda)
*   Mín. adultos
*   Máx. adultos
*   Máx. crianças
*   Cama Extra
*   Quantidade

Todos os filtros são texto livre, exceto o filtro da **Cama Extra**, que é do tipo booleano.

É possível ordenar por qualquer coluna da lista. É possível pesquisar por qualquer coluna da lista, à exceção da coluna **Cama Extra**.

O botão "**Eliminar**" apenas deve estar visível se um ou mais itens forem selecionados.

:::info
As ações adicionais (representadas na UI por três pontos) devem estar visíveis apenas se um item for selecionado. As ações adicionais possíveis são:

*   **Compartilhar**:
    *   Facebook
    *   Linkedin
    *   Twitter
    *   E-mail
*   **URL do Motor de Reservas**:
    *   Obter Link
    *   Pré-Visualizar
*   **Histórico de Alterações**

É possível compartilhar o Tipo de Quarto nas redes sociais (Facebook, Linkedin, Twitter e enviar o link por e-mail). A API deve retornar o URL.

Deve ser possível obter o URL do Motor de Reservas para o Tipo de Quarto selecionado e pré-visualizar essa informação. A API deve retornar o URL.
:::

A lista deve incluir paginação (50 itens).

É possível definir o ecrã como Favorito (para ser incluído no Menu de Navegação **Favoritos**).

O utilizador seleciona "**Eliminados**" para listar todos os Tipos de Quarto Eliminados.

O utilizador clica no botão "**Atualizar**" para preencher a lista com as informações atualizadas.

O ecrã deve validar as permissões do utilizador e mostrar as informações correspondentes.

## Criar e Editar Tipos de Quarto

Neste ecrã é possível criar ou atualizar um Tipo de Quarto. O utilizador deve preencher todos os campos obrigatórios e **guardar**. Quando a operação é concluída, o Tipo de Quarto estará pronto para ser usado.

![Criação de Tipos de Quarto](</assets/beehive/gestao-de-propriedade/quartos/Criação Tipos de Quarto.png> "Criação de Tipos de Quarto")

| **Campo**                                            | **Obrigatório?**                                                           | **Limite Caracteres** | **Formato válido / Obs**                                                                                         |
| :--------------------------------------------------- | :------------------------------------------------------------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Configurações**                                    | N/A                                                                        | N/A                   | N/A                                                                                                              |
| **Detalhes**                                         | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Nome                                                 | Sim                                                                        | 100                   | -                                                                                                                |
| Traduções do Nome                                    | Sim (quando a tradução da Descrição para o mesmo idioma estiver preenchida) | 100                   | -                                                                                                                |
| Descrição                                            | Não                                                                        | 4000                  | -                                                                                                                |
| Traduções da Descrição                               | Não                                                                        | 4000                  | -                                                                                                                |
| Área do Quarto                                       | Sim                                                                        | -                     | Duas casas decimais. Valores maiores que 0. Em metros ou em pés. Metros é o valor padrão.                        |
| **Limites de Preços**                                | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Mín. Limite de Preço                                 | Não                                                                        | -                     | Duas casas decimais. Valores maiores que 0. Na moeda base do hotel.                                              |
| Máx. Limite de Preço                                 | Não                                                                        | -                     | Duas casas decimais. Valores maiores que 0. Na moeda base do hotel.                                              |
| **Informação de Ocupação**                           | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Nº de Quartos                                        | Sim                                                                        | -                     | Números inteiros maiores que 0.                                                                                  |
| Máx. Pax.                                            | Não                                                                        | -                     | -                                                                                                                |
| Mín. de Adultos                                      | Sim                                                                        | -                     | Números inteiros maiores que 0. O mínimo de adultos não pode ter um valor maior que o máximo de adultos.         |
| Máx. de Adultos                                      | Sim                                                                        | -                     | Números inteiros maiores que 0. O máximo de adultos não pode ter um valor menor que o mínimo de adultos.         |
| Aceitar Cama Extra                                   | Não                                                                        | -                     | Desmarcado por padrão.                                                                                           |
| Aceitar Crianças                                     | Não                                                                        | -                     | Desmarcado por padrão.                                                                                           |
| Máx. de Crianças                                     | Sim (quando **Aceitar Crianças** está selecionado)                         | -                     | Números inteiros maiores que 0.                                                                                  |
| Máx. de Crianças Grátis                              | Não                                                                        | -                     | -                                                                                                                |
| **Configurações extranet**                           | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Quarto sem possibilidade de utilização nas extranets | Não                                                                        | -                     | Desmarcado por padrão.                                                                                           |
| Não mostrar inventário total nas extranets           | Não                                                                        | -                     | Desmarcado por padrão.                                                                                           |
| **Amenidades**                                       | N/A                                                                        | N/A                   | N/A                                                                                                              |
| 1. Serviços Gerais                                   | Não                                                                        | -                     | -                                                                                                                |
| 2. Produtos de Banheiro                              | Não                                                                        | -                     | -                                                                                                                |
| 3. Comida e Bebida                                   | Não                                                                        | -                     | -                                                                                                                |
| 4. Entretenimento Multimédia                         | Não                                                                        | -                     | -                                                                                                                |
| **Fotos**                                            | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Fotos                                                | Não                                                                        | -                     | -                                                                                                                |
| **Configurações Adicionais**                         | N/A                                                                        | N/A                   | N/A                                                                                                              |
| 1. Tipo de Cama                                      | Não                                                                        | -                     | -                                                                                                                |
| 2. Vista                                             | Não                                                                        | -                     | -                                                                                                                |
| 3. Categoria                                         | Não                                                                        | -                     | -                                                                                                                |
| **Tarifas e Pacotes**                                | N/A                                                                        | N/A                   | N/A                                                                                                              |
| Tarifas e Pacotes                                    | Não                                                                        | -                     | -                                                                                                                |

## Configurações

O nome e a descrição podem ser configurados em vários idiomas. O idioma padrão deve ser o idioma base da propriedade.

Não é possível ter Tipos de Quarto com o mesmo nome.

A área do quarto, por padrão, é definida em metros (m²), mas pode ser alterada e definida em pés (ft²).

Os valores dos **Limites de Preços** são configurados na moeda base do hotel e não podem ser definidos para outras moedas.

O valor definido em **Mín. de Adultos** tem de ser sempre igual ou inferior ao valor definido em **Máx. de Adultos**, e ambos têm de ser superiores a 0.

Se o **Mín. de Adultos** for maior que 1, é mostrada a seguinte mensagem de alerta ao **salvar**, onde o número de adultos corresponde ao valor configurado no campo **Mín. de Adultos**:

![Alerta de Mínimo de Adultos](</assets/beehive/gestao-de-propriedade/quartos/Screenshot_491.png> "Alerta de Mínimo de Adultos")

:::info
Embora o modal mencione o Motor de Reservas, a regra também é aplicada a pesquisas nos *Pull*.
:::

Quando a ocupação do quarto é alterada (**Mín. de Adultos**, **Máx. de Adultos** ou **Máx. de Crianças**), o sistema mostra a seguinte mensagem de alerta ao **salvar** as alterações:

![Alerta de Alteração de Ocupação](</assets/beehive/gestao-de-propriedade/quartos/Screenshot_492.png> "Alerta de Alteração de Ocupação")

:::danger
Se o número de adultos ou crianças for decrementado, o sistema deve alertar o gestor de conta de que os preços para a ocupação removida também serão eliminados. A seguinte mensagem de aviso deve ser exibida: "Ocupação do quarto alterada. Uma vez que a ocupação Adulto 4 já não é permitida, os preços serão removidos. Deseja continuar? Sim/Não".
:::

Apenas utilizadores com a permissão "**Utilizador pode editar a ocupação de um tipo de quarto**" (*PermissionCode 5044*) podem alterar a ocupação de adultos (**Mín. de Adultos** e **Máx. de Adultos**) e a ocupação de crianças (**Aceitar Crianças**, **Máx. de Crianças** e **Máx. de Crianças Grátis**).

Gestores de Conta podem sempre editar a ocupação dos quartos, desde que tenham permissão para editar quartos.

Utilizadores com a permissão "**Utilizador não pode alterar quartos criados por gerente de conta**" (*PermissionCode 543*) não podem editar quartos que tenham sido criados por gestores de conta, mesmo que tenham permissão para editar quartos. Quartos criados por gestores de conta são mostrados apenas para consulta para estes utilizadores.

## Amenidades

As amenidades devem ser mostradas de acordo com a informação que é retornada pela API. Essa informação deve estar organizada em 4 colunas:

1.  Serviços Gerais
2.  Produtos de Banheiro
3.  Comida e Bebida
4.  Entretenimento Multimédia

| **1. Serviços Gerais**                                                                                                                                                                                                                                                                                                                                                                          | **2. Produtos de Banheiro**                                                                                                                                     | **3. Comida e Bebida**                                                                                                                        | **4. Entretenimento Multimédia**                                                                                                                                                                   |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 120 DC<br />120V<br />220 DC<br />220V<br />Ar condicionado<br />Serviço de alarme<br />Berço de bebê<br />Varanda<br />Jornal diário<br />Desktop<br />Telefone com linha direta<br />Fax<br />Lareira<br />Acesso de internet<br />Internet sem fio<br />Telefone IP<br />Tábua de passar roupa<br />Cofre de segurança para laptop<br />Sala de estar<br />Sala de reunião<br />Quarto para não fumantes<br />Menu de travesseiros<br />Impressora<br />Cofre<br />Quarto para fumantes<br />Telefone<br />Terraço<br />Mesa de trabalho | Facilidades<br />Banheira ou Ducha<br />Roupão de banho<br />Telefone<br />Banheira<br />Bidê<br />Banheiro privativo<br />Secador de cabelo<br />Jacuzzi<br />Banheiro compartilhado<br />Chuveiro<br />Chinelos | Máquina de café<br />Talheres<br />Pratos<br />Chaleira Elétrica<br />Óculos<br />Cozinha<br />Kitchenette<br />Micro-ondas<br />Mini-bar<br />Frigorífico<br />Instalações para chá e café<br />Torradeira | TV a cabo<br />CD Player<br />DVD Player<br />Internet<br />TV de tela Plana / Plasma / LCD<br />MP3/4 Dockstation<br />Televisão paga<br />Playstation<br />Rádio<br />Smart TV<br />TV<br />Controle remoto<br />Video Games<br />Vídeo sob demanda<br />X-box |

## Fotos

O utilizador pode carregar/eliminar uma ou mais fotos.

Pode carregar fotos através do botão "**Carregar Fotos**", do atalho "**Carregar Fotos**" (mostrado quando o quarto não tem nenhuma foto) e arrastando as fotos para a área de fotos do quarto.

O sistema suporta os seguintes tipos de ficheiros:

*   `.JPG`
*   `.JPEG`
*   `.PNG`

Caso o utilizador tente inserir imagens que não correspondem aos formatos suportados pelo sistema, é mostrada uma mensagem de erro.

O tamanho máximo suportado pelo sistema é de 1 MB. Caso o utilizador tente inserir fotos maiores, é mostrada uma mensagem de erro.

É possível marcar uma foto como foto principal (apenas uma foto), através do ícone "estrela" mostrado no *hover* e no *preview* das fotos.

:::info
O ícone "estrela" deve incluir uma *tooltip* com a seguinte informação: "Definir como Principal".
:::

A foto marcada como principal fica assinalada com uma "estrela" e será mostrada como foto principal no Motor de Reservas.

Uma vez definida uma foto como principal no quarto, não é possível deixar de ter pelo menos uma foto marcada como principal. É possível alterar a foto principal, mas não a remover completamente se for a única.

O utilizador pode pré-visualizar todas as fotos do seu quarto numa galeria de fotos.

## Configurações Adicionais

As Configurações Adicionais devem ser mostradas de acordo com a informação retornada pela API. Essa informação deve estar organizada em 3 colunas:

1.  Tipo de Cama
2.  Vista
3.  Categoria

| **1. Tipo de Cama**                                               | **2. Vista**                                                                                                                                                                                                                                                                                                                                                                          | **3. Categoria**                                                                                                                                             |
| :---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cama de casal<br />King<br />Queen<br />Sofá-cama<br />Solteiro King<br />Solteiro<br />Variável<br />Beliche | Vista para a Cidade<br />Vista para o Pátio<br />Vista para Campo de Golf<br />Vista para o Porto<br />Vista para o Lago<br />Vista para a Marina<br />Vista para a Montanha<br />Vista para o Oceano<br />Vista para a Piscina<br />Vista para o Rio<br />Vista para a Praia<br />Vista para o Jardim<br />Vista para o Parque<br />Vista para a Floresta<br />Vista variada<br />Vista para o Campo<br />Vista para o Mar<br />Vista Lateral Mar<br />Vista para estacionamento | Suites<br />Apartamentos<br />Studios<br />Condomínios<br />Loft<br />Bungalow<br />Villa<br />Junior suite<br />Clássica<br />Luxo<br />Suite Deluxe<br />Económica<br />Luxury<br />Standard<br />Superior<br />Executiva<br />Villa for 1 |

As opções **Compartilhar**, **URL Motor de Reservas** e **Histórico de Alterações** apenas são mostradas na edição; na criação do quarto, estas opções não estão disponíveis.

As opções **Compartilhar** e **URL Motor de Reservas** apenas são mostradas mediante permissão (ação "**Ligado**" na permissão para o ecrã).

*   **Compartilhar** o Tipo de Quarto nas redes sociais:
    *   Facebook
    *   Linkedin
    *   Twitter
    *   E-mail
*   **URL do Motor de Reservas** do Tipo de Quarto:
    *   **Obter Link** do quarto (Link direto do Motor de Reservas para o Quarto - URL retornado pela API)
        *   O utilizador pode **Copiar** o URL ou **Pré-Visualizar** a informação do quarto no Motor de Reservas.
    *   **Pré-visualizar** (ver a informação do quarto no Motor de Reservas)

## Tarifas e Pacotes

São listadas todas as tarifas e pacotes (não eliminados) de hotel e todas as tarifas e pacotes *Multi-Property* (não eliminados) que estão associadas ao hotel.

*Nota*: Na lista de tarifas só são mostradas tarifas Omnibees, não podem ser mostradas tarifas de extranets.

É possível associar e/ou remover uma ou várias tarifas/pacotes.

Ao associar uma tarifa/pacote a um tipo de quarto, essa ação é refletida também em **Tarifas** no separador **Tipos de Quarto**.

O mesmo deve acontecer ao remover uma tarifa/pacote de um tipo de quarto, sendo que, ao realizar esta ação e **guardar**, é mostrada uma mensagem ao utilizador para que ele se certifique de que fechou vendas (mesma regra existente quando se remove um quarto em **Tarifas**).

Todas as alterações feitas na aba de **Tarifas e Pacotes** ficam registadas nos históricos de alterações de Tipos de Quarto e de Tarifas.

![Tarifas e Pacotes associados](</assets/beehive/gestao-de-propriedade/quartos/Screenshot_366.png> "Tarifas e Pacotes associados")

## Eliminar Tipos de Quarto

É possível eliminar um ou mais Tipos de Quarto, mesmo que estejam associados a tarifas/pacotes.

É possível eliminar um ou mais Tipos de Quarto numa mesma ação.

Ao eliminar um Tipo de Quarto, será também eliminada toda a multimédia do quarto e o tipo de quarto na tabela de Dependência de Tipos de Quarto, se aplicável.

Não é possível eliminar um Tipo de Quarto se este estiver a ser usado numa tarifa/pacote (*linked*).

:::danger
Se o utilizador tentar eliminar vários Tipos de Quarto e, por alguma razão, uma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um dos registos falhar, nenhum outro Tipo de Quarto deve ser eliminado.
:::

Sempre que sejam eliminados tipos de quarto que estejam associados a pelo menos uma tarifa/pacote, deve ser mostrada uma mensagem para que o utilizador se certifique de que fechou vendas (mesma regra existente quando se remove um quarto em **Tarifas**).

Se o tipo de quarto a ser eliminado não tiver nenhuma tarifa/pacote associado, não é mostrada nenhuma mensagem.

Os tipos de quarto eliminados são removidos das tarifas/pacotes a que estavam associados e vice-versa.

Estas ações ficam registadas nos históricos de alterações de Tipos de Quarto e de Tarifas.

O ecrã deve validar as permissões do utilizador e mostrar as informações correspondentes.

## Histórico
### Histórico de alterações e referências:
| Data da alteração | Owner            | Referência de alteração                                                                                                                | Observações                                 |
|-------------------|------------------|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| 28-08-2025        | N8N              | -                                                                                                                                      | Conversão da documentação para Docusaurus   |
| 26-03-2024        | Flávia Guerreiro | [O-328](https://omnibees.aha.io/features/O-328)                                                                                        | Aba Tarifas e Pacotes                       |
| 16-03-2023        | Flávia Guerreiro | -                                                                                                                                      | Migração da documentação                  |

### UI / UX
| Data da última alteração | URL Design                                                                                                                                       | Referência de alteração |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| 18-01-2024               | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/) | [O-328](https://omnibees.aha.io/features/O-328) |
| ND                       | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Room Types](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Room%20Types) | ND                       |