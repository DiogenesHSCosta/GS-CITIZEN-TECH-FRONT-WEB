const checkbox = document.querySelectorAll('#quadras input[type="radio"]');
const container = document.querySelector('.agrupamento-lateral');
const quadras = document.querySelectorAll('.quadras');

checkbox.forEach(radio => {
    radio.addEventListener('change', (e) => {
        const filtro = e.target.id;
        if (filtro === 'todas') {
            quadras.forEach(card => card.style.display = '');
            container.style.width = '';
            container.classList.add('animar');
        }
        else{
            container.classList.remove('animar');
            container.style.width = '100%';
        }
        quadras.forEach(card =>{
            const falso =  card.classList.contains('copia');
            const modalidade = card.dataset.modalidade;
            if (!falso && modalidade === filtro) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
        })
    })
});