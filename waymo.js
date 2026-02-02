const sampleRestaurants = [
            {
                name: "Mario's Italian Kitchen", 
                cuisine: "Italian", 
                rating: 4.8, 
                distance: "0.5 km", 
                review: "Authentic pasta and wood-fired pizza", 
                image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9",
                topDishes: [
                    {name: "Pasta Carbonara", price: 12.99},
                    {name: "Margherita Pizza", price: 10.99},
                    {name: "Tiramisu", price: 6.99}
                ]
            },
            {
                name: "Dragon Palace", 
                cuisine: "Chinese", 
                rating: 4.6, 
                distance: "1.2 km", 
                review: "Delicious dim sum and noodles", 
                image: "https://images.unsplash.com/photo-1604908177522-4a6b9b2d3f5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c7d6f6e6e9f0a1a2b3c4d5e6f7a8b9c",
                topDishes: [
                    {name: "General Tso's Chicken", price: 11.99},
                    {name: "Dim Sum Platter", price: 14.50},
                    {name: "Fried Rice", price: 8.99}
                ]
            },
            {
                name: "Burger Haven", 
                cuisine: "American", 
                rating: 4.5, 
                distance: "0.8 km", 
                review: "Juicy burgers with fresh ingredients", 
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f",
                topDishes: [
                    {name: "Classic Burger", price: 9.99},
                    {name: "Cheese Fries", price: 4.99},
                    {name: "Milkshake", price: 5.50}
                ]
            },
            {
                name: "Taj Mahal", 
                cuisine: "Indian", 
                rating: 4.7, 
                distance: "1.5 km", 
                review: "Spicy curries and tandoori specialties", 
                image: "https://images.unsplash.com/photo-1604908177117-1a2b3c4d5e6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890",
                topDishes: [
                    {name: "Butter Chicken", price: 12.99},
                    {name: "Garlic Naan", price: 2.99},
                    {name: "Samosas", price: 4.50}
                ]
            }
        ];

        const specials = [
            {restaurant: "Mario's Italian Kitchen", dish: "Pasta Carbonara", originalPrice: 18.99, discountPrice: 12.99, image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9"},
            {restaurant: "Dragon Palace", dish: "General Tso's Chicken", originalPrice: 16.99, discountPrice: 11.99, image: "https://images.unsplash.com/photo-1604908177522-4a6b9b2d3f5f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c7d6f6e6e9f0a1a2b3c4d5e6f7a8b9c"},
            {restaurant: "Burger Haven", dish: "Classic Burger", originalPrice: 14.99, discountPrice: 9.99, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f"},
            {restaurant: "Taj Mahal", dish: "Butter Chicken", originalPrice: 17.99, discountPrice: 12.99, image: "https://images.unsplash.com/photo-1604908177117-1a2b3c4d5e6f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcdef1234567890abcdef1234567890"}
        ];

        let currentSpecialIndex = 0;

        // --- Global Modal Logic ---
        let currentItem = null;
        let currentQty = 1;
        const toppingsList = ["Extra Cheese", "Spicy Sauce", "Bacon Bits", "Garlic Dip", "Mushrooms", "Avocado"];

        function openModal(item) {
            const modal = document.getElementById('item-modal');
            if (!modal) return;
            
            currentItem = item;
            currentQty = 1;
            
            document.getElementById('modal-item-name').textContent = item.name;
            document.getElementById('modal-item-restaurant').textContent = item.restaurant;
            document.getElementById('modal-qty').value = 1;
            
            const toppingsContainer = document.getElementById('modal-toppings-list');
            if (toppingsContainer) {
                toppingsContainer.innerHTML = toppingsList.map(t => `
                    <label class="topping-option">
                        <input type="checkbox" value="${t}" class="topping-checkbox">
                        ${t}
                    </label>
                `).join('');

                toppingsContainer.querySelectorAll('input').forEach(cb => {
                    cb.addEventListener('change', updateModalTotal);
                });
            }

            updateModalTotal();
            modal.style.display = 'flex';
            history.pushState({modalOpen: true}, '');
        }

        function updateModalTotal() {
            if (!currentItem) return;
            const basePrice = currentItem.price;
            const toppingsCount = document.querySelectorAll('.topping-checkbox:checked').length;
            const toppingPrice = 1.00; 
            const total = (basePrice + (toppingsCount * toppingPrice)) * currentQty;
            
            const totalEl = document.getElementById('modal-total-price');
            if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
        }

        function openQuickView(restaurant) {
            const modal = document.getElementById('quick-view-modal');
            if (!modal) return;
            
            document.getElementById('qv-restaurant-name').textContent = restaurant.name;
            const list = document.getElementById('qv-dishes-list');
            list.innerHTML = '';
            
            if (restaurant.topDishes) {
                restaurant.topDishes.forEach(dish => {
                    list.innerHTML += `
                        <div class="qv-item">
                            <span class="qv-item-name">${dish.name}</span>
                            <span class="qv-item-price">$${dish.price.toFixed(2)}</span>
                        </div>
                    `;
                });
            } else {
                list.innerHTML = '<p>No top dishes available.</p>';
            }
            
            modal.style.display = 'flex';
            history.pushState({modalOpen: true}, '');
        }

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
            specials.forEach((special, index) => {
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
                        <button class="order-btn" data-index="${index}">Order Now</button>
                    </div>
                `;
                carousel.appendChild(item);
            });

            // Add click handlers for special items
            carousel.querySelectorAll('.order-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const idx = this.dataset.index;
                    const special = specials[idx];
                    
                    const item = {
                        id: `special-${idx}`,
                        name: special.dish,
                        restaurant: special.restaurant,
                        price: special.discountPrice,
                        image: special.image
                    };
                    openModal(item);
                });
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
                            <p class="rating"><i class="fas fa-star" style="color: #FFD700;"></i> ${restaurant.rating} | <i class="fas fa-map-marker-alt" style="color: var(--c2);"></i> ${restaurant.distance}</p>
                            <p>${restaurant.review}</p>
                            <div class="ai-advice">
                                <h4><i class="fas fa-lightbulb" style="color: var(--c4);"></i> AI Recommendation</h4>
                                <p>This restaurant is highly rated in the ${restaurant.cuisine} category. Based on popularity, we suggest trying their signature dishes.</p>
                            </div>
                            <button class="btn-small quick-view-btn" data-name="${restaurant.name}" style="margin-top: 15px; width: 100%;">Quick View</button>
                        </div>
                    </div>
                `;
            });

            // Attach Quick View Listeners
            results.querySelectorAll('.quick-view-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const name = btn.dataset.name;
                    const restaurant = sampleRestaurants.find(r => r.name === name);
                    if (restaurant) openQuickView(restaurant);
                });
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
                    window.location.assign('./menu.html');
                    return;
                case 'cart':
                    window.location.assign('./cart.html');
                    return;
                case 'profile':
                    // Redirect to separate profile page
                    window.location.assign('./profile.html');
                    return;
                case 'contact':
                    window.location.assign('./contact.html');
                    return;
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
                    console.log('bottom-nav click ->', {view});
                    // If we're on the separate menu page, navigate back to index with hash
                    if (document.getElementById('menu-list')) {
                        if (view === 'menu') return; // already on menu
                        // navigate to cart or index with hash so they can be restored
                        if (view === 'cart') {
                            window.location.assign('./cart.html');
                            return;
                        }
                        if (view === 'profile') {
                            window.location.assign('./profile.html');
                            return;
                        }
                        if (view === 'contact') {
                            window.location.assign('./contact.html');
                            return;
                        }
                        window.location.assign('./index.html#' + view);
                        return;
                    }
                    // If we're on the separate cart page, navigate appropriately
                    if (document.getElementById('cart-items')) {
                        if (view === 'cart') return; // already on cart
                        // navigate to menu or index
                        if (view === 'menu') {
                            window.location.assign('./menu.html');
                            return;
                        }
                        if (view === 'profile') {
                            window.location.assign('./profile.html');
                            return;
                        }
                        if (view === 'contact') {
                            window.location.assign('./contact.html');
                            return;
                        }
                        window.location.assign('./index.html#' + view);
                        return;
                    }
                    // If we're on the separate profile page
                    if (document.getElementById('profile-view')) {
                        if (view === 'profile') return; // already on profile
                        if (view === 'menu') {
                            window.location.assign('./menu.html');
                            return;
                        }
                        if (view === 'cart') {
                            window.location.assign('./cart.html');
                            return;
                        }
                        if (view === 'contact') {
                            window.location.assign('./contact.html');
                            return;
                        }
                        window.location.assign('./index.html#' + view);
                        return;
                    }
                    // If we're on the separate contact page
                    if (document.getElementById('contact-view')) {
                        if (view === 'contact') return;
                        if (view === 'profile') {
                             window.location.assign('./profile.html');
                             return;
                        }
                        if (view === 'menu') {
                            window.location.assign('./menu.html');
                            return;
                        }
                        if (view === 'cart') {
                            window.location.assign('./cart.html');
                            return;
                        }
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

// --- Global Modal Event Listeners ---
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('item-modal');
    if (!modal) return;

    // Handle browser back button closing modals
    window.addEventListener('popstate', () => {
        const openModals = document.querySelectorAll('.modal');
        openModals.forEach(m => {
            if (getComputedStyle(m).display === 'flex') {
                m.style.display = 'none';
            }
        });
    });

    const closeModalBtn = document.querySelector('.close-modal');

    document.getElementById('modal-qty-minus').addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            document.getElementById('modal-qty').value = currentQty;
            updateModalTotal();
        }
    });

    document.getElementById('modal-qty-plus').addEventListener('click', () => {
        currentQty++;
        document.getElementById('modal-qty').value = currentQty;
        updateModalTotal();
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            history.back();
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) history.back();
    });

    document.getElementById('modal-add-to-cart-btn').addEventListener('click', function() {
        if (!currentItem) return;
        const btn = this;
        
        const toppings = Array.from(document.querySelectorAll('.topping-checkbox:checked')).map(cb => cb.value);
        const toppingCost = toppings.length * 1.00;
        const finalPricePerItem = currentItem.price + toppingCost;

        const cartItem = {
            ...currentItem,
            price: finalPricePerItem,
            quantity: currentQty,
            toppings: toppings,
            cartId: Date.now() + Math.random() 
        };

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateCartBadge();
        
        const originalText = btn.textContent;
        btn.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => {
            history.back();
            btn.textContent = originalText;
        }, 2000);
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
                        <button class="order-btn" data-id="${item.id}">Add</button>
                    </div>
                `;
                container.appendChild(card);
            });

            // attach handlers
            container.querySelectorAll('.order-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = Number(btn.dataset.id);
                    const item = menuItems.find(m => m.id === id);
                    if (item) openModal(item);
                });
            });
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

// --- Cart page logic (runs only when cart elements exist) ---
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (!checkoutBtn) return; // not on cart page

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsDiv = document.getElementById('cart-items');
        const emptyCartDiv = document.getElementById('empty-cart');
        const cartSummaryDiv = document.getElementById('cart-summary');

        if (cart.length === 0) {
            cartItemsDiv.innerHTML = '';
            emptyCartDiv.style.display = 'block';
            cartSummaryDiv.style.display = 'none';
        } else {
            emptyCartDiv.style.display = 'none';
            cartSummaryDiv.style.display = 'block';

            cartItemsDiv.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div class="item-controls">
                        <div class="quantity-control">
                            <button class="qty-btn" onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="number" value="${item.quantity}" min="1" onchange="updateQuantityInput(${index}, this.value)">
                            <button class="qty-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `).join('');

            updateCartSummary(cart);
        }
    }

    window.updateQuantity = function(index, change) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    };

    window.updateQuantityInput = function(index, value) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const qty = parseInt(value) || 1;
        if (qty < 1) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = qty;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    };

    window.removeFromCart = function(index) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    };

    function updateCartSummary(cart) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.08;
        const total = subtotal + tax;

        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }

    loadCart();

    // --- Checkout Flow Logic ---
    const locationModal = document.getElementById('location-modal');
    const paymentModal = document.getElementById('payment-modal');
    const confirmationModal = document.getElementById('confirmation-modal');

    checkoutBtn.addEventListener('click', function() {
        // Step 1: Open Location Modal
        if (locationModal) {
            locationModal.style.display = 'flex';
            history.pushState({modalOpen: true}, '');
        }
    });

    // Step 2: Location -> Payment
    const toPaymentBtn = document.getElementById('to-payment-btn');
    if (toPaymentBtn) {
        toPaymentBtn.addEventListener('click', function() {
            const address = document.getElementById('delivery-address').value;
            if (!address) {
                alert('Please enter a delivery address');
                return;
            }
            locationModal.style.display = 'none';
            paymentModal.style.display = 'flex';
            history.pushState({modalOpen: true}, '');
        });
    }

    // Step 3: Payment -> Confirmation
    const confirmPaymentBtn = document.getElementById('confirm-payment-btn');
    if (confirmPaymentBtn) {
        confirmPaymentBtn.addEventListener('click', function() {
            // Simulate processing
            const btn = this;
            const originalText = btn.textContent;
            btn.textContent = 'Processing...';
            btn.disabled = true;
            
            setTimeout(() => {
                paymentModal.style.display = 'none';
                confirmationModal.style.display = 'flex';
                history.pushState({modalOpen: true}, '');
                
                // Clear cart and update UI
                localStorage.removeItem('cart');
                loadCart();
                updateCartBadge();
                
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // Step 4: Close Confirmation -> Redirect
    const closeConfirmationBtn = document.getElementById('close-confirmation-btn');
    if (closeConfirmationBtn) {
        closeConfirmationBtn.addEventListener('click', function() {
            confirmationModal.style.display = 'none';
            window.location.assign('./index.html');
        });
    }

    // Close buttons (x) for cart modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                history.back();
            }
        });
    });

    // Click outside to close modals
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            history.back();
        }
    });

    // Toggle active state for selection buttons in modals
    document.querySelectorAll('.modal .btn-small').forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.querySelectorAll('.btn-small').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Global helper to update cart badge on all pages
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
    
    // Update Analytics Dashboard Cart Value
    const cartValEl = document.getElementById('session-cart-val');
    if (cartValEl) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartValEl.textContent = '$' + total.toFixed(2);
    }
}
document.addEventListener('DOMContentLoaded', updateCartBadge);

// --- Contact page logic ---
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent! We will get back to you shortly.');
        contactForm.reset();
        window.location.assign('./profile.html');
    });
});

// --- Scroll Animation Observer ---
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -30px 0px" // Offset slightly so it triggers just before bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        'header, .search-section, .specials-section, .restaurants, .profile-header, .profile-stats, .profile-menu, .cart-container, .contact-container, footer'
    );
    
    animatedElements.forEach(el => observer.observe(el));
});

// --- Notification & Analytics Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const clearBtn = document.getElementById('clear-notifs');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            const list = document.getElementById('notif-list');
            if (list) {
                list.innerHTML = '<li style="padding:15px; text-align:center; color:#888; list-style:none;">No new notifications</li>';
                const badge = document.querySelector('.notification-badge');
                if (badge) badge.style.display = 'none';
            }
        });
    }

    // Real-time Product Interaction Analytics
    const viewsEl = document.getElementById('session-views');
    if (viewsEl) {
        // Initialize view count
        let views = parseInt(sessionStorage.getItem('waymo_views') || '0');
        viewsEl.textContent = views;

        // Track clicks on restaurant cards or menu items
        document.addEventListener('click', (e) => {
            if (e.target.closest('.restaurant-card') || e.target.closest('.special-item')) {
                views++;
                sessionStorage.setItem('waymo_views', views);
                viewsEl.textContent = views;
            }
        });
    }
});
