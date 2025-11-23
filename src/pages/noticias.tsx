import { useNavigate } from "react-router-dom";
import { Calendar, Tag, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data para notícias
const mockNews = [
    {
        id: 1,
        title: "Uberhub lança nova plataforma de integração",
        description: "A nova plataforma promete revolucionar a forma como startups se conectam com o ecossistema de inovação.",
        category: "Produto",
        date: "2025-11-20",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
        featured: true,
    },
    {
        id: 2,
        title: "Startup incubada conquista investimento de R$ 5 milhões",
        description: "TechNova, incubada no Uberhub, fecha rodada seed com investidores nacionais e internacionais.",
        category: "Investimento",
        date: "2025-11-18",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        featured: false,
    },
    {
        id: 3,
        title: "Evento de networking reúne mais de 200 empreendedores",
        description: "Uberhub Connect foi um sucesso absoluto, promovendo conexões valiosas no ecossistema.",
        category: "Eventos",
        date: "2025-11-15",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        featured: false,
    },
    {
        id: 4,
        title: "Programa de mentoria abre inscrições para 2026",
        description: "Mentores experientes do mercado compartilharão conhecimento com startups em fase inicial.",
        category: "Programa",
        date: "2025-11-12",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
        featured: false,
    },
    {
        id: 5,
        title: "IA generativa: como startups estão inovando",
        description: "Confira cases de sucesso de empresas do hub que estão usando inteligência artificial.",
        category: "Tecnologia",
        date: "2025-11-10",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        featured: false,
    },
    {
        id: 6,
        title: "Workshop gratuito sobre pitch para investidores",
        description: "Aprenda técnicas essenciais para apresentar sua startup de forma convincente.",
        category: "Eventos",
        date: "2025-11-08",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
        featured: false,
    },
];

const categories = ["Todos", "Produto", "Investimento", "Eventos", "Programa", "Tecnologia"];

export const Noticias = () => {
    const navigate = useNavigate();
    const featuredNews = mockNews.find(news => news.featured);
    const regularNews = mockNews.filter(news => !news.featured);

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Notícias</h1>
                <p className="text-muted-foreground">
                    Últimas notícias do ecossistema de inovação
                </p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                    <Badge
                        key={category}
                        variant={category === "Todos" ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                        {category}
                    </Badge>
                ))}
            </div>

            {/* Featured News */}
            {featuredNews && (
                <Card
                    className="mb-8 overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                    onClick={() => navigate(`/noticias/${featuredNews.id}`)}
                >
                    <div className="grid md:grid-cols-2 gap-0">
                        <div
                            className="h-64 md:h-auto bg-cover bg-center"
                            style={{ backgroundImage: `url(${featuredNews.image})` }}
                        />
                        <CardHeader className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="default">{featuredNews.category}</Badge>
                                <Badge variant="secondary" className="gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {new Date(featuredNews.date).toLocaleDateString("pt-BR")}
                                </Badge>
                            </div>
                            <CardTitle className="text-2xl mb-3">{featuredNews.title}</CardTitle>
                            <CardDescription className="text-base">
                                {featuredNews.description}
                            </CardDescription>
                        </CardHeader>
                    </div>
                </Card>
            )}

            {/* News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularNews.map((news) => (
                    <Card
                        key={news.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                        onClick={() => navigate(`/noticias/${news.id}`)}
                    >
                        <div
                            className="h-48 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                            style={{ backgroundImage: `url(${news.image})` }}
                        />
                        <CardHeader>
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="gap-1">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </Badge>
                            </div>
                            <CardTitle className="text-lg line-clamp-2">{news.title}</CardTitle>
                            <CardDescription className="line-clamp-3">
                                {news.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {new Date(news.date).toLocaleDateString("pt-BR")}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
