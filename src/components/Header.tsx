import { GraduationCap, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { courseModules } from "@/data/courseContent";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onLogout: () => void;
  activeModule: string;
  activeSection: string;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  onSelectModule: (moduleId: string) => void;
}

const Header = ({ 
  onLogout, 
  activeModule, 
  activeSection, 
  onSelectSection, 
  onSelectModule 
}: HeaderProps) => {
  const currentModule = courseModules.find(m => m.id === activeModule);

  return (
    <header className="bg-navy-900 border-b border-gold-classic/30 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <GraduationCap className="text-gold-classic w-8 h-8" />
        <div>
          <h2 className="text-primary-foreground font-montserrat font-bold text-lg leading-none">
            Academia MROSC
          </h2>
          <span className="text-gold-classic/80 text-[10px] uppercase tracking-tighter">
            Módulo de Formação Técnica
          </span>
        </div>
      </div>

      <div className="flex items-center gap-6">

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-gold-classic">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-navy-800 border-r-gold-classic/20 w-80">
            <div className="py-6">
              <h3 className="text-gold-classic font-montserrat font-bold text-sm uppercase tracking-widest mb-6">
                Navegação
              </h3>
              
              {/* Module Selector */}
              <div className="mb-6 space-y-2">
                {courseModules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => onSelectModule(module.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-md font-montserrat text-xs uppercase tracking-widest transition-all",
                      activeModule === module.id
                        ? "bg-gold-classic text-navy-900 font-bold"
                        : "text-gold-classic/70 hover:bg-white/5 hover:text-gold-classic"
                    )}
                  >
                    {module.title}
                  </button>
                ))}
              </div>

              {/* Section Navigation */}
              {currentModule && (
                <ul className="space-y-1 border-t border-white/10 pt-4">
                  {currentModule.sections.map((section, index) => (
                    <li key={section.id}>
                      <button
                        onClick={() => onSelectSection(activeModule, section.id)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-md font-roboto text-sm transition-all flex items-center gap-3",
                          activeSection === section.id
                            ? "bg-gold-classic text-navy-900 font-semibold"
                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span className="text-[10px] opacity-50">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <Button
          variant="ghost"
          size="icon"
          onClick={onLogout}
          className="text-gold-classic hover:text-primary-foreground transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
