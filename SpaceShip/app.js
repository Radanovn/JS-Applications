'use strict';

class SpaceShip extends HTMLElement {
  shadow;

  constructor() {
    super();
    console.log('constructed');
  }
  addobtedCallback() {
    console.log('attached');
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'closed' });
    const style = document.createElement('style');
    const div = document.createElement('div');

    style.textContent = ``;
    
    this.setAttribute('dir', 'right');
    this.setAttribute('t', '0');
    this.setAttribute('l', '0');
    this.setAttribute('engine', 'off');

    this.shadow.appendChild(style);
    this.shadow.appendChild(div);
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

  renderStyles_generic() {
    return `{
    display: block;
    position: absolute;
    height: 210px;
    width: 210px;
    background-repeat: no-repeat;
    background-size: 420px 210px;

    transition-delay: 0s;
    transition-duration: 100ms;
    transition-property: transform;
    transition-timing-function: linear;

    background-image: url(/assets/ship-sprite.gif);
    }
    `;
  }
  renderStyles_dir() {
    return `
    div {
        transform: rotate(90deg);

    }`;
  }
  renderStyles_t() {
    return `
    div {
   top: 0;
        
    }`;
  }
  renderStyles_l() {
    return `
    div {
left: 0;
        
    }`;
  }
  renderStyles_engine() {
    return `
    div {
background-position: 0 0;
        
    }`;
  }

  static get observedAttributes() {
    return ['dir', 't', 'l', 'engine'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }
}

window.customElements.define('space-ship', SpaceShip);
document.body.appendChild(new SpaceShip());
