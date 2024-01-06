const btnOpenModal = document.querySelector('.openModalBtn')
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.add('open')

    if(modal.classList.contains('open')) {
        modal.addEventListener('click', () => {
            modal.classList.remove('open')
        })
    }
}

btnOpenModal.addEventListener('click', openModal)