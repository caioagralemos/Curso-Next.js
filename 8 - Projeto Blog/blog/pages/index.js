import { Fragment } from "react"
import Hero from "@/components/home/hero"
import FeaturedPosts from "@/components/home/featured-posts"

const DUMMY_POSTS = [
    {
        slug: "como-aprender-programacao",
        title: "Como Aprender Programação",
        image: "caminho-para-imagem.jpg",
        summary: "Descubra dicas e recursos para iniciar sua jornada de aprendizado em programação, independentemente do seu nível de experiência.",
        date: "2023-08-01",
    },
    {
        slug: "receitas-saudaveis-cafe-da-manha",
        title: "Receitas Saudáveis para um Café da Manhã Energizante",
        image: "caminho-para-imagem.jpg",
        summary: "Comece o dia com o pé direito experimentando estas deliciosas e saudáveis receitas para um café da manhã nutritivo.",
        date: "2023-08-05",
    },
    {
        slug: "destinos-turisticos-menos-conhecidos",
        title: "Descubra Destinos Turísticos Menos Conhecidos",
        image: "caminho-para-imagem.jpg",
        summary: "Explore lugares incríveis ao redor do mundo que ainda não foram invadidos pelo turismo em massa. Prepare-se para se surpreender!",
        date: "2023-08-10",
    },
    {
        slug: "melhores-filmes-ficcao-cientifica",
        title: "Os Melhores Filmes de Ficção Científica de Todos os Tempos",
        image: "caminho-para-imagem.jpg",
        summary: "Entre em universos extraordinários e explore o desconhecido com esta lista dos melhores filmes de ficção científica já produzidos.",
        date: "2023-08-15",
    },
    {
        slug: "dicas-produtividade-home-office",
        title: "Dicas para Aumentar a Produtividade no Home Office",
        image: "caminho-para-imagem.jpg",
        summary: "Trabalhar em casa pode ser desafiador, mas com essas dicas práticas, você poderá maximizar sua produtividade enquanto trabalha remotamente.",
        date: "2023-08-18",
    },
    {
        slug: "cuidados-pele-rotina-noturna",
        title: "Cuidados Essenciais para a Pele na Rotina Noturna",
        image: "caminho-para-imagem.jpg",
        summary: "Uma rotina de cuidados com a pele à noite é crucial para uma aparência saudável. Saiba quais produtos usar e como obter os melhores resultados.",
        date: "2023-08-20",
    },
    {
        slug: "dicas-fotografia-iniciantes",
        title: "Dicas de Fotografia para Iniciantes",
        image: "caminho-para-imagem.jpg",
        summary: "Capture momentos especiais e aprimore suas habilidades fotográficas com essas dicas úteis para fotógrafos amadores.",
        date: "2023-08-22",
    },
    {
        slug: "como-cuidar-plantas-vaso",
        title: "Como Cuidar Adequadamente de Plantas em Vasos",
        image: "caminho-para-imagem.jpg",
        summary: "Transforme-se em um jardineiro experiente aprendendo as melhores práticas para cuidar de plantas cultivadas em vasos dentro de casa.",
        date: "2023-08-25",
    },
    {
        slug: "dicas-viagem-economica",
        title: "Dicas para uma Viagem Econômica e Memorável",
        image: "caminho-para-imagem.jpg",
        summary: "Descubra estratégias inteligentes para viajar com orçamento limitado, aproveitando ao máximo cada destino e experiência.",
        date: "2023-08-28",
    },
];


export default function Homepage() {
    return <Fragment>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
}