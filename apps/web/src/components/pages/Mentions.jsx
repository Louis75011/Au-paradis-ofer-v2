// apps/web/src/components/pages/Mentions.jsx
import { Link } from "react-router-dom";

export default function Mentions() {
  return (
    <div className="page">
      <div className="legal-content">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        <p>
          <strong>Au Paradis O&apos;Fer</strong>
          <br />
          Association loi 1901
          <br />
          15 Rue de Royon, 62310 Sains-lès-Fressin
          <br />
          Téléphone : 06 48 34 22 53
          <br />
          Courriel : <a href="mailto:au.paradis.o.fer@gmail.com">au.paradis.o.fer@gmail.com</a>
        </p>

        <p>
          <strong>Directeur de la publication :</strong> Louis Rouanet
        </p>

        <h2>Développement et conception technique</h2>
        <p>
          <strong>
            <a href="https://arx-systema.fr/" target="_blank" rel="noopener noreferrer">
              Arx Systema — France
            </a>
          </strong>
          <br />
        </p>
        <p>
          <strong>
            <a href="https://www.youtube.com/@arxsystema" target="_blank" rel="noopener noreferrer">
              Arx Systema — Vidéos
            </a>
          </strong>
          <br />
        </p>
        <p>
          Contact développeur :{" "}
          <a href="mailto:louis.rouanet@arx-systema.fr">louis.rouanet@arx-systema.fr</a>
        </p>

        <h2>Hébergement</h2>
        <p>
          <strong>OVHcloud</strong>
          <br />
          2 rue Kellermann – 59100 Roubaix – France
          <br />
          Téléphone : 1007
        </p>

        <h2>Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété exclusive d&apos;Au
          Paradis O&apos;Fer ou de ses partenaires. Toute reproduction, représentation, modification, publication,
          transmission ou dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit,
          et sur quelque support que ce soit est interdite sans autorisation écrite préalable.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Au Paradis O&apos;Fer s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations
          diffusées sur ce site. Toutefois, des erreurs ou omissions peuvent survenir. Le visiteur devra s&apos;assurer
          de l&apos;exactitude des informations et signaler toute modification nécessaire.
        </p>

        <h2>Liens hypertextes</h2>
        <p>
          Le site peut contenir des liens vers d&apos;autres sites internet. Au Paradis O&apos;Fer ne saurait être tenu
          responsable du contenu de ces sites externes.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des
          données vous concernant. Pour exercer ces droits, contactez-nous à : au.paradis.o.fer@gmail.com
        </p>
        <p>
          Pour plus d&apos;informations, consultez notre <Link to="/confidentialite" style={{ color: "var(--color-brand-sky)" }}>politique de confidentialité</Link>.
        </p>
      </div>
    </div>
  );
}
