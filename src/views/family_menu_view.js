const PubSub = require('../helpers/pub_sub.js');

const FamilyMenuView = function(element){
  this.element = element;
};

FamilyMenuView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:all-families', (event) => {
    this.populate(event.detail);
  });
  this.element.addEventListener('change', (event) => {
    selectedIndex = event.target.value;
    PubSub.publish('FamilyMenuView:selected-family', selectedIndex)
  })
}

FamilyMenuView.prototype.populate = function(families){
  families.forEach((family) => {
  const option = document.createElement('option');
  option.index = family.name;
  option.textContent = family.name;
  this.element.appendChild(option);
  })
}

module.exports = FamilyMenuView;
