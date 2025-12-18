class CustomProductCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'price', 'original-price', 'rating', 'image'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (this.shadowRoot) {
            this.render();
        }
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        const title = this.getAttribute('title') || 'Product';
        const price = this.getAttribute('price') || '0.00';
        const originalPrice = this.getAttribute('original-price') || price;
        const rating = this.getAttribute('rating') || '0';
        const image = this.getAttribute('image') || 'http://static.photos/technology/640x360/10';

        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }
                .rating-stars {
                    color: #FFA41C;
                }
                .original-price {
                    text-decoration: line-through;
                }
                .add-to-cart:hover {
                    background-color: #FF8F00;
                }
            </style>
            <div class="product-card bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                <div class="p-4 flex-grow">
                    <img src="${image}" alt="${title}" class="w-full h-48 object-contain mb-4">
                    <h3 class="text-lg font-medium text-gray-900 mb-2">${title}</h3>
                    <div class="flex items-center mb-2">
                        <div class="rating-stars flex">
                            ${this.renderStars(rating)}
                        </div>
                        <span class="text-gray-600 text-sm ml-1">${rating}</span>
                    </div>
                    <div class="mb-4">
                        <span class="text-xl font-bold text-gray-900">$${price}</span>
                        ${originalPrice !== price ? `<span class="text-gray-500 text-sm ml-2 original-price">$${originalPrice}</span>` : ''}
                    </div>
                </div>
                <button class="add-to-cart bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 px-4 w-full font-medium">
                    Add to Cart
                </button>
            </div>
        `;

        this.shadowRoot.querySelector('.add-to-cart').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('add-to-cart', {
                bubbles: true,
                composed: true
            }));
        });
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<i data-feather="star" class="w-4 h-4 fill-current"></i>';
        }

        if (hasHalfStar) {
            stars += '<i data-feather="star" class="w-4 h-4 fill-current" fill="url(#half-star)"></i>';
        }

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i data-feather="star" class="w-4 h-4 text-gray-300"></i>';
        }

        return stars;
    }
}
customElements.define('custom-product-card', CustomProductCard);
