import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

// Import markdown files as raw text
import news1 from "@/data/news/1.md?raw";
import news2 from "@/data/news/2.md?raw";
import news3 from "@/data/news/3.md?raw";
import news4 from "@/data/news/4.md?raw";
import news5 from "@/data/news/5.md?raw";
import news6 from "@/data/news/6.md?raw";

// Mapping of news IDs to markdown content
const newsContent: Record<string, string> = {
    "1": news1,
    "2": news2,
    "3": news3,
    "4": news4,
    "5": news5,
    "6": news6,
};

// Mock data para correspondência com as notícias
const newsMetadata: Record<string, { title: string; category: string; date: string; image: string }> = {
    "1": {
        title: "Uberhub lança nova plataforma de integração",
        category: "Produto",
        date: "2025-11-20",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    },
    "2": {
        title: "Startup incubada conquista investimento de R$ 5 milhões",
        category: "Investimento",
        date: "2025-11-18",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    },
    "3": {
        title: "Evento de networking reúne mais de 200 empreendedores",
        category: "Eventos",
        date: "2025-11-15",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    },
    "4": {
        title: "Programa de mentoria abre inscrições para 2026",
        category: "Programa",
        date: "2025-11-12",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    },
    "5": {
        title: "IA generativa: como startups estão inovando",
        category: "Tecnologia",
        date: "2025-11-10",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    },
    "6": {
        title: "Workshop gratuito sobre pitch para investidores",
        category: "Eventos",
        date: "2025-11-08",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&q=80",
    },
};

export const NoticiaDetalhes = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(true);

    const metadata = id ? newsMetadata[id] : null;

    useEffect(() => {
        if (!id) return;

        setLoading(true);

        // Get content from static imports
        const newsText = newsContent[id];

        if (newsText) {
            setContent(newsText);
        } else {
            setContent("# Erro\n\nNotícia não encontrada.");
        }

        setLoading(false);
    }, [id]);

    if (!metadata) {
        return (
            <div className="p-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Notícia não encontrada</h1>
                    <Button onClick={() => navigate("/noticias")}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Voltar para notícias
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Header Image */}
            <div
                className="w-full h-96 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${metadata.image})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-8 -mt-20 relative z-10">
                {/* Back Button */}
                <Button
                    variant="secondary"
                    onClick={() => navigate("/noticias")}
                    className="mb-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                </Button>

                {/* Article Card */}
                <article className="bg-background/95 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12">
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge variant="default" className="gap-1">
                            <Tag className="w-3 h-3" />
                            {metadata.category}
                        </Badge>
                        <Badge variant="secondary" className="gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(metadata.date).toLocaleDateString("pt-BR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </Badge>
                    </div>

                    {/* Markdown Content */}
                    {loading ? (
                        <div className="space-y-4">
                            <Skeleton className="h-12 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                            <Skeleton className="h-64 w-full mt-8" />
                        </div>
                    ) : (
                        <div className="prose prose-lg dark:prose-invert max-w-none
                            prose-headings:font-bold
                            prose-h1:text-4xl prose-h1:mb-6 prose-h1:uppercase
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-muted-foreground prose-p:leading-relaxed
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-foreground prose-strong:font-semibold
                            prose-ul:my-4 prose-ol:my-4
                            prose-li:text-muted-foreground
                            prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 
                            prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r
                            prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 
                            prose-code:rounded prose-code:text-sm
                            prose-pre:bg-muted prose-pre:border
                            prose-img:rounded-lg prose-img:shadow-lg
                            prose-table:border prose-th:bg-muted
                            prose-hr:my-8
                        ">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {content}
                            </ReactMarkdown>
                        </div>
                    )}
                </article>

                {/* Related News or CTA could go here */}
                <div className="mt-12 text-center pb-16">
                    <Button size="lg" onClick={() => navigate("/noticias")}>
                        Ver todas as notícias
                    </Button>
                </div>
            </div>
        </div>
    );
};
