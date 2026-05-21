// ============================================================
// Données : prix vérifiés en mai 2026 sur LDLC, Materiel.net,
// Topachat, Cybertek, Grosbill, HP Store FR, Dell.fr, Lenovo.fr,
// Fnac, Darty, Boulanger, Amazon.fr, idealo.fr, ledenicheur.fr.
// Sujets à variation.
// ============================================================

const PC_PREBUILT = [
  // ============= < 1 200 € =============
  {
    id: 'lenovo-loq-17irr9',
    name: 'Lenovo LOQ Tower 17IRR9',
    brand: 'Lenovo',
    vendor: 'Darty / Cdiscount',
    price: 899.99,
    priceNote: 'Prix cassé (PVC Lenovo 1 199 €)',
    tier: 'budget',
    inStock: true,
    cpu: 'Intel Core i5-14400 (10c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 16,
    ramType: 'DDR5',
    storage: 'SSD NVMe 512 Go',
    psu: '380W propriétaire',
    casing: 'Mini-tour 17L',
    warranty: '2 ans Lenovo',
    url: 'https://www.darty.com/nav/achat/ref/MC352507481.html',
    pros: [
      'Tarif imbattable < 900 € pour une RTX 5060 récente',
      'Châssis sobre adapté à un bureau étudiant',
      'SSD NVMe rapide, Wi-Fi 6E inclus'
    ],
    cons: [
      'RAM 16 Go : upgrade obligatoire à 32 Go pour Maya/ZBrush sérieux',
      'Alim propriétaire = aucun upgrade GPU futur',
      'Carte mère propriétaire non standard'
    ]
  },

  // ============= 1 200 - 1 400 € =============
  {
    id: 'lenovo-loq-26adr10',
    name: 'Lenovo LOQ Tower 26ADR10',
    brand: 'Lenovo',
    vendor: 'Lenovo.fr',
    price: 1199,
    priceNote: 'Config 32 Go / 1 To',
    tier: 'budget',
    inStock: true,
    cpu: 'AMD Ryzen 7 8745HX (8c/16t)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR5 5600',
    storage: 'SSD NVMe 1 To Gen4',
    psu: '500W propriétaire',
    casing: 'Mini-tour 26L',
    warranty: '2 ans Lenovo',
    url: 'https://www.lenovo.com/fr/fr/p/desktops/loq-desktops/lenovo-loq-tower-26adr10/91dfcto1wwfr1',
    pros: [
      '32 Go DDR5 d\'origine : prêt pour Blender et ZBrush étudiant',
      'Ryzen 7 8745HX excellent en multicœur (rendu Cycles CPU)',
      'Wi-Fi 7, design rajeuni 2025'
    ],
    cons: [
      'RTX 5060 8 Go VRAM : limite GPU rendering 4K',
      'Châssis 26L compact : upgrade GPU limité',
      'Alim 500W propriétaire'
    ]
  },
  {
    id: 'cybertek-beast',
    name: 'PC Gamer Cybertek BEAST',
    brand: 'Cybertek',
    vendor: 'Cybertek',
    price: 1259.99,
    priceNote: 'Expédié sous 24h',
    tier: 'budget',
    inStock: true,
    cpu: 'AMD Ryzen 7 5700X (8c/16t, AM4)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR4 RGB 3200',
    storage: 'SSD NVMe 1 To',
    psu: '650-750W typique Cybertek',
    casing: 'Assemblage Cybertek',
    warranty: '2 ans',
    url: 'https://www.cybertek.fr/univers-gamer/pc-assembles/pc-gamer-cybertek-2043-166271.aspx',
    pros: [
      '32 Go DDR4 dès l\'entrée de gamme : confortable pour Blender',
      'Ryzen 7 5700X 8 cœurs : bon en rendu CPU',
      'SSD NVMe 1 To pour caches et projets'
    ],
    cons: [
      'Plateforme AM4 / DDR4 en fin de vie',
      'VRAM 8 Go : plafonne sur scènes ZBrush HD',
      'Alim non précisée à confirmer'
    ]
  },
  {
    id: 'acer-nitro-50-n50-656',
    name: 'Acer Nitro 50 N50-656',
    brand: 'Acer',
    vendor: 'Acer Store / Fnac',
    price: 1349,
    priceNote: 'Vu à 1 345 € sur idealo, 1 399 € Fnac/Darty',
    tier: 'budget',
    inStock: true,
    cpu: 'Intel Core i5-14400F (10c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Acer',
    vram: 8,
    ram: 16,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '500W (non 80+ certifié)',
    casing: 'Mid-tower compacte',
    warranty: '2 ans Acer',
    url: 'https://store.acer.com/fr-fr/acer-nitro-pc-gamer-n50-656-noir-dg-e3wef-008',
    pros: [
      'Prix plancher honnête pour démarrer Blender',
      'RTX 5060 = CUDA/OptiX pour Cycles',
      'SSD 1 To direct, dispo immédiate'
    ],
    cons: [
      'Seulement 16 Go RAM (insuffisant ZBrush/Maya sérieux)',
      '8 Go VRAM limite gros assets',
      'Boîtier peu évolutif, alim limite'
    ]
  },

  // ============= 1 100 - 1 600 € (LDLC/Topachat) =============
  {
    id: 'topachat-velox',
    name: 'PC Gamer VELOX',
    brand: 'Topachat',
    vendor: 'Topachat',
    price: 1129.99,
    priceNote: 'En stock à Paris',
    tier: 'budget',
    inStock: true,
    cpu: 'AMD Ryzen 5 5500 (6c/12t)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR4 3200',
    storage: 'SSD Crucial E100 1 To NVMe Gen4',
    psu: 'Textorm TX650+ 650W 80+ Bronze',
    casing: 'Fox Spirit MG1 ARGB',
    warranty: '2 ans',
    url: 'https://www.topachat.com/pages/detail2_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta_puis_ref_est_in20030794.html',
    pros: [
      '32 Go RAM dès l\'entrée de gamme = viewport Blender confortable',
      'RTX 5060 avec CUDA + OptiX pour Cycles/Arnold',
      'SSD NVMe 1 To rapide'
    ],
    cons: [
      'CPU Ryzen 5 5500 (Zen 3) vieillissant',
      '8 Go VRAM plafonne en rendu GPU 4K',
      'DDR4 et plateforme AM4 non évolutives'
    ]
  },
  {
    id: 'ldlc-art-six-ti',
    name: 'LDLC PC ART SIX-TI',
    brand: 'LDLC',
    vendor: 'LDLC',
    price: 1219.95,
    priceNote: '1 319,95 € avec Win11',
    tier: 'budget',
    inStock: true,
    cpu: 'AMD Ryzen 5 5500 (6c/12t)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5060 Ti 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 16,
    ramType: 'DDR4',
    storage: 'SSD 1 To NVMe Gen4',
    psu: '650W',
    casing: 'Zalman i3 Neo V2',
    warranty: '2 ans LDLC',
    url: 'https://www.ldlc.com/fiche/PB00677382.html',
    pros: [
      '16 Go VRAM exceptionnels à ce prix',
      'Idéal sculpting ZBrush HD',
      'PC LDLC = montage maison français, évolutif'
    ],
    cons: [
      'RAM 16 Go trop juste, à upgrader vers 32 Go',
      'CPU Ryzen 5 5500 daté',
      'Marque AIB du GPU non précisée'
    ]
  },
  {
    id: 'acer-orion-3000-po3-660',
    name: 'Acer Predator Orion 3000 PO3-660',
    brand: 'Acer',
    vendor: 'Fnac / Cdiscount',
    price: 1499,
    priceNote: 'Config i7 / 32 Go / RTX 5060',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i7-14700F (20c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Acer',
    vram: 8,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '500W Acer',
    casing: 'Mid-tower 28L Predator',
    warranty: '2 ans Acer',
    url: 'https://www.fnac.com/PC-Gaming-Acer-Predator-Orion-3000-Intel-Core-i7-32-Go-RAM-1-To-SSD-Nvidia-GeForce-RTX-5060-Noir/a21825944/w-4',
    pros: [
      'i7-14700F + 32 Go DDR5 difficile à battre à ce prix',
      'Plateforme polyvalente Blender + Maya',
      'Finitions Predator soignées'
    ],
    cons: [
      'RTX 5060 limitée à 8 Go VRAM',
      'Alim 500W limite upgrade vers 5070 Ti+',
      'Carte mère mATX propriétaire'
    ]
  },
  {
    id: 'mat-skillshot',
    name: 'PC Gamer Skillshot (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 1499.95,
    priceNote: 'Garantie 5 ans, Win11 inclus',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 5 5500 (6c/12t)',
    cpuBrand: 'AMD',
    gpu: 'ASUS RTX 5060 Dual OC 8 Go',
    aib: 'ASUS',
    vram: 8,
    ram: 32,
    ramType: 'DDR4 3200 G.Skill',
    storage: 'SSD Kingston NV3 1 To NVMe Gen4',
    psu: 'Textorm TX 650W 80+ Bronze',
    casing: 'Fox Spirit MG1',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202506180076.html',
    pros: [
      'Garantie 5 ans Materiel.net',
      '32 Go DDR4 + Win11 préinstallé',
      'GPU ASUS Dual fiable'
    ],
    cons: [
      'CPU 5500 trop juste pour modélisation lourde',
      '8 Go VRAM limite le rendu GPU avec textures HD'
    ]
  },
  {
    id: 'mat-daemon',
    name: 'PC Gamer Daemon (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 1549.95,
    priceNote: 'AM5 évolutif',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 5 8400F (6c/12t, Zen 4)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5060 Ti 8 Go',
    aib: 'Gainward',
    vram: 8,
    ram: 16,
    ramType: 'DDR5 6000',
    storage: 'SSD Kingston NV3 1 To NVMe Gen4',
    psu: '650W 80+ Bronze',
    casing: 'Antec C5 ARGB',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202507300069.html',
    pros: [
      'CPU Zen 4 récent (AM5) : meilleur IPC que les Ryzen 5500/5700X',
      'Watercooling 360 mm Corsair Nautilus',
      'Plateforme AM5 évolutive (DDR5 6000)'
    ],
    cons: [
      '16 Go RAM seulement : insuffisant pour 3ds Max ou Maya',
      'RTX 5060 Ti 8 Go (et non 16 Go)'
    ]
  },
  {
    id: 'hp-omen-16l-tg03',
    name: 'HP Omen 16L TG03-0097nf',
    brand: 'HP',
    vendor: 'HP Store FR',
    price: 1599,
    priceNote: 'Prix lancement HP',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i5-14400F (10c/16t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 512 Go',
    psu: '500W',
    casing: 'Mini-tour 16L',
    warranty: '2 ans HP',
    url: 'https://www.hp.com/fr-fr/shop/product.aspx?id=bx8v9ea&opt=abf&sel=dtp',
    pros: [
      '32 Go DDR5 inclus dès le départ',
      'Châssis Omen 16L compact bien fini',
      'Wi-Fi 6E, HP On-Site possible'
    ],
    cons: [
      'i5-14400F moins fort que Ryzen 7 en rendu',
      'SSD 512 Go juste pour bibliothèques 3D',
      'Châssis 16L = pas de marge GPU futur'
    ]
  },
  {
    id: 'asus-rog-g22ch-71470f',
    name: 'ASUS ROG G22CH-71470F127W',
    brand: 'ASUS',
    vendor: 'Fnac',
    price: 1599,
    priceNote: 'Variable selon stock, parfois 1 699 €',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i7-14700F (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 4060 8 Go',
    aib: 'ASUS',
    vram: 8,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: 'SFX 500-650W ASUS',
    casing: 'SFF (~14 L, taille PS5)',
    warranty: '2 ans ASUS',
    url: 'https://www.fnac.com/G22CH-71470F127W-2-1-32G-1TB-SSD-PCIE-G4-Nvidia-GeForce-RTX-4060/a20699229/w-4',
    pros: [
      'i7-14700F excellent pour viewport Maya/ZBrush',
      '32 Go d\'office, finitions ROG premium',
      'Châssis ultra-compact'
    ],
    cons: [
      'RTX 4060 gen précédente, 8 Go VRAM faible',
      'SFF = très peu d\'évolutivité',
      'Thermals serrés sous charge longue'
    ]
  },
  {
    id: 'grosbill-crystal-core',
    name: 'PC Gamer Grosbill CRYSTAL CORE',
    brand: 'Grosbill',
    vendor: 'Grosbill',
    price: 1629.99,
    priceNote: 'Au lieu de 1 699,99 €',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i5-14600KF (14c, 5,3 GHz)',
    cpuBrand: 'Intel',
    gpu: 'ASUS Dual RTX 5060 Ti 16 Go OC',
    aib: 'ASUS',
    vram: 16,
    ram: 32,
    ramType: 'DDR4 3200 PNY XLR8',
    storage: 'SSD Kingston SNV3S 1 To NVMe Gen4',
    psu: 'M.RED 850W 80+ Gold',
    casing: 'M.RED Crystal Sea Mini',
    warranty: '2 ans',
    url: 'https://www.grosbill.com/univers-gamer/pc-assembles/pc-gamer-grosbill-2052-166034.aspx',
    pros: [
      'VRAM 16 Go : critique pour Blender/ZBrush scènes denses',
      'i5-14600KF excellent en single-thread',
      'Alim 850W Gold = marge upgrade GPU',
      'AIO 240 ARGB inclus'
    ],
    cons: [
      'DDR4 (limite débit vs DDR5)',
      'RTX 5060 Ti = entrée de gamme RT cores'
    ]
  },
  {
    id: 'msi-mag-infinite-s3-5060ti',
    name: 'MSI MAG Infinite S3 14NVM5-2873EU',
    brand: 'MSI',
    vendor: 'MSI Store FR',
    price: 1649.99,
    priceNote: 'Descend à 1 399 € durant soldes',
    tier: 'mid',
    inStock: false,
    cpu: 'Intel Core i5-14400F (10c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 Ti 16 Go GDDR7',
    aib: 'MSI',
    vram: 16,
    ram: 16,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '650W 80+ Bronze MSI',
    casing: 'Mid-tower ATX standard',
    warranty: '2 ans MSI',
    url: 'https://fr-store.msi.com/products/mag-infinite-s3-14nvm5-2873eu-gaming-desktop',
    pros: [
      'RTX 5060 Ti 16 Go = excellent pour 3D (VRAM doublée)',
      'Châssis évolutif ATX standard',
      'Alim 650W permet upgrade GPU'
    ],
    cons: [
      '16 Go RAM insuffisants : upgrade obligatoire 32 Go',
      'i5-14400F limite sur simulations lourdes'
    ]
  },

  // ============= 1 700 - 2 100 € =============
  {
    id: 'topachat-nightwave',
    name: 'PC Gamer NIGHTWAVE',
    brand: 'Topachat',
    vendor: 'Topachat',
    price: 1699.99,
    priceNote: 'En stock',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 7 5700X (8c/16t)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR4',
    storage: 'SSD 1 To NVMe Gen4',
    psu: '650-750W 80+ Bronze',
    casing: 'Non précisé',
    warranty: '2 ans',
    url: 'https://www.topachat.com/pages/produits_cat_est_ordinateurs_puis_rubrique_est_w_pcgam_ta.html',
    pros: [
      'RTX 5070 12 Go : excellent ratio perfs/prix en OptiX',
      'Ryzen 7 5700X 8 cœurs',
      '32 Go DDR4 + 1 To NVMe'
    ],
    cons: [
      'Plateforme AM4 / DDR4 en fin de vie',
      'Marque AIB GPU non précisée'
    ]
  },
  {
    id: 'cybertek-ronin',
    name: 'PC Gamer Cybertek RONIN',
    brand: 'Cybertek',
    vendor: 'Cybertek',
    price: 1799.99,
    priceNote: 'Dernières pièces, livraison ~10 jours',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 7 8700F (8c/16t, AM5)',
    cpuBrand: 'AMD',
    gpu: 'ASUS Dual RTX 5060 Ti 16 Go OC',
    aib: 'ASUS',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 5600 Kingston Fury Beast',
    storage: 'SSD Kingston SNV3S 1 To NVMe',
    psu: 'MSI MAG A750BN 750W Bronze',
    casing: 'MSI MAG FORGE 112R',
    warranty: '2 ans (extensible 5 ans)',
    url: 'https://www.cybertek.fr/univers-gamer/pc-assembles/pc-gamer-cybertek-2026-165981.aspx',
    pros: [
      'Plateforme AM5 (DDR5 + upgrade futur)',
      'VRAM 16 Go : confort Blender/ZBrush/Maya',
      'AIO 240 inclus, SAV Cybertek'
    ],
    cons: [
      'Alim Bronze 750W',
      'SSD 1 To se remplit vite avec projets Maya'
    ]
  },
  {
    id: 'hp-omen-25l-gt15',
    name: 'HP Omen 25L GT15 (i7 + 5060 Ti)',
    brand: 'HP',
    vendor: 'HP Store / Fnac',
    price: 1800,
    priceNote: 'Estimation mai 2026 : 1 700-1 900 €',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i7-14700KF (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5060 Ti 8 Go GDDR7',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '500W',
    casing: 'Mini-tour 25L',
    warranty: '2 ans HP',
    url: 'https://www.hp.com/fr-fr/gaming-pc/desktops/omen-25l-intel.html',
    pros: [
      'i7-14700KF débloqué excellent en CPU rendering',
      'Châssis 25L bien ventilé, format compact',
      '32 Go d\'origine'
    ],
    cons: [
      'RTX 5060 Ti 8 Go VRAM limite ZBrush HD',
      'Alim 500W = pas d\'upgrade GPU haut de gamme',
      'Carte mère mATX propriétaire HP'
    ]
  },
  {
    id: 'pcspecialist-r5-5070',
    name: 'PCSpecialist Ryzen 5 7500F + RTX 5070',
    brand: 'PCSpecialist',
    vendor: 'Rue du Commerce / PCSpecialist',
    price: 1804.05,
    priceNote: 'Réduit de 2 299 €, -21%',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 5 7500F (6c/12t, AM5)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 5200 Corsair Vengeance',
    storage: 'SSD M.2 NVMe 2 To',
    psu: '750W Gold typique',
    casing: 'Corsair Frame 4000D RS ARGB',
    warranty: 'Légale FR + assemblage main',
    url: 'https://www.rueducommerce.fr/p/m25088954695.html',
    pros: [
      'SSD 2 To généreux pour caches Blender + bibliothèques',
      'RTX 5070 = bond CUDA/OptiX vs 5060 Ti',
      'Boitier Corsair 4000D bonne aération',
      'Plateforme AM5 évolutive'
    ],
    cons: [
      'Ryzen 5 7500F (6c) un peu juste pour simulations',
      'VRAM 12 Go : limite ZBrush HD'
    ]
  },
  {
    id: 'lenovo-legion-tower-5i-gen10',
    name: 'Lenovo Legion Tower 5i Gen 10',
    brand: 'Lenovo',
    vendor: 'Lenovo.fr',
    price: 1999,
    priceNote: 'Estimation mai 2026 : 1 899-2 099 €',
    tier: 'mid',
    inStock: false,
    cpu: 'Intel Core Ultra 7 265F (20c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 5600',
    storage: 'SSD NVMe 1 To Gen4',
    psu: '850W 80+ Platinum',
    casing: 'Moyenne tour 30L verre trempé',
    warranty: '2 ans Lenovo Premier Support',
    url: 'https://www.lenovo.com/fr/fr/legion/legion-intel/',
    pros: [
      'Châssis 30L bien ventilé avec verre trempé',
      'Alim 850W Platinum',
      'Ultra 7 265F 20 cœurs solide en Blender CPU'
    ],
    cons: [
      'Composants propriétaires partiels',
      'Délai livraison (configurateur)',
      'Prix peut grimper avec options'
    ]
  },
  {
    id: 'mat-trigger',
    name: 'PC Gamer Trigger (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 1999.95,
    priceNote: 'Souvent -10% code INTEL',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i5-14400F (10c/16t)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Python III 12 Go',
    aib: 'Gainward',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 5600 Kingston',
    storage: 'SSD Kingston NV3 1 To NVMe Gen4',
    psu: 'Textorm TX V2 750W 80+ Bronze',
    casing: 'Fox Spirit AG1',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202603020056.html',
    pros: [
      'Configuration polyvalente Blender/Maya/3ds Max',
      'i5-14400F 10 cœurs : rendu CPU + multitâche',
      'Garantie 5 ans + alim 750W'
    ],
    cons: [
      'i5 non-K moins performant qu\'un Ryzen 7',
      '12 Go VRAM limite pour ZBrush HD'
    ]
  },
  {
    id: 'cybertek-revenge',
    name: 'PC Gamer Cybertek REVENGE',
    brand: 'Cybertek',
    vendor: 'Cybertek',
    price: 1999.99,
    priceNote: 'Livraison sous 6-10 jours',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 7 8700F (8c/16t, AM5)',
    cpuBrand: 'AMD',
    gpu: 'ASUS Dual RTX 5070 12 Go GDDR7',
    aib: 'ASUS',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 6000 CL36 Kingston Fury',
    storage: 'SSD Kingston NV3 1 To NVMe Gen4',
    psu: 'Corsair RM850e 850W Gold ATX 3.1',
    casing: 'Corsair Frame 4000D RS ARGB',
    warranty: '2 ans',
    url: 'https://www.cybertek.fr/univers-gamer/pc-assembles/pc-gamer-cybertek-2078-166636.aspx',
    pros: [
      'Ryzen 7 8700F (8c) + DDR5 6000 : équilibre solide',
      'Alim Corsair RM850e Gold ATX 3.1 = pérenne',
      'Watercooling Corsair Nautilus 360 ARGB',
      'AM5 évolutive'
    ],
    cons: [
      'SSD 1 To uniquement',
      'VRAM 12 Go : limite ZBrush HD / textures 8K'
    ]
  },
  {
    id: 'dell-xps-8960',
    name: 'Dell XPS 8960 Desktop',
    brand: 'Dell',
    vendor: 'Dell.fr / Amazon.fr',
    price: 2099,
    priceNote: 'Estimation mai 2026 : 1 999-2 299 €',
    tier: 'high',
    inStock: false,
    cpu: 'Intel Core i7-14700 (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 4070 Super 12 Go',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 4800',
    storage: 'SSD NVMe 1 To',
    psu: '750W propriétaire Dell',
    casing: 'Moyenne tour ~31L',
    warranty: '1 an Premium Support (extensible 3 ans)',
    url: 'https://www.dell.com/fr-fr/shop/notre-gamme-pro/ordinateur-de-bureau-xps/spd/xps-8960-desktop',
    pros: [
      'Châssis Dell sobre et silencieux',
      'RTX 4070 Super 12 Go encore très bonne pour 3D',
      'Windows 11 Pro inclus, Premium Support'
    ],
    cons: [
      'Alim et carte mère propriétaires = aucun upgrade',
      'RTX 4070 Super = génération précédente',
      'Châssis fermé moins bien ventilé'
    ]
  },
  {
    id: 'lenovo-thinkstation-p3-tower-g2',
    name: 'Lenovo ThinkStation P3 Tower Gen 2',
    brand: 'Lenovo',
    vendor: 'Lenovo.fr',
    price: 2218,
    priceNote: 'Workstation pro, RTX A4000',
    tier: 'high',
    inStock: false,
    cpu: 'Intel Core i7-14700 ou i9-14900',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX A4000 16 Go GDDR6 (Quadro)',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 4400 ECC',
    storage: 'SSD NVMe 1 To Gen4',
    psu: '750W 92% rendement',
    casing: 'Moyenne tour ThinkStation',
    warranty: '3 ans Premier Support On-Site',
    url: 'https://www.lenovo.com/fr/fr/p/workstations/thinkstationp/lenovo-thinkstation-p3-tower-gen-2-intel-workstation/30htcto1wwfr1',
    pros: [
      'RTX A4000 16 Go avec drivers Studio certifiés',
      'Certifications ISV (Autodesk, Adobe, Dassault)',
      'ECC en option, support pro 3 ans',
      'Châssis tool-less, maintenance facile'
    ],
    cons: [
      'RTX A4000 plus lente en GPU rendering que RTX 5070 Ti',
      'Design austère (pas de RGB)',
      'GPU pro moins puissant en jeu'
    ]
  },

  // ============= 2 100 - 2 600 € =============
  {
    id: 'mat-orochi',
    name: 'PC Gamer Orochi (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 2249.95,
    priceNote: 'Prix catalogue 2 449,95 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i5 14600KF (14c/20t)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Ti Phoenix-S 16 Go',
    aib: 'Gainward',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 Crucial Pro',
    storage: 'SSD Kingston KC3000 1 To NVMe Gen4',
    psu: 'Corsair RMe 750W 80+ Gold ATX 3.1',
    casing: 'MSI MPG Gungnir 111R',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202302150112.html',
    pros: [
      'i5 14600KF 14 cœurs hybrides : rendu CPU + multitâche',
      '32 Go DDR5 6000 directement adaptés Blender/Maya',
      'Alim Corsair Gold ATX 3.1'
    ],
    cons: [
      'i5 limité face à un Ryzen 9 sur rendu CPU lourd',
      'Pas de cache 3D X3D'
    ]
  },
  {
    id: 'msi-mag-infinite-s3-5070',
    name: 'MSI MAG Infinite S3 14NVP7-2842EU',
    brand: 'MSI',
    vendor: 'MSI Store FR / Fnac',
    price: 2199.99,
    priceNote: 'Prix officiel MSI FR',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i7-14700F (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'MSI Ventus RTX 5070 12 Go GDDR7',
    aib: 'MSI',
    vram: 12,
    ram: 16,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '650W 80+ Bronze',
    casing: 'Mid-tower MSI',
    warranty: '2 ans MSI',
    url: 'https://fr-store.msi.com/products/mag-infinite-s3-14nvp7-2842eu-gaming-desktop',
    pros: [
      'RTX 5070 12 Go = vrai palier pour Cycles/Redshift',
      'i7-14700F récent',
      'Châssis ATX évolutif'
    ],
    cons: [
      '16 Go RAM : upgrade indispensable (~70 €)',
      'Alim 650W juste pour upgrade futur'
    ]
  },
  {
    id: 'acer-orion-5000-po5-660',
    name: 'Acer Predator Orion 5000 PO5-660',
    brand: 'Acer',
    vendor: 'Acer Store / PcComponentes',
    price: 2299,
    priceNote: 'idealo dès 2 171 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265F (20c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Acer',
    vram: 12,
    ram: 32,
    ramType: 'DDR5 6000',
    storage: 'SSD NVMe 2 To',
    psu: '750W Acer',
    casing: 'Mid-tower',
    warranty: '2 ans Acer',
    url: 'https://store.acer.com/fr-fr/predator-orion-5000-pc-gamer-po5-660-noir-dg-e4eeh-005',
    pros: [
      'Core Ultra 7 + 32 Go + 5070 + 2 To',
      'Refroidissement triple-fan',
      'Wi-Fi 7'
    ],
    cons: [
      'Core Ultra 7 légèrement en deçà du 14700K en multi-thread',
      'Châssis Acer propriétaire (carte mère custom)'
    ]
  },
  {
    id: 'hp-omen-35l-gt16-5070',
    name: 'HP Omen 35L GT16-0518nf',
    brand: 'HP',
    vendor: 'HP Store / Fnac',
    price: 2299,
    priceNote: 'Prix lancement 2 299 €, parfois -100 € en promo',
    tier: 'high',
    inStock: true,
    cpu: 'AMD Ryzen 7 (8000/9000)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '800W',
    casing: 'Moyenne tour 35L',
    warranty: '2 ans HP',
    url: 'https://www.fnac.com/PC-Gaming-HP-Omen-35L-GT16-0518nf-AMD-Ryzen-7-32-Go-RAM-1-To-SSD-Nvidia-GeForce-RTX-5070-Noir/a21803117/w-4',
    pros: [
      'RTX 5070 12 Go = équilibre prix/VRAM',
      'Châssis 35L très ventilé pour rendus longs',
      '32 Go + 1 To + alim 800W'
    ],
    cons: [
      'Carte mère propriétaire HP',
      'Ventilo CPU bruyant sous charge GPU+CPU'
    ]
  },
  {
    id: 'asus-rog-g22ch-4070',
    name: 'ASUS ROG G22CH-71370F142W (RTX 4070)',
    brand: 'ASUS',
    vendor: 'Fnac',
    price: 2299,
    priceNote: 'Variable selon config',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i7-14700F (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'ASUS Dual RTX 4070 12 Go GDDR6X',
    aib: 'ASUS',
    vram: 12,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: 'SFX ~650W',
    casing: 'SFF compacte',
    warranty: '2 ans ASUS',
    url: 'https://rog.asus.com/fr/desktops/small-form-factor/rog-g22ch-series/spec/',
    pros: [
      'Qualité ASUS premium, 32 Go d\'origine',
      'Châssis compact silencieux',
      'Finitions ROG'
    ],
    cons: [
      'RTX 4070 gen précédente',
      'SFF = upgrade GPU futur problématique',
      'Alim SFX propriétaire'
    ]
  },
  {
    id: 'ldlc-zen-seven-ti',
    name: 'LDLC PC Zen-M5 X3D Plus Perfect Seven-Ti',
    brand: 'LDLC',
    vendor: 'LDLC',
    price: 2359.95,
    priceNote: '2 499,95 € avec Win11',
    tier: 'high',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (8c/16t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5070 Ti 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 16,
    ramType: 'DDR5 (extensible 192 Go)',
    storage: 'SSD NVMe M.2 PCIe 4.0 1 To',
    psu: '750W',
    casing: 'Moyen-tour + AIO 240 mm ARGB',
    warranty: '5 ans LDLC',
    url: 'https://www.ldlc.com/fiche/PB00668590.html',
    pros: [
      'CPU X3D excellent pour viewport Blender/Maya',
      '16 Go VRAM GDDR7 = Octane/Redshift confortable',
      'Garantie 5 ans LDLC'
    ],
    cons: [
      '16 Go RAM système : prévoir upgrade (+120 €)',
      'PSU 750W non Gold explicitement',
      'AIB GPU non précisée'
    ]
  },
  {
    id: 'hp-z2-tower-g9',
    name: 'HP Z2 Tower G9 Workstation',
    brand: 'HP',
    vendor: 'HP Store FR',
    price: 2364,
    priceNote: 'Workstation pro certifiée',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i7-14700K (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX A1000 / T1000 (Quadro)',
    aib: 'Variable',
    vram: 8,
    ram: 32,
    ramType: 'DDR5 ECC option',
    storage: 'SSD NVMe 512 Go ou 1 To',
    psu: '700W 92% (Bronze)',
    casing: 'Moyenne tour Z2',
    warranty: '3 ans HP On-Site NBD',
    url: 'https://www.hp.com/fr-fr/shop/product.aspx?id=8t1n2ea&opt=abf&sel=dtp',
    pros: [
      'Drivers Studio certifiés Maya/ZBrush/Solidworks',
      'Garantie 3 ans On-Site Next Business Day',
      'ECC option = stabilité rendu multi-heures'
    ],
    cons: [
      'GPU pro moins puissant en rendering vs 5070 Ti grand public',
      'Cher pour matériel équivalent (paye la certification)'
    ]
  },
  {
    id: 'cybertek-spectre',
    name: 'PC Gamer Cybertek SPECTRE',
    brand: 'Cybertek',
    vendor: 'Cybertek',
    price: 2499.99,
    priceNote: 'Réduit de 200 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i9-12900KF (16c)',
    cpuBrand: 'Intel',
    gpu: 'PNY RTX 5070 Ti 16 Go ARGB OC Triple Fan',
    aib: 'PNY',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 CL36 Corsair Vengeance RGB',
    storage: 'SSD WD SN7100 2 To NVMe Gen4',
    psu: 'MSI MPG A1000GS 1000W 80+ Gold',
    casing: 'ASUS A23 PLUS TG ARGB',
    warranty: '2 ans (extensible 5 ans)',
    url: 'https://www.cybertek.fr/univers-gamer/pc-assembles/pc-gamer-cybertek-1928-163378.aspx',
    pros: [
      'VRAM 16 Go RTX 5070 Ti = excellent Cycles/Redshift',
      'i9-12900KF 16 cœurs : très bon rendu CPU',
      'SSD 2 To WD SN7100 rapide',
      'Alim 1000W Gold = upgrade futur sans souci'
    ],
    cons: [
      'i9-12900KF gen Intel 12, moins performant que 14700KF',
      'PNY = AIB moins prestigieux'
    ]
  },

  // ============= 2 500 - 3 200 € =============
  {
    id: 'mat-blazefire',
    name: 'PC Gamer Blazefire (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 2599.95,
    priceNote: 'Référencé jusque 2 649,95 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265KF (20c)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Ti Phoenix-S 16 Go',
    aib: 'Gainward',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 Crucial Pro',
    storage: 'SSD Crucial P310 1 To NVMe Gen4',
    psu: 'be quiet! Pure Power 13 M 750W Gold',
    casing: 'Corsair 4000D Airflow + AIO 360',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202603020141.html',
    pros: [
      'Core Ultra 7 265KF 20 cœurs + NPU',
      'AIO 360 mm : silence et fréquences soutenues',
      'Boîtier Airflow ouvert pour rendus longs'
    ],
    cons: [
      'Arrow Lake : perf gaming moyenne (mais multi-thread OK)',
      '16 Go VRAM peut limiter Octane avec textures 8K'
    ]
  },
  {
    id: 'alienware-aurora-act1250',
    name: 'Alienware Aurora ACT1250',
    brand: 'Dell',
    vendor: 'Dell.fr',
    price: 2649,
    priceNote: 'Soldes parfois -750 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265KF (20c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5070 12 Go GDDR7',
    aib: 'Variable',
    vram: 12,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '1000W 80+ Platinum',
    casing: 'Moyenne tour Alienware + AIO 240',
    warranty: '1 an Premium Support',
    url: 'https://www.dell.com/fr-fr/shop/notre-gamme-pro/ordinateur-de-bureau-gaming-alienware-aurora/spd/alienware-aurora-act1250-gaming-desktop',
    pros: [
      'Watercooling CPU d\'origine = silencieux',
      'Alim 1000W Platinum',
      'Design Alienware + très bonne ventilation',
      'Premium Support à domicile'
    ],
    cons: [
      'Châssis et carte mère 100% propriétaires Dell',
      'Aucun upgrade GPU haut de gamme possible',
      'Logiciel Alienware Command Center un peu lourd'
    ]
  },
  {
    id: 'cybertek-astra',
    name: 'PC Gamer Cybertek ASTRA',
    brand: 'Cybertek',
    vendor: 'Cybertek',
    price: 2799.99,
    priceNote: 'Livraison 6-10 j',
    tier: 'high',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (8c/16t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'ASUS PRIME RTX 5070 Ti 16 Go GDDR7',
    aib: 'ASUS',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 Kingston Fury Beast RGB',
    storage: 'SSD Kingston SNV3S 2 To NVMe Gen4',
    psu: 'Corsair RM850e 850W Gold ATX 3.1',
    casing: 'Corsair Frame 4000D RS ARGB',
    warranty: '2 ans',
    url: 'https://www.cybertek.fr/univers-gamer/pc-assembles/pc-gamer-cybertek-2032-166035.aspx',
    pros: [
      'Ryzen 7 9800X3D : top single-thread + cache 96 Mo',
      'VRAM 16 Go RTX 5070 Ti = Blender confortable',
      'SSD 2 To NVMe + AIO 360 ARGB',
      'AIB ASUS PRIME identifié'
    ],
    cons: [
      '9800X3D optimisé jeux (un 9900X mieux pour rendu CPU pur)',
      'Alim 850W limite si upgrade vers 5090'
    ]
  },
  {
    id: 'msi-mpg-infinite-z3-amd',
    name: 'MSI MPG Infinite Z3 9NVRR7-286EU',
    brand: 'MSI',
    vendor: 'MSI Store FR',
    price: 2899.99,
    priceNote: 'Sur commande',
    tier: 'high',
    inStock: false,
    cpu: 'AMD Ryzen 7 9800X3D (X3D)',
    cpuBrand: 'AMD',
    gpu: 'MSI RTX 5070 Ti 16 Go GDDR7',
    aib: 'MSI',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '850W 80+ Gold',
    casing: 'Mid-tower MSI',
    warranty: '2 ans MSI',
    url: 'https://fr-store.msi.com/collections/infinite-series',
    pros: [
      'Ryzen 7 X3D : avantage Maya/ZBrush viewport',
      'RTX 5070 Ti 16 Go = top Cycles GPU',
      'Consommation CPU plus basse que Intel Ultra'
    ],
    cons: [
      'X3D moins fort que Intel Ultra 7 en rendu CPU pur',
      '1 To stockage à compléter'
    ]
  },
  {
    id: 'msi-mpg-infinite-x3-5070ti',
    name: 'MSI MPG Infinite X3 AI 2NVR7-036EU',
    brand: 'MSI',
    vendor: 'MSI Store FR',
    price: 2999.99,
    priceNote: 'Sur commande, rupture fréquente',
    tier: 'high',
    inStock: false,
    cpu: 'Intel Core Ultra 7 265KF (20c)',
    cpuBrand: 'Intel',
    gpu: 'MSI Ventus RTX 5070 Ti 16 Go GDDR7',
    aib: 'MSI',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '850W 80+ Gold',
    casing: 'Mid-tower full ATX',
    warranty: '2 ans MSI',
    url: 'https://fr-store.msi.com/products/mpg-infinite-x3-ai-2nvr7-036eu-gaming-desktop',
    pros: [
      '5070 Ti 16 Go = Cycles + Redshift sans soucis VRAM',
      'Core Ultra 7 récent',
      'Alim 850W laisse marge upgrade 5080'
    ],
    cons: [
      'Stockage 1 To juste pour 3D pro',
      'AIO sur certaines révisions seulement'
    ]
  },
  {
    id: 'hp-omen-35l-5070ti',
    name: 'HP Omen 35L GT16-0488nf (RTX 5070 Ti)',
    brand: 'HP',
    vendor: 'HP Store FR',
    price: 2999,
    priceNote: 'Promo ~2 600-2 800 € parfois',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core i7-14700F (20c/28t)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5070 Ti 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '1000W',
    casing: 'Moyenne tour 35L',
    warranty: '2 ans HP',
    url: 'https://www.hp.com/fr-fr/shop/product.aspx?id=bc5k7ea&opt=abf&sel=dtp',
    pros: [
      'RTX 5070 Ti 16 Go = excellente VRAM pour 3D',
      'Alim 1000W = très grosse marge upgrade',
      'Combo i7-14700F + 5070 Ti = profil créatif 3-4 ans'
    ],
    cons: [
      'Carte mère mATX propriétaire (BIOS limité)',
      'Ventilateur CPU stock bruyant sous rendu intensif'
    ]
  },

  // ============= 3 200 - 4 200 € =============
  {
    id: 'pcspecialist-i9-5080',
    name: 'PCSpecialist i9-14900KF + RTX 5080',
    brand: 'PCSpecialist',
    vendor: 'Rue du Commerce',
    price: 3134.05,
    priceNote: 'Réduit de 3 599 €, -12%',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core i9-14900KF (24c, 6 GHz boost)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 Corsair Vengeance',
    storage: 'SSD M.2 NVMe 2 To',
    psu: '850W Gold typique',
    casing: 'PCS Lumin ARGB MID',
    warranty: 'Légale FR + montage main',
    url: 'https://www.rueducommerce.fr/p/m25088954677.html',
    pros: [
      'i9-14900KF 24 cœurs : top rendu CPU multi-thread',
      'RTX 5080 16 Go = top Blender Cycles/OptiX',
      'Montage à la main + stress test avant livraison'
    ],
    cons: [
      'i9-14900KF chauffe (Intel Raptor Lake voltage)',
      '32 Go peut devenir court pour Houdini sims'
    ]
  },
  {
    id: 'hp-omen-45l-5080-u7',
    name: 'HP Omen 45L GT22-3048nf (Ultra 7 + RTX 5080)',
    brand: 'HP',
    vendor: 'HP Store FR',
    price: 3199,
    priceNote: 'En stock HP',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265K (20c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 2 To',
    psu: '1200W 80+ Platinum',
    casing: 'Full tower 45L + AIO 240',
    warranty: '2 ans HP',
    url: 'https://www.hp.com/fr-fr/shop/product.aspx?id=bc5l5ea&opt=abf&sel=dtp',
    pros: [
      'RTX 5080 16 Go = perf énorme Blender/Octane/Redshift',
      'Châssis 45L excellente circulation d\'air',
      'Alim 1200W Platinum, 2 To SSD',
      'Carte mère ATX standard (rare chez HP)'
    ],
    cons: [
      'Encombrement (45L)',
      'Ventilateurs RGB peu utiles pour usage 3D pro'
    ]
  },
  {
    id: 'mat-balrog',
    name: 'PC Gamer Balrog (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 3249.95,
    priceNote: 'X3D + RTX 5080',
    tier: 'pro',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (X3D)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 CL36 Kingston Fury',
    storage: 'SSD NVMe M.2 PCIe 4.0 2 To',
    psu: 'Fox Spirit 850W 80+ Gold',
    casing: 'Fractal Design North TG',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202501220068.html',
    pros: [
      'RTX 5080 + 16 Go VRAM : passage de cap GPU rendu',
      'SSD 2 To NVMe : bibliothèques 3D confortables',
      'X3D + 32 Go DDR5 = combo viewport + simulations'
    ],
    cons: [
      'PSU Fox Spirit moins premium qu\'un Corsair/be quiet',
      'VRAM 16 Go déjà juste pour Octane lourd'
    ]
  },
  {
    id: 'mat-draconys',
    name: 'PC Gamer Draconys (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 3379.95,
    priceNote: 'AIB Gigabyte WindForce',
    tier: 'pro',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (X3D)',
    cpuBrand: 'AMD',
    gpu: 'Gigabyte RTX 5080 WindForce 3 16 Go',
    aib: 'Gigabyte',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 G.Skill',
    storage: 'SSD Samsung 990 PRO 1 To NVMe Gen4',
    psu: 'Fox Spirit 850W 80+ Gold',
    casing: 'Corsair 3500X',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202507170056.html',
    pros: [
      'AIB Gigabyte WindForce 3 : triple ventilateur silencieux',
      'Samsung 990 PRO = top NVMe',
      'Corsair 3500X excellent airflow'
    ],
    cons: [
      'SSD 1 To seulement',
      '32 Go RAM à étendre à 64 Go pour ZBrush HD'
    ]
  },
  {
    id: 'asus-rog-g700tf-5080',
    name: 'ASUS ROG G700TF (Ultra 7 + RTX 5080)',
    brand: 'ASUS',
    vendor: 'ASUS Store / idealo',
    price: 3499,
    priceNote: 'Estimation mai 2026 : 3 281-3 499 €',
    tier: 'pro',
    inStock: false,
    cpu: 'Intel Core Ultra 7 265KF (20c)',
    cpuBrand: 'Intel',
    gpu: 'ASUS ROG RTX 5080 16 Go GDDR7',
    aib: 'ASUS',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '850W 80+ Gold ROG',
    casing: 'Full-tower ROG',
    warranty: '2 ans ASUS',
    url: 'https://rog.asus.com/be-fr/desktops/full-tower/rog-g700-2025-g700/spec/',
    pros: [
      '5080 16 Go = très haut niveau OptiX/CUDA',
      'Châssis full-tower = upgrade illimité',
      'Format ATX standard'
    ],
    cons: [
      'Configs entrée parfois avec RTX 5070 (vérifier SKU)',
      'Encombrement notable',
      'Tarif store officiel souvent au-dessus idealo'
    ]
  },
  {
    id: 'msi-mpg-infinite-x3-5080',
    name: 'MSI MPG Infinite X3 AI 2NVV7-037FR',
    brand: 'MSI',
    vendor: 'Darty / Fnac',
    price: 3799.99,
    priceNote: 'Vu à 2 999 € en promo idealo',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265KF (20c)',
    cpuBrand: 'Intel',
    gpu: 'MSI Ventus 3X RTX 5080 16 Go GDDR7',
    aib: 'MSI',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '850W 80+ Gold',
    casing: 'Mid-tower MSI + AIO 240',
    warranty: '2 ans MSI',
    url: 'https://www.darty.com/nav/achat/informatique/bureau-bureau/bureau/msi_infx3_g_u7_32_1_5080.html',
    pros: [
      'RTX 5080 = palier majeur Cycles/Redshift/Octane',
      'Carte mère MSI ATX standard (vraie évolutivité)',
      'AIO 240 CPU, Wi-Fi 6E + 5 GbE'
    ],
    cons: [
      '1 To insuffisant pour pipeline 3D pro',
      'Design RGB peut déplaire en milieu pro'
    ]
  },
  {
    id: 'mat-meteora',
    name: 'PC Pro Meteora IA (Win11)',
    brand: 'Materiel.net',
    vendor: 'Materiel.net',
    price: 3949.95,
    priceNote: 'Gamme professionnelle, stock 15+ j',
    tier: 'pro',
    inStock: false,
    cpu: 'AMD Ryzen 7 9800X3D (X3D)',
    cpuBrand: 'AMD',
    gpu: 'Gigabyte RTX 5080 WindForce OC SFF 16 Go',
    aib: 'Gigabyte',
    vram: 16,
    ram: 64,
    ramType: 'DDR5 6000 Crucial',
    storage: 'SSD Samsung 990 PRO 2 To NVMe Gen4',
    psu: 'Corsair RMe ATX 3.1 850W Gold',
    casing: 'Fractal Design North Mesh',
    warranty: '5 ans Materiel.net',
    url: 'https://www.materiel.net/produit/202509100004.html',
    pros: [
      '64 Go DDR5 : sweet spot scènes lourdes (Houdini, ZBrush HD)',
      '2 To Samsung 990 PRO + RTX 5080 + X3D',
      'Gamme "professionnel" Materiel.net'
    ],
    cons: [
      'GPU format SFF : refroidissement plus bruyant',
      'Délai stock 15+ jours'
    ]
  },
  {
    id: 'ldlc-zen-top',
    name: 'LDLC PC Zen-M5 X3D Top Perfect',
    brand: 'LDLC',
    vendor: 'LDLC',
    price: 3999.95,
    priceNote: '4 199,95 € avec Win11',
    tier: 'pro',
    inStock: true,
    cpu: 'AMD Ryzen 9 9950X3D (16c/32t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 5600',
    storage: 'SSD 1 To Gen4 + 2 To secondaire',
    psu: '1000W',
    casing: 'Moyen-tour + AIO 360 mm',
    warranty: '5 ans LDLC',
    url: 'https://www.ldlc.com/fiche/PB00675804.html',
    pros: [
      'Ryzen 9 9950X3D 16 cœurs : top tier rendu CPU + viewport',
      '3 To SSD total : aucune limite',
      'Alim 1000W = upgrade RTX 5090 envisageable'
    ],
    cons: [
      '32 Go RAM seulement à ce prix',
      'DDR5 5600 légèrement en retrait vs 6000'
    ]
  },
  {
    id: 'acer-orion-7000-po7',
    name: 'Acer Predator Orion 7000 PO7-660',
    brand: 'Acer',
    vendor: 'Acer Store / Fnac MP',
    price: 4199,
    priceNote: 'idealo descente à ~3 700 €',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core Ultra 9 285K (24c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Acer',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 1 To',
    psu: '1000W 80+ Gold + AIO 360',
    casing: 'Full-tower Predator',
    warranty: '2 ans Acer',
    url: 'https://store.acer.com/fr-fr/predator-orion-7000-pc-gamer-po7-660-noir',
    pros: [
      'Core Ultra 9 285K = rendu CPU monstre (Cycles/V-Ray)',
      'AIO 360 : thermals tenue sur rendus longs',
      'Châssis grand format évolutif'
    ],
    cons: [
      'Carte mère Acer propriétaire (mITX/mATX custom)',
      '1 To stockage juste à ce tarif',
      'Connecteurs alim partiellement propriétaires'
    ]
  },
  {
    id: 'hp-omen-45l-5080-u9',
    name: 'HP Omen 45L GT22-3042nf (Ultra 9 + RTX 5080)',
    brand: 'HP',
    vendor: 'HP Store FR / Rakuten',
    price: 4250,
    priceNote: 'Estimation mai 2026 : 4 100-4 400 €',
    tier: 'pro',
    inStock: true,
    cpu: 'Intel Core Ultra 9 285K (24c)',
    cpuBrand: 'Intel',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5',
    storage: 'SSD NVMe 2 To',
    psu: '1200W 80+ Platinum',
    casing: 'Full tower 45L + AIO 240',
    warranty: '2 ans HP',
    url: 'https://www.hp.com/fr-fr/shop/product.aspx?id=bc5l4ea&opt=abf&sel=dtp',
    pros: [
      'Ultra 9 285K = monstre Blender CPU + Arnold/V-Ray',
      'Combo Ultra 9 + RTX 5080 = couvre tous workflows 3D',
      'Alim 1200W, 2 To SSD'
    ],
    cons: [
      'Carte mère propriétaire HP avec BIOS bridé',
      'Format 45L très encombrant',
      'AIO 240 juste pour Ultra 9 285K à 100 %'
    ]
  }
];

// ============================================================
// Builds custom à monter soi-même
// ============================================================

const CUSTOM_BUILDS = {
  budget: {
    name: 'Build Budget',
    tagline: 'Débuter la modélisation 3D — Blender, premiers projets Maya',
    total: 1722,
    note: 'Prix mai 2026. Compressible à ~1 300 € en passant à 16 Go RAM + SSD 500 Go.',
    parts: [
      { cat: 'CPU', name: 'AMD Ryzen 5 7600 (boxed)', note: 'AM5, ventirad inclus', price: 210 },
      { cat: 'Mobo', name: 'MSI B650M Gaming Plus WIFI', note: 'mATX entrée AM5', price: 130 },
      { cat: 'GPU', name: 'Gigabyte RTX 5060 Ti GAMING OC 16 Go', note: '16 Go VRAM = excellent pour Blender', price: 480, brand: 'Gigabyte' },
      { cat: 'RAM', name: 'Kingston FURY Beast 32 Go DDR5 6000 CL30', note: '2x16 Go AMD EXPO', price: 525 },
      { cat: 'SSD', name: 'Kingston KC3000 1 To NVMe Gen4', note: 'Bon plan en 2026', price: 170 },
      { cat: 'PSU', name: 'NZXT C850 Gold 850W', note: '80+ Gold, modulaire', price: 120 },
      { cat: 'Case', name: 'Lian Li LANCOOL 216', note: 'Airflow excellent', price: 87 },
      { cat: 'Cool', name: 'Ventirad CPU stock', note: 'Suffisant pour Ryzen 5 7600', price: 0 }
    ],
    pros: [
      'GPU 16 Go VRAM excellent pour le rendu Blender Cycles',
      '32 Go DDR5 prêts pour Maya/3ds Max',
      'Plateforme AM5 évolutive (futur Ryzen 9000)',
      'Boîtier Lancool 216 = airflow pro pour rendus longs'
    ],
    cons: [
      'CPU Ryzen 5 6 cœurs : rendu CPU plus lent que Ryzen 7/9',
      'Pas de ventirad upgrade : limite si upgrade CPU',
      'SSD 1 To unique : prévoir disque secondaire'
    ]
  },
  balanced: {
    name: 'Build Équilibré',
    tagline: 'Le sweet spot étudiant sérieux — Blender, Maya, ZBrush',
    total: 2847,
    note: 'Variante 5070 (au lieu de 5070 Ti) descend à ~2 050 €.',
    parts: [
      { cat: 'CPU', name: 'AMD Ryzen 9 9900X (12c/24t)', note: 'Zen 5, excellent rendu CPU', price: 520 },
      { cat: 'Mobo', name: 'MSI B850 GAMING PRO WIFI6E', note: 'Support officiel Ryzen 9000', price: 200 },
      { cat: 'GPU', name: 'MSI RTX 5070 Ti VENTUS 3X OC 16 Go', note: 'Idéal Octane/Redshift', price: 1080, brand: 'MSI' },
      { cat: 'RAM', name: 'Corsair Vengeance 32 Go DDR5 6000 CL30', note: '2x16 Go AMD EXPO', price: 525 },
      { cat: 'SSD', name: 'WD Black SN850X 1 To NVMe Gen4', note: 'Top performance', price: 200 },
      { cat: 'PSU', name: 'Corsair RM850x (2024) 850W Gold', note: '10 ans garantie', price: 130 },
      { cat: 'Case', name: 'Lian Li LANCOOL 216', note: 'Airflow excellent', price: 87 },
      { cat: 'Cool', name: 'Arctic Liquid Freezer III 360', note: 'AIO 360 mm meilleur ratio', price: 105 }
    ],
    pros: [
      'Ryzen 9 9900X 12 cœurs : top en rendu CPU (Cycles CPU, Arnold)',
      'RTX 5070 Ti 16 Go VRAM : Octane/Redshift confortables',
      'AIO 360 mm : silence + fréquences soutenues sur rendus 12h+',
      'Corsair RM850x = 10 ans de garantie, headroom upgrade GPU'
    ],
    cons: [
      'Pas de cache 3D X3D : viewport légèrement en retrait sur scènes très denses',
      'SSD 1 To unique : assets 3D pro à stocker ailleurs',
      'Conjoncture 2026 : RAM/SSD ont fait grimper le total'
    ]
  },
  performance: {
    name: 'Build Performance',
    tagline: 'Workstation pro / pré-pro — Houdini, simulations FX, ZBrush HD',
    total: 4188,
    note: 'Variante RTX 5070 Ti 16 Go (au lieu de 5080) descend à ~3 690 €.',
    parts: [
      { cat: 'CPU', name: 'AMD Ryzen 9 9950X (16c/32t)', note: 'Zen 5, top rendu CPU multi-thread', price: 540 },
      { cat: 'Mobo', name: 'ASUS ROG Strix X670E-E ou MSI MAG X670E', note: 'PCIe 5.0 partout, VRM solide', price: 300 },
      { cat: 'GPU', name: 'MSI RTX 5080 GAMING TRIO OC 16 Go', note: 'Référence rendu GPU 2026', price: 1580, brand: 'MSI' },
      { cat: 'RAM', name: 'G.Skill Trident Z5 Neo 64 Go DDR5 6000 CL30', note: '2x32 Go AMD EXPO', price: 855 },
      { cat: 'SSD', name: 'Crucial T705 2 To NVMe Gen5', note: 'Performance extrême pour Houdini', price: 420 },
      { cat: 'PSU', name: 'Corsair RM1000x ATX 3.1 1000W Gold', note: 'Prêt RTX 5090 future', price: 220 },
      { cat: 'Case', name: 'Fractal Design North', note: 'Esthétique premium + airflow', price: 158 },
      { cat: 'Cool', name: 'Arctic Liquid Freezer III Pro 360 A-RGB', note: 'AIO 360 mm haut de gamme', price: 115 }
    ],
    pros: [
      'Ryzen 9 9950X 16 cœurs : top tier rendu CPU (Cycles, Arnold, V-Ray)',
      '64 Go DDR5 : confortable pour ZBrush HD + simulations FX',
      'RTX 5080 16 Go GDDR7 : rendu OptiX exceptionnel',
      'SSD Crucial T705 Gen5 2 To : caches Houdini ultra-rapides',
      'Alim 1000W ATX 3.1 prête pour RTX 5090 future'
    ],
    cons: [
      'Investissement lourd : 4188 € + écran pro = 4500-5000 € total',
      '16 Go VRAM reste la limite pour très grosses scènes Octane',
      'SSD Gen5 chauffe : dissipateur essentiel'
    ]
  }
};

// ============================================================
// Écrans pour modélisation 3D
// ============================================================

const SCREENS = [
  {
    id: 'iiyama-xub2792qsu',
    name: 'iiyama ProLite XUB2792QSU-B6',
    brand: 'iiyama',
    price: 240,
    priceNote: 'Estimation mai 2026 : 230-260 €',
    tier: 'budget',
    size: '27"',
    res: '2560x1440',
    resLabel: 'QHD',
    panel: 'IPS',
    hz: 100,
    srgb: 100,
    dcip3: 75,
    adobergb: 75,
    calibrated: false,
    hdr: false,
    connect: 'HDMI, DisplayPort, USB-C, hub USB',
    url: 'https://www.ldlc.com/en/product/PB00580843.html',
    pros: [
      'Excellent rapport qualité/prix pour démarrer la 3D',
      'Pied ergonomique complet (pivot, hauteur)',
      '100 Hz fluide pour navigation viewport',
      'QHD 27" parfait pour Blender/Maya'
    ],
    cons: [
      'Gamut limité au sRGB : moins idéal pour texturing pro',
      'Pas de calibrage usine certifié'
    ]
  },
  {
    id: 'msi-md272qp',
    name: 'MSI Modern MD272QP',
    brand: 'MSI',
    price: 270,
    priceNote: 'Estimation mai 2026 : 250-290 €',
    tier: 'budget',
    size: '27"',
    res: '2560x1440',
    resLabel: 'QHD',
    panel: 'IPS',
    hz: 75,
    srgb: 100,
    dcip3: 86,
    adobergb: 75,
    calibrated: false,
    hdr: false,
    connect: 'HDMI, DP, USB-C 65W, KVM',
    url: 'https://www.ldlc.com/en/product/PB00509444.html',
    pros: [
      'USB-C avec charge 65 W : idéal pour laptop d\'appoint',
      'Fonction KVM utile en multi-machines',
      'DCI-P3 86 % correct pour le prix'
    ],
    cons: [
      '75 Hz seulement (correct mais sans plus)',
      'Pas de calibrage usine'
    ]
  },
  {
    id: 'asus-pa278cgv',
    name: 'ASUS ProArt PA278CGV',
    brand: 'ASUS',
    price: 340,
    priceNote: 'Calibré usine ΔE<2',
    tier: 'mid',
    size: '27"',
    res: '2560x1440',
    resLabel: 'QHD',
    panel: 'IPS',
    hz: 144,
    srgb: 100,
    dcip3: 95,
    adobergb: 80,
    calibrated: true,
    hdr: 'DisplayHDR 400',
    connect: 'HDMI, DP, USB-C 90W, hub USB',
    url: 'https://www.idealo.fr/prix/202984460/asus-proart-pa278cgv.html',
    pros: [
      'Calibration usine avec rapport ΔE < 2 : top pour Substance Painter',
      '95 % DCI-P3 = très bon gamut pour la 3D',
      '144 Hz appréciable pour viewport Blender/Maya',
      'USB-C 90 W : un seul câble pour laptop'
    ],
    cons: [
      'QHD seulement (pas 4K pour textures fines)',
      'HDR 400 = HDR très basique'
    ]
  },
  {
    id: 'dell-u2724d',
    name: 'Dell UltraSharp U2724D',
    brand: 'Dell',
    price: 350,
    priceNote: 'IPS Black contraste 2000:1',
    tier: 'mid',
    size: '27"',
    res: '2560x1440',
    resLabel: 'QHD',
    panel: 'IPS Black',
    hz: 120,
    srgb: 100,
    dcip3: 98,
    adobergb: 85,
    calibrated: false,
    hdr: 'DisplayHDR 400',
    connect: 'HDMI, 2x DP, 2x USB-C, USB-A',
    url: 'https://www.dell.com/fr-fr/shop/dell-ultrasharp-27-u2724d/apd/210-bgda/',
    pros: [
      'IPS Black : meilleur contraste pour sculpting/scènes sombres',
      '98 % DCI-P3 = excellent gamut',
      '120 Hz viewport fluide',
      'Garantie Dell Premium Panel Exchange'
    ],
    cons: [
      'QHD (pas 4K pour ZBrush haute densité)',
      'Pas de Thunderbolt (réservé au U2724DE)'
    ]
  },
  {
    id: 'lg-27up850n',
    name: 'LG UltraFine 27UP850N-W',
    brand: 'LG',
    price: 410,
    priceNote: '4K USB-C 96W',
    tier: 'mid',
    size: '27"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS',
    hz: 60,
    srgb: 100,
    dcip3: 95,
    adobergb: 80,
    calibrated: false,
    hdr: 'DisplayHDR 400',
    connect: 'HDMI x2, DP, USB-C 96W, hub USB 3.0',
    url: 'https://www.ldlc.com/fiche/PB00501096.html',
    pros: [
      '4K 27" abordable avec DCI-P3 95 %',
      'USB-C 96 W : alimente la plupart des laptops créa',
      'Finition blanche élégante'
    ],
    cons: [
      'Pas de calibrage usine certifié avec rapport',
      'HDR 400 limité'
    ]
  },
  {
    id: 'benq-pd2705u',
    name: 'BenQ DesignVue PD2705U',
    brand: 'BenQ',
    price: 420,
    priceNote: '4K calibré usine',
    tier: 'mid',
    size: '27"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS',
    hz: 60,
    srgb: 100,
    dcip3: 95,
    adobergb: 85,
    calibrated: true,
    hdr: 'HDR10',
    connect: 'HDMI 2.0, DP 1.4, USB-C 90W, USB-A',
    url: 'https://www.ldlc.com/en/product/PB00518978.html',
    pros: [
      '4K à <450 € avec calibrage usine et rapport',
      'AQCOLOR + Pantone / CalMAN : idéal sculpting/texturing',
      '163 ppi : finesse exceptionnelle pour wireframes',
      'Hotkey Puck (raccourcis dédiés)'
    ],
    cons: [
      '60 Hz uniquement',
      'Luminosité moyenne (~250 cd/m²)'
    ]
  },
  {
    id: 'asus-pa279crv',
    name: 'ASUS ProArt PA279CRV',
    brand: 'ASUS',
    price: 535,
    priceNote: 'Excellence colorimétrique',
    tier: 'pro',
    size: '27"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS',
    hz: 60,
    srgb: 100,
    dcip3: 99,
    adobergb: 99,
    calibrated: true,
    hdr: 'DisplayHDR 400',
    connect: 'HDMI 2.0 x2, DP 1.4, USB-C 96W',
    url: 'https://www.idealo.fr/prix/202606224/asus-proart-pa279crv.html',
    pros: [
      '99 % Adobe RGB + 99 % DCI-P3 + calibration usine ΔE<2',
      '4K 27" = 163 ppi : textures et sculpting ultra-net',
      'ProArt Calibration Technology (recalibration matérielle)',
      'USB-C 96 W'
    ],
    cons: [
      '60 Hz seulement',
      'Stand correct mais moins haut de gamme que Dell'
    ]
  },
  {
    id: 'benq-pd3205u',
    name: 'BenQ DesignVue PD3205U',
    brand: 'BenQ',
    price: 560,
    priceNote: '32" 4K calibré',
    tier: 'pro',
    size: '31,5"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS',
    hz: 60,
    srgb: 99,
    dcip3: 95,
    adobergb: 90,
    calibrated: true,
    hdr: 'HDR10',
    connect: 'HDMI 2.0, DP 1.4, USB-C 90W, KVM',
    url: 'https://www.ldlc.com/en/product/PB00603892.html',
    pros: [
      '32" 4K : grand espace de travail Maya/Blender',
      'Calibrage usine avec rapport (Pantone/CalMAN)',
      'KVM intégré (2 PC sur 1 écran)',
      'Excellente uniformité (Delta L ≤ 3)'
    ],
    cons: [
      '60 Hz (typique de la catégorie pro)',
      '140 ppi (vs 163 ppi du 27" 4K)'
    ]
  },
  {
    id: 'dell-u3225qe',
    name: 'Dell UltraSharp U3225QE',
    brand: 'Dell',
    price: 920,
    priceNote: '32" 4K 120Hz Thunderbolt 4',
    tier: 'pro',
    size: '31,5"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS Black',
    hz: 120,
    srgb: 100,
    dcip3: 99,
    adobergb: 90,
    calibrated: true,
    hdr: 'DisplayHDR 600',
    connect: 'Thunderbolt 4 140W, 2x DP, HDMI 2.1, RJ45 2,5Gb',
    url: 'https://www.dell.com/fr-fr/shop/dell-ultrasharp-32-u3225qe/apd/210-bqtk/',
    pros: [
      'Combinaison rare : 4K + 120 Hz + IPS Black + TB4',
      'HDR 600 utile pour previews lookdev/shading',
      'Dock TB4 complet : 1 câble = écran + réseau + périphs',
      'Garantie Dell Premium Panel Exchange'
    ],
    cons: [
      'Budget conséquent',
      '140 ppi (la grande dalle dilue la finesse)'
    ]
  },
  {
    id: 'eizo-cs2740',
    name: 'EIZO ColorEdge CS2740',
    brand: 'EIZO',
    price: 1450,
    priceNote: 'Référence colorimétrie absolue',
    tier: 'pro',
    size: '27"',
    res: '3840x2160',
    resLabel: '4K',
    panel: 'IPS',
    hz: 60,
    srgb: 100,
    dcip3: 95,
    adobergb: 99,
    calibrated: true,
    hdr: false,
    connect: 'HDMI, DP, USB-C 60W, hub USB',
    url: 'https://eizo.fr/products/2502-ecran-graphique-eizo-coloredge-cs2740-noir',
    pros: [
      'Calibration matérielle (ColorNavigator + sonde)',
      'Stabilité colorimétrique exceptionnelle dans le temps',
      'Garantie 5 ans EIZO France incluant la dalle',
      'Référence pour pipeline texturing/lookdev studio'
    ],
    cons: [
      'Prix élevé, dépasse les besoins étudiants',
      '60 Hz et pas de HDR certifié',
      'USB-C 60 W seulement'
    ]
  }
];
