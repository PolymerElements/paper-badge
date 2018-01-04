import '../../polymer/polymer.js';
import '../paper-badge.js';
import { Polymer as Polymer$0 } from '../../polymer/lib/legacy/polymer-fn.js';
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Polymer$0({
  _template: Polymer.html`
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
