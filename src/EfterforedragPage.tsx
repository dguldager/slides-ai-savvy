import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BrainCircuit,
  Lightbulb,
  Workflow,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
  Target,
  Rocket,
  ChevronRight,
  Linkedin,
  Mail,
  Globe,
  Download,
  Zap,
  Shield,
} from 'lucide-react';
import type { CustomerConfig } from './customers';

// ── Ikon-hjælper ─────────────────────────────────────────────
const IconMap = {
  Lightbulb,
  Workflow,
  Rocket,
  BrainCircuit,
  Target,
  Users,
  TrendingUp,
  Zap,
  Shield,
} as const;

type IconName = keyof typeof IconMap;

function DynamicIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = IconMap[name] ?? Lightbulb;
  return <Icon className={className} />;
}

// ── Hoved-komponent ──────────────────────────────────────────
export default function EfterforedragPage({ config }: { config: CustomerConfig }) {
  const [testAnswers, setTestAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const handleToggle = (index: number) => {
    setTestAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const score = Object.values(testAnswers).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-navy-900 text-slate-50 selection:bg-accent-orange/30">

      {/* ── Navigation ──────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-navy-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://www.dropbox.com/scl/fi/w9wss6q55aukulfnkmtu4/ai-savvy-2.0-hvid.png?rlkey=kyucd5kwlj8hrec5ep8lehpxi&st=g5i446eo&raw=1"
              alt="AI-Savvy"
              className="h-20 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#insights" className="hover:text-white transition-colors">Pointer</a>
            <a href="#test" className="hover:text-white transition-colors">AI-Test</a>
            <a href="#courses" className="hover:text-white transition-colors">Kurser</a>
            <a
              href="#courses"
              className="bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full text-white transition-all"
            >
              Kom i gang
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent-gold/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 border border-accent-orange/20 text-accent-orange text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                {config.heroTagline}
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                {config.heroTitle} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  {config.heroTitleHighlight}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
                {config.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <a
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 bg-accent-orange hover:bg-[#e6701c] text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
                >
                  Se næste skridt
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#test"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
                >
                  Tag AI-modenhedstesten
                </a>
                {config.slidesUrl && (
                  <a
                    href={config.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all"
                  >
                    <Download className="w-5 h-5" />
                    {config.slidesLabel}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pointer-kort ────────────────────────────────────── */}
      <section id="insights" className="py-24 bg-navy-800/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              De tre vigtigste pointer fra oplægget
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Husk disse tre principper, når I skal omsætte viden til handling i hverdagen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {config.pointers.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-navy-900 border border-white/5 p-8 rounded-3xl hover:border-accent-orange/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <DynamicIcon name={item.icon as IconName} className="w-7 h-7 text-accent-orange" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-accent-orange mb-2">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI-Modenhedstest ────────────────────────────────── */}
      <section id="test" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Hvor AI-klar er jeres organisation?
            </h2>
            <p className="text-slate-400 text-lg">
              Tag en hurtig temperaturmåling på jeres nuværende niveau.
            </p>
          </div>

          <div className="bg-navy-800 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl">
            <div className="space-y-4 mb-10">
              {config.testQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleToggle(i)}
                  className={`w-full flex items-center gap-4 p-5 rounded-2xl border text-left transition-all ${
                    testAnswers[i]
                      ? 'bg-accent-orange/10 border-accent-orange/50 text-white'
                      : 'bg-navy-900 border-white/5 text-slate-300 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center border transition-colors ${
                      testAnswers[i] ? 'bg-accent-orange border-accent-orange' : 'border-slate-500'
                    }`}
                  >
                    {testAnswers[i] && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <span className="font-medium">{q}</span>
                </button>
              ))}
            </div>

            {!showResults ? (
              <div className="text-center">
                <button
                  onClick={() => setShowResults(true)}
                  className="bg-white text-navy-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors"
                >
                  Se jeres niveau
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="pt-8 border-t border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">Jeres resultat</h3>
                <div className="grid gap-4">
                  <div className={`p-6 rounded-2xl border ${score <= 1 ? 'bg-red-500/10 border-red-500/30' : 'bg-navy-900 border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <AlertTriangle className={`w-6 h-6 ${score <= 1 ? 'text-red-400' : 'text-slate-500'}`} />
                      <h4 className="text-lg font-bold">Eksperimentfasen (0-1 point)</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Risiko: AI bruges tilfældigt af få ildsjæle og skaber ikke reel værdi på tværs af organisationen.
                    </p>
                  </div>

                  <div className={`p-6 rounded-2xl border ${score > 1 && score <= 3 ? 'bg-amber-500/10 border-amber-500/30' : 'bg-navy-900 border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className={`w-6 h-6 ${score > 1 && score <= 3 ? 'text-amber-400' : 'text-slate-500'}`} />
                      <h4 className="text-lg font-bold">Sporadisk brug (2-3 point)</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Risiko: Potentialet udnyttes ikke strategisk. Der mangler fælles retning og systematisk kompetenceløft.
                    </p>
                  </div>

                  <div className={`p-6 rounded-2xl border ${score > 3 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-navy-900 border-white/5 opacity-50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <Target className={`w-6 h-6 ${score > 3 ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <h4 className="text-lg font-bold">Strategisk på vej (4-5 point)</h4>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Næste skridt: Fasthold momentum med løbende kompetenceløft og deling af best practices på tværs af teams.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Det næste skridt ────────────────────────────────── */}
      <section className="py-24 bg-navy-800/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Det næste skridt for de fleste organisationer
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              For at komme succesfuldt i gang, kræver det en fokuseret indsats på tre områder.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Users,
                title: "Fælles forståelse for AI",
                desc: "Skab et fælles sprog og forståelse for, hvad AI kan og ikke kan, så alle taler ud fra samme grundlag.",
              },
              {
                Icon: BrainCircuit,
                title: "Praktisk træning",
                desc: "Gå fra teori til praksis. Lær at anvende AI-værktøjer i de daglige arbejdsopgaver for at spare tid.",
              },
              {
                Icon: Target,
                title: "Små pilotprojekter",
                desc: "Start småt, skab hurtige succeser, og skaler derefter de løsninger, der virker bedst for jer.",
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="text-center relative">
                {i > 0 && (
                  <div className="hidden md:block absolute top-8 -left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 relative z-10">
                  <Icon className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kurser ──────────────────────────────────────────── */}
      <section id="courses" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Sådan kan I komme videre</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Vælg det forløb, der passer bedst til jeres nuværende niveau og ambitioner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AI Essentials",
                subtitle: "Fælles fundament",
                desc: "Et intensivt grundkursus, der klæder hele teamet på til at forstå og anvende AI sikkert i hverdagen.",
                features: ["Grundlæggende prompting", "Sikkerhed og etik", "Hands-on øvelser"],
                link: "https://www.ai-savvy.dk/#/kurser",
              },
              {
                title: "AI Masterclass",
                subtitle: "Nøglepersoner & Superbrugere",
                desc: "Dybdegående forløb for dem, der skal drive AI-udviklingen internt og bygge avancerede workflows.",
                features: ["Avanceret prompting", "Automatiseringer", "Strategisk implementering"],
                highlight: true,
                link: "https://www.ai-savvy.dk/#/kurser",
              },
              {
                title: "Workshops & Forløb",
                subtitle: "Organisationstilpasset",
                desc: "Skræddersyede forløb med udgangspunkt i jeres specifikke data, udfordringer og forretningsmål.",
                features: ["Egne use-cases", "Leder-sparring", "Implementeringsplan"],
                link: "https://www.ai-savvy.dk/#/workshop",
              },
            ].map((course, i) => (
              <div
                key={i}
                className={`flex flex-col p-8 rounded-3xl border ${
                  course.highlight
                    ? 'bg-accent-orange/5 border-accent-orange/30 relative'
                    : 'bg-navy-800 border-white/5'
                }`}
              >
                {course.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Mest populære
                  </div>
                )}
                <div className="text-sm font-bold text-accent-orange mb-2">{course.subtitle}</div>
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <p className="text-slate-400 mb-8 flex-grow">{course.desc}</p>
                <ul className="space-y-3 mb-8">
                  {course.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-orange flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
                    course.highlight
                      ? 'bg-accent-orange hover:bg-[#e6701c] text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  Læs mere
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Afsluttende call-to-action ──────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-orange/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-transparent" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            "{config.closingQuote}"
          </h2>
          <a
            href="https://www.ai-savvy.dk/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105"
          >
            Se kommende kurser hos AI-Savvy
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-navy-900 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="https://www.dropbox.com/scl/fi/w9wss6q55aukulfnkmtu4/ai-savvy-2.0-hvid.png?rlkey=kyucd5kwlj8hrec5ep8lehpxi&st=g5i446eo&raw=1"
            alt="AI-Savvy"
            className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
          />
          <div className="flex items-center gap-6">
            <a href="https://www.linkedin.com/company/ai-savvy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hej@ai-savvy.dk" className="text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://ai-savvy.dk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              AI-Savvy.dk
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>Et site under Savvy ApS</p>
        </div>
      </footer>
    </div>
  );
}
