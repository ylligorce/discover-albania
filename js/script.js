(function () {
  'use strict';

  // ========================
  // 1. HERO SLIDESHOW DATA
  // ========================
  var HERO_IMAGES = [
    {
      url: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1920&q=80',
      alt: 'Koman Lake at dawn, Albania'
    },
    {
      url: 'https://images.unsplash.com/photo-1580139648389-0f86fb839de2?w=1920&q=80',
      alt: 'Berat river and mountains at sunset, Albania'
    },
    {
      url: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=1920&q=80',
      alt: 'Albanian Alps mountain peaks and valley'
    }
  ];

  // ========================
  // 2. CATEGORY COLORS
  // ========================
  var CATEGORY_COLORS = {
    cultural: '#7B5EA7',
    coastal: '#2B7A9B',
    adventure: '#D97B2B',
    nature: '#3A8C5C'
  };

  // ========================
  // 3. TOUR DATA
  // ========================
  var TOURS = [
    {
      id: 'tirana-culture',
      title: 'Tirana: Capital Culture & History',
      region: 'Central Albania',
      category: 'cultural',
      duration: 1,
      durationLabel: 'Full Day',
      rating: 4.8,
      reviewCount: 124,
      badge: null,
      shortDescription:
        "Explore Albania's vibrant capital, from the colorful Blloku district to the historic Skanderbeg Square and Cold War bunkers.",
      fullDescription:
        "Immerse yourself in Tirana's fascinating blend of Ottoman, Italian, and modern architecture. This full-day guided tour takes you through the heart of Albania's capital, where vibrant colors meet rich history. From the iconic Skanderbeg Square to the hidden gems of the Blloku district, you'll discover a city that has reinvented itself while honoring its past.",
      image: 'https://images.unsplash.com/photo-1600263997535-e4f38ca66c3f?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1600263997535-e4f38ca66c3f?w=1200&q=80',
      imageAlt: 'Colorful buildings in Tirana city center',
      highlights: ['Skanderbeg Square', "Bunk'Art Museum", "Et'hem Bey Mosque", 'Grand Park & Lake'],
      itinerary: [
        { time: '09:00', activity: 'Meet at Skanderbeg Square' },
        { time: '10:00', activity: 'Walking tour of the historical center' },
        { time: '12:30', activity: 'Traditional lunch at a local restaurant' },
        { time: '14:00', activity: "Bunk'Art 2 Museum visit" },
        { time: '16:00', activity: 'Blloku district exploration' },
        { time: '18:00', activity: 'Sunset drinks at Sky Tower' }
      ],
      includes: ['Licensed English-speaking guide', 'Museum entrance fees', 'Traditional lunch', 'All transportation within city'],
      excludes: ['Hotel pickup/dropoff outside Tirana', 'Personal expenses', 'Tips'],
      pricing: { solo: 149, small: 129, medium: 109, large: 89 }
    },
    {
      id: 'berat-heritage',
      title: 'Berat: City of a Thousand Windows',
      region: 'Central Albania',
      category: 'cultural',
      duration: 2,
      durationLabel: '2 Days / 1 Night',
      rating: 4.9,
      reviewCount: 203,
      badge: 'Best Seller',
      shortDescription: 'Discover the UNESCO World Heritage city of Berat, famed for its stunning Ottoman architecture and hilltop castle.',
      fullDescription: "Step into a living museum as you explore Berat, one of the oldest cities in Albania and a UNESCO World Heritage Site. Known as the 'City of a Thousand Windows' for its distinctive Ottoman houses, Berat offers an unforgettable journey through centuries of history. From the imposing castle perched above the city to the charming Mangalem quarter, every corner tells a story.",
      image: 'https://images.unsplash.com/photo-1580139648389-0f86fb839de2?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1580139648389-0f86fb839de2?w=1200&q=80',
      imageAlt: 'White Ottoman houses of Berat climbing up the hillside',
      highlights: ['Berat Castle', 'Mangalem Quarter', 'Onufri Museum', 'Gorica Bridge', 'Wine Tasting'],
      itinerary: [
        { time: 'Day 1 AM', activity: 'Depart Tirana, scenic drive to Berat' },
        { time: 'Day 1 PM', activity: 'Explore Mangalem & Gorica quarters' },
        { time: 'Day 1 Eve', activity: 'Traditional dinner & wine tasting' },
        { time: 'Day 2 AM', activity: 'Berat Castle & Onufri Museum' },
        { time: 'Day 2 PM', activity: 'Free time & return to Tirana' }
      ],
      includes: ['Licensed guide', '1 night 3-star hotel', 'Breakfast', 'Wine tasting', 'Entrance fees', 'Transport from Tirana'],
      excludes: ['Lunch & dinner (except day 1)', 'Personal expenses'],
      pricing: { solo: 219, small: 189, medium: 159, large: 129 }
    },
    {
      id: 'saranda-riviera',
      title: 'Saranda & the Albanian Riviera',
      region: 'Southern Albania',
      category: 'coastal',
      duration: 3,
      durationLabel: '3 Days / 2 Nights',
      rating: 4.9,
      reviewCount: 187,
      badge: 'Popular',
      shortDescription: 'Crystal-clear waters, hidden beaches, and the ancient ruins of Butrint along the stunning Albanian Riviera.',
      fullDescription: "Experience the breathtaking Albanian Riviera, where turquoise waters meet dramatic clifftops. This 3-day journey takes you from the vibrant coastal town of Saranda to the pristine beaches of Ksamil, the mystical Blue Eye Spring, and the ancient UNESCO site of Butrint. It's the perfect blend of relaxation and exploration.",
      image: 'https://images.unsplash.com/photo-1586953135231-e4fde9b3a035?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1586953135231-e4fde9b3a035?w=1200&q=80',
      imageAlt: 'Turquoise waters of the Albanian coast',
      highlights: ['Ksamil Beaches', 'Blue Eye Spring', 'Lekursi Castle', 'Butrint National Park', 'Mirror Beach'],
      itinerary: [
        { time: 'Day 1', activity: 'Travel to Saranda, Lekursi Castle sunset' },
        { time: 'Day 2', activity: 'Ksamil beaches & Butrint National Park' },
        { time: 'Day 3', activity: 'Blue Eye Spring, Mirror Beach & return' }
      ],
      includes: ['Licensed guide', '2 nights accommodation', 'Breakfast daily', 'Boat trip', 'Butrint entrance', 'Transport from Tirana'],
      excludes: ['Lunch & dinner', 'Beach equipment rental'],
      pricing: { solo: 349, small: 299, medium: 249, large: 199 }
    },
    {
      id: 'gjirokaster-stone',
      title: 'Gjirokastra: The Stone City',
      region: 'Southern Albania',
      category: 'cultural',
      duration: 2,
      durationLabel: '2 Days / 1 Night',
      rating: 4.8,
      reviewCount: 156,
      badge: null,
      shortDescription: "Wander through the UNESCO-listed 'City of Stone' with its dramatic castle and Ottoman bazaar.",
      fullDescription: "Gjirokastra, the birthplace of writer Ismail Kadare, is a remarkable stone city that seems frozen in time. Its imposing castle \u2014 one of the largest in the Balkans \u2014 overlooks a valley of stone-roofed houses and cobblestone streets. This 2-day tour reveals the city's Ottoman heritage, Cold War secrets, and the warm hospitality of Southern Albania.",
      image: 'https://images.unsplash.com/photo-1592486058517-89c4837bfbe7?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1592486058517-89c4837bfbe7?w=1200&q=80',
      imageAlt: 'Stone rooftops of Gjirokastra with castle in background',
      highlights: ['Gjirokastra Castle', 'Old Bazaar', 'Zekate House', 'Cold War Tunnel', 'Antigonea Ruins'],
      itinerary: [
        { time: 'Day 1 AM', activity: 'Depart Tirana, scenic drive south' },
        { time: 'Day 1 PM', activity: 'Castle visit & Old Bazaar exploration' },
        { time: 'Day 1 Eve', activity: 'Traditional dinner at Zekate House area' },
        { time: 'Day 2 AM', activity: 'Cold War Tunnel & Antigonea Ruins' },
        { time: 'Day 2 PM', activity: 'Free time & return to Tirana' }
      ],
      includes: ['Licensed guide', '1 night hotel', 'Breakfast', 'Entrance fees', 'Transport from Tirana'],
      excludes: ['Lunch & dinner', 'Personal expenses'],
      pricing: { solo: 199, small: 169, medium: 139, large: 109 }
    },
    {
      id: 'valbona-theth',
      title: 'Valbona to Theth: Alpine Trek',
      region: 'Northern Albania',
      category: 'adventure',
      duration: 3,
      durationLabel: '3 Days / 2 Nights',
      rating: 4.7,
      reviewCount: 98,
      badge: 'Adventure',
      shortDescription: "Hike the legendary Valbona-Theth trail through the Albanian Alps \u2014 one of Europe's best treks.",
      fullDescription: "The Valbona to Theth trek is the crown jewel of Albanian hiking. Crossing the stunning Valbona Pass at 1,795 meters, this trail offers jaw-dropping views of the Accursed Mountains. Combined with the spectacular Koman Lake ferry ride, traditional guesthouses, and the enchanting Blue Eye of Theth, this is an adventure you'll never forget.",
      image: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=1200&q=80',
      imageAlt: 'Dramatic mountain peaks along the Valbona valley trail',
      highlights: ['Valbona Valley', 'Valbona Pass (1,795m)', 'Theth Village', 'Blue Eye of Theth', 'Koman Lake Ferry'],
      itinerary: [
        { time: 'Day 1', activity: 'Koman Lake ferry to Fierza, drive to Valbona' },
        { time: 'Day 2', activity: 'Trek Valbona to Theth (6-7 hours)' },
        { time: 'Day 3', activity: 'Explore Theth, Blue Eye waterfall & return' }
      ],
      includes: ['Mountain guide', '2 nights guesthouse', 'All meals', 'Koman ferry ticket', 'Transport from Shkodra'],
      excludes: ['Hiking gear', 'Travel insurance', 'Transport to Shkodra from Tirana'],
      pricing: { solo: 289, small: 249, medium: 209, large: 169 }
    },
    {
      id: 'butrint-archaeology',
      title: 'Butrint: Ancient Ruins & Wetlands',
      region: 'Southern Albania',
      category: 'cultural',
      duration: 1,
      durationLabel: 'Full Day',
      rating: 4.8,
      reviewCount: 142,
      badge: null,
      shortDescription: 'Explore 2,500 years of history at Butrint National Park, a UNESCO site amid stunning wetland scenery.',
      fullDescription: "Butrint is one of the Mediterranean's most important archaeological sites, with layers of civilization from Greek to Ottoman times. Set on a peninsula surrounded by lush wetlands, this UNESCO World Heritage Site features a stunning Roman theater, early Christian baptistery with intricate mosaics, and a Venetian tower with panoramic views. Your archaeologist guide brings 2,500 years of history to life.",
      image: 'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?w=1200&q=80',
      imageAlt: 'Ancient ruins at an Albanian archaeological park',
      highlights: ['Roman Theater', 'Baptistery Mosaics', 'Venetian Tower', 'Vivari Channel', 'Wetland Wildlife'],
      itinerary: [
        { time: '08:00', activity: 'Depart from Saranda' },
        { time: '09:00', activity: 'Arrive at Butrint, guided tour begins' },
        { time: '12:00', activity: 'Packed lunch by the Vivari Channel' },
        { time: '13:30', activity: 'Venetian Tower & wetland walk' },
        { time: '15:30', activity: 'Return to Saranda' }
      ],
      includes: ['Archaeologist guide', 'Entrance fees', 'Packed lunch', 'Transport from Saranda'],
      excludes: ['Hotel accommodation', 'Personal expenses'],
      pricing: { solo: 119, small: 99, medium: 79, large: 65 }
    },
    {
      id: 'albanian-riviera-road',
      title: 'Albanian Riviera Road Trip',
      region: 'Southern Albania',
      category: 'coastal',
      duration: 5,
      durationLabel: '5 Days / 4 Nights',
      rating: 5.0,
      reviewCount: 76,
      badge: 'Premium',
      shortDescription: "The ultimate coastal journey from Vlora to Ksamil along one of the Mediterranean's most beautiful drives.",
      fullDescription: "Embark on the ultimate Albanian coastal experience. Starting from Vlora, you'll traverse the breathtaking Llogara Pass with its panoramic views, descend to the pristine beaches of Dhermi and Himara, discover the Venetian fortress of Porto Palermo, and end at the paradise islands of Ksamil. This premium 5-day road trip covers the entire Albanian Riviera with handpicked seaside hotels and unforgettable experiences.",
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
      imageAlt: 'Winding coastal road along a Mediterranean coastline',
      highlights: ['Llogara Pass', 'Dhermi Beach', 'Porto Palermo Castle', 'Himara', 'Gjipe Beach', 'Ksamil Islands'],
      itinerary: [
        { time: 'Day 1', activity: 'Tirana to Vlora, explore the Vlora waterfront' },
        { time: 'Day 2', activity: 'Llogara Pass & Dhermi Beach' },
        { time: 'Day 3', activity: 'Porto Palermo, Himara & Gjipe Beach' },
        { time: 'Day 4', activity: 'Saranda & boat trip to Ksamil Islands' },
        { time: 'Day 5', activity: 'Free morning & scenic return to Tirana' }
      ],
      includes: ['Licensed guide', '4 nights seaside hotels', 'Breakfast daily', 'Private vehicle', 'Boat trip to Ksamil Islands', 'All entrance fees'],
      excludes: ['Lunch & dinner', 'Beach activities', 'Personal expenses'],
      pricing: { solo: 599, small: 499, medium: 419, large: 349 }
    },
    {
      id: 'shkodra-koman',
      title: 'Shkodra & Lake Koman Ferry',
      region: 'Northern Albania',
      category: 'nature',
      duration: 2,
      durationLabel: '2 Days / 1 Night',
      rating: 4.7,
      reviewCount: 89,
      badge: null,
      shortDescription: "Experience the stunning Koman Lake ferry ride, often called Europe's best-kept secret fjord.",
      fullDescription: "Begin in historic Shkodra, Albania's cultural capital, where the ancient Rozafa Castle watches over the meeting of river and lake. Then embark on the legendary Koman Lake ferry \u2014 a breathtaking journey through emerald waters flanked by steep canyon walls, often compared to Norwegian fjords. Continue to the pristine Shala River, known as 'Albania's Thailand' for its crystal-clear turquoise waters.",
      image: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&q=80',
      heroImage: 'https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1200&q=80',
      imageAlt: 'Emerald waters of a lake between steep canyon walls',
      highlights: ['Rozafa Castle', 'Shkodra Lake Cycling', 'Koman Lake Ferry', 'Shala River', 'Traditional Guesthouse'],
      itinerary: [
        { time: 'Day 1 AM', activity: 'Tirana to Shkodra, Rozafa Castle visit' },
        { time: 'Day 1 PM', activity: 'Bike ride along Shkodra Lake' },
        { time: 'Day 1 Eve', activity: 'Traditional dinner & guesthouse' },
        { time: 'Day 2 AM', activity: 'Koman Lake ferry to Fierza' },
        { time: 'Day 2 PM', activity: 'Shala River visit & return to Tirana' }
      ],
      includes: ['Licensed guide', '1 night guesthouse', 'Dinner & breakfast', 'Ferry tickets', 'Bike rental', 'Transport from Tirana'],
      excludes: ['Lunch on day 1', 'Personal expenses'],
      pricing: { solo: 229, small: 199, medium: 169, large: 139 }
    }
  ];

  var PRICING_TIERS = [
    { key: 'solo', label: '1 person', min: 1, max: 1, icon: '\uD83D\uDC64' },
    { key: 'small', label: '2\u20134 people', min: 2, max: 4, icon: '\uD83D\uDC65' },
    { key: 'medium', label: '5\u201310 people', min: 5, max: 10, icon: '\uD83D\uDC6A' },
    { key: 'large', label: '10+ people', min: 11, max: Infinity, icon: '\uD83C\uDF1F' }
  ];

  // ========================
  // 4. DOM REFERENCES
  // ========================
  var DOM = {};

  function cacheDom() {
    DOM.header = document.getElementById('site-header');
    DOM.navToggle = document.querySelector('.nav-toggle');
    DOM.navMenu = document.getElementById('nav-menu');
    DOM.navLinks = document.querySelectorAll('.nav-link');
    DOM.toursGrid = document.getElementById('tours-grid');
    DOM.filterBtns = document.querySelectorAll('.filter-btn');
    DOM.sortSelect = document.getElementById('sort-select');
    DOM.pricingSelector = document.getElementById('pricing-tour-selector');
    DOM.pricingCards = document.getElementById('pricing-cards');
    DOM.bookingForm = document.getElementById('booking-form');
    DOM.tourSelect = document.getElementById('form-tour');
    DOM.peopleInput = document.getElementById('form-people');
    DOM.dateInput = document.getElementById('form-date');
    DOM.estimateAmount = document.getElementById('estimate-amount');
    DOM.modal = document.getElementById('tour-modal');
    DOM.bookingSuccess = document.getElementById('booking-success');
    DOM.successClose = document.getElementById('success-close');
    DOM.backToTop = document.getElementById('back-to-top');
  }

  // ========================
  // 5. STATE
  // ========================
  var currentFilter = 'all';
  var currentSort = 'featured';
  var currentPricingTour = TOURS[0].id;
  var lastFocusedElement = null;
  var heroSlideIndex = 0;
  var heroInterval = null;

  // ========================
  // 6. SVG HELPERS
  // ========================
  function createStarSVG() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }

  function createClockSVG() {
    return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  }

  function createMapPinSVG() {
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  }

  // ========================
  // 7. HERO SLIDESHOW
  // ========================
  function initHeroSlideshow() {
    var slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    function showSlide(index) {
      slides.forEach(function (s, i) {
        s.classList.toggle('active', i === index);
      });
    }

    showSlide(0);

    heroInterval = setInterval(function () {
      heroSlideIndex = (heroSlideIndex + 1) % slides.length;
      showSlide(heroSlideIndex);
    }, 5000);
  }

  // ========================
  // 8. COUNTER ANIMATION
  // ========================
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-number[data-target]');
    var animated = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(function (counter) {
            var target = parseInt(counter.getAttribute('data-target'), 10);
            var suffix = counter.getAttribute('data-suffix') || '';
            var duration = 2000;
            var start = 0;
            var startTime = null;

            function step(timestamp) {
              if (!startTime) startTime = timestamp;
              var progress = Math.min((timestamp - startTime) / duration, 1);
              var eased = 1 - Math.pow(1 - progress, 3);
              var current = Math.floor(eased * target);
              counter.textContent = current + suffix;
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                counter.textContent = target + suffix;
              }
            }
            requestAnimationFrame(step);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    var statsSection = document.querySelector('.hero-stats');
    if (statsSection) observer.observe(statsSection);
  }

  // ========================
  // 9. RENDER FUNCTIONS
  // ========================

  function renderTourCards(tours) {
    DOM.toursGrid.innerHTML = '';

    tours.forEach(function (tour, index) {
      var card = document.createElement('article');
      card.className = 'tour-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('data-category', tour.category);

      var badgeHtml = tour.badge
        ? '<span class="tour-badge">' + tour.badge + '</span>'
        : '';

      var catColor = CATEGORY_COLORS[tour.category] || '#7B5EA7';

      card.innerHTML =
        '<div class="tour-card-image">' +
          '<img src="' + tour.image + '" alt="' + tour.imageAlt + '" loading="lazy" width="400" height="300">' +
          '<div class="tour-card-image-overlay"></div>' +
          badgeHtml +
          '<span class="tour-duration">' + createClockSVG() + ' ' + tour.durationLabel + '</span>' +
          '<span class="tour-price-badge"><span class="price-amount">$' + tour.pricing.large + '</span><span class="price-unit">/person</span></span>' +
        '</div>' +
        '<div class="tour-card-body">' +
          '<div class="tour-card-meta">' +
            '<span class="tour-region"><span class="category-dot" style="background:' + catColor + '"></span>' + tour.region + '</span>' +
            '<span class="tour-rating">' + createStarSVG() + ' ' + tour.rating + ' <span class="review-count">(' + tour.reviewCount + ')</span></span>' +
          '</div>' +
          '<h3 class="tour-card-title">' + tour.title + '</h3>' +
          '<p class="tour-card-desc">' + tour.shortDescription + '</p>' +
          '<ul class="tour-highlights">' +
            tour.highlights.slice(0, 3).map(function (h) { return '<li>' + h + '</li>'; }).join('') +
          '</ul>' +
          '<div class="tour-card-footer">' +
            '<button class="btn btn-secondary tour-details-btn" data-tour-id="' + tour.id + '" aria-label="View details for ' + tour.title + '">' +
              'View Details' +
            '</button>' +
          '</div>' +
        '</div>';

      DOM.toursGrid.appendChild(card);

      setTimeout(function () {
        card.classList.add('animate-visible');
      }, 80 * index);
    });

    document.querySelectorAll('.tour-details-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        lastFocusedElement = btn;
        openModal(btn.getAttribute('data-tour-id'));
      });
    });
  }

  function renderPricingTabs() {
    DOM.pricingSelector.innerHTML = '';

    TOURS.forEach(function (tour) {
      var tab = document.createElement('button');
      tab.className = 'pricing-tab';
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-selected', tour.id === currentPricingTour ? 'true' : 'false');
      tab.setAttribute('data-tour-id', tour.id);
      var catColor = CATEGORY_COLORS[tour.category] || '#7B5EA7';
      tab.innerHTML = '<span class="category-dot" style="background:' + catColor + '"></span>' + tour.title.split(':')[0];

      tab.addEventListener('click', function () {
        currentPricingTour = tour.id;
        updatePricingTabs();
        renderPricingCards(tour.id);
      });

      DOM.pricingSelector.appendChild(tab);
    });
  }

  function updatePricingTabs() {
    DOM.pricingSelector.querySelectorAll('.pricing-tab').forEach(function (tab) {
      tab.setAttribute('aria-selected', tab.getAttribute('data-tour-id') === currentPricingTour ? 'true' : 'false');
    });
  }

  function renderPricingCards(tourId) {
    var tour = TOURS.find(function (t) { return t.id === tourId; });
    if (!tour || !DOM.pricingCards) return;

    var soloPrice = tour.pricing.solo;

    DOM.pricingCards.innerHTML = PRICING_TIERS.map(function (tier, i) {
      var price = tour.pricing[tier.key];
      var savings = tier.key === 'solo'
        ? ''
        : '<span class="pricing-card-savings">Save ' + Math.round(((soloPrice - price) / soloPrice) * 100) + '%</span>';
      var popular = i === 2 ? ' pricing-card-popular' : '';
      var ribbon = i === 2 ? '<span class="pricing-card-ribbon">BEST VALUE</span>' : '';

      return (
        '<div class="pricing-card' + popular + '">' +
          ribbon +
          '<div class="pricing-card-icon">' + tier.icon + '</div>' +
          '<div class="pricing-card-label">' + tier.label + '</div>' +
          '<div class="pricing-card-price">$' + price + '</div>' +
          '<div class="pricing-card-unit">per person</div>' +
          savings +
        '</div>'
      );
    }).join('');
  }

  function populateTourSelect() {
    TOURS.forEach(function (tour) {
      var option = document.createElement('option');
      option.value = tour.id;
      option.textContent = tour.title + ' (' + tour.durationLabel + ')';
      DOM.tourSelect.appendChild(option);
    });
  }

  // ========================
  // 10. FILTER & SORT
  // ========================

  function applyFiltersAndSort() {
    var filtered = currentFilter === 'all'
      ? TOURS.slice()
      : TOURS.filter(function (t) { return t.category === currentFilter; });

    switch (currentSort) {
      case 'price-low': filtered.sort(function (a, b) { return a.pricing.solo - b.pricing.solo; }); break;
      case 'price-high': filtered.sort(function (a, b) { return b.pricing.solo - a.pricing.solo; }); break;
      case 'duration-short': filtered.sort(function (a, b) { return a.duration - b.duration; }); break;
      case 'duration-long': filtered.sort(function (a, b) { return b.duration - a.duration; }); break;
      default: break;
    }

    renderTourCards(filtered);
  }

  function initFilters() {
    DOM.filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        DOM.filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        applyFiltersAndSort();
      });
    });

    DOM.sortSelect.addEventListener('change', function () {
      currentSort = DOM.sortSelect.value;
      applyFiltersAndSort();
    });
  }

  // ========================
  // 11. MODAL
  // ========================

  function openModal(tourId) {
    var tour = TOURS.find(function (t) { return t.id === tourId; });
    if (!tour) return;

    var modal = DOM.modal;

    document.getElementById('modal-img').src = tour.heroImage;
    document.getElementById('modal-img').alt = tour.imageAlt;
    document.getElementById('modal-title').textContent = tour.title;

    var catColor = CATEGORY_COLORS[tour.category] || '#7B5EA7';
    document.getElementById('modal-meta').innerHTML =
      '<span>' + createClockSVG() + ' ' + tour.durationLabel + '</span>' +
      '<span>' + createMapPinSVG() + ' ' + tour.region + '</span>' +
      '<span>' + createStarSVG() + ' ' + tour.rating + ' (' + tour.reviewCount + ' reviews)</span>';

    document.getElementById('modal-description').textContent = tour.fullDescription;

    // Timeline itinerary
    var itineraryList = modal.querySelector('.itinerary-list');
    itineraryList.innerHTML = tour.itinerary.map(function (item, i) {
      return (
        '<div class="timeline-item">' +
          '<div class="timeline-dot"></div>' +
          '<div class="timeline-content">' +
            '<span class="itinerary-time">' + item.time + '</span>' +
            '<span class="itinerary-activity">' + item.activity + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var includesUl = document.querySelector('#modal-includes ul');
    includesUl.innerHTML = tour.includes.map(function (item) { return '<li>' + item + '</li>'; }).join('');

    var excludesUl = document.querySelector('#modal-excludes ul');
    excludesUl.innerHTML = tour.excludes.map(function (item) { return '<li>' + item + '</li>'; }).join('');

    var pricingGrid = modal.querySelector('.modal-pricing-grid');
    pricingGrid.innerHTML = PRICING_TIERS.map(function (tier, i) {
      var price = tour.pricing[tier.key];
      var popularClass = i === 2 ? ' popular' : '';
      return (
        '<div class="modal-price-card' + popularClass + '">' +
          '<div class="modal-price-label">' + tier.label + '</div>' +
          '<div class="modal-price-amount">$' + price + '</div>' +
          '<div class="modal-price-unit">/person</div>' +
        '</div>'
      );
    }).join('');

    var bookBtn = modal.querySelector('.modal-book-btn');
    bookBtn.onclick = function () {
      closeModal();
      DOM.tourSelect.value = tour.id;
      updatePriceEstimate();
      document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
    };

    modal.removeAttribute('hidden');
    document.body.classList.add('modal-open');

    requestAnimationFrame(function () {
      modal.classList.add('modal-active');
    });

    modal.querySelector('.modal-close').focus();
    trapFocus(modal);
  }

  function closeModal() {
    var modal = DOM.modal;
    modal.classList.remove('modal-active');
    document.body.classList.remove('modal-open');

    setTimeout(function () {
      modal.setAttribute('hidden', '');
    }, 250);

    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  function trapFocus(modal) {
    function handleKeydown(e) {
      if (e.key === 'Escape') {
        closeModal();
        modal.removeEventListener('keydown', handleKeydown);
        return;
      }
      if (e.key !== 'Tab') return;

      var focusable = modal.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
      var first = focusable[0];
      var last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    modal.addEventListener('keydown', handleKeydown);
    modal.addEventListener('click', function handleOverlayClick(e) {
      if (e.target === modal) {
        closeModal();
        modal.removeEventListener('click', handleOverlayClick);
      }
    });
  }

  function initModal() {
    DOM.modal.querySelector('.modal-close').addEventListener('click', closeModal);
  }

  // ========================
  // 12. FORM HANDLING
  // ========================

  function getPriceTier(numPeople) {
    return PRICING_TIERS.find(function (tier) { return numPeople >= tier.min && numPeople <= tier.max; });
  }

  function calculateTotal(tourId, numPeople) {
    var tour = TOURS.find(function (t) { return t.id === tourId; });
    if (!tour) return null;
    var tier = getPriceTier(numPeople);
    if (!tier) return null;
    var perPerson = tour.pricing[tier.key];
    return { perPerson: perPerson, total: perPerson * numPeople, tier: tier.label };
  }

  function updatePriceEstimate() {
    var tourId = DOM.tourSelect.value;
    var people = parseInt(DOM.peopleInput.value, 10);

    if (!tourId || !people || people < 1) {
      DOM.estimateAmount.textContent = '\u2014';
      return;
    }

    var result = calculateTotal(tourId, people);
    if (result) {
      DOM.estimateAmount.textContent = '$' + result.total + ' ($' + result.perPerson + '/person \u00d7 ' + people + ')';
      DOM.estimateAmount.classList.add('updated');
      setTimeout(function () { DOM.estimateAmount.classList.remove('updated'); }, 400);
    }
  }

  function validateField(input) {
    var errorSpan = document.getElementById(input.name + '-error');
    if (!errorSpan) return true;

    var message = '';
    var label = input.labels && input.labels[0] ? input.labels[0].textContent.replace(/\s*\*\s*/, '').trim() : input.name;

    if (input.required && !input.value.trim()) {
      message = label + ' is required.';
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      message = 'Please enter a valid email address.';
    } else if (input.name === 'date' && input.value) {
      var selected = new Date(input.value + 'T00:00:00');
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      if (selected < tomorrow) message = 'Please select a future date.';
    } else if (input.name === 'people' && input.value) {
      var num = parseInt(input.value, 10);
      if (num < 1 || num > 50) message = 'Please enter between 1 and 50 people.';
    }

    errorSpan.textContent = message;
    input.setAttribute('aria-invalid', message ? 'true' : 'false');
    return !message;
  }

  function validateForm() {
    var fields = DOM.bookingForm.querySelectorAll('[required]');
    var allValid = true;
    fields.forEach(function (field) { if (!validateField(field)) allValid = false; });
    return allValid;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!validateForm()) {
      var firstInvalid = DOM.bookingForm.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    DOM.bookingSuccess.removeAttribute('hidden');
    DOM.bookingForm.reset();
    DOM.estimateAmount.textContent = '\u2014';
  }

  function initForm() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    DOM.dateInput.min = tomorrow.toISOString().split('T')[0];

    DOM.tourSelect.addEventListener('change', updatePriceEstimate);
    DOM.peopleInput.addEventListener('input', updatePriceEstimate);

    DOM.bookingForm.querySelectorAll('input, select, textarea').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
    });

    DOM.bookingForm.addEventListener('submit', handleFormSubmit);

    DOM.successClose.addEventListener('click', function () {
      DOM.bookingSuccess.setAttribute('hidden', '');
      document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ========================
  // 13. NAVIGATION
  // ========================

  function handleScroll() {
    var scrolled = window.scrollY > 80;
    DOM.header.classList.toggle('header-scrolled', scrolled);

    // Back to top
    if (DOM.backToTop) {
      DOM.backToTop.classList.toggle('visible', window.scrollY > 500);
    }

    // Active nav link
    var sections = ['about', 'booking', 'pricing', 'tours'];
    for (var i = 0; i < sections.length; i++) {
      var section = document.getElementById(sections[i]);
      if (section && section.getBoundingClientRect().top <= 150) {
        DOM.navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + sections[i]);
        });
        break;
      }
    }
  }

  function initNav() {
    window.addEventListener('scroll', handleScroll, { passive: true });

    DOM.navToggle.addEventListener('click', function () {
      var expanded = DOM.navToggle.getAttribute('aria-expanded') === 'true';
      DOM.navToggle.setAttribute('aria-expanded', !expanded);
      DOM.navMenu.classList.toggle('nav-open');
    });

    DOM.navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        DOM.navToggle.setAttribute('aria-expanded', 'false');
        DOM.navMenu.classList.remove('nav-open');
      });
    });

    // Back to top
    if (DOM.backToTop) {
      DOM.backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // ========================
  // 14. SCROLL ANIMATIONS
  // ========================

  function initScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ========================
  // 15. PARALLAX
  // ========================

  function initParallax() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    var parallaxElements = document.querySelectorAll('[data-parallax]');
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      parallaxElements.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.3;
        var rect = el.getBoundingClientRect();
        var offset = (rect.top + scrollY) * speed;
        el.style.transform = 'translateY(' + (scrollY * speed - offset) + 'px)';
      });
    }, { passive: true });
  }

  // ========================
  // 16. INITIALIZATION
  // ========================

  function init() {
    cacheDom();
    renderTourCards(TOURS);
    renderPricingTabs();
    renderPricingCards(currentPricingTour);
    populateTourSelect();
    initFilters();
    initModal();
    initForm();
    initNav();
    initScrollAnimations();
    initHeroSlideshow();
    animateCounters();
    initParallax();
    handleScroll();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
