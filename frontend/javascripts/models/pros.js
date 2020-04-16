class Pro {

    static all = [];

    constructor(data) {
        this.id = data.id 
        this.firstName = data.first_name 
        this.lastName = data.last_name
        this.homeTown = data.hometown
        this.homeState = data.home_state
        this.age = data.age
        this.clubs = data.clubs 
        this.save()
    }

    save() {
        Pro.all.push(this);
      }

      static load() {
    
        API.get("/pros")
          .then(function (data) { 
            data.forEach(element => {
                element = new Pro(element)
            });
            Pro.renderPros()
          })
          .catch(errors => console.log(errors));
      }

      static renderPros() {
          mainContainer().innerHTML = ``
          Pro.all.forEach(pro => {
            mainContainer().innerHTML += DOM.renderProsHTML(pro)
            
            Club.renderClubs(pro)
            
          })

      }

      static renderAddProForm() {
          mainContainer().innerHTML = DOM.newProFormHTML() 
          
          newProForm().addEventListener('submit', function(event) {
            event.preventDefault()
            Pro.newFromForm()
        } )
      }

      static newFromForm() {
          const firstName = newProForm().first_name.value
          const lastName = newProForm().last_name.value
          const homeTown = newProForm().hometown.value
          const homeState = newProForm().home_state.value
          const age = newProForm().age.value 

          let strongParams = {
              first_name: firstName,
              last_name: lastName,
              hometown: homeTown,
              home_state: homeState,
              age
          }
          
          API.post('/pros', strongParams)
          .then(function (response) {
            if (response.id === undefined) {

                DOM.errorHandlingNewProForm(response)
              }
            else {
                Pro.renderAddProForm()

            }
          })
            
      }

      combineFirstLastName() {
          return(this.firstName + " " + this.lastName)
      }

      combineFirstLastNameForId() {
        return(this.firstName + "-" + this.lastName)
      }

}