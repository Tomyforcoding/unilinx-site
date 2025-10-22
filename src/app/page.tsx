"use client";
import { useState } from "react";

type Lang = "en" | "ja" | "zh";

const text = {
  en: {
    title: "Unilinx",
    desc: "",
    cta: "",
    disclaimer: "",
  },
  ja: {
    title: "Unilinx",
    desc: "",
    cta: "",
    disclaimer: "",
  },
  zh: {
    title: "Unilinx",
    desc: "",
    cta: "",
    disclaimer: "",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = text[lang];

  return (
    
    
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
     
      {/* Header */}
      <header style={{ borderBottom: "1px solid #eee", padding: "20px 20px", display: "flex", justifyContent: "space-between" }}>
        <strong>Unilinx</strong>
        <div style={{ display: "flex", gap: "8px" }}>
          {(["en", "ja", "zh"] as Lang[]).map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 10px", border: "1px solid #ddd", borderRadius: "6px" }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Hero Section */}
<section className="flex flex-col items-center justify-center text-center py-32 px-6">
  <h1 className="text-4xl font-serif font-semibold tracking-tight">
    Unilinx
  </h1>
  <p className="mt-4 text-lg opacity-80">
    please fill the form in the bottom right corner, thank you!
  </p>
</section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #eee", padding: "20px", textAlign: "center", fontSize: "14px", opacity: 0.8 }}>
        <p>{t.disclaimer}</p>
        <p style={{ marginTop: "6px" }}>
          Contact: <a href="mailto:hello@unilinx.org">hello@unilinx.org</a>
        </p>
        <p style={{ marginTop: "6px", fontSize: "12px", opacity: 0.6 }}>© {new Date().getFullYear()} Unilinx</p>
      </footer>
      <button
  data-tally-open="wa8MYb"
  data-tally-emoji-text="👋"
  data-tally-emoji-animation="wave"
  className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
>
  Take the 5-minute survey
</button>
    </main>
    
  );
}
