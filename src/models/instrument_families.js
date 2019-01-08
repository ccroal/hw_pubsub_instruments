const PubSub = require('../helpers/pub_sub.js')
const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-families', this.data);
  console.log('Data Families', this.data);

  PubSub.subscribe('FamilyMenuView:selected-family', (event) => {
    const name = event.detail;
    const foundFamily = this.findByName(name);
    PubSub.publish('InstrumentFamilies:found-family', foundFamily);
  })
}

InstrumentFamilies.prototype.findByName = function(name){
  const foundFamily = this.data.find((family) => {
    family.name === name;
  })
  return foundFamily
}



module.exports = InstrumentFamilies;
