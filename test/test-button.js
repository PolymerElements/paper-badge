import '../../polymer/polymer.js';
import '../paper-badge.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
Polymer({
  _template: `
    <style>
      :host {
        display: inline-block;
      }

      #button {
        width: 100px;
        height: 20px;
        background-color: red;
      }
    </style>
    <div id="button"></div>
    <paper-badge id="badge" for="button" label="1"></paper-badge>
`,

  is: 'test-button'
});
