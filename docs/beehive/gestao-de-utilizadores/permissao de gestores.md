```markdown
---
sidebar_label: Permissões de Gestor de Conta e Hotel
title: Permissões de Gestor de Conta e Hotel
description: Este documento detalha a gestão de permissões para gestores de conta e utilizadores no sistema Omnibees, explicando a criação, edição e eliminação de funções (roles) e o impacto das permissões nas diversas funcionalidades da aplicação.
slug: /beehive/gestao-de-utilizadores/permissao-de-gestores
---

# Permissões de Gestor de Conta e Hotel

Secções do documento Gestão de Funções

### Atualização

Até hoje, o ecrã de permissões de gestor de conta era disponibilizado apenas para o administrador. Quando este ecrã passa a ser disponibilizado para um gestor de conta que tenha permissões, a salvaguarda que dita que apenas é permitido editar nas funções as permissões a que o próprio utilizador tenha acesso deve ser removida. Não se pretende que seja necessário atribuir a estes utilizadores todas as permissões do sistema para que possam configurar as funções de outros utilizadores. Partimos do princípio de que apenas um conjunto muito controlado de pessoas terá acesso a este ecrã; devemos apresentar sempre todas as permissões disponíveis para gestores de conta e acessíveis na extranet em contexto.

Tanto em Omnibees como nas Extranets, um utilizador de conta com permissões para gerir funções de conta deverá poder criar funções ou editar as permissões constituintes das funções disponíveis para os utilizadores de conta. Este menu é apenas acessível para os utilizadores de conta com permissões para a funcionalidade de definição de funções de conta - "Gerir permissões de gestor de conta" - e deverá existir uma segunda permissão que permite ao utilizador atribuir esta permissão - "Atribuir acesso à gestão de permissões de gestor de conta" - uma vez que o ecrã não pode estar acessível para qualquer utilizador atribuir a um outro utilizador ou a si próprio.

## Gestão de Permissões

Gerir utilizadores e os seus acessos depende maioritariamente do tamanho da aplicação e do número de utilizadores, e torna-se uma tarefa difícil para um administrador ou um utilizador responsável gerir outros utilizadores.

Uma vez que a Omnibees tem um considerável número de hotéis e utilizadores e há uma tendência de crescimento exponencial das funcionalidades e da sua complexidade, é necessário gerir as permissões dos utilizadores de forma a assegurar que os utilizadores não tomem ações indevidas ou acedam a informações que não devem.

Permissões são regras de acesso que determinam se um utilizador pode ou não aceder a determinadas informações e que ações pode tomar sobre elas.

Há administradores, gestores de conta e utilizadores no Omnibees. Assim, devem existir diferentes permissões para os diferentes perfis. Um administrador tem sempre permissões de acesso a todas as áreas e funcionalidades da aplicação.

As permissões dos vários perfis de utilizador são controladas pelas funções.

![esquema role.png](</assets/beehive/gestao-de-utilizadores/permissao-de-gestores/esquema role.png> "esquema role.png")

Uma função pode ser definida como um conjunto de permissões que podem ser facilmente associadas aos utilizadores, definindo os tipos de ações que podem realizar em determinadas funcionalidades.

As ações possíveis são:

*   Ler – Permite ao utilizador visualizar o conteúdo da página (lista e detalhe).
*   Adicionar – Permite ao utilizador criar novos registos.
*   Atualizar – Permite ao utilizador alterar o registo previamente criado (já existente).
*   Eliminar – Permite ao utilizador eliminar registos.
*   Executar – Permite ao utilizador realizar ações nos registos, tal como exportar uma lista.
*   Todos – Desenvolvido para melhorar a usabilidade. Quando ativado, significa que o utilizador pode executar todas as ações anteriores.

Por exemplo, uma função pode ser criada para dar acesso total a todas as funcionalidades da aplicação, esta é, normalmente, uma função de Administrador. Neste caso, todos os utilizadores que trabalhem como administradores devem estar associados a esta função.

Estas permissões são validadas tanto na interface de utilizador (_UI_) como na camada de serviços. Qualquer utilizador que tenha permissões para gerir permissões, gere as permissões da interface de utilizador (_UI_) diretamente no Omnibees. As permissões da camada de serviços são configuradas ao nível da base de dados e geridas internamente.

## Funções de Gestor de Conta e de Utilizador

As funções de gestores de conta diferem das funções de utilizador, por isso, são configuradas em painéis diferentes.

A gestão das permissões dos gestores de conta é feita apenas por administradores do sistema. Apenas estes conseguem criar, editar (adicionar/remover permissões) e eliminar funções de gestores de conta. Um gestor de conta que tenha permissão para aceder ao painel "Permissões de Gestores de Conta" pode apenas visualizar as funções existentes.

A gestão das funções de utilizador pode ser feita por qualquer tipo de utilizador (administrador, gestor de conta ou utilizador) que tenha permissões para criar, editar (adicionar/remover permissões) e/ou remover permissões da área "Permissões de Utilizador".

Para cada função criada, deve ser definido que tipo de permissões de acesso os gestores de conta ou utilizadores associados a essa função devem ter.

Como a interface de utilizador (_UI_) é igual em ambos os painéis, funções de utilizador e funções de gestor de conta, as regras e os comportamentos da interface de utilizador (_UI_) serão especificados juntamente. É apenas importante diferenciar sempre o tipo de utilizador e chamar a API.

### RF 1.1 Listar Funções

**Requisito Funcional**

Neste painel é possível listar todas as funções.

![listar funcoes.png](</assets/beehive/gestao-de-utilizadores/permissao-de-gestores/listar funcoes.png> "listar funcoes.png")

A lista deve apenas conter o "Nome" como coluna.

Para a lista de funções de Gestor de Conta deve ser possível pesquisar e ordenar pela coluna "Nome". Não é possível filtrar por outra coluna.

Para a lista de funções de utilizadores deve ser possível pesquisar e ordenar pela coluna "Nome". Não é possível filtrar por outra coluna, exceto se um administrador estiver logado no sistema. Nesse caso, a lista deve incluir a coluna "Cliente" e deve ser possível pesquisar e ordenar pelas colunas "Nome" e "Cliente". Não é possível filtrar.

A ação de eliminar deve ser visível apenas se um ou mais itens estiverem selecionados.

A lista deve ter paginação (50 itens).

Deve ser possível definir o painel como Favorito (para ser incluído nos Favoritos do Menu de Navegação).

O utilizador clica em "Eliminados" para listar todas as funções eliminadas.

O utilizador clica em "Atualizar" para carregar a lista com a informação atualizada.

O painel deve validar as permissões do utilizador e mostrar a informação de acordo.

### RF 1.2 Adicionar ou Editar Funções

**Requisito Funcional**

Neste painel é possível criar ou atualizar uma função. O utilizador deve preencher todos os campos obrigatórios e guardá-los. Quando a operação estiver concluída, a função estará pronta para ser usada.

![add or update roles.JPG](</assets/beehive/gestao-de-utilizadores/permissao-de-gestores/add or update roles.JPG "add or update roles.JPG")

**Critérios de Aceitação**

| **Campo**                | **Obrigatório?**                                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| **Nome**                 | S                                                                                                                            |
| **Cliente**              | N (Apenas visível para administradores e no painel de permissões de utilizador. Não é utilizado no painel de Gestores de Contas) |
| **Permissões da Função** | N                                                                                                                            |
|                          | **Todos**                                                                                                                    | N                                                                                                                            |
|                          | **Ler**                                                                                                                      | N                                                                                                                            |
|                          | **Adicionar**                                                                                                                | N                                                                                                                            |
|                          | **Atualizar**                                                                                                                | N                                                                                                                            |
|                          | **Eliminar**                                                                                                                 | N                                                                                                                            |
|                          | **Ligado**                                                                                                                   | N                                                                                                                            |

O campo "Nome" não é multilíngue.

Não é possível criar funções com o mesmo nome para o mesmo cliente.

A lista de Permissões da função Gestor de Conta deve conter hierarquia de dados (relação pai/filho).
E quando uma permissão é definida como ativa no nível pai, deve ser definida automaticamente em todos os seus filhos.

*   Nível 1
    *   Nível 2
        *   Nível 3

Por exemplo, se o utilizador definir uma permissão de leitura como ativa no nível 1, as permissões de leitura no nível 2 e 3 também devem ser definidas automaticamente.
Se o utilizador definir uma permissão de leitura como ativa no nível 2, a permissão de leitura de nível 3 também deve ser definida automaticamente.

Ao ativar uma permissão de "Adicionar", "Atualizar", "Eliminar" ou "Ligado", o sistema automaticamente também ativará a permissão "Leitura". Isto significa que, se o utilizador definir "Adicionar", "Atualizar", "Eliminar" ou "Ligado" como ativo, a permissão "Leitura" é também ela definida automaticamente e devem ser mostradas somente no modo Leitura.

As permissões de Gestor de Conta são gerais para o sistema, o que significa que não estão associadas a qualquer contexto (cliente ou hotel).

Funções de Utilizadores criadas por Gestores de Conta ou outros Utilizadores só estão disponíveis nos hotéis que pertencem ao cliente do hotel onde foram criadas.
Por exemplo, se uma função é criada no Hotel XPTO, esta função está visível e disponível apenas nos hotéis do mesmo cliente que o Hotel XPTO. Esta função também só pode ser usada pelos utilizadores dos hotéis que pertencem ao mesmo cliente que o Hotel XPTO.

Funções de Utilizadores criados por administradores são gerais para o sistema. Elas não estão associadas a qualquer contexto (cliente ou hotel), exceto se um administrador definir um cliente específico para aquela função. A opção "Cliente" deve estar visível para os administradores e deve listar todos os clientes que existem no sistema.

Quando a função está a ser adicionada, a opção "Histórico de Alterações" não está visível, apenas no modo de edição.

O painel deve validar as Permissões do Utilizador e mostrar a informação de acordo com isso.

O utilizador clica no botão "Atualizar" para preencher o formulário com a informação atualizada. Antes de ser atualizado, o utilizador é avisado que todas as alterações serão perdidas.

### RF 1.3 Eliminar Funções

**Requisito Funcional**

É possível eliminar uma ou mais funções de Gestor de Contas.

**Critérios de Aceitação**

Uma função de Gestor de Conta ou de Utilizador apenas pode ser eliminada se não estiver associada a nenhum Gestor de Conta ou Utilizador.
Se o utilizador tentar eliminar várias funções e, por qualquer razão, uma falhar, a ação deve ser revertida. Isso significa que se a eliminação de um registo falhar, todos os outros também não são eliminados.

O painel deve validar as permissões do utilizador e mostrar a informação de acordo com isso.

## Impacto das Permissões nos Painéis

**Requisito Funcional**

De acordo com as permissões de utilizador, algumas ações devem estar habilitadas ou desabilitadas nos painéis.

**Critérios de Aceitação**

| **Tipo**                                                                                       | **Painel**                                                                                             | **Impacto**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LER** **Permite ao utilizador visualizar o conteúdo da página (lista e detalhe)**            | LISTA                                                                                                  | Na barra de ferramentas, os botões "Histórico de Alterações" e "Consultar" apenas ficam visíveis se um único item for selecionado. Os botões "Criar Novo", "Editar", "Ação Adicional" (obter URLs, compartilhar, etc.) e "Eliminar" não devem estar visíveis. Em cada linha, as opções "Editar" e "Eliminar" não devem estar visíveis e devem ser substituídas pela opção de visualizar. Os registos removidos da lista devem estar disponíveis para consulta.                                                                                                                                                                                                                                      |
|                                                                                                | PÁGINA DE DETALHES O registo removido da lista deve estar disponível para consulta                     | O painel deve sempre ser aberto apenas em modo de leitura. Na barra de ferramentas, os botões "Voltar" e "Histórico de Alterações" devem estar visíveis. O botão "Voltar" encaminha o utilizador para a página de lista. Os _links_ e botões que dão acesso ao painel direito e páginas de detalhe devem estar ativados. O conteúdo do painel direito deve ser mostrado apenas em modo de leitura, sem os botões "Salvar" e "Cancelar". O conteúdo da página de "Detalhes" deve ser mostrado apenas em modo de leitura e os botões "Salvar" e "Cancelar" devem ser substituídos pelo botão "Voltar".                                                                                                                                                                                                                                                                                                      |
|                                                                                                | PÁGINA DE CONFIGURAÇÃO ÚNICA (ou seja, controlo de disponibilidade, configurações do BE do hotel, etc) | O painel deve sempre ser aberto apenas em modo de leitura. Na barra de ferramentas, os botões "Fechar" e "Histórico de Alterações" devem estar visíveis. O botão "Fechar" fecha a _tab_. Os _links_ e botões que dão acesso ao painel direito e páginas de detalhe devem estar ativados. O conteúdo do painel direito deve ser mostrado apenas em modo de leitura, sem os botões "Salvar" e "Cancelar". O conteúdo da página de "Detalhes" deve ser mostrado apenas em modo de leitura e os botões "Salvar" e "Cancelar" devem ser substituídos pelo botão "Voltar".                                                                                                                                                                                                                                                                                                                                            |
| **ADICIONAR** **Permite ao utilizador criar um novo registo**                                  | LISTA                                                                                                  | Na barra de ferramentas, o botão "Criar Novo" deve estar sempre visível. Os botões "Visualizar" e "Histórico de Alterações" devem estar visíveis apenas se um item for selecionado. Os botões "Editar", "Ação Adicional" (obter URLs, compartilhar, etc.) e "Eliminar" não devem estar visíveis. Em cada linha, as opções "Editar" e "Eliminar" não devem estar visíveis e devem ser substituídas pela opção de visualizar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                                                                                | DETALHE                                                                                                | Quando o utilizador adiciona um novo registo, o painel deve ser aberto no modo de edição. Na barra de ferramentas, devem estar incluídos os botões "Salvar", "Cancelar" e "Histórico de Alterações". O botão "Salvar" encaminha o utilizador para a página da lista. Se o utilizador não fizer nenhuma alteração, o botão "Cancelar" encaminha-o para a página da lista. Caso o utilizador tenha feito alguma alteração no registo, o botão "Cancelar" acionará um _pop-up_ de alerta informando que todas as alterações serão perdidas. Se o utilizador confirmar, é encaminhado para a página da lista; caso contrário, fica na mesma página. O utilizador consegue aceder aos registos existentes, mas o painel deve ser aberto apenas no modo de leitura. Na barra de ferramentas, os botões "Cancelar" e "Histórico de Alterações" devem estar incluídos e as regras mencionadas acima devem ser aplicadas. |
|                                                                                                | PÁGINA DE CONFIGURAÇÃO ÚNICA (ou seja, controlo de disponibilidade, configurações do BE do hotel, etc) | O painel deve ser aberto em modo de edição. Na barra de ferramentas, os botões "Salvar", "Fechar" e "Histórico de Alterações" devem estar visíveis. Se o utilizador não fizer nenhuma alteração, o botão "Fechar" fecha a _tab_. Caso o utilizador tenha feito alguma alteração no registo, o botão "Cancelar" acionará um _pop-up_ de alerta informando que todas as alterações serão perdidas. Se o utilizador confirmar, é encaminhado para a página da lista; caso contrário, fica na mesma página. O utilizador pode salvar as alterações que fizer.                                                                                                                                                                                                                                                                                                                                                |
| **ATUALIZAR** **Permite ao utilizador alterar registos previamente criados (já existentes)**   | LISTA                                                                                                  | Na barra de ferramentas, os botões "Histórico de Alterações" e "Editar" devem estar visíveis apenas se um único item for selecionado. Os botões "Criar Novo", "Ação Adicional" (obter URLs, compartilhar, etc.) e "Eliminar" não devem estar visíveis. Em cada linha, a opção de "Editar" deve estar visível; no entanto, a opção "Eliminar" não deve estar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|                                                                                                | DETALHE                                                                                                | O painel deve ser aberto no modo de edição. Na barra de ferramentas, os botões "Salvar", "Cancelar" e "Histórico de Alterações" devem estar incluídos. O botão "Salvar" encaminha o utilizador para a página de lista. Se o utilizador não fizer nenhuma alteração no registo, o botão "Cancelar" encaminha-o para a página de lista. Caso o utilizador tenha feito alguma alteração no registo, o botão "Cancelar" acionará um _pop-up_ de alerta informando que todas as alterações serão perdidas. Se o utilizador confirmar, é encaminhado para a página da lista; caso contrário, fica na mesma página.                                                                                                                                                                                                                                                                                             |
|                                                                                                | PÁGINA DE CONFIGURAÇÃO ÚNICA (ou seja, controlo de disponibilidade, configurações do BE do hotel, etc) | O painel deve ser aberto em modo de edição. Na barra de ferramentas, os botões "Salvar", "Fechar" e "Histórico de Alterações" devem estar visíveis. Se o utilizador não fizer nenhuma alteração, o botão "Fechar" fecha a _tab_. Caso o utilizador tenha feito alguma alteração no registo, o botão "Cancelar" acionará um _pop-up_ de alerta informando que todas as alterações serão perdidas. Se o utilizador confirmar, é encaminhado para a página da lista; caso contrário, fica na mesma página. O utilizador pode salvar as alterações que fizer.                                                                                                                                                                                                                                                                                                                                               |
| **ELIMINAR** **Permite ao utilizador eliminar um ou mais registos**                            | LISTA                                                                                                  | Na barra de ferramentas, o botão "Eliminar" deve estar visível se um ou vários itens forem selecionados. O botão "Histórico de Alterações" deve estar visível apenas se um único item for selecionado. Os botões "Criar Novo", "Editar", "Exportar" e "Ação Adicional" (obter URLs, compartilhar, etc.) não devem estar visíveis. Em cada linha, o botão "Eliminar" deve estar visível; no entanto, o botão "Editar" não deve estar.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                | DETALHE                                                                                                | O utilizador consegue aceder aos registos existentes; no entanto, o painel deve ser aberto somente no modo de leitura e todas as regras acima mencionadas no detalhe da permissão de leitura devem ser aplicadas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                                                                                                | PÁGINA DE CONFIGURAÇÃO ÚNICA (ou seja, controlo de disponibilidade, configurações do BE do hotel, etc) | O painel deve ser aberto apenas no modo de leitura e todas as regras acima mencionadas no detalhe da permissão de leitura devem ser aplicadas.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **EXECUTAR** **Permite ao utilizador executar ações nos registos, como exportar uma lista.** | LISTA                                                                                                  | Na barra de ferramentas, o botão "Exportar" deve estar sempre visível. As ações adicionais (obter URLs, compartilhar, etc.) e "Histórico de Alterações" devem estar visíveis apenas se um único item for selecionado. Os botões "Criar Novo", "Editar" e "Eliminar" não devem estar visíveis. Em cada linha, as opções "Editar" e "Eliminar" não devem estar visíveis e devem ser substituídas pela opção de Visualizar.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                | DETALHE                                                                                                | O painel deve ser sempre aberto apenas em modo de leitura. Na barra de ferramentas, os botões "Ações Adicionais" (obter URLs, compartilhar, etc.), "Voltar" e "Histórico de Alterações" devem estar visíveis. O botão "Voltar" encaminha o utilizador para a página da lista.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|                                                                                                | PÁGINA DE CONFIGURAÇÃO ÚNICA (ou seja, controlo de disponibilidade, configurações do BE do hotel, etc) | O painel deve ser sempre aberto apenas em modo de leitura. Na barra de ferramentas, os botões "Ações Adicionais" (obter URLs, compartilhar, etc.), "Fechar" e "Histórico de Alterações" devem estar visíveis. O botão "Fechar" fecha a _tab_.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Histórico

### Histórico de alterações e referências:

| Data da alteração | Owner | Referência de alteração | Observações |
|-------------------|-------|-------------------------|-------------|
| 04-09-2025        | N8N   | -                       | Conversão da documentação para Docusaurus |
| 06-09-2022        | Ana Antunes | Feature [O-743](https://omnibees.aha.io/features/O-743) | disponibilizar o acesso ao menu de permissões de gestor de conta tanto para extranet como para Omnibees |
```