---
sidebar_label: Tipos de Quarto
title: Tipos de Quarto
description: Documentação completa sobre a gestão de Tipos de Quarto em um sistema de hotelaria, cobrindo listagem, criação, edição e eliminação, incluindo detalhes de configuração, amenidades, fotos e tarifas.
slug: /beehive/gestao-de-propriedade/tipos-de-quarto
---

# Tipos de Quarto

Um tipo de quarto é a unidade básica de uma propriedade/hotel. Possui uma quantidade disponível, normalmente a quantidade física de quartos desse tipo existente no hotel, e algumas características associadas, como amenidades, fotos, etc.

## Lista de Tipos de Quarto

Neste ecrã, é possível listar todos os Tipos de Quarto da Propriedade.

![Lista Tipos de Quarto](</assets/beehive/gestao-de-propriedade/tipos-de-quarto/Lista Tipos de Quarto.png> "Lista Tipos de Quarto")

A lista deve incluir a seguinte informação:

*   Nome
*   Limites de Preços (Preço máx./mín.)
*   Máx / min adultos
*   Máx crianças
*   Cama Extra
*   Quantidade
*   Ícone Registo de Sistema Externo

O ícone de Registo de Sistema Externo deve incluir uma *tooltip* com a seguinte informação: 'Registo de Sistema Externo'.

Deve ser possível filtrar por qualquer coluna da lista. Os filtros possíveis são:

*   Nome
*   Preço Mín (moeda)
*   Preço Máx (moeda)
*   Mín adultos
*   Máx adultos
*   Máx crianças
*   Cama Extra
*   Quantidade

Todos os filtros são de texto livre, exceto o filtro da cama extra, que é do tipo booleano.

É possível ordenar por qualquer coluna da lista e pesquisar por qualquer coluna, à exceção da coluna 'Cama Extra'.

O botão 'Eliminar' apenas deve estar visível se um ou mais itens forem selecionados.

As ações adicionais (representadas na UI por três pontos) devem estar visíveis apenas se um item for selecionado. As possíveis ações adicionais são:

*   Compartilhar:
    *   Facebook
    *   LinkedIn
    *   Twitter
    *   Email
*   URL do Motor de Reservas
    *   Obter Link
    *   Pré-Visualizar
*   Histórico de Alterações

É possível compartilhar o Tipo de Quarto nas redes sociais (Facebook, LinkedIn, Twitter) e enviar o link por email. A API deve retornar o URL.

Deve ser possível obter o URL do Motor de Reservas para o Tipo de Quarto selecionado e pré-visualizar essa informação. A API deve retornar o URL.

A lista deve incluir paginação (50 itens).

É possível definir o ecrã como Favorito (para ser incluído no Menu de Navegação 'Favoritos').

O utilizador seleciona 'Eliminados' para listar todos os Tipos de Quarto Eliminados.

`User selects “Removed” to list the all the Deleted Room Types.`

O utilizador clica no botão 'Atualizar' para preencher a lista com a informação atualizada.

O ecrã deve validar as permissões do utilizador e mostrar a informação correspondente.

## Criar e Editar Tipos de Quarto

Neste ecrã é possível criar ou atualizar um Tipo de Quarto. O utilizador deve preencher todos os campos obrigatórios e guardar. Quando a operação for concluída, o Tipo de Quarto estará pronto para ser usado.

![Criação Tipos de Quarto](</assets/beehive/gestao-de-propriedade/tipos-de-quarto/Criação Tipos de Quarto.png> "Criação Tipos de Quarto")

| **Campo** | **Obrigatório?** | **Limite Caracteres** | **Formato válido / Obs** |
| :----------------------------------- | :--------------------------------------------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Configurações** | | | |
| **Detalhes** | | | |
| Nome | SIM | 100 | - |
| Traduções do Nome | SIM (quando a tradução da Descrição para o mesmo idioma estiver preenchida) | 100 | - |
| Descrição | Não | 4000 | - |
| Traduções da Descrição | Não | 4000 | - |
| Área do Quarto | SIM | - | Duas casas decimais. Valores maiores que 0. Em metros ou em pés. Metros é o valor Padrão. |
| **Limites de Preços** | | | |
| Mín. Limite de Preço | Não | - | Duas casas decimais. Valores maiores que 0. Na moeda base do hotel. |
| Máx. Limite de Preço | Não | - | Duas casas decimais. Valores maiores que 0. Na moeda base do hotel. |
| **Informação de Ocupação** | | | |
| Nº de Quartos | SIM | - | Números inteiros maiores que 0. |
| Máx. de Hóspedes | Não | - | |
| Mín. de Adultos | SIM | - | Números inteiros maiores que 0. O mínimo de adultos não pode ter um valor maior que o máximo de adultos. |
| Máx. de Adultos | SIM | - | Números inteiros maiores que 0. O máximo de adultos não pode ter um valor menor que o mínimo de adultos. |
| Aceitar Cama Extra | Não | - | Desmarcado por padrão. |
| Aceitar Crianças | Não | - | Desmarcado por padrão. |
| Máx. de Crianças | SIM (quando 'Aceitar Crianças' está selecionado) | - | Números inteiros maiores que 0. |
| Máx. de Crianças Grátis | Não | - | |
| **Configurações de Extranet** | | | |
| Quarto sem possibilidade de utilização nas Extranets | Não | - | Desmarcado por padrão. |
| Não mostrar inventário total nas Extranets | Não | - | Desmarcado por padrão. |
| **Amenidades** | | | |
| 1. Serviços Gerais | Não | - | - |
| 2. Produtos de Banheiro | Não | - | - |
| 3. Comida e Bebida | Não | - | - |
| 4. Entretenimento Multimédia | Não | - | - |
| **Fotos** | | | |
| Fotos | Não | - | - |
| **Configurações Adicionais** | | | |
| 1. Tipo de Cama | Não | - | - |
| 2. Vista | Não | - | - |
| 3. Categoria | Não | - | - |
| **Tarifas e Pacotes** | | | |
| Tarifas e Pacotes | Não | - | - |

### Configurações

O nome e a descrição podem ser configurados em vários idiomas. O idioma padrão deve ser o idioma base da propriedade.

Não é possível ter Tipos de Quarto com o mesmo nome.

A área do quarto, por padrão, é definida em metros (m²), mas pode ser alterada e definida em pés (ft²).

Os valores dos 'Limites de Preços' são configurados na moeda base do hotel e não podem ser definidos para outras moedas.

O valor definido em 'Mín. de Adultos' deve ser sempre igual ou inferior ao valor definido em 'Máx. de Adultos', e ambos devem ser superiores a 0.

Se o 'Mín. de Adultos' for maior que 1, é mostrada a seguinte mensagem de alerta ao salvar, onde o número de adultos corresponde ao valor configurado no campo 'Mín. de Adultos'.

![Screenshot 491](</assets/beehive/gestao-de-propriedade/tipos-de-quarto/Screenshot_491.png> "Screenshot 491")

Embora o *modal* mencione o Motor de Reservas, a regra também é aplicada a pesquisas nos Pulls.

Quando a ocupação do quarto é alterada ('Mín. de Adultos', 'Máx. de Adultos' ou 'Máx. de Crianças'), o sistema mostra a seguinte mensagem de alerta ao salvar as alterações:

![Screenshot 492](</assets/beehive/gestao-de-propriedade/tipos-de-quarto/Screenshot_492.png> "Screenshot 492")

`If the number of adults or children is decremented the system should alert the account manager that the prices of the removed occupancy will also be removed. The following warning message should be triggered “Room occupancy changed. Since the occupancy Adult 4 is no longer allowed, prices will be removed. Want to continue? Yes/No”.`

Apenas utilizadores com a **permissão** '**Utilizador pode editar a ocupação de um tipo de quarto**' (*PermissionCode 5044*) podem alterar a ocupação de adultos ('Mín. de Adultos' e 'Máx. de Adultos') e a ocupação de crianças ('Aceitar Crianças', 'Máx. de Crianças' e 'Máx. de Crianças Grátis').

Gestores de Conta podem sempre editar a ocupação dos quartos, desde que tenham permissão para editar quartos.

Utilizadores com a **permissão** '**Utilizador não pode alterar quartos criados por gerente de conta**' (*PermissionCode 543*) não podem editar quartos que tenham sido criados por gestores de conta, mesmo que tenham permissão para editar quartos. Quartos criados por gestores de conta são mostrados apenas para consulta para estes utilizadores.

### Amenidades

As amenidades devem ser mostradas de acordo com a informação que é retornada pela API. Essa informação deve estar organizada em 4 colunas:

| **1. Serviços Gerais** | **2. Produtos de Banheiro** | **3. Comida e Bebida** | **4. Entretenimento Multimédia** |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 120 DC, 120V, 220 DC, 220V, Ar condicionado, Serviço de alarme, Berço de bebê, Varanda, Jornal diário, Desktop, Telefone com linha direta, Fax, Lareira, Acesso de internet, Internet sem fio, Telefone IP, Tábua de passar roupa, Cofre de segurança para laptop, Sala-de-estar, Sala de reunião, Quarto para não fumantes, Menu de travesseiros, Impressora, Cofre, Quarto para fumantes, Telefone, Terraço, Mesa de trabalho | Facilidades, Banheira ou Ducha, Roupão de banho, Telefone, Banheira, Bidê, Banheiro privativo, Secador de cabelo, Jacuzzi, Banheiro compartilhado, Chuveiro, Chinelos | Máquina de café, Talheres, Pratos, Chaleira Elétrica, Óculos, Kitchenette, Micro-ondas, Mini-bar, Geladeira, Instalações para chá e café, Torradeira | TV a cabo, CD Player, DVD Player, Internet, TV de tela Plana / Plasma / LCD, MP3/4 Dockstation, Televisão paga, Playstation, Rádio, Smart TV, TV, Controle remoto, Video Games, Video sob demanda, X-box |

### Fotos

O utilizador pode carregar ou eliminar 1 ou mais fotos.

Pode carregar fotos através do botão 'Carregar Fotos', do atalho 'Carregar Fotos' (mostrado quando o quarto não tem nenhuma foto) e arrastando as fotos para a área de fotos do quarto.

O sistema suporta os seguintes tipos de ficheiros:

*   \*.JPG
*   \*.JPEG
*   \*.PNG

Caso o utilizador tente inserir imagens que não correspondem aos formatos suportados pelo sistema, é mostrada uma mensagem de erro.

O tamanho máximo suportado pelo sistema é de 1MB; caso o utilizador tente inserir fotos maiores, é mostrada uma mensagem de erro.

É possível marcar uma foto como principal (apenas uma foto), através do ícone de 'estrela' mostrado no *hover* e na pré-visualização das fotos.

O ícone de 'estrela' deve incluir uma *tooltip* com a seguinte informação: 'Definir como Principal'.

A foto marcada como principal fica com uma 'estrela' e será mostrada como foto principal no Motor de Reservas.

Uma vez definida uma foto como principal no quarto, não é possível deixar o quarto sem uma foto principal; pode-se alterar a foto principal, mas não removê-la.

O utilizador pode pré-visualizar todas as fotos do seu quarto numa galeria de fotos.

### Configurações Adicionais

As Configurações Adicionais devem ser mostradas de acordo com a informação retornada pela API. Essa informação deve estar organizada em 3 colunas:

| **1. Tipo de Cama** | **2. Vista** | **3. Categoria** |
| :------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Cama de casal, King, Queen, Sofá-cama, Solteiro King, Solteiro, Variável, Beliche | Vista para a Cidade, Vista para o Pátio, Vista para Campo de Golf, Vista para o Porto, Vista para o Lago, Vista para a Marina, Vista para a Montanha, Vista para o Oceano, Vista para a Piscina, Vista para o Rio, Vista para a Praia, Vista para o Jardim, Vista para o Parque, Vista para a Floresta, Vista variada, Vista para o Campo, Vista para o Mar, Vista Lateral Mar, Vista para estacionamento | Suítes, Apartamentos, Studios, Condomínios, Loft, Bungalow, Villa, Junior suite, Clássica, Luxo, Suíte Deluxe, Econômica, Luxury, Standard, Superior, Executiva, Villa for 1 |

As opções 'Compartilhar', 'URL Motor de Reservas' e 'Histórico de Alterações' apenas são mostradas na edição; na criação do quarto, estas opções não estão disponíveis.

As opções 'Compartilhar' e 'URL Motor de Reservas' apenas são mostradas mediante permissão (ação 'Ligado' na permissão para a ecrã).

*   Compartilhar o Tipo de Quarto nas redes sociais
    *   Facebook
    *   LinkedIn
    *   Twitter
    *   Email
*   URL do Motor de Reservas do Tipo de Quarto
    *   Obter Link do Quarto (Link direto do Motor de Reservas para o Quarto – URL retornado pela API)
        *   O utilizador pode copiar o URL ou pré-visualizar a informação do quarto no Motor de Reservas
    *   Pré-visualizar (ver a informação do quarto no Motor de Reservas)

### Tarifas e Pacotes

São listadas todas as tarifas e pacotes (não eliminados) de hotel e todas as tarifas e pacotes *multi-property* (não eliminados) que estão associados ao hotel.

*Nota*: Na lista de tarifas só são mostradas tarifas Omnibees; não podem ser mostradas tarifas de extranets.

É possível associar e/ou remover uma ou várias tarifas/pacotes.

Ao associar uma tarifa/pacote a um Tipo de Quarto, essa ação é refletida também em 'Tarifas', no separador 'Tipos de Quarto'.

O mesmo deve acontecer ao remover uma tarifa/pacote de um Tipo de Quarto; ao realizar esta ação e guardar, é mostrada uma mensagem ao utilizador para que ele se certifique de que fechou vendas (*mesma regra existente quando se remove um quarto em 'Tarifas'*).

Todas as alterações feitas na aba 'Tarifas e Pacotes' ficam registadas nos históricos de alterações de 'Tipos de Quarto' e de 'Tarifas'.

![Screenshot 366](</assets/beehive/gestao-de-propriedade/tipos-de-quarto/Screenshot_366.png> "Screenshot 366")

## Eliminar Tipos de Quarto

É possível eliminar um ou mais Tipos de Quarto, mesmo que estejam associados a tarifas/pacotes.

É possível eliminar um ou mais Tipos de Quarto na mesma ação.

Ao eliminar um Tipo de Quarto, será também eliminada toda a multimédia do quarto e o Tipo de Quarto na tabela de 'Dependência de Tipos de Quarto', se aplicável.

Não é possível eliminar um Tipo de Quarto se este estiver a ser usado numa tarifa/pacote (*linked*).

Se o utilizador tentar eliminar vários Tipos de Quarto e, por alguma razão, uma das eliminações falhar, a ação deve ser revertida. Se a eliminação de um dos registos falhar, nenhum outro Tipo de Quarto deve ser eliminado.

Sempre que sejam eliminados Tipos de Quarto que estejam associados a pelo menos uma tarifa/pacote, deve ser mostrada uma mensagem para que o utilizador se certifique de que fechou vendas (*mesma regra existente quando se remove um quarto em 'Tarifas'*).

Se o Tipo de Quarto a ser eliminado não tiver nenhuma tarifa/pacote associado, não é mostrada nenhuma mensagem.

Os Tipos de Quarto eliminados são removidos das tarifas/pacotes a que estavam associados, e vice-versa.

Estas ações ficam registadas nos históricos de alterações de 'Tipos de Quarto' e de 'Tarifas'.

O ecrã deve validar as permissões do utilizador e mostrar a informação correspondente.

## Histórico

### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|-------------------|-------|-------------------------|-------------|
| 29-08-2025        | N8N   | -                       | Conversão da documentação para Docusaurus |
| 26-03-2024        | Flávia Guerreiro | [O-328](https://omnibees.aha.io/features/O-328) | Aba Tarifas e Pacotes |
| 16-03-2023        | Flávia Guerreiro | -                       | Migração da documentação |

### UI / UX

| Data da última alteração | URL Design | Referência de alteração |
|--------------------------|------------|-------------------------|
| 18-01-2024               | [https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/](https://xd.adobe.com/view/074e1a11-1fe4-4891-820e-e623840fc2de-521d/) | [O-328](https://omnibees.aha.io/features/O-328) |
| ND                       | [$/Omnibees/OB/UI Design/Protur/Main/OMNIBEES_v02/Release/Room Types](https://tfs.omnibees.com/tfs/IDTProjects/Omnibees/_versionControl?path=$/Omnibees/OB/UI%20Design/Protur/Main/OMNIBEES_v02/Release/Room%20Types) | ND |