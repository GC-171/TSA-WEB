new Vue({
  el: '#app',
  data: {
    labels: {
      expand: 'Expand all +',
      collapse: 'Collapse all -'
    },
    accordions: {
      'Experience': { isOpen: false },
      'Insights': { isOpen: false },
      'Credentials': { isOpen: false },
      'Recreational': { isOpen: false }

    }
  },
  computed: {
    toggleAllLabel: function toggleAllLabel() {
      return this.showCollapseAll ? this.labels.collapse : this.labels.expand;
    },
    areAllAccordionsOpen: function areAllAccordionsOpen() {
      var _this = this;

      return Object.keys(this.accordions).every(function (key) {
        return _this.accordions[key].isOpen;
      });
    },
    showCollapseAll: function showCollapseAll() {
      return this.areAllAccordionsOpen;
    },
    showExpandAll: function showExpandAll() {
      return this.showCollapseAll === false;
    }
  },
  methods: {
    toggleAll: function toggleAll() {
      var _this2 = this;

      var newIsOpen = this.showExpandAll;
      Object.keys(this.accordions).forEach(function (key) {
        _this2.accordions[key].isOpen = newIsOpen;
      });
    },
    toggleAccordion: function toggleAccordion(label) {
      var accordion = this.accordions[label];

      if (accordion) {
        accordion.isOpen = !accordion.isOpen;
      } else {
        console.error('Could not find accordion \'' + label + '\'');
      }
    },
    isOpen: function isOpen(label) {
      var accordion = this.accordions[label];
      return accordion ? accordion.isOpen : false;
    }
  }
});