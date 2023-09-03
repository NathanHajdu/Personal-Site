/* Preload Intro */
window.addEventListener('load', function () {
  const preloader = document.querySelector('.intro');
  const video = preloader.querySelector('#preloader-video');
  const preloadDuration = 2000; // Duration

  video.addEventListener('playing', function () {
    setTimeout(function () {
      preloader.classList.add('hide');
      preloader.remove();
    }, preloadDuration);
  });

  if (video.readyState >= video.HAVE_CURRENT_DATA) {
    setTimeout(function () {
      preloader.classList.add('hide');
      preloader.remove();
    }, preloadDuration);
  }
});

/* Hero Fade In */
document.addEventListener('DOMContentLoaded', function () {
  const heroh1 = document.getElementById('hero-h1');
  const heroh2 = document.getElementById('hero-h2');
  const herolead = document.getElementById('hero-lead');
  const herobutton = document.getElementById('hero-button');

  setTimeout(function () {
    heroh1.style.opacity = '1';
    heroh1.style.transform = 'translateY(0)';
  }, 2000);

  setTimeout(function () {
    heroh2.style.opacity = '1';
    heroh2.style.transform = 'translateY(0)';
  }, 2300);

  /* Type Out Lead Effect */
  function typeText(element, text, i) {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      setTimeout(function () {
        typeText(element, text, i + 1);
      }, 25);
    }
  }

  setTimeout(function () {
    typeText(herolead, "I'm a software engineer with a passion for building stunning digital solutions that captivate and engage users.", 0);
    herolead.style.opacity = '1';
    herolead.style.transform = 'translateY(0)';
  }, 2600);

  setTimeout(function () {
    herobutton.style.opacity = '1';
    herohbutton.style.transform = 'translateY(0)';
  }, 3000);

  const pElement = document.getElementById("hero-p");
  const lead = pElement.textContent;
  pElement.textContent = "";

  for (let i = 0; i < lead.length; i++) {
    setTimeout(() => {
      pElement.textContent += lead[i];
    }, i * 100);
  }

});

/* About Code Line Type Effect */
document.addEventListener('DOMContentLoaded', function () {
  const codetext = document.getElementById("code-text");
  const code = codetext.textContent;
  codetext.textContent = "";

  function typeCodeText() {
    for (let i = 0; i < code.length; i++) {
      setTimeout(() => {
        codetext.textContent += code[i];
      }, i * 100);
    }
  }

  window.addEventListener('scroll', function () {
    const distanceFromTopAbout = about.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distanceFromTopAbout - windowHeight <= 0) {
      typeCodeText();
      window.removeEventListener('scroll', arguments.callee);
    }
  });
});

/* Remaining Sections Fade In */
document.addEventListener('DOMContentLoaded', function () {
  const about = document.getElementById('about');
  const experience = document.getElementById('experience');
  const work = document.getElementById('work');
  const contact = document.getElementById('contact');
  const windowHeight = window.innerHeight;

  window.addEventListener('scroll', function () {
    const distanceFromTopAbout = about.getBoundingClientRect().top + 300;
    const distanceFromTopExperience = experience.getBoundingClientRect().top + 300;
    const distanceFromTopWork = work.getBoundingClientRect().top + 300;
    const distanceFromTopContact = contact.getBoundingClientRect().top + 300;

    if (distanceFromTopAbout - windowHeight <= 0) {
      about.style.opacity = '1';
      about.style.transform = 'translateY(0)';
    }

    if (distanceFromTopExperience - windowHeight <= 0) {
      experience.style.opacity = '1';
      experience.style.transform = 'translateY(0)';
    }

    if (distanceFromTopWork - windowHeight <= 0) {
      work.style.opacity = '1';
      work.style.transform = 'translateY(0)';
    }

    if (distanceFromTopContact - windowHeight <= 0) {
      contact.style.opacity = '1';
      contact.style.transform = 'translateY(0)';
    }
  });
});
