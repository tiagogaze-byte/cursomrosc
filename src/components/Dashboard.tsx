import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";
import { courseModules } from "@/data/courseContent";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeModule, setActiveModule] = useState(courseModules[0].id);
  const [activeSection, setActiveSection] = useState(courseModules[0].sections[0].id);

  const handleSelectSection = (moduleId: string, sectionId: string) => {
    setActiveModule(moduleId);
    setActiveSection(sectionId);
  };

  const handleSelectModule = (moduleId: string) => {
    const module = courseModules.find(m => m.id === moduleId);
    if (module && module.sections.length > 0) {
      setActiveModule(moduleId);
      setActiveSection(module.sections[0].id);
    }
  };

  const currentModule = courseModules.find(m => m.id === activeModule);
  const currentSection = currentModule?.sections.find(s => s.id === activeSection) || null;

  return (
    <main className="min-h-screen bg-background flex flex-col animate-fade-in-up">
      <Header 
        onLogout={onLogout}
        activeModule={activeModule}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onSelectModule={handleSelectModule}
      />
      
      <div className="flex flex-1">
        <Sidebar
          activeModule={activeModule}
          activeSection={activeSection}
          onSelectSection={handleSelectSection}
          onSelectModule={handleSelectModule}
        />
        
        <ContentArea 
          section={currentSection}
          moduleName={currentModule?.title || ""}
        />
      </div>
    </main>
  );
};

export default Dashboard;
