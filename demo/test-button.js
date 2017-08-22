import '../../polymer/polymer.js';
import '../../paper-icon-button/paper-icon-button.js';
import '../../iron-icons/iron-icons.js';
import '../../paper-styles/color.js';
import '../paper-badge.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
        position: relative;
      }

      paper-icon-button {
        padding: 0;
        margin: 0;
      }

      paper-badge {
        --paper-badge-background: var(--paper-light-blue-300);
      }
    </style>

    <paper-icon-button id="button" icon="menu" alt="menu"></paper-icon-button>
    <paper-badge for="button" label="♠︎"></paper-badge>
`,

  is: 'test-button'
});
