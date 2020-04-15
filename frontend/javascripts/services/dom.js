class DOM {

    static eListenerForNav() {
        getViewPros().addEventListener('click', function(event) {
            event.preventDefault()
            Pro.all = []
            Pro.load()
        } )
        getAddPro().addEventListener('click', function(event) {
            event.preventDefault()
            Pro.renderAddProForm()
        } )
    }
    
}