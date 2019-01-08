const PubSub = require('../helpers/pub_sub.js')
const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  PubSub.publish('InstrumentFamilies:all-families', this.data);
  console.log('Data Families', this.data);
}

module.exports = InstrumentFamilies;