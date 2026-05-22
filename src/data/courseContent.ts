export interface Section {
  id: string;
  title: string;
  intro: string;
  body: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  sections: Section[];
}

export const courseModules: Module[] = [
  {
    id: "modulo1",
    title: "Módulo 1: Lei 13.019/2014",
    description: "Marco Regulatório das Organizações da Sociedade Civil",
    sections: [
      {
        id: "intro",
        title: "Introdução ao MROSC",
        intro: "O Marco Regulatório das Organizações da Sociedade Civil (Lei 13.019/2014) representa um novo paradigma nas parcerias públicas.",
        body: `
          <h2>O Novo Paradigma</h2>
          <p>O advento desta legislação substituiu a lógica dos convênios — antes regidos pela Lei de Licitações ou decretos esparsos — por um modelo baseado na <strong>mútua cooperação</strong> para a consecução de finalidades de interesse público e recíproco.</p>
          
          <h2>Fundamentos Principais</h2>
          <ul>
            <li><strong>Autonomia das OSCs:</strong> Reconhecimento das entidades como parceiras estratégicas.</li>
            <li><strong>Interesse Público e Recíproco:</strong> A parceria deve atender tanto aos objetivos do Estado quanto à missão da organização.</li>
            <li><strong>Segurança Jurídica:</strong> Padronização de procedimentos em âmbito nacional.</li>
          </ul>
        `
      },
      {
        id: "instrumentos",
        title: "Colaboração vs Fomento",
        intro: "A distinção entre os instrumentos jurídicos é fundamental para a estruturação do processo administrativo.",
        body: `
          <p>A diferença reside essencialmente na <strong>origem da iniciativa</strong> do plano de trabalho.</p>
          <table class="table-luxury">
            <thead>
              <tr>
                <th>Critério</th>
                <th>Termo de Colaboração</th>
                <th>Termo de Fomento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Iniciativa</strong></td>
                <td>Administração Pública</td>
                <td>Organização da Sociedade Civil</td>
              </tr>
              <tr>
                <td><strong>Finalidade</strong></td>
                <td>Políticas públicas estruturadas pelo Estado.</td>
                <td>Projetos inovadores ou propostas próprias das OSCs.</td>
              </tr>
            </tbody>
          </table>
          <p>Nota: Existe ainda o <strong>Acordo de Cooperação</strong>, utilizado para parcerias que NÃO envolvem a transferência de recursos financeiros.</p>
        `
      },
      {
        id: "credenciamento",
        title: "Credenciamento e Seleção",
        intro: "Para celebrar parcerias, as OSCs devem atender a critérios rigorosos de habilitação jurídica, técnica e operacional.",
        body: `
          <h2>Requisitos de Habilitação</h2>
          <ul>
            <li><strong>Tempo de Existência:</strong> Cadastro ativo (CNPJ) há 1, 2 ou 3 anos, conforme esfera federativa.</li>
            <li><strong>Experiência Prévia:</strong> Comprovação de atuação eficaz na área do objeto.</li>
            <li><strong>Capacidade Operacional:</strong> Instalações, equipamentos e pessoal qualificado.</li>
            <li><strong>Regularidade Fiscal:</strong> Certidões negativas de débitos previdenciários, trabalhistas e fiscais.</li>
          </ul>
          <h2>Chamamento Público</h2>
          <p>Processo que garante a impessoalidade e a competitividade, seguindo as etapas de Edital, Seleção/Julgamento e Habilitação.</p>
        `
      },
      {
        id: "transparencia",
        title: "Governança e Transparência",
        intro: "A Lei 13.019/2014 eleva o padrão de transparência ativa e passiva para ambas as partes.",
        body: `
          <h2>Deveres da Administração Pública</h2>
          <p>Manter em site oficial a relação das parcerias, planos de trabalho e valores transferidos.</p>
          <h2>Deveres da OSC</h2>
          <p>Divulgar na internet e em sua sede a existência da parceria, detalhando objeto e recursos recebidos.</p>
          <h2>Mecanismos de Controle</h2>
          <ul>
            <li>Conselhos de Políticas Públicas.</li>
            <li>Plataformas Eletrônicas (Transferegov).</li>
            <li>Gestor da Parceria: Fiscalização direta.</li>
          </ul>
        `
      },
      {
        id: "gestao",
        title: "Gestão de Recursos",
        intro: "A execução financeira no MROSC é pautada pela rastreabilidade e conta bancária específica.",
        body: `
          <h2>Regras de Ouro</h2>
          <ul>
            <li><strong>Pagamentos Eletrônicos:</strong> Obrigatórios para identificação do beneficiário final.</li>
            <li><strong>Aplicação Financeira:</strong> Recursos devem estar em poupança ou fundos de curto prazo enquanto não utilizados.</li>
            <li><strong>Gastos com Pessoal:</strong> Permitida a remuneração de equipe, incluindo encargos, se previsto no Plano de Trabalho.</li>
          </ul>
          <h2>Vedações</h2>
          <p>É proibido o uso dos recursos para pagamento de multas, juros de mora ou finalidades alheias ao objeto pactuado.</p>
        `
      },
      {
        id: "contas",
        title: "Prestação de Contas",
        intro: "Foco nos resultados: a prestação de contas deixa de ser meramente financeira para focar no cumprimento das metas.",
        body: `
          <h2>Documentos Essenciais</h2>
          <ul>
            <li><strong>Relatório de Execução do Objeto:</strong> Atividades realizadas e alcance das metas pela OSC.</li>
            <li><strong>Relatório de Execução Financeira:</strong> Exigido apenas em caso de descumprimento ou suspeita de irregularidade.</li>
            <li><strong>Parecer Técnico:</strong> Conclusão do gestor público pela aprovação ou rejeição.</li>
          </ul>
          <h2>Critérios de Avaliação</h2>
          <p><strong>Eficácia:</strong> O objeto foi entregue? <br>
             <strong>Efetividade:</strong> O impacto social foi alcançado? <br>
             <strong>Economicidade:</strong> Uso otimizado dos recursos?</p>
        `
      }
    ]
  },
  {
    id: "modulo2",
    title: "Módulo 2: Fiscalização e Controle",
    description: "Fiscalização, Controle, Monitoramento e Avaliação das Parcerias",
    sections: [
      {
        id: "visao-geral",
        title: "Visão Geral",
        intro: "Este módulo aborda os conceitos e práticas essenciais de fiscalização, controle, monitoramento e avaliação das parcerias com organizações da sociedade civil.",
        body: `
          <h2>Objetivos do Módulo</h2>
          <p>Proporcionar conhecimentos fundamentais para uma gestão eficiente e transparente, garantindo a eficácia e legalidade das parcerias com entidades da sociedade civil.</p>
          
          <h2>O que você aprenderá</h2>
          <ul>
            <li><strong>Princípios da Fiscalização:</strong> Fundamentos que orientam o controle das parcerias.</li>
            <li><strong>Metodologias de Monitoramento:</strong> Ferramentas e técnicas para acompanhamento eficaz.</li>
            <li><strong>Avaliação de Impacto:</strong> Como mensurar resultados e promover melhorias.</li>
          </ul>
        `
      },
      {
        id: "principios-fiscalizacao",
        title: "Princípios da Fiscalização",
        intro: "Os princípios norteadores da fiscalização de parcerias são fundamentais para garantir transparência, legalidade e eficiência.",
        body: `
          <h2>Princípios Fundamentais</h2>
          <ul>
            <li><strong>Legalidade:</strong> A fiscalização deve pautar-se pela observância estrita da legislação vigente, garantindo que todos os procedimentos sejam realizados de acordo com as normas estabelecidas.</li>
            <li><strong>Impessoalidade:</strong> A atuação dos fiscais deve ser baseada em critérios objetivos e impessoais, evitando qualquer forma de favorecimento ou discriminação.</li>
            <li><strong>Moralidade:</strong> A ética e a moralidade devem nortear as práticas de fiscalização, assegurando gestão ética e responsável.</li>
            <li><strong>Publicidade:</strong> A transparência é fundamental, garantindo que os atos de fiscalização sejam realizados de forma pública e acessível.</li>
            <li><strong>Eficiência e Eficácia:</strong> Garantir que os recursos sejam aplicados adequadamente e os objetivos alcançados.</li>
          </ul>
        `
      },
      {
        id: "fundamentos-fiscalizacao",
        title: "Fundamentos da Fiscalização",
        intro: "Além dos princípios, alguns fundamentos são essenciais para o bom desempenho das atividades de fiscalização.",
        body: `
          <h2>Fundamentos Essenciais</h2>
          <ul>
            <li><strong>Conhecimento da Legislação:</strong> Os fiscais devem possuir amplo conhecimento da legislação aplicável às parcerias com OSCs.</li>
            <li><strong>Capacitação Técnica:</strong> A formação técnica é fundamental para o adequado desempenho das atividades de fiscalização.</li>
            <li><strong>Monitoramento Contínuo:</strong> O acompanhamento constante permite identificar desvios ou irregularidades e agir prontamente.</li>
            <li><strong>Comunicação Efetiva:</strong> Comunicação clara entre fiscais, OSCs e demais envolvidos é essencial para o sucesso.</li>
            <li><strong>Aprimoramento Contínuo:</strong> Busca pela melhoria constante dos processos de fiscalização.</li>
          </ul>
          
          <h2>Importância</h2>
          <p>Ao considerar esses princípios e fundamentos, é possível assegurar a efetividade e legitimidade das ações de controle, contribuindo para a promoção da transparência e accountability.</p>
        `
      },
      {
        id: "metodologias-controle",
        title: "Metodologias de Controle",
        intro: "Diferentes metodologias podem ser empregadas para o controle e monitoramento eficaz das parcerias.",
        body: `
          <h2>Análise de Indicadores</h2>
          <p>Estabelecimento de indicadores de desempenho e impacto que devem ser acompanhados ao longo da execução do projeto. Podem estar relacionados a aspectos financeiros, operacionais, de qualidade ou de impacto social.</p>
          
          <h2>Auditorias Externas</h2>
          <p>Processos formais de verificação que avaliam a conformidade e legalidade das atividades. Podem ser conduzidas por órgãos governamentais ou empresas especializadas, garantindo avaliação imparcial.</p>
          
          <h2>Avaliações de Desempenho</h2>
          <p>Ferramentas para analisar e comparar o desempenho das organizações em relação aos objetivos estabelecidos, incluindo:</p>
          <ul>
            <li>Análise de relatórios de progresso</li>
            <li>Reuniões de acompanhamento</li>
            <li>Avaliações de impacto</li>
          </ul>
          
          <h2>Gestão do Conhecimento</h2>
          <p>Coleta, análise e compartilhamento de informações para promover aprendizagem contínua e identificar boas práticas e lições aprendidas.</p>
        `
      },
      {
        id: "avaliacao-impacto",
        title: "Avaliação de Impacto",
        intro: "A avaliação de impacto e resultados é uma etapa fundamental no processo de fiscalização das parcerias.",
        body: `
          <h2>Importância da Avaliação</h2>
          <p>Permite avaliar de forma objetiva e rigorosa se as atividades estão contribuindo para o alcance dos objetivos propostos, identificando ajustes e melhorias necessárias.</p>
          
          <h2>Metodologias de Avaliação</h2>
          <table class="table-luxury">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Descrição</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Avaliação de Resultados</strong></td>
                <td>Mensurar resultados em relação aos objetivos, verificando se as metas foram atingidas.</td>
              </tr>
              <tr>
                <td><strong>Avaliação de Impacto</strong></td>
                <td>Compreender as mudanças reais e positivas causadas na comunidade ou grupo-alvo.</td>
              </tr>
              <tr>
                <td><strong>Avaliação Qualitativa e Quantitativa</strong></td>
                <td>Combina análise de dados para obter visão abrangente dos impactos.</td>
              </tr>
              <tr>
                <td><strong>Avaliação Participativa</strong></td>
                <td>Envolve os beneficiários no processo, permitindo que expressem percepções.</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        id: "indicadores-avaliacao",
        title: "Indicadores de Avaliação",
        intro: "Para realizar uma avaliação eficaz, é essencial definir previamente os indicadores que serão utilizados.",
        body: `
          <h2>Exemplos de Indicadores</h2>
          <ul>
            <li><strong>Número de beneficiários alcançados</strong></li>
            <li><strong>Taxa de satisfação dos beneficiários</strong></li>
            <li><strong>Melhoria nas condições de vida da comunidade</strong></li>
            <li><strong>Aumento do acesso a serviços essenciais</strong></li>
            <li><strong>Redução de desigualdades sociais</strong></li>
          </ul>
          
          <h2>Desafios na Avaliação</h2>
          <ul>
            <li>Falta de capacitação técnica</li>
            <li>Recursos limitados</li>
            <li>Resistência à mudança</li>
            <li>Dificuldades em mensurar impactos intangíveis</li>
          </ul>
          
          <h2>Considerações Finais</h2>
          <p>A avaliação de impacto é um processo complexo, porém crucial para garantir a transparência, efetividade e accountability das parcerias. Ao adotar metodologias e indicadores adequados, é possível obter uma visão clara do impacto e promover melhorias contínuas.</p>
        `
      },
      {
        id: "exercicios",
        title: "Exercícios Práticos",
        intro: "Coloque seus conhecimentos em prática através de atividades que desenvolvem habilidades essenciais.",
        body: `
          <h2>Exercício 1: Princípios de Fiscalização</h2>
          <p>Descreva os principais princípios que orientam a fiscalização de parcerias com OSCs. Explique a importância de cada princípio na garantia da transparência e eficiência.</p>
          
          <h2>Exercício 2: Metodologias de Controle</h2>
          <p>Compare duas metodologias de controle e monitoramento de parcerias. Destaque diferenças, vantagens e desvantagens, e discuta como contribuem para a eficácia na gestão.</p>
          
          <h2>Exercício 3: Avaliação de Impacto</h2>
          <p>Elabore um plano de avaliação de impacto para uma parceria com OSC. Defina:</p>
          <ul>
            <li>Indicadores a serem avaliados</li>
            <li>Métodos de coleta de dados e análise</li>
            <li>Ações corretivas baseadas nos resultados</li>
          </ul>
        `
      }
    ]
  }
];

export const authorInfo = {
  name: "Marina Freire Resende",
  bio: "Marina Freire Resende é especialista em Gestão Pública com 14 anos de experiência técnica e estratégica no setor. Sua atuação é referência na aplicação da Lei 13.019/2014, o Marco Regulatório das Organizações da Sociedade Civil (MROSC). Com vasta trajetória em assessoria jurídica, promove a eficiência e a segurança jurídica em parcerias públicas, transformando complexidades normativas em práticas de gestão de alto impacto."
};
