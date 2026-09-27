// Eco Avengers - Main Frontend Script

const charactersData = {
  'energy-scientist': {
    name: 'Energy Scientist',
    title: 'Energy Transition Specialist',
    color: '#FF7A00',
    badge: 'Energy Science',
    ability: 'Reduces the difficulty level of energy crises by 1 point across all regions.',
    description: 'A renewable technology expert leading eco-friendly fusion research and large-scale batteries to accelerate global decarbonization.',
    stats: { research: 95, diplomacy: 70, mobility: 65, crisis: 85 },
    sheetImg: 'assets/images/characters/energy-scientist.png',
    quote: '"Clean energy is the ultimate key to Earth\'s survival."'
  },
  'ecologist': {
    name: 'Ecologist',
    title: 'Biodiversity Guardian',
    color: '#FF7A00',
    badge: 'Environmental Ecology',
    ability: 'Reduces the difficulty level of environmental degradation by 1 point.',
    description: 'A rainforest and coral reef ecosystem restoration expert who protects biodiversity from mass extinction.',
    stats: { research: 90, diplomacy: 75, mobility: 80, crisis: 88 },
    sheetImg: 'assets/images/characters/ecologist.png',
    quote: '"Every species saved maintains the balance of the world\'s ecosystem."'
  },
  'environmental-activist': {
    name: 'Environmental Activist',
    title: 'Grassroots Action Driver',
    color: '#FF7A00',
    badge: 'Grassroots Movement',
    ability: 'Can move two spaces at once in a single turn.',
    description: 'A frontline activist with the highest mobility who unites global communities to take immediate real action.',
    stats: { research: 70, diplomacy: 90, mobility: 100, crisis: 80 },
    sheetImg: 'assets/images/characters/environmental-activist.png',
    quote: '"Climate action cannot wait for slow compromise."'
  },
  'policymaker': {
    name: 'Policymaker',
    title: 'Global Regulation Diplomat',
    color: '#FF7A00',
    badge: 'Global Governance',
    ability: 'Grants +1 bonus to the first dice roll of nearby allied players.',
    description: 'An international policy architect and carbon tax regulator who provides strategic support buffs for the team.',
    stats: { research: 78, diplomacy: 98, mobility: 60, crisis: 82 },
    sheetImg: 'assets/images/characters/policymaker.png',
    quote: '"Smart policies protect millions of hectares of protected forests."'
  },
  'climate-engineer': {
    name: 'Climate Engineer',
    title: 'Climate Resilience Engineer',
    color: '#FF7A00',
    badge: 'Climate Engineering',
    ability: 'Reduces the difficulty level of climate resilience challenges by 1 point.',
    description: 'A future-tech engineer developing Direct Air Capture facilities and extreme storm barriers in coastal regions.',
    stats: { research: 98, diplomacy: 65, mobility: 72, crisis: 92 },
    sheetImg: 'assets/images/characters/climate-engineer.png',
    quote: '"Cutting-edge technology must be nature\'s shield."'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initCharacters();
  initModals();
  initMobileMenu();
});

// Character Switcher
function initCharacters() {
  const tabs = document.querySelectorAll('.char-btn');
  const sheetImg = document.getElementById('charSheetImg');
  const charName = document.getElementById('charName');
  const charTitle = document.getElementById('charTitle');
  const charAbility = document.getElementById('charAbility');
  const charDesc = document.getElementById('charDesc');
  const charQuote = document.getElementById('charQuote');
  const charBadge = document.getElementById('charBadge');

  const statResearch = document.getElementById('statResearch');
  const statDiplomacy = document.getElementById('statDiplomacy');
  const statMobility = document.getElementById('statMobility');
  const statCrisis = document.getElementById('statCrisis');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.char;
      const data = charactersData[key];
      if (!data) return;

      // Update button active state
      tabs.forEach(t => {
        t.classList.remove('bg-orange-500', 'text-white', 'shadow-[3px_3px_0px_#1E293B]');
        t.classList.add('bg-white', 'text-slate-800');
      });
      tab.classList.remove('bg-white', 'text-slate-800');
      tab.classList.add('bg-orange-500', 'text-white', 'shadow-[3px_3px_0px_#1E293B]');

      // Update contents
      if (sheetImg) sheetImg.src = data.sheetImg;
      if (charName) charName.textContent = data.name;
      if (charTitle) charTitle.textContent = data.title;
      if (charAbility) charAbility.textContent = data.ability;
      if (charDesc) charDesc.textContent = data.description;
      if (charQuote) charQuote.textContent = data.quote;
      if (charBadge) charBadge.textContent = data.badge;

      if (statResearch) {
        statResearch.style.width = data.stats.research + '%';
        statResearch.textContent = data.stats.research;
      }
      if (statDiplomacy) {
        statDiplomacy.style.width = data.stats.diplomacy + '%';
        statDiplomacy.textContent = data.stats.diplomacy;
      }
      if (statMobility) {
        statMobility.style.width = data.stats.mobility + '%';
        statMobility.textContent = data.stats.mobility;
      }
      if (statCrisis) {
        statCrisis.style.width = data.stats.crisis + '%';
        statCrisis.textContent = data.stats.crisis;
      }
    });
  });
}

// Download Modal
function initModals() {
  const downloadModal = document.getElementById('downloadModal');
  const downloadTriggers = document.querySelectorAll('.trigger-download');
  const closeDownloadBtn = document.getElementById('closeDownloadModal');
  const progressBar = document.getElementById('downloadProgress');
  const progressText = document.getElementById('downloadProgressText');

  downloadTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (downloadModal) {
        downloadModal.classList.remove('hidden');
        downloadModal.classList.add('flex');
        startDownloadFlow();
      }
    });
  });

  if (closeDownloadBtn && downloadModal) {
    closeDownloadBtn.addEventListener('click', () => {
      downloadModal.classList.add('hidden');
      downloadModal.classList.remove('flex');
    });

    downloadModal.addEventListener('click', (e) => {
      if (e.target === downloadModal) {
        downloadModal.classList.add('hidden');
        downloadModal.classList.remove('flex');
      }
    });
  }

  function startDownloadFlow() {
    const apkUrl = 'download/Eco-Avengers-v1.0.zip';
    if (progressBar && progressText) {
      progressBar.style.width = '0%';
      progressText.textContent = 'Preparing file (253 MB)...';

      let p = 0;
      const interval = setInterval(() => {
        p += Math.floor(Math.random() * 25) + 20;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          progressBar.style.width = '100%';
          progressText.textContent = 'Download started automatically!';

          // Trigger download
          const link = document.createElement('a');
          link.href = apkUrl;
          link.download = 'Eco-Avengers-v1.0.zip';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          showToast('🚀 Downloading Eco-Avengers-v1.0.zip...');
        } else {
          progressBar.style.width = p + '%';
          progressText.textContent = `Connecting... ${p}%`;
        }
      }, 120);
    }
  }
}

// Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    toggleBtn.setAttribute('aria-expanded', !isHidden);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Toast
function showToast(message) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'fixed bottom-6 right-6 z-50 bg-slate-900 text-white border-2 border-orange-500 px-5 py-3 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-10 opacity-0 pointer-events-none flex items-center gap-3 text-sm font-bold';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-orange-400 text-lg"></i> <span>${message}</span>`;
  toast.classList.remove('translate-y-10', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 3500);
}
