function addSelectionState(array) {
  array.forEach((element) => {
    element.addEventListener('click', () => {
      array.forEach((component) => {
        const isComponentSelected = component.classList.contains('selected');
        component.classList.toggle('selected', !isComponentSelected);
        component.classList.toggle('unselected', isComponentSelected);
      });
    });
  });
}

/* Front & Back Side */
const topCourt = Array.from(document.querySelectorAll('#top'));
const bottomCourt = Array.from(document.querySelectorAll('#bottom'));
const rightCourt = Array.from(document.querySelectorAll('#right'));
const leftCourt = Array.from(document.querySelectorAll('#left'));

addSelectionState(topCourt);
addSelectionState(bottomCourt);
addSelectionState(rightCourt);
addSelectionState(leftCourt);
