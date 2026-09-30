import { SiderBar } from "./components/SiderBar";
import { Header } from "./components/Header";
import TurbineCatalogPage from "./turbine-catalog/page";
import { redirect } from "next/navigation";


export default function Page() {
  redirect("/turbine-catalog")
}
