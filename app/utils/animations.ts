// Enhanced animation utilities with more dramatic effects

// Adds and removes animation classes with proper timing
export const animateElement = (
  element: HTMLElement,
  animationClass: string,
  duration: number = 1000
): Promise<void> => {
  return new Promise((resolve) => {
    element.classList.add(animationClass);

    setTimeout(() => {
      element.classList.remove(animationClass);
      resolve();
    }, duration);
  });
};

// Staggers animations for multiple elements
export const staggerAnimations = async (
  elements: HTMLElement[],
  animationClass: string,
  staggerDelay: number = 200,
  duration: number = 1000
): Promise<void> => {
  for (let i = 0; i < elements.length; i++) {
    setTimeout(() => {
      animateElement(elements[i], animationClass, duration);
    }, i * staggerDelay);
  }

  // Return a promise that resolves when all animations are complete
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, elements.length * staggerDelay + duration);
  });
};

// Creates a more dramatic parallax effect based on mouse movement
export const setupParallax = (
  container: HTMLElement,
  elements: HTMLElement[],
  intensities: number[]
): (() => void) => {
  const handleMouseMove = (e: MouseEvent) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    // Convert to values between -1 and 1
    const normalizedX = (mouseX / width) * 2 - 1;
    const normalizedY = (mouseY / height) * 2 - 1;

    elements.forEach((element, index) => {
      // Increased intensity for more dramatic effect
      const intensity = intensities[index] || 1.5;
      const moveX = normalizedX * intensity * 30; // Increased from 20 to 30
      const moveY = normalizedY * intensity * 30; // Increased from 20 to 30

      // Add slight rotation for more dynamic effect
      const rotateZ = normalizedX * normalizedY * intensity * 3;

      element.style.transform = `translate(${moveX}px, ${moveY}px) rotateZ(${rotateZ}deg)`;

      // Add transition for smoother movement
      element.style.transition = "transform 0.1s ease-out";
    });
  };

  container.addEventListener("mousemove", handleMouseMove);

  // Return cleanup function
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
  };
};

// Creates a more dramatic floating animation effect
export const applyFloatingAnimation = (
  element: HTMLElement,
  minOffset: number = -10,
  maxOffset: number = 10,
  duration: number = 3000
): void => {
  // Increase the min and max offsets for more dramatic effect
  const enhancedMinOffset = minOffset * 2; // Double the negative offset
  const enhancedMaxOffset = maxOffset * 2; // Double the positive offset

  let start: number | null = null;
  let previousTimestamp: number | null = null;

  const animate = (timestamp: number) => {
    if (!start) start = timestamp;
    if (!previousTimestamp) previousTimestamp = timestamp;

    const elapsed = timestamp - start;
    const progress = elapsed / duration;

    // Enhanced floating with both vertical and horizontal movement
    const verticalOffset =
      enhancedMinOffset +
      ((Math.sin(progress * Math.PI * 2) + 1) / 2) *
        (enhancedMaxOffset - enhancedMinOffset);
    const horizontalOffset =
      Math.cos(progress * Math.PI * 1.5) * (enhancedMaxOffset / 3);

    // Add slight rotation for more organic movement
    const rotation = Math.sin(progress * Math.PI) * 2;

    element.style.transform = `translate(${horizontalOffset}px, ${verticalOffset}px) rotate(${rotation}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      // Reset and continue animation
      start = null;
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// New function: Create twinkling stars background
export const createTwinklingStars = (
  container: HTMLElement,
  starCount: number = 50
): void => {
  // Clear any existing stars
  const existingStars = container.querySelectorAll(".generated-star");
  existingStars.forEach((star) => star.remove());

  // Star types and animation durations
  const types = ["star-tiny", "star-small", "star-medium", "star-large"];
  const durations = ["4s", "6s", "8s", "7s", "5s", "9s"];

  // Create stars
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");

    // Random star properties
    const typeIndex = Math.floor(Math.random() * types.length);
    const durationIndex = Math.floor(Math.random() * durations.length);
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 5;

    // Set star styles
    star.className = `generated-star star ${types[typeIndex]}`;
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.animationDuration = durations[durationIndex];
    star.style.animationDelay = `${delay}s`;

    // Append to container
    container.appendChild(star);
  }
};

// New function: Create comet effect
export const createComet = (
  container: HTMLElement,
  interval: number = 8000
): (() => void) => {
  const createSingleComet = () => {
    const comet = document.createElement("div");
    comet.className = "comet";

    // Random position and angle
    const top = Math.random() * 70;
    const angle = -45 + Math.random() * 20;

    comet.style.top = `${top}%`;
    comet.style.transform = `rotate(${angle}deg)`;

    container.appendChild(comet);

    // Remove comet after animation completes
    setTimeout(() => {
      comet.remove();
    }, 15000);
  };

  // Create initial comet
  createSingleComet();

  // Create comets at intervals
  const intervalId = setInterval(createSingleComet, interval);

  // Return cleanup function
  return () => {
    clearInterval(intervalId);
    const comets = container.querySelectorAll(".comet");
    comets.forEach((comet) => comet.remove());
  };
};


