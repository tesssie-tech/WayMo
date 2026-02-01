const sampleRestaurants = [
            {name: "Mario's Italian Kitchen", cuisine: "Italian", rating: 4.8, distance: "0.5 km", review: "Authentic pasta and wood-fired pizza", image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9"},
            {name: "Dragon Palace", cuisine: "Chinese", rating: 4.6, distance: "1.2 km", review: "Delicious dim sum and noodles", image: "https://images.unsplash.com/photo-1604908177522-4a6b9b2d3f5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c7d6f6e6e9f0a1a2b3c4d5e6f7a8b9c"},
            {name: "Burger Haven", cuisine: "American", rating: 4.5, distance: "0.8 km", review: "Juicy burgers with fresh ingredients", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f"},
            {name: "Taj Mahal", cuisine: "Indian", rating: 4.7, distance: "1.5 km", review: "Spicy curries and tandoori specialties", image: "https://images.unsplash.com/photo-1604908177117-1a2b3c4d5e6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890"}
        ];

        const specials = [
            {restaurant: "Mario's Italian Kitchen", dish: "Pasta Carbonara", originalPrice: 18.99, discountPrice: 12.99, image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9"},
            {restaurant: "Dragon Palace", dish: "General Tso's Chicken", originalPrice: 16.99, discountPrice: 11.99, image: "https://images.unsplash.com/photo-1604908177522-4a6b9b2d3f5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c7d6f6e6e9f0a1a2b3c4d5e6f7a8b9c"},
            {restaurant: "Burger Haven", dish: "Classic Burger", originalPrice: 14.99, discountPrice: 9.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f"},
            {restaurant: "Taj Mahal", dish: "Butter Chicken", originalPrice: 17.99, discountPrice: 12.99, image: "https://images.unsplash.com/photo-1604908177117-1a2b3c4d5e6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890"}
        ];

        let currentSpecialIndex = 0;

        function rotateSpecials() {
            const items = document.querySelectorAll('.special-item');
            items.forEach(item => item.classList.remove('active'));
            items[currentSpecialIndex].classList.add('active');
            currentSpecialIndex = (currentSpecialIndex + 1) % items.length;
        }

        function initSpecials() {
            const carousel = document.querySelector('.specials-carousel');
            if (!carousel) return;
            carousel.innerHTML = '';
            specials.forEach(special => {
                const discount = Math.round(((special.originalPrice - special.discountPrice) / special.originalPrice) * 100);
                const item = document.createElement('div');
                item.className = 'special-item';
                const img = special.image ? `<img class="special-img" src="${special.image}" alt="${special.dish}">` : '';
                item.innerHTML = `
                    <div class="special-content">
                        ${img}
                        <h3>${special.restaurant}</h3>
                        <p class="special-dish">${special.dish}</p>
                        <p class="original-price">$${special.originalPrice.toFixed(2)}</p>
                        <p class="discount-price">$${special.discountPrice.toFixed(2)}</p>
                        <p class="discount-badge">-${discount}% OFF</p>
                        <button class="order-btn">Order Now</button>
                    </div>
                `;
                carousel.appendChild(item);
            });
            const items = document.querySelectorAll('.special-item');
            if (items.length > 0) {
                items[0].classList.add('active');
                setInterval(rotateSpecials, 4000);
            }
        }

        function searchRestaurants(pushHistory = true) {
            const cuisine = document.getElementById("cuisine").value.toLowerCase();
            const results = document.getElementById("results");
            results.innerHTML = "";

            const filtered = sampleRestaurants.filter(r => 
                r.cuisine.toLowerCase().includes(cuisine) || cuisine === ""
            );

            if (filtered.length === 0) {
                results.innerHTML = "<p>No restaurants found. Try another cuisine!</p>";
                // push state so back button can restore previous state
                if (pushHistory) {
                    const url = `#home?cuisine=${encodeURIComponent(cuisine)}`;
                    history.pushState({view: 'home', cuisine}, '', url);
                }
                return;
            }

            filtered.forEach(restaurant => {
                const img = restaurant.image ? `<img class="result-img" src="${restaurant.image}" alt="${restaurant.name}">` : '';
                results.innerHTML += `
                    <div class="restaurant-card">
                        ${img}
                        <div class="card-body">
                            <h3>${restaurant.name}</h3>
                            <p><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                            <p class="rating">⭐ ${restaurant.rating} | 📍 ${restaurant.distance}</p>
                            <p>${restaurant.review}</p>
                            <div class="ai-advice">
                                <h4>💡 AI Recommendation</h4>
                                <p>This restaurant is highly rated in the ${restaurant.cuisine} category. Based on popularity, we suggest trying their signature dishes.</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            if (pushHistory) {
                const url = cuisine ? `#home?cuisine=${encodeURIComponent(cuisine)}` : '#home';
                history.pushState({view: 'home', cuisine}, '', url);
            }
        }

        // View switching for bottom nav + initial load
        function switchView(view, push = true) {
            const headerTitle = document.querySelector('header h1');
            const results = document.getElementById('results');
            document.querySelectorAll('.bottom-nav .nav-item').forEach(b => b.classList.remove('active'));
            const activeBtn = document.querySelector(`.bottom-nav .nav-item[data-view="${view}"]`);
            if (activeBtn) activeBtn.classList.add('active');

            switch(view) {
                case 'home':
                    headerTitle.textContent = 'Home';
                    searchRestaurants(push);
                    break;
                case 'menu':
                    headerTitle.textContent = 'Menu';
                    results.innerHTML = '<p>Menu coming soon. Browse items here.</p>';
                    break;
                case 'cart':
                    headerTitle.textContent = 'Cart';
                    results.innerHTML = '<p>Your cart is empty.</p>';
                    break;
                case 'profile':
                    headerTitle.textContent = 'Profile';
                    results.innerHTML = '<p>User profile details will appear here.</p>';
                    break;
                default:
                    headerTitle.textContent = 'Home';
                    searchRestaurants(push);
            }
            if (push) {
                history.pushState({view}, '', `#${view}`);
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            initSpecials();
            const isIndexPage = !!document.getElementById('results') && !!document.getElementById('cuisine');
            // initialize from hash if present (only for index page)
            if (isIndexPage) {
                if (location.hash) {
                    const hash = location.hash.replace('#','');
                    const [viewPart, query] = hash.split('?');
                    if (viewPart === 'home') {
                        const params = new URLSearchParams(query);
                        const cuisine = params.get('cuisine') || '';
                        const cuisineEl = document.getElementById('cuisine');
                        if (cuisineEl) cuisineEl.value = cuisine;
                        searchRestaurants(false);
                        history.replaceState({view: 'home', cuisine}, '', location.hash);
                    } else if (viewPart) {
                        switchView(viewPart, false);
                        history.replaceState({view: viewPart}, '', location.hash);
                    } else {
                        searchRestaurants(false);
                        history.replaceState({view: 'home'}, '', '#home');
                    }
                } else {
                    searchRestaurants(false);
                    history.replaceState({view: 'home'}, '', '#home');
                }
            } else {
                // Not index page (e.g., menu.html). If there's a hash indicating a target index view,
                // do nothing here — navigation from this page should redirect to index when needed.
            }

            document.querySelectorAll('.bottom-nav .nav-item').forEach(btn => {
                const view = btn.dataset.view;
                btn.addEventListener('click', (e) => {
                    console.log('bottom-nav click ->', {view, onMenuPage: !!document.getElementById('menu-list')});
                    // If we're on the separate menu page, navigate back to index with hash
                    if (document.getElementById('menu-list')) {
                        if (view === 'menu') return; // already on menu
                        // navigate to index and set hash so index can restore view
                        // use relative path to be robust in various hosting setups
                        window.location.assign('./index.html#' + view);
                        return;
                    }
                    // Default SPA behavior on index: switch view
                    switchView(view);
                });
            });

            // Category nav click behavior (highlight + optional filtering)
            const catTrack = document.querySelector('.category-track');
            if (catTrack) {
                catTrack.addEventListener('click', (e) => {
                    const btn = e.target.closest('.cat-item');
                    if (!btn) return;
                    document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
                    btn.classList.add('active');
                    // scroll item into view smoothly
                    btn.scrollIntoView({behavior: 'smooth', inline: 'center'});
                    // TODO: filter results based on category text (optional)
                });

                // hide fade overlays when not overflowed
                function updateCategoryFade() {
                    const nav = document.querySelector('.category-nav');
                    if (!nav) return;
                    const track = document.querySelector('.category-track');
                    if (track.scrollWidth > track.clientWidth) {
                        nav.classList.add('overflowing');
                    } else {
                        nav.classList.remove('overflowing');
                    }
                }
                updateCategoryFade();
                window.addEventListener('resize', updateCategoryFade);
            }

            // Handle browser back/forward (only meaningful on index page)
            window.addEventListener('popstate', (e) => {
                if (!isIndexPage) return; // ignore popstate on non-index pages
                const state = e.state;
                if (state && state.view) {
                    if (state.view === 'home') {
                        const cuisine = state.cuisine || '';
                        const cuisineEl = document.getElementById('cuisine');
                        if (cuisineEl) cuisineEl.value = cuisine;
                        searchRestaurants(false);
                    } else {
                        switchView(state.view, false);
                    }
                } else {
                    // fallback: parse hash
                    const hash = location.hash.replace('#','');
                    const [viewPart, query] = hash.split('?');
                    if (viewPart === 'home') {
                        const params = new URLSearchParams(query);
                        const cuisine = params.get('cuisine') || '';
                        const cuisineEl = document.getElementById('cuisine');
                        if (cuisineEl) cuisineEl.value = cuisine;
                        searchRestaurants(false);
                    } else if (viewPart) {
                        switchView(viewPart, false);
                    } else {
                        searchRestaurants(false);
                    }
                }
            });
        });

// --- Menu page logic (moved from menu.html). Runs only when `#menu-list` exists ---
document.addEventListener('DOMContentLoaded', function() {
        const menuRoot = document.getElementById('menu-list');
        if (!menuRoot) return;

        const menuItems = [
            { id: 1, name: "Pasta Carbonara", restaurant: "Mario's Italian Kitchen", price: 12.99, image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9", category: "Top of the Week" },
            { id: 2, name: "General Tso's Chicken", restaurant: "Dragon Palace", price: 11.99, image: "https://images.unsplash.com/photo-1604908177522-4a6b9b2d3f5f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c7d6f6e6e9f0a1a2b3c4d5e6f7a8b9c", category: "Chickens" },
            { id: 3, name: "Classic Burger", restaurant: "Burger Haven", price: 9.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f", category: "Burgers" },
            { id: 4, name: "Butter Chicken", restaurant: "Taj Mahal", price: 12.99, image: "https://images.unsplash.com/photo-1604908177117-1a2b3c4d5e6f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890", category: "Chickens" },
            { id: 5, name: "Margherita Pizza", restaurant: "Mario's Italian Kitchen", price: 10.99, image: "https://images.unsplash.com/photo-1548365328-9f7b8a1f3c4d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=123456abcdef7890abcdef1234567890", category: "Top of the Week" },
            { id: 6, name: "Jollof Rice Special", restaurant: "Taste of Home", price: 11.50, image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd1234abcd1234abcd1234abcd1234", category: "Jollof Rice" },
            { id: 7, name: "Grilled Salmon", restaurant: "SeaTreats", price: 15.99, image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=efef1234efef1234efef1234efef1234", category: "Seafoods" },
            { id: 8, name: "Chocolate Brownie", restaurant: "Sweet Tooth", price: 5.99, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=beef1234beef1234beef1234beef1234", category: "Desserts" }
        ];

        function renderMenu(list) {
            const container = document.getElementById('menu-list');
            container.innerHTML = '';
            list.forEach(item => {
                const card = document.createElement('div');
                card.className = 'restaurant-card';
                card.innerHTML = `
                    <img class="menu-img" src="${item.image}" alt="${item.name}">
                    <div class="card-body">
                        <h3>${item.name}</h3>
                        <p><strong>From:</strong> ${item.restaurant}</p>
                        <p class="rating">Price: $${item.price.toFixed(2)}</p>
                        <button class="order-btn" data-id="${item.id}">Add to cart</button>
                    </div>
                `;
                container.appendChild(card);
            });

            // attach handlers
            container.querySelectorAll('.order-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = Number(btn.dataset.id);
                    addToCart(id);
                    btn.textContent = 'Added';
                    setTimeout(() => btn.textContent = 'Add to cart', 1200);
                });
            });
        }

        function addToCart(itemId) {
            const item = menuItems.find(m => m.id === itemId);
            if (!item) return;
            const cart = JSON.parse(localStorage.getItem('waymo_cart') || '[]');
            cart.push({ ...item, qty: 1 });
            localStorage.setItem('waymo_cart', JSON.stringify(cart));
        }

        // Search
        const searchBtn = document.getElementById('search-menu-btn');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const q = document.getElementById('menu-search').value.trim().toLowerCase();
                const filtered = menuItems.filter(m => m.name.toLowerCase().includes(q) || m.restaurant.toLowerCase().includes(q));
                renderMenu(filtered);
            });
        }

        // initial render
        renderMenu(menuItems);

        // Category nav behavior: filter menu items and handle overflow fade
        const categoryTrack = document.querySelector('.category-track');
        function filterByCategory(catText) {
            if (!catText || catText === 'All Specials') renderMenu(menuItems);
            else {
                const filtered = menuItems.filter(m => m.category && m.category.toLowerCase() === catText.toLowerCase());
                renderMenu(filtered);
            }
        }

        if (categoryTrack) {
            categoryTrack.addEventListener('click', (e) => {
                const btn = e.target.closest('.cat-item');
                if (!btn) return;
                document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                const txt = btn.textContent.trim();
                filterByCategory(txt);
                btn.scrollIntoView({behavior: 'smooth', inline: 'center'});
            });

            function updateCategoryFade() {
                const nav = document.querySelector('.category-nav');
                const track = document.querySelector('.category-track');
                if (!nav || !track) return;
                if (track.scrollWidth > track.clientWidth + 2) nav.classList.add('overflowing');
                else nav.classList.remove('overflowing');
            }
            updateCategoryFade();
            window.addEventListener('resize', updateCategoryFade);
        }

});
