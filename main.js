window.addEventListener('scroll', function(){
  
  const about = document.getElementById('about');
  const skills = document.getElementById('skills');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  const gnbActive = document.querySelectorAll('#gnb > ul > li');
  console.log(window.scrollY, about.offsetTop)

  if(window.scrollY >= about.offsetTop && this.window.scrollY < skills.offsetTop){
    console.log('about')
    gnbActive.forEach(li => {
      li.classList.remove('active');
    })
    gnbActive[1].classList.add('active');
  } else if(window.scrollY >= skills.offsetTop && this.window.scrollY < projects.offsetTop){
    console.log('skills')
    gnbActive.forEach(li => {
      li.classList.remove('active');
    })
    gnbActive[2].classList.add('active');
  } else if(window.scrollY >= projects.offsetTop && this.window.scrollY < contact.offsetTop){
    console.log('projects')
    gnbActive.forEach(li => {
      li.classList.remove('active');
    })
    gnbActive[3].classList.add('active');
  } else if(window.scrollY >= contact.offsetTop){
    console.log('contact')
    gnbActive.forEach(li => {
      li.classList.remove('active');
    })
    gnbActive[4].classList.add('active');
  } else {
    gnbActive.forEach(li => {
      li.classList.remove('active');
    })
    gnbActive[0].classList.add('active');
  }

})


