```markdown
---
sidebar_label: Tarifas: Lista e Criação de Tarifas/Pacotes
title: Tarifas: Lista e Criação de Tarifas/Pacotes
description: Este documento detalha a criação e gestão de tarifas e pacotes no sistema Omnibees, cobrindo configurações de detalhes principais, períodos de venda, mercados, tipos de quarto, canais, extras, ofertas, políticas e taxas, além do fluxo de criação e edição.
slug: /beehive/tarifas-e-disponibilidade/tarifas/criacao-de-tarifas
---

# Tarifas: Lista e Criação de Tarifas/Pacotes

Criar e editar tarifas e/ou pacotes é uma das características mais importantes do sistema.

A criação dos planos tarifários incluirá a configuração de todos os dados das tarifas, exceto datas, preços e _allotment_, que serão configurados e geridos noutras páginas do Omnibees.
A configuração de uma tarifa inclui:

*   Nome do Tarifário/Pacote
*   Nome Comercial do Tarifário/Pacote
*   Descrição
*   Tipo de Tarifário (Net ou Comissionável)
*   Moeda
*   Tipo de Disponibilidade (Tarifário, Tarifário com Impacto no Inventário ou Apartamento)
*   Categoria do Tarifário (Geral/Balcão, Promoção, Grupo, Empresa, Fim de semana, etc.)
*   Período de Venda (Início e Término da Venda)
*   Mercado
*   Tipos de Quarto
*   Canais e Operadoras Bee2Bee HoteisNet
*   Agências e Empresas
*   Extras Incluídos ou Extras Adicionais
*   Ofertas
*   Políticas Gerais, Políticas de Cancelamento, Políticas de Depósito/Garantia ou Taxas

Os pacotes são um tipo específico de tarifário e têm praticamente as mesmas configurações, com exceção de alguns campos.
O campo de Categoria do Tarifário não está disponível em Pacotes e os campos Período do Pacote, Imagem e Anexo são campos disponíveis apenas em Pacotes.

## Lista de Tarifas/Pacotes

São listadas por padrão apenas as Tarifas, Pacotes e Derivadas no estado ativo do hotel em contexto. Porém, se houver uma derivada ativa que tenha a tarifa mãe inativa, a tarifa mãe será listada na mesma, para que a hierarquia não seja perdida.

Para visualizar todas as Tarifas, Pacotes e Derivadas, independentemente do estado (ativas e inativas), é possível desabilitar a opção "Mostrar apenas tarifários ativos".

![Listagem Tarifas_apenas ativas](</assets/beehive/tarifas-e-disponibilidade/tarifas/criacao-de-tarifas/Listagem Tarifas_apenas ativas.png> "Listagem Tarifas_apenas ativas")

É possível criar pastas. As pastas permitem ao utilizador organizar as suas tarifas ou pacotes de acordo com os seus critérios específicos.

O utilizador pode agrupar e pesquisar pelas suas tarifas e pacotes. É possível agrupar por tarifa, por tipo de quarto, por canal ou por nível de fidelização.

Quando agrupado por Tarifa, a lista contém as seguintes informações:

*   Nome da pasta (se aplicável)
*   Ícone do estado da Tarifa ou Pacote (círculo verde ou vermelho)
*   Nome da Tarifa ou Pacote e as suas derivadas abaixo na hierarquia

Quando agrupado por Tipo de Quarto, a lista contém as seguintes informações:

*   Nome do Tipo de Quarto
*   Ícone do estado da Tarifa ou Pacote (círculo verde ou vermelho)
*   Nome da Tarifa, Pacote ou Derivada

Quando agrupado por Canal, a lista contém as seguintes informações:

*   Nome do Canal
*   Ícone do estado da Tarifa ou Pacote (círculo verde ou vermelho)
*   Nome da Tarifa, Pacote ou Derivada

De modo a facilitar a gestão do programa de fidelização do hotel, quando o utilizador visualiza as tarifas do hotel, pode agrupá-las por nível de fidelização.
Quando agrupado por Nível de Fidelização é selecionado, a lista contém as seguintes informações:
*   Nome do Nível de Fidelização
*   Ícone do estado da Tarifa ou Pacote (círculo verde ou vermelho)
*   Nome da Tarifa, Pacote ou Derivada

Ao agrupar por Tipo de Quarto, por Canal ou por Programa de Fidelização, as tarifas, pacotes e derivadas são mostradas numa estrutura sem hierarquia e não é possível criar pastas.

Se não existir programa de fidelização configurado no hotel, a opção de agrupar por Nível de Fidelização não deve ser mostrada. Ao agrupar por Nível de Fidelização, apenas são mostradas as tarifas/pacotes que tenham um nível de fidelização associado. Se existir algum nível de fidelização que não tenha nenhuma tarifa/pacote associado, esse nível não deve ser mostrado na lista.

Na lista de tarifas/pacotes (no _hover_ da tarifa/pacote), são mostradas as informações sobre a moeda da tarifa e o tipo de disponibilidade da tarifa (ambos num formato de ícone). O ícone do tipo de disponibilidade da tarifa apenas é mostrado se o hotel trabalhar com tipo de disponibilidade Misto (configuração definida em Gestão de Propriedade > Outras Definições), pois se o hotel trabalhar com tipo de disponibilidade Tarifa ou Quarto, todas as tarifas terão o mesmo tipo de disponibilidade configurado e não existe a necessidade de o mostrar.

Os ícones para a moeda e para o tipo de disponibilidade da tarifa devem incluir uma mensagem (no _hover_ dos ícones) a informar o significado de cada um. Para os ícones possíveis do tipo de disponibilidade da tarifa são mostradas as seguintes informações:

*   Para o ícone TA - Tipo de Disponibilidade: Tarifa
*   Para o ícone AP - Tipo de Disponibilidade: Quarto
*   Para o ícone TI - Tipo de Disponibilidade: Tarifa com impacto no Inventário

O ícone Fonte externa deve incluir uma dica de ferramenta com as seguintes informações "Item criado em um sistema externo Omnibees".

É possível ainda pesquisar tarifas ou pacotes por nome da tarifa, nome do quarto, canal/operadora, agências/postos/empresas, PCC e por nível de fidelização. Isto significa que todas as tarifas ou pacotes que tenham correspondência ao que for inserido na pesquisa para qualquer uma das configurações mencionadas anteriormente, devem ser mostradas nos resultados de pesquisa. A lista de resultados de pesquisa deve manter a hierarquia das tarifas, o que significa que se uma derivada for mostrada por corresponder à pesquisa feita, as suas tarifas mãe também serão mostradas mesmo que não correspondam à pesquisa.

A lista de tarifas/pacotes pode ser ordenada com as mais recentes no topo, as mais antigas no topo, alfabeticamente de A-Z ou alfabeticamente de Z-A. A ordenação deve ser aplicada dentro de cada nível de hierarquia independentemente da agrupação que a lista de tarifas tenha.

As ações adicionais (representadas no sistema pelo botão ⁝ ) devem ser visíveis no _hover_ ou quando uma tarifa, pacote ou derivada está selecionada.

As possíveis ações adicionais são:

*   Criar Tarifa Derivada - É possível criar uma tarifa derivada de uma tarifa ou pacote ativo ou inativo.
*   Criar Pacote Derivado - É possível criar uma tarifa derivada de uma tarifa ou pacote ativo ou inativo.
*   Editar (apenas no _hover_ da tarifa, pacote ou derivada)
*   Eliminar (apenas no _hover_ da tarifa, pacote ou derivada)
*   Ativar/Desativar Tarifa (apenas no _hover_ da tarifa, pacote ou derivada)
*   Compartilhar
*   URL do Motor de Reservas
*   Histórico de Alterações

Ao aceder ao ecrã de Configuração de Tarifas/Pacotes pela primeira vez, o sistema deve garantir que o hotel tem o Tipo de Disponibilidade definido. Caso não o tenha, ao abrir o ecrã de Configuração de Tarifas/Pacotes é mostrada uma mensagem ao utilizador a informar que é necessário configurar primeiro o Tipo de Disponibilidade do hotel para poder começar a criar as suas tarifas, juntamente com uma opção que encaminha o utilizador para o ecrã de Outras Definições. Uma vez configurado o Tipo de Disponibilidade do hotel, o utilizador pode voltar ao ecrã de Configuração de Tarifas/Pacotes, atualizar o mesmo (através do botão Atualizar) e começar a criar as suas tarifas.

Deve ser possível definir o ecrã de Configuração de Tarifas/Pacote como Favorito (é incluído no menu de navegação Favoritos e na página de Favoritos).

Em Configuração de Tarifas/Pacotes > Eliminados, é possível aceder à lista com todas as tarifas do hotel eliminadas.

A ação de "Atualizar" quando utilizada deve carregar o ecrã novamente com as informações mais recentes (que estejam guardadas).

O ecrã deve validar as Permissões do Utilizador e mostrar as informações de acordo.

## Criar Tarifas/Pacotes

Nesta página é possível criar uma tarifa/pacote (consoante a opção selecionada). O utilizador deve preencher todos os campos obrigatórios para poder guardar. Quando a operação for concluída, a tarifa ou pacote estará pronta para ser utilizada (configurar preços, restrições, fechos de venda, mapeamentos, etc.).

![Tarifas_02](</assets/beehive/tarifas-e-disponibilidade/tarifas/criacao-de-tarifas/Tarifas_02.png> "Tarifas_02")

| **Campo**                                 | **Obrigatório?**                   | **OBS**                                                                                                                                                                                                                                                    |
| ----------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Configurações**                         | N/A                                |                                                                                                                                                                                                                                                            |
| **Detalhes Principais**                   | N/A                                |                                                                                                                                                                                                                                                            |
| Nome                                      | Sim                                |                                                                                                                                                                                                                                                            |
| Nome Comercial                            | Sim                                |                                                                                                                                                                                                                                                            |
| Descrição                                 | Não                                |                                                                                                                                                                                                                                                            |
| Tipo de Tarifa                            | Sim                                | Opção selecionada como padrão: Retalho                                                                                                                                                                                                                     |
| Moeda                                     | Sim                                | Moeda selecionada por padrão: Base do hotel                                                                                                                                                                                                                |
| Tipo de Disponibilidade                   | Sim                                |                                                                                                                                                                                                                                                            |
| Categoria de Tarifa                       | Sim                                | Disponível apenas em Tarifas                                                                                                                                                                                                                               |
| Período do Pacote                         | Não                                | Disponível apenas em Pacotes                                                                                                                                                                                                                               |
|                                           |                                    |                                                                                                                                                                                                                                                            |
| **Período de venda e outras informações** | N/A                                |                                                                                                                                                                                                                                                            |
| Iniciar Venda                             | Não                                | Data selecionada por padrão: Data do dia atual                                                                                                                                                                                                             |
| Terminar Venda                            | Não                                |                                                                                                                                                                                                                                                            |
| Mercado                                   | Sim                                | Padrão: Todos os mercados selecionados                                                                                                                                                                                                                     |
| Yielding                                  | Não                                | Indisponível em Derivadas                                                                                                                                                                                                                                  |
| **Regras de Derivação**                   | N/A                                |                                                                                                                                                                                                                                                            |
| Variação do preço dos Adultos             | Sim                                | Padrão: Moeda Disponível apenas em Derivadas                                                                                                                                                                                                               |
| Variação do preço das Crianças            | Sim                                | Padrão: Moeda Disponível apenas em Derivadas                                                                                                                                                                                                               |
| Copiar restrições                         | Não                                | Padrão: opção desmarcada Disponível apenas em Derivadas                                                                                                                                                                                                    |
| Copiar Fechos/Abertura de venda           | Não                                | Padrão: opção desmarcada Disponível apenas em Derivadas                                                                                                                                                                                                    |
| Importar Preços                           | Não                                | Opção desabilitada até ser selecionado um Tipo de Disponibilidade                                                                                                                                                                                          |
| **Foto e Anexo**                          | N/A                                |                                                                                                                                                                                                                                                            |
| Foto                                      | Não                                |                                                                                                                                                                                                                                                            |
| Anexo                                     | Não                                | Tamanho máximo do anexo é 5 megas                                                                                                                                                                                                                          |
| **Tipos de Quarto**                       | N/A                                |                                                                                                                                                                                                                                                            |
| Tipos de Quarto                           | Não                                |                                                                                                                                                                                                                                                            |
| **Canais**                                | N/A                                |                                                                                                                                                                                                                                                            |
| Canais                                    | Não                                |                                                                                                                                                                                                                                                            |
| Variação de Preço                         | Não                                |                                                                                                                                                                                                                                                            |
| Tipo de Comissão                          | Sim                                | Padrão: Valores definidos na Configuração de Canais/Buyers para o canal; se não existirem valores definidos assume o valor "Comissionável" Não se aplica ao canal Motor de Reservas                                                                         |
| Comissão                                  | Sim                                | Padrão: Valores definidos na Configuração de Canais/Buyers para o canal; se não existirem valores definidos, deve ser preenchido. Deve ser maior que 0 e menor ou igual a 100. Não se aplica ao canal Motor de Reservas                                       |
| Tipos de Pagamento                        | Sim                                | Aplica-se aos canais Canal TMC e Canal Empresas. Aplica-se ao canal Motor de Reservas se o Pagamento estiver definido individualmente por tarifa. Não é obrigatório para o canal Motor de Reservas.                                                         |
| Pagamento à Vista                         | Não                                | Aplica-se apenas ao canal Motor de Reservas. Apenas disponível quando selecionado o Tipo de Pagamento Cartão de Crédito                                                                                                                                    |
| Exclusivo BE Mobile                       | Não                                | Disponível apenas para o canal Motor de Reservas                                                                                                                                                                                                           |
| **Bee2Bee HoteisNet**                     | N/A                                |                                                                                                                                                                                                                                                            |
| Operadoras Bee2Bee HoteisNet              | Não                                |                                                                                                                                                                                                                                                            |
| Variação de Preço                         | Não                                |                                                                                                                                                                                                                                                            |
| Comissionável                             | Sim                                | Padrão: Valores definidos na Configuração de Canais/Buyers para a operadora; se a operadora não tem valores definidos coloca os valores da Configuração Padrão da Configuração de Canais/Buyers. Se preenchido, deve ser maior que 0 e menor ou igual a 100. |
| Markup                                    | Sim                                | Padrão: Valores definidos na Configuração de Canais/Buyers para a operadora; se a operadora não tem valores definidos coloca os valores da Configuração Padrão da Configuração de Canais/Buyers                                                            |
| Pacote                                    | Sim                                | Padrão: Valores definidos na Configuração de Canais/Buyers para a operadora; se a operadora não tem valores definidos coloca os valores da Configuração Padrão da Configuração de Canais/Buyers                                                            |
| Tipos de Pagamento                        | Sim                                | Padrão: Faturada Pode selecionar várias. Opções Disponíveis: Cartão de Crédito, Pagamento direto no hotel, Faturada, Pré-Pagamento.                                                                                                                         |
| **Agências**                              | N/A                                |                                                                                                                                                                                                                                                            |
| Tarifa Pública                            | Não                                | Padrão: opção selecionada. Exceto Tarifa Acordo, onde o padrão é desselecionado.                                                                                                                                                                           |
| Agências                                  | Não                                |                                                                                                                                                                                                                                                            |
| GDS                                       | Não                                |                                                                                                                                                                                                                                                            |
| Direto                                    | Não                                |                                                                                                                                                                                                                                                            |
| Tipos de Garantia Sabre/Travelport        | N/A                                | Mostra os tipos de garantia definidos na configuração da Agência                                                                                                                                                                                           |
| **Empresas**                              | N/A                                |                                                                                                                                                                                                                                                            |
| Empresas                                  | Não                                |                                                                                                                                                                                                                                                            |
| Direto                                    | Não                                |                                                                                                                                                                                                                                                            |
| **Extras Incluídos**                      | N/A                                |                                                                                                                                                                                                                                                            |
| Extras                                    | Não                                |                                                                                                                                                                                                                                                            |
| Disponível para diferentes Períodos       | Não                                |                                                                                                                                                                                                                                                            |
| **Extras Adicionais**                     | N/A                                |                                                                                                                                                                                                                                                            |
| Atribuir todos os extras do hotel         | Não                                | Padrão: opção desmarcada                                                                                                                                                                                                                                   |
| Extras                                    | Não                                |                                                                                                                                                                                                                                                            |
| **Ofertas**                               | N/A                                |                                                                                                                                                                                                                                                            |
| Ofertas                                   | Não                                |                                                                                                                                                                                                                                                            |
| Acumulativo                               | Não                                | Padrão: opção desmarcada                                                                                                                                                                                                                                   |
| Período para a Reserva                    | N/A                                | Mostra as configurações da oferta para Booking Window                                                                                                                                                                                                      |
| Período de Estadia                        | N/A                                | Mostra as configurações da oferta para Stay Window                                                                                                                                                                                                         |
| **Políticas**                             | N/A                                |                                                                                                                                                                                                                                                            |
| **Políticas Gerais**                      | N/A                                |                                                                                                                                                                                                                                                            |
| Políticas Gerais                          | Não                                |                                                                                                                                                                                                                                                            |
| **Políticas de Depósito/Garantia**        | N/A                                |                                                                                                                                                                                                                                                            |
| Política de Depósito/Garantia Padrão      | Não                                |                                                                                                                                                                                                                                                            |
| Políticas de Depósito/Garantia            | Não                                |                                                                                                                                                                                                                                                            |
| Disponível para diferentes Períodos       | Sim                                | Obrigatório para as políticas atribuídas à tarifa                                                                                                                                                                                                          |
| **Políticas de Cancelamento**             | N/A                                |                                                                                                                                                                                                                                                            |
| Política de Cancelamento                  | Não                                |                                                                                                                                                                                                                                                            |
| Políticas de Cancelamento                 | Não                                |                                                                                                                                                                                                                                                            |
| Disponível para diferentes Períodos       | Sim                                | Obrigatório para as políticas atribuídas à tarifa                                                                                                                                                                                                          |
| **Taxas**                                 | N/A                                |                                                                                                                                                                                                                                                            |
| Taxas                                     | Não                                |                                                                                                                                                                                                                                                            |

### Configurações

O nome comercial e a descrição podem ser configurados em vários idiomas. O idioma padrão deve ser o idioma base da propriedade e os restantes idiomas são os suportados pelo sistema.

O nome e nome comercial devem ter no máximo 50 caracteres e a descrição no máximo 4000 caracteres.
Não é possível criar tarifas/pacotes com o mesmo nome.

Existem dois tipos de tarifa possíveis:

*   Net
*   Comissionável (opção padrão)

Por padrão, a moeda definida ao criar uma nova tarifa é a moeda base do hotel, mas é possível selecionar outra moeda dentro das moedas disponibilizadas. As moedas disponibilizadas, para além da moeda base do hotel, são todas as moedas adicionais configuradas no hotel.

Não será possível editar a moeda ao editar uma tarifa que já tenha preços definidos.

Quando o hotel tem configurado o tipo de disponibilidade Misto, o campo Tipo de Disponibilidade é mostrado na configuração da tarifa, é de preenchimento obrigatório e tem disponível as seguintes opções:

*   Tarifa - O _allotment_ definido para a tarifa será distribuído independentemente do inventário disponível.
*   Tarifa com impacto no Inventário - O _allotment_ definido para a tarifa será considerado no inventário real do hotel.
*   Quarto - A tarifa será distribuída consoante o inventário disponível.

O tipo de disponibilidade é definido na criação da tarifa e, uma vez guardado, permanece em modo leitura para sempre (não pode ser editado).

Quando o hotel tem configurado o tipo de disponibilidade Tarifa, o campo Tipo de Disponibilidade não é mostrado na configuração da tarifa e as tarifas criadas ficam com o tipo de disponibilidade como Tarifa automaticamente. O mesmo acontece quando o hotel tem configurado o tipo de disponibilidade Quarto, o campo também não é mostrado e as tarifas criadas ficam com o tipo de disponibilidade como Quarto automaticamente.

Em Categoria de Tarifa, são listadas as categorias de acordo com as informações retornadas pela API. Para pacotes, o campo Categoria de Tarifa não é mostrado, mas os pacotes são guardados na API sempre com categoria = Pacote.

A Data de Terminar Venda deve ser maior que a Data de Iniciar Venda e maior ou igual à data atual. A data de Iniciar Venda vem automaticamente preenchida com a data atual, podendo ser alterada e tem sempre de ser maior ou igual à data atual. As datas de Iniciar Venda e Terminar Venda são opcionais e são usadas para definir o período em que a tarifa estará disponível para venda no processo de reserva.

Ao criar uma nova tarifa/pacote, o estado padrão é Ativo.

Se a tarifa tiver a opção Yielding ativa, significa que pode sofrer alterações com base na ocupação (configuração feita no BeePrice).

O Yielding é utilizado para configurar uma flutuação de preços na tarifa de acordo com a disponibilidade.

No caso de criação de pacotes, além de todos os campos mencionados nas tarifas, é possível definir os períodos do pacote e adicionar um anexo PDF e/ou uma foto.

O tamanho máximo da foto deve ser 1MB (inclusive).

O tamanho máximo do anexo deve ser 5MB.

Deve ser possível baixar o anexo PDF, clicando na miniatura do PDF.

Os períodos do pacote são configurados com um intervalo de datas. É possível ter vários períodos definidos para um pacote, sendo que os períodos devem ser mutuamente exclusivos, ou seja, a mesma data só pode estar contida num único período. (O sistema deve impedir a criação de novos períodos com datas contidas noutros períodos já existentes).

As datas escolhidas não podem ser anteriores à data atual e a data De não pode ser maior que a data Até.

O formato das datas muda de acordo com o idioma do utilizador:

*   UK (mm/dd/yyyy)
*   Outros idiomas (dd/mm/yyyy)

### Loyalty (ainda não está implementado no HTML)

Caso o hotel tenha um Programa de Fidelização com pelo menos um Nível de Fidelização configurado, deve ser mostrado um botão na página de configuração da tarifa para aceder à área de fidelização. Nesta área, o utilizador tem a possibilidade de adicionar imediatamente à tarifa um ou mais níveis de fidelização do hotel.

Os níveis de fidelização existentes devem ser ordenados do menos para o mais vantajoso.

Mesmo que as tarifas não estejam disponíveis para o canal BE (_Booking Engine_), é possível atribuir níveis de fidelização.

Quando uma nova tarifa está a ser criada, só deve ser possível associá-la a um nível de fidelização após se selecionar a moeda base da tarifa.

*   Caso algum nível de fidelização tenha desconto por valor, o utilizador deve ser alertado e forçado pelo sistema a configurar no respetivo nível o desconto para a moeda base da tarifa (caso ainda não exista).
*   Caso o utilizador altere a moeda da tarifa (ainda na ação de criação), ao guardar a mesma, as moedas dos níveis de fidelização devem ser validadas novamente em relação à moeda base da tarifa.

### Tipos de Quarto

Nesta aba, o utilizador poderá atribuir à tarifa os tipos de quarto que desejar vender com a tarifa.

A lista de tipos de quartos deve conter todos os tipos de quartos disponíveis (não eliminados) da propriedade em contexto.

Não é obrigatório atribuir nenhum tipo de quarto na tarifa, sendo que o utilizador, se desejar, poderá atribuir vários tipos de quarto à tarifa.

É possível pesquisar pelo nome do tipo de quarto, em ambas as listas (tipos de quarto disponíveis e atribuídos).

### Canais

Nesta aba, o utilizador poderá atribuir à tarifa os canais para os quais deseja distribuir a sua tarifa.

A lista de canais deve conter todos os canais disponíveis da propriedade em contexto, independentemente do seu estado (ativo, inativo ou pendente).

Não é obrigatório atribuir nenhum canal na tarifa, sendo que o utilizador, se desejar, poderá atribuir vários canais à tarifa.

É possível pesquisar pelo nome do canal, em ambas as listas (canais disponíveis e atribuídos).

Ao abrir o separador Canais, os canais associados à tarifa devem ser ordenados alfabeticamente, mas mantendo sempre o Motor de Reservas em primeiro lugar.

Ao atribuir um canal na tarifa, é possível definir vários parâmetros por canal: variação de preço, tipo de comissão e comissão, tipos de pagamento, com exceção do canal "Booking Engine", onde só é possível definir variação de preço, tipos de pagamento, pagamento à vista (para o tipo de pagamento cartão de crédito) e se a tarifa é exclusiva para o “Motor de Reservas”.

Ao atribuir um canal diferente do canal "Booking Engine" para a tarifa, se existirem valores padrão para tipo de comissão e comissão definidos em Configuração de Canais/Buyers, devem ser copiados para os campos na tarifa, embora o utilizador possa alterá-los. Se não houver nenhum valor padrão definido, o tipo de comissão deve assumir a opção “Comissionável” e a comissão deverá ser obrigatoriamente preenchida.

Ao atribuir o canal BE (_Booking Engine_), por padrão a tarifa será distribuída para o BE e BE Mobile, apenas se o utilizador definir que a tarifa será exclusiva do BE Mobile, esta só ficará visível no BE Mobile.

A variação de preço é usada para diferenciar o preço de venda do canal, aumentando ou diminuindo o preço definido para a tarifa, o que significa que sempre que o preço mudar para uma determinada tarifa, o preço enviado aos canais será o definido nessa tarifa mais a variação de preço definida no canal. A Variação de Preço pode ser definida em valor ou em percentagem, sendo que o padrão é em valor e crescente. O valor, quer seja em moeda ou percentagem, deve ser maior ou igual a zero.

O Tipo de Comissão deve listar as opções de acordo com as informações retornadas pela API, neste caso estamos a listar as opções Comissionável e Markup (NET).

O valor da comissão é sempre percentual e tem de seguir a regra abaixo:

*   Se o tipo de comissão é “Comissionável”, o campo Comissão apenas deve aceitar valores maiores que 0 e menores ou iguais a 100.
*   Se o tipo de comissão é “Markup (NET)”, o campo Comissão aceita valores iguais ou maiores que 0 e menores ou iguais a 100.

Para utilizadores do tipo "utilizador", os campos Tipo de Comissão e Comissão só podem ser geridos mediante uma permissão específica (Altera Comissões/Markup de todos os Canais). Apenas utilizadores com a permissão poderão alterar estes campos.

Para utilizadores do tipo "gestor de conta" não existe nenhuma regra específica além das permissões do ecrã, ou seja, para este tipo de utilizador é possível alterar estes campos.

Além disso, dependendo do canal, diferentes tipos de pagamento devem ser disponibilizados. A lista de Tipos de Pagamento deve ser preenchida de acordo com as informações retornadas pela API.

Para o canal "Booking Engine" (tipo de canal = 0 e isBookingEngine=1), o sistema deve validar os tipos de pagamento que estão configurados em Motor de Reservas > Configuração da Propriedade. Se o hotel tiver configurado que o pagamento é geral para o Motor de Reservas, os tipos de pagamentos não são mostrados nem podem ser definidos na configuração da tarifa; se o hotel tiver configurado que o pagamento é definido individualmente por tarifa, os tipos de pagamento são mostrados e podem ser configurados na configuração das tarifas, não sendo obrigatório definir tipos de pagamento. Por padrão, não é selecionado nenhum tipo de pagamento e os tipos de pagamento disponibilizados são os definidos na Configuração da Propriedade (em Motor de Reservas).

*   Utilizador BO altera o tipo de pagamento de geral para o Motor de Reservas para definido por tarifa - copiar os tipos de pagamentos para todas as tarifas;

Para os canais PULL com tipo de operador não HoteisNet (tipo de canal = 2 e tipo de operador = 1), o campo Tipos de Pagamento é obrigatório e deve ter pelo menos 1 tipo de pagamento selecionado, sendo que o padrão é estarem todos selecionados. Os tipos de pagamento possíveis são:

*   Cartão de Crédito
*   Pagamento direto no hotel
*   Depósito bancário
*   Faturada
*   Pré-pagamento

Segue uma matriz contendo um resumo dos campos que podem ser editados dependendo do canal + tipo de operador:

| **Channel**                   | **Type** | **Operator Type** | **IsBE** | **Price Variation** | **Commission Type** | **Commission Value** | **Payment Type** | **Be exclusive** | **Commission** | **Markup** | **Package** |
| ----------------------------- | -------- | ----------------- | -------- | ------------------- | ------------------- | -------------------- | ---------------- | ---------------- | -------------- | ----------- |
| **BE**                        | 0        | 0                 | 1        | Y                   | N                   | N                    | Y                | Y                | N              | N           | N           |
| **Channels**                  | 0        | 0                 | 0        | Y                   | Y                   | Y                    | N                | N                | N              | N           | N           |
| **PULL + Not Hoteisnet**      | 2        | 1                 | NA       | Y                   | Y                   | Y                    | Y                | N                | N              | N           | N           |
| **GDS + Not Operator**        | 1        | 0                 | NA       | Y                   | Y                   | Y                    | N                | N                | N              | N           | N           |
| **PMS - OTA**                 | 3        | 0                 | NA       | Y                   | Y                   | Y                    | N                | N                | N              | N           | N           |
| **Trip Advisor**              | 2        | 0                 | NA       | Y                   | Y                   | Y                    | N                | N              | N           | N           |

### Lógica API:

Para o canal Travelport, há uma regra específica a ser implementada: o Travelport é composto por 4 GDS: Galileo, Worldspan, Apollo e Axess, e quer que o hotel distribua sempre para os 4 GDS exatamente com as mesmas configurações. No entanto, em termos de mapeamento de PCC, os 4 GDSs devem ser independentes, pois cada um deles terá as suas agências com PCCs diferentes. Com isto, o canal Travelport na configuração da tarifa e no calendário é mostrado com a nomenclatura "Travelport (gali, WSpan, Apo, Axess)" e as informações configuradas para este canal serão armazenadas nos 4 GDSs internamente.

Em suma, em termos de leitura será lido como "Travelport (gali, WSpan, Apo, Axess)" e em termos de escrita e distribuição os 4 são independentes e guardam a mesma configuração definida para Travelport.

Quando o Travelport é atribuído à tarifa, os 4 GDSs (Galileo, Worldspan, Apollo e Axess) são atribuídos internamente e quando o Travelport é removido da tarifa, os 4 GDSs também são removidos.

### Operadoras Bee2Bee HoteisNet

O separador Bee2Bee HoteisNet estará visível apenas se o hotel tiver o canal Hoteisnet arrastado na ativação do canal para a propriedade no contexto. Caso o utilizador remova este canal da ativação do canal, a aba permanecerá ativa.

Neste separador, o utilizador poderá selecionar as Operadoras Bee2Bee HoteisNet para as quais deseja distribuir.

A lista de Operadoras deve conter todas as Operadoras Bee2Bee HoteisNet associadas à propriedade em contexto, independentemente do seu estado (ativo, inativo ou pendente).

Não é obrigatório atribuir nenhuma operadora, sendo possível associar várias operadoras à tarifa. Ao abrir o separador Bee2Bee HoteisNet, as operadoras associadas à tarifa devem estar ordenadas alfabeticamente.

Só é possível pesquisar por nome em ambas as listas de operadoras (operadoras disponíveis e operadoras atribuídas).

Ao arrastar uma operadora para a tarifa, se existirem valores para comissionável, markup e pacote definidos na Configuração de Canais/Buyers (Conectividade e Distribuição > Configuração de Canais/Buyers), estes devem ser copiados para os campos da configuração da tarifa, embora o utilizador possa alterá-los.

Operadoras que não estão aprovadas para faturamento ou que estão no estado inativo são identificadas facilmente. Quando uma operadora associada à tarifa não está aprovada para faturamento, é identificada por um ícone amarelo e quando uma operadora está no estado inativo, é identificada com um ícone vermelho. Se a operadora estiver no estado inativo e não estiver aprovada para faturamento, o ícone a ser mostrado deve ser o vermelho.

Para cada operadora é possível definir a variação de preço, uma percentagem para o valor comissionável (retalho), para o valor markup (net) e/ou para o valor do pacote (net), podendo ainda definir vários tipos de pagamento que estarão disponíveis no momento da reserva. Essas configurações podem ser feitas individualmente por operadora, ou em várias/todas as operadoras ao mesmo tempo, quando a configuração for igual em todas.

A variação de preços segue as mesmas regras definidas acima no separador de Canais.

É obrigatório preencher pelo menos um dos seguintes campos: comissionável, markup ou Pacote. Estes valores são geridos através de uma permissão específica (Alterar Comissões/Markup de todos os Canais).

O valor é sempre em percentagem e deve seguir a regra abaixo:

*   Campo “Comissionável” deve aceitar valores maiores que 0 e menores ou iguais a 100.
*   Campo “Markup” deve aceitar valores iguais ou maiores que 0 e menores ou iguais a 100.

Para os canais PULL com tipo de operador HoteisNet (tipo de canal = 2 e tipo de operador = 2), o campo Tipos de Pagamento é obrigatório, deve ter pelo menos 1 tipo de pagamento selecionado e os tipos de pagamento possíveis são:

*   Faturada (única opção selecionada por padrão)
*   Pré-pagamento
*   Cartão de crédito
*   Pagamento direto no hotel

Segue uma matriz contendo um resumo dos campos que podem ser editados no separador Bee2Bee HoteisNet:

| **Type** | **Operator Type** | **IsBE** | **Price Variation** | **Commision type** | **commission value** | **Payment type** | **Be exclusive** | **Commision** | **Markup** | **Package** |
| -------- | ----------------- | -------- | ------------------- | ------------------ | -------------------- | ---------------- | ---------------- | ------------- | ---------- | ----------- |
| 2        | 2                 | NA       | Y                   | N                  | N                    | Y                | N                | Y             | Y          | Y           |

### Agências

Neste separador, o utilizador selecionará as agências de viagens e/ou os postos de agências para as quais deseja distribuir.

A lista de agências deve conter todas as agências de viagens e postos de agência públicos do sistema e todas as agências de viagens e postos de agência privados do cliente em contexto, que estejam no estado ativo.

Só é possível pesquisar por nome em ambas as listas (agências disponíveis e agências atribuídas).

Com o objetivo de melhorar a performance, a listagem de tarifas por atribuir (lado esquerdo) e os resultados de pesquisa desta lista, só carregam 200 agências/postos. Porém, o botão "Atribuir todos", atribui todas as agências de viagens e postos públicos do sistema e privados do cliente que ainda não estiverem atribuídos.

As agências e postos públicos estão sempre disponíveis para todas as propriedades e clientes do sistema. As privadas estão disponíveis apenas para um cliente específico.

Não é obrigatório atribuir nenhuma agência ou posto. É possível atribuir várias agências ou postos à tarifa.

Nota: Agências e postos já atribuídos à tarifa e que ficam no estado inativo devem continuar atribuídos na tarifa.

Quando o utilizador arrasta uma agência ou posto para a tarifa, pode definir a variação de preço GDS, a variação de preço Direto e consultar os tipos de garantia Sabre/Travelport definidos na agência/posto.

A variação de preço GDS e a variação de preço Direto podem ser definidas em valor ou em percentagem, sendo que os valores devem ser maiores ou iguais a zero (opção valor/moeda e aumento são a configuração padrão).

Neste separador, o utilizador pode ainda selecionar se a tarifa é pública ou não, a opção padrão deve ser pública. Exceto para tarifas que a categoria selecionada tenha sido "Tarifa Acordo", nestes casos a tarifa não é pública por padrão. Esta marcação de tarifa públicas é para Agências e também para Empresas; a configuração feita na aba Agência reflete na aba Empresas e vice-versa.

Os tipos de garantia Sabre/Travelport são definidos na configuração das Agências (CRM > Perfis > Agências de Viagens) e dos Postos (CRM > Perfis > Postos de Agências) e devem ser mostrados na coluna Tipo de garantia Sabre /Travelport. Os valores possíveis são:

*   Cartão de crédito
*   Nome/Endereço da Agência de Viagens
*   Nome/Endereço da Empresa
*   Nome/Endereço do Hóspede
*   Número IATA da Agência de Viagens
*   ID/CD da Empresa
*   Depósito Aceite em Garantia

As informações devem ser apresentadas na coluna separadas por ";" e se o texto for muito grande e ultrapassar o tamanho da coluna, deve-se incluir "..." e uma _tooltip_ é disponibilizada com toda a informação para consulta.

Se não existir nenhum tipo de garantia Sabre/Travelport configurado para uma determinada agência/posto, a coluna é mostrada vazia.

### Empresas

Neste separador, o utilizador selecionará as Empresas para as quais deseja distribuir.

A lista de empresas deve conter todas as empresas públicas do sistema e todas as empresas privadas do cliente em contexto, que estejam no estado ativo.

Só é possível pesquisar por nome em ambas as listas (empresas disponíveis e empresas atribuídas).

As empresas públicas estão sempre disponíveis para todas as propriedades e clientes do sistema. As privadas estão disponíveis apenas para um cliente específico.

Não é obrigatório atribuir nenhuma empresa, sendo possível atribuir uma ou várias empresas à tarifa.

Neste separador, o utilizador pode ainda selecionar se a tarifa é pública ou não, a opção padrão deve ser pública. Exceto para tarifas que a categoria selecionada tenha sido "Tarifa Acordo", nestes casos a tarifa não é pública por padrão. Esta marcação de tarifa públicas é para Agências e também para Empresas; a configuração feita na aba Empresa reflete na aba Agências e vice-versa.

Nota: Empresas já atribuídas à tarifa e que ficam no estado inativo devem continuar atribuídas na tarifa.

Quando o utilizador arrasta uma empresa para a tarifa, pode definir uma variação de preço Direto. A variação de preço pode ser definida em valor ou em percentagem, sendo que os valores devem ser maiores ou iguais a zero (opção valor/moeda e aumento são a configuração padrão).

### Extras Incluídos

Neste separador, o utilizador selecionará os Extras que deseja incluir na tarifa. Os extras incluídos já estão considerados no preço final da diária, não tendo um custo extra para o hóspede.

A lista de extras incluídos deve conter todos os extras (hotel e _multi-property_) disponíveis da propriedade no contexto, quer estejam no estado ativo ou inativo.

Não é obrigatório atribuir nenhum extra incluído, sendo possível associar vários extras à tarifa.

Apenas é possível atribuir na tarifa um extra com Regime Alimentar definido.

Para cada extra Incluído é possível definir se está disponível para venda apenas para determinados períodos ou não. Um período é considerado um intervalo de datas de ... a.

O formato da data muda de acordo com o idioma:

*   UK (mm/dd/aaaa)
*   Outros idiomas (dd/mm/aaaa)

Podem ser definidos vários períodos para o mesmo extra incluído, no entanto, a mesma data só pode estar contida num único período (O sistema deve impedir a criação de novos períodos com datas contidas em outros períodos já existentes). Esta regra aplica-se aos períodos dentro do mesmo extra; entre extras podem existir períodos iguais.

As datas escolhidas não podem ser anteriores à data atual e a data Até não pode ser anterior à data De.

**Exemplos de validações:**

1.  Criação de tarifa > Extras Incluídos > adicionar extra > adicionar período > colocar manualmente datas mais antigas que a data atual > clicar ok > sistema deve fazer a validação > mostra mensagem de erro > ou seja, não permite a inserção de datas mais antigas.

2.  Criação de tarifa > Extras Incluídos > adicionar extra > adicionar período > colocar datas mais futuras que a data atual > clicar ok > sistema faz validação > não mostra mensagem de erro > ou seja, sistema deve permitir a inserção de datas atuais ou futuras.

Só é possível pesquisar por nome em ambas as listas (extras disponíveis e extras atribuídos).

Os extras incluídos associados à tarifa devem ter um valor definido para a moeda da tarifa, caso contrário, não podem ser adicionados à mesma.

### Extras Adicionais

Neste separador, o utilizador selecionará os extras que deseja vender juntamente com a tarifa; estes extras serão cobrados à parte e apenas se o hóspede os incluir na reserva. Extras adicionais não estão incluídos no preço da diária.

A lista de extras adicionais deve conter todos os extras (hotel e _multi-property_) disponíveis da propriedade no contexto, quer estejam no estado ativo ou inativo.

Não é obrigatório atribuir nenhum extra adicional, sendo possível atribuir vários extras à tarifa.

Só é possível pesquisar por nome em ambas as listas (extras disponíveis e extras atribuídos).

A opção "Todos" nos extras adicionais permite associar à tarifa todos os extras criados pelo hotel, mesmo os criados após a tarifa, de forma automática.

Por padrão, esta opção está desmarcada. Caso o utilizador marque esta opção, deixa de ser possível atribuir extras à tarifa de forma manual e é mostrada uma mensagem a informar que todos os extras do hotel estão atribuídos à tarifa.

Os extras adicionais associados à tarifa devem ter um valor definido para a moeda da tarifa, caso contrário, não podem ser adicionados à mesma.

### Ofertas

O utilizador pode associar uma ou várias ofertas a uma tarifa.

A lista de ofertas deve conter todas as ofertas (hotel e _multi-property_) disponíveis da propriedade em contexto.

Não é obrigatório atribuir nenhuma oferta.

As ofertas podem ter vários períodos ou nenhum para o período para a reserva (_Booking Window_) e para o período de estadia (_Stay Window_) e podem ser acumulativas ou não.

Para as ofertas marcadas como acumulativas, aplicam-se todos os descontos das várias ofertas; caso não exista nenhuma oferta marcada como acumulativa, aplica-se apenas a que for mais rentável para o hóspede.

Tal como nos extras incluídos, cada oferta pode estar disponível para venda em determinados períodos.

Os períodos de cada oferta de Período para a Reserva e de Período de Estadia são definidos na configuração da Oferta (Tarifas e Disponibilidade > Ofertas) e mostrados nas colunas respetivas quando a oferta está atribuída à tarifa.

### Políticas

#### Políticas Gerais

Apenas é possível selecionar uma Política Geral a uma tarifa.

A lista de políticas gerais deve conter todas as políticas gerais (hotel e _multi-property_) disponíveis da propriedade em contexto.

#### Políticas de Depósito/Garantia

Apenas é possível selecionar uma política de depósito padrão a uma tarifa; no entanto, é possível selecionar uma ou várias políticas de depósito com períodos definidos.

Tanto a lista de políticas de depósito padrão como a de políticas de depósito por períodos devem conter todas as políticas de depósito (hotel e _multi-property_) disponíveis da propriedade em contexto.

A política de depósito padrão não pode ser atribuída à tarifa com períodos definidos ao mesmo tempo.

Para cada política de depósito atribuída à tarifa é obrigatório definir pelo menos um período. Um período é considerado um intervalo de datas de ... a.

O formato da data muda de acordo com o idioma:

*   UK (mm/dd/aaaa)
*   Outros idiomas (dd/mm/aaaa)

Podem ser definidos vários períodos para a mesma política; no entanto, a mesma data só pode estar contida num único período (O sistema deve impedir a criação de novos períodos com datas contidas em outros períodos já existentes). Esta regra aplica-se aos períodos dentro da mesma política de depósito e entre políticas de depósito. As datas escolhidas não podem ser anteriores à data atual e a data Até não pode ser anterior à data De.

**Exemplos de validações:**

1.  Criação de tarifa > Políticas de Depósito/Garantia > adicionar política secundária > adicionar período > colocar manualmente datas mais antigas que a data atual > clicar ok > sistema deve fazer a validação > mostra mensagem de erro > ou seja, não permite a inserção de datas mais antigas.

2.  Criação de tarifa > Políticas de Depósito/Garantia > adicionar política secundária > adicionar período > colocar datas mais futuras que a data atual > clicar ok > sistema faz validação > não mostra mensagem de erro > ou seja, sistema deve permitir a inserção de datas atuais ou futuras.

As políticas de depósito configuradas com valor moeda associadas à tarifa devem ter um valor definido para a moeda da tarifa, caso contrário, não podem ser adicionados à mesma.

#### Políticas de Cancelamento

Apenas é possível selecionar uma política de cancelamento padrão a uma tarifa; no entanto, é possível selecionar uma ou várias políticas de cancelamento com períodos definidos.

Tanto a lista de políticas de cancelamento padrão como a de políticas de cancelamento por períodos devem conter todas as políticas de cancelamento (hotel e _multi-property_) disponíveis da propriedade em contexto.

A política de cancelamento padrão não pode ser atribuída à tarifa com períodos definidos ao mesmo tempo.

Para cada política de cancelamento atribuída à tarifa é obrigatório definir pelo menos um período. Um período é considerado um intervalo de datas de ... a.

O formato da data muda de acordo com o idioma:

*   UK (mm/dd/aaaa)
*   Outros idiomas (dd/mm/aaaa)

Podem ser definidos vários períodos para a mesma política; no entanto, a mesma data só pode estar contida num único período (O sistema deve impedir a criação de novos períodos com datas contidas em outros períodos já existentes). Esta regra aplica-se aos períodos dentro da mesma política de cancelamento e entre políticas de cancelamento. As datas escolhidas não podem ser anteriores à data atual e a data Até não pode ser anterior à data De.

**Exemplos de validações:**

1.  Criação de tarifa > Políticas de Cancelamento > adicionar política secundária > adicionar período > colocar manualmente datas mais antigas que a data atual > clicar ok > sistema deve fazer a validação > mostra mensagem de erro > ou seja, não permite a inserção de datas mais antigas.

2.  Criação de tarifa > Políticas de Cancelamento > adicionar política secundária > adicionar período > colocar datas mais futuras que a data atual > clicar ok > sistema faz validação > não mostra mensagem de erro > ou seja, sistema deve permitir a inserção de datas atuais ou futuras.

As políticas de cancelamento configuradas com valor moeda associadas à tarifa devem ter um valor definido para a moeda da tarifa, caso contrário, não podem ser adicionados à mesma.

#### Taxas

É possível selecionar uma ou várias taxas a uma tarifa.

A lista de taxas deve conter todas as taxas (hotel e _multi-property_) disponíveis da propriedade em contexto.

As taxas configuradas com valor moeda associadas à tarifa devem ter um valor definido para a moeda da tarifa, caso contrário, não podem ser adicionados à mesma.

## Fluxo de Criação e Edição

![Tarifas](</assets/beehive/tarifas-e-disponibilidade/tarifas/criacao-de-tarifas/Tarifas.png> "Tarifas")

## Histórico

### Histórico de alterações e referências:

| Data da alteração | Owner | Referência de alteração | Observações |
|-------------------|-------|-------------------------|-------------|
| 04-09-2025        | N8N   | -                       | Conversão da documentação para Docusaurus |
| 09-05-2025        | Miriam Barboza | [O-2316](https://omnibees.aha.io/features/O-2316) | Tarifas: melhoria de performance na aba Agências (Drag and Drop) |
| 09-05-2025        | Miriam Barboza | [O-3019](https://omnibees.aha.io/features/O-3019) | [tarifa pública]: a configuração de tarifa pública deve deixar explícito que aplica aos canais de Agências e Empresas |
| 08-04-2025        | Miriam Barboza | [O-1843](https://omnibees.aha.io/features/O-1843) | Tarifas - melhoria de performance nos anexos dos pacotes |
| 09-01-2025        | Miriam Barboza | [O-1706](https://omnibees.aha.io/features/O-1706) | Campo comissão não pode aceitar valor 0 (zero) para Comissionada |
| 09-01-2025        | Miriam Barboza | [O-1362](https://omnibees.aha.io/features/O-1362) | Tarifas da categoria Acordo não são públicas por omissão |
| 07-01-2025        | Miriam Barboza | O-1713 | Apresentar por default apenas tarifas ativas |
| 17-08-2022        | Flávia Guerreiro | -                       | Tradução do Documento Original |
| ND                | Fabiana Sobreiro | [Documentação Base](https://omnibeesportugal.sharepoint.com/:w:/r/sites/Produtos/_layouts/15/Doc.aspx?sourcedoc=%7b5195C178-9D8D-4E67-A4BB-F1333E343FDE%7d&file=WA%2004%20-%20Rates%20and%20Availability.docx&action=default&mobileredirect=true) | Primeira documentação criada para Configuração de Tarifas |
```