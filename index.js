const dropdownBtns = document.querySelectorAll('.dropdownBtn');
for(const dropdownBtn of dropdownBtns){
  dropdownBtn.addEventListener('click', function(){ // it is dropdownBtn.addEventLinstener not dropdownBtns.addEventLinstener
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show')
  })
}
