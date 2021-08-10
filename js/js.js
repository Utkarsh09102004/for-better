

/*********for navbar *********/
let selectHeader = document.getElementById('header')
  
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    document.addEventListener('load', headerScrolled)
    document.addEventListener('scroll', headerScrolled)
  

 /***********for nav-items**************/
    let selectabout = document.getElementById('about')
  
    const aboutScrolled = () => {
      if (window.scrollY > 100) {
        selectabout.classList.add('nav-scrolled')
      } else {
        selectabout.classList.remove('nav-scrolled')
      }
    }
    document.addEventListener('load', aboutScrolled)
    document.addEventListener('scroll', aboutScrolled)

   
   
   
   
    let selecthome = document.getElementById('home')
  
    const homeScrolled = () => {
      if (window.scrollY > 100) {
        selecthome.classList.add('nav-scrolled')
      } else {
        selecthome.classList.remove('nav-scrolled')
      }
    }
    document.addEventListener('load', homeScrolled)
    document.addEventListener('scroll', homeScrolled)

  
  
  
  
    let selectblogs = document.getElementById('blogs')
  
    const blogsScrolled = () => {
      if (window.scrollY > 100) {
        selectblogs.classList.add('nav-scrolled')
      } else {
        selectblogs.classList.remove('nav-scrolled')
      }
    }
    document.addEventListener('load', blogsScrolled)
    document.addEventListener('scroll', blogsScrolled)

    
  
  
  
  
    let selectevents = document.getElementById('events')
  
    const eventsScrolled = () => {
      if (window.scrollY > 100) {
        selectevents.classList.add('nav-scrolled')
      } else {
        selectevents.classList.remove('nav-scrolled')
      }
    }
    document.addEventListener('load', eventsScrolled)
    document.addEventListener('scroll', eventsScrolled)

   
   
    /***for animation of nav-items ******/

    let selectAbout = document.getElementById('About')
  
    const AboutScrolled = () => {
      if (window.scrollY > 100) {
        selectAbout.classList.add('btn-5a')
      } else {
        selectAbout.classList.remove('btn-5a')
      }
    }
    document.addEventListener('load', AboutScrolled)
    document.addEventListener('scroll', AboutScrolled)




    let selectHome = document.getElementById('Home')
  
    const HomeScrolled = () => {
      if (window.scrollY > 100) {
        selectHome.classList.add('btn-5a')
      } else {
        selectHome.classList.remove('btn-5a')
      }
    }
    document.addEventListener('load', HomeScrolled)
    document.addEventListener('scroll', HomeScrolled)





    let selectEvents = document.getElementById('Events')
  
    const EventsScrolled = () => {
      if (window.scrollY > 100) {
        selectEvents.classList.add('btn-5a')
      } else {
        selectEvents.classList.remove('btn-5a')
      }
    }
    document.addEventListener('load', EventsScrolled)
    document.addEventListener('scroll', EventsScrolled)




    let selectBlogs = document.getElementById('Blogs')
  
    const BlogsScrolled = () => {
      if (window.scrollY > 100) {
        selectBlogs.classList.add('btn-5a')
      } else {
        selectBlogs.classList.remove('btn-5a')
      }
    }
    document.addEventListener('load', BlogsScrolled)
    document.addEventListener('scroll', BlogsScrolled)



    let selectlogo = document.getElementById('logo-outer')
  
    const logoScrolled = () => {
      if (window.scrollY > 100) {
        selectlogo.innerHTML="<img src='logos/fb-logo(sub).jpg' id='trans-logo' style='border-radius:0; width:100px; height:100px; visibility:visible'></img>"
      } else {
        selectlogo.innerHTML="<img src='logos/logo(no-subtext).png' id='trans-logo'>"
      }
    }
    document.addEventListener('load', logoScrolled)
    document.addEventListener('scroll', logoScrolled)


    
    
    
    let selectul = document.getElementById('ulo')
  
    const ulScrolled = () => {
      if (window.scrollY > 100) {
        selectul.classList.add('margin-setter')
      } else {
        selectul.classList.remove('margin-setter')
      }
    }
    document.addEventListener('load', ulScrolled)
    document.addEventListener('scroll', ulScrolled)
  
    
   