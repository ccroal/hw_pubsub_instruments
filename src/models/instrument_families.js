const PubSub = require('../helpers/pub_sub.js')
const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-families', this.data);

  PubSub.subscribe('FamilyMenuView:selected-family', (event) => {
    const index = event.detail;
    const foundFamily = this.findFamily(index);
    PubSub.publish('InstrumentFamilies:found-family', foundFamily);
  })
}

InstrumentFamilies.prototype.findFamily = function(index){
  return this.data[index];
};

module.exports = InstrumentFamilies;
