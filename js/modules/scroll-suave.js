export default function initScrollSuave(){
    const menu = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    if(menu){
        function scrollToSection(e){
            e.preventDefault();
            const href = this.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        menu.forEach((link) => {
            link.addEventListener('click',scrollToSection);
        });
    }
}

