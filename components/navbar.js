class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .nav-link:hover {
                    border-color: white;
                }
                .search-btn:hover {
                    background-color: #f3a847;
                }
                .cart-count {
                    top: -8px;
                    right: -8px;
                }
            </style>
            <nav class="bg-gray-900 text-white py-2 px-4">
                <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div class="flex items-center mb-2 md:mb-0">
                        <a href="/" class="flex items-center">
                            <span class="text-2xl font-bold text-yellow-400 mr-2">Amazon</span>
                            <i data-feather="shopping-cart" class="text-yellow-400"></i>
                        </a>
                    </div>
                    
                    <div class="w-full md:w-1/2 mb-2 md:mb-0">
                        <div class="flex">
                            <input type="text" class="w-full px-4 py-2 rounded-l text-gray-800 focus:outline-none" placeholder="Search for products...">
                            <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-r flex items-center">
                                <i data-feather="search" class="mr-1"></i>
                                Search
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="#" class="nav-link border border-transparent px-2 py-1 rounded">Account</a>
                        <a href="#" class="nav-link border border-transparent px-2 py-1 rounded">Orders</a>
                        <a href="#" class="relative nav-link border border-transparent px-2 py-1 rounded flex items-center">
                            <i data-feather="shopping-cart" class="mr-1"></i>
                            Cart
                            <span id="cart-count" class="hidden cart-count absolute bg-yellow-400 text-gray-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">0</span>
                        </a>
                    </div>
                </div>
            </nav>
        `;
    }
}
customElements.define('custom-navbar', CustomNavbar);
