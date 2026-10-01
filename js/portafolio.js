// Manejo de Interacciones del Portafolio

document.addEventListener('DOMContentLoaded', () => {
    // 1. Alternador de Modo Oscuro (Dark / Light Theme)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;

    // Verificar preferencia guardada
    if (localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        htmlElement.classList.remove('dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // 2. Menú Móvil Colapsable
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú móvil al dar clic en un enlace
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // 3. Filtrado Dinámico de Proyectos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar botón activo
            filterButtons.forEach(b => {
                b.classList.remove('bg-primary', 'text-white');
                b.classList.add('bg-gray-200', 'dark:bg-gray-800');
            });
            btn.classList.add('bg-primary', 'text-white');
            btn.classList.remove('bg-gray-200', 'dark:bg-gray-800');

            const filter = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filter === 'todos' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 4. Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulación de envío exitoso
        formFeedback.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
        formFeedback.className = 'mt-4 p-4 rounded-lg text-center font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 block';
        
        contactForm.reset();

        setTimeout(() => {
            formFeedback.classList.add('hidden');
        }, 5000);
    });
});