const togglers = document.querySelectorAll('.nav-toggler, .nav-menu__toggler');
togglers.forEach((toggler) => {
  toggler.addEventListener('click', function() {
    document.querySelector(this.dataset.target).classList.toggle('expanded');
  })
})
