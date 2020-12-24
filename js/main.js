const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e) {
    // remove all border before adding the red border into tab
    removeBorder();
    // remove all content
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

// remove border
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

// remove show content item
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));