export default function initAnimaScroll(){

    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if(sections){
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const window65 = window.innerHeight * 0.65;
                const isVisible = (sectionTop - window65) < 0
                if(isVisible){
                    section.classList.add('ativo')
                }else{
                    section.classList.remove('ativo');
                }
            });
            
        }

        animaScroll();
        window.addEventListener('scroll',animaScroll);
    }
}
