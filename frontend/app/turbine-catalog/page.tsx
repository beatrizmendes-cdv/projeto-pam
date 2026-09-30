import { SiderBar } from "../components/SiderBar";
import { Header } from "../components/Header";
import { Card } from "../components/Card";

export default function TurbineCatalogPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-[#044947]">Catálogo de turbinas</h1>
            <p className="text-[#64748B] font-light pb-4 pt-1 ">
                Cadastre e gerencie todos os modelos de turbinas
            </p>
            <div className="pt-2 w-82">
                <Card label="Total:" unit="modelos de turbina" value={"7"} />
            </div>
        </div>



    );
}
