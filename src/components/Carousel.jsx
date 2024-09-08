import React from "react";

export const Carousel = () => {
  const options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "0px -40% 0px -40%",
    threshold: 0.3,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      //   console.log(entry.target.alt);

      entry.isIntersecting && entry.target.classList.add("active");
      !entry.isIntersecting && entry.target.classList.remove("active");
      //   !entry.isIntersecting && entry.target.classList.remove("zoom");

      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll("#scrollArea div");
  targets.forEach((element) => {
    observer.observe(element);
  });

  return (
    <section className="carousel">
      <article id="scrollArea">
        <div>
          <h3>
            Quintilianus Rosaire <br />
            <span>photography</span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1570158268183-d296b2892211?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
          />
        </div>
        <div>
          <h3>
            Quintilianus Rosaire
            <br />
            <span>art director</span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1440133197387-5a6020d5ace2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 2"
          />
        </div>
        <div>
          <h3>
            Elisaveta Gülistan
            <br />
            <span>producer</span>
          </h3>

          <img
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 3"
          />
        </div>
        <div>
          <h3>
            Mitrofan Venyamin
            <br />
            <span>musician</span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=2866&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 4"
          />
        </div>
        <div>
          <h3>
            Euandros Theofylaktos <br />
            <span>screen writer</span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1595347097560-69238724e7bd?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 5"
          />
        </div>
        <div>
          <h3>
            Lūcija Hailwic <br />
            <span>sound effects</span>
          </h3>
          <img
            src="https://images.unsplash.com/photo-1495924979005-79104481a52f?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 6"
          />
        </div>
      </article>
    </section>
  );
};
