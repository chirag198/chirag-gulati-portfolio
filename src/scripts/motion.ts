// Homepage motion: smooth scrolling, scroll-driven reveals, the experience
// "coaster" and the pinned horizontal builds ride. Nothing here runs when the
// visitor prefers reduced motion, and every initial state is set from JS, so
// the page is fully readable without it.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel));
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

if (!reduceMotion) {
  const lenis = setupSmoothScroll();
  setupProgress();
  setupHero();
  setupReveals();
  setupCountUp();
  setupMarquee(lenis);
  setupOffscreenPause();
  setupCoaster();
  setupRide();
  setupZoom();
  if (finePointer) {
    setupHeroCursor();
    setupTilt();
    setupMagnetic();
  }
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function setupSmoothScroll() {
  document.documentElement.classList.remove("scroll-smooth");
  ScrollTrigger.config({ ignoreMobileResize: true });
  const lenis = new Lenis({ lerp: 0.14, wheelMultiplier: 1.05 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Same-page anchor links ride the smooth scroll instead of jumping.
  document.addEventListener("click", (event) => {
    const link = (event.target as Element).closest?.("a[href]") as HTMLAnchorElement | null;
    if (!link) return;
    const url = new URL(link.href, location.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.querySelector<HTMLElement>(url.hash);
    if (!target) return;
    event.preventDefault();
    lenis.scrollTo(target, { offset: -64, duration: 1.6 });
    history.pushState(null, "", url.hash);
  });
  return lenis;
}

function setupProgress() {
  gsap.to("[data-progress]", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
  });
}

function setupHero() {
  const name = $("[data-hero-name]");
  name?.classList.add("is-animating");
  gsap
    .timeline({ defaults: { ease: "power3.out" }, onComplete: () => name?.classList.remove("is-animating") })
    .from(".hero__char", {
      yPercent: 120,
      rotate: 14,
      opacity: 0,
      duration: 0.9,
      stagger: 0.035,
      ease: "back.out(2.2)",
      clearProps: "transform,opacity",
    })
    .from("[data-hero-fade]", { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.15)
    .from(
      "[data-hero-term]",
      {
        y: 90,
        rotationX: 24,
        rotationY: -14,
        scale: 0.9,
        opacity: 0,
        transformPerspective: 1200,
        duration: 1.4,
        ease: "expo.out",
      },
      0.3,
    );

  // Leaving the hero: copy sinks and fades, the terminal lifts away.
  gsap
    .timeline({ scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: true } })
    .to("[data-hero-copy]", { y: 140, opacity: 0.15, ease: "none" }, 0)
    .to("[data-hero-term]", { y: -70, scale: 0.92, ease: "none" }, 0);
}

function setupReveals() {
  $$(".section-header").forEach((header) => {
    gsap.fromTo(
      header.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: header, start: "top 85%" },
      },
    );
  });

  $$("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  $$("[data-stagger]").forEach((group) => {
    gsap.from(group.children, {
      y: 90,
      opacity: 0,
      scale: 0.94,
      rotationX: 12,
      transformPerspective: 900,
      duration: 1.1,
      stagger: 0.09,
      ease: "power3.out",
      scrollTrigger: { trigger: group, start: "top 85%" },
    });
  });

  $$(".stack").forEach((stack) => {
    gsap.from($$("[data-pop]", stack), {
      scale: 0.4,
      opacity: 0,
      duration: 0.55,
      ease: "back.out(3)",
      stagger: { each: 0.012, from: "random" },
      scrollTrigger: { trigger: stack, start: "top 78%" },
    });
  });
}

function setupCountUp() {
  $$("[data-count]").forEach((el) => {
    const end = Number(el.dataset.count);
    if (!end) return;
    const counter = { value: 0 };
    el.textContent = "0";
    gsap.to(counter, {
      value: end,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%", once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(counter.value));
      },
    });
  });
}

// Scroll speed pushes the marquee faster; it eases back when scrolling stops.
function setupMarquee(lenis: Lenis) {
  const track = $("[data-marquee-track]");
  if (!track) return;
  const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 40, repeat: -1 });
  let speed = 1;
  gsap.ticker.add(() => {
    if (loop.paused()) return;
    const target = 1 + Math.min(Math.abs(lenis.velocity || 0) * 0.25, 8);
    speed += (target - speed) * 0.08;
    if (Math.abs(target - speed) > 0.01) loop.timeScale(speed);
  });
  ScrollTrigger.create({
    trigger: track,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => (self.isActive ? loop.play() : loop.pause()),
  });
}

// Decorative CSS loops (aurora, glows) stop painting while off screen.
function setupOffscreenPause() {
  $$("[data-pause-offscreen]").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => el.classList.toggle("is-paused", !self.isActive),
    });
  });
}

function setupHeroCursor() {
  const hero = $("#home");
  const glow = $("[data-hero-cursor]");
  if (!hero || !glow) return;
  const toX = gsap.quickTo(glow, "x", { duration: 0.8, ease: "power3" });
  const toY = gsap.quickTo(glow, "y", { duration: 0.8, ease: "power3" });
  hero.addEventListener("pointermove", (event) => {
    const box = glow.parentElement!.getBoundingClientRect();
    toX(event.clientX - box.left);
    toY(event.clientY - box.top);
  });
}

// A track down the experience timeline, with one loop-the-loop, that a cart
// rides as the visitor scrolls. Each role's station lights up as it passes.
function setupCoaster() {
  const wrap = $("[data-coaster]");
  if (!wrap) return;
  const svg = $<SVGSVGElement>("svg", wrap)!;
  const rail = $<SVGPathElement>(".coaster__rail", svg)!;
  const ties = $<SVGPathElement>(".coaster__ties", svg)!;
  const drawn = $<SVGPathElement>(".coaster__drawn", svg)!;
  const glowing = $$<SVGPathElement>("[data-coaster-drawn]", svg);
  const cart = $<SVGGElement>(".coaster__cart", svg)!;
  const nodes = $$("[data-coaster-node]", wrap);
  const ride = { progress: 0 };
  const lit = nodes.map(() => false);
  let length = 0;
  let stations: number[] = [];

  // Layout position relative to the wrapper, ignoring reveal transforms.
  const offsetIn = (el: HTMLElement) => {
    let x = el.offsetWidth / 2;
    let y = el.offsetHeight / 2;
    let node: HTMLElement | null = el;
    while (node && node !== wrap) {
      x += node.offsetLeft;
      y += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }
    return { x, y };
  };

  const build = () => {
    if (!nodes.length || getComputedStyle(svg).display === "none") return;
    const width = wrap.offsetWidth;
    const height = wrap.offsetHeight;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const points = nodes.map(offsetIn);
    stations = points.map((p) => p.y);
    const x = points[0].x;
    const amp = 24;
    const r = 17;
    let d = `M ${x} ${Math.max(0, points[0].y - 40)} L ${x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i].y;
      const b = points[i + 1].y;
      const h = b - a;
      const s = i % 2 ? -1 : 1;
      if (i === 1) {
        const m = a + h / 2;
        d += ` C ${x + s * amp} ${a + h * 0.18}, ${x - s * amp} ${m - h * 0.18}, ${x} ${m}`;
        d += ` A ${r} ${r} 0 0 0 ${x + 2 * r} ${m} A ${r} ${r} 0 0 0 ${x} ${m}`;
        d += ` C ${x - s * amp} ${m + h * 0.18}, ${x + s * amp} ${b - h * 0.18}, ${x} ${b}`;
      } else {
        d += ` C ${x + s * amp} ${a + h * 0.33}, ${x - s * amp} ${a + h * 0.66}, ${x} ${b}`;
      }
    }
    d += ` L ${x} ${height}`;
    [rail, ties, ...glowing].forEach((path) => path.setAttribute("d", d));
    length = drawn.getTotalLength();
    glowing.forEach((path) => (path.style.strokeDasharray = `${length}`));
    render();
  };

  const render = () => {
    if (!length) return;
    const at = length * ride.progress;
    glowing.forEach((path) => (path.style.strokeDashoffset = `${length - at}`));
    const p = drawn.getPointAtLength(at);
    const q = drawn.getPointAtLength(Math.min(length, at + 1));
    const angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
    cart.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
    cart.style.opacity = ride.progress > 0.002 && ride.progress < 0.998 ? "1" : "0";
    nodes.forEach((n, i) => {
      const on = at > 0 && p.y >= stations[i] - 4;
      if (on !== lit[i]) {
        lit[i] = on;
        n.classList.toggle("is-active", on);
      }
    });
  };

  build();
  ScrollTrigger.addEventListener("refresh", build);
  gsap.to(ride, {
    progress: 1,
    ease: "none",
    scrollTrigger: { trigger: wrap, start: "top 65%", end: "bottom 60%", scrub: 0.3 },
    onUpdate: render,
  });
}

// Desktop: pin the builds section and slide its cards sideways.
function setupRide() {
  const section = $("[data-ride]");
  const track = $("[data-ride-track]");
  if (!section || !track) return;
  const count = $("[data-ride-count]");
  const bar = $("[data-ride-bar]");
  const cards = Array.from(track.children) as HTMLElement[];

  gsap.matchMedia().add("(min-width: 900px)", () => {
    const distance = () => Math.max(0, track.scrollWidth - (window.innerWidth - track.getBoundingClientRect().left));
    const slide = gsap.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.35,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (bar) gsap.set(bar, { scaleX: self.progress });
          if (count) count.textContent = String(Math.round(self.progress * (cards.length - 1)) + 1).padStart(2, "0");
        },
      },
    });

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { rotationY: -22, scale: 0.88, opacity: 0.35, transformPerspective: 1000 },
        {
          rotationY: 0,
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            containerAnimation: slide,
            start: "left 98%",
            end: "left 60%",
            scrub: true,
          },
        },
      );
    });
  });
}

function setupZoom() {
  $$("[data-zoom]").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.86, rotationX: 14, opacity: 0.3, transformPerspective: 1000 },
      {
        scale: 1,
        rotationX: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 95%", end: "top 50%", scrub: true },
      },
    );
  });
}

// Cards and the terminal lean toward the cursor; cards also get a spotlight.
function setupTilt() {
  $$("[data-tilt]").forEach((el) => {
    const tilts = !el.classList.contains("card--ride");
    const max = el.classList.contains("term") ? 7 : 5;
    const rotX = gsap.quickTo(el, "rotationX", { duration: 0.6, ease: "power3" });
    const rotY = gsap.quickTo(el, "rotationY", { duration: 0.6, ease: "power3" });
    if (tilts) gsap.set(el, { transformPerspective: 900 });

    el.addEventListener("pointermove", (event) => {
      const box = el.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width;
      const py = (event.clientY - box.top) / box.height;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
      if (tilts) {
        rotY((px - 0.5) * 2 * max);
        rotX(-(py - 0.5) * 2 * max);
      }
    });
    el.addEventListener("pointerleave", () => {
      if (tilts) {
        rotX(0);
        rotY(0);
      }
    });
  });
}

function setupMagnetic() {
  $$(".btn, .cta__email").forEach((el) => {
    const toX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
    const toY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });
    el.addEventListener("pointermove", (event) => {
      const box = el.getBoundingClientRect();
      toX((event.clientX - box.left - box.width / 2) * 0.25);
      toY((event.clientY - box.top - box.height / 2) * 0.35);
    });
    el.addEventListener("pointerleave", () => {
      toX(0);
      toY(0);
    });
  });
}
