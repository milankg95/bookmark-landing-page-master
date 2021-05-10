class SectionDescriptor extends HTMLElement {
    constructor() {
        super();

        const textAlign = this.getAttribute('text-align');
        const titleLevel = this.getAttribute('title-level');
        let alignClass, headingLevel = null;

        switch(titleLevel) {
            case '1':
                headingLevel = 'h1';
                break;
            case '2':
                headingLevel = 'h2';
                break;
            case '3':
                headingLevel = 'h3';
                break;
            case '4':
                headingLevel = 'h4';
                break;
            case '5':
                headingLevel = 'h5';
                break;
            case '6':
                headingLevel = 'h6';
                break;
            default:
                headingLevel = 'h3';
                break;
        }

        switch(textAlign) {
            case 'left':
                alignClass = 'text-left';
                break;
            case 'right':
                alignClass = 'text-right';
                break;
            case 'center':
                alignClass = 'text-center';
                break;
            default:
                alignClass = 'text-left';
                break;
        }

        this.innerHTML = `
            <article class="section-descriptor ${alignClass}">
                <${headingLevel}>${this.getAttribute('title')}</${headingLevel}>
                <p>${this.getAttribute('content')}</p>
            </article>
        `;
    }
}

class ExtensionItem extends HTMLElement {
    constructor() {
        super();

        const extensionImgUrl = this.getAttribute('imgUrl');
        const extensionTitle = this.getAttribute('title');
        const extensionVersion = this.getAttribute('version');
        const extensionLink = this.getAttribute('link');

        this.innerHTML = `
            <article class="extension">
                <div class="text-center extension--body">
                    <img class="extension--body-img" src="${extensionImgUrl}" alt="Extension item" />
                    <h5 class="extension--body-title">${extensionTitle}</h5>
                    <p>${extensionVersion}</p>
                </div>
                <div class="d-flex extension--divider">
                    <img class="extension--divider-img" src="./images/bg-dots.svg" alt="Extension dots">
                </div>
                <div class="text-center d-flex extension--footer">
                    <a class="btn-theme extension--footer-link" href="${extensionLink}">Add & Install Extension</a>
                </div>
            </article>
        `;
    }
}

customElements.define('section-descriptor', SectionDescriptor);
customElements.define('extension-item', ExtensionItem);