
[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/zbetcheckin/Security_list)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)
[![Contribuidores](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](https://github.com/Lissy93/personal-security-checklist/graphs/contributors)
.
<p align="center"><img src="https://i.ibb.co/rGQK71g/personal-security-checklist-6.png" /></p>

📝 **Este é um Fork** do [Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/) original de **© Alicia Sykes**, traduzido para português brasileiro pela **PP_Tech**.

*<p align="center">🇧🇷 Uma lista selecionada de dicas para proteger sua segurança digital e privacidade</p>*

> **Nota**: Esta é uma tradução do [repositório original](https://github.com/Lissy93/personal-security-checklist) mantido por Alicia Sykes. Todos os créditos ao criador original. A tradução busca manter a essência e precisão do conteúdo original.

### Sumário

[<img src="https://i.ibb.co/XbyGTrP/1-authentication-2-36x36.png" width="28" height="28" /> Autenticação](#authentication)<br>
[<img src="https://i.ibb.co/8KMrdbX/2-internet-36x36.png" width="28" height="28" /> Navegação na Web](#web-browsing)<br>
[<img src="https://i.ibb.co/7NrXW3L/5-email-36x36.png" width="28" height="28" /> E-mail](#emails)<br>
[<img src="https://i.ibb.co/DrWJBT9/13-messaging-36x36.png" width="28" height="28" /> Mensagens Seguras](#secure-messaging)<br>
[<img src="https://i.ibb.co/GFYyXMd/6-social-media-36x36.png" width="28" height="28" /> Redes Sociais](#social-media)<br>
[<img src="https://i.ibb.co/0VTZQpH/3-networking-36x36.png" width="28" height="28" /> Redes](#networking)<br>
[<img src="https://i.ibb.co/F3WwqsV/7-phones-36x36.png" width="28" height="28" /> Dispositivos Móveis](#mobile-devices)<br>
[<img src="https://i.ibb.co/ZftcgJq/8-computers-36x36.png" width="28" height="28" /> Computadores Pessoais](#personal-computers)<br>
[<img src="https://i.ibb.co/b2S9372/9-smart-home-36x36.png" width="28" height="28" /> Casa Inteligente](#smart-home)<br>
[<img src="https://i.ibb.co/4JTqL5y/12-finance-36x36.png" width="28" height="28" /> Finanças Pessoais](#personal-finance)<br>
[<img src="https://i.ibb.co/KVPV1Lk/10-human-36x36.png" width="28" height="28" /> Aspecto Humano](#sensible-computing)<br>
[<img src="https://i.ibb.co/9NbhBww/11-physical-36x36.png" width="28" height="28" /> Segurança Física](#physical-security)<br>

Muito longo? 🦒 Veja a [versão TLDR](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/articles/2_TLDR_Short_List.md) em seu lugar.

Para uma lista de softwares que respeitam a privacidade, confira o [Awesome-Privacy](https://github.com/lissy93/awesome-privacy).

Um espelho deste repositório está disponível em [codeberg.org/alicia/personal-security-checklist](https://codeberg.org/alicia/personal-security-checklist).

---

<!-- checklist-start -->
## Autenticação

A maioria das violações de dados relatadas é causada pelo uso de senhas fracas, padrão ou roubadas, segundo diversos relatórios de segurança. Use senhas longas, fortes e únicas; gerencie-as em um gerenciador de senhas seguro; habilite a autenticação em dois fatores; acompanhe vazamentos; e tenha cuidado ao fazer login nas suas contas.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Use uma Senha Forte** | Essential | Se sua senha for muito curta ou contiver palavras de dicionário, lugares ou nomes, ela pode ser facilmente quebrada por força bruta ou adivinhada por alguém. A forma mais simples de ter uma senha forte é torná-la longa (12+ caracteres) — considere usar uma “frase‑secreta” composta por várias palavras. Alternativamente, use um gerador para criar uma senha aleatória, longa e forte. Evite padrões óbvios e sequências previsíveis.
**Não Reutilize Senhas** | Essential | Se você reutilizar uma senha e algum site em que tenha conta sofrer um vazamento, um criminoso poderá ganhar acesso não autorizado às suas outras contas. Isso costuma ocorrer via tentativas automatizadas em larga escala, conhecidas como Credential Stuffing. Infelizmente é muito comum, mas a proteção é simples — use uma senha diferente para cada uma das suas contas online.
**Use um Gerenciador de Senhas Seguro** | Essential | Para a maioria das pessoas, é praticamente impossível lembrar centenas de senhas fortes e únicas. Um gerenciador de senhas gera, armazena e preenche automaticamente suas credenciais de login. Todas as suas senhas ficam criptografadas sob uma senha mestra (que você deve lembrar, e ela deve ser bem forte). A maioria dos gerenciadores possui extensões de navegador e apps móveis, para preencher senhas em qualquer dispositivo. Prefira soluções confiáveis e com histórico de segurança consistente.
**Evite Compartilhar Senhas** | Essential | Embora possa haver situações em que você precise compartilhar o acesso a uma conta com outra pessoa, geralmente evite fazê‑lo, pois isso facilita a exposição da conta. Se realmente for necessário — por exemplo, em um time com conta compartilhada — use os recursos de compartilhamento do próprio gerenciador de senhas.
**Habilite a Autenticação em 2 Fatores (2FA)** | Essential | Na 2FA você fornece algo que sabe (senha) e algo que tem (por exemplo, um código no celular) para entrar. Assim, mesmo que alguém tenha sua senha (por phishing, malware ou vazamento), não conseguirá acessar a conta. É fácil começar: use um aplicativo autenticador no celular e ative a 2FA nas configurações de segurança da conta. Ao entrar num novo dispositivo, será pedido um código temporário gerado localmente (normalmente a cada 30 segundos).
**Guarde os Códigos de Backup com Segurança** | Essential | Ao habilitar MFA/2FA você recebe códigos de recuperação para usar caso perca o método principal. Guarde‑os em local seguro para evitar perda ou acesso indevido. Armazene em papel ou em local seguro no disco (por exemplo, armazenamento offline ou arquivo/unidade criptografada). Evite guardar no gerenciador de senhas, pois fontes de 2FA e senhas devem ficar separadas.
**Cadastre‑se para Alertas de Vazamento** | Optional | Após um grande vazamento, os dados frequentemente vão parar na internet. Há serviços que coletam esses registros e permitem buscar seu e‑mail para verificar se está em alguma lista. Considere cadastrar seu e‑mail em serviços de monitoramento de vazamentos para receber alertas quando ele aparecer em novos conjuntos de dados. Isso ajuda a trocar senhas rapidamente nas contas afetadas.
**Proteja sua Senha/PIN ao Digitar** | Optional | Ao digitar senhas em locais públicos, evite ficar na linha de visão de câmeras e de curiosos. Cubra o teclado ao digitar e evite expor senhas em texto claro na tela.
**Atualize Periodicamente Senhas Críticas** | Optional | Vazamentos são comuns e é possível que algumas de suas senhas já estejam expostas. Atualizar ocasionalmente as senhas de contas críticas pode ajudar a mitigar riscos. Mas, se todas são longas, fortes e únicas, não há necessidade de trocar com frequência. Forçar trocas periódicas obrigatórias pode levar a senhas mais fracas.
**Não Salve Senhas no Navegador** | Optional | A maior parte dos navegadores oferece salvar credenciais ao fazer login. Evite esse recurso — nem sempre há criptografia adequada, podendo expor suas contas. Prefira um gerenciador de senhas dedicado para armazenar (e preencher) seus logins.
**Evite Logar no Dispositivo de Terceiros** | Optional | Evite fazer login em computadores de outras pessoas — você não sabe se estão limpos. Tenha atenção redobrada com máquinas públicas, onde malwares e rastreamento são mais comuns. É especialmente arriscado para contas críticas (ex.: banco). Se precisar, use janela privada/aba anônima (Ctrl+Shift+N/Cmd+Shift+N) para reduzir o armazenamento de credenciais, cookies e histórico.
**Evite Dicas de Senha** | Optional | Alguns sites permitem definir dicas de senha. Muitas vezes as respostas são fáceis de adivinhar. Quando for obrigatório, use respostas aleatórias e registre no seu gerenciador de senhas (ex.: `Primeira escola: 6D-02-8B-!a-E8-8F-81`).
**Nunca Responda Perguntas de Segurança com a Verdade** | Optional | Se um site pedir perguntas de segurança (cidade natal, nome de solteira da mãe, primeiro carro etc.), não responda com a verdade. É trivial para atacantes obterem essas informações online ou por engenharia social. Em vez disso, crie respostas fictícias e armazene no gerenciador de senhas. Usar palavras reais é melhor do que caracteres aleatórios, como [explicado aqui](https://news.ycombinator.com/item?id=29244870).
**Evite PIN de 4 Dígitos** | Optional | Não use PIN curto para acessar seu smartphone ou computador. Prefira senha textual ou um PIN bem mais longo. Sequências numéricas curtas são fáceis de quebrar (um PIN de 4 dígitos tem 10.000 combinações, contra 7,4 milhões em um código alfanumérico de 4 caracteres).
**Evite Usar SMS para 2FA** | Optional | Ao habilitar MFA, prefira códigos por aplicativo ou chave de hardware, quando disponíveis. SMS é suscetível a sequestro de número (SIM swap) e interceptação, e pode não ser adequado como método principal. Do ponto de vista prático, SMS depende de sinal e pode ser lento. Se um serviço exigir número por SMS para recuperação, considere usar um número secundário dedicado somente a esse fim.
**Evite Gerar OTP no Mesmo Gerenciador de Senhas** | Advanced | Muitos gerenciadores geram códigos 2FA, mas evite usar o mesmo para senhas e 2FA — isso cria um ponto único de falha. Prefira um aplicativo autenticador dedicado no celular ou computador.
**Evite Desbloqueio por Rosto** | Advanced | Muitos dispositivos oferecem reconhecimento facial. É prático, mas existem formas de enganá‑lo usando fotos ou vídeos. Diferente da sua senha, seu rosto provavelmente está exposto publicamente.
**Atenção a Keyloggers** | Advanced | Um keylogger de hardware é um dispositivo entre o teclado e a porta USB que intercepta teclas (às vezes enviando a um servidor remoto), expondo tudo digitado. Verifique conexões USB após períodos sem supervisão e sinais de violação no teclado. Dados digitados em teclado virtual, colados ou preenchidos por gerenciador de senhas não são capturados por keyloggers de hardware.
**Considere uma Chave de Segurança (Token)** | Advanced | Chaves de segurança compatíveis com U2F/FIDO2 são dispositivos USB/NFC usados no login para verificar sua identidade, substituindo códigos TOTP. Como o navegador conversa diretamente com o dispositivo e valida o certificado TLS, ataques de phishing/redirecionamento são mitigados. Guarde a chave em local seguro. Algumas contas permitem múltiplos métodos de 2FA.
**Considere um Gerenciador Offline** | Advanced | Para segurança adicional, um gerenciador offline criptografado dá controle total sobre seus dados. A desvantagem é menor conveniência e a necessidade de fazer backup/armazenar com cuidado. Considere essa opção se preferir manter todo o controle localmente e estiver disposto a administrar sincronização e cópias de segurança por conta própria.
**Considere Usuários/Identificadores Únicos** | Advanced | Ter senhas diferentes já é um ótimo passo; se você também usar usuário, e‑mail ou número de telefone únicos por conta, fica muito mais difícil obter acesso indevido. Para múltiplos e‑mails, use aliases gerados automaticamente para encaminhamento anônimo, permitindo e‑mail diferente por conta. Usuários podem ser gerados e salvos pelo gerenciador; números virtuais podem ser obtidos junto ao seu provedor de telefonia ou VOIP.


## Navegação Web

A maioria dos sites na internet utiliza alguma forma de rastreamento, frequentemente para obter informações sobre o comportamento e preferências dos usuários. Esses dados podem ser incrivelmente detalhados e são extremamente valiosos para corporações, governos e ladrões de propriedade intelectual. Vazamentos e violações de dados são comuns, e desanonimizar a atividade web dos usuários é frequentemente uma tarefa trivial.

Há dois métodos principais de rastreamento: com estado (baseado em cookies) e sem estado (baseado em impressão digital). Cookies são pequenos pedaços de informação armazenados no seu navegador com um ID único usado para identificá-lo. A impressão digital do navegador é uma forma altamente precisa de identificar e rastrear usuários onde quer que naveguem online. As informações coletadas são bastante abrangentes e frequentemente incluem detalhes do navegador, SO, resolução da tela, fontes suportadas, plugins, fuso horário, preferências de idioma e fonte, e até configurações de hardware.

Esta seção descreve os passos que você pode tomar para estar melhor protegido contra ameaças, minimizar o rastreamento online e melhorar sua privacidade.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Bloqueie Anúncios** | Essential | Usar um bloqueador de anúncios pode ajudar a melhorar sua privacidade, reduzindo rastreadores incorporados em anúncios. Anúncios de terceiros podem coletar dados sobre sua navegação e, em alguns casos, distribuir conteúdo malicioso ou enganoso. Bloquear anúncios também acelera o carregamento das páginas, reduz o consumo de dados e melhora a experiência de navegação.
**Certifique-se de que o Site é Legítimo** | Basic | Ao fazer login em qualquer conta online, verifique duas vezes se a URL está correta. Salvar nos favoritos os sites que você visita com frequência ajuda a evitar digitar endereços errados. Ao visitar novos sites, procure sinais de risco: avisos do navegador, redirecionamentos suspeitos, excesso de anúncios, pop-ups e solicitações de permissões desnecessárias. Em caso de dúvida, pesquise a reputação do site e desconfie de ofertas ou solicitações que pareçam urgentes ou boas demais para ser verdade.
**Cuidado com Malware no Navegador** | Basic | Seu sistema ou navegador pode ser comprometido por spyware, mineradores, sequestradores de navegador, redirecionamentos maliciosos e adware. Proteja-se ignorando pop-ups, sendo cauteloso com cliques e evitando prosseguir quando o navegador sinalizar risco. Sinais comuns de infecção incluem: mudança inesperada do mecanismo de busca ou página inicial, barras de ferramentas ou extensões desconhecidas, aumento de anúncios, erros frequentes e páginas muito mais lentas que o normal. Em caso de suspeita, revise extensões, redefina configurações do navegador e considere uma verificação completa do dispositivo.
**Use um Navegador que Respeita a Privacidade** | Essential | Prefira um navegador com foco em privacidade e segurança e revise suas configurações para minimizar telemetria e rastreamento. Desative coleta de dados de uso, bloqueie cookies de terceiros e ative proteções contra rastreadores. Seu navegador tem acesso a tudo que você faz online — manter o software atualizado e ajustar as opções de privacidade reduz significativamente a exposição.
**Use um Motor de Busca Privado** | Essential | Prefira um mecanismo de busca que minimize coleta de dados e não crie perfis de rastreamento. Evite mecanismos que personalizam resultados com base em histórico e identificadores persistentes. Defina sua opção preferida como padrão no navegador para reduzir exposições acidentais.
**Remova Complementos Desnecessários do Navegador** | Essential | Extensões podem ver, registrar ou modificar o que você faz no navegador; algumas aparentemente inofensivas podem ter comportamento indesejado. Sites também podem detectar extensões instaladas e usar isso para melhorar a impressão digital do seu navegador. Antes de instalar, verifique as permissões solicitadas. Instale apenas o que realmente precisa e remova complementos que não usa há algum tempo.
**Mantenha o Navegador Atualizado** | Essential | Vulnerabilidades são encontradas e corrigidas continuamente, então manter o navegador atualizado reduz a exposição a falhas recentes. Verifique regularmente por atualizações nas configurações e prefira habilitar atualizações automáticas quando possível.
**Verifique a Conexão HTTPS** | Essential | Se você inserir informações em um site não-HTTPS, esses dados são transportados sem criptografia e, portanto, podem ser lidos por qualquer pessoa que os intercepte. Não insira dados em sites sem HTTPS e desconfie de páginas com avisos de segurança. O ícone de cadeado indica conexão criptografada, mas não garante que o site seja confiável. Nas configurações do navegador, ative proteções que priorizam conexões seguras sempre que possível.
**Use DNS sobre HTTPS** | Essential | O DNS tradicional faz solicitações em texto simples para que todos possam ver. Isso permite interceptação e manipulação de dados DNS através de ataques de homem no meio. Considerando que o DNS-over-HTTPS realiza resolução de DNS via protocolo HTTPS, significando que dados entre você e seu resolvedor DNS são criptografados. Escolha um provedor confiável e habilite o recurso nas configurações do navegador ou do sistema. Observe que o DoH possui trade-offs, como afetar soluções de filtragem de conteúdo na rede.
**Multi‑Sessão (Containers)** | Essential | Compartimentalização é realmente importante para manter diferentes aspectos da sua navegação separados. Por exemplo, usar diferentes perfis para trabalho, navegação geral, mídia social, compras online etc reduzirá o número de associações que os corretores de dados podem vincular de volta a você. Uma opção é fazer uso de containers/perfis separados dedicados para cada contexto. Alternativamente, use navegadores distintos para tarefas diferentes, mantendo sessões, cookies e logins isolados entre si.
**Use Modo Anônimo** | Essential | Ao usar a máquina de outra pessoa, certifique-se de estar em uma sessão privada/anônima. Isso vai impedir que histórico do navegador, cookies e alguns dados sejam salvos, mas não é à prova de falhas - você ainda pode ser rastreado.
**Entenda a Impressão Digital do Navegador** | Essential | Impressão digital do navegador é um método incrivelmente preciso de rastreamento, onde um site identifica você com base nas informações do seu dispositivo. Você pode testar sua impressão digital em serviços especializados; o objetivo é tornar seu navegador o menos único possível.
**Gerencie os Cookies** | Essential | Limpar cookies regularmente é um passo que você pode dar para ajudar a reduzir o rastreamento de sites. Cookies também podem armazenar seu token de sessão, que se capturado, permitiria que alguém acessasse suas contas sem credenciais. Para mitigar isso, você deve limpar os cookies com frequência.
**Bloqueie Cookies de Terceiros** | Essential | Cookies de terceiros são colocados em seu dispositivo por um site diferente daquele que você está visitando. Isso representa um risco de privacidade, pois uma terceira entidade pode coletar dados da sua sessão atual. Desative cookies de terceiros nas configurações do navegador e verifique periodicamente se a configuração permanece ativa.
**Bloqueie Rastreadores de Terceiros** | Essential | Bloquear rastreadores ajuda a impedir que sites, anunciantes e sistemas de análise coletem seus dados em segundo plano. Habilite as proteções de rastreamento do navegador e, se necessário, utilize apenas complementos confiáveis para reforçar o bloqueio — instale o mínimo necessário e revise permissões e impacto na privacidade.
**Cuidado com Redirecionamentos** | Optional | Embora alguns redirecionamentos sejam inofensivos, outros, como redirecionamentos não validados, são usados em ataques de phishing, podendo fazer com que um link malicioso pareça legítimo. Se não tiver certeza sobre um URL de redirecionamento, confira o destino final com cuidado ou evite clicar.
**Não Faça Login no Navegador** | Optional | Muitos navegadores permitem que você faça login para sincronizar histórico, favoritos e outros dados de navegação entre dispositivos. No entanto, isso não apenas permite maior coleta de dados, mas também aumenta a superfície de ataque ao fornecer outro caminho para um ator malicioso obter informações pessoais.
**Desative Serviços de Previsão** | Optional | Alguns navegadores incluem serviços de predição, como resultados em tempo real e preenchimento automático de URL. Se habilitados, os caracteres digitados podem ser enviados ao mecanismo de busca padrão a cada tecla pressionada. Avalie essa troca e desative o recurso se priorizar privacidade.
**Evite Tradutores Integrados para Páginas Web** | Optional | Ao traduzir páginas inteiras, verifique como o serviço lida com dados exibidos e digitados na página. Evite soluções que enviem todo o conteúdo da página (incluindo possíveis campos sensíveis) sem transparência e prefira opções que ofereçam maior controle sobre o que é compartilhado.
**Desative Notificações Web** | Optional | Notificações push do navegador são um método comum usado por criminosos para incentivá-lo a clicar em seus links, já que é fácil falsificar a fonte. Desative solicitações de notificação nas configurações do navegador e permita apenas para sites estritamente necessários.
**Desative Downloads Automáticos** | Optional | Downloads por drive-by são um método comum de inserir arquivos nocivos no dispositivo de um usuário. Isso pode ser mitigado desativando downloads de arquivos automáticos, e tendo cuidado com sites que solicitam o download de arquivos inesperadamente.
**Não Permita Acesso a Sensores** | Optional | Sites para dispositivos móveis podem acessar os sensores do seu dispositivo sem pedir permissão. Se você conceder essas permissões ao seu navegador uma vez, então todos os sites poderão usar essas capacidades, sem permissão ou notificação.
**Não Permita Localização** | Optional | Serviços de Localização permitem que sites solicitem sua localização física para melhorar sua experiência. Isso deve ser desabilitado nas configurações. Note que ainda existem outros métodos de determinar sua localização aproximada.
**Não Permita Acesso à Câmera ou Microfone** | Optional | Verifique as configurações do navegador para garantir que nenhum site tenha acesso à webcam ou microfone. Também pode ser benéfico usar proteção física como uma tampa de webcam e bloqueador de microfone.
**Desative Salvamento de Senhas no Navegador** | Optional | Não permita que seu navegador armazene nomes de usuário e senhas. Estes podem ser facilmente visualizados ou acessados. Em vez disso, use um gerenciador de senhas.
**Desative o Preenchimento Automático do Navegador** | Optional | Desative o preenchimento automático para dados confidenciais ou pessoais. Esse recurso pode ser prejudicial se seu navegador for comprometido de alguma forma. Em vez disso, considere usar o recurso de Notas do seu gerenciador de senhas.
**Proteja-se de Ataques de Exfiltração** | Optional | O ataque de Exfiltração de CSS é um método onde credenciais e outros detalhes sensíveis podem ser capturados apenas com CSS puro. Reduza o risco desativando o preenchimento automático em campos sensíveis, usando bloqueio de conteúdo ativo e mantendo o navegador e extensões atualizados.
**Desative ActiveX** | Optional | ActiveX é uma API de extensão de navegador integrada ao Microsoft IE, e habilitada por padrão. Não é mais comumente usado, mas como fornece direitos de acesso íntimos aos plugins e pode ser perigoso, portanto, você deve desativá-lo.
**Desative WebRTC** | Optional | WebRTC permite comunicação de áudio/vídeo de alta qualidade e compartilhamento de arquivos ponto a ponto diretamente no navegador. No entanto, pode expor endereços IP em alguns cenários. Se você não precisa desse recurso, desative-o nas configurações ou por perfil.
**Falsifique Assinatura de Canvas HTML5** | Optional | A impressão digital de canvas permite que sites identifiquem e rastreiem usuários com alta precisão. Algumas soluções conseguem aleatorizar ou padronizar essa assinatura; avalie o impacto em compatibilidade e desempenho antes de habilitar.
**Falsifique o Agente de Usuário** | Optional | O agente de usuário informa ao site qual dispositivo, navegador e versão você está usando. Alternar o agente de usuário periodicamente é um pequeno passo que você pode dar para se tornar menos único.
**Ignore DNT (Não Rastrear)** | Optional | Habilitar Não Rastrear tem impacto muito limitado, já que muitos sites não respeitam ou seguem essa opção. Como é raramente usado, pode inclusive adicionar à sua assinatura digital, tornando você mais único.
**Evite Rastreamento HSTS** | Optional | HSTS foi projetado para proteger conexões, mas já foi explorado para criar identificadores persistentes ("super‑cookies"). Revise e limpe políticas HSTS e dados de site nas configurações de privacidade do navegador, se necessário.
**Evite Conexões Automáticas do Navegador** | Optional | Mesmo quando você não está usando o navegador, ele pode fazer conexões para relatar atividade de uso, análises e diagnósticos. Você pode desejar desativar parte disso, o que pode ser feito através das configurações.
**Habilite Isolamento de Primeira Parte** | Optional | Isolamento de primeira parte significa que cookies, cache e outros identificadores ficam restritos ao domínio em foco. Quando disponível, habilitar esse isolamento reduz significativamente o rastreamento entre sites.
**Remova Parâmetros de Rastreamento das URLs** | Advanced | Sites frequentemente adicionam parâmetros GET adicionais às URLs que você clica, para identificar informações como fonte/referência. Você pode limpar manualmente esses parâmetros nas URLs ou utilizar regras/filtros que removam identificadores de rastreamento automaticamente.
**Segurança na Primeira Inicialização** | Advanced | Após instalar um navegador web, na primeira vez que você o iniciar (antes de configurar suas definições de privacidade), a maioria dos navegadores fará conexão de volta. Portanto, após instalar um navegador, você deve primeiro desativar sua conexão de internet, depois configurar as opções de privacidade antes de reativar sua conectividade de internet.
**Considere Navegação com Roteamento em Múltiplos Nós** | Advanced | Navegadores que roteiam o tráfego por múltiplos nós e aplicam proteções adicionais podem aumentar o anonimato e dificultar interceptação e rastreamento, à custa de velocidade e experiência de uso.
**Desative o JavaScript** | Advanced | Muitas aplicações web modernas são baseadas em JavaScript, então desativá-lo reduzirá significativamente sua experiência de navegação. Mas se você realmente quiser ir a fundo, isso definitivamente reduzirá sua superfície de ataque.


## Email

O email é parte central do nosso dia a dia e continuará sendo no futuro próximo. Apesar disso, a infraestrutura do correio eletrônico tem limitações históricas de segurança e privacidade. Relatos indicam aumento de golpes por email e técnicas de engenharia social, portanto é importante adotar medidas básicas de proteção.
Se alguém obtiver acesso à sua caixa de entrada, pode usar redefinições de senha para comprometer outras contas. Por isso, reforçar a segurança do email é essencial para a sua segurança digital como um todo.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Tenha mais de um endereço de email** | Essential | Considere usar um endereço de email diferente para comunicações críticas de segurança em relação a emails triviais como newsletters. Esta compartimentalização pode reduzir a quantidade de danos causados por uma violação de dados, e também facilita a recuperação de uma conta comprometida.
**Mantenha seu Endereço de Email Privado** | Essential | Não compartilhe seu email principal publicamente, já que endereços de email são frequentemente o ponto de partida para a maioria dos ataques de phishing.
**Mantenha sua Conta Segura** | Essential | Use uma senha longa e única, habilite 2FA e seja cuidadoso ao fazer login. Sua conta de email fornece um ponto de entrada fácil para todas as suas outras contas online para um atacante.
**Desabilite o Carregamento Automático de Conteúdo Remoto** | Essential | Mensagens de email podem conter conteúdo remoto como imagens ou folhas de estilo, frequentemente carregadas automaticamente do servidor. Você deve desabilitar isso, pois expõe seu endereço IP e informações do dispositivo, e é frequentemente usado para rastreamento. Desative o carregamento automático e permita conteúdo remoto apenas quando necessário.
**Use Texto Simples** | Optional | Há dois tipos principais de emails na internet: texto simples e HTML. O primeiro é fortemente preferido para privacidade e segurança pois mensagens HTML frequentemente incluem identificadores em links e imagens inline, que podem coletar dados de uso e pessoais. Há também numerosos riscos de execução remota de código visando o parser HTML do seu cliente de email, que não podem ser explorados se você estiver usando texto simples. Consulte a documentação do seu provedor/cliente de email para habilitar a visualização em texto simples e bloquear conteúdo remoto por padrão.
**Não conecte aplicativos de terceiros à sua conta de email** | Optional | Se você der a um aplicativo ou plugin de terceiros acesso total à sua caixa de entrada, eles efetivamente têm acesso total e irrestrito a todos os seus emails e seu conteúdo, o que representa riscos significativos de segurança e privacidade.
**Não Compartilhe Dados Sensíveis por Email** | Optional | E-mails são facilmente interceptados. Além disso, você não pode ter certeza de quão seguro é o ambiente do seu destinatário.  Portanto, e-mails não podem ser considerados seguros para trocar informações confidenciais, a menos que sejam criptografados.
**Considere Mudar para um Provedor de Email Seguro** | Optional | Considere provedores com foco em segurança e privacidade, que ofereçam criptografia ponta a ponta, políticas claras de proteção de dados, autenticação forte e recursos como aliases e bloqueio de rastreamento. Verifique também a jurisdição, a transparência sobre como os dados são tratados e a disponibilidade de clientes multiplataforma.
**Use uma Chave Inteligente** | Advanced | OpenPGP não suporta sigilo prospectivo, o que significa que se sua chave privada ou a chave privada do destinatário for roubada, todas as mensagens anteriormente criptografadas com ela serão expostas. Portanto, você deve ter muito cuidado para manter suas chaves privadas seguras. Um método para fazer isso é usar uma Chave Inteligente USB para assinar ou descriptografar mensagens, permitindo que você faça isso sem que sua chave privada saia do dispositivo USB.
**Use Pseudônimos / Encaminhamento Anônimo** | Advanced | O alias de email permite que mensagens sejam enviadas para [qualquer-coisa]@meu-dominio.com e ainda cheguem à sua caixa de entrada principal. Efetivamente, permite que você use um endereço de email diferente e único para cada serviço no qual se cadastra. Isso significa que se você começar a receber spam, pode bloquear esse alias e determinar qual empresa vazou seu endereço de email.
**Subendereçamento** | Optional | Uma alternativa para alias é o subendereçamento, onde qualquer coisa após o símbolo `+` é omitida durante a entrega do e-mail. Isso permite que você acompanhe quem compartilhou ou vazou seu endereço de email, mas, diferentemente do alias, não protegerá contra a revelação do seu endereço real.
**Use um Domínio Personalizado** | Advanced | Usar um domínio personalizado significa que você não é dependente do endereço atribuído pelo seu provedor de email.  Assim, você pode facilmente trocar de provedor no futuro e não precisa se preocupar com a descontinuação de um serviço.
**Sincronize com um cliente para backup** | Advanced | Para evitar perder acesso temporário ou permanente aos seus e-mails durante um evento não planejado (como interrupção ou bloqueio de conta), use um cliente de email de desktop para sincronizar/baixar mensagens via IMAP e armazenar uma cópia local no seu dispositivo principal.
**Tenha Cuidado com Assinaturas de Email** | Advanced | Você não sabe quão seguro é o ambiente de e-mail do destinatário da sua mensagem. Existem várias extensões que vasculham mensagens automaticamente e criam um banco de dados detalhado de informações de contato com base em assinaturas de e-mail.
**Tenha Cuidado com Respostas Automáticas** | Advanced | Respostas automáticas de ausência são muito úteis para informar que haverá um atraso na resposta, mas com muita frequência as pessoas revelam informações demais - o que pode ser usado em engenharia social e ataques direcionados.
**Escolha o Protocolo de Email Correto** | Advanced | Não use protocolos desatualizados (abaixo de IMAPv4 ou POPv3), ambos têm vulnerabilidades conhecidas e segurança obsoleta.
**Hospedagem Própria** | Advanced | Hospedar seu próprio servidor de e-mail não é recomendado para usuários não avançados, pois configurá-lo corretamente é crítico e requer sólidos conhecimentos de redes.
**Sempre Use Portas TLS** | Advanced | Existem opções SSL para POP3, IMAP e SMTP como portas TCP/IP padrão. Elas são fáceis de usar, amplamente suportadas e sempre devem ser usadas em vez das portas de e-mail em texto plano.
**Disponibilidade de DNS** | Advanced | Para servidores de e-mail auto-hospedados, para evitar problemas de DNS afetando a disponibilidade, use pelo menos  2 registros MX, com registros MX secundários e terciários para redundância quando o registro MX primário falhar.
**Previna Ataques DDoS e de Força Bruta** | Advanced | Para servidores de e-mail auto-hospedados (especificamente SMTP), limite o número total de conexões simultâneas  e a taxa máxima de conexões para reduzir o impacto de tentativas de ataques de bots.
**Mantenha uma Lista Negra de IPs** | Advanced | Para servidores de e-mail auto-hospedados, você pode melhorar os filtros de spam e endurecer a segurança,  mantendo uma lista local de IPs bloqueados atualizada e listas de bloqueio em tempo real de URIs de spam  para filtrar hiperlinks maliciosos.


## Messaging



**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Use Apenas Mensageiros com Criptografia Ponta a Ponta Completa** | Essential | Criptografia ponta a ponta é um sistema de comunicação onde as mensagens são criptografadas no seu dispositivo e só são descriptografadas quando alcançam o destinatário pretendido. Isso garante que qualquer agente que intercepte o tráfego não possa ler o conteúdo das mensagens, nem qualquer pessoa com acesso aos servidores centrais onde os dados são armazenados.
**Use Apenas Plataformas de Mensagens de Código Aberto** | Essential | Se o código for de código aberto, ele pode ser examinado e auditado independentemente por qualquer pessoa qualificada para garantir que não haja portas traseiras, vulnerabilidades ou outros problemas de segurança.
**Use uma Plataforma de Mensagens "Confiável"** | Essential | Ao selecionar um aplicativo de mensagens criptografadas, certifique-se de que ele seja totalmente de código aberto, estável, mantido ativamente e, de preferência, respaldado por desenvolvedores respeitáveis.
**Verifique as Configurações de Segurança** | Essential | Ative configurações de segurança, incluindo verificação de contato, notificações de segurança e criptografia. Desative recursos opcionais não relacionados à segurança, como confirmação de leitura, última vez online e notificação de digitação.
**Garanta que o Ambiente do Seu Destinatário Seja Seguro** | Essential | Sua conversa só pode ser tão segura quanto o elo mais fraco. Frequentemente, a maneira mais fácil de infiltrar um canal de comunicação é direcionar o indivíduo ou nó com menos proteção.
**Desative Serviços em Nuvem** | Essential | Alguns aplicativos de mensagens móveis oferecem um complemento web ou desktop. Isso não apenas aumenta a superfície de ataque, mas também está associado a vários problemas críticos de segurança, portanto, deve ser evitado, se possível.
**Proteja Conversas em Grupo** | Essential | O risco de comprometimento aumenta exponencialmente quanto mais participantes há em um grupo, pois a superfície de ataque aumenta. Verifique periodicamente se todos os participantes são legítimos.
**Crie um Ambiente Seguro para Comunicação** | Essential | Existem várias etapas onde suas comunicações digitais podem ser monitoradas ou interceptadas. Isso inclui: seu dispositivo ou o dispositivo dos participantes, seu provedor de internet, gateway nacional ou registro governamental, o provedor de mensagens, os servidores.
**Concorde com um Plano de Comunicação** | Optional | Em certas situações, pode valer a pena fazer um plano de comunicação. Este deve incluir métodos primários e secundários de entrar em contato de forma segura.
**Remova Metadados de Mídias** | Optional | Metadados são "Dados sobre Dados" ou informações adicionais anexadas a um arquivo ou transação. Ao enviar uma foto, gravação de áudio, vídeo ou documento, você pode estar revelando mais do que pretendia.
**Neutralize URLs** | Optional | Enviar links através de vários serviços pode expor involuntariamente suas informações pessoais. Isso ocorre porque, quando uma miniatura ou pré-visualização é gerada, isso acontece no lado do cliente.
**Verifique seu Destinatário** | Optional | Sempre certifique-se de que está conversando com o destinatário pretendido e que ele não foi comprometido. Um método para fazer isso é usar um aplicativo que suporte verificação de contato.
**Ative Mensagens Efêmeras** | Optional | Mensagens autodestruíveis são um recurso que faz com que suas mensagens sejam excluídas automaticamente após um determinado período. Isso significa que se seu dispositivo for perdido, roubado ou apreendido, um invasor terá acesso apenas às comunicações mais recentes.
**Evite SMS** | Optional | SMS pode ser conveniente, mas não é seguro. É suscetível a ameaças como interceptação, troca de SIM, manipulação e malware.
**Cuidado com Rastreadores** | Optional | Tenha cuidado com aplicativos de mensagens com rastreadores, pois as estatísticas detalhadas de uso que eles coletam são frequentemente muito invasivas e podem às vezes revelar sua identidade e informações pessoais que normalmente não pretenderia compartilhar.
**Considere a Jurisdição** | Advanced | As jurisdições onde a organização está localizada e os dados são hospedados também devem ser levadas em consideração.
**Use uma Plataforma Anônima** | Advanced | Se você acredita que pode ser alvo, deve optar por uma plataforma de mensagens anônima que não exija um número de telefone ou qualquer outra informação pessoalmente identificável para se cadastrar ou usar.
**Garanta que Haja Suporte para Sigilo Prospectivo** | Advanced | Opte por uma plataforma que implemente sigilo prospectivo. Isso significa que seu aplicativo gera uma nova chave de criptografia para cada mensagem.
**Considere uma Plataforma Descentralizada** | Advanced | Se todos os dados passarem por um provedor central, você terá que confiar neles com seus dados e metadados. Não é possível verificar se o sistema em execução é autêntico sem portas traseiras.


## Social Media

Comunidades online existem desde o início da internet e permitem que pessoas ao redor do mundo se conectem, se comuniquem e compartilhem. Apesar dos benefícios sociais, há preocupações significativas de privacidade e coleta de dados por plataformas. Proteja sua conta, ajuste as configurações de privacidade e, mesmo assim, considere que conteúdo publicado pode tornar-se efetivamente público. Se possível, limite o uso de redes sociais convencionais.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Proteja sua Conta** | Essential | Perfis de redes sociais são frequentemente roubados ou tomados. Para proteger sua conta: use uma senha única e forte, e ative a autenticação de dois fatores.
**Verifique as Configurações de Privacidade** | Essential | A maioria das redes sociais permite controlar suas configurações de privacidade. Certifique-se de estar confortável com os dados que está expondo atualmente e para quem.
**Considere Todas as Interações como Públicas** | Essential | Ainda existem inúmeros métodos de visualizar conteúdo 'privado' de usuários em muitas redes sociais. Portanto, antes de carregar, publicar ou comentar algo, pense: "Eu me importaria se isso fosse totalmente público?"
**Considere Todas as Interações como Permanentes** | Essential | Praticamente toda publicação, comentário, foto etc. está sendo continuamente salva por inúmeros serviços terceiros, que arquivam esses dados e os tornam indexáveis e publicamente disponíveis quase para sempre.
**Não Revele Demais** | Essential | Informações de perfil criam um tesouro de dados para hackers, o tipo de informação que os ajuda a personalizar golpes de phishing. Evite compartilhar muitos detalhes (data de nascimento, cidade natal, escola etc).
**Tenha Cuidado com o que Carrega** | Essential | Atualizações de status, comentários, check-ins e mídias podem revelar involuntariamente muito mais do que você pretende. Isso é especialmente relevante para fotos e vídeos, que podem mostrar coisas no fundo.
**Não Compartilhe E-mail ou Número de Telefone** | Essential | Publicar seu endereço de e-mail ou número de celular real fornece mais munição para hackers, trolls e spammers usarem contra você, e também pode permitir que aliases, perfis ou pontos de dados separados sejam conectados.
**Não Conceda Permissões Desnecessárias** | Essential | Por padrão, muitos aplicativos populares de redes sociais solicitam permissão para acessar seus contatos, registro de chamadas, localização, histórico de mensagens etc. Se não precisarem desse acesso, não o conceda.
**Cuidado com Integrações de Terceiros** | Essential | Evite se cadastrar em contas usando login de Rede Social, revogue o acesso a aplicativos sociais que não usa mais.
**Evite Publicar Dados Geográficos Enquanto Ainda Estiver no Local** | Essential | Se planeja compartilhar qualquer conteúdo que revele uma localização, espere até ter deixado o local. Isso é particularmente importante quando você está em uma viagem, em um restaurante, campus, hotel/resort, prédio público ou aeroporto.
**Remova Metadados Antes de Carregar Mídia** | Optional | A maioria dos smartphones e algumas câmeras anexam automaticamente um conjunto abrangente de dados adicionais (chamados dados EXIF) a cada fotografia. Remova esses dados antes de carregar.
**Implemente Camuflagem de Imagem** | Advanced | Técnicas de camuflagem podem alterar sutilmente características em imagens para reduzir a eficácia de sistemas automáticos de reconhecimento facial, sem mudanças perceptíveis para humanos. Avalie vantagens e limitações antes de aplicar em larga escala.
**Considere Falsear GPS na Vizinhança da Casa** | Advanced | Mesmo que você nunca use redes sociais, sempre haverá outras pessoas que não são tão cuidadosas e podem revelar sua localização.
**Considere Informações Falsas** | Advanced | Se você só quer ler e não pretende postar muito, considere usar um nome de alias e detalhes de contato falsos.
**Não Tenha Nenhuma Conta em Redes Sociais** | Advanced | Redes sociais são fundamentalmente não privadas, então para máxima segurança online e privacidade, evite usar qualquer rede social convencional.


## Redes

Esta seção aborda como conectar seus dispositivos à internet de forma segura, incluindo configurar seu roteador e configurar uma VPN.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Use uma VPN** | Essential | Use uma VPN confiável e paga. Isso pode ajudar a proteger os sites que você visita de registrar seu IP real, reduzir a quantidade de dados coletados por seu provedor de internet e aumentar a proteção em redes WiFi públicas.
**Altere a Senha do Roteador** | Essential | Após obter um novo roteador, altere a senha. Senhas padrão de roteadores são publicamente disponíveis, significando que qualquer pessoa nas proximidades poderá se conectar.
**Use WPA2 com uma senha forte** | Essential | Utilize os padrões de segurança WPA2 e WPA3 (em roteadores mais novos).  Após obter um novo roteador, altere a senha para uma chave forte e complexa.  Senhas padrão de roteadores são publicamente conhecidas e representam um risco significativo.
**Mantenha o firmware do roteador atualizado** | Essential | Os fabricantes disponibilizam atualizações de firmware para corrigir vulnerabilidades de segurança,  implementar novos padrões e, às vezes, adicionar recursos ou melhorar o desempenho do seu roteador.
**Implemente uma VPN em Toda a Rede** | Optional | Configure a VPN no seu roteador, firewall ou servidor doméstico para que todo o tráfego dos dispositivos  seja criptografado e roteado através dele, sem necessidade de aplicativos VPN individuais.
**Proteja-se contra vazamentos de DNS** | Optional | Ao usar uma VPN, é extremamente importante usar exclusivamente o servidor DNS do seu provedor de VPN  ou de um serviço seguro.
**Use um Protocolo VPN Seguro** | Optional | Prefira protocolos modernos com criptografia robusta e desempenho estável.  Evite opções legadas conhecidas por fragilidades.
**Proteja o DNS** | Optional | Use DNS-over-HTTPS, que realiza a resolução de DNS através do protocolo HTTPS,  criptografando os dados entre você e seu resolvedor de DNS.
**Evite o roteador gratuito do seu provedor de internet** | Optional | Normalmente, esses roteadores são fabricados de forma barata em massa na China,  com firmware proprietário inseguro que não recebe atualizações de segurança regulares.
**Crie uma Lista Branca de Endereços MAC** | Optional | Você pode criar uma lista branca de endereços MAC nas configurações do roteador,  impedindo que dispositivos desconhecidos se conectem à sua rede, mesmo que conheçam suas credenciais.
**Altere o Endereço IP Local do Roteador** | Optional | É possível que um script malicioso no seu navegador web explore uma vulnerabilidade  de cross-site scripting, acessando roteadores conhecidamente vulneráveis em seu endereço IP local e adulterando-os.
**Não Revele Informações Pessoais no SSID** | Optional | Atualize o nome da sua rede, escolhendo um SSID que não o identifique,  não inclua número do apartamento/endereço e não especifique a marca/modelo do dispositivo.
**Saia das Listagens de Roteadores** | Optional | SSIDs de WiFi são digitalizados, registrados e publicados em vários sites,  o que representa uma séria preocupação de privacidade para alguns.
**Oculte seu SSID** | Optional | O Service Set Identifier (SSID) do seu roteador é simplesmente o nome da rede.  Se não for visível, pode aumentar marginalmente a segurança, embora não seja uma medida definitiva.
**Desative WPS** | Optional | Wi-Fi Protected Setup fornece um método mais fácil de conexão, sem digitar uma senha WiFi longa, mas o WPS introduz uma série de graves problemas de segurança.
**Desative UPnP** | Optional | Universal Plug and Play permite que aplicativos encaminhem automaticamente uma porta no seu roteador, mas possui um longo histórico de sérios problemas de segurança.
**Use uma Rede de Convidados** | Optional | Não conceda acesso à sua rede WiFi principal para visitantes, pois isso permite que eles interajam com outros dispositivos na rede.
**Altere o IP Padrão do Roteador** | Optional | Modificar o endereço IP padrão do painel de administração do seu roteador tornará mais difícil para scripts maliciosos que visam endereços IP locais.
**Encerre processos e serviços não utilizados no roteador** | Optional | Serviços como Telnet e SSH que fornecem acesso via linha de comando a dispositivos nunca devem ser expostos à internet e também devem ser desativados na rede local, a menos que sejam realmente necessários.
**Não Tenha Portas Abertas** | Optional | Feche todas as portas abertas no seu roteador que não são necessárias. Portas abertas fornecem uma entrada fácil para hackers.
**Desative Protocolos de Acesso Remoto Não Utilizados** | Optional | Quando protocolos como PING, Telnet, SSH, UPnP e HNAP são habilitados, eles permitem que seu roteador seja sondado de qualquer lugar do mundo.
**Desative o Gerenciamento Baseado em Nuvem** | Optional | Você deve tratar o painel de administração do seu roteador com o máximo cuidado, pois danos consideráveis podem ser causados se um invasor conseguir obter acesso.
**Gerencie o Alcance Corretamente** | Optional | É comum querer aumentar ao máximo o alcance do seu roteador, mas se você reside em um apartamento menor, sua área de superfície de ataque é aumentada quando sua rede WiFi pode ser captada do outro lado da rua.
**Considere Roteamento em Múltiplos Nós** | Advanced | VPNs têm limitações. Para maior anonimato, considere soluções que roteiam o tráfego por múltiplos nós independentes, adicionando camadas de proteção contra correlação e rastreamento, com custo de desempenho.
**Desative o WiFi em Todos os Dispositivos** | Advanced | Conectar-se a uma rede WiFi, mesmo segura, aumenta sua área de superfície de ataque. Desative o WiFi doméstico e conecte cada dispositivo via Ethernet.


## Dispositivos Móveis

Os smartphones revolucionaram completamente nossa forma de viver, trazendo o mundo inteiro para a palma de nossas mãos. Para milhões de pessoas, esses dispositivos são muito mais do que simples telefones - são o principal meio de comunicação, entretenimento, trabalho e acesso ao conhecimento. No entanto, por trás da incrível conveniência, existe um lado sombrio que poucos compreendem completamente.
O rastreamento geográfico transformou-se em uma ferramenta invasiva que monitora praticamente cada movimento dos usuários. Temos pouquíssimo controle sobre quem acessa e utiliza esses dados sensíveis. Cada smartphone é capaz de gerar um perfil digital detalhado, que vai muito além do que imaginamos: desde nossos hábitos de navegação até nossa localização em tempo real.
Os aplicativos móveis representam outro ponto crítico de vulnerabilidade. Muitos carecem de patches de segurança adequados e podem conter backdoors potencialmente perigosos. Um smartphone gera constantemente dados sobre você - alguns compartilhados intencionalmente, outros coletados silenciosamente em segundo plano. Pode ser assustador perceber o quanto empresas como Google, Microsoft, Apple e Facebook conhecem sobre nossa vida pessoal - em alguns casos, sabem mais sobre nós do que nossa própria família.
A preocupação com a coleta de dados por governos tem crescido significativamente. Agências federais frequentemente solicitam dados detalhados de grandes empresas de tecnologia, muitas vezes usando mandados que permitem acesso em massa a informações de diversos usuários, inclusive de pessoas completamente alheias a qualquer investigação. Essa prática levanta sérias questões sobre privacidade e vigilância em massa.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Criptografe Seu Dispositivo** | Essential | Para manter seus dados seguros contra acesso físico, use criptografia de arquivos. Isso significa que, se seu dispositivo for perdido ou roubado, ninguém terá acesso aos seus dados.
**Desligue Recursos de Conectividade Não Utilizados** | Essential | Quando não estiver usando Wi-Fi, Bluetooth, NFC etc., desligue esses recursos. Existem várias ameaças comuns que utilizam essas funcionalidades.
**Mantenha o número de aplicativos ao mínimo** | Essential | Desinstale aplicativos que você não precisa ou não usa regularmente. Os aplicativos frequentemente executam em segundo plano,  deixando seu dispositivo mais lento e coletando dados.
**Permissões de Aplicativos** | Essential | Não conceda aos aplicativos permissões que eles não precisam. Revise regularmente acesso a localização, câmera, microfone, contatos e sensores. Quando disponível, prefira permissões temporárias ou de uso único.
**Instale aplicativos apenas de fontes oficiais** | Essential | Aplicativos na Apple App Store e Google Play Store são verificados e assinados criptograficamente,  tornando-os menos propensos a serem maliciosos.
**Cuidado com Ameaças de Carregamento de Celular** | Optional | Juice Jacking é quando hackers usam estações de carregamento públicas para instalar malware em seu smartphone ou tablet through a compromised USB port.
**Configure um PIN de operadora móvel** | Essential | Sequestro de SIM é quando um hacker consegue transferir seu número de celular para seu próprio SIM. A maneira mais fácil de se proteger contra isso é configurar um PIN através do seu provedor móvel.
**Saia das Listagens de ID de Chamadas** | Optional | Para manter seus detalhes privados, remova seu número de cadastros públicos e aplicativos de identificação de chamadas, evitando exposição desnecessária.
**Use Mapas Offline** | Optional | Considere usar aplicativos de mapas offline para reduzir tráfego de dados e possíveis vazamentos de localização.
**Saia de anúncios personalizados** | Optional | Você pode reduzir ligeiramente a quantidade de dados coletados ao optar por não ver anúncios personalizados.
**Apague após muitas tentativas de login** | Optional | Para se proteger contra um invasor forçando seu PIN, configure seu dispositivo para apagar após muitas tentativas de login com falha.
**Monitore Rastreadores** | Optional | Avalie periodicamente aplicativos instalados para identificar bibliotecas de rastreamento e reduzir coleta de dados desnecessária. Prefira apps com políticas de privacidade claras e mínimas dependências de rastreadores.
**Use um Firewall Móvel** | Optional | Para impedir que aplicativos vazem dados sensíveis de privacidade, você pode instalar um aplicativo de firewall.
**Reduza a Atividade em Segundo Plano** | Optional | Limite atividades em segundo plano para apps que não precisam rodar continuamente. Use controles do sistema para restringir atualizações em segundo plano e otimizações de bateria.
**Use Sandbox para Aplicativos Móveis** | Optional | Utilize perfis de trabalho, usuários separados ou recursos de sandbox/isolamento do sistema para conter aplicativos que pedem permissões excessivas.
**Considere Roteamento em Múltiplos Nós** | Advanced | Em cenários que exigem maior anonimato, considere soluções que roteiem o tráfego por múltiplos nós independentes, adicionando camadas de proteção contra vigilância e redes Wi‑Fi públicas hostis (com custo de desempenho).
**Evite Teclados Virtuais Personalizados** | Optional | Recomenda-se usar o teclado padrão do seu dispositivo. Se você optar por usar um aplicativo de teclado de terceiros, certifique-se de que seja confiável.
**Reinicie o Dispositivo Regularmente** | Optional | Reinicie seu telefone pelo menos uma vez por semana para limpar o estado do aplicativo em cache na memória  e pode funcionar mais suavemente após o reinício.
**Evite SMS** | Optional | SMS não deve ser usado para receber códigos de 2FA ou para comunicação sensível. Prefira mensageiros com criptografia ponta a ponta.
**Mantenha Seu Número Privado** | Optional | Considere números virtuais/linhas secundárias para separar contextos (trabalho, serviços online, vendas), facilitando a compartimentalização e reduzindo spam.
**Cuidado com Stalkerware** | Optional | Stalkerware é um malware instalado diretamente em seu dispositivo por alguém que você conhece. A melhor maneira de se livrar dele é fazer uma redefinição de fábrica.
**Prefira o Navegador ao Invés de Aplicativos Dedicados** | Optional | Sempre que possível, considere usar um navegador seguro para acessar sites, em vez de instalar aplicativos dedicados.
**Considere usar uma ROM personalizada (Android)** | Advanced | Se você está preocupado com a quantidade de informações pessoais coletadas pelo fabricante do seu dispositivo, considere usar uma ROM personalizada focada em privacidade.


## Computadores Pessoais

Embora Windows e OS X sejam fáceis de usar e convenientes, ambos estão longe de serem seguros. Seu sistema operacional fornece a interface entre o hardware e seus aplicativos, então se for comprometido, pode ter efeitos prejudiciais.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Mantenha seu Sistema Atualizado** | Essential | As atualizações do sistema contêm correções/patches para problemas de segurança, melhoram o desempenho e às vezes adicionam novos recursos. Instale novas atualizações quando solicitado.
**Criptografe Seu Dispositivo** | Essential | Habilite a criptografia de disco completo fornecida pelo seu sistema operacional. Isso previne acesso não autorizado aos seus dados se o computador for perdido ou roubado.
**Faça Backup de Dados Importantes** | Essential | Mantenha backups criptografados para prevenir perdas por ransomware, roubo ou danos. Use criptografia para arquivos sincronizados na nuvem e para mídias removíveis (como pendrives e HDs externos).
**Ative Bloqueio de Tela quando Inativo** | Essential | Bloqueie seu computador quando estiver ausente e configure para solicitar senha ao retomar da tela de bloqueio  ou do modo de suspensão para prevenir acesso não autorizado.
**Desative Cortana ou Siri** | Essential | Assistentes controlados por voz podem ter implicações de privacidade devido aos dados enviados para processamento. Desative ou limite suas capacidades de escuta.
**Revise Seus Aplicativos Instalados** | Essential | Mantenha os aplicativos instalados ao mínimo para reduzir a exposição a vulnerabilidades e limpe regularmente os caches dos aplicativos.
**Gerencie Permissões** | Essential | Controle quais aplicativos têm acesso à sua localização, câmera, microfone, contatos e outras informações sensíveis.
**Não Permita o Envio de Dados de Uso para a Nuvem** | Essential | Limite a quantidade de informações de uso ou feedback enviados para a nuvem para proteger sua privacidade.
**Evite Desbloqueio Rápido** | Essential | Use uma senha forte em vez de biometria ou PINs curtos para desbloquear seu computador e aumentar a segurança.
**Desligue o Computador, em Vez de Usar Modo de Espera** | Essential | Desligue seu dispositivo quando não estiver em uso, especialmente se o disco estiver criptografado, para manter os dados seguros.
**Não Vincule seu PC à Sua Conta Microsoft ou Apple** | Optional | Use apenas uma conta local para evitar sincronização e exposição de dados. Evite usar serviços de sincronização que comprometam a privacidade.
**Verifique Quais Serviços de Compartilhamento Estão Habilitados** | Optional | Desative recursos de compartilhamento de rede que você não está usando para fechar portas de entrada para ameaças comuns.
**Não Use Conta Root/Admin para Tarefas Não Administrativas** | Optional | Use uma conta de usuário sem privilégios para tarefas diárias e eleve permissões apenas para mudanças administrativas para mitigar vulnerabilidades.
**Bloqueie Webcam e Microfone** | Optional | Cubra sua webcam quando não estiver em uso e considere bloquear gravações de áudio não autorizadas para proteger sua privacidade.
**Use um Filtro de Privacidade** | Optional | Use um filtro de privacidade de tela em espaços públicos para prevenir visualização por terceiros e proteger informações sensíveis.
**Proteja Fisicamente o Dispositivo** | Optional | Use um Kensington Lock para proteger seu laptop em espaços públicos e considere travas de porta para prevenir acesso físico não autorizado.
**Não Carregue Dispositivos a Partir do seu PC** | Optional | Use um power bank ou carregador de parede AC em vez do seu PC para evitar riscos de segurança associados às conexões USB.
**Aleatorize seu Endereço de Hardware no Wi-Fi** | Optional | Modifique ou aleatorize seu endereço MAC para se proteger contra rastreamento em diferentes redes Wi-Fi.
**Use um Firewall** | Optional | Instale um aplicativo de firewall para monitorar e bloquear acessos à internet não autorizados por aplicativos específicos, protegendo contra ataques de acesso remoto e violações de privacidade.
**Proteja-se Contra Keyloggers de Software** | Optional | Use ferramentas de criptografia de digitação para se proteger contra keyloggers de software que registram suas teclas digitadas.
**Verifique a Conexão do Teclado** | Optional | Seja vigilante quanto a keyloggers de hardware ao usar computadores públicos ou desconhecidos, verificando as conexões do teclado.
**Previna Ataques de Injeção de Teclado** | Optional | Bloqueie seu PC quando estiver ausente e restrinja dispositivos USB desconhecidos. Use políticas que exijam autorização explícita para novos dispositivos a fim de mitigar injeções de teclado.
**Não Use Antivírus Comercial "Grátis"** | Optional | Confie em ferramentas de segurança integradas e evite aplicativos antivírus gratuitos devido ao seu potencial para invasão de privacidade e coleta de dados.
**Verifique Periodicamente Rootkits** | Advanced | Faça verificações periódicas com ferramentas confiáveis de detecção de rootkits para identificar e mitigar tentativas de controle total do sistema.
**Senha de Boot da BIOS** | Advanced | Habilite uma senha de BIOS ou UEFI para adicionar uma camada adicional de segurança durante a inicialização, mas esteja ciente de suas limitações.
**Use um Sistema Operacional Focado em Segurança** | Advanced | Considere migrar para sistemas com foco em privacidade/segurança ou distribuições com configurações reforçadas quando o seu caso de uso exigir maior proteção.
**Faça Uso de Máquinas Virtuais** | Advanced | Use máquinas virtuais para atividades arriscadas ou testar software suspeito para isolar ameaças potenciais do seu sistema principal.
**Compartimentalize** | Advanced | Isole diferentes programas e fontes de dados uns dos outros o máximo possível para limitar a extensão de possíveis violações.
**Desative Recursos Indesejados (Windows)** | Advanced | Desative "recursos" e serviços desnecessários do Windows que executam em segundo plano para reduzir a coleta de dados e uso de recursos.
**Inicialização Segura** | Advanced | Certifique-se de que o Secure Boot esteja habilitado para impedir que malware substitua seu carregador de inicialização e outros componentes críticos de software.
**Acesso SSH Seguro** | Advanced | Tome medidas para proteger o acesso SSH de ataques alterando a porta padrão, usando chaves SSH e configurando firewalls.
**Feche Portas Abertas Não Utilizadas** | Advanced | Desligue serviços que escutam em portas externas que não são necessários para proteger contra exploits remotos e melhorar a segurança.
**Implemente Controle de Acesso Obrigatório** | Advanced | Restrinja o acesso privilegiado para limitar os danos que podem ser causados caso um sistema seja comprometido.
**Use Tokens de Canário** | Advanced | Implante tokens de canário para detectar acessos não autorizados aos seus arquivos ou e-mails rapidamente e coletar informações sobre o intruso.
  color: pink


## Casa Inteligente

Assistentes residenciais e outros dispositivos conectados à internet coletam grandes quantidades de dados pessoais (incluindo amostras de voz, dados de localização, detalhes da casa e registros de interações). Como o controle sobre o que é coletado, como é armazenado e para que será usado é limitado, é difícil recomendar dispositivos de casa inteligente para quem prioriza privacidade e segurança.
Segurança vs Privacidade: Existem muitos dispositivos inteligentes no mercado que alegam aumentar a segurança da sua casa, sendo fáceis e convenientes de usar (como Alarmes Inteligentes Antifurto, Câmeras de Segurança pela Internet, Fechaduras Inteligentes e Campainhas de Acesso Remoto, para citar alguns). Esses dispositivos podem parecer tornar a segurança mais fácil, mas há uma troca em termos de privacidade: eles coletam grandes quantidades de dados pessoais e deixam você sem controle sobre como são armazenados ou utilizados. A segurança desses dispositivos também é questionável, já que muitos deles podem ser (e estão sendo) hackeados, permitindo que um invasor burle a detecção com o mínimo de esforço.
A opção mais respeitadora da privacidade seria não usar dispositivos "inteligentes" conectados à internet em sua casa e não depender de um dispositivo de segurança que exija conexão com a internet. Mas se você o fizer, é importante entender completamente os riscos de qualquer produto antes de comprá-lo. Em seguida, ajuste as configurações para aumentar a privacidade e a segurança. A lista de verificação a seguir ajudará a mitigar os riscos associados a dispositivos domésticos conectados à internet.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Renomeie dispositivos para não especificar marca/modelo** | Essential | Altere os nomes padrão dos dispositivos para algo genérico para prevenir ataques direcionados, obscurecendo informações de marca ou modelo.
**Desative microfone e câmera quando não estiverem em uso** | Essential | Use interruptores de hardware para desligar microfones e câmeras em dispositivos inteligentes para proteger contra gravações acidentais ou acesso direcionado.
**Entenda quais dados são coletados, armazenados e transmitidos** | Essential | Pesquise e certifique-se de estar confortável com as práticas de tratamento de dados de dispositivos de casa inteligente antes da compra, evitando dispositivos que compartilhem dados com terceiros.
**Defina configurações de privacidade e saia do compartilhamento de dados com terceiros** | Essential | Ajuste as configurações do aplicativo para os controles de privacidade mais rígidos e saia do compartilhamento de dados com terceiros sempre que possível.
**Não vincule seus dispositivos de casa inteligente à sua identidade real** | Essential | Use nomes de usuário e senhas anônimos, evitando cadastro/login via redes sociais ou outros serviços de terceiros para manter a privacidade.
**Mantenha o firmware atualizado** | Essential | Atualize regularmente o firmware dos dispositivos inteligentes para aplicar correções de segurança e melhorias.
**Proteja sua Rede** | Essential | Proteja o WiFi e a rede doméstica para impedir o acesso não autorizado a dispositivos inteligentes.
**Tenha cuidado com dispositivos vestíveis** | Optional | Considere as extensas capacidades de coleta de dados de dispositivos vestíveis e suas implicações para a privacidade.
**Não conecte a infraestrutura crítica da sua casa à Internet** | Optional | Avalie os riscos de termostatos, alarmes e detectores conectados à internet devido ao potencial acesso remoto por hackers.
**Mitigue Riscos de Assistentes por Voz** | Optional | Reduza a ativação por voz, desative o microfone quando não estiver em uso e revise configurações de retenção de gravações. Prefira soluções que ofereçam maior transparência e controle local.
**Monitore sua rede doméstica de perto** | Optional | Use recursos do roteador ou de monitoramento local para acompanhar atividades de rede incomuns e detectar dispositivos ou tráfego inesperados.
**Negue acesso à Internet sempre que possível** | Advanced | Use firewalls para bloquear o acesso à internet para dispositivos que não precisam dele, limitando a operação ao uso da rede local.
**Avalie os riscos** | Advanced | Considere as implicações de privacidade para todos os membros da casa e ajuste as configurações dos dispositivos para segurança e privacidade, como desativar dispositivos em determinados horários.


## Finanças Pessoais

Fraude financeira e roubo de identidade são comuns e causam grandes prejuízos. É importante adotar medidas básicas para reduzir a exposição e reagir rapidamente a atividades suspeitas.
Nota sobre cartões de crédito: mecanismos de detecção de fraude podem proteger contra algumas transações indevidas, mas a análise de padrões de gastos também implica coleta de dados. Cartões podem ser bons para segurança, mas têm implicações para privacidade.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Cadastre-se para Alertas de Fraude e Monitoramento de Crédito** | Essential | Ative alertas de fraude e monitoramento de crédito junto às centrais de crédito do seu país para ser avisado rapidamente sobre atividades suspeitas.
**Aplique um Congelamento de Crédito** | Essential | Previna consultas de crédito não autorizadas solicitando o congelamento de crédito nas principais centrais de crédito da sua região, e descongele apenas quando necessário.
**Use Cartões Virtuais** | Optional | Utilize números de cartão virtuais emitidos pelo seu banco ou provedor de pagamento para compras online, evitando expor os dados do seu cartão físico.
**Use Dinheiro em Espécie para Transações Locais** | Optional | Prefira pagamentos em espécie para compras locais e do dia a dia quando desejar reduzir a criação de perfis de consumo.
**Use Criptomoedas para Transações Online** | Optional | Considere criptomoedas com foco em privacidade para transações online quando adequado ao seu contexto legal. Use-as com responsabilidade e ciente dos riscos de volatilidade e conformidade.
**Armazene Criptomoedas com Segurança** | Advanced | Armazene chaves privadas com segurança usando carteiras offline, dispositivos dedicados e cópias de segurança robustas. Proteja frases-semente e evite exposição a ambientes conectados.
**Compre Criptomoedas Anonimamente** | Advanced | Se necessário e permitido pelas leis locais, utilize métodos de compra que minimizem vinculação direta à sua identidade, ciente dos riscos e obrigações legais.
**Misture/ Embaralhe Moedas** | Advanced | Use um misturador de bitcoin ou CoinJoin antes de converter Bitcoin para moeda para obscurecer rastros de transação.
**Use Detalhes de Pseudônimo para Compras Online** | Advanced | Para compras online, considere usar detalhes de pseudônimo, endereços de e-mail de encaminhamento, números VOIP e métodos de entrega seguros para proteger sua identidade.
**Use um endereço de entrega alternativo** | Advanced | Opte por entregas em endereços não pessoais, como caixas postais, endereços de encaminhamento ou locais de retirada locais para evitar vincular compras diretamente a você.


## Aspecto Humano

Muitas violações de dados, hacks e ataques são causados por erro humano. A lista a seguir contém passos que você deve tomar para reduzir o risco disso acontecer com você. Muitos deles são senso comum, mas vale a pena tomar nota.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Verifique os Destinatários** | Essential | E-mails podem ser facilmente falsificados. Verifique a autenticidade do remetente, especialmente para ações sensíveis, e prefira inserir URLs manualmente em vez de clicar em links nos e-mails.
**Não Confie em Notificações Pop-up** | Essential | Pop-ups falsos podem ser implantados por atores maliciosos. Sempre verifique a URL antes de inserir qualquer informação em um pop-up.
**Nunca Deixe o Dispositivo Sem Supervisão** | Essential | Dispositivos desatendidos podem ser comprometidos mesmo com senhas fortes. Use criptografia e recursos de localização/apagamento remoto para dispositivos perdidos.
**Previna Camfecting** | Essential | Proteja-se contra camfecting usando coberturas de webcam e bloqueadores de microfone. Silencie assistentes domésticos quando não estiverem em uso ou ao discutir assuntos sensíveis.
**Fique protegido de olheiros por cima do ombro** | Essential | Use telas de privacidade em laptops e dispositivos móveis para impedir que outros leiam sua tela em espaços públicos.
**Eduque-se sobre ataques de phishing** | Essential | Seja cauteloso com tentativas de phishing. Verifique URLs, contexto das mensagens recebidas e empregue boas práticas de segurança como usar 2FA e não reutilizar senhas.
**Cuidado com Stalkerware** | Essential | Esteja ciente de stalkerware instalado por conhecidos para espionagem. Fique atento a sinais como uso incomum da bateria e execute redefinições de fábrica se suspeitar.
**Instale Software Confiável de Fontes Seguras** | Essential | Baixe apenas software de fontes legítimas e, quando possível, verifique arquivos com soluções de detecção de malware antes da instalação.
**Armazene dados pessoais com segurança** | Essential | Certifique-se de que todos os dados pessoais em dispositivos ou na nuvem estejam criptografados para proteger contra acesso não autorizado.
**Ofusque Detalhes Pessoais de Documentos** | Essential | Ao compartilhar documentos, oculte detalhes pessoais com retângulos opacos para prevenir vazamento de informações.
**Não assuma que um site é seguro apenas porque usa `HTTPS`** | Essential | HTTPS não garante a legitimidade de um site. Verifique URLs e tenha cautela com dados pessoais.
**Use Cartões Virtuais ao Fazer Pagamentos Online** | Optional | Use cartões virtuais para pagamentos online para proteger seus detalhes bancários e limitar riscos de transação.
**Revise as permissões dos aplicativos** | Optional | Revise regularmente e gerencie permissões de aplicativos para garantir que não haja acesso desnecessário a recursos sensíveis do dispositivo.
**Saia de listas públicas** | Optional | Remova-se de bancos de dados públicos e listas de marketing para reduzir contatos indesejados e riscos potenciais.
**Nunca Forneça Informações de Identificação Pessoal ao Sair** | Optional | Não forneça informações pessoais adicionais ao cancelar serviços de dados para evitar mais coleta de dados.
**Saia do compartilhamento de dados** | Optional | Muitos aplicativos e serviços têm configurações padrão de compartilhamento de dados. Desative para proteger seus dados de serem compartilhados com terceiros.
**Revise e atualize a privacidade em redes sociais** | Optional | Verifique e atualize regularmente suas configurações de mídia social devido a atualizações frequentes dos termos que podem afetar suas configurações de privacidade.
**Compartimentalize** | Advanced | Mantenha diferentes áreas de atividade digital separadas para limitar a exposição de dados em caso de violação.
**Proteção de Privacidade WhoIs** | Advanced | Habilite privacidade WHOIS ao registrar domínios para impedir a exposição de seus dados pessoais em consultas públicas.
**Use um endereço de encaminhamento** | Advanced | Use uma caixa postal ou endereço de encaminhamento para correspondências para impedir que empresas conheçam seu endereço real, adicionando uma camada de proteção de privacidade.
**Use métodos de pagamento anônimos** | Advanced | Opte por métodos de pagamento anônimos como criptomoedas para evitar inserir informações identificáveis online.


## Segurança Física

Registros públicos frequentemente incluem dados pessoais sensíveis (nome completo, data de nascimento, número de telefone, e-mail, endereço, etnia etc.), coletados de diversas fontes (censo, certidões, cadastro de eleitores, marketing, bancos de dados de clientes, registros de veículos, licenças e arquivos judiciais). O fácil acesso a esse material levanta preocupações de privacidade, como roubo de identidade, riscos à segurança pessoal e exposição indevida.

CCTV é uma das principais maneiras pelas quais corporações, indivíduos e o governo rastreiam seus movimentos. Em Londres, Reino Unido, a pessoa média é filmada cerca de 500 vezes por dia. Esta rede continua a crescer, e em muitas cidades ao redor do mundo, reconhecimento facial está sendo implantado, significando que o estado pode saber a identidade dos residentes nas filmagens em tempo real.
Autenticação forte, dispositivos criptografados, software atualizado e navegação web anônima podem ser de pouco uso se alguém for capaz de comprometê-lo fisicamente, seus dispositivos e seus dados. Esta seção descreve alguns métodos básicos para segurança física

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Destrua Documentos Sensíveis** | Essential | Fragmente ou edite documentos sensíveis antes do descarte para proteger contra
roubo de identidade e manter confidencialidade.

**Saia de Registros Públicos** | Essential | Entre em contato com sites de pesquisa de pessoas para cancelar listagens que mostrem informações pessoais.
Utilize guias confiáveis de remoção de dados para orientar o processo.

**Adicione Marca D'água em Documentos** | Essential | Adicione uma marca d'água com o nome do destinatário e data em cópias digitais de
documentos pessoais para rastrear a origem de uma violação.

**Não Revele Informações em Chamadas Recebidas** | Essential | Compartilhe dados pessoais apenas em chamadas que você iniciar e verifique o número de telefone do destinatário.

**Fique Alerta** | Essential | Esteja atento ao seu ambiente e avalie os riscos potenciais em novos locais.
**Proteja o Perímetro** | Essential | Garanta a segurança física dos locais que armazenam dispositivos com informações pessoais, minimizando o acesso externo e usando sistemas de detecção de intrusão.
**Proteja Fisicamente o Dispositivos** | Essential | Use medidas de segurança física como travas para laptop, coberturas de webcam e filtros de privacidade de tela para dispositivos.
**Mantenha Dispositivos Fora da Vista Direta** | Essential | Impeça que dispositivos sejam visíveis do lado de fora para mitigar riscos de lasers e furtos.
**Proteja seu PIN** | Essential | Proteja a entrada do seu PIN de observadores e câmeras, e limpe as telas sensíveis ao toque após o uso.
**Verifique a Presença de Skimmers** | Essential | Inspecione caixas eletrônicos e dispositivos públicos em busca de dispositivos de captura de dados (skimming) e sinais de adulteração antes de usá-los.
**Proteja seu Endereço Residencial** | Optional | Use locais alternativos, endereços de encaminhamento e métodos de pagamento anônimos para proteger seu endereço residencial.
**Use um PIN, Não Biometria** | Advanced | Prefira PINs em vez de biometria para segurança de dispositivos em situações onde pode haver coerção legal para desbloquear dispositivos.
**Reduza a Exposição a CCTV** | Advanced | Use disfarces e escolha rotas com menos câmeras para evitar vigilância.
**Roupas Anti-Reconhecimento Facial** | Advanced | Use roupas com padrões que enganem tecnologias de reconhecimento facial.
**Reduza a Exposição à Visão Noturna** | Advanced | Use fontes de luz infravermelha ou óculos refletivos para obstruir câmeras de visão noturna.
**Proteja seu DNA** | Advanced | Evite compartilhar DNA com sites de herança genética e seja cauteloso ao deixar rastros de DNA.



<!-- checklist-end -->

----

#### There's an interactive version!
- [Digital Defense](https://digital-defense.io) - View details, check items of, and track your progress

#### Other Awesome Security Lists
- @sbilly/[awesome-security](https://github.com/sbilly/awesome-security)
- @0x4D31/[awesome-threat-detection](https://github.com/0x4D31/awesome-threat-detection)
- @hslatman/[awesome-threat-intelligence](https://github.com/hslatman/awesome-threat-intelligence)
- @PaulSec/[awesome-sec-talks](https://github.com/PaulSec/awesome-sec-talks)
- @Lissy93/[awesome-privacy](https://github.com/lissy93/awesime-privacy)
- @Zbetcheckin/[security_list](https://github.com/zbetcheckin/Security_list)
- Michael Horowitz / [defensivecomputingchecklist.com](https://defensivecomputingchecklist.com/)

[See More](/4_Privacy_And_Security_Links.md#other-github-security-lists)

----

## Notes

*Thanks for visiting, hope you found something useful here :) Contributions are welcome, and much appreciated - to propose an edit [raise an issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose), or [open a PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master). See: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md).*

*Disclaimer: This is not an exhaustive list, and aims only to be taken as guide.*

*Licensed under [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © [Alicia Sykes](https://aliciasykes.com) 2020*

[![Attribution 4.0 International](https://licensebuttons.net/l/by/3.0/88x31.png)](/LICENSE.md)

---

Help support the continued development of this project 💖

[![Sponsor Lissy93 on GitHub](https://img.shields.io/badge/Sponsor_on_GitHub-Lissy93-%23ff4dda?style=for-the-badge&logo=githubsponsors&logoColor=ff4dda)](https://github.com/sponsors/Lissy93)

----

Found this helpful? Consider sharing it with others, to help them also improve their digital security 😇

[![Share on Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=for-the-badge&logo=Twitter)](http://twitter.com/share?text=Check%20out%20the%20Personal%20Cyber%20Security%20Checklist-%20an%20ultimate%20list%20of%20tips%20for%20protecting%20your%20digital%20security%20and%20privacy%20in%202020%2C%20with%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![Share on LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=for-the-badge&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=https://github.com/Lissy93)
[![Share on Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=for-the-badge&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![Share on Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=for-the-badge&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Check%20out%20the%20Ultimate%20Personal%20Cyber%20Security%20Checklist%20by%20%40Lissy93%20on%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)

---

Get in touch 📬

[![Alicia Sykes on Twitter](https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter)](https://twitter.com/Lissy_Sykes)
[![Alicia Sykes on GitHub](https://img.shields.io/github/followers/lissy93?label=Lissy93&style=social)](https://github.com/Lissy93)
[![Alicia Sykes on Mastodon](https://img.shields.io/mastodon/follow/1032965?domain=https%3A%2F%2Fmastodon.social)](https://mastodon.social/web/accounts/1032965)
[![Alicia Sykes on Keybase](https://img.shields.io/badge/aliciasykes--lightgrey?style=social&logo=Keybase)](https://keybase.io/aliciasykes)
[![Alicia Sykes's PGP](https://img.shields.io/badge/PGP--lightgrey?style=social&logo=Let%E2%80%99s%20Encrypt)](https://keybase.io/aliciasykes/pgp_keys.asc)
[![Alicia Sykes's Website](https://img.shields.io/badge/aliciasykes.com--lightgrey?style=social&logo=Tencent%20QQ)](https://aliciasykes.com)

---
