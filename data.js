// ============================================================
// Données : prix vérifiés en mai 2026 sur LDLC, Materiel.net,
// Topachat, idealo.fr, Amazon.fr. Sujets à variation.
// ============================================================

const PC_PREBUILT = [
  // ============= 1000-1300 € =============
  {
    id: 'topachat-velox',
    name: 'PC Gamer VELOX',
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
      '32 Go RAM dès l\'entrée de gamme = viewport Blender/Maya confortable',
      'RTX 5060 avec CUDA + OptiX pour Cycles/Arnold accélérés',
      'SSD NVMe 1 To rapide pour caches Substance/textures'
    ],
    cons: [
      'CPU Ryzen 5 5500 (Zen 3) vieillissant : limite simulations CPU',
      'Seulement 8 Go VRAM : plafonne pour rendu GPU avec textures 4K',
      'DDR4 et plateforme AM4 non évolutives'
    ]
  },
  {
    id: 'ldlc-art-six-ti',
    name: 'LDLC PC ART SIX-TI',
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
      '16 Go VRAM exceptionnels à ce prix : rendus GPU de scènes lourdes',
      'Idéal sculpting ZBrush HD grâce à la VRAM généreuse',
      'PC LDLC = montage maison français, évolutivité simple'
    ],
    cons: [
      'RAM système 16 Go trop juste : à upgrader rapidement vers 32 Go',
      'CPU Ryzen 5 5500 daté, médiocre en rendu CPU',
      'Marque AIB du GPU non précisée'
    ]
  },

  // ============= 1300-1700 € =============
  {
    id: 'mat-skillshot',
    name: 'PC Gamer Skillshot (Win11)',
    vendor: 'Materiel.net',
    price: 1499.95,
    priceNote: 'Garantie 5 ans, Win11 inclus',
    tier: 'mid',
    inStock: true,
    cpu: 'AMD Ryzen 5 5500 (6c/12t)',
    cpuBrand: 'AMD',
    gpu: 'ASUS GeForce RTX 5060 Dual OC 8 Go',
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
      'Garantie 5 ans Materiel.net = sécurité étudiant',
      '32 Go DDR4 + Win11 préinstallé : prêt à l\'emploi',
      'GPU ASUS Dual fiable, refroidissement éprouvé sur rendus longs'
    ],
    cons: [
      'CPU 5500 trop juste pour modélisation lourde / simulations',
      '8 Go VRAM limite le rendu GPU avec textures HD'
    ]
  },
  {
    id: 'mat-daemon',
    name: 'PC Gamer Daemon (Win11)',
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
      'Watercooling 360 mm Corsair Nautilus : rendus longs sans throttle',
      'Plateforme AM5 évolutive (DDR5 6000, futur Ryzen 9000)'
    ],
    cons: [
      '16 Go RAM seulement : insuffisant pour 3ds Max ou Maya complexe',
      'RTX 5060 Ti 8 Go (et non la version 16 Go)'
    ]
  },

  // ============= 1700-2000 € =============
  {
    id: 'topachat-nightwave',
    name: 'PC Gamer NIGHTWAVE',
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
      'RTX 5070 12 Go : excellent ratio perfs/prix en OptiX (Cycles, Redshift)',
      'Ryzen 7 5700X 8 cœurs : bon pour baking et simulations',
      '32 Go DDR4 + 1 To NVMe : config complète'
    ],
    cons: [
      'Plateforme AM4 / DDR4 en fin de vie : peu d\'évolutivité',
      'Marque AIB du GPU non précisée'
    ]
  },
  {
    id: 'mat-trigger',
    name: 'PC Gamer Trigger (Win11)',
    vendor: 'Materiel.net',
    price: 1999.95,
    priceNote: 'Souvent -10% code INTEL',
    tier: 'mid',
    inStock: true,
    cpu: 'Intel Core i5-14400F (10c/16t)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Python III 12 Go GDDR7',
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
      'La configuration la plus polyvalente sous 2000 € pour Blender/Maya/3ds Max',
      'i5-14400F 10 cœurs hybrides : excellent en rendu CPU + multitâche',
      'Garantie 5 ans + alim 750W = marge pour upgrade GPU'
    ],
    cons: [
      'i5 (non-K) moins performant qu\'un Ryzen 7 récent ou i7 en rendu',
      '12 Go VRAM limite pour ZBrush HD ou rendus 4K avec gros textures'
    ]
  },

  // ============= 2000-2500 € =============
  {
    id: 'mat-orochi',
    name: 'PC Gamer Orochi (Win11)',
    vendor: 'Materiel.net',
    price: 2249.95,
    priceNote: 'Prix catalogue 2 449,95 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core i5 14600KF (14c/20t)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Ti Phoenix-S 16 Go GDDR7',
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
      'i5 14600KF 14 cœurs hybrides : bon rendu CPU + multitâche',
      '32 Go DDR5 6000 directement adaptés Blender/Maya',
      'Alim Corsair Gold ATX 3.1 = headroom upgrade GPU'
    ],
    cons: [
      'i5 (pas i7/i9) limité face à un Ryzen 9 sur rendu CPU lourd',
      'Pas de cache 3D X3D : viewport légèrement en retrait sur scènes denses'
    ]
  },
  {
    id: 'ldlc-zen-seven-ti',
    name: 'LDLC PC Zen-M5 X3D Plus Perfect Seven-Ti',
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
    casing: 'Moyen-tour verre trempé + AIO 240 mm ARGB',
    warranty: '5 ans LDLC',
    url: 'https://www.ldlc.com/fiche/PB00668590.html',
    pros: [
      'CPU X3D excellent pour viewport Blender/Maya et simulations CPU',
      '16 Go VRAM GDDR7 = OctaneRender/Redshift confortable jusque scènes moyennes',
      'Garantie 5 ans, montage maison français'
    ],
    cons: [
      '16 Go RAM système clairement insuffisant : prévoir upgrade (+120 €)',
      'PSU 750W non Gold explicitement, marge limitée si upgrade GPU',
      'Marque AIB du GPU non précisée'
    ]
  },

  // ============= 2500-3200 € =============
  {
    id: 'mat-blazefire',
    name: 'PC Gamer Blazefire (Win11)',
    vendor: 'Materiel.net',
    price: 2599.95,
    priceNote: 'Référencé jusque 2 649,95 €',
    tier: 'high',
    inStock: true,
    cpu: 'Intel Core Ultra 7 265KF (20c/20t)',
    cpuBrand: 'Intel',
    gpu: 'Gainward RTX 5070 Ti Phoenix-S 16 Go GDDR7',
    aib: 'Gainward',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 Crucial Pro',
    storage: 'SSD Crucial P310 1 To NVMe Gen4',
    psu: 'be quiet! Pure Power 13 M 750W 80+ Gold',
    casing: 'Corsair 4000D Airflow + AIO Corsair Nautilus 360',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202603020141.html',
    pros: [
      'Core Ultra 7 265KF 20 cœurs + NPU = excellent multitâche et rendu CPU',
      'AIO 360 mm : silence et fréquences soutenues sur rendus longs',
      'Boîtier Airflow ouvert, parfait sessions prolongées'
    ],
    cons: [
      'Architecture Arrow Lake : perf gaming moyenne (mais bonne en multi-thread)',
      '16 Go VRAM peut limiter Octane/Redshift avec textures 8K multiples'
    ]
  },

  // ============= 3200-4000 € =============
  {
    id: 'mat-balrog',
    name: 'PC Gamer Balrog (Win11)',
    vendor: 'Materiel.net',
    price: 3249.95,
    priceNote: 'X3D + RTX 5080',
    tier: 'pro',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (8c/16t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'NVIDIA RTX 5080 16 Go GDDR7',
    aib: 'Variable',
    vram: 16,
    ram: 32,
    ramType: 'DDR5 6000 CL36 Kingston Fury Beast',
    storage: 'SSD NVMe M.2 PCIe 4.0 2 To',
    psu: 'Fox Spirit 850W 80+ Gold',
    casing: 'Fractal Design North TG',
    warranty: '5 ans',
    url: 'https://www.materiel.net/produit/202501220068.html',
    pros: [
      'RTX 5080 + 16 Go VRAM : passage de cap en rendu GPU (Octane/Redshift)',
      'SSD 2 To NVMe : bibliothèques 3D confortables',
      'X3D + 32 Go DDR5 = combo gagnant viewport + simulations'
    ],
    cons: [
      'PSU Fox Spirit moins premium qu\'un Corsair/be quiet à ce tarif',
      'VRAM 16 Go déjà juste pour scènes Octane très lourdes'
    ]
  },
  {
    id: 'mat-draconys',
    name: 'PC Gamer Draconys (Win11)',
    vendor: 'Materiel.net',
    price: 3379.95,
    priceNote: 'AIB Gigabyte WindForce',
    tier: 'pro',
    inStock: true,
    cpu: 'AMD Ryzen 7 9800X3D (8c/16t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'Gigabyte RTX 5080 WindForce 3 16 Go GDDR7',
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
      'Samsung 990 PRO : vitesses NVMe top du marché',
      'Boîtier Corsair 3500X excellent airflow'
    ],
    cons: [
      'SSD 1 To seulement : prévoir SSD secondaire pour assets',
      '32 Go RAM à étendre à 64 Go pour ZBrush HD + simulations FX'
    ]
  },
  {
    id: 'mat-meteora',
    name: 'PC Pro Meteora IA (Win11)',
    vendor: 'Materiel.net',
    price: 3949.95,
    priceNote: 'Gamme professionnelle, stock 15+ jours',
    tier: 'pro',
    inStock: false,
    cpu: 'AMD Ryzen 7 9800X3D (8c/16t, X3D)',
    cpuBrand: 'AMD',
    gpu: 'Gigabyte RTX 5080 WindForce OC SFF 16 Go GDDR7',
    aib: 'Gigabyte',
    vram: 16,
    ram: 64,
    ramType: 'DDR5 6000 Crucial',
    storage: 'SSD Samsung 990 PRO 2 To NVMe Gen4',
    psu: 'Corsair RMe ATX 3.1 850W 80+ Gold',
    casing: 'Fractal Design North Mesh',
    warranty: '5 ans Materiel.net',
    url: 'https://www.materiel.net/produit/202509100004.html',
    pros: [
      '64 Go DDR5 : sweet spot scènes lourdes (Houdini, ZBrush HD, Arnold)',
      '2 To Samsung 990 PRO + RTX 5080 + X3D = workstation hybride',
      'Gamme "professionnel" Materiel.net : montage soigné'
    ],
    cons: [
      'GPU format SFF compact : refroidissement légèrement plus bruyant',
      'Délai stock 15+ jours = pas idéal si besoin immédiat'
    ]
  },
  {
    id: 'ldlc-zen-top',
    name: 'LDLC PC Zen-M5 X3D Top Perfect',
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
    casing: 'Moyen-tour verre trempé + AIO 360 mm',
    warranty: '5 ans LDLC',
    url: 'https://www.ldlc.com/fiche/PB00675804.html',
    pros: [
      'Ryzen 9 9950X3D 16 cœurs avec cache 3D = top tier rendu CPU + viewport',
      '3 To SSD total : aucune limite pour caches/bibliothèques',
      'Alim 1000W = upgrade RTX 5090 envisageable plus tard'
    ],
    cons: [
      '32 Go RAM seulement à ce prix, à passer à 64 Go',
      'DDR5 5600 légèrement en retrait vs 6000 ailleurs'
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
      'Pas de ventirad upgrade : OK 7600 mais limite si upgrade CPU',
      'SSD 1 To unique : prévoir disque secondaire pour assets'
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
      'Investissement lourd : 4000 € + écran pro = 4500-5000 € total',
      '16 Go VRAM reste la limite pour très grosses scènes Octane',
      'SSD Gen5 chauffe : dissipateur essentiel (carte mère ou aftermarket)'
    ]
  }
};

// ============================================================
// Écrans pour modélisation 3D
// ============================================================

const SCREENS = [
  // BUDGET
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

  // MID
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

  // PRO
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
