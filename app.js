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

// Initialize the application with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadFeaturedContent();
    addScrollEffects();
    addIntersectionObserver();
});

// Initialize application with enhanced animations
function initializeApp() {
    showSection('home');
    setupNavigation();
    setupMobileMenu();
    addLoadingStates();
}

// Navigation setup
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showSectionWithTransition(section);
        });
    });
}

// Show section with fade
function showSectionWithTransition(sectionName) {
    const currentSection = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionName.replace(/\s/g, '-')); // replace spaces with dashes

    if (!targetSection) return;

    if (currentSection && currentSection !== targetSection) {
        currentSection.style.opacity = '0';
        currentSection.style.transform = 'translateY(20px)';

        setTimeout(() => {
            currentSection.classList.remove('active');
            targetSection.classList.add('active');
            requestAnimationFrame(() => {
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            });

            if (sectionName.toLowerCase().includes('destination')) loadDestinationsEnhanced();
            if (sectionName.toLowerCase().includes('taxi-packages') || sectionName.toLowerCase().includes('packages')) loadPackagesEnhanced();
        }, 300);
    } else if (!currentSection) {
        targetSection.classList.add('active');
        targetSection.style.opacity = '1';
        targetSection.style.transform = 'translateY(0)';
    }
    updateNavigationEnhanced(sectionName);
}

// Update nav active link
function updateNavigationEnhanced(sectionName) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
            addRippleEffect(link);
        }
    });
}

// Adds ripple effect on nav click for UX
function addRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    element.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Load featured destinations (top 3)
function loadFeaturedDestinationsEnhanced() {
    const container = document.getElementById('featured-destinations');
    if (!container) return;

    const featuredDestinations = appData.destinations.slice(0, 3);
    container.innerHTML = featuredDestinations.map((d, i) => `
        <div class="card slide-up" style="animation-delay: ${i * 0.2}s" onclick="showDestinationDetailsEnhanced(${d.id})">
            <div class="card-image">${d.emoji} ${d.name}</div>
            <div class="card-content">
                <h3 class="card-title">${d.emoji} ${d.name}</h3>
                <p class="card-description">${d.description}</p>
                <div class="card-highlights">
                  ${d.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    addCardHoverEffects();
}

// Load featured taxi packages (top 3)
function loadFeaturedPackagesEnhanced() {
    const container = document.getElementById('featured-packages');
    if (!container) return;

    const featuredPackages = appData.packages.slice(0, 3);
    container.innerHTML = featuredPackages.map((p, i) => `
        <div class="card slide-up" style="animation-delay: ${i * 0.2}s" onclick="goToTaxiBooking()">
            <div class="card-image">${p.emoji} ${p.destination}</div>
            <div class="card-content">
                <h3 class="card-title">${p.emoji} ${p.name}</h3>
                <p class="card-description">${p.highlights}</p>
                <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
            </div>
        </div>
    `).join('');
    addCardHoverEffects();
}

// Load all taxi packages in Taxi Packages section
function loadPackagesEnhanced() {
    const container = document.getElementById('packages-grid');
    if (!container) return;

    container.innerHTML = currentPackages.map(pkg => `
        <div class="card fade-in" onclick="goToTaxiBooking()">
            <div class="card-image">${pkg.emoji} ${pkg.destination}</div>
            <div class="card-content">
                <h3 class="card-title">${pkg.emoji} ${pkg.name}</h3>
                <p class="card-description">${pkg.highlights}</p>
                <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
            </div>
        </div>
    `).join('');
    addCardHoverEffects();
}

// Go to Taxi Booking Section (called on package click)
function goToTaxiBooking() {
    showSectionWithTransition('taxi');
    window.scrollTo({top: document.getElementById('taxi').offsetTop - 60, behavior: 'smooth'});
}

// Redirect "Enquire Now" button to Contact section
function goToContact() {
    showSectionWithTransition('contact');
    window.scrollTo({top: document.getElementById('contact').offsetTop - 60, behavior: 'smooth'});
}

// Utility - card hover effect
function addCardHoverEffects() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
}

// Setup filters event listeners
function setupFilterListenersEnhanced() {
    document.querySelectorAll('[data-region]').forEach(button => {
        button.addEventListener('click', () => {
            filterDestinationsEnhanced(button.getAttribute('data-region'));
            document.querySelectorAll('[data-region]').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            addRippleEffect(button);
        });
    });
    document.querySelectorAll('[data-type]').forEach(button => {
        button.addEventListener('click', () => {
            filterPackagesEnhanced(button.getAttribute('data-type'));
            document.querySelectorAll('[data-type]').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            addRippleEffect(button);
        });
    });
}

// Filter destinations by region
function filterDestinationsEnhanced(region) {
    if (region === 'all') {
        currentDestinations = [...appData.destinations];
    } else {
        currentDestinations = appData.destinations.filter(d => d.region === region);
    }
    loadDestinationsEnhanced();
}

// Filter packages by type
function filterPackagesEnhanced(type) {
    if (type === 'all') {
        currentPackages = [...appData.packages];
    } else {
        currentPackages = appData.packages.filter(p => p.type === type);
    }
    loadPackagesEnhanced();
}

// Search destinations
function searchDestinations() {
    const input = document.getElementById('destination-search');
    if (!input) return;
    const searchTerm = input.value.toLowerCase();

    if (!searchTerm.trim()) {
        currentDestinations = [...appData.destinations];
    } else {
        currentDestinations = appData.destinations.filter(d =>
            d.name.toLowerCase().includes(searchTerm) ||
            d.description.toLowerCase().includes(searchTerm) ||
            d.region.toLowerCase().includes(searchTerm) ||
            d.highlights.some(h => h.toLowerCase().includes(searchTerm))
        );
    }
    loadDestinationsEnhanced();
}

// Search packages
function searchPackages() {
    const input = document.getElementById('package-search');
    if (!input) return;
    const searchTerm = input.value.toLowerCase();

    if (!searchTerm.trim()) {
        currentPackages = [...appData.packages];
    } else {
        currentPackages = appData.packages.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.destination.toLowerCase().includes(searchTerm) ||
            p.highlights.toLowerCase().includes(searchTerm)
        );
    }
    loadPackagesEnhanced();
}

// Modal management
function showModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Scroll effects & Intersection Observer skipped for brevity, keep as is.

// Initialization call at the end (you may already have it)
initializeApp();
setupFilterListenersEnhanced();
loadFeaturedDestinationsEnhanced();
loadFeaturedPackagesEnhanced();

// Export globals if needed:
window.showSection = showSectionWithTransition;
window.goToContact = goToContact;
window.goToTaxiBooking = goToTaxiBooking;
window.searchDestinations = searchDestinations;
window.searchPackages = searchPackages;
