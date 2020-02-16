// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// import Rails from "@rails/ujs"
// require("@rails/ujs")
// require("turbolinks").start()
// require("channels")
// require("@rails/activestorage").start()


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.

require.context('../images', true)
// const images = require.context('images', true)
// const imagePath = (name) => images(name, true)

const fonts = require.context('fonts', true)
const fontPath = (name) => fonts(name, true)

import 'jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap';

import { Sortable, Draggable /*waht ever you need*/ } from '@shopify/draggable';
// import * as Draggable from '@shopify/draggable/lib/draggable'
import 'autosize'
import 'chart.js'
import 'dropzone'
import 'flatpickr'
import 'highlightjs'
import 'jquery-mask-plugin'
import 'list.js'
import 'quill'
import 'select2'
import 'lib/Chart.extension'

import 'lib/polyfills'
import 'lib/demo'
import 'lib/charts'
import 'lib/autosize'
import 'lib/dashkit'
import 'lib/dropdowns'
import 'lib/dropzone.js'
import 'lib/flatpickr.js'
import 'lib/highlight.js'
import 'lib/kanban.js'
import 'lib/list.js'
import 'lib/map.js'
import 'lib/navbar.js'
import 'lib/popover.js'
import 'lib/quill.js'
import 'lib/select2.js'
import 'lib/tooltip.js'

// Rails.start()