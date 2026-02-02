const sampleRestaurants = [
            {
                name: "Mario's Italian Kitchen", 
                cuisine: "Italian", 
                rating: 4.8, 
                distance: "0.5 km", 
                review: "Authentic pasta and wood-fired pizza", 
                image: "https://images.unsplash.com/photo-1603133872878-7f2b45f8b4a6?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b0c2e29a0f1a6a9b4f3c0a7e2d8f1c9",
                topDishes: [
                    {name: "Pasta Carbonara", price: 12.99, image: "https://images.unsplash.com/photo-1612874742237-9828596437e3?q=80&w=800&auto=format&fit=crop"},
                    {name: "Margherita Pizza", price: 10.99, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"},
                    {name: "Tiramisu", price: 6.99, image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop"}
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
                    {name: "General Tso's Chicken", price: 11.99, image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?q=80&w=800&auto=format&fit=crop"},
                    {name: "Dim Sum Platter", price: 14.50, image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=800&auto=format&fit=crop"},
                    {name: "Fried Rice", price: 8.99, image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop"}
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
                    {name: "Classic Burger", price: 9.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"},
                    {name: "Cheese Fries", price: 4.99, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800&auto=format&fit=crop"},
                    {name: "Milkshake", price: 5.50, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"}
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
                    {name: "Butter Chicken", price: 12.99, image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop"},
                    {name: "Garlic Naan", price: 2.99, image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800&auto=format&fit=crop"},
                    {name: "Samosas", price: 4.50, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop"}
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

        // --- Notification System ---
        function getNotifications() {
            return JSON.parse(localStorage.getItem('waymo_notifications') || '[]');
        }

        function saveNotifications(notifs) {
            localStorage.setItem('waymo_notifications', JSON.stringify(notifs));
            renderNotifications();
        }

        function addNotification(title, message) {
            const notifs = getNotifications();
            const newNotif = {
                title,
                message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                id: Date.now() + Math.random()
            };
            notifs.unshift(newNotif); // Add to top
            saveNotifications(notifs);
        }

        function renderNotifications() {
            const list = document.getElementById('notif-list');
            const badge = document.querySelector('.notification-badge');
            if (!list) return;

            const notifs = getNotifications();
            
            if (notifs.length === 0) {
                list.innerHTML = '<li style="padding:15px; text-align:center; color:#888; list-style:none;">No new notifications</li>';
                if (badge) badge.style.display = 'none';
            } else {
                list.innerHTML = notifs.map(n => `
                    <li role="listitem" class="notif-item">
                        <strong>${n.title}</strong>
                        <p style="font-size: 0.9em; margin: 2px 0; color: #ccc;">${n.message}</p>
                        <div class="meta">${n.time}</div>
                    </li>
                `).join('');
                
                if (badge) {
                    badge.textContent = notifs.length;
                    badge.style.display = 'block';
                    // Trigger bounce animation
                    badge.classList.remove('bounce');
                    void badge.offsetWidth; 
                    badge.classList.add('bounce');
                }
            }
        }

        function openModal(item) {
            const modal = document.getElementById('item-modal');
            if (!modal) return;
            
            currentItem = item;
            currentQty = 1;
            
            document.getElementById('modal-item-name').textContent = item.name;
            document.getElementById('modal-item-restaurant').textContent = item.restaurant;
            
            const imgEl = document.getElementById('modal-item-image');
            if (imgEl) {
                if (item.image) {
                    imgEl.src = item.image;
                    imgEl.style.display = 'block';
                } else {
                    imgEl.style.display = 'none';
                }
            }
            
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
            const imgEl = document.getElementById('qv-food-image');
            
            if (imgEl) {
                imgEl.src = restaurant.image; // Default to restaurant image
                imgEl.style.display = 'block';
            }

            list.innerHTML = '';
            
            if (restaurant.topDishes) {
                restaurant.topDishes.forEach(dish => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'qv-item';
                    itemDiv.style.cursor = 'pointer';
                    itemDiv.innerHTML = `
                        <span class="qv-item-name">${dish.name}</span>
                        <span class="qv-item-price">$${dish.price.toFixed(2)}</span>
                    `;
                    itemDiv.addEventListener('click', () => {
                        if (imgEl && dish.image) imgEl.src = dish.image;
                    });
                    list.appendChild(itemDiv);
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
                    // If we're on the separate orders page
                    if (document.getElementById('orders-view')) {
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
                        if (view === 'contact') {
                            window.location.assign('./contact.html');
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

    // Handle all close buttons (fixes issue where only the first modal closed)
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            history.back();
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) history.back();
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
        
        // Trigger Notification
        addNotification('Added to Cart', `Added ${currentQty}x ${currentItem.name}`);
        
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
                
                // Save Order to History
                const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                if (cart.length > 0) {
                    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    const total = subtotal * 1.08; // Including 8% tax
                    const orders = JSON.parse(localStorage.getItem('waymo_orders') || '[]');
                    const newOrder = {
                        id: '#' + Math.floor(100000 + Math.random() * 900000),
                        date: new Date().toLocaleDateString(),
                        items: cart,
                        total: total
                    };
                    orders.unshift(newOrder);
                    localStorage.setItem('waymo_orders', JSON.stringify(orders));
                }

                // Clear cart and update UI
                localStorage.removeItem('cart');
                loadCart();
                updateCartBadge();

                // Trigger Payment Notification
                addNotification('Payment Successful', 'Your order has been confirmed!');

                // Simulate "Delivery Done" after 10 seconds
                setTimeout(() => {
                    addNotification('Delivery Done', 'Your order has arrived at your location.');
                }, 10000);
                
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
            localStorage.removeItem('waymo_notifications');
            renderNotifications();
        });
    }
    
    // Initial Render
    renderNotifications();

    // Simulate Realtime Website Notification (e.g., Promo)
    setTimeout(() => {
        if (document.getElementById('notif-list')) {
            // Only add if we haven't spammed them recently (simple check)
            const notifs = getNotifications();
            const hasPromo = notifs.some(n => n.title === 'Flash Sale!');
            if (!hasPromo) {
                addNotification('Flash Sale!', 'Get 20% off all desserts for the next hour.');
            }
        }
    }, 5000);

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

// --- Profile Page Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const profileView = document.getElementById('profile-view');
    if (profileView) {
        // Load User Data
        const user = JSON.parse(localStorage.getItem('waymo_user'));
        if (user) {
            const nameEl = profileView.querySelector('h2');
            const emailEl = profileView.querySelector('p');
            const avatarEl = profileView.querySelector('.profile-avatar img');
            
            if (nameEl) nameEl.textContent = user.name;
            if (emailEl) emailEl.textContent = user.email || 'Guest Account';
            if (avatarEl) {
                avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=00FFCB&color=000&size=128`;
            }
        }

        // --- Render Order History & Stats ---
        const orders = JSON.parse(localStorage.getItem('waymo_orders') || '[]');
        
        // Update Orders Count Stat
        const statsValues = profileView.querySelectorAll('.stat-value');
        if (statsValues.length > 0) {
            statsValues[0].textContent = orders.length;
        }

        // Inject History Section
        const existingHistory = document.getElementById('order-history-section');
        if (!existingHistory) {
            const historyContainer = document.createElement('div');
            historyContainer.id = 'order-history-section';
            historyContainer.style.marginTop = '20px';
            historyContainer.style.marginBottom = '20px';
            
            // Create Header with Clear Button
            const historyHeader = document.createElement('div');
            historyHeader.style.display = 'flex';
            historyHeader.style.justifyContent = 'space-between';
            historyHeader.style.alignItems = 'center';
            historyHeader.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            historyHeader.style.paddingBottom = '10px';
            historyHeader.style.marginBottom = '15px';

            const historyTitle = document.createElement('h3');
            historyTitle.textContent = 'Recent Orders';
            historyTitle.style.color = 'var(--c1)';
            historyTitle.style.fontFamily = "'Pacifico', cursive";
            historyTitle.style.margin = '0';

            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.gap = '10px';

            const viewAllBtn = document.createElement('button');
            viewAllBtn.className = 'btn-xs';
            viewAllBtn.textContent = 'View All';
            viewAllBtn.style.display = orders.length > 0 ? 'inline-block' : 'none';
            viewAllBtn.onclick = () => location.href = 'orders.html';

            const clearHistoryBtn = document.createElement('button');
            clearHistoryBtn.id = 'clear-history-btn';
            clearHistoryBtn.className = 'btn-xs';
            clearHistoryBtn.textContent = 'Clear History';
            clearHistoryBtn.style.display = orders.length > 0 ? 'inline-block' : 'none';

            btnContainer.appendChild(viewAllBtn);
            btnContainer.appendChild(clearHistoryBtn);

            historyHeader.appendChild(historyTitle);
            historyHeader.appendChild(btnContainer);
            historyContainer.appendChild(historyHeader);

            // Create List Container
            const historyListContainer = document.createElement('div');
            historyListContainer.id = 'order-history-list';
            
            if (orders.length === 0) {
                historyListContainer.innerHTML = '<p style="color: #888; text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">No recent orders yet.</p>';
            } else {
                let historyHtml = '<div style="display: flex; flex-direction: column; gap: 15px;">';
                orders.slice(0, 5).forEach(order => {
                    const itemSummary = order.items.map(i => `${i.quantity}x ${i.name}`).join(', ');
                    historyHtml += `
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                                <span style="color: var(--c2); font-weight: bold;">${order.id}</span>
                                <span style="color: #888; font-size: 0.85em;">${order.date}</span>
                            </div>
                            <p style="color: #ddd; font-size: 0.9em; margin-bottom: 10px; line-height: 1.4;">${itemSummary}</p>
                            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
                                <div>
                                    <span style="font-size: 0.8em; color: var(--c3); display: block;">${order.items.length} Items</span>
                                    <span style="color: var(--c1); font-weight: bold;">$${order.total.toFixed(2)}</span>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <button class="btn-small receipt-btn" data-id="${order.id}" style="font-size: 0.8em; padding: 4px 12px;">Receipt</button>
                                    <button class="btn-small reorder-btn" data-id="${order.id}" style="font-size: 0.8em; padding: 4px 12px;">Reorder</button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                historyHtml += '</div>';
                historyListContainer.innerHTML = historyHtml;
            }
            historyContainer.appendChild(historyListContainer);

            // Receipt Logic
            historyListContainer.querySelectorAll('.receipt-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-id');
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        let text = `WayMo Receipt\nOrder ID: ${order.id}\nDate: ${order.date}\n--------------------------------\n`;
                        order.items.forEach(item => {
                            text += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
                        });
                        text += `--------------------------------\nTotal: $${order.total.toFixed(2)}\n\nThank you for choosing WayMo!`;
                        
                        const blob = new Blob([text], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `WayMo_Receipt_${order.id}.txt`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    }
                });
            });

            // Clear History Logic
            clearHistoryBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear your entire order history? This cannot be undone.')) {
                    localStorage.removeItem('waymo_orders');
                    
                    // Update UI
                    historyListContainer.innerHTML = '<p style="color: #888; text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">No recent orders yet.</p>';
                    if (statsValues.length > 0) {
                        statsValues[0].textContent = 0;
                    }
                    clearHistoryBtn.style.display = 'none';
                    viewAllBtn.style.display = 'none';

                    if (typeof addNotification === 'function') {
                        addNotification('History Cleared', 'Your order history has been removed.');
                    }
                }
            });
            
            // Reorder Logic
            historyListContainer.querySelectorAll('.reorder-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-id');
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        // Add items to cart (generating new cartIds to avoid conflicts)
                        const newItems = order.items.map(item => ({
                            ...item,
                            cartId: Date.now() + Math.random()
                        }));
                        const updatedCart = currentCart.concat(newItems);
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                        updateCartBadge();
                        
                        if (typeof addNotification === 'function') {
                            addNotification('Reorder Successful', `Added items from ${orderId} to cart.`);
                        }
                        
                        const originalText = this.textContent;
                        this.textContent = 'Added!';
                        setTimeout(() => {
                            this.textContent = originalText;
                        }, 2000);
                    }
                });
            });
            
            const stats = profileView.querySelector('.profile-stats');
            if (stats) {
                stats.parentNode.insertBefore(historyContainer, stats.nextSibling);
            }
        }

        // Handle Logout
        const logoutBtn = profileView.querySelector('.menu-item.text-danger');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('waymo_user');
                window.location.href = 'landing.html';
            });
        }

        // --- Edit Profile Logic (Injected) ---
        const header = profileView.querySelector('.profile-header');
        if (header && !document.getElementById('edit-profile-btn')) {
            // Inject Edit Button
            const editBtn = document.createElement('button');
            editBtn.id = 'edit-profile-btn';
            editBtn.className = 'btn-small';
            editBtn.style.marginTop = '15px';
            editBtn.innerHTML = '<i class="fas fa-pen"></i> Edit Profile';
            header.appendChild(editBtn);

            // Inject Modal HTML
            const modalHtml = `
                <div id="edit-profile-modal" class="modal">
                    <div class="modal-content" style="max-width: 400px;">
                        <span class="close-modal" id="close-edit-profile">&times;</span>
                        <div class="modal-header" style="text-align: center;">
                            <h2 style="font-family: 'Pacifico', cursive; color: var(--c1);">Edit Profile</h2>
                        </div>
                        <form id="edit-profile-form" style="margin-top: 20px;">
                            <div class="form-group">
                                <label for="edit-name" style="color: var(--c3); font-weight: bold; display: block; margin-bottom: 8px;">Full Name</label>
                                <input type="text" id="edit-name" required style="width: 100%; padding: 12px; border-radius: 8px; border: 2px solid var(--c4); background: transparent; color: var(--c1);">
                            </div>
                            <button type="submit" style="width: 100%; margin-top: 15px; padding: 12px; background: var(--c2); color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">Save Changes</button>
                        </form>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);

            // Modal Logic
            const modal = document.getElementById('edit-profile-modal');
            const closeBtn = document.getElementById('close-edit-profile');
            const form = document.getElementById('edit-profile-form');
            const nameInput = document.getElementById('edit-name');

            editBtn.addEventListener('click', () => {
                const user = JSON.parse(localStorage.getItem('waymo_user'));
                if (user) nameInput.value = user.name;
                modal.style.display = 'flex';
            });

            closeBtn.addEventListener('click', () => modal.style.display = 'none');
            window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const user = JSON.parse(localStorage.getItem('waymo_user')) || {};
                user.name = nameInput.value;
                localStorage.setItem('waymo_user', JSON.stringify(user));
                
                // Update UI immediately
                const nameEl = profileView.querySelector('h2');
                const avatarEl = profileView.querySelector('.profile-avatar img');
                if (nameEl) nameEl.textContent = user.name;
                if (avatarEl) avatarEl.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=00FFCB&color=000&size=128`;
                
                modal.style.display = 'none';
                if (typeof addNotification === 'function') {
                    addNotification('Profile Updated', 'Your profile details have been saved.');
                }
            });
        }

        // --- Payment Methods Logic ---
        const paymentLink = document.getElementById('payment-methods-link');
        const paymentModal = document.getElementById('payment-methods-modal');
        const closePaymentModal = document.getElementById('close-payment-methods');
        const savePaymentBtn = document.getElementById('save-payment-method-btn');
        const paymentOptions = document.querySelectorAll('.payment-option');

        if (paymentLink && paymentModal) {
            paymentLink.addEventListener('click', (e) => {
                e.preventDefault();
                // Load saved preference
                const savedMethod = localStorage.getItem('waymo_payment_pref') || 'card';
                paymentOptions.forEach(opt => {
                    if (opt.dataset.method === savedMethod) {
                        opt.classList.add('selected');
                    } else {
                        opt.classList.remove('selected');
                    }
                });
                paymentModal.style.display = 'flex';
            });

            if (closePaymentModal) {
                closePaymentModal.addEventListener('click', () => {
                    paymentModal.style.display = 'none';
                });
            }

            paymentOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    paymentOptions.forEach(o => o.classList.remove('selected'));
                    opt.classList.add('selected');
                });
            });

            if (savePaymentBtn) {
                savePaymentBtn.addEventListener('click', () => {
                    const selected = document.querySelector('.payment-option.selected');
                    if (selected) {
                        const method = selected.dataset.method;
                        localStorage.setItem('waymo_payment_pref', method);
                        if (typeof addNotification === 'function') {
                            addNotification('Payment Method Updated', `Default payment method set to ${selected.querySelector('span').textContent}`);
                        }
                        paymentModal.style.display = 'none';
                    }
                });
            }
            
            window.addEventListener('click', (e) => {
                if (e.target === paymentModal) paymentModal.style.display = 'none';
            });
        }

        // --- Settings Modal Logic ---
        const settingsLink = document.getElementById('settings-link');
        const settingsModal = document.getElementById('settings-modal');
        const closeSettings = document.getElementById('close-settings');
        const notifToggle = document.getElementById('notif-toggle');
        const darkModeToggle = document.getElementById('dark-mode-toggle');

        if (settingsLink && settingsModal) {
            settingsLink.addEventListener('click', (e) => {
                e.preventDefault();
                const settings = JSON.parse(localStorage.getItem('waymo_settings') || '{"notifications": true, "darkMode": true}');
                if (notifToggle) notifToggle.checked = settings.notifications;
                if (darkModeToggle) darkModeToggle.checked = settings.darkMode;
                settingsModal.style.display = 'flex';
            });

            if (closeSettings) {
                closeSettings.addEventListener('click', () => {
                    settingsModal.style.display = 'none';
                });
            }

            const saveSettings = () => {
                const settings = {
                    notifications: notifToggle ? notifToggle.checked : true,
                    darkMode: darkModeToggle ? darkModeToggle.checked : true
                };
                localStorage.setItem('waymo_settings', JSON.stringify(settings));
            };

            if (darkModeToggle) {
                darkModeToggle.addEventListener('change', () => {
                    if (darkModeToggle.checked) {
                        document.body.classList.remove('light-mode');
                    } else {
                        document.body.classList.add('light-mode');
                    }
                    saveSettings();
                });
            }

            if (notifToggle) {
                notifToggle.addEventListener('change', saveSettings);
            }
            
            window.addEventListener('click', (e) => {
                if (e.target === settingsModal) settingsModal.style.display = 'none';
            });
        }

        // --- Saved Addresses Logic ---
        const addressLink = document.getElementById('saved-addresses-link');
        const addressModal = document.getElementById('saved-addresses-modal');
        const closeAddressModal = document.getElementById('close-saved-addresses');
        const saveAddressBtn = document.getElementById('save-address-btn');
        const addressOptions = document.querySelectorAll('.address-option');

        if (addressLink && addressModal) {
            addressLink.addEventListener('click', (e) => {
                e.preventDefault();
                // Load saved preference
                const savedAddress = localStorage.getItem('waymo_default_address') || 'home';
                addressOptions.forEach(opt => {
                    if (opt.dataset.type === savedAddress) {
                        opt.classList.add('selected');
                    } else {
                        opt.classList.remove('selected');
                    }
                });
                addressModal.style.display = 'flex';
            });

            if (closeAddressModal) {
                closeAddressModal.addEventListener('click', () => {
                    addressModal.style.display = 'none';
                });
            }

            addressOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    addressOptions.forEach(o => o.classList.remove('selected'));
                    opt.classList.add('selected');
                });
            });

            if (saveAddressBtn) {
                saveAddressBtn.addEventListener('click', () => {
                    const selected = document.querySelector('.address-option.selected');
                    if (selected) {
                        const type = selected.dataset.type;
                        localStorage.setItem('waymo_default_address', type);
                        if (typeof addNotification === 'function') {
                            addNotification('Address Updated', `Default delivery address set to ${selected.querySelector('strong').textContent}`);
                        }
                        addressModal.style.display = 'none';
                    }
                });
            }
            
            window.addEventListener('click', (e) => {
                if (e.target === addressModal) addressModal.style.display = 'none';
            });
        }

        // --- Add New Address Modal Logic ---
        const addNewAddressBtn = document.getElementById('add-new-address-btn');
        const addAddressModal = document.getElementById('add-address-modal');
        const closeAddAddressModal = document.getElementById('close-add-address');
        const addAddressForm = document.getElementById('add-address-form');
        const mapPreview = document.getElementById('address-map');
        const useLocationBtn = document.getElementById('use-location-btn');

        if (addNewAddressBtn && addAddressModal) {
            addNewAddressBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (addressModal) addressModal.style.display = 'none';
                addAddressModal.style.display = 'flex';
            });

            if (closeAddAddressModal) {
                closeAddAddressModal.addEventListener('click', () => {
                    addAddressModal.style.display = 'none';
                    if (addressModal) addressModal.style.display = 'flex';
                });
            }

            window.addEventListener('click', (e) => {
                if (e.target === addAddressModal) {
                    addAddressModal.style.display = 'none';
                    if (addressModal) addressModal.style.display = 'flex';
                }
            });

            if (mapPreview) {
                mapPreview.addEventListener('click', (e) => {
                    const rect = mapPreview.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const pin = mapPreview.querySelector('.map-pin');
                    if (pin) {
                        pin.style.left = x + 'px';
                        pin.style.top = y + 'px';
                    }
                    
                    // Simulate filling address
                    const addrInput = document.getElementById('address-line1');
                    if (addrInput) addrInput.value = "Pinned Location " + Math.floor(Math.random() * 100);
                });
            }

            if (useLocationBtn) {
                useLocationBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const originalText = useLocationBtn.innerHTML;
                    useLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating...';
                    
                    setTimeout(() => {
                        const addrInput = document.getElementById('address-line1');
                        if (addrInput) addrInput.value = "Current GPS Location: 123 Satellite Way";
                        
                        if (mapPreview) {
                            const pin = mapPreview.querySelector('.map-pin');
                            if (pin) {
                                pin.style.left = '50%';
                                pin.style.top = '50%';
                            }
                        }
                        useLocationBtn.innerHTML = originalText;
                    }, 1500);
                });
            }

            if (addAddressForm) {
                addAddressForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const label = document.getElementById('address-label').value;
                    const line1 = document.getElementById('address-line1').value;

                    if (!label || !line1) return;

                    const addressOptionsContainer = document.querySelector('.address-options');
                    if (addressOptionsContainer) {
                        let iconClass = 'fa-map-pin';
                        if (label.toLowerCase().includes('home')) iconClass = 'fa-home';
                        if (label.toLowerCase().includes('work') || label.toLowerCase().includes('office')) iconClass = 'fa-briefcase';

                        const newAddressEl = document.createElement('div');
                        newAddressEl.className = 'address-option';
                        newAddressEl.dataset.type = label.toLowerCase().replace(/\s/g, '');
                        newAddressEl.innerHTML = `
                            <div class="address-icon"><i class="fas ${iconClass}"></i></div>
                            <div class="address-details">
                                <strong>${label}</strong>
                                <span>${line1}</span>
                            </div>
                            <i class="fas fa-check check-icon"></i>
                        `;
                        
                        newAddressEl.addEventListener('click', () => {
                            document.querySelectorAll('.address-option').forEach(o => o.classList.remove('selected'));
                            newAddressEl.classList.add('selected');
                        });

                        addressOptionsContainer.appendChild(newAddressEl);
                    }

                    addAddressModal.style.display = 'none';
                    if (addressModal) addressModal.style.display = 'flex';
                    addAddressForm.reset();
                });
            }
        }
    }
});

// --- Global Theme Init ---
document.addEventListener('DOMContentLoaded', () => {
    const settings = JSON.parse(localStorage.getItem('waymo_settings') || '{"notifications": true, "darkMode": true}');
    if (!settings.darkMode) {
        document.body.classList.add('light-mode');
    }
});

// --- Orders Page Logic ---
document.addEventListener('DOMContentLoaded', function() {
    const ordersView = document.getElementById('orders-view');
    if (ordersView) {
        const orders = JSON.parse(localStorage.getItem('waymo_orders') || '[]');
        const container = document.getElementById('full-order-history');
        
        if (orders.length === 0) {
            container.innerHTML = '<p style="color: #888; text-align: center; padding: 20px; background: rgba(255,255,255,0.03); border-radius: 10px;">No orders found.</p>';
        } else {
            let html = '<div style="display: flex; flex-direction: column; gap: 15px;">';
            orders.forEach(order => {
                const itemSummary = order.items.map(i => `${i.quantity}x ${i.name}`).join(', ');
                html += `
                    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--c2); font-weight: bold;">${order.id}</span>
                            <span style="color: #888; font-size: 0.85em;">${order.date}</span>
                        </div>
                        <p style="color: #ddd; font-size: 0.9em; margin-bottom: 10px; line-height: 1.4;">${itemSummary}</p>
                        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 8px;">
                            <div>
                                <span style="font-size: 0.8em; color: var(--c3); display: block;">${order.items.length} Items</span>
                                <span style="color: var(--c1); font-weight: bold;">$${order.total.toFixed(2)}</span>
                            </div>
                            <div style="display: flex; gap: 8px;">
                                <button class="btn-small receipt-btn" data-id="${order.id}" style="font-size: 0.8em; padding: 4px 12px;">Receipt</button>
                                <button class="btn-small reorder-btn" data-id="${order.id}" style="font-size: 0.8em; padding: 4px 12px;">Reorder</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            html += '</div>';
            container.innerHTML = html;
            
            // Receipt Logic
            container.querySelectorAll('.receipt-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-id');
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        let text = `WayMo Receipt\nOrder ID: ${order.id}\nDate: ${order.date}\n--------------------------------\n`;
                        order.items.forEach(item => {
                            text += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
                        });
                        text += `--------------------------------\nTotal: $${order.total.toFixed(2)}\n\nThank you for choosing WayMo!`;
                        
                        const blob = new Blob([text], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = `WayMo_Receipt_${order.id}.txt`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    }
                });
            });
            
            // Reorder Logic
            container.querySelectorAll('.reorder-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const orderId = this.getAttribute('data-id');
                    const order = orders.find(o => o.id === orderId);
                    if (order) {
                        const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
                        const newItems = order.items.map(item => ({
                            ...item,
                            cartId: Date.now() + Math.random()
                        }));
                        const updatedCart = currentCart.concat(newItems);
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                        updateCartBadge();
                        
                        if (typeof addNotification === 'function') {
                            addNotification('Reorder Successful', `Added items from ${orderId} to cart.`);
                        }
                        
                        const originalText = this.textContent;
                        this.textContent = 'Added!';
                        setTimeout(() => {
                            this.textContent = originalText;
                        }, 2000);
                    }
                });
            });
        }
    }
});
