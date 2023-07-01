function addSelectionState(...courtIds) {
  courtIds.forEach((courtId) => {
    const court = Array.from(document.querySelectorAll(`#${courtId}`));
    court.forEach((element) => {
      element.addEventListener('click', () => {
        court.forEach((component) => {
          const isComponentSelected = component.classList.contains('selected');
          component.classList.toggle('selected', !isComponentSelected);
          component.classList.toggle('unselected', isComponentSelected);
        });
      });
    });
  });
}

addSelectionState('top', 'bottom', 'right', 'left');
