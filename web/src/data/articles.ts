
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  {
    title: 'Por que segurança importa?',
    description: 'Por que sua segurança e privacidade digital devem ser levadas a sério.',
    slug: 'importance-of-digital-security',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
  },
  {
    title: 'Lista de Segurança: Versão Curta',
    description: 'As listas principais são longas? Aqui está o TL;DR',
    slug: 'short-list',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
  },
  {
    title: 'Links Úteis',
    description: 'Diretório de links para ferramentas, recursos e informações adicionais.',
    slug: 'helpful-links',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
    warningMessage: 'Este artigo foi escrito em 2020 e precisa de atualização.',
  },
  {
    title: 'Dispositivos de Segurança',
    description: 'Dispositivos de hardware úteis que ajudam a proteger sua privacidade e segurança.',
    slug: 'privacy-gadgets',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
    warningMessage: 'Este artigo está desatualizado e pode conter informações incorretas. '
      +'Recomenda-se verificar as informações antes de usar qualquer produto listado.',
  },
  {
    title: 'Software que Respeita a Privacidade',
    description: 'A lista definitiva de alternativas de software que respeitam a privacidade para apps e serviços populares.',
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
    warningMessage: 'Este recurso mudou! Agora você pode acessá-lo em github.com/Lissy93/awesome-privacy',
  },
];

export default articles;
