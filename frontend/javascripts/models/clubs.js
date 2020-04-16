class Club {

    constructor(data) {
        this.id = data.id 
        this.clubType = data.club_type
        this.brand = data.brand
        this.model = data.model
        this.loft = data.loft
    }

    static renderClubForm(id) {
        mainContainer().innerHTML = DOM.renderNewClubForm(id)

    }

    static newClubFromForm() {
        const clubType = newClubForm().club_type.value
        const brand = newClubForm().brand.value
        const model = newClubForm().model.value
        const loft = newClubForm().loft.value
        const proId = newClubForm().pro_id.value
        
        let strongParams = {
            club_type: clubType,
            brand,
            model,
            loft,
            pro_id: proId
        }

        API.post('/clubs', strongParams)
        .then(function (response) {
            if (response.id === undefined) {
                
                DOM.errorHandlingNewClubForm(response)
              }
            else {
                Club.renderClubForm(newClubForm().pro_id.value)

            }
          })
          
    }

      static renderClubs(pro) {
        pro.clubs.forEach(club => {
            const ul = document.getElementById(`${pro.combineFirstLastNameForId()}`)  
            ul.innerHTML += DOM.renderClubsHTML(club)
         })
         
      }

  

}