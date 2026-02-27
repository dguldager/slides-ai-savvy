// ============================================================
//  KUNDEKONFIGURATION – AI-Savvy efterforedrag sider
// ============================================================
//
//  Sådan tilføjer du en ny kunde:
//  1. Kopier hele "cbn"-blokken nedenfor
//  2. Indsæt den som en ny blok, f.eks. "xyz": { ... }
//  3. Ret indholdet til den konkrete kunde
//  4. URL bliver automatisk: ai-savvy.dk/#/efterforedrag-xyz
//
// ============================================================

export interface LucideIconName {
  icon: 'Lightbulb' | 'Workflow' | 'Rocket' | 'BrainCircuit' | 'Target' | 'Users' | 'TrendingUp' | 'Zap' | 'Shield';
}

export interface Pointer {
  icon: LucideIconName['icon'];
  title: string;
  subtitle: string;
  desc: string;
}

export interface CustomerConfig {
  // Kundens navn (vises ikke direkte, bruges evt. i metadata)
  name: string;

  // Hero-sektion
  heroTagline: string;          // Den lille badge øverst (f.eks. "Næste skridt efter keynoten")
  heroTitle: string;            // Stor overskrift
  heroTitleHighlight: string;   // Anden linje med gradient-effekt
  heroSubtitle: string;         // Beskrivende tekst under overskriften

  // Knapper i hero
  slidesUrl: string | null;     // Link til slides (sæt null for at skjule knappen)
  slidesLabel: string;          // Tekst på slides-knap (f.eks. "Hent slides")

  // "3 vigtigste pointer" kort
  pointers: [Pointer, Pointer, Pointer];

  // AI-modenhedstest spørgsmål
  testQuestions: [string, string, string, string, string];

  // Afsluttende citat/call-to-action
  closingQuote: string;
}

// ============================================================
//  KUNDER
// ============================================================

const customers: Record<string, CustomerConfig> = {

  // ── CBN ────────────────────────────────────────────────────
  cbn: {
    name: "CBN",

    heroTagline: "Næste skridt efter keynoten",
    heroTitle: "Bryd ud af arbejdssiloen –",
    heroTitleHighlight: "hvad gør I nu?",
    heroSubtitle:
      "AI er ikke længere noget, man kan vente på. Spørgsmålet er ikke, om I skal bruge AI, men hvordan I kommer i gang rigtigt og skaber reel værdi.",

    slidesUrl:
      "https://www.dropbox.com/scl/fi/obbaml5ow2pvgm66xlhu8/AI-CBN-feb-2026.pdf?rlkey=8py36b7gd525v7qnv67itr0xa&st=l4sun00y&dl=1",
    slidesLabel: "Hent slides",

    pointers: [
      {
        icon: "Lightbulb",
        title: "Forbedr din digitale forestillingsevne",
        subtitle: "Don't be like Letterman",
        desc: "Nye teknologier virker først overflødige, indtil de ændrer alt. Evnen til at forestille sig nye måder at arbejde på er afgørende.",
      },
      {
        icon: "Workflow",
        title: "Bryd ud af din arbejdssilo",
        subtitle: "Tænk på tværs",
        desc: "AI gør det muligt at løse opgaver, man normalt ikke ville kaste sig ud i. Det udvisker grænserne mellem traditionelle roller.",
      },
      {
        icon: "Rocket",
        title: "Leg og eksperimentér",
        subtitle: "Gør det til en vane",
        desc: "AI skaber først værdi, når det bruges igen og igen. Fejl er en del af læringen – det vigtigste er at komme i gang.",
      },
    ],

    testQuestions: [
      "Har medarbejdere fælles forståelse af AI-muligheder?",
      "Bruges AI systematisk i teams?",
      "Har nogen ansvar for AI internt?",
      "Har medarbejdere fået praktisk træning?",
      "Har I konkrete use cases i drift?",
    ],

    closingQuote: "Tag det næste skridt - inden andre gør det",
  },

  // ── Tilføj ny kunde her ────────────────────────────────────
  // eksempel: {
  //   name: "Eksempel ApS",
  //   heroTagline: "Næste skridt efter foredraget",
  //   heroTitle: "Fra inspiration til handling –",
  //   heroTitleHighlight: "kom i gang med AI i dag",
  //   heroSubtitle: "Beskrivelse af hvad deltagerne fik ud af foredraget...",
  //   slidesUrl: "https://dropbox.com/link-til-slides",
  //   slidesLabel: "Hent slides fra foredraget",
  //   pointers: [ ... ],
  //   testQuestions: [ ... ],
  //   closingQuote: "Dit citat her",
  // },

};

export default customers;
