// apps/web/src/components/pages/Apropos.jsx
export default function Apropos() {
    return (
        <div className="page">
            <section>
                <h1 className="section-title">À propos — Au Paradis O&apos;Fer</h1>

                <div className="apropos-intro">
                    <p>
                        Nichée au cœur des <strong>Hauts-de-France</strong>,{" "}
                        <strong>Au Paradis O&apos;Fer</strong> est un havre de sérénité où la{" "}
                        <strong>relation entre l&apos;homme et le cheval</strong> prend toute sa dimension.
                        Le rythme apaisé de la campagne y offre un moment de ressourcement authentique.
                    </p>

                    <p>
                        Nous proposons des <strong>séances de médiation animale</strong> et des{" "}
                        <strong>animations équestres</strong>, adaptées à tous les âges et à toutes les
                        situations, de la découverte à l’accompagnement personnalisé.
                    </p>

                    <p>
                        Notre démarche repose sur <strong>l’écoute</strong>, le{" "}
                        <strong>respect</strong> et la <strong>chaleur humaine</strong>.
                        Les chevaux deviennent de véritables compagnons, aidant à renouer avec soi-même
                        et à vivre pleinement l’instant présent.
                    </p>

                    <p>
                        Le site évolue progressivement : <strong>calendrier interactif</strong>,{" "}
                        <strong>galerie photo et vidéo</strong> et{" "}
                        <strong>réservation en ligne</strong> facilitent votre venue.
                    </p>

                    <p>
                        Pour une initiation, un moment de bien-être ou un accompagnement,
                        <strong> Au Paradis O&apos;Fer</strong> vous accueille avec bienveillance et passion.
                    </p>

                    <p style={{ fontSize: "0.85rem", marginTop: "2rem", opacity: 0.85 }}>
                        <em>
                            Données personnelles et cookies :{" "}
                            <a href="/cookies" style={{ color: "var(--color-brand-sky)" }}>
                                politique dédiée
                            </a>{" "}
                            (RGPD).
                        </em>
                    </p>
                </div>


                <div className="about-diploma">
                    <h3 style={{ color: "var(--color-brand-dark)", marginBottom: "1rem" }}>Certification officielle</h3>
                    <p style={{ maxWidth: 700, margin: "0 auto 2rem" }}>
                        « Médiation par l&apos;animal en établissements de soin » délivrée par l&apos;Institut Français de
                        Zoothérapie et enregistrée au Répertoire Spécifique
                    </p>
                    <img src="/images/diplome-berangere-mediation-animal.jpg" alt="Diplôme de médiation animale" />
                </div>
            </section>
        </div>
    );
}
