// Подключение функционала 
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("selectCallback", function (e) {
  // Селект 
  const currentSelect = e.detail.select;

  if (currentSelect.closest('.template1__button')) {
    const selectClosest = currentSelect.closest('.template1__button');
    const selectValue = currentSelect.value;
    const buttonLinks = selectClosest.querySelectorAll('a');

    if (buttonLinks.length > 0) {
      buttonLinks.forEach(link => {
        link.classList.remove('_active');
      });
    }

    selectClosest.querySelector(`#${selectValue}`).classList.add('_active');
  }
});

function gsapAnimation() {
  const template1 = document.querySelector('.template1');
  if (template1 && window.innerWidth > 767.98) {
    const level1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: template1,
        start: 'start 70%',
        end: 'bottom bottom',
        // markers: true,
      },
    })

    // 1 шаг анимации
    const cloud1 = document.getElementById('cloud1');
    if (cloud1) {
      level1Timeline.from(cloud1, {
        opacity: 0,
        x: -60,
        y: -40,
        duration: 0.8,
      })
    }

    const box1 = document.getElementById('box1');
    if (box1) {
      level1Timeline.from(box1, {
        opacity: 0,
        x: -120,
        y: -10,
        duration: 0.8,
      }, "-=0.8")
    }

    const box2 = document.getElementById('box2');
    if (box2) {
      level1Timeline.from(box2, {
        opacity: 0,
        x: 130,
        y: 80,
        duration: 0.8,
      }, "-=0.8")
    }

    // 2 шаг анимации
    const circle1 = document.getElementById('circle1');
    if (circle1) {
      level1Timeline.from(circle1, {
        opacity: 0,
        duration: 0.8,
      })
    }

    const circle2 = document.getElementById('circle2');
    if (circle2) {
      level1Timeline.from(circle2, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle3 = document.getElementById('circle3');
    if (circle3) {
      level1Timeline.from(circle3, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle4 = document.getElementById('circle4');
    if (circle4) {
      level1Timeline.from(circle4, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle5 = document.getElementById('circle5');
    if (circle5) {
      level1Timeline.from(circle5, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    // 3 шаг анимации
    const circle6 = document.getElementById('circle6');
    if (circle6) {
      level1Timeline.from(circle6, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      })
    }

    const circle7 = document.getElementById('circle7');
    if (circle7) {
      level1Timeline.from(circle7, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle8 = document.getElementById('circle8');
    if (circle8) {
      level1Timeline.from(circle8, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle9 = document.getElementById('circle9');
    if (circle9) {
      level1Timeline.from(circle9, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle10 = document.getElementById('circle10');
    if (circle10) {
      level1Timeline.from(circle10, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    if (cloud1) {
      level1Timeline.to(cloud1, {
        x: 50,
        y: -20,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box1) {
      level1Timeline.to(box1, {
        x: -60,
        y: -40,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box2) {
      level1Timeline.to(box2, {
        x: -40,
        y: 30,
        duration: 0.8,
      }, "-=0.8")
    }

    // 4 шаг анимации
    const circle11 = document.getElementById('circle11');
    if (circle11) {
      level1Timeline.from(circle11, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      })
    }

    const circle12 = document.getElementById('circle12');
    if (circle12) {
      level1Timeline.from(circle12, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle13 = document.getElementById('circle13');
    if (circle13) {
      level1Timeline.from(circle13, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle14 = document.getElementById('circle14');
    if (circle14) {
      level1Timeline.from(circle14, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle15 = document.getElementById('circle15');
    if (circle15) {
      level1Timeline.from(circle15, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (cloud1) {
      level1Timeline.to(cloud1, {
        x: 0,
        y: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box1) {
      level1Timeline.to(box1, {
        x: 0,
        y: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box2) {
      level1Timeline.to(box2, {
        x: 0,
        y: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    // 5 шаг анимации
    const circle16 = document.getElementById('circle16');
    if (circle16) {
      level1Timeline.from(circle16, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      })
    }

    const circle17 = document.getElementById('circle17');
    if (circle17) {
      level1Timeline.from(circle17, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle18 = document.getElementById('circle18');
    if (circle18) {
      level1Timeline.from(circle18, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle19 = document.getElementById('circle19');
    if (circle19) {
      level1Timeline.from(circle19, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    const circle20 = document.getElementById('circle20');
    if (circle20) {
      level1Timeline.from(circle20, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box1) {
      level1Timeline.to(box1, {
        x: -60,
        y: -40,
        duration: 0.8,
      }, "-=0.8")

      level1Timeline.to(box1, {
        delay: 0.2
      })
    }

    // 6 шаг анимации
    if (circle16) {
      level1Timeline.to(circle16, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      })
    }

    if (circle17) {
      level1Timeline.to(circle17, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle18) {
      level1Timeline.to(circle18, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle19) {
      level1Timeline.to(circle19, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle20) {
      level1Timeline.to(circle20, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box1) {
      level1Timeline.to(box1, {
        x: 0,
        y: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    // 7 шаг анимации
    if (circle11) {
      level1Timeline.to(circle11, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      })
    }

    if (circle12) {
      level1Timeline.to(circle12, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "=-0.8")
    }

    if (circle13) {
      level1Timeline.to(circle13, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "=-0.8")
    }

    if (circle14) {
      level1Timeline.to(circle14, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "=-0.8")
    }

    if (circle15) {
      level1Timeline.to(circle15, {
        opacity: 0,
        y: -50,
        duration: 0.8,
      }, "=-0.8")
    }

    // 8 шаг анимации
    if (circle6) {
      level1Timeline.to(circle6, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      })
    }

    if (circle7) {
      level1Timeline.to(circle7, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle8) {
      level1Timeline.to(circle8, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle9) {
      level1Timeline.to(circle9, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle10) {
      level1Timeline.to(circle10, {
        opacity: 0,
        y: -100,
        duration: 0.8,
      }, "-=0.8")
    }

    if (cloud1) {
      level1Timeline.to(cloud1, {
        x: 40,
        y: -20,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box1) {
      level1Timeline.to(box1, {
        x: -60,
        y: -40,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box2) {
      level1Timeline.to(box2, {
        x: -40,
        y: 30,
        duration: 0.8,
      }, "-=0.8")
    }

    // 9 шаг анимации
    if (circle1) {
      level1Timeline.to(circle1, {
        opacity: 0,
        duration: 0.8,
      })
    }

    if (circle2) {
      level1Timeline.to(circle2, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle3) {
      level1Timeline.to(circle3, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle4) {
      level1Timeline.to(circle4, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    if (circle5) {
      level1Timeline.to(circle5, {
        opacity: 0,
        duration: 0.8,
      }, "-=0.8")
    }

    // 10 шаг анимации
    if (cloud1) {
      level1Timeline.to(cloud1, {
        opacity: 0,
        x: -60,
        y: -40,
        duration: 0.8,
      })
    }

    if (box1) {
      level1Timeline.to(box1, {
        opacity: 0,
        x: -120,
        y: -10,
        duration: 0.8,
      }, "-=0.8")
    }

    if (box2) {
      level1Timeline.to(box2, {
        opacity: 0,
        x: 130,
        y: 80,
        duration: 0.8,
      }, "-=0.8")

      level1Timeline.to(box2, {
        delay: 0.2
      })
    }

    level1Timeline.repeat(-1);
  }

}

function template1ChangeMargin() {
  const header = document.querySelector('.header');
  const wrapper = document.querySelector('.wrapper');
  let headerHeight = getComputedStyle(header).height;
  let wrapperPadding = getComputedStyle(wrapper).paddingTop;
  let calcHeight = 0;
  calcHeight = parseFloat(headerHeight) + parseFloat(wrapperPadding);

  const template1 = document.querySelector('.template1');
  template1.style.marginTop = `-${calcHeight}px`;
}


document.addEventListener('DOMContentLoaded', function () {
  template1ChangeMargin();
  gsapAnimation();
})
window.addEventListener('resize', function () {
  template1ChangeMargin();
})