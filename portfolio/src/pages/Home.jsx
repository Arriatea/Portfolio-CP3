import { FundoEstrela } from "../Components/FundoEstrela";
import { NavBar } from "../Components/NavBar";

export const Home = () => {
    return (
        <div className="min-h-screen bg-fundo text-foreground overflow-x-hidden">
           {/* Fundo */}
            <FundoEstrela />

            {/* Navbar */}
            <NavBar />
            {/* Conteudo principal */}
            {/* Footer */}
        </div>
    );
};
