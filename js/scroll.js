function scrollTo(elem) {
  elem.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

document.addEventListener('DOMContentLoaded', function() {
  var work = document.getElementById('work')
  var workbtn = document.getElementById('work-btn')
  workbtn.addEventListener('click', function() {
    scrollTo(work)
  })
  var about = document.getElementById('about')
  var aboutbtn = document.getElementById('about-btn')
  aboutbtn.addEventListener('click', function() {
    scrollTo(about)
  })
  var contact = document.getElementById('contact')
  var contactbtn = document.getElementById('contact-btn')
  contactbtn.addEventListener('click', function() {
    scrollTo(contact)
  })
})