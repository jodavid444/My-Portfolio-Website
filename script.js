const projects = {
    one: {
      title: 'Multi-Post Stories',
      title1: 'Keeping tracks of hundreds of components website',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: './images/Img Placeholder.png',
      },
      technologies: {
        one: 'css',
        two: 'html',
        three: 'bootstrap',
        four: 'Ruby',
      },
      links: {
        live: 'images/icon2.png',
        source_code: 'images/Vector.png',
      },
    },
    two: {
      title: 'Profesional Art Printing Data',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: 'images/Snapshoot Portfolio.png',
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'Ruby',
      },
      links: {
        live: 'images/icon2.png',
        source_code: 'images/Vector.png',
      },

    },
    three: {
      title: 'Data Management',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: 'images/Snapshoot Portfolio.png',
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'Ruby',
      },
      links: {
        live: 'images/icon2.png',
        source_code: 'images/Vector.png',
      },
    },
    four: {
      title: 'Confrence Website',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      description2: 
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam invent asperiores,corrupti quos recusandae corrupti quos recusandae non ratione qui maxime blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam invent asperiores,corrupti quos recusandae corrupti quos recusandae non ratione qui maxime blanditiis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam invent asperiores,corrupti quos recusandae corrupti quos recusandae non ratione qui maxime blanditiis.",
      featured_image: {
      mobile:'images/Snapshoot Portfolio.png',
      desktop:'images/Snapshoot Portfolio.png'
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'Ruby',
      },
      links: {
        live: 'images/icon2.png',
        source_code: 'images/Vector.png',
      },
    },
    five: {
      title: 'To Do List Application',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: '.images/Snapshoot Portfolio.png',
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'javascript',
      },
      links: {
        live: 'images/icon2.png',
        source_code: 'images/Vector.png',
      },
    },
    six: {
      title: ' Personal Online Banking',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: '.images/Snapshoot Portfolio.png',
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'Ruby',
      },
      links: {
        live: 'images/Vector.png',
        source_code: 'images/icon2.png',
      },
    },
    seven: {
      title: 'React Based Application',
      description:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      description1:
        "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      featured_image: {
        mobile: 'images/Snapshoot Portfolio.png',
        desktop: '.images/Snapshoot Portfolio.png',
      },
      technologies: {
        one: 'html',
        two: 'bootstrap',
        three: 'Ruby',
      },
      links: {
        live: 'images/Vector.png',
        source_code: 'images/icon2.png',
      },
    },
  };
  

const worksection = document.querySelector('#work-section');

const main = document.createElement('div');

worksection.appendChild(main);

main.innerHTML = `   <div id="work-title">
<div class="work-header">
    <h2>My Recent Works</h2>
</div>
<div class="horizontal-line">
    <hr class="work-hr">
</div>
</div>
<!----------------Work Header--------------------------->
<div id="work-item">
<div class="project work-context pr-1">
    <div class="work-img">
        <img class="img-mobile" src="images/Img Placeholder.png" alt="mobile-img">
        <img src="images/Img Placeholder (8).png" alt="desktop-image" class="desktop-image">
        
    </div>
    <div class="work-item-content">
        <div class="work-description">
            <h3>${projects.one.title}</h3>
            <p>${projects.one.description}</p>
            <ul class="work-ul">
                <li>${projects.one.technologies.one}</li>
                <li>${projects.one.technologies.two}</li>
                <li>${projects.one.technologies.three}</li>
                <li>${projects.one.technologies.four}</li>
            </ul>
        </div>
        <div class="work-btn-con">
        
            <button class="work-btn" id="one">
                See Project
            </button>
        
        </div>
    </div>
</div>
</div>
<!--------------Background Cards------------------------------------------->
<div id="work-container">
<ul class="work-content">
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.two.title}</h3>
            <p>
            ${projects.two.description1}
            </p>
            <ul>
                <li>${projects.two.technologies.one}</li>
                <li>${projects.two.technologies.two}</li>
                <li>${projects.two.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="two" href="#2">
                See Project
            </a>
        </div>
    </li>
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.three.title}</h3>
            <p>
            ${projects.three.description1}
            </p>
            <ul>
                <li>${projects.three.technologies.one}</li>
                <li>${projects.three.technologies.two}</li>
                <li>${projects.three.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="three" href="#2">
                See Project
            </a>
        </div>
    </li>
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.four.title}</h3>
            <p>
            ${projects.four.description1}
            </p>
            <ul>
                <li>${projects.four.technologies.one}</li>
                <li>${projects.four.technologies.two}</li>
                <li>${projects.four.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="four" href="#2">
                See Project
            </a>
        </div>
    </li>
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.five.title}</h3>
            <p>
            ${projects.five.description1}
            </p>
            <ul>
                <li>${projects.five.technologies.one}</li>
                <li>${projects.five.technologies.two}</li>
                <li>${projects.five.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="five" href="#2">
                See Project
            </a>
        </div>
    </li>
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.six.title}</h3>
            <p>
            ${projects.six.description1}
            </p>
            <ul>
                <li>${projects.six.technologies.one}</li>
                <li>${projects.six.technologies.two}</li>
                <li>${projects.six.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="six" href="#2">
                See Project
            </a>
        </div>
    </li>
    <li class="project pr-2 bg-img ">
        <div class="body-content">
            <h3>${projects.seven.title}</h3>
            <p>
            ${projects.seven.description1}
            </p>
            <ul>
                <li>${projects.seven.technologies.one}</li>
                <li>${projects.seven.technologies.two}</li>
                <li>${projects.seven.technologies.three}</li>
            </ul>
        </div>
        <div class="project-btn-con">
            <a class="project-btn work-btn" id="seven" href="#2">
                See Project
            </a>
        </div>
    </li>

</ul>
</div>
</section> 
`;
const body = document.querySelector('body')
const output = document.querySelector('.main');``
const open = document.querySelectorAll('.work-btn');
const mainbody = document.querySelector('#main');
// eslint-disable-next-line block-spacing
open.forEach((element) => {
element.addEventListener( 'click', (event) => {
    let number = event.target.id
const see = document.createElement('div');
see.className = 'see';
const popup = document.createElement('div');
popup.className = 'popup';
popup.innerHTML = `
  <div class="popup-container">
 <div class="header-title">
 <h1 class="bg">${projects[number].title}</h1>
 <img class="icon-img close" src="images/Icon.png" alt="close-btn">
  </div>
  <nav>
      <ul>
          <li>${projects[number].technologies.one}</li>
          <li>${projects[number].technologies.two}</li>
          <li>${projects[number].technologies.three}</li>
      </ul>
  </nav>
  <div class="flex-con">
  <div class="image-container">
      <img class="card-img"src="${projects[number].featured_image.mobile}" alt="">
  </div>
  
  <div class="link-container">
  <p class="text">
  ${projects.four.description2}
  </p>
  <p class="text2">
    ${projects.four.description3}
  </p>
     <span> <a  class="close" href="#">See Live <img class="footer-img" src="${projects[number].links.live}" alt=""></a>
     <a  href="#">See Source <img class="footer-img" src="${projects[number].links.source_code}" alt=""></a></span>
  </div>
  </div>
</div>
`;
see.appendChild(popup);
body.appendChild(see);

output.classList.toggle('act')

const close = document.querySelector('.close');
close.addEventListener('click', () => {
  body.removeChild(see);
  output.classList.remove('act')


});

    });
});

