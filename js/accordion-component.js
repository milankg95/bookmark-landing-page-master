const templateAccordion = document.createElement('template');
templateAccordion.innerHTML = `
<style>
    @import "./css/main.css"
</style>
<div class="accordion--item">
    <div class="flex-space-between accordion--item-trigger">
        <span><slot name="title" /></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
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

        this.iconInactive = '#5267df';
        this.iconActive = '#fa5757';

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
            contentVisibility.parentElement.classList.add('active');
        } else {
            contentVisibility.style.display = 'none';
            contentVisibility.parentElement.classList.remove('active');
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