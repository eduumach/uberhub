import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Rocket,
    Users,
    Calendar,

    ArrowRight,
    Zap,
    Building2,
    Briefcase,
    Newspaper,
    PieChart
} from "lucide-react";
import { motion } from "framer-motion";
import { EcosystemChart } from "@/components/dashboard/ecosystem-chart";
import { SectorChart } from "@/components/dashboard/sector-chart";
import { Link } from "react-router-dom";

export const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-background p-8 space-y-8">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Bem-vindo ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">rerivalley</span>
                    </h1>
                    <p className="text-muted-foreground mt-2 text-lg max-w-2xl">
                        O ponto de encontro do ecossistema de inovação. Conecte-se, cresça e transforme.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" asChild>
                        <Link to="/mapa-inovacao">Saiba mais</Link>
                    </Button>
                    <Button className="gap-2" asChild>
                        <Link to="/startups">
                            Começar agora <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </motion.div>

            <Separator className="my-6" />

            {/* Stats Section */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                {[
                    { label: "Startups", value: "277", icon: Rocket, color: "text-blue-500", trend: "+12% este mês", link: "/startups" },
                    { label: "Membros", value: "20k+", icon: Users, color: "text-green-500", trend: "Crescendo", link: "/comunidade" },
                    { label: "Eventos", value: "15", icon: Calendar, color: "text-orange-500", trend: "Próximos 7 dias", link: "/eventos" },
                    { label: "Vagas", value: "100+", icon: Briefcase, color: "text-purple-500", trend: "Disponíveis", link: "/vagas" },
                ].map((stat, index) => (
                    <motion.div key={index} variants={item}>
                        <Link to={stat.link}>
                            <Card className="hover:shadow-md transition-shadow cursor-pointer">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {stat.label}
                                    </CardTitle>
                                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stat.value}</div>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {stat.trend}
                                    </p>
                                </CardContent>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-2 space-y-6"
                >
                    {/* Charts Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={item} className="md:col-span-2">
                            <Card className="bg-gradient-to-br from-primary/5 via-primary/0 to-background border-primary/20">
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <Badge variant="secondary" className="w-fit">Destaque</Badge>
                                    </div>
                                    <CardTitle className="text-2xl">Crescimento do Ecossistema</CardTitle>
                                    <CardDescription>
                                        Evolução do número de startups e membros nos últimos meses.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px] w-full">
                                        <EcosystemChart />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={item}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <PieChart className="w-5 h-5 text-muted-foreground" />
                                        Startups por Setor
                                    </CardTitle>
                                    <CardDescription>
                                        Distribuição das startups por área de atuação.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[300px] w-full">
                                        <SectorChart />
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={item}>
                            <Card className="h-full flex flex-col justify-center items-center p-6 text-center space-y-4 bg-muted/20">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Rocket className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Cadastre sua Startup</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Faça parte do maior ecossistema de inovação da região.
                                    </p>
                                </div>
                                <Button asChild>
                                    <Link to="/contato">Cadastrar Agora</Link>
                                </Button>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Quick Access Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Ecossistema",
                                desc: "Startups, empresas e hubs",
                                icon: Building2,
                                color: "bg-blue-500/10 text-blue-500",
                                link: "/mapa-inovacao"
                            },
                            {
                                title: "Oportunidades",
                                desc: "Vagas e editais abertos",
                                icon: Zap,
                                color: "bg-amber-500/10 text-amber-500",
                                link: "/oportunidades"
                            },
                            {
                                title: "Comunidade",
                                desc: "Conecte-se com inovadores",
                                icon: Users,
                                color: "bg-green-500/10 text-green-500",
                                link: "/beneficios" // Assuming this is the closest match or maybe create a community page later
                            },
                            {
                                title: "Notícias",
                                desc: "Fique por dentro de tudo",
                                icon: Newspaper,
                                color: "bg-rose-500/10 text-rose-500",
                                link: "/noticias"
                            }
                        ].map((card, i) => (
                            <motion.div key={i} variants={item}>
                                <Link to={card.link}>
                                    <Card className="h-full hover:border-primary/50 transition-colors cursor-pointer group">
                                        <CardHeader>
                                            <div className={`w-10 h-10 rounded-lg ${card.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                                                <card.icon className="w-5 h-5" />
                                            </div>
                                            <CardTitle>{card.title}</CardTitle>
                                            <CardDescription>{card.desc}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Sidebar / Recent Activity */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> Próximos Eventos
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {[
                                { title: "Meetup Startup Weekend", date: "Hoje, 19:00", type: "Presencial" },
                                { title: "Workshop de IA", date: "Amanhã, 14:00", type: "Online" },
                                { title: "Café com Investidores", date: "25 Nov, 09:00", type: "Presencial" }
                            ].map((event, i) => (
                                <div key={i} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                                    <div className="bg-muted rounded-md p-2 text-center min-w-[3rem]">
                                        <span className="block text-xs font-bold uppercase text-muted-foreground">
                                            {event.date.split(' ')[0]}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm leading-none mb-1">{event.title}</p>
                                        <p className="text-xs text-muted-foreground">{event.date} • {event.type}</p>
                                    </div>
                                </div>
                            ))}
                            <Button variant="ghost" className="w-full text-xs" size="sm" asChild>
                                <Link to="/eventos">
                                    Ver calendário completo <ArrowRight className="w-3 h-3 ml-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Zap className="w-4 h-4" /> Novidades
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="text-sm">
                                    <Badge variant="outline" className="mb-2">Novo</Badge>
                                    <p className="font-medium">Lançamento do rerivalley 2.0</p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Confira as novas funcionalidades da plataforma.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};
