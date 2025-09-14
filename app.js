// Fixed Application Data
const API_BASE_URL = 'https://tridevtourtravel-production.up.railway.app';

const appData = {
  destinations: [
    {
      id: 1,
      name: "Kumaun",
      region: "Kumaun/Garhwal",
      description: "🏔️ Beautiful Kumaun region with majestic mountains and serene landscapes.",
      highlights: ["⛰️ Trekking", "🏞️ Scenic viewpoints", "🌲 Forest walks"],
      image: "kumaun.jpg",
      emoji: "🏔️"
    },
    {
      id: 2,
      name: "Garhwal", 
      region: "Kumaun/Garhwal",
      description: "🏔️ Mystical Garhwal region with spiritual sites and adventure activities.",
      highlights: ["🕉️ Temples", "🚣 River rafting", "🌟 Spiritual tours"],
      image: "garhwal.jpg",
      emoji: "🕉️"
    },
    {
      id: 3,
      name: "North India",
      region: "North India", 
      description: "☃️ Explore the rich culture and historical marvels of North India.",
      highlights: ["🏯 Forts & Palaces", "🌲 Hill stations", "🍲 Cuisine"],
      image: "north-india.jpg",
      emoji: "🏯"
    },
    {
      id: 4,
      name: "South India",
      region: "South India",
      description: "⚓ Experience South India's temples, beaches, and lush greenery.",
      highlights: ["🏝️ Beaches", "🛕 Temples", "🌿 Backwaters"],
      image: "south-india.jpg",
      emoji: "⚓"
    },
    {
      id: 5,
      name: "Goa",
      region: "Goa",
      description: "🏖️ Beach paradise with Portuguese heritage and vibrant nightlife.",
      highlights: ["🏖️ Beaches", "🎉 Nightlife", "🏄 Water sports"],
      image: "goa-beach.jpg",
      emoji: "🏖️"
    },
    {
      id: 6,
      name: "Mumbai",
      region: "Mumbai",
      description: "🏙️ The bustling metropolis known for Bollywood, markets, and food.",
      highlights: ["🎬 Bollywood", "🛍️ Shopping", "🍲 Street food"],
      image: "mumbai.jpg",
      emoji: "🎬"
    },
    {
      id: 7,
      name: "Jammu and Kashmir",
      region: "Jammu and Kashmir",
      description: "🌸 Heavenly valleys and snowy mountains with rich culture.",
      highlights: ["❄️ Snow sports", "🏞️ Scenic beauty", "🕌 Historic mosques"],
      image: "jammu-kashmir.jpg",
      emoji: "🌸"
    }
  ],
  packages: [
    {
      id: 1,
      name: "Sedane Classic",
      destination: "Mumbai",
      type: "SEDANE'S",
      highlights: "Comfortable Sedane car for city and long-distance travel",
      emoji: "🚗",
      price: 0,
      duration: "As per requirement",
      inclusions: ["Clean vehicle", "Experienced driver", "Fuel included"],
      exclusions: ["Personal expenses", "Food & accommodation"]
    },
    {
      id: 2,
      name: "SUV Adventure",
      destination: "Kumaun/Garhwal",
      type: "SUV'S",
      highlights: "Powerful SUV for rough terrains and group travel",
      emoji: "🚙",
      price: 0,
      duration: "As per requirement",
      inclusions: ["Spacious interior", "All-terrain capable", "Fuel included"],
      exclusions: ["Personal expenses", "Food & accommodation"]
    },
    {
      id: 3,
      name: "MPV Family Ride",
      destination: "South India",
      type: "MPV'S",
      highlights: "Multi-purpose vehicle ideal for family trips",
      emoji: "🚐",
      price: 0,
      duration: "As per requirement",
      inclusions: ["Extra seats", "Comfort & luggage space", "Fuel included"],
      exclusions: ["Personal expenses", "Food & accommodation"]
    },
    {
      id: 4,
      name: "Hatchback Eco",
      destination: "Goa",
      type: "HATCHBACK'S",
      highlights: "Compact hatchback perfect for city driving",
      emoji: "🚗",
      price: 0,
      duration: "As per requirement",
      inclusions: ["Fuel efficient", "Easy parking", "Fuel included"],
      exclusions: ["Personal expenses", "Food & accommodation"]
    }
  ],
  testimonials: [
    {
      name: "Priya Sharma",
      location: "South India",
      rating: 5,
      comment: "✨ Amazing Kerala backwater experience! Tridev Travel Agency made our honeymoon absolutely unforgettable. The houseboat was luxurious and the service was impeccable! 🥥💕",
      emoji: "💕"
    },
    {
      name: "Rajesh Kumar",
      location: "Jammu",
      rating: 5,
      comment: "🏰 Professional service and incredible value for money. Their J&K tour exceeded all our expectations. The palace hotels were like a dream! Highly recommended! ⭐",
      emoji: "⭐"
    },
    {
      name: "Anita Patel",
      location: "Goa",
      rating: 4,
      comment: "🏖️ Wonderful Goa trip with the entire family. The kids absolutely loved the water sports and beach activities. Perfect vacation planning! 🌊👨‍👩‍👧‍👦",
      emoji: "🌊"
    }
  ]
};

// Global variables
let currentDestinations = [...appData.destinations];
let currentPackages = [...appData.packages];

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  loadFeaturedContent();
  addScrollEffects();
});

// Initialize app
function initializeApp() {
  showSection('home');
  setupNavigation();
  setupMobileMenu();
}

// Show sections
function showSection(sectionName) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
    targetSection.style.opacity = '1';
    targetSection.style.transform = 'translateY(0)';
  }
  
  // Load section content
  switch(sectionName) {
    case 'destinations':
      loadDestinationsEnhanced();
      break;
    case 'packages':
      loadPackagesEnhanced();
      break;
  }
  
  // Update navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-section') === sectionName);
  });
}

// Navigation setup
function setupNavigation() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
    });
  });
}

// Mobile menu
function setupMobileMenu() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
}

// Load featured content
function loadFeaturedContent() {
  loadFeaturedDestinationsEnhanced();
  loadFeaturedPackagesEnhanced();
  loadTestimonialsEnhanced();
}

// Load featured destinations
function loadFeaturedDestinationsEnhanced() {
  const container = document.getElementById('featured-destinations');
  if (!container) return;
  
  const featured = appData.destinations.slice(0, 3);
  container.innerHTML = featured.map(dest => `
    <div class="card slide-up" onclick="showDestinationDetails(${dest.id})">
      <div class="card-image">
        ${dest.emoji} ${dest.name}
      </div>
      <div class="card-content">
        <h3 class="card-title">${dest.emoji} ${dest.name}</h3>
        <p class="card-description">${dest.description}</p>
        <div class="card-highlights">
          ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Load featured packages
function loadFeaturedPackagesEnhanced() {
  const container = document.getElementById('featured-packages');
  if (!container) return;
  
  const featured = appData.packages.slice(0, 3);
  container.innerHTML = featured.map(pkg => `
    <div class="card slide-up" onclick="goToTaxiService()">
      <div class="card-image">
        ${pkg.emoji} ${pkg.destination}
      </div>
      <div class="card-content">
        <h3 class="card-title">${pkg.emoji} ${pkg.name}</h3>
        <p class="card-description">${pkg.highlights}</p>
        <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
      </div>
    </div>
  `).join('');
}

// Load testimonials
function loadTestimonialsEnhanced() {
  const container = document.getElementById('testimonials');
  if (!container) return;
  
  container.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card fade-in">
      <div class="testimonial-rating">
        ${'⭐'.repeat(testimonial.rating)}
      </div>
      <p class="testimonial-comment">${testimonial.comment}</p>
      <div class="testimonial-author">${testimonial.emoji} ${testimonial.name}</div>
      <div class="testimonial-location">📍 ${testimonial.location}</div>
    </div>
  `).join('');
}

// Load destinations grid
function loadDestinationsEnhanced() {
  const container = document.getElementById('destinations-grid');
  if (!container) return;
  
  container.innerHTML = currentDestinations.map(dest => `
    <div class="card fade-in" onclick="showDestinationDetails(${dest.id})">
      <div class="card-image">
        ${dest.emoji} ${dest.name}
      </div>
      <div class="card-content">
        <h3 class="card-title">${dest.emoji} ${dest.name}</h3>
        <p class="card-description">${dest.description}</p>
        <div class="card-highlights">
          ${dest.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// Load packages grid
function loadPackagesEnhanced() {
  const container = document.getElementById('packages-grid');
  if (!container) return;

  container.innerHTML = currentPackages.map(pkg => `
    <div class="card fade-in" onclick="goToTaxiService()">
      <div class="card-image">
        ${pkg.emoji} ${pkg.destination}
      </div>
      <div class="card-content">
        <h3 class="card-title">${pkg.emoji} ${pkg.name}</h3>
        <p class="card-description">${pkg.highlights}</p>
        <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
      </div>
    </div>
  `).join('');
}

// Navigation functions
function goToTaxiService() {
  showSection('taxi');
  window.scrollTo({top: document.getElementById('taxi').offsetTop - 60, behavior: 'smooth'});
}

function goToContact() {
  showSection('contact');
  window.scrollTo({top: document.getElementById('contact').offsetTop - 60, behavior: 'smooth'});
}

function showDestinationDetails(id) {
  const dest = appData.destinations.find(d => d.id === id);
  alert(`${dest.name}\n\n${dest.description}\n\nHighlights:\n${dest.highlights.join('\n')}`);
}

// Event listeners setup
function setupEventListeners() {
  // Contact form handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        alert(result.message);
        if (result.status === 'success') contactForm.reset();
      } catch (error) {
        alert('Error sending message. Please try again.');
      }
    });
  }

  // Taxi form handler  
  const taxiForm = document.getElementById('taxi-form');
  if (taxiForm) {
    taxiForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      
      try {
        const response = await fetch(`${API_BASE_URL}/api/taxi`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        alert(result.message);
        if (result.status === 'success') taxiForm.reset();
      } catch (error) {
        alert('Error submitting booking. Please try again.');
      }
    });
  }

  // Setup filters (moved inside the function)
  setupFilterListeners();
}


// Filter setup
function setupFilterListeners() {
  document.querySelectorAll('[data-region]').forEach(button => {
    button.addEventListener('click', function() {
      const region = this.getAttribute('data-region');
      filterDestinations(region);
      document.querySelectorAll('[data-region]').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  document.querySelectorAll('[data-type]').forEach(button => {
    button.addEventListener('click', function() {
      const type = this.getAttribute('data-type');
      filterPackages(type);
      document.querySelectorAll('[data-type]').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

// Filter functions
function filterDestinations(region) {
  currentDestinations = region === 'all' ? [...appData.destinations] :
    appData.destinations.filter(dest => dest.region === region);
  loadDestinationsEnhanced();
}

function filterPackages(type) {
  currentPackages = type === 'all' ? [...appData.packages] :
    appData.packages.filter(pkg => pkg.type === type);
  loadPackagesEnhanced();
}

// Search functions
function searchDestinations() {
  const input = document.getElementById('destination-search');
  if (!input) return;
  const term = input.value.toLowerCase();
  currentDestinations = !term ? [...appData.destinations] :
    appData.destinations.filter(d => 
      d.name.toLowerCase().includes(term) ||
      d.description.toLowerCase().includes(term)
    );
  loadDestinationsEnhanced();
}

function searchPackages() {
  const input = document.getElementById('package-search');
  if (!input) return;
  const term = input.value.toLowerCase();
  currentPackages = !term ? [...appData.packages] :
    appData.packages.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.destination.toLowerCase().includes(term)
    );
  loadPackagesEnhanced();
}

// Scroll effects
function addScrollEffects() {
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Global exports
window.showSection = showSection;
window.goToContact = goToContact;
window.goToTaxiService = goToTaxiService;
window.searchDestinations = searchDestinations;
window.searchPackages = searchPackages;
