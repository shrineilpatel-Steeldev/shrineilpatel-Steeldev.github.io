class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .footer-link:hover {
                    text-decoration: underline;
                }
            </style>
            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 class="text-lg font-bold mb-4">Get to Know Us</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link text-gray-300">About Us</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Careers</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Press Releases</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Make Money with Us</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link text-gray-300">Sell products</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Become an Affiliate</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Advertise Your Products</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Payment Products</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link text-gray-300">Amazon Business Card</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Shop with Points</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Reload Your Balance</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-4">Let Us Help You</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="footer-link text-gray-300">Your Account</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Your Orders</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Shipping Rates & Policies</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Returns & Replacements</a></li>
                                <li><a href="#" class="footer-link text-gray-300">Help</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <div class="flex justify-center space-x-6 mb-4">
                            <a href="#" class="hover:text-white"><i data-feather="facebook"></i></a>
                            <a href="#" class="hover:text-white"><i data-feather="twitter"></i></a>
                            <a href="#" class="hover:text-white"><i data-feather="instagram"></i></a>
                            <a href="#" class="hover:text-white"><i data-feather="youtube"></i></a>
                        </div>
                        <p>&copy; 2023 Amazon Clone Deluxe. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
