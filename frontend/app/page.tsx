import { Sidebar } from "lucide-react";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

export default function TurbinasPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] ">
      <Header />
      <div className="flex">
        <Sidebar />

      </div>

    </main>
  );
}