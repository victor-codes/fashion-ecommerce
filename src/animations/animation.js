import { Draggable } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(Draggable);

export function heroAnim(class1, class2, class3) {
  const tl = gsap.timeline({ delay: 0.8 });
  tl.from(class1, {
    y: "200%",
    duration: 0.8,
    ease: "power2.out",
  })
    .from(
      class2,
      {
        y: "130%",
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4"
    )
    .from(
      class3,
      {
        y: "100%",
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6"
    );
}

export function ctaBtn(class1, class2) {
  const tl = gsap.timeline({ delay: 1.2 });
  gsap.set(class2, {
    scale: 0,
    opacity: 0,
  });
  tl.from(class1, {
    y: 50,
    ease: "power1.out",
    duration: 0.5,
  }).to(class2, {
    transformOrigin: "50% 50%",
    scale: 1,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });
}

export function vidBtnAnim(class1, class2, class3) {
  const tl = gsap.timeline({ delay: 2 });
  tl.from(class1, {
    transformOrigin: "50% 50%",
    scale: 0,
    duration: 1,
    ease: "power2.out",
  })
    .from(
      class2,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .from(
      class3,
      {
        y: 40,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.8"
    );
}

export function navAnim(class1) {
  const tl = gsap.timeline({ delay: 3 });
  tl.from(class1, { y: -100, opacity: 0, stagger: 0.25 });
}

export function cardAnim(class1) {
  const tl = gsap.timeline();

  tl.from(class1, {
    position: "fixed",
    transform: "rotate(0deg)",
    width: "110vw",
    transformOrigin: "50%",
    height: "110vh",
    backgroundRepeat: "no-repeat",
    duration: 0.6,
    delay: 1.8,
    ease: "power2",
  });
  return tl;
}

export function onDragDrop(class1) {
  const tl = gsap.timeline();
  tl.to(class1, {
    duration: 0.5,
    opacity: 0,
    rotation: -15,
    y: "-100%",
    x: "-200%",
    ease: "power2.in",
  });

  return tl;
}

export function drag(class1) {
  const stack = document.querySelector(class1);

  const background = ["#e4a502", "#F95F2F", "#C081CD"];
  [...stack.children].forEach((i) => {
    stack.append(i);
  });

  function swap(e) {
    let card = document.querySelector(".card__container").lastChild;
    const target = e.target;
    const key = Number(target.getAttribute("data-key") || 1);
    if (target !== card) {
      return;
    } else {
      Draggable.create(target, {
        type: "x",
        dragResistance: 0.7,
        minimumMovement: 10,
        bounds: { minX: 0, maxX: 0 },
        zIndexBoost: false,
        onDragEnd() {
          let drop = onDragDrop(target);
          drop.play();
          drop.then(() => {
            document.body.style.background = background[key];
            drop.reverse();
            stack.prepend(target);
          });
        },
      });
    }
  }
  stack.addEventListener("click", swap);
}
