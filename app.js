const BUTTON = document.querySelector('.like__button')

const LIKE = () => {
  BUTTON.setAttribute('aria-pressed', BUTTON.matches('[aria-pressed=false]') ? true : false)
}

BUTTON.addEventListener('click', LIKE)
/* email*/
const FORM = document.querySelector('.form__email')
FORM.addEventListener('submit', event => event.preventDefault())


