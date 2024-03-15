import * as el from "./elements.js"

export function selectPage(event) {
    event = event || window.event

    el.pagesLinks.forEach(link => {
        link.classList.remove('selected')
    });
    
    event.target.classList.add('selected')
}

export function changeBackground(event){
    event = event || window.event

    el.body.classList = ''

    switch (event.target.text) {
        case 'Home':
            el.body.classList.add('bg-home')
            break;
        case 'O Universo':
            el.body.classList.add('bg-universe')
            break;
        case 'Exploração':
            el.body.classList.add('bg-exploration')
            break;
        default:
            el.body.classList.add('bg-home')
            break;
    }

    
}