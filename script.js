document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Lógica para a galeria slide (lightbox) nas páginas de detalhes do projeto
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentIndex = 0; // Índice da imagem atualmente visível no lightbox

    // Verifica se estamos em uma página de projeto (onde há gallery-images)
    if (galleryImages.length > 0) {
        function openLightbox(index) {
            currentIndex = index;
            lightbox.style.display = 'block';
            lightboxImg.src = galleryImages[currentIndex].src;
            // Opcional: Adicionar classe para desativar scroll do body
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
            // Opcional: Remover classe para reativar scroll do body
            document.body.style.overflow = '';
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        }

        // Adiciona event listeners para cada imagem da galeria
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => openLightbox(index));
        });

        // Adiciona event listeners para os controles do lightbox
        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevArrow) prevArrow.addEventListener('click', showPrevImage);
        if (nextArrow) nextArrow.addEventListener('click', showNextImage);

        // Fechar lightbox ao clicar fora da imagem
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }

        // Navegação por teclado (ESC, setas)
        document.addEventListener('keydown', (e) => {
            if (lightbox && lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    showNextImage();
                } else if (e.key === 'ArrowLeft') {
                    showPrevImage();
                }
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Lógica para o menu hambúrguer
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('active');
        });
    }

    // Lógica para a galeria slide (lightbox) nas páginas de detalhes do projeto
    const galleryImages = document.querySelectorAll('.gallery-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');

    let currentIndex = 0; // Índice da imagem atualmente visível no lightbox

    // Verifica se estamos em uma página de projeto (onde há gallery-images)
    if (galleryImages.length > 0) {
        function openLightbox(index) {
            currentIndex = index;
            lightbox.style.display = 'block';
            lightboxImg.src = galleryImages[currentIndex].src;
            // Opcional: Adicionar classe para desativar scroll do body
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.style.display = 'none';
            // Opcional: Remover classe para reativar scroll do body
            document.body.style.overflow = '';
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            lightboxImg.src = galleryImages[currentIndex].src;
        }

        // Adiciona event listeners para cada imagem da galeria
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => openLightbox(index));
        });

        // Adiciona event listeners para os controles do lightbox
        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        if (prevArrow) prevArrow.addEventListener('click', showPrevImage);
        if (nextArrow) nextArrow.addEventListener('click', showNextImage);

        // Fechar lightbox ao clicar fora da imagem
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    closeLightbox();
                }
            });
        }

        // Navegação por teclado (ESC, setas)
        document.addEventListener('keydown', (e) => {
            if (lightbox && lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowRight') {
                    showNextImage();
                } else if (e.key === 'ArrowLeft') {
                    showPrevImage();
                }
            }
        });
    }
});