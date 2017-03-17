const Vue = require("./js/vendor/vue.min.js");

// register
Vue.component('my-component', {
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  props: ['message'],
  template: `<div>template_message <br>{{ message }}</div>`
});

// root instance
new Vue({
  el: '#register1'
});

// local register
// ======================================================/
let Child = {
  props: ['childMessage'],
  template: '<div>template from child <br>{{ childMessage }}</div>'
};

new Vue({
  el: "#register1",
  components: {
    'my-component2': Child
  }
});

