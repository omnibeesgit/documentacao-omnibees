Com prazer, colega! Com 20 anos de experiência lapidando documentos técnicos para plataformas como o Docusaurus, entendo perfeitamente a importância da clareza, precisão e, claro, da boa gramática, sem abrir mão da estrutura original.

Vamos otimizar este documento.

---

```markdown
---
sidebar_label: Dependência de Tipos de Quarto
title: Dependência de Tipos de Quarto
description: Este documento descreve a funcionalidade de Dependência de Tipos de Quarto, que permite configurar e gerenciar a interligação de preços entre diferentes tipos de quarto de hotel. Ele detalha a configuração de valores de ajuste (percentual ou fixo) e como esses preços são automaticamente definidos.
slug: /dependencia-de-tipos-de-quarto
---

# Dependência de Tipos de Quarto

A funcionalidade **Dependência de Tipos de Quarto** cria uma dependência de preços entre os tipos de quarto do hotel, permitindo configurar como o preço de um tipo de quarto pode ser influenciado por outro.

![Dependência Tipos de Quarto.png](./Documentação Produto - Dependencia de tipos de quarto_files/Dependência Tipos de Quarto.png)

## Campos de Configuração

A tabela a seguir detalha os campos disponíveis para a configuração da dependência:

| **Campo**                                 | **Obrigatório?** |
| ----------------------------------------- | ---------------- |
| **Tipo de Quarto Base**                   | N                |
| **Lista de Tipos de Quartos Dependentes** | N                |
| **Tipo de Quarto**                        | S                |
| **Lista de Moedas da Propriedade**        | S                |
| **Moeda**                                 | S                |
| **Valor**                                 | S                |

:::warning Restrição de Tipo de Quarto Base
Só pode haver um **Tipo de Quarto Base** configurado por vez para a dependência.
:::

Após selecionar o **Tipo de Quarto Base**, o usuário escolhe quais outros tipos de quarto terão seu preço dependente dele.

:::danger Exclusão Obrigatória
O **Tipo de Quarto Base** não pode estar incluído na lista de tipos de quarto dependentes.
:::

## Definição de Valores de Dependência

Para definir a dependência de um tipo de quarto, é necessário configurar um valor para aumentar ou diminuir o preço. Este valor é decimal, com duas casas decimais, e pode ser expresso em percentagem ou como um valor fixo/absoluto. A tela de configuração deve apresentar as opções de moeda e de aumento selecionadas por padrão, e o valor configurado deve ser maior ou igual a zero.

:::tip Exemplos de Configuração de Valor
Para um ajuste de preço, você pode configurar:
*   **Em percentagem:** `+10%` ou `-5%`
*   **Valor fixo/absoluto:** `+50.00` ou `-20.00`
:::

:::important Requisito de Moedas
Independentemente de o valor ser em percentagem ou fixo, é obrigatório configurá-lo em todas as moedas do hotel.
:::

## Aplicação dos Preços

Esses valores de dependência serão utilizados para definir automaticamente os preços-padrão dos tipos de quarto dependentes na seção de *Atualização de Tarifas e Disponibilidade*, após a definição do preço do **Tipo de Quarto Base**.

## Alteração do Tipo de Quarto Base

:::info Comportamento do Sistema ao Alterar o Tipo de Quarto Base
Quando o **Tipo de Quarto Base** é alterado e o usuário seleciona um novo tipo de quarto que já esteja na lista de tipos de quartos dependentes, o sistema perguntará se ele deseja realmente alterar o **Tipo de Quarto Base**.

*   **Caso afirmativo:** O novo **Tipo de Quarto Base** é removido automaticamente da lista de quartos dependentes, e o **Tipo de Quarto Base** antigo é restaurado para que possa ser utilizado como um tipo de quarto dependente.
:::
```