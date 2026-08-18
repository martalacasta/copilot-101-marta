(() => {
  "use strict";

  const slides = Array.from(document.querySelectorAll(".slide"));
  const previousButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");
  const notesButton = document.getElementById("notes-toggle");
  const currentSlideLabel = document.getElementById("current-slide");
  const progressBar = document.getElementById("progress-bar");
  const dotsContainer = document.getElementById("slide-dots");
  const announcer = document.getElementById("live-announcer");
  let currentIndex = 0;

  const clampIndex = (index) => Math.max(0, Math.min(index, slides.length - 1));

  const indexFromHash = () => {
    const match = window.location.hash.match(/^#slide-(\d+)$/);
    return match ? clampIndex(Number(match[1]) - 1) : 0;
  };

  const updateHash = (index, replace = false) => {
    const hash = `#slide-${index + 1}`;
    if (window.location.hash === hash) return;

    if (replace) {
      window.history.replaceState(null, "", hash);
    } else {
      window.history.pushState(null, "", hash);
    }
  };

  const announceSlide = (slide, index) => {
    const title = slide.dataset.title || `Slide ${index + 1}`;
    const duration = slide.dataset.duration || "";
    announcer.textContent = `Slide ${index + 1} of ${slides.length}: ${title}. ${duration}.`;
  };

  const showSlide = (requestedIndex, options = {}) => {
    const nextIndex = clampIndex(requestedIndex);
    const previousIndex = currentIndex;

    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === nextIndex);
      slide.classList.toggle("was-active", index < nextIndex);
      slide.setAttribute("aria-hidden", String(index !== nextIndex));
    });

    currentIndex = nextIndex;
    currentSlideLabel.textContent = String(nextIndex + 1);
    progressBar.style.width = `${((nextIndex + 1) / slides.length) * 100}%`;
    previousButton.disabled = nextIndex === 0;
    nextButton.disabled = nextIndex === slides.length - 1;

    Array.from(dotsContainer.children).forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === nextIndex));
      dot.tabIndex = index === nextIndex ? 0 : -1;
    });

    if (!options.fromHash) {
      updateHash(nextIndex, options.replaceHash);
    }

    if (!options.silent && previousIndex !== nextIndex) {
      announceSlide(slides[nextIndex], nextIndex);
    }

    if (options.focus) {
      slides[nextIndex].focus({ preventScroll: true });
    }
  };

  const toggleNotes = () => {
    const isVisible = document.body.classList.toggle("notes-visible");
    notesButton.setAttribute("aria-pressed", String(isVisible));
    notesButton.setAttribute("aria-label", isVisible ? "Hide speaker notes" : "Show speaker notes");
    announcer.textContent = `Speaker notes ${isVisible ? "shown" : "hidden"}.`;
  };

  const isTypingTarget = (target) => {
    const tagName = target.tagName?.toLowerCase();
    return target.isContentEditable || tagName === "input" || tagName === "textarea" || tagName === "select";
  };

  slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "slide-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}: ${slide.dataset.title}`);
    dot.addEventListener("click", () => showSlide(index, { focus: true }));
    dotsContainer.appendChild(dot);
  });

  previousButton.addEventListener("click", () => showSlide(currentIndex - 1, { focus: true }));
  nextButton.addEventListener("click", () => showSlide(currentIndex + 1, { focus: true }));
  notesButton.addEventListener("click", toggleNotes);

  document.addEventListener("keydown", (event) => {
    if (isTypingTarget(event.target)) return;

    const actions = {
      ArrowRight: () => showSlide(currentIndex + 1, { focus: true }),
      PageDown: () => showSlide(currentIndex + 1, { focus: true }),
      ArrowLeft: () => showSlide(currentIndex - 1, { focus: true }),
      PageUp: () => showSlide(currentIndex - 1, { focus: true }),
      Home: () => showSlide(0, { focus: true }),
      End: () => showSlide(slides.length - 1, { focus: true }),
      " ": () => showSlide(currentIndex + (event.shiftKey ? -1 : 1), { focus: true }),
      n: toggleNotes,
      N: toggleNotes,
    };

    const action = actions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  });

  window.addEventListener("hashchange", () => {
    showSlide(indexFromHash(), { fromHash: true, focus: true });
  });

  showSlide(indexFromHash(), { fromHash: true, replaceHash: true, silent: true });
})();
