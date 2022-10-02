const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) { // e is a parameter stand for event
  // Remove all show and border classes
  removeBorder();
  removeShow();
  this.classList.add('tab-border'); // Add border to current tab item
  const tabContentItem = document.querySelector(`#${this.id}-content`); // Grab content item from DOM
  tabContentItem.classList.add('show'); // Add show class
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach(item => {
    item.classList.remove('tab-border');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach(item => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem); // if click, call selectItem
});
