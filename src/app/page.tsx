"use client";
import { useState } from "react";

type Lang = "en" | "ja" | "zh";

const text = {
  en: {
    title: "Unilinx — University Links Network",
    desc: "Learn · Build · Connect — a neutral education & collaboration hub for campus Web3/Tech.",
    cta: "Join the community",
    disclaimer: "Unilinx provides education & events only. No investment advice. No asset custody.",
  },
  ja: {
    title: "Unilinx — University Links Network",
    desc: "学ぶ・作る・つながる —— 大学のための中立的な Web3/Tech 教育・協業ハブ。",
    cta: "コミュニティに参加",
    disclaimer: "Unilinx は教育・イベント情報のみを提供します。投資助言や資産管理は行いません。",
  },
  zh: {
    title: "Unilinx — 大学连接网络",
    desc: "学 · 做 · 联 —— 面向校园的中立 Web3/Tech 教育与协作平台。",
    cta: "加入社区",
    disclaimer: "本网站仅提供教育与活动信息，不提供投资建议，不托管任何资产。",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = text[lang];

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #eee", padding: "12px 20px", display: "flex", justifyContent: "space-between" }}>
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
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: 700 }}>{t.title}</h1>
        <p style={{ marginTop: "12px", opacity: 0.8 }}>{t.desc}</p>
        <div style={{ marginTop: "20px" }}>
          <a href="https://tally.so/r/your-form" style={{ padding: "12px 18px", border: "1px solid black", borderRadius: "8px", textDecoration: "none", color: "black" }}>
            {t.cta}
          </a>
        </div>
        <p style={{ marginTop: "10px", fontSize: "12px", opacity: 0.6 }}>
          see you soon.
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
    </main>
  );
}