export const Home = () => (
    <div className="p-8">
        <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
                Bem-vindo ao <span className="text-primary">UBERHUB</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
                Sua plataforma para conectar o ecossistema de inovação de Uberlândia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg hover:bg-accent/50 transition-colors">
                    <h3 className="font-semibold mb-2">Ecossistema</h3>
                    <p className="text-sm text-muted-foreground">
                        Descubra startups, empresas tech e espaços de inovação
                    </p>
                </div>
                <div className="p-6 border rounded-lg hover:bg-accent/50 transition-colors">
                    <h3 className="font-semibold mb-2">Oportunidades</h3>
                    <p className="text-sm text-muted-foreground">
                        Vagas, eventos, investimentos e editais
                    </p>
                </div>
                <div className="p-6 border rounded-lg hover:bg-accent/50 transition-colors">
                    <h3 className="font-semibold mb-2">Comunidade</h3>
                    <p className="text-sm text-muted-foreground">
                        Conecte-se com outros empreendedores e inovadores
                    </p>
                </div>
            </div>
        </div>
    </div>
);
