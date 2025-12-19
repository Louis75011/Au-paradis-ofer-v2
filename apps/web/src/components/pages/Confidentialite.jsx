// apps/web/src/components/pages/Confidentialite.jsx
import { Link } from "react-router-dom";
import "../../styles/pages/legal-pages.scss";

export default function Confidentialite() {
  return (
    <div className="page">
      <div className="legal-content">
        <h1>Politique de confidentialité</h1>

        <h2>Responsable du traitement</h2>
        <p>
          <strong>Au Paradis O&apos;Fer</strong>
          <br />
          15 Rue de Royon, 62310 Sains-lès-Fressin
          <br />
          Courriel : au.paradis.o.fer@gmail.com
        </p>

        <h2>Données collectées</h2>
        <p>Nous collectons les données suivantes :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone (si communiqué)</li>
          <li>Contenu des messages envoyés via le formulaire de contact</li>
        </ul>

        <h2>Finalité du traitement</h2>
        <p>Les données collectées sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de renseignements</li>
          <li>Gérer les réservations de séances</li>
          <li>Assurer le suivi de votre dossier</li>
          <li>Vous informer de nos actualités (avec votre consentement)</li>
        </ul>

        <h2>Base légale</h2>
        <p>Le traitement de vos données repose sur :</p>
        <ul>
          <li>Votre consentement (formulaire de contact)</li>
          <li>L&apos;exécution d&apos;un contrat (réservation de séances)</li>
          <li>L&apos;intérêt légitime (amélioration de nos services)</li>
        </ul>

        <h2>Durée de conservation</h2>
        <p>Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités mentionnées ci-dessus :</p>
        <ul>
          <li>Données de contact : 3 ans après le dernier contact</li>
          <li>Données de réservation : durée légale de conservation comptable</li>
        </ul>

        <h2>Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d&apos;accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d&apos;opposition</li>
        </ul>
        <p>Pour exercer ces droits, contactez-nous à : au.paradis.o.fer@gmail.com</p>

        <h2>Destinataires des données</h2>
        <p>
          Vos données sont destinées uniquement à l&apos;équipe d&apos;Au Paradis O&apos;Fer. Elles ne sont jamais vendues ni
          transmises à des tiers, sauf obligation légale.
        </p>

        <h2>Sécurité</h2>
        <p>
          Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir la sécurité
          de vos données et empêcher leur déformation, endommagement ou accès par des tiers non autorisés.
        </p>

        <h2>Réclamation</h2>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-brand-sky)" }}>
            www.cnil.fr
          </a>
        </p>

        <p style={{ marginTop: "2rem" }}>
          Voir aussi :{" "}
          <Link to="/cookies" style={{ color: "var(--color-brand-sky)" }}>
            Politique cookies
          </Link>
        </p>
      </div>
    </div>
  );
}
