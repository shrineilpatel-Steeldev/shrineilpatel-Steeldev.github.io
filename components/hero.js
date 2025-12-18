class CustomHero extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .hero-image {
                    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
                }
            </style>
            <div class="relative">
                <img src="http://static.photos/technology/1200x630/1" alt="Hero Banner" class="w-full hero-image h-64 object-cover">
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-32"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                    <h1 class="text-3xl md:text-4xl font-bold mb-4">Welcome to Black Steel Online</h1>
                    <p class="text-lg mb-6">Shop for quality steel products with fast delivery</p>
                    <a href="#" class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded-lg inline-block">Shop Now</a>
                </div>
            </div>
        `;
    }
}
customElements.define('custom-hero', CustomHero);
