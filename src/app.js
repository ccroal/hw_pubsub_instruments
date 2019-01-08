const instrumentData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const FamilyMenuView = require('./views/family_menu_view.js')
const FamilyDetailView = require('./views/family_detail_view.js')

document.addEventListener('DOMContentLoaded', () => {
console.log('JavaScript Loaded');
const selectElement = document.querySelector('#instrument-families');

const familyMenuView = new FamilyMenuView(selectElement);
familyMenuView.bindEvents();

const familyDetailView = new FamilyDetailView();
familyDetailView.bindEvents();

const instrumentDataModel = new InstrumentFamilies(instrumentData)
instrumentDataModel.bindEvents();

});
