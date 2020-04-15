class Club {

    constructor(data) {
        this.id = data.id 
        this.clubType = data.club_type
        this.brand = data.brand
        this.model = data.model
        this.loft = data.loft
    }

    static renderClubForm(id) {
        mainContainer().innerHTML = `
        <h3>Add a new club</h3>
        <form id="new-club-form">
        <input type="hidden" name="pro_id" id="pro_id" value=${id}>
        <div>
            <label for="club_type">Club Type:</label>
            <input type="text" name="club_type" id="club_type">
        </div>
        <br>
        <div>
            <label for="brand">Club Brand:</label>
            <input type="text" name="brand" id="brand">
        </div>
        <br>
        <div>
            <label for="model">Club Model:</label>
            <input type="text" name="model" id="model">
        </div>
        <br>
        <div>
            <label for="loft">Club Loft:</label>
            <input type="text" name="loft" id="loft">
        </div>
        <br>
        <div>
        <input type="submit" value="submit" id="login" onClick="Club.newClubFromForm(); return false;">
        </div>
    </form>
        `
        getViewPros().addEventListener('click', function(event) {
            event.preventDefault()
            Pro.renderPros()
        } )
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
        this.renderClubForm(proId)
          
    }

}