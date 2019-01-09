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
  const familyHeader = document.createElement('h3');
  const infoPara = document.createElement('p');
  const listTitle = document.createElement('h4');
  listTitle.textContent = 'Instruments include:'

  const list = document.createElement('ul');
  family.instruments.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  })

  familyHeader.textContent = family.name;
  infoPara.textContent = family.description;
  familyDiv.innerHTML = '';

  familyDiv.appendChild(familyHeader);
  familyDiv.appendChild(infoPara);
  familyDiv.appendChild(list);


}


module.exports = FamilyDetailView;
