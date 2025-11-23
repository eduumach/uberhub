import {
    LayoutGrid,
    Rocket,
    Building2,
    Map,
    Briefcase,
    Calendar,
    Newspaper,
    Gift,
    Coins,
    TicketPercent,
    Mail,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";

// Tipos para a configuração
type MenuItem = {
    title: string;
    url: string;
    icon: LucideIcon;
    subtitle?: string;
};

type MenuSection = {
    label?: string;
    items: MenuItem[];
    isPrimary?: boolean;
};

// Configuração da navegação
const navigationConfig: MenuSection[] = [
    {
        isPrimary: true,
        items: [
            {
                title: "Home",
                url: "/",
                icon: LayoutGrid,
            },
        ],
    },
    {
        label: "Ecossistema",
        items: [
            {
                title: "Startups",
                url: "/startups",
                icon: Rocket,
            },
            {
                title: "Empresas Tech",
                url: "/empresas-tech",
                icon: Building2,
                subtitle: "(Grandes, Medias e Pequenas)",
            },
            {
                title: "Mapa da Inovação",
                url: "/mapa-inovacao",
                icon: Map,
                subtitle: "(Espaços de inovação, hubs e outros)",
            },
        ],
    },
    {
        label: "Informações",
        items: [
            {
                title: "Vagas",
                url: "/vagas",
                icon: Briefcase,
            },
            {
                title: "Eventos",
                url: "/eventos",
                icon: Calendar,
            },
            {
                title: "Notícias",
                url: "/noticias",
                icon: Newspaper,
            },
            {
                title: "Oportunidades",
                url: "/oportunidades",
                icon: Gift,
                subtitle: "(Editais, inovação aberta e outros)",
            },
            {
                title: "Investimentos",
                url: "/investimentos",
                icon: Coins,
            },
            {
                title: "Benefícios",
                url: "/beneficios",
                icon: TicketPercent,
                subtitle: "(Cupons & Descontos)",
            },
            {
                title: "Contato",
                url: "/contato",
                icon: Mail,
            },
        ],
    },
];

export function AppSidebar() {
    const location = useLocation();

    return (
        <Sidebar className="border-none">
            <SidebarHeader className="bg-sidebar text-sidebar-foreground p-4 pb-3">
                <div className="flex items-center px-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        UBER<span className="font-light">HUB</span>
                    </h1>
                </div>
            </SidebarHeader>
            <SidebarContent className="bg-sidebar text-sidebar-foreground px-2">
                {navigationConfig.map((section, sectionIndex) => (
                    <SidebarGroup key={sectionIndex}>
                        {section.label && (
                            <SidebarGroupLabel className="text-sidebar-foreground/50 text-xs px-4 mb-1 font-medium">
                                {section.label}
                            </SidebarGroupLabel>
                        )}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {section.items.map((item) => {
                                    const Icon = item.icon;
                                    const hasSubtitle = !!item.subtitle;

                                    return (
                                        <SidebarMenuItem key={item.url}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={location.pathname === item.url}
                                                className={`h-auto py-2 px-4 mb-1 hover:bg-sidebar-accent/50 text-sidebar-foreground hover:text-sidebar-accent-foreground font-normal text-sm data-[active=true]:bg-sidebar-accent/70 data-[active=true]:text-sidebar-accent-foreground${hasSubtitle ? " items-start" : ""
                                                    }`}
                                            >
                                                <Link to={item.url}>
                                                    <Icon
                                                        className={`mr-3 h-4 w-4${hasSubtitle ? " shrink-0 mt-0.5" : ""
                                                            }`}
                                                    />
                                                    {hasSubtitle ? (
                                                        <div className="flex flex-col items-start text-left leading-tight">
                                                            <span>{item.title}</span>
                                                            <span className="text-[10px] font-normal text-sidebar-foreground/60 mt-0.5">
                                                                {item.subtitle}
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <span>{item.title}</span>
                                                    )}
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
        </Sidebar>
    );
}
