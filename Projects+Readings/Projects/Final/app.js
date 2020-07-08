TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const tl = new TimelineMax({ delay: 0.5 });
    tl.fromTo(title, 0.5, { y: "0", opacity: 0 }, { y: "-70", opacity: 1 });
    if (destination.index === 0) {
      const description = document.querySelector(".description");
      tl.fromTo(
          description,
          0.5,
          { opacity: 0, y: "50" },
          { y: "-50", opacity: 1 }
        );
    }
    if (destination.index === 1) {
      const chairs = document.querySelectorAll(".chair");
      const description1 = document.querySelector(".description1");
      tl.fromTo(chairs, 0.7, { x: "200%" }, { x: "40%" })
        .fromTo(
          description1,
          0.5,
          { opacity: 0, y: "50" },
          { y: "0", opacity: 1 }
        );}
    else if (destination.index === 2) {
          const controller = document.querySelectorAll(".controller");
          const description2 = document.querySelector(".description2");
          tl.fromTo(controller, 0.7, { x: "200%" }, { x: "30%" })
            .fromTo(
              description2,
              0.5,
              { opacity: 0, y: "50" },
              { y: "0", opacity: 1 }
            );
    }
  }
});
