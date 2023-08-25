const DUMMY_POSTS = [
    {
        slug: "como-aprender-programacao",
        title: "Como Aprender Programação",
        image: "caminho-para-imagem.jpg",
        summary: "Descubra dicas e recursos para iniciar sua jornada de aprendizado em programação, independentemente do seu nível de experiência.",
        date: "2023-08-01",
        featured: true,
    },
    {
        slug: "receitas-saudaveis-cafe-da-manha",
        title: "Receitas Saudáveis para um Café da Manhã Energizante",
        image: "caminho-para-imagem.jpg",
        summary: "Comece o dia com o pé direito experimentando estas deliciosas e saudáveis receitas para um café da manhã nutritivo.",
        date: "2023-08-05",
        featured: true,
    },
    {
        slug: "destinos-turisticos-menos-conhecidos",
        title: "Descubra Destinos Turísticos Menos Conhecidos",
        image: "caminho-para-imagem.jpg",
        summary: "Explore lugares incríveis ao redor do mundo que ainda não foram invadidos pelo turismo em massa. Prepare-se para se surpreender!",
        date: "2023-08-10",
        featured: true,
    },
    {
        slug: "melhores-filmes-ficcao-cientifica",
        title: "Os Melhores Filmes de Ficção Científica de Todos os Tempos",
        image: "caminho-para-imagem.jpg",
        summary: "Entre em universos extraordinários e explore o desconhecido com esta lista dos melhores filmes de ficção científica já produzidos.",
        date: "2023-08-15",
        featured: false,
    },
    {
        slug: "dicas-produtividade-home-office",
        title: "Dicas para Aumentar a Produtividade no Home Office",
        image: "caminho-para-imagem.jpg",
        summary: "Trabalhar em casa pode ser desafiador, mas com essas dicas práticas, você poderá maximizar sua produtividade enquanto trabalha remotamente.",
        date: "2023-08-18",
        featured: false,
    },
    {
        slug: "dicas-fotografia-iniciantes",
        title: "Dicas de Fotografia para Iniciantes",
        image: "caminho-para-imagem.jpg",
        summary: "Capture momentos especiais e aprimore suas habilidades fotográficas com essas dicas úteis para fotógrafos amadores.",
        date: "2023-08-22",
        featured: false,
    },
    {
        slug: "como-cuidar-plantas-vaso",
        title: "Como Cuidar Adequadamente de Plantas em Vasos",
        image: "caminho-para-imagem.jpg",
        summary: "Transforme-se em um jardineiro experiente aprendendo as melhores práticas para cuidar de plantas cultivadas em vasos dentro de casa.",
        date: "2023-08-25",
        featured: false,
    },
    {
        slug: "dicas-viagem-economica",
        title: "Dicas para uma Viagem Econômica e Memorável",
        image: "caminho-para-imagem.jpg",
        summary: "Descubra estratégias inteligentes para viajar com orçamento limitado, aproveitando ao máximo cada destino e experiência.",
        date: "2023-08-28",
        featured: false,
    },
];

const DUMMY_POST = {
    slug: "dicas-viagem-economica",
    title: "Dicas para uma Viagem Econômica e Memorável",
    image: "caminho-para-imagem.jpg",
    summary: "Descubra estratégias inteligentes para viajar com orçamento limitado, aproveitando ao máximo cada destino e experiência.",
    date: "2023-08-28",
    content: "Viajar com um orçamento limitado requer planejamento, criatividade e flexibilidade. Aqui estão algumas estratégias inteligentes para aproveitar ao máximo cada destino e experiência enquanto mantém os custos baixos.\n\nPlanejamento Antecipado:\n- Pesquise e reserve voos e acomodações com antecedência para aproveitar descontos e ofertas especiais.\n- Use ferramentas de comparação de preços para encontrar as melhores tarifas em passagens aéreas e hospedagem.\n\nAlojamento Econômico:\n- Considere hospedagens alternativas, como albergues, pousadas, Airbnb ou hospedagem compartilhada, que muitas vezes são mais acessíveis do que hotéis.\n- Fique em áreas um pouco afastadas do centro turístico, pois os preços tendem a ser mais baixos.\n\nAlimentação Consciente:\n- Coma em mercados locais, barracas de rua e pequenos restaurantes frequentados pelos moradores, pois eles geralmente oferecem refeições mais autênticas e acessíveis do que os lugares turísticos.\n- Prepare suas próprias refeições ocasionalmente, especialmente em acomodações com cozinha compartilhada.\n\nTransporte Inteligente:\n- Use o transporte público, como ônibus, metrôs e trens, em vez de táxis, pois isso é geralmente mais econômico.\n- Considere caminhar ou alugar bicicletas para explorar as áreas locais de forma econômica e saudável.\n\nAtrações Gratuitas e Econômicas:\n- Pesquise atrações gratuitas ou com descontos, como museus com entrada gratuita em determinados dias da semana.\n- Explore parques, praias e áreas naturais que não têm custos associados.\n\nCity Passes e Descontos:\n- Muitas cidades oferecem passes turísticos que incluem entrada em várias atrações, além de transporte público ilimitado, o que pode ser mais econômico do que comprar entradas separadamente.\n\nCultura Local:\n- Participe de eventos culturais gratuitos ou de baixo custo, como festivais, exposições de arte locais, apresentações de música e dança tradicionais.\n\nNegociação e Regateio:\n- Em mercados de rua e lojas locais, é comum negociar preços. Saiba como fazer isso respeitosamente e aproveite para conseguir um bom negócio.\n\nTroca de Hospedagem por Trabalho:\n- Plataformas como Workaway e HelpX permitem que você troque algumas horas de trabalho por acomodação e, às vezes, refeições. Isso pode proporcionar uma experiência imersiva e econômica.\n\nEvite Compras Impulsivas:\n- Compre lembranças e souvenirs com sabedoria. Evite comprar itens caros e sem utilidade real.\n\nWi-Fi Gratuito:\n- Utilize Wi-Fi gratuito em cafés, bibliotecas e espaços públicos para evitar custos excessivos de dados móveis.\n\nGrupos de Viagem e Parcerias:\n- Viajar em grupo pode reduzir os custos de acomodação e transporte. Além disso, compartilhar despesas com amigos ou outros viajantes pode ser vantajoso.\n\nLembre-se de que o objetivo principal de viajar com orçamento limitado é se envolver com a cultura local, explorar autenticamente e criar memórias duradouras. Seja flexível e aberto a novas experiências, e você descobrirá que é possível aproveitar ao máximo cada destino sem gastar uma fortuna.",
    featured: false,
  };
  

export { DUMMY_POSTS, DUMMY_POST }