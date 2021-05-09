const templateAccordion = document.createElement('template');
templateAccordion.innerHTML = `
<style>
    @import "./css/main.css"
</style>
<div class="accordion--item">
    <div class="flex-space-between accordion--item-trigger">
        <span><slot name="title" /></span>
        <img src="./images/icon-arrow.svg" />
    </div>
    <div class="accordion--item-content">
        <p><slot name="content" /></p>
    </div>
</div>
`;

class AccordionComponent extends HTMLElement {
    constructor() {
        super();

        this.showContent = false;

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(templateAccordion.content.cloneNode(true));
    }

    toggleContent() {
        this.showContent = !this.showContent;

        const contentVisibility = this.shadowRoot.querySelector('.accordion--item-content');

        // console.log(contentVisibility.closest('.accordion--item'));

        if (this.showContent) {
            // document.querySelector('.accordion--item-content').style.display('none');
            contentVisibility.style.display = 'block';
            // contentVisibility.classList.add('show');
        } else {
            contentVisibility.style.display = 'none';
            // contentVisibility.classList.remove('show');
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.accordion--item-trigger').addEventListener('click', () => this.toggleContent());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('.accordion--item-trigger').removeEventListener();
    }
}

customElements.define('accordion-component', AccordionComponent);