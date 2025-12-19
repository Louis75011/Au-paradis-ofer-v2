export default function HomeReviewsSection({ avis = [] }) {
    // témoignages
    return (
        <section className="avis-container">
            <h2 className="section-title">Ce qu&apos;ils disent de nous</h2>
            <div className="avis-grid">
                {avis.map((a, idx) => (
                    <div className="avis-card" key={`${a.author ?? "Auteur"}-${idx}`}>
                        <div className="avis-author">{a.author}</div>
                        <div className="avis-text">{a.text}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
