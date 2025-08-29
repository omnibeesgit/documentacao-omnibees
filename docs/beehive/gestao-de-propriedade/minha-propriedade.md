---
sidebar_label: Minha Propriedade
title: Minha Propriedade
description: Este documento detalha a visualização e atualização das informações de propriedade para utilizadores do tipo "Utilizador", cobrindo abas como Configurações, Endereço e Amenidades, além das regras de edição baseadas em permissões e o comportamento na Extranet.
slug: /beehive/gestao-de-propriedade/minha-propriedade
---

# Minha Propriedade

**Requisito Funcional**

Neste painel, é possível visualizar e atualizar a informação da propriedade do utilizador. Este painel está disponível apenas para utilizadores do tipo "Utilizador".

**Critérios de Aceitação**

A informação da propriedade é a mesma que foi referida em "Adicionar Propriedade", mas inclui apenas as seis seguintes abas:

*   Configurações
    *   Estão excluídos os campos "Demo" e "Em Implantação".
*   Endereço
*   Contactos
*   Outras Informações
*   Amenidades
*   Fotos

(Estão excluídas as abas "Gestores de Conta", "Empresa", "Faturação" e "Contas de Email").

Para um utilizador com permissões de edição, as seguintes regras aplicam-se:

*   **Configurações** - todos os campos estão em modo de apenas leitura, excetuando a "Descrição" e o "Logotipo".
*   **Endereço** - todos os campos estão em modo de apenas leitura, excetuando as "Instruções de Chegada".
*   **Restantes abas** - todos os campos estão editáveis.

Para um utilizador sem permissões de edição, a seguinte regra aplica-se:

*   Todos os campos de todas as abas estão em modo de apenas leitura.

## Ecrã Minha Propriedade na Extranet

Em Extranet:

*   Caso a propriedade seja Omnibees, todos os campos estão em modo de apenas leitura, independentemente das permissões do utilizador.
*   Para propriedades da Extranet em contexto, esta está disponível e editável conforme as permissões.

## Histórico

### Histórico de alterações e referências

| Data da alteração | Owner | Referência de alteração | Observações |
|---|---|---|---|
| 29-08-2025 | N8N | - | Conversão da documentação para Docusaurus |
| 14-01-2025 | Miriam Barboza | [O-2814](https://omnibees.aha.io/features/O-2814), [O-2812](https://omnibees.aha.io/features/O-2812) | - Não permitir que o utilizador repita as últimas 4 palavras-passe; - Aumentar o tamanho da palavra-passe de 10 para 12 caracteres |
| 16-02-2023 | Hélder Araújo | Atualização: [https://omnibees.aha.io/features/O-1663](https://omnibees.aha.io/features/O-1663) | Whitelabel Extranet – Limitar lista de propriedades à extranet em contexto |
| 16-12-2022 | Ana Antunes | - | Para Migração da documentação |