// apps/web/src/components/pages/Apropos.jsx
export default function Apropos() {
    return (
        <div className="page">
            <section>
                <h1 className="section-title">À propos — Au Paradis O&apos;Fer</h1>

                <div className="section-intro">
                    <p>
                        Nichée au cœur des Hauts-de-France, notre structure Au Paradis O&apos;Fer est un havre de sérénité où la
                        relation entre l&apos;homme et le cheval prend toute sa dimension. Ici, le rythme apaisé de la campagne se
                        mêle au souffle des crinières, offrant à chacun un moment de ressourcement authentique.
                    </p>

                    <p>
                        Nous proposons des séances de médiation animale et des animations équestres adaptées à tous les âges et à
                        toutes les situations : enfants en quête de découverte, adolescents désireux de gagner confiance, adultes et
                        aînés recherchant détente et réconfort, ou encore personnes faisant face à des difficultés sociales ou de
                        santé.
                    </p>

                    <p>
                        Notre démarche est fondée sur l&apos;écoute, le respect et la chaleur humaine. Les chevaux et poneys
                        deviennent des compagnons de chemin, aidant à renouer avec soi-même, à vivre pleinement l&apos;instant
                        présent, et à goûter la beauté simple de la nature.
                    </p>

                    <p>
                        Notre site évolue : vous y trouverez un calendrier interactif, des fiches pratiques, une galerie photo/vidéo
                        et un espace de réservation en ligne pour faciliter votre venue.
                    </p>

                    <p>
                        Que vous veniez pour une initiation, un moment de bien-être ou un projet d&apos;accompagnement, Au Paradis
                        O&apos;Fer vous accueille avec bienveillance et passion.
                    </p>

                    <p style={{ fontSize: "0.9rem", marginTop: "2rem" }}>
                        <em>
                            Pour en savoir plus sur la gestion des données personnelles et des cookies, vous pouvez consulter notre{" "}
                            <a href="/cookies" style={{ color: "var(--color-brand-sky)" }}>
                                politique dédiée
                            </a>{" "}
                            conforme au RGPD.
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
