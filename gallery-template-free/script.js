const images = [
    {
        src: "images/gallery-1.jpg",
        alt: "Mountain landscape at night"
    },
    {
        src: "images/gallery-2.jpg",
        alt: "Mountain range at sunset"
    },
    {
        src: "images/gallery-3.jpg",
        alt: "Peaceful mountain landscape"
    },
    {
        src: "images/gallery-4.jpg",
        alt: "Mountain meadow"
    },
    {
        src: "images/gallery-5.jpg",
        alt: "Majestic mountain peak"
    },
    {
        src: "images/gallery-6.jpg",
        alt: "Bright mountain range"
    },
    {
        src: "images/gallery-7.jpg",
        alt: "Mountain summit"
    },
    {
        src: "images/gallery-8.jpg",
        alt: "Mountain lake"
    }

];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

function renderGallery() {
    gallery.innerHTML = images.map((image, index) => `
    <article class="gallery-card">
      <button
        class="gallery-trigger"
        type="button"
        data-index="${index}"
        aria-label="Open image ${index + 1}"
      >
        <img src="${image.src}" alt="${image.alt}">
      </button>
    </article>
  `).join("");
}

function openLightbox(index) {
    const image = images[index];
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.showModal();
}

function closeModal() {
    lightbox.close();
}

gallery.addEventListener("click", (event) => {
    const trigger = event.target.closest(".gallery-trigger");
    if (!trigger) return;

    const index = Number(trigger.dataset.index);
    openLightbox(index);
});

closeLightbox.addEventListener("click", closeModal);

lightbox.addEventListener("click", (event) => {
    const rect = lightbox.getBoundingClientRect();
    const clickedInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!clickedInside) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;

    if (event.key === "Escape") {
        closeModal();
    }
});

renderGallery();