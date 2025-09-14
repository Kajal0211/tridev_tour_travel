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
    { id: 1, name: "Sedane Classic", destination: "Mumbai", type: "SEDANE'S", highlights: "Comfortable Sedane car", emoji: "🚗" },
    { id: 2, name: "SUV Adventure", destination: "Kumaun/Garhwal", type: "SUV'S", highlights: "Powerful SUV", emoji: "🚙" },
    { id: 3, name: "MPV Family Ride", destination: "South India", type: "MPV'S", highlights: "Multi-purpose vehicle", emoji: "🚐" },
    { id: 4, name: "Hatchback Eco", destination: "Goa", type: "HATCHBACK'S", highlights: "Compact hatchback", emoji: "🚗" }
  ]
};
  
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
// Enhanced event listeners
function setupEventListeners() {
    // Navigation with smooth transitions
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSectionWithTransition(section);
        });
    });
    // Enhanced forms with better feedback
    const quickInquiryForm = document.getElementById('quick-inquiry-form');
    if (quickInquiryForm) {
        quickInquiryForm.addEventListener('submit', handleQuickInquiryEnhanced);
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormEnhanced);
    }
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingFormEnhanced);
    }
     const taxiForm = document.getElementById('taxi-form');
    if (taxiForm) {
        taxiForm.addEventListener('submit', function(e) {
          e.preventDefault();
          document.getElementById('taxi-success').innerHTML =
               '<div class="message success">🚗 Taxi Booked! You will receive confirmation soon.</div>';
          taxiForm.reset();
       });
    }
                                                        
    // Enhanced filters with animations
    setupFilterListenersEnhanced();
}
// Enhanced section transitions
function showSectionWithTransition(sectionName) {
    const currentSection = document.querySelector('.section.active');
    const targetSection = document.getElementById(sectionName);
    
    if (currentSection && targetSection && currentSection !== targetSection) {
        // Fade out current section
        currentSection.style.opacity = '0';
        currentSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentSection.classList.remove('active');
            targetSection.classList.add('active');
            
            // Fade in new section
            requestAnimationFrame(() => {
                targetSection.style.opacity = '1';
                targetSection.style.transform = 'translateY(0)';
            });
            
            // Load content based on section
                  switch(sectionName) {
                      case 'destinations':
                          loadDestinationsEnhanced();
                          break;
                      case 'taxi-packages':    // updated here from 'packages'
                          loadPackagesEnhanced();
                          break;
                      case 'taxi-service':     // update your taxi booking form section here
                         // you can add logic if needed
                         break;
                   }

        }, 300);
    }
    
    // Update navigation with enhanced effects
    updateNavigationEnhanced(sectionName);
}
// Enhanced navigation update
function updateNavigationEnhanced(sectionName) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionName) {
            link.classList.add('active');
            // Add ripple effect
            addRippleEffect(link);
        }
    });
}
// Add ripple effect to elements
function addRippleEffect(element) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}
// Enhanced loading states
function addLoadingStates() {
    const style = document.createElement('style');
    style.textContent = `
        .loading-shimmer {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }
        
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}
// Enhanced featured content loading
function loadFeaturedDestinationsEnhanced() {
    const container = document.getElementById('featured-destinations');
    if (!container) return;
    
    const featuredDestinations = appData.destinations.slice(0, 3);
    
    container.innerHTML = featuredDestinations.map((destination, index) => `
        <div class="card slide-up" style="animation-delay: ${index * 0.2}s" onclick="showDestinationDetailsEnhanced(${destination.id})">
            <div class="card-image">
                ${destination.emoji} ${destination.name}
                <div class="card-overlay">
                    <button class="btn btn--outline">✨ Discover More</button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${destination.emoji} ${destination.name}</h3>
                <p class="card-description">${destination.description}</p>
                <div class="card-highlights">
                    ${destination.highlights.slice(0, 3).map(highlight => 
                        `<span class="highlight-tag">${highlight}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add hover effects
    addCardHoverEffects();
}
// Enhanced packages loading
function loadFeaturedPackagesEnhanced() {
    const container = document.getElementById('featured-packages');
    if (!container) return;
    
    const featuredPackages = appData.packages.slice(0, 3);
    
    container.innerHTML = featuredPackages.map((pkg, index) => `
        <div class="card slide-up" style="animation-delay: ${index * 0.2}s" onclick="showPackageDetailsEnhanced(${pkg.id})">
            <div class="card-image">
                ${pkg.emoji} ${pkg.destination}
                <div class="card-overlay">
                    <button class="btn btn--outline">🎁 View Package</button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${pkg.emoji} ${pkg.name}</h3>
                <div class="card-price">💰 $${pkg.price}</div>
                <div class="card-duration">⏰ ${pkg.duration}</div>
                <p class="card-description">${pkg.highlights}</p>
                <div class="card-actions">
                    <button class="btn btn--secondary" onclick="event.stopPropagation(); bookPackageEnhanced(${pkg.id})">
                        ✨ Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    addCardHoverEffects();
}
// Enhanced testimonials with animations
function loadTestimonialsEnhanced() {
    const container = document.getElementById('testimonials');
    if (!container) return;
    
    container.innerHTML = appData.testimonials.map((testimonial, index) => `
        <div class="testimonial-card fade-in" style="animation-delay: ${index * 0.3}s">
            <div class="testimonial-rating">
                ${'⭐'.repeat(testimonial.rating)}
            </div>
            <p class="testimonial-comment">${testimonial.comment}</p>
            <div class="testimonial-author">${testimonial.emoji} ${testimonial.name}</div>
            <div class="testimonial-location">📍 ${testimonial.location}</div>
        </div>
    `).join('');
}
// Enhanced card hover effects
function addCardHoverEffects() {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
    });
}
// Enhanced form handlers with better feedback
function handleQuickInquiryEnhanced(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const destination = document.getElementById('destination-input').value;
    const travelDate = document.getElementById('travel-date').value;
    const travelers = document.getElementById('travelers').value;
    
    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showMessageEnhanced(
            `🎉 Thank you for your inquiry! Our travel experts will contact you within 2 hours with a personalized quote for ${destination}.`, 
            'success'
        );
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}
function handleContactFormEnhanced(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        showMessageEnhanced('🎊 Message sent successfully! We will get back to you within 24 hours.', 'success');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
}
function handleBookingFormEnhanced(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const packageId = data.packageId;
    const pkg = appData.packages.find(p => p.id == packageId);
    
    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '⏳ Processing Booking...';
    submitBtn.disabled = true;
    
    // Simulate booking
    setTimeout(() => {
        showMessageEnhanced(`🎉 Booking confirmed for ${pkg.name}! Booking reference: TRI${Date.now().toString().slice(-6)}`, 'success');
        closeModal('booking-modal');
        e.target.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2500);
}
// Enhanced message system with better styling
function showMessageEnhanced(message, type = 'success') {
    const container = document.getElementById('message-container');
    if (!container) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type} slide-up`;
    messageDiv.innerHTML = `
        <div class="message-content">
            ${type === 'success' ? '✅' : '❌'} ${message}
            <button class="message-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    container.appendChild(messageDiv);
    
    // Auto remove after 6 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.parentNode.removeChild(messageDiv);
                }
            }, 300);
        }
    }, 6000);
}
// Enhanced destinations loading
function loadDestinationsEnhanced() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;
    
    container.innerHTML = currentDestinations.map((destination, index) => `
        <div class="card fade-in" style="animation-delay: ${index * 0.1}s" onclick="showDestinationDetailsEnhanced(${destination.id})">
            <div class="card-image">
                ${destination.emoji} ${destination.name}
                <div class="card-overlay">
                    <button class="btn btn--outline">✨ Learn More</button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${destination.emoji} ${destination.name}</h3>
                <p class="card-description">${destination.description}</p>
                <div class="card-highlights">
                    ${destination.highlights.map(highlight => 
                        `<span class="highlight-tag">${highlight}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    addCardHoverEffects();
}
// Enhanced packages loading
function loadPackagesEnhanced() {
    const container = document.getElementById('packages-grid');
    if (!container) return;

    container.innerHTML = currentPackages.map((pkg, index) => `
        <div class="card fade-in" style="animation-delay: ${index * 0.1}s" onclick="showSectionWithTransition('taxi-service')">
            <div class="card-image">
                ${pkg.emoji} ${pkg.destination}
                <div class="card-overlay">
                    <button class="btn btn--outline">🎁 View Details</button>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${pkg.emoji} ${pkg.name}</h3>
                <p class="card-description">${pkg.highlights}</p>
                <div style="margin-top: 1rem;">
                    <button class="btn btn--primary" onclick="event.stopPropagation(); goToContact()">Enquire Now</button>
                </div>
            </div>
        </div>
    `).join('');

    addCardHoverEffects();
}

// Enhanced destination details modal
function showDestinationDetailsEnhanced(destinationId) {
    const destination = appData.destinations.find(d => d.id === destinationId);
    if (!destination) return;
    
    const modalContent = document.getElementById('destination-modal-content');
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h2>${destination.emoji} ${destination.name}</h2>
            <div class="card-image" style="margin: 1rem 0; border-radius: 12px;">
                ${destination.emoji} ${destination.name}
            </div>
        </div>
        <p style="margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.7;">${destination.description}</p>
        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">🌟 Highlights:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin-bottom: 2rem;">
            ${destination.highlights.map(highlight => `
                <div style="background: var(--bg-primary); padding: 0.75rem; border-radius: 8px; text-align: center;">
                    ${highlight}
                </div>
            `).join('')}
        </div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
            <button class="btn btn--primary" onclick="closeModal('destination-modal'); showSection('packages');">
                🎁 View Packages for ${destination.name}
            </button>
            <button class="btn btn--outline" onclick="closeModal('destination-modal');">❌ Close</button>
        </div>
    `;
    
    showModal('destination-modal');
}
// Enhanced package details modal
function showPackageDetailsEnhanced(packageId) {
    const pkg = appData.packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    const modalContent = document.getElementById('package-modal-content');
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h2>${pkg.emoji} ${pkg.name}</h2>
            <div class="card-image" style="margin: 1rem 0; border-radius: 12px;">
                ${pkg.emoji} ${pkg.destination}
            </div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0; background: var(--bg-primary); padding: 1.5rem; border-radius: 12px;">
            <div><strong>💰 Price:</strong> $${pkg.price}</div>
            <div><strong>⏰ Duration:</strong> ${pkg.duration}</div>
            <div><strong>🎯 Type:</strong> ${pkg.type}</div>
            <div><strong>📍 Destination:</strong> ${pkg.destination}</div>
        </div>
        <p style="margin: 1.5rem 0; font-size: 1.1rem; line-height: 1.7;">${pkg.highlights}</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
            <div>
                <h4 style="color: var(--success-color); margin-bottom: 1rem;">✅ Inclusions:</h4>
                <ul style="list-style: none; padding: 0;">
                    ${pkg.inclusions.map(item => `<li style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(16, 216, 118, 0.1); border-radius: 6px;">${item}</li>`).join('')}
                </ul>
            </div>
            <div>
                <h4 style="color: var(--secondary-color); margin-bottom: 1rem;">❌ Exclusions:</h4>
                <ul style="list-style: none; padding: 0;">
                    ${pkg.exclusions.map(item => `<li style="margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(245, 87, 108, 0.1); border-radius: 6px;">${item}</li>`).join('')}
                </ul>
            </div>
        </div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-top: 2rem;">
            <button class="btn btn--primary" onclick="closeModal('package-modal'); bookPackageEnhanced(${pkg.id});">
                ✨ Book This Package
            </button>
            <button class="btn btn--outline" onclick="closeModal('package-modal');">❌ Close</button>
        </div>
    `;
    
    showModal('package-modal');
}
// Enhanced booking function
function bookPackageEnhanced(packageId) {
    const pkg = appData.packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    document.getElementById('booking-package-id').value = packageId;
    showModal('booking-modal');
}
// Enhanced filter listeners
function setupFilterListenersEnhanced() {
    // Destination filters
    document.querySelectorAll('[data-region]').forEach(button => {
        button.addEventListener('click', function() {
            const region = this.getAttribute('data-region');
            filterDestinationsEnhanced(region);
            
            // Update active state with animation
            document.querySelectorAll('[data-region]').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            addRippleEffect(this);
        });
    });
    
    // Package filters
    document.querySelectorAll('[data-type]').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            filterPackagesEnhanced(type);
            
            // Update active state with animation
            document.querySelectorAll('[data-type]').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            addRippleEffect(this);
        });
    });
}
// Enhanced filter functions
function filterDestinationsEnhanced(region) {
    if (region === 'all') {
        currentDestinations = [...appData.destinations];
    } else {
        currentDestinations = appData.destinations.filter(dest => dest.region === region);
    }
    loadDestinationsEnhanced();
}
function filterPackagesEnhanced(type) {
    if (type === 'all') {
        currentPackages = [...appData.packages];
    } else {
        currentPackages = appData.packages.filter(pkg => pkg.type === type);
    }
    loadPackagesEnhanced();
}
// Enhanced search functions
function searchDestinations() {
    const searchInput = document.getElementById('destination-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        currentDestinations = [...appData.destinations];
    } else {
        currentDestinations = appData.destinations.filter(destination =>
            destination.name.toLowerCase().includes(searchTerm) ||
            destination.description.toLowerCase().includes(searchTerm) ||
            destination.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm))
        );
    }
    
    loadDestinationsEnhanced();
}
function searchPackages() {
    const searchInput = document.getElementById('package-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        currentPackages = [...appData.packages];
    } else {
        currentPackages = appData.packages.filter(pkg =>
            pkg.name.toLowerCase().includes(searchTerm) ||
            pkg.destination.toLowerCase().includes(searchTerm) ||
            pkg.highlights.toLowerCase().includes(searchTerm)
        );
    }
    
    loadPackagesEnhanced();
}
function filterByPrice() {
    const priceRange = document.getElementById('price-range');
    const priceValue = document.getElementById('price-value');
    
    if (priceRange && priceValue) {
        const maxPrice = parseInt(priceRange.value);
        priceValue.textContent = `0-${maxPrice}`;
        
        currentPackages = appData.packages.filter(pkg => pkg.price <= maxPrice);
        loadPackagesEnhanced();
    }
}
// Modal functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}
// Close modal when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});
// Add scroll effects and animations
function addScrollEffects() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Add parallax effect to hero
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}
// Intersection Observer for animations
function addIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
}
// Add search event listeners with debounce
document.addEventListener('DOMContentLoaded', function() {
    const destinationSearch = document.getElementById('destination-search');
    const packageSearch = document.getElementById('package-search');
    
    if (destinationSearch) {
        destinationSearch.addEventListener('input', debounce(searchDestinations, 300));
    }
    
    if (packageSearch) {
        packageSearch.addEventListener('input', debounce(searchPackages, 300));
    }
});
// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// Update main functions to use enhanced versions
function showSection(sectionName) {
    showSectionWithTransition(sectionName);
}
function loadFeaturedContent() {
    loadFeaturedDestinationsEnhanced();
    loadFeaturedPackagesEnhanced();
    loadTestimonialsEnhanced();
}
function showMessage(message, type) {
    showMessageEnhanced(message, type);
}
// Setup navigation functions
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const section = this.getAttribute('data-section');
            showSection(section);
        });
    });
}
function setupMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}
// Add goToContact() for Enquire Now
function goToContact() {
    showSectionWithTransition('contact');
    window.scrollTo({top: document.getElementById('contact').offsetTop-60, behavior:"smooth"});
}
window.goToContact = goToContact;
// Export functions for global access
window.showSection = showSection;
window.showMessage = showMessage;
window.closeModal = closeModal;
window.searchDestinations = searchDestinations;
window.searchPackages = searchPackages;
window.filterByPrice = filterByPrice;
