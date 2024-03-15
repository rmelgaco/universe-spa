import * as actions from './actions.js'
export class Router {
    routes = {}
    
    add(routeName, page){
        this.routes[routeName] = page
    }
    
    route(event){
        event = event || window.event
        event.preventDefault()
        
        window.history.pushState({}, "", event.currentTarget.href)

        console.log(event.currentTarget.href);
        
        this.handle()
        actions.selectPage()
        actions.changeBackground()
    }

    handle(){
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }
}