import { useState, useEffect } from 'react';
import EfterforedragPage from './EfterforedragPage';
import customers from './customers';

// ── Simpel hash-router ───────────────────────────────────────
// Læser URL-hash og bestemmer hvilken side der vises.
// URL-format: #/efterforedrag-[kunde-id]
// Eksempel: ai-savvy.dk/#/efterforedrag-cbn

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHash();

  // Match: #/[kunde-id]  →  f.eks. slides.ai-savvy.dk/#/cbn
  const match = hash.match(/^#\/(.+)$/);
  if (match) {
    const customerId = match[1];
    const config = customers[customerId];
    if (config) {
      return <EfterforedragPage config={config} />;
    }
    // Kunde-ID ikke fundet → vis fejlbesked
    return (
      <div className="min-h-screen bg-navy-900 text-slate-50 flex items-center justify-center p-8">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🤔</div>
          <h1 className="text-2xl font-bold mb-4">Siden findes ikke</h1>
          <p className="text-slate-400">
            Kunde-ID'et <strong className="text-white">"{customerId}"</strong> er ikke konfigureret
            i <code className="text-accent-orange">src/customers.ts</code>.
          </p>
        </div>
      </div>
    );
  }

  // Ingen hash-match → vis en simpel forside/redirect-guide
  return (
    <div className="min-h-screen bg-navy-900 text-slate-50 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <img
          src="https://www.dropbox.com/scl/fi/w9wss6q55aukulfnkmtu4/ai-savvy-2.0-hvid.png?rlkey=kyucd5kwlj8hrec5ep8lehpxi&st=g5i446eo&raw=1"
          alt="AI-Savvy"
          className="h-16 w-auto mx-auto mb-8 opacity-80"
        />
        <h1 className="text-2xl font-bold mb-4">AI-Savvy Efterforedrag</h1>
        <p className="text-slate-400 mb-6">
          Tilgå en specifik kundeside ved at bruge URL-formatet:
        </p>
        <code className="block bg-navy-800 border border-white/10 px-4 py-3 rounded-xl text-accent-orange text-sm mb-6">
          slides.ai-savvy.dk/#/[kunde-id]
        </code>
        <p className="text-slate-500 text-sm">
          Eksempel: <a href="#/cbn" className="text-accent-orange hover:underline">#/cbn</a>
        </p>
      </div>
    </div>
  );
}
