# Guide PC pour modélisation 3D

Site statique d'aide au choix d'un PC fixe + écran pour études en modélisation 3D (Blender, Maya, 3ds Max, ZBrush, Substance Painter).

Prix vérifiés en **mai 2026** chez les enseignes françaises : LDLC, Materiel.net, Topachat, idealo.fr, Amazon.fr.

## Fonctionnalités

- **13 PC préassemblés** classés par prix avec pros/cons détaillés
- **3 builds custom** (Budget 1 700 € · Équilibré 2 800 € · Performance 4 000 €)
- **10 écrans** sélectionnés pour la 3D (sRGB/DCI-P3, calibration usine)
- **Filtres dynamiques** : prix, marque GPU (MSI/ASUS/Gigabyte/Gainward/PNY), RAM, VRAM, CPU
- **Modal de détail** avec configuration complète
- **Section "Marché 2026"** : alertes sur la crise NAND, hausse DDR5, RTX 50 au-dessus du MSRP

## Stack

100 % statique : HTML + CSS + JS vanilla, aucune dépendance, aucun build.

```
index.html  → structure
style.css   → design sombre, responsive
data.js     → catalogue (PC, écrans, builds)
app.js      → filtres / tri / modal
```

## Déploiement GitHub Pages

1. Pousser sur la branche `main` (ou `master`)
2. Settings → Pages → Source : `Deploy from a branch` → Branche `main` / `root`
3. Le site est disponible à `https://<user>.github.io/<repo>/`

Aucun build, aucune CI : GitHub Pages sert directement les fichiers.

## Local

```bash
# n'importe quel serveur statique
python3 -m http.server 8000
# puis http://localhost:8000
```

## Mise à jour des prix

Toutes les données vivent dans `data.js`. Éditer les champs `price` et `priceNote`, sauvegarder, recharger. Pas de rebuild.
