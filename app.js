const BUTTON = document.querySelector('button')

const LIKE = () => {
  BUTTON.setAttribute('aria-pressed', BUTTON.matches('[aria-pressed=false]') ? true : false)
}

BUTTON.addEventListener('click', LIKE)