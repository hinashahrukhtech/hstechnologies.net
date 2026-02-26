import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function LegalPage() {
  return (
    <>
      <div className="py-6 px-[5%] lg:px-[8%]">
        <Header variant="hero-inline" />
      </div>
      <main className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-slab text-4xl mb-4">
            <span className="font-semibold">Legal</span>
          </h1>
          <p className="text-lg font-light text-gray-600 dark:text-gray-400">Coming soon</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
