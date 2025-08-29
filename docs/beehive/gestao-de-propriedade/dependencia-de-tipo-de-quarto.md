---
sidebar_label: Dependência de Tipos de Quarto
title: Dependência de Tipos de Quarto
description: Este documento descreve a funcionalidade de dependência de tipos de quarto, permitindo configurar a ligação de preços entre um tipo de quarto base e outros tipos de quarto, com ajustes de valor fixo ou percentagem para todas as moedas do hotel.
slug: /beehive/gestao-de-propriedade/dependencia-de-tipo-de-quarto
---

# Dependência de Tipos de Quarto

A dependência de tipos de quarto cria uma dependência de preços entre os tipos de quarto do hotel.

É possível configurar a dependência de preços entre tipos de quarto do hotel.

![Dependência Tipos de Quarto](</assets/beehive/gestao-de-propriedade/dependencia-de-tipo-de-quarto/Dependência Tipos de Quarto.png> "Dependência Tipos de Quarto")

| **Campo**                                 | **Obrigatório?** |
| ----------------------------------------- | ---------------- |
| **Tipo de Quarto Base**                   | N                |
| **Lista de Tipos de Quartos Dependentes** | N                |
| **Tipo de Quarto**                        | S                |
| **Lista de Moedas da Propriedade**        | S                |
| **Moeda**                                 | S                |
| **Valor**                                 | S                |

Só pode haver um tipo de quarto base.

Depois de selecionar o tipo de quarto base, o utilizador escolhe quais os outros tipos de quarto que o preço dependa do tipo de quarto base.

O tipo de quarto base não pode estar incluído na lista de tipos de quarto dependentes.

Definir a dependência de um tipo de quarto requer configurar um valor para aumentar/diminuir o preço. O valor é decimal com duas casas decimais e pode ser em percentagem ou valor fixo/absoluto. O ecrã deve ter as opções de moeda e de aumento selecionadas por padrão (default), e o valor deve ser maior ou igual a zero.

Independentemente de o valor ser em percentagem ou fixo, é obrigatório configurá-lo em todas as moedas do hotel.

Esses valores de dependência serão usados para definir automaticamente os preços padrão para os tipos de quarto dependentes na secção "Atualização de Tarifas e Disponibilidade", após definir o preço do tipo de quarto base.

Quando é alterado o tipo de quarto base, se o utilizador selecionar outro tipo de quarto que já esteja na lista de tipos de quartos dependentes, o sistema pergunta se o utilizador pretende alterar o tipo de quarto base. Se sim, o novo tipo de quarto base é removido da lista de quartos dependentes e o tipo de quarto base antigo é reposto para que possa ser usado como tipo de quarto dependente.

## Histórico

### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 14-01-2025 | Miriam Barboza | [O-2814](https://omnibees.aha.io/features/O-2814), [O-2812](https://omnibees.aha.io/features/O-2812) | - Não permitir que o utilizador repita as últimas 4 palavras-passe; - Aumentar o tamanho da palavra-passe de 10 para 12 caracteres |
| 16-02-2023 | Hélder Araújo | Atualização: [https://omnibees.aha.io/features/O-1663](https://omnibees.aha.io/features/O-1663) | Whitelabel Extranet – Limitar lista de propriedades à extranet em contexto |
| 16-12-2022 | Ana Antunes | - | Para Migração da documentação |