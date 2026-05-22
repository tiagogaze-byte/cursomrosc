import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen = ({ onLogin }: LoginScreenProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase().startsWith("mrosc")) {
      onLogin();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900 transition-all duration-700">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,_hsl(var(--gold-classic))_0%,_transparent_70%)] opacity-10" />
      </div>
      
      <div className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-xl border border-gold-classic/20 rounded-lg shadow-2xl text-center animate-fade-in-up">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gold-classic rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-gold-classic/20">
            <ShieldCheck className="text-navy-900 w-8 h-8" />
          </div>
          <h1 className="text-2xl font-montserrat font-bold text-primary-foreground tracking-tight">
            Portal de Capacitação Técnica
          </h1>
          <p className="text-gold-classic font-roboto text-sm uppercase tracking-widest mt-2">
            Parcerias Públicas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label className="block text-gray-400 text-xs uppercase font-bold mb-2 ml-1">
              Senha de Acesso
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha técnica"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-navy-800 border border-white/10 text-primary-foreground placeholder:text-gray-500 focus:border-gold-classic transition-all duration-300 ${
                isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
              }`}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gold-classic hover:bg-gold-light text-navy-900 font-montserrat font-bold py-3 shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            ACESSAR PLATAFORMA
          </Button>
        </form>
        
        <p
          className={`text-destructive text-xs mt-4 transition-opacity duration-300 ${
            error ? "opacity-100" : "opacity-0"
          }`}
        >
          Credencial incorreta. Tente novamente.
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  );
};

export default LoginScreen;
