function openTabWhatWeDo(evt, tabCont) {
  let tabcontents, tablinks;
  tabcontents = document.querySelectorAll('.tabcontent-wwd');
  for (tabcontent of tabcontents) {
    tabcontent.style.display = 'none';
  }

  tablinks = document.querySelectorAll('.tablinks-wwd');
  for (tablink of tablinks) {
    tablink.className = tablink.className.replace(' active', '');
  }
  document.getElementById(tabCont).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function openTabProject(evt, tabCont) {
  let tabcontents, tablinks;
  tabcontents = document.querySelectorAll('.tabcontent-project');
  for (tabcontent of tabcontents) {
    tabcontent.style.display = 'none';
  }

  tablinks = document.querySelectorAll('.tablinks-project');
  for (tablink of tablinks) {
    tablink.className = tablink.className.replace(' active', '');
  }
  document.getElementById(tabCont).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpenWhatWeDo').click();
document.getElementById('defaultOpenProject').click();
