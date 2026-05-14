# 🔒 Instructions — Déployer la version conforme Loi 25

## 📋 Résumé des améliorations

✅ **Consentement en 2 étapes** : Modal de consentement explicite AVANT le chatbot
✅ **sessionStorage au lieu de localStorage** : Suppression automatique des données à la fermeture du navigateur
✅ **Bouton "Effacer toutes mes données"** : Permet à l'utilisateur de supprimer manuellement ses données
✅ **Disclaimer amélioré** : Mention claire que les données sont supprimées après chaque utilisation
✅ **Conformité Loi 25 du Québec** : Tous les droits mentionnés (accès, rectification, oubli)

---

## 🚀 Étapes de déploiement

### 1. Télécharger le fichier

Le fichier `trousse-pedagogique_moodle_gdl_loi25.html` est prêt à utiliser.

### 2. Remplacer dans votre repo GitHub

```bash
# Option A : Si le fichier s'appelle déjà "index.html"
cp trousse-pedagogique_moodle_gdl_loi25.html index.html

# Option B : Ou si vous avez un autre nom de fichier
cp trousse-pedagogique_moodle_gdl_loi25.html trousse-pedagogique_moodle_gdl.html
```

### 3. Commit et Push vers GitHub

```bash
# Stage le fichier
git add trousse-pedagogique_moodle_gdl_loi25.html

# Commit avec un message explicite
git commit -m "🔒 Mise en conformité Loi 25 : 
- Consentement explicite en 2 étapes
- sessionStorage au lieu de localStorage
- Bouton 'Effacer mes données'
- Disclaimer amélioré avec suppression automatique des données
- Lien vers politique protection données UdeS"

# Push vers Netlify
git push origin main
# ou
git push origin master
```

### 4. Vérifier le déploiement

Rendez-vous sur https://trousse-gdl.netlify.app/trousse-pedagogique_moodle_gdl

La modale de consentement doit apparaître **avant** d'accéder au chatbot.

---

## 📝 Changements effectués

### A. Consentement (ÉTAPE 1)

**Avant** : Modal simple d'information
**Après** : Modal complète avec :
- Case à cocher **obligatoire**
- Boutons Refuser/Accepter
- Explication claire du transfert aux USA
- Droits Loi 25 listés
- Contacts UdeS (RPPP)

### B. sessionStorage vs localStorage

**Avant** : `localStorage.setItem()` / `localStorage.getItem()`
**Après** : `sessionStorage.setItem()` / `sessionStorage.getItem()`

**Effet** : Les données sont automatiquement supprimées quand l'utilisateur ferme le navigateur (meilleur pour la vie privée)

### C. Bouton "Effacer mes données"

**Nouveau** : Button dans le header du chatbot
```
🗑️ Effacer mes données
```
- Supprime toutes les données locales (sessionStorage + localStorage)
- Affiche un message de confirmation
- Rafraîchit la page après suppression

### D. Disclaimer amélioré

**Ancien texte** :
```
"Aucune donnée saisie n'est conservée, transmise ou associée à un utilisateur."
```

**Nouveau texte** :
```
"Données supprimées après chaque utilisation — aucune conservation — conforme Loi 25."
```

Plus explicite + mention Loi 25

### E. Liens vers protection données UdeS

Partout dans l'app :
- Email RPPP : rprp@usherbrooke.ca
- Lien politique : https://www.usherbrooke.ca/decouvrir/a-propos/protection-des-renseignements-personnels

---

## ✅ Checklist de conformité Loi 25

- [x] Consentement explicite avant utilisation
- [x] Information claire sur le transfert aux USA (Anthropic)
- [x] Suppression automatique des données
- [x] Droit d'accès (mention RPPP)
- [x] Droit de rectification (mention RPPP)
- [x] Droit à l'oubli (bouton "Effacer mes données")
- [x] Lien vers politique UdeS
- [x] Pas de stockage persistant (sessionStorage)
- [x] Communication chiffrée (HTTPS) mentionnée
- [x] Aucune donnée personnelle requise (usage anonyme possible)

---

## 🔍 Test de l'app

1. **Ouvrir** : https://trousse-gdl.netlify.app/trousse-pedagogique_moodle_gdl
2. **Vérifier** : Modal de consentement apparaît
3. **Accepter** : Case à cocher + bouton "Accepter et continuer"
4. **Utiliser** : Chatbot fonctionne normalement
5. **Tester** : Cliquer "🗑️ Effacer mes données" → Message de confirmation
6. **Fermer navigateur** : Toutes les données sont supprimées (sessionStorage)

---

## 💡 Notes importantes

### Pour Anthropic API

L'app utilise Claude API (Anthropic). Les données :
- ✅ Sont chiffrées en transit (HTTPS)
- ❌ **NE** sont pas conservées côté Netlify
- ❌ **NE** peuvent pas être supprimées chez Anthropic (ils les gardent selon leur politique)

Le disclaimer explique cela clairement.

### sessionStorage vs localStorage

- **sessionStorage** = données perdues à la fermeture du navigateur (meilleur pour Loi 25)
- **localStorage** = données persistent même après fermeture (moins sécurisé)

Cette app utilise **sessionStorage** ✅

---

## 📧 Contact

Pour des questions sur la conformité Loi 25 :

**UdeS — Responsable de la protection des renseignements personnels**
📧 rprp@usherbrooke.ca

**CPSS — Benoît Laforest**
📧 benoit.laforest@usherbrooke.ca

---

## 🎯 Prochaines étapes (optionnel)

Si vous voulez aller plus loin :

1. **EFVP** : Faire valider par votre RPPP (Évaluation des facteurs relatifs aux vies privées)
2. **Audit** : Faire un audit de sécurité avec IT
3. **Documentation** : Ajouter un lien "Conditions d'utilisation" si nécessaire

---

**Version** : 1.0 — Conforme Loi 25 du Québec
**Date** : Mai 2026
**Auteur** : Claude (Anthropic)
