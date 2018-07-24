[![Published on NPM](https://img.shields.io/npm/v/@polymer/paper-badge.svg)](https://www.npmjs.com/package/@polymer/paper-badge)
[![Build status](https://travis-ci.org/PolymerElements/paper-badge.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-badge)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/paper-badge)

## &lt;paper-badge&gt;

`<paper-badge>` is a circular text badge that is displayed on the top right
corner of an element, representing a status or a notification. It will badge
the anchor element specified in the `for` attribute, or, if that doesn't exist,
centered to the parent node containing it.

See: [Documentation](https://www.webcomponents.org/element/@polymer/paper-badge),
  [Demo](https://www.webcomponents.org/element/@polymer/paper-badge/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/paper-badge
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/paper-badge/paper-badge.js';
      import '@polymer/paper-button/paper-button.js';
      import '@polymer/paper-icon-button/paper-icon-button.js';
      import '@polymer/iron-icons/iron-icons.js';
      import '@polymer/iron-icons/social-icons.js';
    </script>
  </head>
  <body>
    <div style="display:inline-block">
      <span>Inbox</span>
      <paper-badge label="3"></paper-badge>
    </div>

    <div>
      <paper-button id="btn">Status</paper-button>
      <paper-badge
          icon="favorite"
          for="btn"
          label="favorite icon">
      </paper-badge>
    </div>

    <div>
      <paper-icon-button
          id="account-box"
          icon="account-box"
          alt="account-box">
      </paper-icon-button>
      <paper-badge
          icon="social:mood"
          for="account-box"
          label="mood icon">
      </paper-badge>
    </div>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-badge/paper-badge.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/social-icons.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <div style="display:inline-block">
        <span>Inbox</span>
        <paper-badge label="3"></paper-badge>
      </div>

      <div>
        <paper-button id="btn">Status</paper-button>
        <paper-badge
            icon="favorite"
            for="btn"
            label="favorite icon">
        </paper-badge>
      </div>

      <div>
        <paper-icon-button
            id="account-box"
            icon="account-box"
            alt="account-box">
        </paper-icon-button>
        <paper-badge
            icon="social:mood"
            for="account-box"
            label="mood icon">
        </paper-badge>
      </div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```


Example:

```html
<div style="display:inline-block">
  <span>Inbox</span>
  <paper-badge label="3"></paper-badge>
</div>

<div>
  <paper-button id="btn">Status</paper-button>
  <paper-badge icon="favorite" for="btn" label="favorite icon"></paper-badge>
</div>

<div>
  <paper-icon-button id="account-box" icon="account-box" alt="account-box"></paper-icon-button>
  <paper-badge icon="social:mood" for="account-box" label="mood icon"></paper-badge>
</div>
```
## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/paper-badge
cd paper-badge
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```