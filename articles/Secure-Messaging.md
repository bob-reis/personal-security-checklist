# Escolhendo uma Plataforma de Mensagens Seguras

📝 **Traduzido do original** de [Alicia Sykes](https://github.com/Lissy93/personal-security-checklist/) pela **PP_Tech**.

Este artigo explica as considerações importantes que você deve ter em mente ao selecionar uma plataforma de mensagens segura.

**TLDR;** Optar por um aplicativo de mensagens seguro pode prevenir que terceiros acessem suas conversas privadas. Escolha uma plataforma com criptografia ponta a ponta (E2E), código aberto e manutenção ativa. Recursos avançados de segurança podem fortalecer ainda mais as defesas, como mensagens autodestrutivas, verificação de contatos, sigilo persistente, capacidade de se cadastrar com aliases (em vez de número de telefone ou e-mail) e uma rede P2P descentralizada que envia conteúdo através do Tor.

## Considerações

### Criptografia Ponta a Ponta
A criptografia ponta a ponta significa que as mensagens são criptografadas localmente no seu dispositivo, antes de serem enviadas ao(s) destinatário(s). Nem o provedor de serviços, nem qualquer ator que intercepte as mensagens pode descriptografar o conteúdo. Isso é importante porque seus dados ficam seguros contra vazamentos, mandados judiciais, funcionários desonestos ou atores maliciosos. Evite aplicativos que ofereçam criptografia ponta a ponta como um recurso opcional, pois isso pode aumentar a chance de enviar uma mensagem acidentalmente em texto plano. Esteja ciente de que alguns provedores oferecem criptografia fraca ou com backdoors - (frequentemente chamada de [Criptografia Snake Oil](https://en.wikipedia.org/wiki/Snake_oil_(cryptography))), e se a plataforma não for de código aberto, não há como verificar se esse é o caso.

### Código Aberto
Os designs mais seguros são aqueles em que você não precisa confiar cegamente. Sem um aplicativo de código aberto, não podemos verificar se ele é realmente seguro. Pode conter backdoors, criptografia fraca ou vulnerabilidades de segurança. Esta é uma razão pela qual aplicativos com código-fonte completamente aberto e público podem ser mais confiáveis. Mas não se deixe enganar pela publicidade enganosa; só porque um aplicativo usa criptografia de código aberto, não significa que seja totalmente de código aberto e, portanto, verificável. O código-fonte publicado deve estar completo, e o sistema de design de segurança deve ser documentado detalhadamente.

### Auditoria de Código
Além da criptografia, os desenvolvedores precisam cuidar da qualidade do código, experiência do usuário e disponibilidade do serviço. A matemática por trás da criptografia pode ser impecável, mas um pequeno erro na implementação pode resultar em sérias consequências para a segurança. Portanto, a base de código deve ser regularmente auditada por especialistas de segurança independentes, e o relatório deve ser publicado publicamente.

### Manutenção Ativa
Lançar atualizações de segurança bem testadas de forma tempestiva é de importância primordial para a segurança. Novos bugs, vulnerabilidades e problemas estão sendo descobertos o tempo todo, e sem serem corrigidos podem ser explorados por um adversário. Para que um mensageiro seja seguro, é necessário que haja uma versão pública estável (não beta) disponível, e mecanismos seguros de atualização automática para mitigar rapidamente problemas de segurança. Deve estar claro para o usuário qual versão está sendo executada e se uma versão mais nova está disponível

### Builds Reproduzíveis
A maioria dos aplicativos é distribuída em forma pré-compilada, tornando muito difícil verificar se a versão baixada é autêntica e igual à do repositório de código aberto. A [Transparência Binária](https://wiki.mozilla.org/Security/Binary_Transparency) permite que terceiros verifiquem se os binários são construídos diretamente do código-fonte público. [Builds Reproduzíveis](https://reproducible-builds.org) é a prática de verificar se os builds são autênticos e não contêm backdoors. Isso é feito com um ambiente de build pré-definido e um processo de build totalmente determinístico - transformar um determinado conjunto de código-fonte deve sempre gerar o mesmo resultado. O usuário pode, se desejar, construir o aplicativo por conta própria e validar se a saída corresponde ao build original.

### Recursos Adicionais
Algumas plataformas de mensagens têm recursos adicionais que podem ser atraentes para os usuários, mas é crítico que esses recursos não comprometam os objetivos de segurança. Por exemplo, backups em nuvem devem estar desativados por padrão, e se os dados exportados forem descriptografados, o usuário deve ser informado disso. Evite plataformas que priorizam o desenvolvimento de recursos em detrimento da segurança.

### Metadados
Enviar e receber mensagens gera metadados, e isso pode revelar muitas informações: Com quem você conversa, com que frequência/por quanto tempo, quando, onde, como etc. Nem todas as plataformas de mensagens criptografam isso automaticamente, portanto, é importante verificar: O que é coletado, por quanto tempo é armazenado, com quem é compartilhado e para que fins. Em geral, as melhores políticas de metadados são as mais curtas: Não coletamos nenhum metadado de usuário.

### Estabilidade
O aplicativo deve ser utilizável, escalável e confiável. Um dos maiores perigos é que, se a plataforma não entregar mensagens de forma confiável, os usuários podem ser forçados a recorrer a canais menos seguros. Alguns serviços de mensagens menores podem não ter os recursos necessários para construir uma plataforma de mensagens robusta e confiável, mas isso é essencial para a segurança.

### Financiamento
Construir aplicativos e manter servidores é caro. Pergunte a si mesmo: quem está pagando por tudo isso? Porque geralmente, se um serviço é gratuito - você é o produto. Isso nem sempre é verdade, pois alguns aplicativos de código aberto são financiados por organizações sem fins lucrativos que recebem doações e patrocínios. Mas se você não consegue descobrir facilmente quem está por trás do aplicativo, isso deve ser um sinal de alerta.

### Desenvolvedores Reputados
Os desenvolvedores devem ter um histórico sólido de responder a problemas técnicos e ameaças legais com a plataforma, bem como uma atitude realista e transparente em relação ao governo e às forças de segurança


### Jurisdição
A localização onde a empresa está legalmente registrada, de onde opera e onde hospeda os dados do usuário desempenha um papel importante na segurança. Em alguns países ou estados, as organizações são forçadas a cumprir regulamentos governamentais locais, que muitas vezes podem exigir que a organização registre todos os dados dos usuários ou entregue quaisquer chaves de criptografia. Geralmente, é melhor evitar empresas dentro da [Aliança Cinco Olhos](https://en.wikipedia.org/wiki/Five_Eyes).

### Anonimato
Se o aplicativo solicitar número de telefone, endereço de e-mail ou nome, então você não é anônimo. Para usuários vulneráveis, a capacidade de se cadastrar anonimamente é crítica, pois um identificador importante como um número de telefone é informação privada e pode ser arriscado se a pessoa estiver sendo visada por alguém que conheça sua identidade (como um governo, perseguidor ou adversário criminoso). Isso pode não ser necessário para todos, mas se você acredita que pode ser alvo, opte por um aplicativo de mensagens anônimo, baixe-o via Tor, fora da Google Play / Apple App Store, crie uma identidade anônima e execute o aplicativo apenas quando conectado através do Tor.

### Verificação de Contato
Suas comunicações só podem ser tão seguras quanto o elo mais fraco, e se você não puder verificar a identidade de seus contatos, não pode ter certeza de que a conta não foi comprometida, ou sequer de que está se comunicando com a entidade pretendida. Da mesma forma, se seu destinatário foi comprometido, suas mensagens não são seguras. A verificação de impressão digital de contato é um recurso poderoso que permite aos usuários confiar no destino e impede hackers de sequestrar a conversa. Geralmente, isso toma a forma de comparação de códigos de impressão digital, até mesmo por chamada telefônica ou pessoalmente através de um código QR. Um mensageiro seguro deve fornecer indicadores confiáveis de comprometimento reconhecíveis para um usuário final, de modo que, se alguém fizer login a partir de um novo dispositivo, ambas as partes sejam notificadas.

### Mensagens Efêmeras
Você nem sempre pode confiar na segurança física do seu dispositivo. Mensagens autodestrutivas são um recurso interessante que faz suas mensagens serem excluídas automaticamente após um período definido. Isso significa que, se seu dispositivo for perdido ou roubado, um adversário terá acesso apenas às comunicações mais recentes. Diferentemente da exclusão remota, as mensagens que desaparecem não requerem que seu dispositivo seja acessível remotamente ou tenha sinal. Você pode variar esse intervalo de tempo de semanas até poucos segundos, dependendo do seu modelo de ameaça.

### Sigilo Persistente
Opte por uma plataforma que implemente [sigilo persistente](https://en.wikipedia.org/wiki/Forward_secrecy). Isso significa que seu aplicativo gera uma nova chave de criptografia para cada mensagem, de forma que, mesmo se seu adversário obtiver seu dispositivo e extrair a chave de criptografia privada, não poderá usá-la para descriptografar mensagens capturadas anteriormente. Isso significa que, mesmo se uma chave de uma das partes for comprometida, não será possível descriptografar o restante da sessão com essa chave.

### Descentralização
Sem liberdade, seu aplicativo terá um único ponto de falha. Se todos os dados passarem por um provedor central, você terá que confiar nele com seus metadados. E se esse provedor deixar de operar, toda a rede ficará indisponível durante esse período. Já com um sistema descentralizado, você tem a liberdade de delegar confiança a outra pessoa, em outra jurisdição. Com um aplicativo totalmente peer-to-peer, não há servidores centrais para comprometer e nenhum ponto único de falha.

## Configurações Adicionais
Escolha um aplicativo que permita desativar recursos opcionais não relacionados à segurança, como confirmação de leitura, último online e notificação de digitação. Se o aplicativo suporta sincronização em nuvem para backup ou acesso por um aplicativo web complementar, isso aumenta a superfície de ataque e, portanto, deve ser desativado.

## Considerações Finais
O ponto mais fraco em qualquer sistema é o usuário. Se você ou seu destinatário for comprometido, mesmo os recursos de segurança mais avançados se tornarão obsoletos. Siga boas práticas de segurança e certifique-se de que o contato com quem você está se comunicando também o faça. É importante lembrar que novas vulnerabilidades estão sendo descobertas e exploradas o tempo todo, e o aplicativo de mensagens mais seguro de hoje pode se tornar comprometido no futuro

