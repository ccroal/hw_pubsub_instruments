const PubSub = require('../helpers/pub_sub.js');

const FamilyDetailView = function(){

};

FamilyDetailView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:found-family', (event) => {
    this.render(event.detail);
  })
}

FamilyDetailView.prototype.render = function(family){
  const familyDiv = document.querySelector('#family-info');
  const familyHeader = document.createElement('h3')
  const infoPara = document.createElement('p')

  familyHeader.textContent = `${family.name}`;
  infoPara.textContent = `${family.description}`;
  familyDiv.innerHTML = '';
  familyDiv.appendChild(familyHeader);
  familyDiv.appendChild(infoPara);
}

module.exports = FamilyDetailView;
