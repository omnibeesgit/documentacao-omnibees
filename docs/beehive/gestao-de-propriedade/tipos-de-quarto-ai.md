---
title: Tipos de Quarto AI
description: Gestão e categorização dos tipos de alojamento disponíveis no sistema.
slug: /beehive/gestao-de-propriedade/tipos-de-quarto-ai
sidebar_label: Tipos de Quarto AI
sidebar_position: 1
---

# Tipos de Quarto

## 1. Identificação da Funcionalidade

*   **Título**: Tipos de Quarto
*   **Página/Localização**: `docs/beehive/gestao-de-propriedade/tipos-de-quarto-ai.md`
*   **Responsável (PO)**: TODO
*   **Última atualização**: TODO

## 2. Descrição Geral

A funcionalidade "Tipos de Quarto" permite aos utilizadores definir e gerir as diversas categorias de alojamento disponíveis na propriedade. Esta é essencial para organizar e disponibilizar os quartos de forma eficiente, associando características específicas a cada tipo, como nome, capacidade, estado e ordem de apresentação.

## 3. Objetivo da Funcionalidade

O sistema permite que o utilizador crie, edite e elimine tipos de quarto.
O utilizador define as características de cada tipo de alojamento, como nome, capacidade máxima, estado de disponibilidade e ordem de apresentação.
O sistema assegura a consistência dos dados ao validar as operações de criação, edição e eliminação de tipos de quarto com base em regras de negócio.

## 4. Fluxo do Utilizador

### 4.1. Criar novo Tipo de Quarto

1.  O utilizador acede ao menu `Gestão de Propriedade > Tipos de Quarto`.
2.  O utilizador clica no botão `Adicionar novo Tipo de Quarto`.
3.  O sistema apresenta um formulário para preenchimento dos dados do novo tipo de quarto.
4.  O utilizador preenche os campos: **Nome**, **Capacidade**, **Estado** (Ativo/Inativo) e **Ordem**.
5.  O utilizador clica em `Guardar`.
6.  O sistema valida os dados e, em caso de sucesso, guarda o novo tipo de quarto e apresenta-o na lista.

### 4.2. Editar Tipo de Quarto existente

1.  O utilizador acede ao menu `Gestão de Propriedade > Tipos de Quarto`.
2.  O sistema apresenta uma lista dos tipos de quarto existentes.
3.  O utilizador localiza o tipo de quarto pretendido na lista e clica no ícone de edição (lápis).
4.  O sistema apresenta o formulário com os dados pré-preenchidos do tipo de quarto selecionado.
5.  O utilizador altera os campos necessários (Nome, Capacidade, Estado, Ordem).
6.  O utilizador clica em `Guardar`.
7.  O sistema valida os dados e, em caso de sucesso, atualiza o tipo de quarto e apresenta a lista com as alterações.

### 4.3. Eliminar Tipo de Quarto

1.  O utilizador acede ao menu `Gestão de Propriedade > Tipos de Quarto`.
2.  O sistema apresenta uma lista dos tipos de quarto existentes.
3.  O utilizador localiza o tipo de quarto pretendido e clica no ícone de eliminação (caixote do lixo).
4.  O sistema apresenta uma caixa de diálogo para confirmação da eliminação.
5.  O utilizador confirma a eliminação.
6.  O sistema verifica as regras de negócio para eliminação.
7.  Se as regras forem cumpridas, o sistema remove o tipo de quarto da lista e apresenta uma mensagem de sucesso. Caso contrário, o sistema apresenta uma mensagem de erro e o tipo de quarto permanece na lista.

## 5. Regras de Negócio

*   **RB001**: Um tipo de quarto não pode ser eliminado se estiver associado a quartos existentes na propriedade.
*   **RB002**: Um tipo de quarto não pode ser eliminado se estiver associado a reservas ativas.
*   **RB003**: O campo "Nome" é de preenchimento obrigatório, deve ser único no sistema e ter um mínimo de 3 caracteres.
*   **RB004**: O campo "Capacidade" é de preenchimento obrigatório e deve ser um número inteiro positivo (mínimo 1).
*   **RB005**: O campo "Estado" é de preenchimento obrigatório, permitindo selecionar entre "Ativo" e "Inativo".
*   **RB006**: O campo "Ordem" é de preenchimento obrigatório e deve ser um número inteiro positivo, definindo a ordem de apresentação nas listagens (ex: 1, 2, 3...).

## 6. Campos e Componentes da Interface

| Campo/Elemento | Tipo | Descrição | Regras/Validações |
| :------------- | :--- | :---------- | :---------------- |
| Nome | Texto | Nome descritivo do tipo de quarto. | Obrigatório, único, mínimo 3 caracteres. Ex: "Quarto Duplo", "Suite Familiar". |
| Capacidade | Numérico (Inteiro) | Número máximo de ocupantes permitido para este tipo de quarto. | Obrigatório, número inteiro positivo (>= 1). |
| Estado | Seleção (Dropdown/Toggle) | Define se o tipo de quarto está disponível e pode ser utilizado. | Obrigatório, valores: "Ativo", "Inativo". |
| Ordem | Numérico (Inteiro) | Número que define a prioridade ou ordem de apresentação nas listagens. | Obrigatório, número inteiro positivo (>= 1). |
| Botão "Adicionar novo Tipo de Quarto" | Ação | Inicia o processo de criação de um novo tipo de quarto. | Visível apenas com permissão de criação. |
| Botão "Guardar" | Ação | Submete os dados do formulário de criação/edição. | Ativo apenas quando todos os campos obrigatórios estão preenchidos e válidos. |
| Ícone "Editar" (lápis) | Ação | Permite aceder ao formulário de edição de um tipo de quarto existente. | Visível para cada item da lista, com permissão de edição. |
| Ícone "Eliminar" (caixote do lixo) | Ação | Permite iniciar o processo de eliminação de um tipo de quarto. | Visível para cada item da lista, com permissão de eliminação. Submetido às regras de negócio RB001 e RB002. |

## 7. Cenários e Casos de Uso

### 7.1. Caso de Sucesso: Criação de um novo tipo de quarto válido

*   **Pré-condições**: O utilizador tem permissão para criar tipos de quarto. Não existe um tipo de quarto com o nome "Quarto Familiar".
*   **Passos**:
    1.  O utilizador navega para a secção "Tipos de Quarto".
    2.  O utilizador clica em "Adicionar novo Tipo de Quarto".
    3.  O utilizador preenche os campos: "Nome" = "Quarto Familiar", "Capacidade" = "4", "Estado" = "Ativo", "Ordem" = "3".
    4.  O utilizador clica em "Guardar".
*   **Resultado esperado**: O sistema apresenta uma mensagem de sucesso ("Tipo de Quarto criado com sucesso!"), e o "Quarto Familiar" é adicionado à lista de tipos de quarto, aparecendo como ativo e com capacidade para 4 pessoas.

### 7.2. Caso de Erro: Tentativa de eliminação de tipo de quarto em uso

*   **Pré-condições**: Existe um tipo de quarto "Quarto Single" que está associado a pelo menos um quarto registado no sistema ou a uma reserva ativa. O utilizador tem permissão para eliminar tipos de quarto.
*   **Passos**:
    1.  O utilizador navega para a secção "Tipos de Quarto".
    2.  O utilizador clica no ícone "Eliminar" junto ao "Quarto Single".
    3.  O utilizador confirma a eliminação na caixa de diálogo.
*   **Resultado esperado**: O sistema apresenta uma mensagem de erro ("Não é possível eliminar o tipo de quarto, pois está associado a quartos existentes ou reservas ativas."), e o tipo de quarto "Quarto Single" permanece inalterado na lista.

### 7.3. Caso de Exceção: Falha na validação do campo "Nome" ao criar

*   **Pré-condições**: O utilizador tem permissão para criar tipos de quarto.
*   **Passos**:
    1.  O utilizador navega para a secção "Tipos de Quarto".
    2.  O utilizador clica em "Adicionar novo Tipo de Quarto".
    3.  O utilizador preenche os campos: "Nome" = "", "Capacidade" = "2", "Estado" = "Ativo", "Ordem" = "1".
    4.  O utilizador clica em "Guardar".
*   **Resultado esperado**: O sistema apresenta uma mensagem de erro junto ao campo "Nome" ("O nome do tipo de quarto é obrigatório.") e não permite guardar o novo tipo de quarto. O formulário permanece aberto com os dados preenchidos (exceto o campo inválido).

## 8. Dependências

*   **APIs**:
    *   `POST /api/room-types`: Criação de tipos de quarto.
    *   `GET /api/room-types`: Listagem de tipos de quarto.
    *   `GET /api/room-types/{id}`: Obtenção de detalhes de um tipo de quarto específico.
    *   `PUT /api/room-types/{id}`: Atualização de tipos de quarto.
    *   `DELETE /api/room-types/{id}`: Eliminação de tipos de quarto.
*   **Permissões**:
    *   `PermissionCode 5040`: Aceder à funcionalidade de gestão de Tipos de Quarto.
    *   `PermissionCode 5041`: Criar Tipos de Quarto.
    *   `PermissionCode 5042`: Editar Tipos de Quarto.
    *   `PermissionCode 5043`: Eliminar Tipos de Quarto.
*   **Integrações**: Não são conhecidas integrações externas diretas.
*   **Dados necessários**:
    *   Registos de quartos existentes no sistema para validação da eliminação.
    *   Registos de reservas ativas para validação da eliminação.

## 9. KPIs e Métricas Associadas

TODO

## 10. Notas e Observações

:::tip
A "Ordem" de apresentação é um campo importante para a experiência do utilizador, pois define a sequência em que os tipos de quarto são exibidos em listas e formulários de seleção (ex: na criação de uma reserva). Recomenda-se manter uma ordem lógica e intuitiva.
:::

## 11. Histórico

| Data | Owner | Observação |
| :--- | :---- | :--------- |
| 2023-10-26 | N8N | Criação do documento |
| 2023-11-02 | N8N | Adição da secção "Regras de Negócio" para eliminação |
| 2024-05-15 | N8N | Padronização da documentação via AI |

### UI/UX

| Componente | Observações |
| :--------- | :---------- |
| Botões | `Adicionar novo Tipo de Quarto`, `Guardar`, `Editar`, `Eliminar`, `Cancelar` (assumido) |
| Campos | `Nome`, `Capacidade`, `Estado` (dropdown/toggle), `Ordem` |
| Ícones | Lápis (edição), Caixote do lixo (eliminação) |
| Listagens | Tabela com tipos de quarto, permitindo ordenação e pesquisa (assumido) |