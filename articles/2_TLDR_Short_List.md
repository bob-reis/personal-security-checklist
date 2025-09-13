# LISTA DE SEGURANÇA PESSOAL | RESUMO [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)[![Contributors](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](/ATTRIBUTIONS.md#contributors-)

> **📝 Nota de Tradução:** Este documento é uma tradução brasileira do [Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/) original de **© Alicia Sykes**, adaptado pela equipe **PP_Tech**. A tradução busca manter a essência e precisão técnica do documento original.

#### Conteúdo
- [Lista de Segurança Pessoal](#lista-de-segurança-pessoal)
- [Software Open-Source Focado em Privacidade](#software-open-source-focado-em-privacidade)
- [Hardware de Segurança](#hardware-de-segurança)

## LISTA DE SEGURANÇA PESSOAL

> Esta lista de dicas de privacidade e segurança é uma versão resumida do [Checklist Completo de Segurança Pessoal](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md). Ela apresenta os passos essenciais para proteger sua vida digital.

### Autenticação
- Use senhas longas, fortes e únicas para cada uma de suas contas (consulte [HowSecureIsMyPassword.net](https://howsecureismypassword.net))
- Use um [gerenciador de senhas](https://github.com/Lissy93/awesome-privacy#password-managers) seguro para criptografar, armazenar e preencher credenciais, como [BitWarden](https://bitwarden.com) ou [KeePass](https://keepass.info) / [KeePassXC](https://keepassxc.org)
- Ative a autenticação de dois fatores (2FA) sempre que possível, usando um [aplicativo autenticador](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) ou [token de hardware](/6_Privacy_and-Security_Gadgets.md#fido-u2f-keys)
- Ao habilitar a autenticação de múltiplos fatores, geralmente você receberá vários códigos de recuperação para usar caso seu método de 2FA seja perdido, quebrado ou indisponível. Armazene esses códigos em papel ou em um local seguro no disco (por exemplo, em armazenamento offline ou em um arquivo/drive criptografado).
- Cadastre-se em alertas de vazamentos (usando [Firefox Monitor](https://monitor.firefox.com) ou [HaveIBeenPwned](https://haveibeenpwned.com)) e atualize as senhas de contas comprometidas


### Navegação
- Use um navegador que respeite a privacidade, como [Brave](https://brave.com) e [Firefox](https://www.mozilla.org/pt-BR/exp/firefox/new). Configure o mecanismo de busca padrão para um que não faça rastreamento, como [DuckDuckGo](https://duckduckgo.com)
- Não insira informações em sites sem HTTPS (procure pelo ícone de cadeado). Firefox, Chrome, Edge e Safari agora possuem recursos de segurança HTTPS integrados. Se não souber se está habilitado, consulte este [guia](https://www.eff.org/deeplinks/2021/09/https-actually-everywhere)
- Bloqueie rastreadores de terceiros e anúncios usando extensões como [Privacy Badger](https://privacybadger.org) ou [uBlock](https://github.com/gorhill/uBlock)
- Mantenha seu navegador atualizado, explore as configurações de privacidade e remova extensões/complementos desnecessários
- Considere usar compartimentalização para separar diferentes áreas de navegação (como trabalho, social, compras etc), para reduzir o rastreamento. Isso pode ser feito com [Contêineres do Firefox](https://support.mozilla.org/pt-BR/kb/containers), usando navegadores separados ou perfis de navegador
- Não permita que seu navegador salve senhas ou preencha detalhes pessoais automaticamente (use um [gerenciador de senhas](https://github.com/Lissy93/awesome-privacy#password-managers) e [desative o preenchimento automático do navegador](https://www.computerhope.com/issues/ch001377.htm))
- Limpe cookies, dados de sessão e cache regularmente. Uma extensão como [Cookie-Auto-Delete](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) pode automatizar isso
- Não faça login no seu navegador, pois pode vincular mais dados à sua identidade. Se precisar, use um aplicativo de [sincronização de favoritos](https://github.com/Lissy93/awesome-privacy#browser-sync) de código aberto
- Considere usar [Decentraleyes](https://decentraleyes.org) para diminuir o número de solicitações de CDN rastreáveis que seu dispositivo faz
- Teste seu navegador usando ferramentas como [Panopticlick](https://panopticlick.eff.org) para garantir que não haja problemas significativos. [BrowserLeaks](https://browserleaks.com) e [Am I Unique](https://amiunique.org/fp) também são úteis para explorar quais informações do dispositivo você está expondo
- Para navegação anônima, use o [Navegador Tor](https://www.torproject.org/) e evite fazer login em qualquer uma de suas contas pessoais


### Celular
- Defina um PIN de dispositivo, idealmente usando uma senha longa. Se suportado, configure autenticação por impressão digital, mas evite desbloqueio facial
- Criptografe seu dispositivo para manter seus dados seguros contra acesso físico. Para ativar, no Android: `Configurações --> Segurança --> Criptografia`, ou no iOS: `Configurações --> TouchID e Código de Acesso --> Proteção de Dados`
- Mantenha o dispositivo atualizado. As atualizações do sistema frequentemente contêm correções para vulnerabilidades de segurança recentemente descobertas. Instale atualizações quando solicitado
- Revise as permissões de aplicativos. Não conceda permissões de acesso para aplicativos que não precisam delas. (Para Android, consulte também [Bouncer](https://play.google.com/store/apps/details?id=com.samruston.permission&hl=pt_BR) - um aplicativo que permite conceder permissões temporárias)
- Desative recursos de conectividade não utilizados e "esqueça" redes WiFi que não usa mais
- Desative o rastreamento de localização. Por padrão, Android e iOS registram o histórico de localização GPS. Você pode desativar isso, no Android: `Mapas --> Configurações --> Histórico de Localização`, e no iOS: `Configurações --> Privacidade --> Serviços de Localização --> Serviços do Sistema --> Locais`. Esteja ciente de que aplicativos de terceiros ainda podem registrar sua posição, e existem outros métodos de determinar sua localização além do GPS (torre de celular, WiFi, Bluetooth etc)
- Use um firewall de aplicativos para bloquear a conectividade de internet para aplicativos que não precisam dela, como [NetGuard](https://www.netguard.me/) (Android) ou [Lockdown](https://apps.apple.com/br/app/lockdown-apps/id1469783711) (iOS)
- Compreenda que aplicativos contêm rastreadores que coletam, armazenam e às vezes compartilham seus dados. Para Android, você pode usar [Exodus](https://exodus-privacy.eu.org/en/page/what/) para revelar quais rastreadores seus aplicativos instalados estão usando.


### Email
É importante proteger sua conta de email, pois se um hacker conseguir acessá-la, poderá se passar por você e redefinir senhas de outras contas online. Um dos maiores riscos à segurança digital ainda é o phishing, que pode ser incrivelmente convincente. Mantenha-se vigilante, aprenda [como identificar e-mails maliciosos](https://heimdalsecurity.com/blog/abcs-detecting-preventing-phishing), e evite compartilhar seu endereço de email publicamente

- Use uma senha longa, forte e única, e habilite a autenticação de dois fatores (2FA)
- Considere migrar para um provedor de email seguro e criptografado, como [ProtonMail](https://protonmail.com) ou [Tutanota](https://tutanota.com)
- Use aliases de email para proteger seu endereço real, com provedores como [Anonaddy](https://anonaddy.com) ou [SimpleLogin](https://simplelogin.io/?slref=bridsqrgvrnavso). Isso permite manter seu endereço real privado, mantendo todas as mensagens em sua caixa de entrada principal
- Desative o carregamento automático de conteúdo remoto, pois é frequentemente usado para rastreamento detalhado e pode ser malicioso
- Usar um domínio personalizado significa que você não perderá acesso ao seu endereço de email se o provedor atual desaparecer. Se precisar fazer backup de mensagens, use um cliente IMAP seguro como [Thunderbird](https://www.thunderbird.net)


### Mensagens Seguras
- Use um [aplicativo de mensagens seguras](https://github.com/Lissy93/awesome-privacy#encrypted-messaging) que seja totalmente de código aberto e criptografado de ponta a ponta com segredo de encaminhamento perfeito (por exemplo, [Signal](https://www.signal.org/))
- Certifique-se de que tanto o seu dispositivo quanto o de seus destinatários estejam seguros (livres de malware, criptografados e com uma senha forte)
- Desative serviços em nuvem, como aplicativo web companion ou recursos de backup em nuvem, que aumentam a superfície de ataque
- Remova metadados de mídias antes de compartilhar, pois isso pode revelar involuntariamente mais informações do que você pretendia
- Verifique se o destinatário é realmente quem afirma ser, física ou criptograficamente, usando um aplicativo que ofereça verificação de contato
- Evite SMS, mas se precisar usar, criptografe suas mensagens, por exemplo, usando o aplicativo [Silence](https://silence.im/)
- Opte por uma plataforma de mensagens estável e mantida ativamente, apoiada por desenvolvedores respeitáveis, com modelo de receita transparente ou que possa explicar a origem de seus recursos. Idealmente, deve estar baseada em uma jurisdição amigável e ter passado por uma auditoria de segurança independente
- Em algumas situações, pode ser apropriado usar um aplicativo que suporte mensagens temporárias e/ou permita registro anônimo (sem qualquer PII: número de telefone, endereço de email etc). Uma [plataforma descentralizada](https://github.com/Lissy93/awesome-privacy#p2p-messaging) pode oferecer benefícios adicionais de segurança e privacidade em algumas circunstâncias, pois não há uma única entidade controladora, como [Matrix](https://matrix.org/), [Session](https://getsession.org/), [Tox](https://tox.chat/) ou [Briar](https://briarproject.org/)


### Redes
- Use uma VPN confiável para manter seu IP protegido e reduzir a quantidade de dados de navegação que seu provedor de internet pode registrar, mas compreenda suas [limitações](5_Privacy_Respecting_Software.md#word-of-warning-4). Boas opções incluem [ProtonVPN](https://protonvpn.com) e [Mullvad](https://mullvad.net), consulte [thatoneprivacysite.net](https://thatoneprivacysite.net/) para comparações detalhadas
- Altere a senha padrão do seu roteador. Qualquer pessoa conectada ao seu WiFi pode interceptar o tráfego de rede, então para impedir que desconhecidos se conectem, use WPA2 e defina uma senha forte
- Use um provedor de [DNS seguro](https://github.com/Lissy93/awesome-privacy#dns), como [Cloudflare 1.1.1.1](https://1.1.1.1/dns/), para reduzir o rastreamento. Idealmente, configure isso no roteador, mas se não for possível, pode ser feito em cada dispositivo


**📜 Leia Mais**: [Checklist Completo de Segurança Pessoal](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md)

----


## Software Open-Source Focado em Privacidade
Migre para aplicativos e serviços alternativos de código aberto que respeitem a privacidade, que não coletam seus dados, não te rastreiam e não mostram anúncios direcionados.

#### Segurança
- Gerenciadores de Senhas: [BitWarden] | [1Password] *(proprietário)* | [KeePassXC] *(offline)* | [LessPass] *(sem estado)*
- Autenticação de Dois Fatores: [Aegis] *(Android)* | [Authenticator] *(iOS)* | [AndOTP] *(Android)*
- Criptografia de Arquivos: [VeraCrypt] | [Cryptomator] *(para nuvem)*
- Mensagens Criptografadas: [Signal] | [KeyBase] *(para grupos/comunidades)*
- Email Criptografado: [ProtonMail] | [MailFence] | [Tutanota] | (+ também [33Mail] | [anonaddy] para aliases)
- Navegadores Privados: [Brave Browser] | [Firefox] *com [alguns ajustes](https://restoreprivacy.com/firefox-privacy/)* | [Tor]
- Mecanismos de Busca Sem Rastreamento: [DuckDuckGo] | [StartPage] | [SearX] *(autoalojado)* | [Qwant]
- VPN: [Mullvad] | [ProtonVPN]  | [Windscribe] | [IVPN] *(melhor ainda, use [Tor] para anonimato)*. Veja também [Nota de Advertência sobre VPN]
- Firewall de Aplicativos: [NetGuard] (Android) | [Lockdown] (iOS) | [OpenSnitch] (Linux) | [LuLu] (MacOS)

#### Extensões de Navegador
- [Privacy Badger] - Bloqueia rastreadores.
- [HTTPS Everywhere] - Atualiza solicitações para HTTPS.
- [uBlock Origin] - Bloqueia anúncios, rastreadores e malwares.
- [ScriptSafe] - Bloqueia execução de certos scripts.
- [WebRTC Leak Prevent] - Previne vazamentos de IP.
- [Vanilla Cookie Manager] - Remove automaticamente cookies indesejados.
- [Privacy Essentials] - Mostra quais sites são inseguros

#### Aplicativos Móveis
- [Exodus] - Mostra quais rastreadores estão no seu dispositivo.
- [Orbot] - Proxy Tor em todo o sistema.
- [Island] - Ambiente de sandbox para apps.
- [NetGuard] - Controle de acesso à rede dos aplicativos.
- [Bouncer] - Concede permissões temporárias.
- [Greenify] - Controla quais aplicativos podem rodar em segundo plano.
- [1.1.1.1] - Use DNS sobre HTTPS do CloudFlare.
- [Fing App] - Monitore rede WiFi doméstica em busca de invasores

#### Ferramentas Online
- [εxodus] - Mostra quais rastreadores um aplicativo possui.
- [`;--have i been pwned?`] - Verifique se seus dados foram expostos em alguma violação.
- [EXIF Remover] - Remove metadados de imagem ou arquivo.
- [Redirect Detective] - Mostra para onde um link redireciona.
- [Virus Total] - Escaneia arquivo ou URL em busca de malware.
- [Panopticlick], [Browser Leak Test] e [IP Leak Test] - Verificam vazamentos de sistema e navegador

#### Ferramentas de Produtividade
- Armazenamento de Arquivos: [NextCloud].
- Sincronização de Arquivos: [Syncthing].
- Compartilhamento de Arquivos: [FilePizza].
- Notas: [Standard Notes], [Cryptee], [Joplin].
- Blogging: [Write Freely].
- Sincronização de Calendário/Contatos: [ETE Sync]

📜 **Veja Mais**: [Lista Completa de Software Focado em Privacidade](https://github.com/Lissy93/awesome-privacy)

----

## Hardware de Segurança

Existem alguns dispositivos que podem ajudar a melhorar sua segurança física e digital.

- **Bloqueadores e Escudos**: [PortaPow] - Bloqueador de Dados USB | [Mic Block] - Desativa fisicamente microfone | [Silent-Pocket] - Bolsas faraday bloqueadoras de sinal | [Lindy] - Bloqueadores de portas físicas | [RFID Shields] | [Webcam Covers] | [Privacy Screen]
- **Carteiras Cripto**: [Trezor] - Carteira de hardware | [CryptoSteel] - Carteira cripto de aço indestruível
- **Chaves FIDO U2F**: [Solo Key] | [Nitro Key] | [Librem Key]
- **Bloqueadores de Dados**: [PortaPow] - Bloqueia dados para proteger contra ataques de upload de malware, habilita FastCharge.
- **Armazenamento com Criptografia de Hardware**:  [iStorage] - Armazenamento de hardware criptografado com autenticação PIN de 256 bits | [Encrypted Drive Enclosure]
- **Redes**: [Anonabox] - Roteador Tor plug-and-play | [FingBox] - Monitoramento de segurança de rede doméstica automatizado
- **Gadgets Paranoicos!** [Orwl] - PC autodestrutor | [Hunter-Cat] - Detector de clonagem de cartão | [Adversarial Fashion] - Roupas anti-reconhecimento facial | [DSTIKE Deauth Detector] - Detecta ataques de desautenticação, de [Spacehuhn] | [Reflectacles] - Óculos anti-vigilância | [Armourcard] - Bloqueio de RFID ativo | [Bug-Detector] - Verifica equipamentos de escuta por RF | [Ultrasonic Microphone Jammer] - Emite sinais imperceptíveis para humanos, mas que interferem em equipamentos de gravação.


Não há necessidade de gastar dinheiro - A maioria desses produtos pode ser feita em casa com software de código aberto. Aqui está uma lista de [Gadgets de Segurança DIY](/6_Privacy_and-Security_Gadgets.md#diy-security-products).

📜 **Veja Mais**: [Gadgets de Privacidade e Segurança](/6_Privacy_and-Security_Gadgets.md)

----

*Obrigado por visitar, espero que tenha encontrado algo útil aqui :) Contribuições são bem-vindas e muito apreciadas - para propor uma edição [abra uma issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose) ou [abra um PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master). Veja: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md).*

----

Achou útil? Considere compartilhar para ajudar outras pessoas a melhorar sua segurança digital 😇

[![Compartilhar no Twitter](https://img.shields.io/badge/Compartilhar-Twitter-17a2f3?style=flat-square&logo=Twitter)](http://twitter.com/share?text=Confira%20a%20Lista%20de%20Segurança%20Cibernética%20Pessoal%20-%20uma%20lista%20definitiva%20de%20dicas%20para%20proteger%20sua%20segurança%20digital%20e%20privacidade%20em%202020%2C%20com%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![Compartilhar no LinkedIn](https://img.shields.io/badge/Compartilhar-LinkedIn-0077b5?style=flat-square&logo=LinkedIn)](http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=O%20Checklist%20Definitivo%20de%20Segurança%20Cibernética%20Pessoal&summary=%F0%9F%94%92%20Uma%20lista%20selecionada%20de%20mais%20de%20100%20dicas%20para%20proteger%20a%20segurança%20digital%20e%20privacidade%20em%202020&source=https://github.com/Lissy93/personal-security-checklist)
[![Compartilhar no Facebook](https://img.shields.io/badge/Compartilhar-Facebook-4267b2?style=flat-square&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=O%20Checklist%20Definitivo%20de%20Segurança%20Cibernética%20Pessoal&summary=%F0%9F%94%92%20Uma%20lista%20selecionada%20de%20mais%20de%20100%20dicas%20para%20proteger%20a%20segurança%20digital%20e%20privacidade%20em%202020&source=)
[![Compartilhar no Mastodon](https://img.shields.io/badge/Compartilhar-Mastodon-56a7e1?style=flat-square&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Confira%20o%20Checklist%20Definitivo%20de%20Segurança%20Cibernética%20Pessoal%20por%20%40Lissy93%20no%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)

*Licenciado sob [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © [Alicia Sykes](https://aliciasykes.com) 2020*

<a href="https://twitter.com/intent/follow?screen_name=Lissy_Sykes">
  <img src="https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter" alt="Siga Alicia Sykes no Twitter">
</a>



[//]: # (SECURITY SOFTWARE LINKS)
[BitWarden]: https://bitwarden.com
[1Password]: https://1password.com
[KeePassXC]: https://keepassxc.org
[LessPass]: https://lesspass.com
[Aegis]: https://getaegis.app
[AndOTP]: https://github.com/andOTP/andOTP
[Authenticator]: https://mattrubin.me/authenticator
[VeraCrypt]: https://www.veracrypt.fr
[Cryptomator]: https://cryptomator.org
[Tor]: https://www.torproject.org
[Pi-Hole]: https://pi-hole.net
[Mullvad]: https://mullvad.net
[ProtonVPN]: https://protonvpn.com
[Windscribe]: https://windscribe.com/?affid=6nh59z1r
[IVPN]: https://www.ivpn.net
[NetGuard]: https://www.netguard.me
[Lockdown]: https://lockdownhq.com
[OpenSnitch]: https://github.com/evilsocket/opensnitch
[LuLu]: https://objective-see.com/products/lulu.html
[SimpleWall]: https://github.com/henrypp/simplewall
[33Mail]: http://33mail.com/Dg0gkEA
[anonaddy]: https://anonaddy.com
[Signal]: https://signal.org
[KeyBase]: https://keybase.io
[ProtonMail]: https://protonmail.com
[MailFence]: https://mailfence.com
[Tutanota]: https://tutanota.com
[Brave Browser]: https://brave.com/?ref=ali721
[Firefox]: https://www.mozilla.org/
[DuckDuckGo]: https://duckduckgo.com
[StartPage]: https://www.startpage.com
[Qwant]: https://www.qwant.com
[SearX]: https://asciimoo.github.io/searx

[VPN Warning Note]: https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_Respecting_Software.md#word-of-warning-8

[//]: # (PRODUCTIVITY SOFTWARE LINKS)
[NextCloud]: https://nextcloud.com
[Standard Notes]: https://standardnotes.org/?s=chelvq36
[Cryptee]: https://crypt.ee
[Joplin]: https://joplinapp.org
[ETE Sync]: https://www.etesync.com/accounts/signup/?referrer=QK6g
[FilePizza]: https://file.pizza/
[Syncthing]: https://syncthing.net
[Write Freely]: https://writefreely.org

[//]: # (BROWSER EXTENSION LINKS)
[Privacy Badger]: https://www.eff.org/privacybadger
[HTTPS Everywhere]: https://eff.org/https-everywhere
[uBlock Origin]: https://github.com/gorhill/uBlock
[ScriptSafe]: https://github.com/andryou/scriptsafe
[WebRTC Leak Prevent]: https://github.com/aghorler/WebRTC-Leak-Prevent
[Vanilla Cookie Manager]: https://github.com/laktak/vanilla-chrome
[Privacy Essentials]: https://duckduckgo.com/app

[//]: # (ONLINE SECURITY TOOLS)
[';--have i been pwned?]: https://haveibeenpwned.com
[εxodus]: https://reports.exodus-privacy.eu.org
[Panopticlick]: https://panopticlick.eff.org
[Browser Leak Test]: https://browserleaks.com
[IP Leak Test]: https://ipleak.net
[EXIF Remover]: https://www.exifremove.com
[Redirect Detective]: https://redirectdetective.com
[Virus Total]: https://www.virustotal.com

[//]: # (ANDROID APP LINKS)
[Island]: https://play.google.com/store/apps/details?id=com.oasisfeng.island
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
[Bouncer]: https://play.google.com/store/apps/details?id=com.samruston.permission
[Crypto]: https://play.google.com/store/apps/details?id=com.kokoschka.michael.crypto
[Cryptomator]: https://play.google.com/store/apps/details?id=org.cryptomator
[Daedalus]: https://play.google.com/store/apps/details?id=org.itxtech.daedalus
[Brevent]: https://play.google.com/store/apps/details?id=me.piebridge.brevent
[Greenify]: https://play.google.com/store/apps/details?id=com.oasisfeng.greenify
[Secure Task]: https://play.google.com/store/apps/details?id=com.balda.securetask
[Tor Browser]: https://play.google.com/store/apps/details?id=org.torproject.torbrowser 
[PortDroid]: https://play.google.com/store/apps/details?id=com.stealthcopter.portdroid
[Packet Capture]: https://play.google.com/store/apps/details?id=app.greyshirts.sslcapture
[SysLog]: https://play.google.com/store/apps/details?id=com.tortel.syslog
[Dexplorer]: https://play.google.com/store/apps/details?id=com.dexplorer
[Check and Test]: https://play.google.com/store/apps/details?id=com.inpocketsoftware.andTest
[Tasker]: https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm
[Haven]: https://play.google.com/store/apps/details?id=org.havenapp.main
[NetGaurd]: https://www.netguard.me/
[Exodus]: https://exodus-privacy.eu.org/en/page/what/#android-app
[XUMI Security]: https://xumi.ca/xumi-security/
[Fing App]: https://www.fing.com/products/fing-app
[FlutterHole]: https://github.com/sterrenburg/flutterhole
[1.1.1.1]: https://1.1.1.1/
[The Guardian Project]: https://play.google.com/store/apps/dev?id=6502754515281796553
[The Tor Project]: https://play.google.com/store/apps/developer?id=The+Tor+Project
[Oasis Feng]: https://play.google.com/store/apps/dev?id=7664242523989527886
[Marcel Bokhorst]: https://play.google.com/store/apps/dev?id=8420080860664580239

[//]: # (HARDWARE DE SEGURANÇA LINKS)
[Encrypted Drive Enclosure]: https://www.startech.com/HDD/Enclosures/encrypted-sata-enclosure-2-5in-hdd-ssd-usb-3~S2510BU33PW
[iStorage]: https://istorage-uk.com
[PortaPow]: https://portablepowersupplies.co.uk/product/usb-data-blocker
[Lindy]: https://lindy.com/en/technology/port-blockers
[Mic Block]: https://www.aliexpress.com/item/4000542324471.html
[RFID Shields]: https://www.aliexpress.com/item/32976382478.html
[Webcam Covers]: https://www.aliexpress.com/item/4000393683866.html
[Privacy Screen]: https://www.aliexpress.com/item/32906889317.html
[Trezor]: https://trezor.io
[CryptoSteel]: https://cryptosteel.com/product/cryptosteel/?v=79cba1185463
[Solo Key]: https://solokeys.com
[Nitro Key]: https://www.nitrokey.com
[Librem Key]: https://puri.sm/products/librem-key
[Anonabox]: https://www.anonabox.com
[FingBox]: https://www.fing.com/products/fingbox
[Orwl]: https://orwl.org
[Hunter-Cat]: https://lab401.com/products/hunter-cat-card-skimmer-detector
[DSTIKE Deauth Detector]: https://www.tindie.com/products/lspoplove/dstike-deauth-detector-pre-flashed-with-detector
[Bug-Detector]: https://www.brickhousesecurity.com/counter-surveillance/multi-bug
[Ultrasonic Microphone Jammer]: https://uspystore.com/silent-ultrasonic-microphone-defeater
[Silent-Pocket]: https://silent-pocket.com
[Armourcard]: https://armourcard.com
[Adversarial Fashion]: https://adversarialfashion.com
[Reflectacles]: https://www.reflectacles.com
[Spacehuhn]: https://github.com/spacehuhn/DeauthDetector

