Vue d'ensemble
Système de déploiement infaillible pour site statique HTML/CSS/JS.
Préproduction : Déploiement simple
Production : Déploiement avec rollback automatique en cas d'erreur


🚀 Utilisation WORKFLOW
VSCODE DEBIAN
git aa': git aa && git cm "" && git ps
SSHAPO
cd ~
./deploy-preprod.sh
./deploy-prod.sh
# Répondre "oui" à la confirmation


Architecture :
text
GitHub (Au-paradis-ofer-v2)
    ↓
/root/apps/Au-paradis-ofer-preprod  →  /var/www/au-paradis-ofer-preprod-v2  →  https://preprod.au-paradis-ofer.fr
/root/apps/Au-paradis-ofer          →  /var/www/au-paradis-ofer-v2          →  https://au-paradis-ofer.fr
🚀 Installation des scripts
1. Créer les scripts
bash
# Sur le serveur SSH
cd ~

# Télécharger les scripts (ou créer manuellement)
# deploy-preprod.sh et deploy-prod.sh
2. Rendre les scripts exécutables
bash
chmod +x ~/deploy-preprod.sh
chmod +x ~/deploy-prod.sh
3. Vérifier que les chemins sont corrects
bash
# Vérifier les dossiers existent
ls -la ~/apps/Au-paradis-ofer-preprod/
ls -la ~/apps/Au-paradis-ofer/
ls -la /var/www/au-paradis-ofer-preprod-v2/
ls -la /var/www/au-paradis-ofer-v2/
📦 Workflow Déploiement
Étapes générales (identiques pour preprod et prod)
Prérequis → Vérification des dossiers et outils

Git Pull → Récupère les changements de GitHub

Backup → Sauvegarde la version antérieure

Copie → Copie les fichiers vers /var/www/

Permissions → Configure les accès (www-data)

Nginx → Recharge le serveur web

Tests → Vérifie HTTP 200, CSS, JS, images

En cas d'erreur (PROD uniquement)
Rollback automatique : Restaure la version antérieure

🔧 Déploiement Préproduction
Cas courant : Nouveau code sur GitHub
bash
# 1. Sur votre machine locale
git add .
git commit -m "description du changement"
git push origin main

# 2. Sur le serveur
cd ~
./deploy-preprod.sh

# 3. Vérifier
curl -I https://preprod.au-paradis-ofer.fr/
# → Doit retourner HTTP/2 200
Résultat attendu
text
[INFO] 🚀 Début du déploiement PRÉPRODUCTION
[✓] Prérequis OK
[✓] Git pull effectué : 9fc52ff (HEAD -> main)
[✓] Backup PREPROD créé : /root/backups/au-paradis-ofer-preprod-v2_20251127_102030.tar.gz
[✓] Fichiers copiés
[✓] Permissions configurées
[✓] Config nginx OK
[✓] Nginx reloadé
[✓] HTTP 200 OK - Site accessible
[✓] index.html présent
[✓] Fichiers CSS présents
[✓] Fichiers JS présents
[✓] Fichiers images présents

════════════════════════════════════════════
  DÉPLOIEMENT PRÉPRODUCTION RÉUSSI ✓
════════════════════════════════════════════
  URL : https://preprod.au-paradis-ofer.fr/
  Commit : 9fc52ff (HEAD -> main, origin/main)
  Date : 27/11/2025 10:20:30
  Chemin : /var/www/au-paradis-ofer-preprod-v2
  Backup : /root/backups/au-paradis-ofer-preprod-v2_20251127_102030.tar.gz
════════════════════════════════════════════
🔒 Déploiement Production
⚠️ IMPORTANT : À faire APRÈS test en préproduction
Vérifier que preprod fonctionne correctement
bash
# Tester preprod d'abord
curl -I https://preprod.au-paradis-ofer.fr/

# Naviguer pour vérifier :
# - Menu burger responsive
# - Tous les éléments visuels
# - Pas d'erreur console (F12)
Déployer en production
bash
cd ~
./deploy-prod.sh

# Le script vous demande confirmation :
# ⚠️  ATTENTION - DÉPLOIEMENT PRODUCTION
# Vous êtes sur le point de déployer en PRODUCTION
# URL: https://au-paradis-ofer.fr
# Un rollback automatique sera activé en cas d'erreur
# 
# Êtes-vous sûr ? (oui/non) : oui
Résultat attendu (succès)
text
[INFO] 🚀 Début du déploiement PRODUCTION
[⚠] ⚠️  ATTENTION - DÉPLOIEMENT PRODUCTION
[✓] Déploiement confirmé
[✓] Prérequis OK
[✓] Git pull effectué : 9fc52ff (HEAD -> main)
[✓] Backup PROD créé : /root/backups/au-paradis-ofer-v2_20251127_102100.tar.gz
[✓] Fichiers copiés
[✓] Permissions configurées
[✓] Config nginx OK
[✓] Nginx reloadé
[✓] HTTP 200 OK - Site accessible
[✓] Tests réussis

════════════════════════════════════════════
  DÉPLOIEMENT PRODUCTION RÉUSSI ✓
════════════════════════════════════════════
  URL : https://au-paradis-ofer.fr/
  Commit : 9fc52ff (HEAD -> main, origin/main)
  Date : 27/11/2025 10:21:00
  Chemin : /var/www/au-paradis-ofer-v2
  Backup (rollback) : /root/backups/au-paradis-ofer-v2_20251127_102100.tar.gz
════════════════════════════════════════════
Résultat si erreur (rollback)
text
[ERROR] ⚠️  ERREUR DÉTECTÉE - ROLLBACK EN COURS...
[INFO] Restauration depuis /root/backups/au-paradis-ofer-v2_20251127_102100.tar.gz...
[✓] Rollback effectué - PROD restaurée à l'état antérieur

════════════════════════════════════════════
  DÉPLOIEMENT ÉCHOUÉ - ROLLBACK EFFECTUÉ
════════════════════════════════════════════
✅ Checklist Déploiement Complet
Avant de commencer
 Tous les changements sont commitées et pushés sur GitHub

 Vous avez testé localement (localhost:5500 ou équivalent)

 Pas d'erreurs console (F12 → Console)

 Pas de fichiers non trackés (git status propre)

Déploiement Préproduction
bash
cd ~
./deploy-preprod.sh
# Résultat : [✓] DÉPLOIEMENT PRÉPRODUCTION RÉUSSI
Test Préproduction
 Ouvrir https://preprod.au-paradis-ofer.fr/

 Nav privée (Ctrl+Shift+P) pour pas de cache

 Vérifier menu burger responsive

 Vérifier tous les éléments se chargent

 Vérifier pas d'erreurs console (F12)

 Vérifier images présentes

 Vérifier CSS appliqué

Déploiement Production
bash
cd ~
./deploy-prod.sh
# Répondre "oui" à la confirmation
# Résultat : [✓] DÉPLOIEMENT PRODUCTION RÉUSSI
Vérification Production
 Ouvrir https://au-paradis-ofer.fr/

 Nav privée (cache vidé)

 Vérifier identique à preprod

 Tester menu burger

 Tester responsive (F12 → Mobile)

 Vérifier pas d'erreurs

🔍 Dépannage
Script ne s'exécute pas
bash
# Vérifier permissions
ls -la ~/deploy-*.sh

# Rendre exécutable
chmod +x ~/deploy-preprod.sh
chmod +x ~/deploy-prod.sh

# Tester
./deploy-preprod.sh --help  # Devrait afficher l'aide
Erreur : "Permission denied"
bash
# Le script a besoin de sudo
# Vérifier que www-data peut lire les fichiers
sudo ls -la /var/www/au-paradis-ofer-v2/index.html

# Reconfigurer permissions
sudo chown -R www-data:www-data /var/www/au-paradis-ofer-v2/
sudo chmod -R 755 /var/www/au-paradis-ofer-v2/
Site affiche "500 Internal Server Error"
bash
# Vérifier logs nginx
sudo tail -20 /var/log/nginx/au-paradis-ofer-v2-error.log

# Vérifier que index.html existe
ls -la /var/www/au-paradis-ofer-v2/index.html

# Rechargement nginx
sudo nginx -t  # Tester config
sudo nginx -s reload  # Recharger
Rollback échoué en production
bash
# Vérifier backup existe
ls -la /root/backups/ | grep au-paradis

# Restaurer manuellement
tar -xzf /root/backups/au-paradis-ofer-v2_XXXXXX.tar.gz -C /var/www/
sudo chown -R www-data:www-data /var/www/au-paradis-ofer-v2/
sudo nginx -s reload
📊 Monitoring
Vérifier que tout tourne
bash
# État des services
pm2 list
sudo systemctl status nginx

# Vérifier accès web
curl -I https://au-paradis-ofer.fr/
curl -I https://preprod.au-paradis-ofer.fr/

# Logs en temps réel
sudo tail -f /var/log/nginx/au-paradis-ofer-v2-access.log
pm2 logs
Vérifier derniers déploiements
bash
# Afficher les backups
ls -lh /root/backups/ | grep au-paradis

# Voir quel commit est actif
cd ~/apps/Au-paradis-ofer && git log -1 --oneline
cd ~/apps/Au-paradis-ofer-preprod && git log -1 --oneline
📚 Schéma du workflow
text
┌─────────────────────────────────────────────────────────────────┐
│                         WORKFLOW COMPLET                         │
└─────────────────────────────────────────────────────────────────┘

1. DÉVELOPPEMENT LOCAL
   ├─ Modifier code
   ├─ Tester localhost:5500
   ├─ Git add/commit
   └─ Git push origin main

2. PRÉPRODUCTION
   ├─ ./deploy-preprod.sh
   ├─ Tests (preprod.au-paradis-ofer.fr)
   └─ ✓ Valider changements

3. PRODUCTION
   ├─ ./deploy-prod.sh
   ├─ Backup automatique
   ├─ Si erreur → Rollback auto
   └─ ✓ Site en live

4. MONITORING
   ├─ Vérifier logs
   ├─ Tester accès
   └─ Surveiller erreurs
📞 Support & Questions
Scripts fournis
deploy-preprod.sh - Déploiement préproduction

deploy-prod.sh - Déploiement production avec rollback

Vérifications régulières
bash
# Chaque semaine
sudo tail -100 /var/log/nginx/*.log | grep error

# Chaque mois
du -sh /root/backups/  # Vérifier espace utilisé
En cas de problème critique
bash
# Arrêt d'urgence
pm2 stop all
sudo systemctl stop nginx

# Diagnostic complet
cd ~ && ./deploy-prod.sh --debug  # Si implémenté
Version : 1.0
Date : 27 novembre 2025
Auteur : Système de déploiement
État : Opérationnel ✓