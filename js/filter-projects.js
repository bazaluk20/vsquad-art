document
  .querySelector('.select-selected')
  .addEventListener('click', function () {
    var items = this.nextElementSibling;
    items.classList.toggle('select-hide');
  });

filterSelection('all', null);

function filterSelection(value, element) {
  if (element === null) {
    element = document.querySelector('#defaultFilterOption');
    document.querySelector('.select-selected').innerText = 'ALL';
  } else {
    document.querySelector('.select-selected').innerText = element.innerText;
  }

  document.querySelector('.select-items').classList.add('select-hide');
  document
    .querySelectorAll('.select-option')
    .forEach(option => option.classList.remove('active'));
  element.classList.add('active');

  var x, i;
  x = document.getElementsByClassName('filterDiv');
  if (value == 'all') value = '';
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(value) > -1) w3AddClass(x[i], 'show');
  }
}

document.addEventListener('click', function (event) {
  var selectBox = document.querySelector('#filterDropdown');
  if (!selectBox.contains(event.target)) {
    document.querySelector('.select-items').classList.add('select-hide');
    document
      .querySelector('.select-selected')
      .classList.remove('select-arrow-active');
  }
});

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

// document.getElementById('defaultFilterOption').click();
