// apps/web/src/components/pages/Faq.jsx
import { useState } from "react";
import { faqData } from "../../data/siteData.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="page">
      <section>
        <h1 className="section-title">Questions fréquentes</h1>

        <div className="faq-container">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className="faq-item" key={item.question}>
                <div
                  className={`faq-question ${isOpen ? "active" : ""}`}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                >
                  {item.question}
                </div>
                <div className={`faq-answer ${isOpen ? "active" : ""}`}>
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
