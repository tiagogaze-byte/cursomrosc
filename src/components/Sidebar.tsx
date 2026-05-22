import { courseModules, Module, Section } from "@/data/courseContent";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeModule: string;
  activeSection: string;
  onSelectSection: (moduleId: string, sectionId: string) => void;
  onSelectModule: (moduleId: string) => void;
}

const Sidebar = ({ activeModule, activeSection, onSelectSection, onSelectModule }: SidebarProps) => {
  const currentModule = courseModules.find(m => m.id === activeModule);

  return (
    <aside className="w-72 bg-navy-800 border-r border-sidebar-border hidden lg:block overflow-y-auto max-h-[calc(100vh-72px)] sticky top-[72px]">
      <div className="p-6">
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
          <>
            <div className="border-t border-white/10 pt-6 mb-4">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">
                Navegação do Módulo
              </span>
            </div>
            <ul className="space-y-1">
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
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
