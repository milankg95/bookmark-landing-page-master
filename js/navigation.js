const templateNavigation = document.createElement('template');
templateNavigation.innerHTML = `
<style>
    @import "./css/main.css"
</style>
<ul class="flex-row navigation-ul">
    <li class="navigation-ul--li">
        <a class="navigation-ul--li-link" href="#">Features</a>
    </li>
    <li class="navigation-ul--li">
        <a class="navigation-ul--li-link" href="#">Pricing</a>
    </li>
    <li class="navigation-ul--li">
        <a class="navigation-ul--li-link" href="#">Contact</a>
    </li>
</ul>
`;

class NavigationComponent extends HTMLElement {
    constructor() {
        super();

        this.showContent = false;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateNavigation.content.cloneNode(true));
    }
}

customElements.define('navigation-component', NavigationComponent);