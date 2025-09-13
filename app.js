// Enhanced Application data with emojis and better descriptions
const appData = {
  "destinations": [
  {
    "id": 1,
    "name": "Kumaun",
    "region": "Kumaun/Garhwal",
    "description": "🏔️ Beautiful Kumaun region with majestic mountains and serene landscapes.",
    "highlights": ["⛰️ Trekking", "🏞️ Scenic viewpoints", "🌲 Forest walks"],
    "image": "kumaun.jpg",
    "emoji": "🏔️"
  },
  {
    "id": 2,
    "name": "Garhwal",
    "region": "Kumaun/Garhwal",
    "description": "🏔️ Mystical Garhwal region with spiritual sites and adventure activities.",
    "highlights": ["🕉️ Temples", "🚣 River rafting", "🌟 Spiritual tours"],
    "image": "garhwal.jpg",
    "emoji": "🕉️"
  },
  {
    "id": 3,
    "name": "North India",
    "region": "North India",
    "description": "☃️ Explore the rich culture and historical marvels of North India.",
    "highlights": ["🏯 Forts & Palaces", "🌲 Hill stations", "🍲 Cuisine"],
    "image": "north-india.jpg",
    "emoji": "🏯"
  },
  {
    "id": 4,
    "name": "South India",
    "region": "South India",
    "description": "⚓ Experience South India’s temples, beaches, and lush greenery.",
    "highlights": ["🏝️ Beaches", "🛕 Temples", "🌿 Backwaters"],
    "image": "south-india.jpg",
    "emoji": "⚓"
  },
  {
    "id": 5,
    "name": "Goa",
    "region": "Goa",
    "description": "🏖️ Beach paradise with Portuguese heritage and vibrant nightlife.",
    "highlights": ["🏖️ Beaches", "🎉 Nightlife", "🏄 Water sports"],
    "image": "goa-beach.jpg",
    "emoji": "🏖️"
  },
  {
    "id": 6,
    "name": "Mumbai",
    "region": "Mumbai",
    "description": "🏙️ The bustling metropolis known for Bollywood, markets, and food.",
    "highlights": ["🎬 Bollywood", "🛍️ Shopping", "🍲 Street food"],
    "image": "mumbai.jpg",
    "emoji": "🎬"
  },
  {
    "id": 7,
    "name": "Jammu and Kashmir",
    "region": "Jammu and Kashmir",
    "description": "🌸 Heavenly valleys and snowy mountains with rich culture.",
    "highlights": ["❄️ Snow sports", "🏞️ Scenic beauty", "🕌 Historic mosques"],
    "image": "jammu-kashmir.jpg",
    "emoji": "🌸"
  }
]

   packages: [
        {
            id: 1,
            name: "Sedane Classic",
            destination: "Mumbai",
            price: 0,  // price unused now
            duration: "N/A",
            type: "SEDANE'S",
            image: "sedane-classic.jpg",
            inclusions: ["Clean vehicle", "Experienced driver", "Fuel & tolls included"],
            exclusions: [],
            highlights: "Comfortable Sedane car for city and long-distance travel",
            emoji: "🚗"
        },
        {
            id: 2,
            name: "SUV Adventure",
            destination: "Kumaun/Garhwal",
            price: 0,
            duration: "N/A",
            type: "SUV'S",
            image: "suv-adventure.jpg",
            inclusions: ["Spacious interior", "All-terrain capable", "Fuel & tolls included"],
            exclusions: [],
            highlights: "Powerful SUV for rough terrains and group travel",
            emoji: "🚙"
        },
        {
            id: 3,
            name: "MPV Family Ride",
            destination: "South India",
            price: 0,
            duration: "N/A",
            type: "MPV'S",
            image: "mpv-family.jpg",
            inclusions: ["Extra seats", "Comfort & luggage space", "Fuel & tolls included"],
            exclusions: [],
            highlights: "Multi-purpose vehicle ideal for family trips",
            emoji: "🚐"
        },
        {
            id: 4,
            name: "Hatchback Eco",
            destination: "Goa",
            price: 0,
            duration: "N/A",
            type: "HATCHBACK'S",
            image: "hatchback-eco.jpg",
            inclusions: ["Fuel efficient", "Compact & easy parking", "Fuel & tolls included"],
            exclusions: [],
            highlights: "Compact hatchback perfect for city driving and short trips",
            emoji: "🚗"
        }
    ],
  "testimonials": [
    {
      "name": "Priya Sharma",
      "location": "South India",
      "rating": 5,
      "comment": "✨ Amazing Kerala backwater experience! Tridev Travel Agency made our honeymoon absolutely unforgettable. The houseboat was luxurious and the service was impeccable! 🥥💕",
      "emoji": "💕"
    },
    {
      "name": "Rajesh Kumar",
      "location": "Jammu",
      "rating": 5,
      "comment": "🏰 Professional service and incredible value for money. Their J&K tour exceeded all our expectations. The palace hotels were like a dream! Highly recommended! ⭐",
      "emoji": "⭐"
    },
    {
      "name": "Anita Patel",
      "location": "Goa",
      "rating": 4,
      "comment": "🏖️ Wonderful Goa trip with the entire family. The kids absolutely loved the water sports and beach activities. Perfect vacation planning! 🌊👨‍👩‍👧‍👦",
      "emoji": "🌊"
    }
  ]
};

// Enhanced global variables
let currentDestinations = [...appData.destinations];
let currentPackages = [...appData.packages];
let isLoading = false;
// Initialize on DOM loaded
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupMobileMenu();
  setupFilterListeners();
  loadFeaturedDestinations();
  loadTaxiPackages();
  setupFormHandlers();
});

// Show/hide sections
function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(section.replace(/\s/g, '-'));
  if (target) target.classList.add('active');
  updateNavActive(section);
}

// Update nav active state
function updateNavActive(section) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === section);
  });
}

// Navigation handlers
function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', e => {
      e.preventDefault();
      const sec = link.getAttribute('data-section');
      showSection(sec);
    })
  );
}

// Mobile menu toggle
function setupMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  document.querySelectorAll('.nav-link').forEach(link =>
    link.addEventListener('click', () => navMenu.classList.remove('active'))
  );
}

// Load featured destinations
function loadFeaturedDestinations() {
  const container = document.getElementById('featured-destinations');
  if (!container) return;
  const featured = appData.destinations.slice(0, 3);
  container.innerHTML = featured.map(d => `
    <div class="card" onclick="alert('Details: ${d.name}')">
      <div class="card-image">${d.emoji} ${d.name}</div>
      <div class="card-content">
        <h3>${d.emoji} ${d.name}</h3>
        <p>${d.description}</p>
      </div>
    </div>
  `).join('');
}

// Load taxi packages
function loadTaxiPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;
  container.innerHTML = currentPackages.map(p => `
    <div class="card" onclick="goToTaxiService()">
      <div class="card-image">${p.emoji} ${p.destination}</div>
      <div class="card-content">
        <h3>${p.emoji} ${p.name}</h3>
        <p>${p.highlights}</p>
        <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
      </div>
    </div>
  `).join('');
}

// Go to Taxi service (booking)
function goToTaxiService() {
  showSection('taxi-service');
  window.scrollTo({top: document.getElementById('taxi-service').offsetTop - 50, behavior: 'smooth'});
}

// Go to Contact section for enquiry
function goToContact() {
  showSection('contact');
  window.scrollTo({top: document.getElementById('contact').offsetTop - 50, behavior: 'smooth'});
}

// Setup filters
function setupFilterListeners() {
  document.querySelectorAll('[data-region]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentDestinations = btn.dataset.region === 'all' ? [...appData.destinations] :
        appData.destinations.filter(d => d.region === btn.dataset.region);
      loadDestinations();
      document.querySelectorAll('[data-region]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.querySelectorAll('[data-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPackages = btn.dataset.type === 'all' ? [...appData.packages] :
        appData.packages.filter(p => p.type === btn.dataset.type);
      loadTaxiPackages();
      document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// Load filtered destinations
function loadDestinations() {
  const container = document.getElementById('destinations-grid');
  if (!container) return;
  container.innerHTML = currentDestinations.map(d => `
    <div class="card" onclick="alert('Details: ${d.name}')">
      <div class="card-image">${d.emoji} ${d.name}</div>
      <div class="card-content">
        <h3>${d.emoji} ${d.name}</h3>
        <p>${d.description}</p>
      </div>
    </div>
  `).join('');
}

// Search functions
function searchDestinations() {
  const v = document.getElementById('destination-search').value.toLowerCase();
  currentDestinations = !v ? [...appData.destinations] :
    appData.destinations.filter(d => d.name.toLowerCase().includes(v) || d.description.toLowerCase().includes(v));
  loadDestinations();
}
function searchPackages() {
  const v = document.getElementById('package-search').value.toLowerCase();
  currentPackages = !v ? [...appData.packages] :
    appData.packages.filter(p => p.name.toLowerCase().includes(v) || p.destination.toLowerCase().includes(v));
  loadTaxiPackages();
}

// Form submit handlers
function setupFormHandlers() {
  const taxiForm = document.getElementById('taxi-form');
  taxiForm?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Taxi booking submitted!'); // Replace with your backend submission
    taxiForm.reset();
  });
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Contact form submitted!'); // Replace with your backend submission
    contactForm.reset();
  });
}
