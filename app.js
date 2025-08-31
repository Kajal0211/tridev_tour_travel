// Application data
const appData = {
  "destinations": [
    {
      "id": 1,
      "name": "Kerala",
      "region": "Asia",
      "description": "God's Own Country - backwaters, houseboats, and spice plantations",
      "highlights": ["Backwater cruises", "Spice plantations", "Ayurvedic treatments", "Hill stations"],
      "image": "kerala-backwaters.jpg"
    },
    {
      "id": 2,
      "name": "Rajasthan",
      "region": "Asia", 
      "description": "Land of Kings - palaces, deserts, and rich cultural heritage",
      "highlights": ["Desert safari", "Palace hotels", "Camel rides", "Cultural shows"],
      "image": "rajasthan-palace.jpg"
    },
    {
      "id": 3,
      "name": "Goa",
      "region": "Asia",
      "description": "Beach paradise with Portuguese heritage and vibrant nightlife",
      "highlights": ["Beautiful beaches", "Water sports", "Colonial architecture", "Nightlife"],
      "image": "goa-beach.jpg"
    },
    {
      "id": 4,
      "name": "Dubai",
      "region": "Asia",
      "description": "Futuristic city with luxury shopping and iconic architecture",
      "highlights": ["Burj Khalifa", "Desert safari", "Luxury shopping", "Modern architecture"],
      "image": "dubai-skyline.jpg"
    },
    {
      "id": 5,
      "name": "Thailand",
      "region": "Asia",
      "description": "Land of Smiles with temples, beaches, and delicious cuisine",
      "highlights": ["Ancient temples", "Island hopping", "Thai massage", "Street food"],
      "image": "thailand-temple.jpg"
    },
    {
      "id": 6,
      "name": "Singapore",
      "region": "Asia",
      "description": "Modern city-state with gardens, cuisine, and attractions",
      "highlights": ["Gardens by the Bay", "Marina Bay Sands", "Hawker centers", "Universal Studios"],
      "image": "singapore-gardens.jpg"
    }
  ],
  "packages": [
    {
      "id": 1,
      "name": "Kerala Backwater Experience",
      "destination": "Kerala",
      "price": 850,
      "duration": "5 Days 4 Nights",
      "type": "Cultural",
      "image": "kerala-package.jpg",
      "inclusions": ["Houseboat stay", "All meals", "Airport transfers", "Sightseeing"],
      "exclusions": ["Flight tickets", "Personal expenses", "Travel insurance"],
      "highlights": "Experience the serene backwaters of Kerala with luxury houseboat accommodation"
    },
    {
      "id": 2,
      "name": "Royal Rajasthan Tour",
      "destination": "Rajasthan",
      "price": 1200,
      "duration": "7 Days 6 Nights",
      "type": "Cultural",
      "image": "rajasthan-package.jpg",
      "inclusions": ["Palace hotels", "All meals", "Desert safari", "Cultural shows"],
      "exclusions": ["Flight tickets", "Personal shopping", "Tips"],
      "highlights": "Explore the magnificent palaces and forts of Rajasthan"
    },
    {
      "id": 3,
      "name": "Goa Beach Holiday",
      "destination": "Goa",
      "price": 650,
      "duration": "4 Days 3 Nights",
      "type": "Beach",
      "image": "goa-package.jpg",
      "inclusions": ["Beach resort stay", "Breakfast", "Airport transfers", "Water sports"],
      "exclusions": ["Lunch and dinner", "Alcohol", "Personal expenses"],
      "highlights": "Relax on pristine beaches with water sports activities"
    },
    {
      "id": 4,
      "name": "Dubai Luxury Experience",
      "destination": "Dubai",
      "price": 1800,
      "duration": "6 Days 5 Nights",
      "type": "Luxury",
      "image": "dubai-package.jpg",
      "inclusions": ["5-star hotel", "Desert safari", "Burj Khalifa tour", "Dubai Mall visit"],
      "exclusions": ["Flight tickets", "Meals except breakfast", "Shopping"],
      "highlights": "Experience luxury in the modern metropolis of Dubai"
    },
    {
      "id": 5,
      "name": "Thailand Island Hopping",
      "destination": "Thailand",
      "price": 950,
      "duration": "6 Days 5 Nights",
      "type": "Adventure",
      "image": "thailand-package.jpg",
      "inclusions": ["Island transfers", "Beach resorts", "Snorkeling", "Temple visits"],
      "exclusions": ["International flights", "Alcohol", "Personal expenses"],
      "highlights": "Discover beautiful islands and rich Thai culture"
    },
    {
      "id": 6,
      "name": "Singapore City Break",
      "destination": "Singapore",
      "price": 750,
      "duration": "4 Days 3 Nights", 
      "type": "City",
      "image": "singapore-package.jpg",
      "inclusions": ["City hotel", "Gardens by the Bay", "Marina Bay Sands", "Food tours"],
      "exclusions": ["Flight tickets", "Shopping", "Additional attractions"],
      "highlights": "Explore the garden city with modern attractions"
    }
  ],
  "testimonials": [
    {
      "name": "Priya Sharma",
      "location": "Mumbai",
      "rating": 5,
      "comment": "Amazing Kerala backwater experience! Tridev Travel Agency made our honeymoon unforgettable."
    },
    {
      "name": "Rajesh Kumar",
      "location": "Delhi",
      "rating": 5,
      "comment": "Professional service and great value for money. Highly recommend their Rajasthan tour."
    },
    {
      "name": "Anita Patel",
      "location": "Ahmedabad",
      "rating": 4,
      "comment": "Wonderful Goa trip with family. Kids loved the water sports and beach activities."
    }
  ]
};

// Global state
let currentSection = 'home';
let filteredDestinations = [...appData.destinations];
let filteredPackages = [...appData.packages];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadContent();
    attachEventListeners();
});

function initializeApp() {
    // Set initial active states
    updateNavigation('home');
    showSection('home');
}

function loadContent() {
    loadFeaturedDestinations();
    loadFeaturedPackages();
    loadTestimonials();
    loadAllDestinations();
    loadAllPackages();
}

function attachEventListeners() {
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showSection(section);
        });
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', toggleMobileMenu);

    // Search functionality
    const destinationSearch = document.getElementById('destination-search');
    const packageSearch = document.getElementById('package-search');
    
    if (destinationSearch) {
        destinationSearch.addEventListener('input', filterDestinations);
    }
    
    if (packageSearch) {
        packageSearch.addEventListener('input', filterPackages);
    }

    // Filter buttons for destinations
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            const filter = e.target.getAttribute('data-filter');
            filterDestinationsByRegion(filter);
        });
    });

    // Package filters
    const priceFilter = document.getElementById('price-filter');
    const typeFilter = document.getElementById('type-filter');
    
    if (priceFilter) {
        priceFilter.addEventListener('change', filterPackages);
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', filterPackages);
    }

    // Form submissions
    const quickInquiryForm = document.getElementById('quick-inquiry-form');
    const contactForm = document.getElementById('contact-form');
    const bookingForm = document.getElementById('booking-form');

    if (quickInquiryForm) {
        quickInquiryForm.addEventListener('submit', handleQuickInquiry);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingForm);
    }

    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(e.target.parentElement.id);
        }
    });

    // Keyboard navigation for modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal:not(.hidden)');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
}

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        updateNavigation(sectionName);
    }

    // Close mobile menu
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

function updateNavigation(activeSection) {
    navLinks.forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === activeSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Content loading functions
function loadFeaturedDestinations() {
    const container = document.getElementById('featured-destinations');
    if (!container) return;

    // Show first 3 destinations
    const featured = appData.destinations.slice(0, 3);
    container.innerHTML = featured.map(destination => createDestinationCard(destination)).join('');
}

function loadFeaturedPackages() {
    const container = document.getElementById('featured-packages');
    if (!container) return;

    // Show first 3 packages
    const featured = appData.packages.slice(0, 3);
    container.innerHTML = featured.map(pkg => createPackageCard(pkg)).join('');
}

function loadTestimonials() {
    const container = document.getElementById('testimonials');
    if (!container) return;

    container.innerHTML = appData.testimonials.map(testimonial => createTestimonialCard(testimonial)).join('');
}

function loadAllDestinations() {
    const container = document.getElementById('all-destinations');
    if (!container) return;

    renderDestinations(filteredDestinations);
}

function loadAllPackages() {
    const container = document.getElementById('all-packages');
    if (!container) return;

    renderPackages(filteredPackages);
}

// Card creation functions
function createDestinationCard(destination) {
    return `
        <div class="destination-card" onclick="showDestinationDetails(${destination.id})">
            <div class="card-image">
                <span>📍 ${destination.name}</span>
            </div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <button class="btn btn--primary btn--sm">Learn More</button>
            </div>
        </div>
    `;
}

function createPackageCard(pkg) {
    return `
        <div class="package-card">
            <div class="card-image">
                <span>🎒 ${pkg.destination}</span>
            </div>
            <div class="card-content">
                <div class="package-type">${pkg.type}</div>
                <h3>${pkg.name}</h3>
                <div class="package-price">$${pkg.price}</div>
                <div class="package-duration">${pkg.duration}</div>
                <p>${pkg.highlights}</p>
                <ul class="highlights-list">
                    ${pkg.inclusions.slice(0, 3).map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button class="btn btn--primary btn--full-width" onclick="showBookingModal(${pkg.id})">Book Now</button>
            </div>
        </div>
    `;
}

function createTestimonialCard(testimonial) {
    const stars = '★'.repeat(testimonial.rating) + '☆'.repeat(5 - testimonial.rating);
    
    return `
        <div class="testimonial-card">
            <div class="testimonial-rating">${stars}</div>
            <div class="testimonial-comment">"${testimonial.comment}"</div>
            <div class="testimonial-author">${testimonial.name}</div>
            <div class="testimonial-location">${testimonial.location}</div>
        </div>
    `;
}

// Filter functions
function filterDestinations() {
    const searchTerm = document.getElementById('destination-search').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    filteredDestinations = appData.destinations.filter(destination => {
        const matchesSearch = destination.name.toLowerCase().includes(searchTerm) || 
                            destination.description.toLowerCase().includes(searchTerm);
        const matchesFilter = activeFilter === 'all' || destination.region.toLowerCase() === activeFilter;
        
        return matchesSearch && matchesFilter;
    });
    
    renderDestinations(filteredDestinations);
}

function filterDestinationsByRegion(region) {
    const searchTerm = document.getElementById('destination-search')?.value.toLowerCase() || '';
    
    filteredDestinations = appData.destinations.filter(destination => {
        const matchesSearch = destination.name.toLowerCase().includes(searchTerm) || 
                            destination.description.toLowerCase().includes(searchTerm);
        const matchesFilter = region === 'all' || destination.region.toLowerCase() === region;
        
        return matchesSearch && matchesFilter;
    });
    
    renderDestinations(filteredDestinations);
}

function filterPackages() {
    const searchTerm = document.getElementById('package-search')?.value.toLowerCase() || '';
    const priceFilter = document.getElementById('price-filter')?.value || 'all';
    const typeFilter = document.getElementById('type-filter')?.value || 'all';
    
    filteredPackages = appData.packages.filter(pkg => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchTerm) || 
                            pkg.destination.toLowerCase().includes(searchTerm);
        
        let matchesPrice = true;
        if (priceFilter !== 'all') {
            if (priceFilter === '0-800') {
                matchesPrice = pkg.price <= 800;
            } else if (priceFilter === '800-1200') {
                matchesPrice = pkg.price > 800 && pkg.price <= 1200;
            } else if (priceFilter === '1200+') {
                matchesPrice = pkg.price > 1200;
            }
        }
        
        const matchesType = typeFilter === 'all' || pkg.type.toLowerCase() === typeFilter;
        
        return matchesSearch && matchesPrice && matchesType;
    });
    
    renderPackages(filteredPackages);
}

function renderDestinations(destinations) {
    const container = document.getElementById('all-destinations');
    if (!container) return;

    if (destinations.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="color: var(--color-text-secondary); font-size: var(--font-size-lg);">
                    No destinations found matching your criteria.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = destinations.map(destination => createDestinationCard(destination)).join('');
}

function renderPackages(packages) {
    const container = document.getElementById('all-packages');
    if (!container) return;

    if (packages.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="color: var(--color-text-secondary); font-size: var(--font-size-lg);">
                    No packages found matching your criteria.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = packages.map(pkg => createPackageCard(pkg)).join('');
}

// Modal functions
function showDestinationDetails(destinationId) {
    const destination = appData.destinations.find(d => d.id === destinationId);
    if (!destination) return;

    document.getElementById('modal-destination-name').textContent = destination.name;
    document.getElementById('modal-destination-description').textContent = destination.description;
    
    const highlightsList = document.getElementById('modal-destination-highlights');
    highlightsList.innerHTML = destination.highlights.map(highlight => `<li>${highlight}</li>`).join('');
    
    showModal('destination-modal');
}

function showBookingModal(packageId) {
    const pkg = appData.packages.find(p => p.id === packageId);
    if (!pkg) return;

    const packageDetails = document.getElementById('package-details');
    packageDetails.innerHTML = `
        <div class="card" style="margin-bottom: var(--space-16);">
            <div class="card__body">
                <h4>${pkg.name}</h4>
                <div class="package-price">$${pkg.price}</div>
                <div class="package-duration">${pkg.duration}</div>
                <div class="package-type">${pkg.type}</div>
            </div>
        </div>
    `;

    // Store package ID for form submission
    document.getElementById('booking-form').setAttribute('data-package-id', packageId);
    
    showModal('booking-modal');
}

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus first input if it exists
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Form handling functions
function handleQuickInquiry(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Add loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showSuccessMessage('Thank you for your inquiry! We will contact you within 24 hours with a customized quote.');
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

function handleContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Add loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showSuccessMessage('Thank you for contacting us! We will respond to your message within 24 hours.');
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
}

function handleBookingForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const packageId = form.getAttribute('data-package-id');
    const pkg = appData.packages.find(p => p.id == packageId);
    
    // Add loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        closeModal('booking-modal');
        showSuccessMessage(`Your booking request for "${pkg.name}" has been submitted successfully! Our team will contact you within 24 hours to confirm your booking.`);
        form.reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function showSuccessMessage(message) {
    document.getElementById('success-message').textContent = message;
    showModal('success-modal');
}

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

// Make functions globally available
window.showSection = showSection;
window.showDestinationDetails = showDestinationDetails;
window.showBookingModal = showBookingModal;
window.closeModal = closeModal;

// Smooth scrolling for internal links
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll effects
window.addEventListener('scroll', debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(var(--color-surface-rgb, 255, 255, 253), 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--color-surface)';
    }
}, 10));

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const cards = document.querySelectorAll('.destination-card, .package-card, .testimonial-card, .feature-card, .stat-card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }, 100);
});

// Performance optimization: lazy load content
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Error handling for forms
function handleFormErrors(form, errors) {
    // Remove existing error messages
    const existingErrors = form.querySelectorAll('.error-message');
    existingErrors.forEach(error => error.remove());

    // Add new error messages
    errors.forEach(error => {
        const field = form.querySelector(`[name="${error.field}"]`);
        if (field) {
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = error.message;
            errorElement.style.color = 'var(--color-error)';
            errorElement.style.fontSize = 'var(--font-size-sm)';
            errorElement.style.marginTop = 'var(--space-4)';
            
            field.parentNode.appendChild(errorElement);
            field.style.borderColor = 'var(--color-error)';
        }
    });
}

// Form validation
function validateForm(form) {
    const errors = [];
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            errors.push({
                field: field.name,
                message: 'This field is required'
            });
        }
    });

    // Email validation
    const emailFields = form.querySelectorAll('input[type="email"]');
    emailFields.forEach(field => {
        if (field.value && !isValidEmail(field.value)) {
            errors.push({
                field: field.name,
                message: 'Please enter a valid email address'
            });
        }
    });

    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}