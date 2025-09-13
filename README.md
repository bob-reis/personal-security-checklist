
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

A maioria das violações de dados relatadas são causadas pelo uso de senhas fracas, padrão ou roubadas (de acordo com [este relatório da Verizon](http://www.verizonenterprise.com/resources/reports/rp_dbir-2016-executive-summary_xg_en.pdf)). Use senhas longas, fortes e únicas, gerencie-as em um gerenciador de senhas seguro, ative a autenticação de dois fatores, fique atento a violações e tenha cuidado ao fazer login em suas contas.

A segurança da sua autenticação é a primeira linha de defesa contra invasões digitais. Implementar práticas robustas de autenticação pode significativamente reduzir o risco de comprometimento de suas contas.

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Use uma Senha Forte** | Essencial | Se sua senha for muito curta, ou contiver palavras de dicionário, locais ou nomes, ela poderá ser facilmente quebrada por força bruta ou adivinhada. A maneira mais fácil de criar uma senha forte é fazê-la longa (12+ caracteres) — considere usar uma 'frase-senha' composta por várias palavras. Como alternativa, use um gerador de senhas para criar uma senha longa e aleatória. Experimente o [Como Segura é Minha Senha?](https://security.org/how-secure-is-my-password/) para ter uma ideia de quão rapidamente senhas comuns podem ser quebradas. Leia mais sobre como criar senhas fortes: [securityinabox.org](https://securityinabox.org/en/passwords/passwords-and-2fa/).
**Não Reutilize Senhas** | Essencial | Se alguém reutilizar uma senha e um site em que tenha uma conta sofrer um vazamento, um criminoso poderá facilmente obter acesso não autorizado a suas outras contas. Isso geralmente é feito através de solicitações de login automatizadas em larga escala, chamado de Credential Stuffing. Infelizmente, isso é muito comum, mas é simples de se proteger — use uma senha diferente para cada uma de suas contas online.
**Use um Gerenciador de Senhas Seguro** | Essencial | Para a maioria das pessoas, será quase impossível lembrar centenas de senhas fortes e únicas. Um gerenciador de senhas é um aplicativo que gera, armazena e preenche automaticamente suas credenciais de login. Todas as suas senhas serão criptografadas com uma senha mestra (que você deve lembrar e deve ser muito forte). A maioria dos gerenciadores de senhas tem extensões para navegadores e aplicativos móveis, para que em qualquer dispositivo suas senhas possam ser preenchidas automaticamente. Um bom gerenciador é o [Bitwarden](https://awesome-privacy.xyz/essentials/password-managers/bitwarden), ou veja [Gerenciadores de Senhas Recomendados](https://awesome-privacy.xyz/essentials/password-managers).
**Evite Compartilhar Senhas** | Essencial | Embora possa haver momentos em que você precise compartilhar o acesso a uma conta com outra pessoa, geralmente você deve evitar fazer isso porque torna mais fácil a conta ser comprometida. Se você realmente precisar compartilhar uma senha — por exemplo, ao trabalhar em uma equipe com uma conta compartilhada — isso deve ser feito por meio de recursos integrados a um gerenciador de senhas.
**Ative a Autenticação de Dois Fatores** | Essencial | A autenticação de dois fatores (2FA) exige que você forneça algo que você sabe (uma senha) e algo que você possui (como um código no seu telefone) para fazer login. Isso significa que, mesmo que alguém tenha sua senha (por exemplo, através de phishing, malware ou vazamento de dados), não poderá acessar sua conta. É fácil começar: baixe um [aplicativo autenticador](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) no seu telefone, vá para as configurações de segurança da sua conta e siga os passos para ativar 2FA. Na próxima vez que fizer login em um novo dispositivo, será solicitado o código exibido no aplicativo do seu telefone (funciona sem internet e o código geralmente muda a cada 30 segundos).
**Mantenha os Códigos de Backup Seguros** | Essencial | Ao ativar a autenticação de múltiplos fatores, geralmente você receberá vários códigos que podem ser usados se seu método 2FA for perdido, quebrado ou indisponível. Mantenha esses códigos em um local seguro para evitar perda ou acesso não autorizado. Você deve armazená-los em papel ou em um local seguro em disco (por exemplo, em armazenamento offline ou arquivo/unidade criptografada). Não os armazene em seu gerenciador de senhas, pois fontes 2FA e senhas devem ser mantidas separadamente.
**Cadastre-se para Alertas de Vazamento** | Opcional | Após um site sofrer um vazamento de dados significativo, os dados vazados frequentemente acabam na internet. Vários sites coletam esses registros vazados e permitem que você pesquise seu endereço de e-mail para verificar se está em alguma de suas listas. [Firefox Monitor](https://monitor.firefox.com), [Have I Been Pwned](https://haveibeenpwned.com) e [DeHashed](https://dehashed.com) permitem que você se cadastre para monitoramento, onde serão notificado se seu endereço de e-mail aparecer em novos conjuntos de dados. É útil saber o mais rápido possível quando isso acontece para que você possa alterar as senhas das contas afetadas. O [Have i been pwned](https://awesome-privacy.xyz/security-tools/online-tools/have-i-been-pwned) também possui notificação em nível de domínio, onde você pode receber alertas se qualquer endereço de e-mail em seu domínio aparecer (útil se você usar aliases para [encaminhamento anônimo](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding)).
**Proteja sua Senha/PIN** | Opcional | Ao digitar sua senha em locais públicos, certifique-se de não estar na linha direta de visão de uma câmera de CCTV e de que ninguém possa ver por cima do seu ombro. Cubra sua senha ou código PIN enquanto digita e não revele senhas em texto plano na tela.
**Atualize Senhas Críticas Periodicamente** | Opcional | Vazamentos e violações de banco de dados são comuns, e provavelmente várias de suas senhas já estão em algum lugar online. Atualizar ocasionalmente as senhas de contas críticas de segurança pode ajudar a mitigar isso. No entanto, desde que todas as suas senhas sejam longas, fortes e únicas, não há necessidade de fazer isso com muita frequência — anualmente deve ser suficiente. A imposição de mudanças obrigatórias de senha em organizações [não é mais recomendada](https://duo.com/decipher/microsoft-will-no-longer-recommend-forcing-periodic-password-changes), pois incentiva os colegas a selecionar senhas mais fracas.
**Não Salve Suas Senhas em Navegadores** | Opcional | A maioria dos navegadores modernos oferece salvar suas credenciais quando você faz login em um site. Não permita isso, pois nem sempre são criptografados e podem permitir que alguém acesse suas contas. Em vez disso, use um gerenciador de senhas dedicado para armazenar (e preencher automaticamente) suas senhas.
**Evite Fazer Login em Dispositivos de Outras Pessoas** | Opcional | Evite fazer login em computadores de outras pessoas, pois você não pode ter certeza de que o sistema está limpo. Seja especialmente cauteloso com máquinas públicas, pois malware e rastreamento são mais comuns. Usar o dispositivo de outra pessoa é especialmente perigoso para contas críticas como online banking. Ao usar a máquina de outra pessoa, certifique-se de estar em uma sessão privada/incógnita (Use Ctrl+Shift+N/ Cmd+Shift+N). Isso solicitará ao navegador que não salve suas credenciais, cookies e histórico de navegação.
**Evite Dicas de Senha** | Opcional | Alguns sites permitem definir dicas de senha. Muitas vezes, é muito fácil adivinhar as respostas. Em casos em que dicas de senha são obrigatórias, use respostas aleatórias e registre-as em seu gerenciador de senhas (`Nome da primeira escola: 6D-02-8B-!a-E8-8F-81`).
**Nunca Responda Verdadeiramente a Perguntas de Segurança Online** | Opcional | Se um site fizer perguntas de segurança (como local de nascimento, nome de solteira da mãe ou primeiro carro, etc.), não forneça respostas reais. É uma tarefa trivial para hackers descobrir essas informações online ou por meio de engenharia social. Em vez disso, crie uma resposta fictícia e armazene-a em seu gerenciador de senhas. Usar palavras reais é melhor do que caracteres aleatórios, como [explicado aqui](https://news.ycombinator.com/item?id=29244870).
**Não Use um PIN de 4 Dígitos** | Opcional | Não use um PIN curto para acessar seu smartphone ou computador. Em vez disso, use uma senha de texto ou um PIN muito mais longo. Senhas numéricas são fáceis de quebrar (Um PIN de 4 dígitos tem 10.000 combinações, comparado a 7,4 milhões para um código alfanumérico de 4 caracteres).
**Evite Usar SMS para 2FA** | Opcional | Ao ativar a autenticação de múltiplos fatores, opte por códigos baseados em aplicativo ou um token de hardware, se suportado. SMS é suscetível a várias ameaças comuns, como [SIM-swapping](https://www.maketecheasier.com/sim-card-hijacking) e [interceptação](https://secure-voice.com/ss7_attacks). Não há garantia de como seu número de telefone será armazenado com segurança ou para o que mais será usado. Do ponto de vista prático, SMS só funcionará quando você tiver sinal e pode ser lento. Se um site ou serviço exigir o uso de um número SMS para recuperação, considere comprar um segundo número de telefone pré-pago usado apenas para recuperação de conta nesses casos.
**Evite Usar seu Gerenciador de Senhas para Gerar OTPs** | Avançado | Muitos gerenciadores de senhas também são capazes de gerar códigos 2FA. É melhor não usar seu gerenciador de senhas principal como autenticador 2FA também, pois se tornaria um único ponto de falha se comprometido. Em vez disso, use um [aplicativo autenticador](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) dedicado em seu telefone ou laptop.
**Evite o Desbloqueio por Reconhecimento Facial** | Avançado | A maioria dos celulares e laptops oferece um recurso de autenticação por reconhecimento facial, usando a câmera para comparar uma captura do seu rosto com um hash armazenado. Pode ser muito conveniente, mas existem várias maneiras de [enganá-lo](https://www.forbes.com/sites/jvchamary/2017/09/18/security-apple-face-id-iphone-x/) e ganhar acesso ao dispositivo através de fotos digitais e reconstruções de filmagens de CCTV. Diferentemente da sua senha, provavelmente existem fotos do seu rosto na internet e vídeos gravados por câmeras de vigilância.
**Cuidado com Keyloggers** | Avançado | Um [keylogger](https://en.wikipedia.org/wiki/Hardware_keylogger) de hardware é um dispositivo físico instalado entre seu teclado e a porta USB, que intercepta todos os toques de tecla e às vezes transmite dados para um servidor remoto. Ele dá a um hacker acesso a tudo o que é digitado, incluindo senhas. A melhor maneira de se proteger é verificar sua conexão USB após seu PC ter ficado desatendido. Também é possível que keyloggers sejam instalados dentro da caixa do teclado, então fique atento a qualquer sinal de que o caso tenha sido violado e considere trazer seu próprio teclado para o trabalho. Dados digitados em um teclado virtual, colados da área de transferência ou preenchidos automaticamente por um gerenciador de senhas não podem ser interceptados por um keylogger de hardware.
**Considere um Token de Hardware** | Avançado | Uma chave de segurança U2F/FIDO2 é um dispositivo USB (ou NFC) que você insere ao fazer login em um serviço online para verificar sua identidade em vez de inserir um OTP do seu autenticador. [SoloKey](https://solokeys.com) e [NitroKey](https://www.nitrokey.com) são exemplos de tais chaves. Elas trazem vários benefícios de segurança. Como o navegador se comunica diretamente com o dispositivo, ele não pode ser enganado sobre qual host está solicitando autenticação porque o certificado TLS é verificado. [Esta postagem](https://security.stackexchange.com/a/71704) é uma boa explicação da segurança do uso de tokens FIDO U2F. Claro, é importante armazenar a chave física em um local seguro ou mantê-la com você. Algumas contas online permitem a ativação de vários métodos de 2FA.
**Considere um Gerenciador de Senhas Offline** | Avançado | Para maior segurança, um gerenciador de senhas offline criptografado lhe dará controle total sobre seus dados. [KeePass](https://awesome-privacy.xyz/essentials/password-managers/keepass) é uma escolha popular, com muitos [plugins](https://[KeePass](https://awesome-privacy.xyz/essentials/password-managers/keepass).info/plugins.html) e ramificações da comunidade com compatibilidade e funcionalidade adicionais. Clientes populares incluem: [KeePassXC](https://keepassxc.org) (desktop), [KeePassDX](https://www.keepassdx.com) (Android) e [StrongBox](https://apps.apple.com/us/app/strongbox-password-safe/id897283731) (iOS). A desvantagem é que pode ser um pouco menos conveniente para alguns, e caberá a você fazer backup e armazená-lo com segurança.
**Considere Nomes de Usuário Únicos** | Avançado | Ter senhas diferentes para cada conta é um bom primeiro passo, mas se você também usar um nome de usuário, e-mail ou número de telefone único para fazer login, será significativamente mais difícil para qualquer pessoa tentar obter acesso não autorizado. O método mais fácil para múltiplos e-mails é usar aliases gerados automaticamente para encaminhamento de e-mail anônimo. Isso significa que [qualquer_coisa]@seudominio.com chegará em sua caixa de entrada, permitindo que você use um e-mail diferente para cada conta (veja [Provedores de Alias de E-mail](https://github.com/Lissy93/awesome-privacy#mail-forwarding)). Nomes de usuário são mais fáceis, já que você pode usar seu gerenciador de senhas para gerar, armazenar e preencher automaticamente. Números de telefone virtuais podem ser gerados através do seu provedor VOIP.

### Software Recomendado
- [Gerenciadores de Senhas](https://awesome-privacy.xyz/essentials/password-managers)
- [Aplicativos de Autenticação de Dois Fatores](https://awesome-privacy.xyz/essentials/2-factor-authentication)


## Navegação na Web

A maioria dos sites na internet usa alguma forma de rastreamento, frequentemente para obter insights sobre o comportamento e preferências dos usuários. Esses dados podem ser incrivelmente detalhados e, portanto, extremamente valiosos para corporações, governos e ladrões de propriedade intelectual. Violações e vazamentos de dados são comuns, e anonimizar a atividade web dos usuários é frequentemente uma tarefa trivial.

Existem dois métodos principais de rastreamento: stateful (baseado em cookies) e stateless (baseado em impressão digital). Cookies são pequenos pedaços de informação, armazenados em seu navegador com um ID único usado para identificá-lo. A impressão digital do navegador é uma forma altamente precisa de identificar e rastrear usuários em qualquer lugar online. As informações coletadas são bastante abrangentes e geralmente incluem detalhes do navegador, sistema operacional, resolução de tela, fontes suportadas, plugins, fuso horário, preferências de idioma e fonte, e até configurações de hardware.

Esta seção descreve as etapas que você pode seguir para se proteger melhor contra ameaças, minimizar o rastreamento online e melhorar sua privacidade. Nossa navegação na web deixa rastros digitais que podem ser explorados por diversos atores, desde empresas de marketing até criminosos cibernéticos.

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Bloqueie Anúncios** | Essencial | Usar um bloqueador de anúncios pode ajudar a melhorar sua privacidade, bloqueando os rastreadores implementados por anúncios. O [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) é um complemento de navegador muito eficiente e de código aberto, desenvolvido por Raymond Hill. Quando anúncios de terceiros são exibidos em uma página da web, eles têm a capacidade de rastreá-lo, coletando informações pessoais sobre você e seus hábitos, que podem ser vendidas ou usadas para mostrar anúncios mais direcionados, e alguns anúncios são simplesmente maliciosos ou falsos. Bloquear anúncios também faz com que as páginas carreguem mais rápido, usem menos dados e forneçam uma experiência menos poluída.
**Verifique se o Site é Legítimo** | Basic | Pode parecer óbvio, mas quando estiver fazendo login em qualquer conta online, verifique duas vezes se o URL está correto. Armazenar sites visitados com frequência em seus favoritos é uma boa maneira de garantir que o URL seja fácil de encontrar. Ao visitar novos sites, procure sinais comuns de que pode ser inseguro: avisos do navegador, redirecionamentos, spam no site e pop-ups. Você também pode verificar um site usando uma ferramenta como: [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), [IsLegitSite](https://www.islegitsite.com), [Status de Navegação Segura do Google](https://transparencyreport.google.com/safe-browsing/search) se não tiver certeza.
**Cuidado com Malware de Navegador** | Basic | Seu sistema ou navegador pode ser comprometido por spyware, mineradores, sequestro de navegador, redirecionamentos maliciosos, adware, etc. Geralmente, você pode ficar protegido: ignorando pop-ups, tendo cuidado com o que está clicando, não prosseguindo para um site que seu navegador avise que pode ser malicioso. Sinais comuns de malware de navegador incluem: mecanismo de busca padrão ou página inicial modificada, barras de ferramentas, extensões ou ícones desconhecidos, significativamente mais anúncios, erros e páginas carregando muito mais lentamente do que o habitual. Estes artigos da Heimdal explicam [sinais de malware de navegador](https://heimdalsecurity.com/blog/warning-signs-operating-system-infected-malware), [como os navegadores são infectados](https://heimdalsecurity.com/blog/practical-online-protection-where-malware-hides) e [como remover malware de navegador](https://heimdalsecurity.com/blog/malware-removal).
**Use um Navegador que Respeite a Privacidade** | Essencial | [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) (com alguns ajustes) e [Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser) são navegadores seguros que respeitam a privacidade. Ambos são rápidos, de código aberto, amigáveis ao usuário e disponíveis em todos os principais sistemas operacionais. Seu navegador tem acesso a tudo o que você faz online, então, se possível, evite Google Chrome, Edge e Safari, pois (sem a configuração correta) os três coletam dados de uso, fazem chamadas de casa e permitem rastreamento invasivo. O Firefox requer algumas alterações para alcançar segurança ideal, por exemplo - configurações de usuário do [arkenfox](https://github.com/arkenfox/user.js/wiki) ou [12byte](https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/). Veja mais: [Navegadores de Privacidade](https://github.com/Lissy93/awesome-privacy#browsers).
**Use um Mecanismo de Busca Privado** | Essencial | Usar um mecanismo de busca que preserve a privacidade e não faça rastreamento reduzirá o risco de seus termos de pesquisa serem registrados ou usados contra você. Considere [DuckDuckGo](https://awesome-privacy.xyz/essentials/search-engines/duckduckgo) ou [Qwant](https://awesome-privacy.xyz/essentials/search-engines/qwant). O Google implementa algumas políticas de rastreamento [incrivelmente invasivas](https://hackernoon.com/data-privacy-concerns-with-google-b946f2b7afea) e tem histórico de exibir [resultados de busca tendenciosos](https://www.businessinsider.com/evidence-that-google-search-results-are-biased-2014-10). Portanto, Google, juntamente com Bing, Baidu, Yahoo e Yandex são incompatíveis com qualquer pessoa que deseje proteger sua privacidade. Recomenda-se atualizar a [busca padrão do navegador](https://duckduckgo.com/install) para um mecanismo de busca que respeite a privacidade.
**Remova Extensões Desnecessárias do Navegador** | Essencial | Extensões podem ver, registrar ou modificar qualquer coisa que você faz no navegador, e alguns aplicativos de navegador que parecem inocentes têm intenções maliciosas. Sites podem ver quais extensões você tem instaladas e podem usar isso para aprimorar sua impressão digital, identificando/rastreando você com mais precisão. As lojas da web do [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) e Chrome permitem que você verifique quais permissões/direitos de acesso uma extensão requer antes de instalá-la. Verifique as avaliações. Instale apenas extensões que realmente precisa e remova aquelas que não usou por um tempo.
**Mantenha o Navegador Atualizado** | Essencial | Vulnerabilidades de navegador estão sendo constantemente [descobertas](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=browser) e corrigidas, então é importante mantê-lo atualizado para evitar explorações de dia zero. Você pode [ver qual versão do navegador está usando aqui](https://www.whatismybrowser.com/) ou seguir [este guia](https://www.whatismybrowser.com/guides/how-to-update-your-browser/) para instruções de como atualizar. Alguns navegadores serão atualizados automaticamente para a versão estável mais recente.
**Verifique se Há HTTPS** | Essencial | Se você inserir informações em um site sem HTTPS, esses dados serão transportados sem criptografia e, portanto, podem ser lidos por qualquer pessoa que os intercepte. Não insira dados em um site sem HTTPS, mas também não deixe que o cadeado verde lhe dê uma falsa sensação de segurança; só porque um site tem um certificado SSL não significa que seja legítimo ou confiável. O [HTTPS-Everywhere](https://www.eff.org/https-everywhere) (desenvolvido pela [EFF](https://www.eff.org/)) costumava ser uma extensão/complemento de navegador que ativava automaticamente HTTPS em sites, mas a partir de 2022 está descontinuado. Em seu [artigo de anúncio](https://www.eff.org/), a EFF explica que a maioria dos navegadores agora integra tais proteções. Além disso, fornece instruções para navegadores [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), Chrome, Edge e Safari sobre como ativar suas proteções seguras HTTPS.
**Use DNS-over-HTTPS** | Essencial | O DNS tradicional faz solicitações em texto simples para que todos possam ver. Isso permite espionagem e manipulação de dados DNS por meio de ataques de intermediário. Já o DNS-over-HTTPS realiza a resolução de DNS através do protocolo HTTPS, o que significa que os dados entre você e seu resolvedor DNS são criptografados. Uma opção popular é o [1.1.1.1](https://awesome-privacy.xyz/security-tools/mobile-apps/1.1.1.1) da [CloudFlare](https://awesome-privacy.xyz/networking/dns-providers/cloudflare), ou compare provedores - é simples de habilitar no navegador. Note que o DoH vem com seus próprios problemas, principalmente impedindo a filtragem da web.
**Contêineres Multi-Sessão** | Essencial | A compartimentalização é realmente importante para manter diferentes aspectos da sua navegação separados. Por exemplo, usar diferentes perfis para trabalho, navegação geral, redes sociais, compras online etc. reduzirá o número de associações que corretores de dados podem vincular a você. Uma opção é fazer uso dos [Contêineres do Firefox](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers), que foram projetados exatamente para essa finalidade. Como alternativa, você pode usar navegadores diferentes para tarefas diferentes ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) etc).
**Use o Modo Anônimo** | Essencial | Ao usar o computador de outra pessoa, certifique-se de estar em uma sessão privada/anônima. Isso impedirá que o histórico do navegador, cookies e alguns dados sejam salvos, mas não é infalível - você ainda pode ser rastreado.
**Entenda a Impressão Digital do Navegador** | Essencial | A impressão digital do navegador é um método incrivelmente preciso de rastreamento, onde um site identifica você com base nas informações do seu dispositivo. Você pode visualizar sua impressão digital em amiunique.org - O objetivo é ser o menos único possível.
**Gerencie Cookies** | Essencial | Limpar cookies regularmente é uma etapa que você pode tomar para ajudar a reduzir o rastreamento por sites. Os cookies também podem armazenar seu token de sessão, que, se capturado, permitiria que alguém acessasse suas contas sem credenciais. Para mitigar isso, você deve limpar os cookies com frequência.
**Bloqueie Cookies de Terceiros** | Essencial | Cookies de terceiros são colocados em seu dispositivo por um site diferente daquele que você está visitando. Isso representa um risco à privacidade, pois uma terceira entidade pode coletar dados da sua sessão atual. Este guia explica como você pode desativar cookies de terceiros, e você pode verificar se isso funcionou.
**Bloqueie Rastreadores de Terceiros** | Essencial | Bloquear rastreadores ajudará a impedir que sites, anunciantes, serviços de análise e outros rastreiem você em segundo plano. [Privacy Badger](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-badger), [DuckDuckGo Privacy Essencials](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-essentials), [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) e uMatrix (avançado) são todos bloqueadores de rastreadores de código aberto muito eficazes, disponíveis para todos os principais navegadores.
**Cuidado com Redirecionamentos** | Opcional | Embora alguns redirecionamentos sejam inofensivos, outros, como redirecionamentos não validados, são usados em ataques de phishing, podendo fazer um link malicioso parecer legítimo. Se você não tiver certeza sobre um URL de redirecionamento, pode verificar para onde ele redireciona usando uma ferramenta como RedirectDetective.
**Não Faça Login no Navegador** | Opcional | Muitos navegadores permitem que você faça login para sincronizar histórico, favoritos e outros dados de navegação entre dispositivos. No entanto, isso não apenas permite mais coleta de dados, mas também aumenta a superfície de ataque, fornecendo outra via para um ator malicioso obter informações pessoais.
**Desative Serviços de Predição** | Opcional | Alguns navegadores permitem serviços de predição, onde você recebe resultados de pesquisa em tempo real ou preenchimento automático de URL. Se isso estiver habilitado, dados são enviados para o Google (ou seu mecanismo de busca padrão) a cada tecla pressionada, em vez de apenas quando você pressiona enter.
**Evite Google Translate para Páginas Web** | Opcional | Quando você visita uma página web escrita em um idioma estrangeiro, pode ser solicitado a instalar a extensão Google Translate. Esteja ciente de que o Google coleta todos os dados (incluindo campos de entrada), junto com detalhes do usuário atual. Em vez disso, use um serviço de tradução que não seja vinculado ao seu navegador.
**Desative Notificações Web** | Opcional | Notificações push do navegador são um método comum usado por criminosos para encorajar você a clicar em seus links, já que é fácil falsificar a fonte. Esteja ciente disso e, para instruções sobre como desativar notificações do navegador, consulte este artigo.
**Desative Downloads Automáticos** | Opcional | Downloads por drive-by são um método comum de colocar arquivos nocivos no dispositivo de um usuário. Isso pode ser mitigado desabilitando downloads de arquivos automáticos e tendo cuidado com sites que solicitam o download de arquivos inesperadamente.
**Não Permita Acesso a Sensores** | Opcional | Sites móveis podem acessar os sensores do seu dispositivo sem pedir permissão. Se você conceder essas permissões ao navegador uma vez, todos os sites poderão usar essas capacidades, sem permissão ou notificação.
**Não Permita Localização** | Opcional | Serviços de Localização permitem que sites solicitem sua localização física para melhorar sua experiência. Isso deve ser desativado nas configurações. Note que ainda existem outros métodos de determinar sua localização aproximada.
**Não Permita Acesso à Câmera/Microfone** | Opcional | Verifique as configurações do navegador para garantir que nenhum site tenha acesso à webcam ou microfone. Pode ser benéfico usar proteção física, como uma capa para webcam e bloqueador de microfone.
**Desative Salvamento de Senhas no Navegador** | Opcional | Não permita que seu navegador armazene nomes de usuário e senhas. Estes podem ser facilmente visualizados ou acessados. Em vez disso, use um gerenciador de senhas.
**Desative o Preenchimento Automático do Navegador** | Opcional | Desative o preenchimento automático para detalhes confidenciais ou pessoais. Este recurso pode ser prejudicial se seu navegador for comprometido de alguma forma. Em vez disso, considere usar o recurso de Notas do seu gerenciador de senhas.
**Proteja-se de Ataques de Exfiltração** | Opcional | O ataque CSS Exfiltrate é um método onde credenciais e outros detalhes sensíveis podem ser capturados apenas com CSS puro. Você pode ficar protegido com o plugin [CSS Exfil Protection](https://awesome-privacy.xyz/security-tools/browser-extensions/css-exfil-protection).
**Desative ActiveX** | Opcional | ActiveX é uma API de extensão de navegador integrada ao Microsoft IE e habilitada por padrão. Não é mais comumente usado, mas como fornece direitos de acesso íntimos a plugins e pode ser perigoso, você deve desativá-lo.
**Desative WebRTC** | Opcional | WebRTC permite comunicação de áudio/vídeo de alta qualidade e compartilhamento de arquivos ponto a ponto diretamente do navegador. No entanto, pode representar um vazamento de privacidade. Para saber mais, consulte este guia.
**Falsifique a Assinatura HTML5 Canvas** | Opcional | A impressão digital de Canvas permite que sites identifiquem e rastreiem usuários com muita precisão. Você pode usar a extensão Canvas-Fingerprint-Blocker para falsificar sua impressão digital ou usar [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).
**Falsifique User Agent** | Opcional | O user agent informa ao site qual dispositivo, navegador e versão você está usando. Alternar o user agent periodicamente é um pequeno passo que você pode tomar para se tornar menos único.
**Ignore DNT** | Opcional | Ativar Não Rastrear (Do Not Track) tem impacto muito limitado, já que muitos sites não respeitam ou seguem isso. Como é raramente usado, pode até adicionar à sua assinatura digital, tornando você mais identificável.
**Previna Rastreamento HSTS** | Opcional | HSTS foi projetado para ajudar a proteger sites, mas preocupações de privacidade foram levantadas, pois permitia que operadores de sites plantassem super-cookies. Pode ser desativado visitando chrome://net-internals/#hsts em navegadores baseados em Chromium.
**Previna Conexões Automáticas do Navegador** | Opcional | Mesmo quando você não está usando seu navegador, ele pode fazer chamadas para relatar atividade de uso, análises e diagnósticos. Você pode desejar desativar parte disso, o que pode ser feito através das configurações.
**Ative Isolamento de Primeira Parte** | Opcional | [Isolamento de Primeira Parte](https://awesome-privacy.xyz/security-tools/browser-extensions/first-party-isolation) significa que todas as fontes de identificadores e o estado do navegador são definidos usando o domínio da barra de URL, o que pode reduzir significativamente o rastreamento.
**Remova Parâmetros de Rastreamento das URLs** | Avançado | Sites frequentemente anexam parâmetros GET adicionais às URLs que você clica, para identificar informações como fonte/referenciador. Você pode higienizar manualmente ou usar uma extensão como [ClearURLs](https://awesome-privacy.xyz/security-tools/browser-extensions/clearurls) para remover dados de rastreamento das URLs automaticamente.
**Segurança na Primeira Inicialização** | Avançado | Após instalar um navegador web, na primeira vez que você o iniciar (antes de configurar suas definições de privacidade), a maioria dos navegadores fará uma chamada de casa. Portanto, após instalar um navegador, você deve primeiro desativar sua conexão de internet, configurar as opções de privacidade e depois reativar a conectividade com a internet.
**Use o Navegador Tor** | Avançado | O Projeto [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) fornece um navegador que criptografa e redireciona seu tráfego através de múltiplos nós, mantendo os usuários seguros contra interceptação e rastreamento. As principais desvantagens são velocidade e experiência do usuário.
**Desative JavaScript** | Avançado | Muitos aplicativos web modernos são baseados em JavaScript, então desativá-lo diminuirá muito sua experiência de navegação. Mas se você realmente quiser ir a fundo, isso reduzirá significativamente sua superfície de ataque.

### Software Recomendado
- [Navegadores de Privacidade](https://github.com/Lissy93/awesome-privacy#browsers)
- [Extensões de Navegador](https://github.com/Lissy93/awesome-privacy#browser-extensions)
- [Sincronização de Navegador e Favoritos](https://github.com/Lissy93/awesome-privacy#browser-sync)


## Emails

Nearly 50 years since the first email was sent, it's still very much a big part of our day-to-day life, and will continue to be for the near future. So considering how much trust we put in them, it's surprising how fundamentally insecure this infrastructure is. Email-related fraud [is on the up](https://www.csoonline.com/article/3247670/email/email-security-in-2018.html), and without taking basic measures you could be at risk.

If a hacker gets access to your emails, it provides a gateway for your other accounts to be compromised (through password resets), therefore email security is paramount for your digital safety.

The big companies providing "free" email service, don't have a good reputation for respecting users privacy: Gmail was caught giving [third parties full access](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) to user emails and also [tracking all of your purchases](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). Yahoo was also caught scanning emails in real-time [for US surveillance agencies](http://news.trust.org/item/20161004170601-99f8c) Advertisers [were granted access](https://thenextweb.com/insider/2018/08/29/both-yahoo-and-aol-are-scanning-customer-emails-to-attract-advertisers) to Yahoo and AOL users messages to “identify and segment potential customers by picking up on contextual buying signals, and past purchases.”

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Have more than one email address** | Essencial | Consider using a different email address for security-critical communications from trivial mail such as newsletters. This compartmentalization could reduce the amount of damage caused by a data breach, and also make it easier to recover a compromised account.
**Keep Email Address Private** | Essencial | Do not share your primary email publicly, as mail addresses are often the starting point for most phishing attacks.
**Keep your Account Secure** | Essencial | Use a long and unique password, enable 2FA and be careful while logging in. Your email account provides an easy entry point to all your other online accounts for an attacker.
**Disable Automatic Loading of Remote Content** | Essencial | Email messages can contain remote content such as images or stylesheets, often automatically loaded from the server. You should disable this, as it exposes your IP address and device information, and is often used for tracking. For more info, see [this article](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download).
**Use Plaintext** | Opcional | There are two main types of emails on the internet: plaintext and HTML. The former is strongly preferred for privacy & security as HTML messages often include identifiers in links and inline images, which can collect usage and personal data. There's also numerous risks of remote code execution targeting the HTML parser of your mail client, which cannot be exploited if you are using plaintext. For more info, as well as setup instructions for your mail provider, see [UsePlaintext.email](https://useplaintext.email/).
**Don’t connect third-party apps to your email account** | Opcional | If you give a third-party app or plug-in full access to your inbox, they effectively have full unhindered access to all your emails and their contents, which poses significant security and privacy risks.
**Don't Share Sensitive Data via Email** | Opcional | Emails are very easily intercepted. Furthermore, you can’t be sure of how secure your recipient's environment is. Therefore, emails cannot be considered safe for exchanging confidential information, unless it is encrypted.
**Consider Switching to a Secure Mail Provider** | Opcional | Secure and reputable email providers such as [Forward Email](https://awesome-privacy.xyz/communication/encrypted-email/forward-email), [ProtonMail](https://awesome-privacy.xyz/communication/mail-forwarding/protonmail), and [Tutanota](https://awesome-privacy.xyz/communication/encrypted-email/tuta) allow for end-to-end encryption, full privacy as well as more security-focused features. Unlike typical email providers, your mailbox cannot be read by anyone but you, since all messages are encrypted.
**Use Smart Key** | Avançado | OpenPGP does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. Therefore, you should take great care to keep your private keys safe. One method of doing so, is to use a USB Smart Key to sign or decrypt messages, allowing you to do so without your private key leaving the USB device.
**Use Aliasing / Anonymous Forwarding** | Avançado | Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in your primary inbox. Effectively allowing you to use a different, unique email address for each service you sign up for. This means if you start receiving spam, you can block that alias and determine which company leaked your email address.
**Subaddressing** | Opcional | An alternative to aliasing is subaddressing, where anything after the `+` symbol is omitted during mail delivery. This enables you to keep track of who shared/ leaked your email address, but unlike aliasing, it will not protect against your real address being revealed.
**Use a Custom Domain** | Avançado | Using a custom domain means that you are not dependent on the address assigned by your mail provider. So you can easily switch providers in the future and do not need to worry about a service being discontinued.
**Sync with a client for backup** | Avançado | To avoid losing temporary or permanent access to your emails during an unplanned event (such as an outage or account lock), Thunderbird can sync/ backup messages from multiple accounts via IMAP and store locally on your primary device.
**Be Careful with Mail Signatures** | Avançado | You do not know how secure of an email environment the recipient of your message may have. There are several extensions that automatically crawl messages, and create a detailed database of contact information based upon email signatures.
**Be Careful with Auto-Replies** | Avançado | Out-of-office automatic replies are very useful for informing people there will be a delay in replying, but all too often people reveal too much information- which can be used in social engineering and targeted attacks.
**Choose the Right Mail Protocol** | Avançado | Do not use outdated protocols (below IMAPv4 or POPv3), both have known vulnerabilities and out-dated security.
**Self-Hosting** | Avançado | Self-hosting your own mail server is not recommended for non-advanced users, since correctly securing it is critical yet requires strong networking knowledge.
**Always use TLS Ports** | Avançado | There are SSL options for POP3, IMAP, and SMTP as standard TCP/IP ports. They are easy to use, and widely supported so should always be used instead of plaintext email ports.
**DNS Availability** | Avançado | For self-hosted mail servers, to prevent DNS problems impacting availability- use at least 2 MX records, with secondary and tertiary MX records for redundancy when the primary MX record fails.
**Prevent DDoS and Brute Force Attacks** | Avançado | For self-hosted mail servers (specifically SMTP), limit your total number of simultaneous connections, and maximum connection rate to reduce the impact of attempted bot attacks.
**Maintain IP Blacklist** | Avançado | For self-hosted mail servers, you can improve spam filters and harden security, through maintaining an up-to-date local IP blacklist and a spam URI realtime block lists to filter out malicious hyperlinks.

### Recommended Software
- [Secure Email Providers](https://github.com/Lissy93/awesome-privacy#encrypted-email)
- [Mail Forwarding](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding)
- [Pre-Configured Mail Servers](https://github.com/Lissy93/awesome-privacy#pre-configured-mail-servers)
- [Email Clients](https://github.com/Lissy93/awesome-privacy#email-clients)


## Mensagens



**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Only Use Fully End-to-End Encrypted Messengers** | Essencial | End-to-end encryption is a system of communication where messages are encrypted on your device and not decrypted until they reach the intended recipient. This ensures that any actor who intercepts traffic cannot read the message contents, nor can anybody with access to the central servers where data is stored.
**Use only Open Source Messaging Platforms** | Essencial | If code is open source then it can be independently examined and audited by anyone qualified to do so, to ensure that there are no backdoors, vulnerabilities, or other security issues.
**Use a "Trustworthy" Messaging Platform** | Essencial | When selecting an encrypted messaging app, ensure it's fully open source, stable, actively maintained, and ideally backed by reputable developers.
**Check Security Settings** | Essencial | Enable security settings, including contact verification, security notifications, and encryption. Disable optional non-security features such as read receipt, last online, and typing notification.
**Ensure your Recipients Environment is Secure** | Essencial | Your conversation can only be as secure as the weakest link. Often the easiest way to infiltrate a communications channel is to target the individual or node with the least protection.
**Disable Cloud Services** | Essencial | Some mobile messaging apps offer a web or desktop companion. This not only increases attack surface but it has been linked to several critical security issues, and should therefore be avoided, if possible.
**Secure Group Chats** | Essencial | The risk of compromise rises exponentially, the more participants are in a group, as the attack surface increases. Periodically check that all participants are legitimate.
**Create a Safe Environment for Communication** | Essencial | There are several stages where your digital communications could be monitored or intercepted. This includes: your or your participants' device, your ISP, national gateway or government logging, the messaging provider, the servers.
**Agree on a Communication Plan** | Opcional | In certain situations, it may be worth making a communication plan. This should include primary and backup methods of securely getting in hold with each other.
**Strip Meta-Data from Media** | Opcional | Metadata is "Data about Data" or additional information attached to a file or transaction. When you send a photo, audio recording, video, or document you may be revealing more than you intended to.
**Defang URLs** | Opcional | Sending links via various services can unintentionally expose your personal information. This is because, when a thumbnail or preview is generated- it happens on the client-side.
**Verify your Recipient** | Opcional | Always ensure you are talking to the intended recipient, and that they have not been compromised. One method for doing so is to use an app which supports contact verification.
**Enable Ephemeral Messages** | Opcional | Self-destructing messages is a feature that causes your messages to automatically delete after a set amount of time. This means that if your device is lost, stolen, or seized, an adversary will only have access to the most recent communications.
**Avoid SMS** | Opcional | SMS may be convenient, but it's not secure. It is susceptible to threats such as interception, sim swapping, manipulation, and malware.
**Watch out for Trackers** | Opcional | Be wary of messaging applications with trackers, as the detailed usage statistics they collect are often very invasive, and can sometimes reveal your identity as well as personal information that you would otherwise not intend to share.
**Consider Jurisdiction** | Avançado | The jurisdictions where the organisation is based, and data is hosted should also be taken into account.
**Use an Anonymous Platform** | Avançado | If you believe you may be targeted, you should opt for an anonymous messaging platform that does not require a phone number, or any other personally identifiable information to sign up or use.
**Ensure Forward Secrecy is Supported** | Avançado | Opt for a platform that implements forward secrecy. This is where your app generates a new encryption key for every message.
**Consider a Decentralized Platform** | Avançado | If all data flows through a central provider, you have to trust them with your data and meta-data. You cannot verify that the system running is authentic without back doors.

### Recommended Software
- [Secure Messaging Apps](https://github.com/Lissy93/awesome-privacy#encrypted-messaging)
- [P2P Messaging Platforms](https://github.com/Lissy93/awesome-privacy#p2p-messaging)


## Redes Sociais

Online communities have existed since the invention of the internet, and give people around the world the opportunity to connect, communicate and share. Although these networks are a great way to promote social interaction and bring people together, that have a dark side - there are some serious [Privacy Concerns with Social Networking Services](https://en.wikipedia.org/wiki/Privacy_concerns_with_social_networking_services), and these social networking sites are owned by private corporations, and that they make their money by collecting data about individuals and selling that data on, often to third party advertisers.
Secure your account, lock down your privacy settings, but know that even after doing so, all data intentionally and non-intentionally uploaded is effectively public. If possible, avoid using conventional social media networks.


**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Secure your Account** | Essencial | Social media profiles get stolen or taken over all too often. To protect your account: use a unique and strong password, and enable 2-factor authentication.
**Check Privacy Settings** | Essencial | Most social networks allow you to control your privacy settings. Ensure that you are comfortable with what data you are currently exposing and to whom.
**Think of All Interactions as Public** | Essencial | There are still numerous methods of viewing a users 'private' content across many social networks. Therefore, before uploading, posting or commenting on anything, think "Would I mind if this was totally public?"
**Think of All Interactions as Permanent** | Essencial | Pretty much every post, comment, photo etc is being continuously backed up by a myriad of third-party services, who archive this data and make it indexable and publicly available almost forever.
**Don't Reveal too Much** | Essencial | Profile information creates a goldmine of info for hackers, the kind of data that helps them personalize phishing scams. Avoid sharing too much detail (DoB, Hometown, School etc).
**Be Careful what you Upload** | Essencial | Status updates, comments, check-ins and media can unintentionally reveal a lot more than you intended them to. This is especially relevant to photos and videos, which may show things in the background.
**Don't Share Email or Phone Number** | Essencial | Posting your real email address or mobile number, gives hackers, trolls and spammers more munition to use against you, and can also allow separate aliases, profiles or data points to be connected.
**Don't Grant Unnecessary Permissions** | Essencial | By default many of the popular social networking apps will ask for permission to access your contacts, call log, location, messaging history etc. If they don’t need this access, don’t grant it.
**Be Careful of 3rd-Party Integrations** | Essencial | Avoid signing up for accounts using a Social Network login, revoke access to social apps you no longer use.
**Avoid Publishing Geo Data while still Onsite** | Essencial | If you plan to share any content that reveals a location, then wait until you have left that place. This is particularly important when you are taking a trip, at a restaurant, campus, hotel/resort, public building or airport.
**Remove metadata before uploading media** | Opcional | Most smartphones and some cameras automatically attach a comprehensive set of additional data (called EXIF data) to each photograph. Remove this data before uploading.
**Implement Image Cloaking** | Avançado | Tools like Fawkes can be used to very subtly, slightly change the structure of faces within photos in a way that is imperceptible by humans, but will prevent facial recognition systems from being able to recognize a given face.
**Consider Spoofing GPS in home vicinity** | Avançado | Even if you yourself never use social media, there is always going to be others who are not as careful, and could reveal your location.
**Consider False Information** | Avançado | If you just want to read, and do not intend on posting too much- consider using an alias name, and false contact details.
**Don’t have any social media accounts** | Avançado | Social media is fundamentally un-private, so for maximum online security and privacy, avoid using any mainstream social networks.

### Recommended Software
- [Alternative Social Media](https://github.com/Lissy93/awesome-privacy#social-networks)
- [Alternative Video Platforms](https://github.com/Lissy93/awesome-privacy#video-platforms)
- [Alternative Blogging Platforms](https://github.com/Lissy93/awesome-privacy#blogging-platforms)
- [News Readers and Aggregation](https://github.com/Lissy93/awesome-privacy#news-readers-and-aggregation)


## Redes

This section covers how you connect your devices to the internet securely, including configuring your router and setting up a VPN.


**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Use a VPN** | Essencial | Use a reputable, paid-for VPN. This can help protect sites you visit from logging your real IP, reduce the amount of data your ISP can collect, and increase protection on public WiFi.
**Change your Router Password** | Essencial | After getting a new router, change the password. Default router passwords are publicly available, meaning anyone within proximity would be able to connect.
**Use WPA2, and a strong password** | Essencial | There are different authentication protocols for connecting to WiFi. Currently, the most secure options are WPA2 and WPA3 (on newer routers).
**Keep router firmware up-to-date** | Essencial | Manufacturers release firmware updates that fix security vulnerabilities, implement new standards, and sometimes add features or improve the performance of your router.
**Implement a Network-Wide VPN** | Opcional | If you configure your VPN on your router, firewall, or home server, then traffic from all devices will be encrypted and routed through it, without needing individual VPN apps.
**Protect against DNS leaks** | Opcional | When using a VPN, it is extremely important to exclusively use the DNS server of your VPN provider or secure service.
**Use a secure VPN Protocol** | Opcional | OpenVPN and WireGuard are open source, lightweight, and secure tunneling protocols. Avoid using PPTP or SSTP.
**Secure DNS** | Opcional | Use DNS-over-HTTPS which performs DNS resolution via the HTTPS protocol, encrypting data between you and your DNS resolver.
**Avoid the free router from your ISP** | Opcional | Typically they’re manufactured cheaply in bulk in China, with insecure propriety firmware that doesn't receive regular security updates.
**Whitelist MAC Addresses** | Opcional | You can whitelist MAC addresses in your router settings, disallowing any unknown devices to immediately connect to your network, even if they know your credentials.
**Change the Router’s Local IP Address** | Opcional | It is possible for a malicious script in your web browser to exploit a cross-site scripting vulnerability, accessing known-vulnerable routers at their local IP address and tampering with them.
**Don't Reveal Personal Info in SSID** | Opcional | You should update your network name, choosing an SSID that does not identify you, include your flat number/address, and does not specify the device brand/model.
**Opt-Out Router Listings** | Opcional | WiFi SSIDs are scanned, logged, and then published on various websites, which is a serious privacy concern for some.
**Hide your SSID** | Opcional | Your router's Service Set Identifier is simply the network name. If it is not visible, it may receive less abuse.
**Disable WPS** | Opcional | Wi-Fi Protected Setup provides an easier method to connect, without entering a long WiFi password, but WPS introduces a series of major security issues.
**Disable UPnP** | Opcional | Universal Plug and Play allows applications to automatically forward a port on your router, but it has a long history of serious security issues.
**Use a Guest Network for Guests** | Opcional | Do not grant access to your primary WiFi network to visitors, as it enables them to interact with other devices on the network.
**Change your Router's Default IP** | Opcional | Modifying your router admin panel's default IP address will make it more difficult for malicious scripts targeting local IP addresses.
**Kill unused processes and services on your router** | Opcional | Services like Telnet and SSH that provide command-line access to devices should never be exposed to the internet and should also be disabled on the local network unless they're actually needed.
**Don't have Open Ports** | Opcional | Close any open ports on your router that are not needed. Open ports provide an easy entrance for hackers.
**Disable Unused Remote Access Protocols** | Opcional | When protocols such as PING, Telnet, SSH, UPnP, and HNAP etc are enabled, they allow your router to be probed from anywhere in the world.
**Disable Cloud-Based Management** | Opcional | You should treat your router's admin panel with the utmost care, as considerable damage can be caused if an attacker is able to gain access.
**Manage Range Correctly** | Opcional | It's common to want to pump your router's range to the max, but if you reside in a smaller flat, your attack surface is increased when your WiFi network can be picked up across the street.
**Route all traffic through [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor)** | Avançado | VPNs have their weaknesses. For increased security, route all your internet traffic through the [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) network.
**Disable WiFi on all Devices** | Avançado | Connecting to even a secure WiFi network increases your attack surface. Disabling your home WiFi and connect each device via Ethernet.

### Recommended Software
- [Virtual Private Networks](https://github.com/Lissy93/awesome-privacy#virtual-private-networks)
- [Mix Networks](https://github.com/Lissy93/awesome-privacy#mix-networks)
- [Router Firmware](https://github.com/Lissy93/awesome-privacy#router-firmware)
- [Open Source Proxies](https://github.com/Lissy93/awesome-privacy#proxies)
- [DNS Providers](https://github.com/Lissy93/awesome-privacy#dns)
- [Firewalls](https://github.com/Lissy93/awesome-privacy#firewalls)
- [Network Analysis Tools](https://github.com/Lissy93/awesome-privacy#network-analysis)
- [Self-Hosted Network Security Tools](https://github.com/Lissy93/awesome-privacy#self-hosted-network-security)


## Dispositivos Móveis

Smart phones have revolutionized so many aspects of life and brought the world to our fingertips. For many of us, smart phones are our primary means of communication, entertainment and access to knowledge. But while they've brought convenience to whole new level, there's some ugly things going on behind the screen.
Geo-tracking is used to trace our every move, and we have little control over who has this data- your phone is even able to [track your location without GPS](https://gizmodo.com/how-to-track-a-cellphone-without-gps-or-consent-1821125371). Over the years numerous reports that surfaced, outlining ways in which your phone's [mic can eavesdrop](https://www.independent.co.uk/life-style/gadgets-and-tech/news/smartphone-apps-listening-privacy-alphonso-shazam-advertising-pool-3d-honey-quest-a8139451.html), and the [camera can watch you](https://www.businessinsider.com/hackers-governments-smartphone-iphone-camera-wikileaks-cybersecurity-hack-privacy-webcam-2017-6)- all without your knowledge or consent. And then there's the malicious apps, lack of security patches and potential/ likely backdoors.
Using a smart phone generates a lot of data about you- from information you intentionally share, to data silently generated from your actions. It can be scary to see what Google, Microsoft, Apple and Facebook know about us- sometimes they know more than our closest family. It's hard to comprehend what your data will reveal, especially in conjunction with other data.
This data is used for [far more than just advertising](https://internethealthreport.org/2018/the-good-the-bad-and-the-ugly-sides-of-data-tracking/) - more often it's used to rate people for finance, insurance and employment. Targeted ads can even be used for fine-grained surveillance (see [ADINT](https://adint.cs.washington.edu))
More of us are concerned about how [governments use collect and use our smart phone data](https://www.statista.com/statistics/373916/global-opinion-online-monitoring-government/), and rightly so, federal agencies often [request our data from Google](https://www.statista.com/statistics/273501/global-data-requests-from-google-by-federal-agencies-and-governments/), [Facebook](https://www.statista.com/statistics/287845/global-data-requests-from-facebook-by-federal-agencies-and-governments/), Apple, Microsoft, Amazon, and other tech companies. Sometimes requests are made in bulk, returning detailed information on everybody within a certain geo-fence, [often for innocent people](https://www.nytimes.com/interactive/2019/04/13/us/google-location-tracking-police.html). And this doesn't include all of the internet traffic that intelligence agencies around the world have unhindered access to.


**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Encrypt your Device** | Essencial | In order to keep your data safe from physical access, use file encryption. This will mean if your device is lost or stolen, no one will have access to your data.
**Turn off connectivity features that aren’t being used** | Essencial | When you're not using WiFi, Bluetooth, NFC etc, turn those features off. There are several common threats that utilise these features.
**Keep app count to a minimum** | Essencial | Uninstall apps that you don’t need or use regularly. As apps often run in the background, slowing your device down, but also collecting data.
**App Permissions** | Essencial | Don’t grant apps permissions that they don’t need. For Android, [Bouncer](https://awesome-privacy.xyz/security-tools/mobile-apps/bouncer) is an app that allows you to grant temporary/ 1-off permissions.
**Only install Apps from official source** | Essencial | Applications on Apple App Store and Google Play Store are scanned and cryptographically signed, making them less likely to be malicious.
**Be Careful of Phone Charging Threats** | Opcional | Juice Jacking is when hackers use public charging stations to install malware on your smartphone or tablet through a compromised USB port.
**Set up a mobile carrier PIN** | Essencial | SIM hijacking is when a hacker is able to get your mobile number transferred to their sim. The easiest way to protect against this is to set up a PIN through your mobile provider.
**Opt-out of Caller ID Listings** | Opcional | To keep your details private, you can unlist your number from caller ID apps like TrueCaller, CallApp, SyncMe, and Hiya.
**Use Offline Maps** | Opcional | Consider using an offline maps app, such as OsmAnd or Organic Maps, to reduce data leaks from map apps.
**Opt-out of personalized ads** | Opcional | You can slightly reduce the amount of data collected by opting-out of seeing personalized ads.
**Erase after too many login attempts** | Opcional | To protect against an attacker brute forcing your pin, set your device to erase after too many failed login attempts.
**Monitor Trackers** | Opcional | [εxodus](https://awesome-privacy.xyz/security-tools/online-tools/εxodus) is a great service which lets you search for any app and see which trackers are embedded in it.
**Use a Mobile Firewall** | Opcional | To prevent applications from leaking privacy-sensitive data, you can install a firewall app.
**Reduce Background Activity** | Opcional | For Android, SuperFreeze makes it possible to entirely freeze all background activities on a per-app basis.
**Sandbox Mobile Apps** | Opcional | Prevent permission-hungry apps from accessing your private data with [Island](https://awesome-privacy.xyz/security-tools/mobile-apps/island), a sandbox environment.
**Tor Traffic** | Avançado | [Orbot](https://awesome-privacy.xyz/security-tools/mobile-apps/orbot) provides a system-wide Tor connection, which will help protect you from surveillance and public WiFi threats.
**Avoid Custom Virtual Keyboards** | Opcional | It is recommended to stick with your device's stock keyboard. If you choose to use a third-party keyboard app, ensure it is reputable.
**Restart Device Regularly** | Opcional | Restarting your phone at least once a week will clear the app state cached in memory and may run more smoothly after a restart.
**Avoid SMS** | Opcional | SMS should not be used to receive 2FA codes or for communication, instead use an encrypted messaging app, such as [Signal](https://awesome-privacy.xyz/communication/encrypted-messaging/signal).
**Keep your Number Private** | Opcional | [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) allows you to create and use virtual phone numbers for different people or groups. This is great for compartmentalisation.
**Watch out for Stalkerware** | Opcional | Stalkerware is malware that is installed directly onto your device by someone you know. The best way to get rid of it is through a factory reset.
**Favor the Browser, over Dedicated App** | Opcional | Where possible, consider using a secure browser to access sites, rather than installing dedicated applications.
**Consider running a custom ROM (Android)** | Avançado | If you're concerned about your device manufacturer collecting too much personal information, consider a privacy-focused custom ROM.

### Recommended Software
- [Mobile Apps, for Security + Privacy](https://github.com/Lissy93/awesome-privacy#mobile-apps)
- [Encrypted Messaging](https://github.com/Lissy93/awesome-privacy#encrypted-messaging)
- [Mobile Operation Systems](https://github.com/Lissy93/awesome-privacy#mobile-operating-systems)


## Computadores Pessoais

Although Windows and OS X are easy to use and convenient, they both are far from secure. Your OS provides the interface between hardware and your applications, so if compromised can have detrimental effects.


**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Keep your System up-to-date** | Essencial | System updates contain fixes/patches for security issues, improve performance, and sometimes add new features. Install new updates when prompted.
**Encrypt your Device** | Essencial | Use BitLocker for Windows, FileVault on MacOS, or LUKS on Linux, to enable full disk encryption. This prevents unauthorized access if your computer is lost or stolen.
**Backup Important Data** | Essencial | Maintaining encrypted backups prevents loss due to ransomware, theft, or damage. Consider using [Cryptomator](https://awesome-privacy.xyz/security-tools/mobile-apps/cryptomator) for cloud files or [VeraCrypt](https://awesome-privacy.xyz/essentials/file-encryption/veracrypt) for USB drives.
**Be Careful Plugging USB Devices into your Computer** | Essencial | USB devices can pose serious threats. Consider making a USB sanitizer with CIRCLean to safely check USB devices.
**Activate Screen-Lock when Idle** | Essencial | Lock your computer when away and set it to require a password on resume from screensaver or sleep to prevent unauthorized access.
**Disable Cortana or Siri** | Essencial | Voice-controlled assistants can have privacy implications due to data sent back for processing. Disable or limit their listening capabilities.
**Review your Installed Apps** | Essencial | Keep installed applications to a minimum to reduce exposure to vulnerabilities and regularly clear application caches.
**Manage Permissions** | Essencial | Control which apps have access to your location, camera, microphone, contacts, and other sensitive information.
**Disallow Usage Data from being sent to the Cloud** | Essencial | Limit the amount of usage information or feedback sent to the cloud to protect your privacy.
**Avoid Quick Unlock** | Essencial | Use a strong password instead of biometrics or short PINs for unlocking your computer to enhance security.
**Power Off Computer, instead of Standby** | Essencial | Shut down your device when not in use, especially if your disk is encrypted, to keep data secure.
**Don't link your PC with your Microsoft or Apple Account** | Opcional | Use a local account only to prevent data syncing and exposure. Avoid using sync services that compromise privacy.
**Check which Sharing Services are Enabled** | Opcional | Disable network sharing features you are not using to close gateways to common threats.
**Don't use Root/Admin Account for Non-Admin Tasks** | Opcional | Use an unprivileged user account for daily tasks and only elevate permissions for administrative changes to mitigate vulnerabilities.
**Block Webcam + Microphone** | Opcional | Cover your webcam when not in use and consider blocking unauthorized audio recording to protect privacy.
**Use a Privacy Filter** | Opcional | Use a screen privacy filter in public spaces to prevent shoulder surfing and protect sensitive information.
**Physically Secure Device** | Opcional | Use a Kensington Lock to secure your laptop in public spaces and consider port locks to prevent unauthorized physical access.
**Don't Charge Devices from your PC** | Opcional | Use a power bank or AC wall charger instead of your PC to avoid security risks associated with USB connections.
**Randomize your hardware address on Wi-Fi** | Opcional | Modify or randomize your MAC address to protect against tracking across different WiFi networks.
**Use a Firewall** | Opcional | Install a firewall app to monitor and block unwanted internet access by certain applications, protecting against remote access attacks and privacy breaches.
**Protect Against Software Keyloggers** | Opcional | Use key stroke encryption tools to protect against software keyloggers recording your keystrokes.
**Check Keyboard Connection** | Opcional | Be vigilant for hardware keyloggers when using public or unfamiliar computers by checking keyboard connections.
**Prevent Keystroke Injection Attacks** | Opcional | Lock your PC when away and consider using USBGuard or similar tools to protect against keystroke injection attacks.
**Don't use commercial "Free" Anti-Virus** | Opcional | Rely on built-in security tools and avoid free anti-virus applications due to their potential for privacy invasion and data collection.
**Periodically check for Rootkits** | Avançado | Regularly check for rootkits to detect and mitigate full system control threats using tools like [chkrootkit](https://awesome-privacy.xyz/operating-systems/linux-defenses/chkrootkit).
**BIOS Boot Password** | Avançado | Enable a BIOS or UEFI password to add an additional security layer during boot-up, though be aware of its limitations.
**Use a Security-Focused Operating System** | Avançado | Consider switching to Linux or a security-focused distro like QubeOS or [Tails](https://awesome-privacy.xyz/operating-systems/desktop-operating-systems/tails) for enhanced privacy and security.
**Make Use of VMs** | Avançado | Use virtual machines for risky activities or testing suspicious software to isolate potential threats from your primary system.
**Compartmentalize** | Avançado | Isolate different programs and data sources from one another as much as possible to limit the extent of potential breaches.
**Disable Undesired Features (Windows)** | Avançado | Disable unnecessary Windows "features" and services that run in the background to reduce data collection and resource use.
**Secure Boot** | Avançado | Ensure that Secure Boot is enabled to prevent malware from replacing your boot loader and other critical software.
**Secure SSH Access** | Avançado | Take steps to protect SSH access from attacks by changing the default port, using SSH keys, and configuring firewalls.
**Close Un-used Open Ports** | Avançado | Turn off services listening on external ports that are not needed to protect against remote exploits and improve security.
**Implement Mandatory Access Control** | Avançado | Restrict privileged access to limit the damage that can be done if a system is compromised.
**Use Canary Tokens** | Avançado | Deploy canary tokens to detect unauthorized access to your files or emails faster and gather information about the intruder.

### Recommended Software
- [Secure Operating Systems](https://github.com/Lissy93/awesome-privacy#desktop-operating-systems)
- [Linux Defenses](https://github.com/Lissy93/awesome-privacy#linux-defences)
- [Windows Defenses](https://github.com/Lissy93/awesome-privacy#windows-defences)
- [Mac OS Defenses](https://github.com/Lissy93/awesome-privacy#mac-os-defences)
- [Anti-Malware](https://github.com/Lissy93/awesome-privacy#anti-malware)
- [Firewalls](https://github.com/Lissy93/awesome-privacy#firewalls-1)
- [File Encryption](https://github.com/Lissy93/awesome-privacy#file-encryption)


## Casa Inteligente

Home assistants (such as Google Home, Alexa and Siri) and other internet connected devices collect large amounts of personal data (including voice samples, location data, home details and logs of all interactions). Since you have limited control on what is being collected, how it's stored, and what it will be used for, this makes it hard to recommend any consumer smart-home products to anyone who cares about privacy and security.
Security vs Privacy: There are many smart devices on the market that claim to increase the security of your home while being easy and convenient to use (Such as Smart Burglar Alarms, Internet Security Cameras, Smart Locks and Remote access Doorbells to name a few). These devices may appear to make security easier, but there is a trade-off in terms of privacy: as they collect large amounts of personal data, and leave you without control over how this is stored or used. The security of these devices is also questionable, since many of them can be (and are being) hacked, allowing an intruder to bypass detection with minimum effort.
The most privacy-respecting option, would be to not use "smart" internet-connected devices in your home, and not to rely on a security device that requires an internet connection. But if you do, it is important to fully understand the risks of any given product, before buying it. Then adjust settings to increase privacy and security. The following checklist will help mitigate the risks associated with internet-connected home devices.

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Rename devices to not specify brand/model** | Essencial | Change default device names to something generic to prevent targeted attacks by obscuring brand or model information.
**Disable microphone and camera when not in use** | Essencial | Use hardware switches to turn off microphones and cameras on smart devices to protect against accidental recordings or targeted access.
**Understand what data is collected, stored and transmitted** | Essencial | Research and ensure comfort with the data handling practices of smart home devices before purchase, avoiding devices that share data with third parties.
**Set privacy settings, and opt out of sharing data with third parties** | Essencial | Adjust app settings for strictest privacy controls and opt-out of data sharing with third parties wherever possible.
**Don't link your smart home devices to your real identity** | Essencial | Use anonymous usernames and passwords, avoiding sign-up/log-in via social media or other third-party services to maintain privacy.
**Keep firmware up-to-date** | Essencial | Regularly update smart device firmware to apply security patches and enhancements.
**Protect your Network** | Essencial | Secure your home WiFi and network to prevent unauthorized access to smart devices.
**Be wary of wearables** | Opcional | Consider the extensive data collection capabilities of wearable devices and their implications for privacy.
**Don't connect your home's critical infrastructure to the Internet** | Opcional | Evaluate the risks of internet-connected thermostats, alarms, and detectors due to potential remote access by hackers.
**Mitigate Alexa/ Google Home Risks** | Opcional | Consider privacy-focused alternatives like [Mycroft](https://awesome-privacy.xyz/smart-home-and-iot/voice-assistants/mycroft) or use Project Alias to prevent idle listening by voice-activated assistants.
**Monitor your home network closely** | Opcional | Use tools like FingBox or router features to monitor for unusual network activity.
**Deny Internet access where possible** | Avançado | Use firewalls to block internet access for devices that don't need it, limiting operation to local network use.
**Assess risks** | Avançado | Consider the privacy implications for all household members and adjust device settings for security and privacy, such as disabling devices at certain times.

### Recommended Software
- [Home Automation](https://github.com/Lissy93/awesome-privacy#home-automation)
- [AI Voice Assistants](https://github.com/Lissy93/awesome-privacy#ai-voice-assistants)


## Finanças Pessoais

Credit card fraud is the most common form of identity theft (with [133,015 reports in the US in 2017 alone](https://www.experian.com/blogs/ask-experian/identity-theft-statistics/)), and a total loss of $905 million, which was a 26% increase from the previous year. The with a median amount lost per person was $429 in 2017. It's more important than ever to take basic steps to protect yourself from falling victim
Note about credit cards: Credit cards have technological methods in place to detect and stop some fraudulent transactions. Major payment processors implement this, by mining huge amounts of data from their card holders, in order to know a great deal about each persons spending habits. This data is used to identify fraud, but is also sold onto other data brokers. Credit cards are therefore good for security, but terrible for data privacy.

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Sign up for Fraud Alerts and Credit Monitoring** | Essencial | Enable fraud alerts and credit monitoring through Experian, TransUnion, or Equifax to be alerted of suspicious activity.
**Apply a Credit Freeze** | Essencial | Prevent unauthorized credit inquiries by freezing your credit through Experian, TransUnion, and Equifax.
**Use Virtual Cards** | Opcional | Utilize virtual card numbers for online transactions to protect your real banking details. Services like [Privacy.com](https://awesome-privacy.xyz/finance/virtual-credit-cards/privacy.com) and [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) offer such features.
**Use Cash for Local Transactions** | Opcional | Pay with [Cash](https://awesome-privacy.xyz/finance/other-payment-methods/cash) for local and everyday purchases to avoid financial profiling by institutions.
**Use Cryptocurrency for Online Transactions** | Opcional | Opt for privacy-focused cryptocurrencies like [Monero](https://awesome-privacy.xyz/finance/cryptocurrencies/monero) for online transactions to maintain anonymity. Use cryptocurrencies wisely to ensure privacy.
**Store Crypto Securely** | Avançado | Securely store cryptocurrencies using offline wallet generation, hardware wallets like [Trezor](https://awesome-privacy.xyz/finance/crypto-wallets/trezor) or [ColdCard](https://awesome-privacy.xyz/finance/crypto-wallets/coldcard), or consider long-term storage solutions like [CryptoSteel](https://awesome-privacy.xyz/finance/crypto-wallets/cryptosteel).
**Buy Crypto Anonymously** | Avançado | Purchase cryptocurrencies without linking to your identity through services like [LocalBitcoins](https://awesome-privacy.xyz/finance/crypto-exchanges/localbitcoins), [Bisq](https://awesome-privacy.xyz/finance/crypto-exchanges/bisq), or Bitcoin ATMs.
**Tumble/ Mix Coins** | Avançado | Use a bitcoin mixer or CoinJoin before converting Bitcoin to currency to obscure transaction trails.
**Use an Alias Details for Online Shopping** | Avançado | For online purchases, consider using alias details, forwarding email addresses, VOIP numbers, and secure delivery methods to protect your identity.
**Use alternate delivery address** | Avançado | Opt for deliveries to non-personal addresses such as PO Boxes, forwarding addresses, or local pickup locations to avoid linking purchases directly to you.

### Recommended Software
- [Virtual Credit Cards](https://github.com/Lissy93/awesome-privacy#virtual-credit-cards)
- [Cryptocurrencies](https://github.com/Lissy93/awesome-privacy#cryptocurrencies)
- [Crypto Wallets](https://github.com/Lissy93/awesome-privacy#crypto-wallets)
- [Crypto Exchanges](https://github.com/Lissy93/awesome-privacy#crypto-exchanges)
- [Other Payment Methods](https://github.com/Lissy93/awesome-privacy#other-payment-methods)
- [Budgeting Tools](https://github.com/Lissy93/awesome-privacy#budgeting-tools)


## Aspecto Humano

Many data breaches, hacks and attacks are caused by human error. The following list contains steps you should take, to reduce the risk of this happening to you. Many of them are common sense, but it's worth takin note of.

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Verify Recipients** | Essencial | Emails can be easily spoofed. Verify the sender's authenticity, especially for sensitive actions, and prefer entering URLs manually rather than clicking links in emails.
**Don't Trust Your Popup Notifications** | Essencial | Fake pop-ups can be deployed by malicious actors. Always check the URL before entering any information on a popup.
**Never Leave Device Unattended** | Essencial | Unattended devices can be compromised even with strong passwords. Use encryption and remote erase features like Find My Phone for lost devices.
**Prevent Camfecting** | Essencial | Protect against camfecting by using webcam covers and microphone blockers. Mute home assistants when not in use or discussing sensitive matters.
**Stay protected from shoulder surfers** | Essencial | Use privacy screens on laptops and mobiles to prevent others from reading your screen in public spaces.
**Educate yourself about phishing attacks** | Essencial | Be cautious of phishing attempts. Verify URLs, context of received messages, and employ good security practices like using 2FA and not reusing passwords.
**Watch out for Stalkerware** | Essencial | Be aware of stalkerware installed by acquaintances for spying. Look out for signs like unusual battery usage and perform factory resets if suspected.
**Install Reputable Software from Trusted Sources** | Essencial | Only download software from legitimate sources and check files with tools like [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total) before installation.
**Store personal data securely** | Essencial | Ensure all personal data on devices or in the cloud is encrypted to protect against unauthorized access.
**Obscure Personal Details from Documents** | Essencial | When sharing documents, obscure personal details with opaque rectangles to prevent information leakage.
**Do not assume a site is secure, just because it is `HTTPS`** | Essencial | HTTPS does not guarantee a website's legitimacy. Verify URLs and exercise caution with personal data.
**Use Virtual Cards when paying online** | Opcional | Use virtual cards for online payments to protect your banking details and limit transaction risks.
**Review application permissions** | Opcional | Regularly review and manage app permissions to ensure no unnecessary access to sensitive device features.
**Opt-out of public lists** | Opcional | Remove yourself from public databases and marketing lists to reduce unwanted contacts and potential risks.
**Never Provide Additional PII When Opting-Out** | Opcional | Do not provide additional personal information when opting out of data services to avoid further data collection.
**Opt-out of data sharing** | Opcional | Many apps and services default to data sharing settings. Opt out to protect your data from being shared with third parties.
**Review and update social media privacy** | Opcional | Regularly check and update your social media settings due to frequent terms updates that may affect your privacy settings.
**Compartmentalize** | Avançado | Keep different areas of digital activity separate to limit data exposure in case of a breach.
**WhoIs Privacy Guard** | Avançado | Use WhoIs Privacy Guard for domain registrations to protect your personal information from public searches.
**Use a forwarding address** | Avançado | Use a PO Box or forwarding address for mail to prevent companies from knowing your real address, adding a layer of privacy protection.
**Use anonymous payment methods** | Avançado | Opt for anonymous payment methods like cryptocurrencies to avoid entering identifiable information online.


## Segurança Física

Public records often include sensitive personal data (full name, date of birth, phone number, email, address, ethnicity etc), and are gathered from a range of sources (census records, birth/ death/ marriage certificates, voter registrants, marketing information, customer databases, motor vehicle records, professional/ business licenses and all court files in full detail). This sensitive personal information is [easy and legal to access](https://www.consumerreports.org/consumerist/its-creepy-but-not-illegal-for-this-website-to-provide-all-your-public-info-to-anyone/), which raises some [serious privacy concerns](https://privacyrights.org/resources/public-records-internet-privacy-dilemma) (identity theft, personal safety risks/ stalkers, destruction of reputations, dossier society)

CCTV is one of the major ways that the corporations, individuals and the government tracks your movements. In London, UK the average person is caught on camera about 500 times per day. This network is continuing to grow, and in many cities around the world, facial recognition is being rolled out, meaning the state can know the identity of residents on the footage in real-time.
Strong authentication, encrypted devices, patched software and anonymous web browsing may be of little use if someone is able to physically compromise you, your devices and your data. This section outlines some basic methods for physical security

**Segurança** | **Prioridade** | **Detalhes e Dicas**
--- | --- | ---
**Destroy Sensitive Documents** | Essencial | Shred or redact sensitive documents before disposal to protect against
identity theft and maintain confidentiality.

**Opt-Out of Public Records** | Essencial | Contact people search websites to opt-out from listings that show persona
information, using guides like Michael Bazzell's Personal Data Removal Workbook.

**Watermark Documents** | Essencial | Add a watermark with the recipient's name and date to digital copies of
personal documents to trace the source of a breach.

**Don't Reveal Info on Inbound Calls** | Essencial | Only share personal data on calls you initiate and verify the recipient's phone number.

**Stay Alert** | Essencial | Be aware of your surroundings and assess potential risks in new environments.
**Secure Perimeter** | Essencial | Ensure physical security of locations storing personal info devices, minimizing external access and using intrusion detection systems.
**Physically Secure Devices** | Essencial | Use physical security measures like Kensington locks, webcam covers, and privacy screens for devices.
**Keep Devices Out of Direct Sight** | Essencial | Prevent devices from being visible from outside to mitigate risks from lasers and theft.
**Protect your PIN** | Essencial | Shield your PIN entry from onlookers and cameras, and clean touchscreens after use.
**Check for Skimmers** | Essencial | Inspect ATMs and public devices for skimming devices and tampering signs before use.
**Protect your Home Address** | Opcional | Use alternative locations, forwarding addresses, and anonymous payment methods to protect your home address.
**Use a PIN, Not Biometrics** | Avançado | Prefer PINs over biometrics for device security in situations where legal coercion to unlock devices may occur.
**Reduce exposure to CCTV** | Avançado | Wear disguises and choose routes with fewer cameras to avoid surveillance.
**Anti-Facial Recognition Clothing** | Avançado | Wear clothing with patterns that trick facial-recognition technology.
**Reduce Night Vision Exposure** | Avançado | Use IR light sources or reflective glasses to obstruct night vision cameras.
**Protect your DNA** | Avançado | Avoid sharing DNA with heritage websites and be cautious about leaving DNA traces.



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
