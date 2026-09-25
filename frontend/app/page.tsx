import { SiderBar } from "./components/SiderBar";
import { Header } from "./components/Header";

export default function TurbinasPage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-[#F8FAFC]">
      <Header />
      <div className="flex min-h-0 flex-1">
        <SiderBar />

      </div>

    </main>
  );
}
