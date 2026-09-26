// Eco Avengers - Main Frontend Script

const charactersData = {
  'energy-scientist': {
    name: 'Energy Scientist',
    title: 'Spesialis Transisi Energi',
    color: '#FF7A00',
    badge: 'Energy Science',
    ability: 'Mengurangi tingkat kesulitan krisis energi sebesar 1 poin di seluruh wilayah.',
    description: 'Pakar teknologi terbarukan yang memimpin riset fusi ramah lingkungan dan baterai skala besar untuk mempercepat dekarbonisasi global.',
    stats: { research: 95, diplomacy: 70, mobility: 65, crisis: 85 },
    sheetImg: 'assets/images/characters/energy-scientist.png',
    quote: '"Energi bersih adalah kunci utama kelangsungan hidup bumi."'
  },
  'ecologist': {
    name: 'Ecologist',
    title: 'Penjaga Keanekaragaman Hayati',
    color: '#FF7A00',
    badge: 'Environmental Ecology',
    ability: 'Mengurangi tingkat kesulitan degradasi lingkungan sebesar 1 poin.',
    description: 'Pakar restorasi ekosistem hutan hujan dan terumbu karang yang melindungi keanekaragaman flora & fauna dari kepunahan massal.',
    stats: { research: 90, diplomacy: 75, mobility: 80, crisis: 88 },
    sheetImg: 'assets/images/characters/ecologist.png',
    quote: '"Setiap spesies yang diselamatkan menjaga keseimbangan ekosistem dunia."'
  },
  'environmental-activist': {
    name: 'Environmental Activist',
    title: 'Penggerak Aksi Akar Rumput',
    color: '#FF7A00',
    badge: 'Grassroots Movement',
    ability: 'Dapat melangkah dua petak sekaligus dalam satu giliran putaran.',
    description: 'Aktivis garda terdepan dengan mobilitas tertinggi yang menyatukan komunitas dunia untuk segera mengambil aksi nyata.',
    stats: { research: 70, diplomacy: 90, mobility: 100, crisis: 80 },
    sheetImg: 'assets/images/characters/environmental-activist.png',
    quote: '"Aksi iklim tidak bisa menunggu kompromi yang lambat."'
  },
  'policymaker': {
    name: 'Policymaker',
    title: 'Diplomat Regulasi Global',
    color: '#FF7A00',
    badge: 'Global Governance',
    ability: 'Memberikan tambahan +1 pada hasil dadu pertama pemain kawan di sekitar.',
    description: 'Perancang kebijakan internasional dan regulasi pajak karbon yang memberikan buff bantuan strategis bagi tim.',
    stats: { research: 78, diplomacy: 98, mobility: 60, crisis: 82 },
    sheetImg: 'assets/images/characters/policymaker.png',
    quote: '"Kebijakan cerdas melindungi jutaan hektar hutan lindung."'
  },
  'climate-engineer': {
    name: 'Climate Engineer',
    title: 'Insinyur Ketahanan Iklim',
    color: '#FF7A00',
    badge: 'Climate Engineering',
    ability: 'Mengurangi tingkat kesulitan ketahanan iklim sebesar 1 poin.',
    description: 'Insinyur teknologi masa depan pengembang fasilitas Direct Air Capture dan penahan badai ekstrem di wilayah pesisir.',
    stats: { research: 98, diplomacy: 65, mobility: 72, crisis: 92 },
    sheetImg: 'assets/images/characters/climate-engineer.png',
    quote: '"Teknologi mutakhir harus menjadi perisai bagi alam kita."'
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
    const apkUrl = 'download/Eco-Avengers-v1.0.apk';
    if (progressBar && progressText) {
      progressBar.style.width = '0%';
      progressText.textContent = 'Menyiapkan berkas APK (301 MB)...';

      let p = 0;
      const interval = setInterval(() => {
        p += Math.floor(Math.random() * 25) + 20;
        if (p >= 100) {
          p = 100;
          clearInterval(interval);
          progressBar.style.width = '100%';
          progressText.textContent = 'Unduhan dimulai otomatis!';

          // Trigger download
          const link = document.createElement('a');
          link.href = apkUrl;
          link.download = 'Eco-Avengers-v1.0.apk';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          showToast('🚀 Mengunduh Eco-Avengers-v1.0.apk...');
        } else {
          progressBar.style.width = p + '%';
          progressText.textContent = `Menghubungkan... ${p}%`;
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
    mobileMenu.classList.toggle('hidden');
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
