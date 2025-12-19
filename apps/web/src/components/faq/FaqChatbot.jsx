import { useEffect, useMemo, useRef, useState } from "react";
import "../../styles/components/faq-chat.scss";

/**
 * Normalisation légère pour matcher les phrases utilisateur.
 */
function norm(s = "") {
    return s
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/[^a-z0-9\s']/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function pickTopAnswer(faqData, message) {
    const q = norm(message);
    if (!q) return null;

    // Règles “rapides” très utiles (avant scoring FAQ)
    const rules = [
        {
            test: /(meteo|pluie|intemper|temps|orage|neige|froid|canicule|vent)/,
            answer:
                "Les séances ont lieu par tous les temps : notre manège semi-couvert permet de maintenir l’activité même sous la pluie. En cas de conditions exceptionnelles, nous vous contacterons pour reporter.",
        },
        {
            test: /(combien|nombre|personne|participants|groupe|famille|enfant|enfants)/,
            answer:
                "Nous proposons : individuel, duo, famille (3–4 personnes), groupe (jusqu’à 4 personnes), écoles (jusqu’à 6 enfants). Les séances découverte enfants accueillent jusqu’à 6 enfants.",
        },
        {
            test: /(tenue|chauss|bottes|vetements|habits|tongs|talons)/,
            answer:
                "Prévoyez des vêtements confortables et adaptés à la saison. Chaussures fermées obligatoires (baskets, bottines). Évitez talons et tongs.",
        },
        {
            test: /(annul|report|rembours|imprevu)/,
            answer:
                "En cas d’imprévu, merci de prévenir au moins 48h à l’avance afin de pouvoir repositionner la séance. Les conditions sont précisées lors de la réservation.",
        },
        {
            test: /(age|ages|a partir|3 ans|adulte|senior|aine)/,
            answer:
                "Nos séances sont adaptées à tous les âges : enfants dès 3 ans, adolescents, adultes et aînés. Nous ajustons l’approche selon les besoins de chacun.",
        },
        {
            test: /(experience|debutant|jamais|peur|connais pas)/,
            answer:
                "Aucune expérience n’est requise : nos séances sont prévues pour tous, et nos chevaux/poneys sont habitués au contact humain, avec un encadrement rassurant.",
        },
        {
            test: /(reserver|reservation|rdv|prendre rendez vous|contact)/,
            answer:
                "Pour réserver : téléphone (06 48 34 22 53) ou courriel (au.paradis.o.fer@gmail.com). Vous pouvez aussi passer par le formulaire de contact du site.",
        },
    ];

    for (const r of rules) {
        if (r.test.test(q)) return r.answer;
    }

    // Scoring simple sur faqData : intersection de mots
    const words = new Set(q.split(" ").filter((w) => w.length >= 3));
    if (!words.size) return null;

    let best = { score: 0, item: null };

    for (const item of faqData ?? []) {
        const hay = norm(`${item.question} ${item.answer}`);
        let score = 0;
        for (const w of words) {
            if (hay.includes(w)) score += 1;
        }
        // Bonus si la question matche plus fortement
        const qOnly = norm(item.question);
        for (const w of words) {
            if (qOnly.includes(w)) score += 1;
        }

        if (score > best.score) best = { score, item };
    }

    // Seuil minimal pour éviter des réponses hors sujet
    if (best.score >= 2 && best.item) return best.item.answer;

    return null;
}

export default function FaqChatbot({ faqData = [], toEmail = "au.paradis.o.fer@gmail.com" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState(() => [
        {
            role: "bot",
            text:
                "Bonjour. Posez votre question (météo, tenue, nombre de participants, annulation, réservation…).",
        },
    ]);

    const listRef = useRef(null);

    const quickChips = useMemo(
        () => [
            "Les séances ont lieu par tous les temps ?",
            "Combien de personnes par séance ?",
            "Quelle tenue prévoir ?",
            "Comment réserver ?",
            "Annulation / report ?",
        ],
        []
    );

    useEffect(() => {
        if (!isOpen) return;
        // scroll bas
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, isOpen]);

    const send = (text) => {
        const t = (text ?? input).trim();
        if (!t) return;

        setMessages((m) => [...m, { role: "user", text: t }]);
        setInput("");

        const answer = pickTopAnswer(faqData, t);

        window.setTimeout(() => {
            if (answer) {
                setMessages((m) => [...m, { role: "bot", text: answer }]);
                return;
            }

            setMessages((m) => [
                ...m,
                {
                    role: "bot",
                    text:
                        "Je n’ai pas trouvé une réponse certaine. Souhaitez-vous écrire au contact ?",
                },
                {
                    role: "bot",
                    text: `Vous pouvez nous joindre : ${toEmail} (ou via le formulaire de contact).`,
                },
            ]);
        }, 250);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send();
    };

    return (
        <div className={`faq-chat ${isOpen ? "is-open" : ""}`} aria-live="polite">
            {/* Bulle */}
            <button
                type="button"
                className="faq-chat__fab"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
            >
                {isOpen ? (
                    <span className="faq-chat__fabClose">×</span>
                ) : (
                    <img
                        src="/images/cheval-face-gauche.png"
                        alt=""
                        className="faq-chat__fabIcon"
                        draggable="false"
                        loading="eager"
                        decoding="async"
                    />
                )}
            </button>


            {/* Fenêtre */}
            <div className="faq-chat__panel" role="dialog" aria-label="Assistant FAQ">
                <div className="faq-chat__header">
                    <div className="faq-chat__avatarWrap">
                        <img
                            src="/images/cheval-face-gauche.png"
                            alt=""
                            className="faq-chat__avatar"
                            draggable="false"
                        />
                        <div>
                            <div className="faq-chat__title">Assistant FAQ</div>
                            <div className="faq-chat__subtitle">Je réponds à vos questions pratiques</div>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="faq-chat__close"
                        onClick={() => setIsOpen(false)}
                        aria-label="Fermer"
                    >
                        ×
                    </button>
                </div>


                <div className="faq-chat__chips">
                    {quickChips.map((c) => (
                        <button key={c} type="button" className="faq-chat__chip" onClick={() => send(c)}>
                            {c}
                        </button>
                    ))}
                </div>

                <div className="faq-chat__messages" ref={listRef}>
                    {messages.map((m, idx) => (
                        <div key={idx} className={`faq-chat__msg ${m.role === "user" ? "is-user" : "is-bot"}`}>
                            {m.text}
                        </div>
                    ))}
                </div>

                <form className="faq-chat__form" onSubmit={onSubmit}>
                    <input
                        className="faq-chat__input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Écrivez votre question…"
                        aria-label="Votre question"
                    />
                    <button className="faq-chat__send" type="submit">
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}
