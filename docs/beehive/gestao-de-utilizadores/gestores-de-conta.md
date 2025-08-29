---
sidebar_label: Gestores de Conta e Hotel
title: Gestores de Conta e Hotel
description: Este documento detalha a gestão de utilizadores e gestores de conta no sistema, incluindo funcionalidades de criação, edição, eliminação e as novas políticas de segurança para palavras-passe e autenticação de dois fatores.
slug: /beehive/gestao-de-utilizadores/gestores-de-conta
---

# Gestores de Conta e Hotel

## Gestão de Utilizadores

A área de Gestão de Utilizadores está dividida em dois grupos, que correspondem a duas opções diferentes no menu de navegação:

*   **Gestores de Conta**

    A gestão dos Gestores de Conta é realizada exclusivamente pelos administradores do sistema ou por outros Gestores de Conta que possuam a permissão do painel "Gestor de Contas". Apenas estes conseguem visualizar todos os Gestores de Conta registados, criar novos ou gerir os existentes no sistema.

*   **Utilizadores**

    A gestão de Utilizadores pode ser realizada por qualquer tipo de utilizador (administrador, gestor de conta ou utilizador) que tenha acesso ao painel "Utilizadores". Este painel permite aos utilizadores criar, editar e eliminar outros utilizadores.

Um nível adicional de segurança de autenticação pode ser adicionado aos Gestores de Conta e Utilizadores: a autenticação de dois fatores (Two-Factor Authenticator). Este tipo de autenticação acrescenta uma camada extra de segurança ao processo de login na aplicação, uma vez que o utilizador é obrigado, além da autenticação normal (nome de utilizador e palavra-passe), a inserir um código gerado na aplicação móvel instalada no telemóvel do utilizador ou numa aplicação de desktop. Desta forma, garante-se que, mesmo que outra pessoa tenha acesso ao nome de utilizador e palavra-passe correspondente, não consegue entrar na conta sem ter também o telemóvel associado ao registo de utilizador ou acesso ao seu computador.

## RF 1.1 Listar Utilizadores

**Requisito Funcional**

Neste painel é possível listar todos os utilizadores registados no sistema para o cliente selecionado (ou o cliente associado à propriedade selecionada).

![lista users](</assets/beehive/gestao-de-utilizadores/gestores-de-conta/lista users.JPG> "lista users")

**Critérios de Aceitação**

A lista contém a seguinte informação:

*   Primeiro Nome
*   Sobrenome
*   Email
*   Data de Validade da Senha
*   Status

É possível filtrar por qualquer coluna da lista, utilizando os seguintes filtros:

*   Primeiro Nome
*   Sobrenome
*   Email
*   Data de Validade da Senha
*   Status

Todos os filtros são de texto livre, com exceção do "status", que é do tipo enumeração, e da "Data de Validade da Senha", que é do tipo data. O filtro de data é "Expiração da Senha até" (formato dd/mm/aa).

O formato da Data de Expiração varia consoante o idioma:

*   UK (mm/dd/aaaa)
*   Dinamarquês (dd.mm.aaaa)
*   Outros idiomas (dd/mm/aaaa)

É possível pesquisar e ordenar por qualquer coluna da lista.

As ações adicionais (representadas por três pontos) são visíveis apenas quando um item está selecionado, sendo a única ação adicional o "Histórico de Alterações".

A lista inclui paginação (50 itens).

Deve ser possível configurar o painel como Favorito (para ser incluído nos Favoritos do menu de navegação).

O utilizador seleciona "Eliminados" para listar todos os utilizadores removidos.

O utilizador clica em "Atualizar" para carregar a lista com a informação atualizada.

## RF 1.2 Criar Utilizadores

**Requisito Funcional**

Neste painel, é possível criar um utilizador. O utilizador deve preencher todos os campos obrigatórios e guardá-los. Após a conclusão da operação, o utilizador estará pronto para uso.

![criar user](</assets/beehive/gestao-de-utilizadores/gestores-de-conta/criar user.JPG> "criar user")

**Critérios de Aceitação**

A informação do utilizador está agrupada em três áreas diferentes:

*   Configurações
*   Propriedades
*   Permissões

| **Campo** | **Obrigatório** | Observações/Detalhes |
|---|---|---|
| **Configurações** | N/A | - |
| Cliente Whitelabel | S | Apenas visível no ecrã de Gestores de Conta e em contexto Omnibees |
| Prefixo | S | - |
| Nome Próprio | S | - |
| Sobrenome | N | - |
| Data de Nascimento | N | - |
| Email | S | - |
| Telefone | S | - |
| Categoria | N | - |
| Número de visualizações de CC | S | 10 por padrão e apenas disponível para Utilizadores |
| Nome de Utilizador | S | - |
| Palavra-passe | N | - |
| Data de Expiração da Palavra-passe | S | Data atual + 60 dias |
| Autenticação de Dois Fatores | N | Inativo por padrão |
| Utilizador bloqueado | N | Inativo por padrão |
| **Propriedades** | N/A | - |
| Lista de Propriedades | N | - |
| &nbsp;&nbsp;&nbsp;&nbsp;Nome da Propriedade | N | (Subcampo) |
| **Permissões** | N/A | - |
| Lista de Permissões | N | - |
| &nbsp;&nbsp;&nbsp;&nbsp;Nome da Permissão | N | (Subcampo) |

O campo "Cliente Whitelabel" está disponível apenas no ecrã "Gestores de Conta" e em contexto Omnibees. Na criação de um gestor de conta, a opção "Omnibees" vem pré-selecionada e não é possível removê-la. Apenas utilizadores com a permissão "Gerir acessos de gestores de conta aos clientes whitelabel" conseguem atribuir ou remover outros Whitelabels.

A API deve retornar a lista de prefixos:

*   Mr.
*   Mrs.
*   Miss.

O telefone é obrigatório. O valor inserido no campo "Telefone" deve começar com "+" e os restantes valores devem ser numéricos.

O email deve ter validação: "@" é um caractere obrigatório e deve ser único.

O utilizador (utilizador de hotel ou gestor de conta) só recebe o email de definição de palavra-passe se tiver a autenticação de dois fatores (2FA) ativada. Caso contrário, não lhe é enviado o email de recuperação da palavra-passe. Neste caso, o email é enviado para endereços específicos definidos no código.

Para um novo utilizador, a palavra-passe expira 60 dias após a data da sua criação. A data é definida automaticamente pelo sistema, embora o utilizador possa alterá-la durante a criação. A data não pode ser anterior à data atual.

> The Password hint field should be visible only for the Account Managers; it is not used for normal users.

> Users should have "Active" status and 2-factor authentication active by default. The "Number of CC views in 10 minutes" field should offer a list of values with the following options:

*   5
*   10 (default value)
*   20
*   30
*   50
*   100

> The "Number of CC views in 10 minutes" field should be visible only for Users; it is not used for Account Managers.

Não é possível criar utilizadores com o mesmo nome de utilizador, pois este é único no sistema.

A lista de categorias de utilizadores deve conter a informação retornada pela API.

A data de nascimento aceita apenas datas anteriores à data atual.

Quando um Gestor de Conta está a ser criado, a lista de propriedades e a lista de permissões devem conter, respetivamente, todas as propriedades e permissões do sistema.

No entanto, em contexto Extranet, a lista de propriedades deve conter apenas aquelas associadas ao Cliente Whitelabel em questão. (Esta condição é temporária).

Quando um utilizador de hotel está a ser criado, a lista de propriedades deve conter apenas aquelas associadas ao cliente em questão.
Quanto à lista de roles, estas dependem do tipo de utilizador autenticado:

*   Enquanto gestor de conta, ao aceder ao separador das permissões na criação/edição de um utilizador de hotel, serão listadas as roles de utilizador de hotel do cliente em questão e também as roles gerais de utilizador de hotel (roles criadas pelo administrador e que não são atribuídas a nenhum cliente - gerais para todo o sistema).

*   Enquanto utilizador de hotel, ao aceder ao separador das permissões na criação/edição de um utilizador de hotel, apenas serão listadas as roles de utilizador de hotel do cliente em questão. As roles gerais não são listadas nas listas "por atribuir" e "atribuídas".

É possível associar uma ou mais propriedades e um ou mais grupos de permissões a um cliente.
Ao selecionar as permissões, o utilizador pode visualizar os seus detalhes (apenas em modo de leitura).

No momento em que se clica no botão "Salvar", o código de "Autenticação de dois fatores" é gerado automaticamente pela API e deve ser enviado para o utilizador.

A API deve fornecer o código QR e de ativação que permite ao utilizador ativar a "Autenticação de dois fatores" na aplicação móvel instalada no dispositivo móvel ou no computador. Uma vez que o utilizador pode não estar presente no momento do registo, o sistema deve providenciar a opção de enviar o código/link de ativação via SMS.

Quando o utilizador está a ser criado, a opção "Histórico de Alterações" não deve estar visível, apenas no modo de edição.

O painel deve validar as permissões do utilizador e exibir a informação de acordo com as mesmas.

O utilizador clica no botão "Atualizar" para preencher o formulário com a informação atualizada. Antes da atualização, o utilizador é avisado de que todas as alterações serão perdidas.

## RF 1.3 Editar Utilizadores

**Requisito Funcional**

Neste painel é possível editar os utilizadores.

**Critérios de Aceitação**

No modo de edição, além de ser possível editar os campos referidos no capítulo anterior (Criar Utilizadores), existe um separador dedicado à segurança.

> In edit mode, apart from all actions already mentioned in the "Create Users" chapter, it is also possible to change the user password and to generate the 2-factor authentication.

> To change the password, it is mandatory to fill in the current password, the new password, and to repeat the new password.

> The "locked user", "email" and "Password Expiry Date" fields should be managed by a specific permission (User lock management with code 5041).

**Autenticação de 2 fatores**

Caso o utilizador a ser editado possua uma "role" que inclua a permissão "Atribuir Permissões para Aceder ao Cartão de Crédito", o sistema indicará a necessidade de ter a opção de Autenticação de Dois Fatores ativa, caso esta esteja desmarcada: "A Autenticação de Dois Fatores deve estar ativa."

Um botão "gerar Código de 2 fatores" está disponível no painel apenas para gestores de conta que possuam uma permissão específica (Gerar 2 fatores com o Código 7001). Se o gestor de contas selecionar a opção "Gerar", um código QR de autenticação de dois fatores e o código/link de ativação serão criados para esse utilizador.

**Expiração da palavra-passe**

A lógica descrita abaixo aplica-se a todos os utilizadores e gestores de conta, mas não deve ser aplicada ao administrador, nem ao utilizador de faturação (RISA), iPad ou iPhone. (Web.Config - a chave contém os nomes de utilizadores que não devem ser considerados para esta lógica).

Se o utilizador estiver bloqueado devido à data de expiração da palavra-passe, quando um gestor de conta o desbloquear, a palavra-passe deverá ser definida para expirar 60 dias após a data de atribuição da nova palavra-passe.

O utilizador só recebe o email de recuperação de palavra-passe caso não esteja bloqueado.

O utilizador (utilizador de hotel ou gestor de conta) só recebe o email de recuperação de palavra-passe se tiver a autenticação de dois fatores ativada. Caso contrário, não lhe é enviado o email de recuperação da palavra-passe. Neste caso, o email é enviado para endereços específicos definidos no código.

## RF 1.4 Eliminar Utilizadores

**Requisito Funcional**

É possível eliminar um ou mais utilizadores.

**Critérios de Aceitação**

É possível eliminar um ou mais utilizadores numa única ação.

Se o utilizador tentar eliminar vários utilizadores e, por alguma razão, alguma das eliminações falhar, a ação tem de ser revertida. Isto significa que, se a eliminação de um registo falhar, nenhum outro deverá ser eliminado.

O painel deve validar as permissões do utilizador e exibir a informação de acordo com as mesmas.

## Gestão de Utilizadores (requisitos novos)

### Garantir que apenas o próprio Utilizador ou Gestor de Conta é responsável por definir a sua própria password

**Requisito Funcional**

No âmbito da auditoria de segurança realizada pela empresa Secure 24, foram identificadas as seguintes melhorias para a área de gestão de hóspedes e TPIs:

*   A lógica de gestão de palavras-passe foi revista e alterada para que seja sempre o próprio hóspede ou TPI o responsável por definir a sua palavra-passe. Ou seja, um utilizador ou gestor de conta deixa de conseguir inserir ou alterar a palavra-passe dos hóspedes e TPIs.
*   A política de palavras-passe foi uniformizada em todo o sistema e melhorada, passando agora a cumprir os seguintes critérios (modificados recentemente):
    *   12 caracteres
    *   1 letra maiúscula
    *   1 letra minúscula
    *   1 número
    *   1 caractere especial
    *   Palavra-passe não deve conter os usernames respetivos
    *   Palavra-passe deve ser diferente das 4 últimas utilizadas
*   O armazenamento das palavras-passe dos utilizadores e gestores de conta foi revisto para que estas deixem de ser guardadas em texto simples na base de dados e passem a ser guardadas em formato hash.
*   As 4 últimas palavras-passe do utilizador são guardadas em hash:
    *   Foi criada uma nova tabela na base de dados para gravar as 4 últimas hashes dos utilizadores (atual + 3).
    *   Quando um utilizador acede ao link de alteração/recuperação de palavra-passe, altera a palavra-passe no modal de expiração, ou através do "Meu Perfil", o sistema deverá validar se a nova palavra-passe inserida pelo utilizador é igual a alguma das 4 últimas gravadas na BD para este utilizador. Em caso afirmativo, será apresentado um erro.

**Critérios de Aceitação**

**Criar utilizador/gestor de conta:**

Quando um utilizador ou um gestor de conta é criado no backoffice, deixa de ser possível definir a sua palavra-passe. Em contrapartida, o sistema oferece a possibilidade de enviar um email ao utilizador/gestor de conta que está a ser criado, para que seja ele próprio o responsável por definir a sua palavra-passe. O email contém um link para a página de definição de nova palavra-passe do Omnibees.

*   No formulário de registo, o campo de palavra-passe deve ser mostrado em formato apenas de leitura (desativado), para impedir o seu preenchimento.
*   Quando o utilizador grava o registo do novo utilizador/gestor de conta, deve ser questionado se pretende notificar o utilizador/gestor de conta via email para que este possa definir a sua palavra-passe de acesso ao backoffice do Omnibees.
*   Imediatamente após o registo ser gravado com sucesso, deve ser exibido um popup de alerta (warning).
*   Título: "Notificar novo #Perfil# para definir palavra-passe?"
*   Descrição: "O #Perfil# será notificado por email para definir uma palavra-passe que lhe permita aceder ao backoffice do Omnibees."
*   Botões: "Sim, Notificar / Não"
*   A variável #Perfil# deve ser substituída por "utilizador" ou "gestor de conta", consoante o cenário.
*   Se o utilizador confirmar o envio da notificação, o email é enviado para o endereço de email definido no registo do utilizador/gestor de conta.
*   Deve ser exibido um popup informativo que confirme ou não o envio do email.
*   Mensagem de sucesso: "Foi enviada uma notificação para email@do.Perfil para definir uma palavra-passe."
*   Mensagem de erro: "Não foi possível enviar a notificação para email@do.Perfil."
*   Em caso de falha no envio, para evitar que o utilizador tenha de voltar a aceder ao detalhe do registo do hóspede/TPI para pedir o reenvio do email, será disponibilizada no popup a opção de reprocessar o pedido de envio de email.

**Editar utilizador/gestor de conta:**

Quando os dados do utilizador/gestor de conta são alterados, deixa de ser possível alterar a sua palavra-passe. Em contrapartida, o sistema oferece a possibilidade de enviar um email ao utilizador/gestor de conta para que este possa definir a sua palavra-passe. O email contém um link para a página de definição de nova palavra-passe do Omnibees.

*   No formulário de registo, o campo de palavra-passe deve ser mostrado em formato apenas de leitura (desativado), para impedir o seu preenchimento.
*   Será disponibilizado um botão "Alterar Palavra-passe" que notifica o utilizador/gestor de conta via email para que este possa definir a sua palavra-passe de acesso ao backoffice do Omnibees.
*   O email é enviado para o endereço de email definido no registo do utilizador/gestor de conta.
*   De seguida, deve ser exibida uma mensagem informativa que confirme ou não o envio do email.
*   Mensagem de sucesso: "Foi enviada uma notificação para email@do.hospede para definir uma palavra-passe."
*   Mensagem de erro: "Não foi possível enviar a notificação para email@do.hospede."

**Meu Perfil:**

A área do "Meu Perfil" será a única no backoffice onde estará disponível a ação de alterar a palavra-passe, quer para um utilizador, quer para um gestor de conta.

*   A opção "Alterar Palavra-passe" mantém-se disponível no painel "Meu Perfil".
*   A nova palavra-passe definida tem de ser guardada em formato hash.
*   A política de palavras-passe dos utilizadores/gestores de conta tem de cumprir as seguintes condições:
    *   12 caracteres
    *   1 letra maiúscula
    *   1 letra minúscula
    *   1 número
    *   1 caractere especial
    *   Palavra-passe não deve conter os usernames respetivos
    *   Palavra-passe deve ser diferente das 4 últimas utilizadas
*   O armazenamento das palavras-passe dos utilizadores e gestores de conta foi revisto para que estas deixem de ser guardadas em texto simples na base de dados e passem a ser guardadas em formato hash.
*   As 4 últimas palavras-passe do utilizador são guardadas em hash:
    *   Foi criada uma nova tabela na base de dados para gravar as 4 últimas hashes dos utilizadores (atual + 3).
    *   Quando um utilizador acede ao link de alteração/recuperação de palavra-passe, altera a palavra-passe no modal de expiração, ou através do "Meu Perfil", o sistema deverá validar se a nova palavra-passe inserida pelo utilizador é igual a alguma das 4 últimas gravadas na BD para este utilizador. Em caso afirmativo, será apresentado um erro.

**Nova propriedade ou Novo cliente - Criar utilizador:**

Quando um utilizador é criado no âmbito do "assistente" de criação de novo cliente ou de criação de nova propriedade, deixa de ser possível definir a sua palavra-passe. Em contrapartida, o utilizador/gestor de conta criado será notificado via email para que seja ele próprio o responsável por definir a sua palavra-passe. O email contém um link para a página de definição de nova palavra-passe do Omnibees.

*   No formulário de registo, no separador "Utilizador", o campo de palavra-passe deve ser mostrado em formato apenas de leitura (desativado), para impedir o seu preenchimento.
*   Incluir um alerta que indique que, ao terminar o assistente, será enviado um email para o utilizador criado.
*   Se o assistente for gravado com sucesso, o sistema tem de enviar um email para o utilizador com o link para a página de definição de nova palavra-passe.
    *   O email é enviado para o endereço de email definido no registo do utilizador.

A lógica descrita acima deve ser aplicada aos seguintes ecrãs:

*   Utilizadores
*   Gestores de Conta
*   Nova Propriedade
*   Novo Cliente
*   Meu Perfil

## Histórico

### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 14-01-2025 | Miriam Barboza | [O-2814](https://omnibees.aha.io/features/O-2814), [O-2812](https://omnibees.aha.io/features/O-2812) | - Não permitir que o utilizador repita as últimas 4 passwords; - Aumentar o tamanho da password de 10 para 12 caracteres |
| 16-02-2023 | Hélder Araújo | Atualização: [https://omnibees.aha.io/features/O-1663](https://omnibees.aha.io/features/O-1663) | Whitelabel Extranet – Limitar lista de propriedades à extranet em contexto |
| 16-12-2022 | Ana Antunes | - | Para Migração da documentação |