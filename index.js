const dropdownBtns = document.querySelectorAll('.dropdownBtn');
for(const dropdownBtn of dropdownBtns){
  dropdownBtns.addEventListener('click', function(){
    const dropDown = this.querySelector('.dropdown');
    dropDown.classList.toggle('show')
  })
}
