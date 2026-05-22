import { FileText, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, authorInfo } from "@/data/courseContent";
import marinaPhoto from "@/assets/marina-resende.jpg";

interface ContentAreaProps {
  section: Section | null;
  moduleName: string;
}

const ContentArea = ({ section, moduleName }: ContentAreaProps) => {
  const handleDownload = (type: "pdf" | "pptx") => {
    const filename = type === "pdf" 
      ? "Apostila_MROSC_Marina_Resende.pdf" 
      : "Treinamento_MROSC_Marina_Resende.pptx";
    const content = type === "pdf" 
      ? "CONTEUDO_PDF_MROSC_LEI_13019" 
      : "CONTEUDO_PPTX_MROSC_APRESENTACAO";
    
    const blob = new Blob([content], { type: "application/octet-stream" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  if (!section) {
    return (
      <section className="flex-1 p-6 md:p-12 flex items-center justify-center">
        <p className="text-muted-foreground">Selecione uma seção para visualizar o conteúdo.</p>
      </section>
    );
  }

  return (
    <section id="content-area" className="flex-1 p-6 md:p-12 overflow-y-auto bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Dynamic Header */}
        <div className="mb-12 animate-fade-in-up">
          <span className="inline-block px-3 py-1 bg-navy-900 text-gold-classic text-[10px] font-bold rounded-full mb-4">
            {moduleName}
          </span>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6 leading-tight">
            {section.title}
          </h1>
          <p className="text-lg text-muted-foreground font-roboto leading-relaxed italic border-l-4 border-gold-classic pl-6">
            {section.intro}
          </p>
        </div>

        {/* Dynamic Body */}
        <div 
          className="prose prose-lg max-w-none font-roboto text-foreground/80 leading-relaxed space-y-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
          dangerouslySetInnerHTML={{ __html: section.body }}
        />


        {/* Footer / Author */}
        <footer 
          className="mt-24 pt-12 border-t border-border animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold-classic shadow-xl flex-shrink-0">
              <img
                src={marinaPhoto}
                alt={authorInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-foreground font-montserrat font-bold text-xl mb-2">
                {authorInfo.name}
              </h4>
              <p className="text-muted-foreground font-roboto text-sm leading-relaxed max-w-2xl">
                {authorInfo.bio}
              </p>
            </div>
          </div>
          <div className="mt-12 text-center text-muted-foreground text-[10px] uppercase tracking-widest pb-8">
            Portal de Capacitação Técnica © 2026 - Versão 2.5.0
          </div>
        </footer>
      </div>

      {/* Styles for content */}
      <style>{`
        .prose h2 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 1.5rem;
          color: hsl(var(--foreground));
          margin-top: 2rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid hsl(var(--gold-classic));
          display: inline-block;
          padding-bottom: 0.25rem;
        }

        .prose p {
          margin-bottom: 1.25rem;
        }

        .prose ul {
          list-style: none;
          padding-left: 0;
          margin-bottom: 1.5rem;
        }

        .prose li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .prose li::before {
          content: "•";
          color: hsl(var(--gold-classic));
          font-weight: bold;
          position: absolute;
          left: 0.5rem;
          font-size: 1.2rem;
        }

        .table-luxury {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          font-size: 0.9rem;
          background: hsl(var(--card));
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .table-luxury th {
          background-color: hsl(var(--navy-900));
          color: hsl(var(--primary-foreground));
          padding: 1rem;
          text-align: left;
          font-family: 'Montserrat', sans-serif;
        }

        .table-luxury td {
          padding: 1rem;
          border-bottom: 1px solid hsl(var(--border));
        }

        .table-luxury tr:nth-child(even) {
          background-color: hsl(var(--muted));
        }
      `}</style>
    </section>
  );
};

export default ContentArea;
