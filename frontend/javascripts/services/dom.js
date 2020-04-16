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

    static errorHandlingNewProForm(response) {
        newProErrorField().innerHTML = ``
        if(response.first_name != undefined){
            newProErrorField().innerHTML += `<li> First Name: ${response.first_name}</li>`
        }

        if(response.last_name != undefined){
            newProErrorField().innerHTML += `<li> Last Name: ${response.last_name}</li>`
        }
        
        if(response.hometown != undefined){
            newProErrorField().innerHTML += `<li> Hometown: ${response.hometown}</li>`
        }

        if(response.home_state != undefined){
            newProErrorField().innerHTML += `<li> Home State: ${response.home_state}</li>`
        }

        if(response.age != undefined){
            newProErrorField().innerHTML += `<li> Age: ${response.age}</li>`
        }
        
    }

    static errorHandlingNewClubForm(response) {
        newClubErrorField().innerHTML = ``
        if(response.club_type != undefined){
            newClubErrorField().innerHTML += `<li> Club Type: ${response.club_type}</li>`
        }

        if(response.brand != undefined){
            newClubErrorField().innerHTML += `<li> Brand: ${response.brand}</li>`
        }
        
        if(response.model != undefined){
            newClubErrorField().innerHTML += `<li> Model: ${response.model}</li>`
        }

        if(response.loft != undefined){
            newClubErrorField().innerHTML += `<li> Loft: ${response.loft}</li>`
        }
        
    }

    static newProFormHTML() {
        return (

            `
            <h3>Add a Pro</h3>
            <form id="new-pro-form">
            <div>
            <label for="first_name">First Name:</label>
            <input required type="text" name="first_name" id="first_name">
            </div>
            <br>
            <div>
            <label for="last_name">Last Name:</label>
            <input required type="text" name="last_name" id="last_name">
            </div>
            <br>
            <div>
            <label for="hometown">Hometown:</label>
            <input required type="text" name="hometown" id="hometown">
            </div>
            <br>
            <div>
            <label for="home_state">Home State:</label>
            <input required type="text" name="home_state" id="home_state">
            </div>
            <br>
            <div>
            <label for="age">Age:</label>
            <input required type="text" name="age" id="age">
            </div>
            <br>
            <div>
            <input type="submit" value="submit" id="login" >
            </div>
            </form>
            <br>
            <ul id="new-pro-errors">
            </ul>
            `
            )

    }

    static renderNewClubForm(id) {
        return (
            `
        <h3>Add a new club</h3>
        <form id="new-club-form">
        <input type="hidden" name="pro_id" id="pro_id" value=${id}>
        <div>
            <label for="club_type">Club Type:</label>
            <input required type="text" name="club_type" id="club_type">
        </div>
        <br>
        <div>
            <label for="brand">Club Brand:</label>
            <input required type="text" name="brand" id="brand">
        </div>
        <br>
        <div>
            <label for="model">Club Model:</label>
            <input required type="text" name="model" id="model">
        </div>
        <br>
        <div>
            <label for="loft">Club Loft:</label>
            <input required type="text" name="loft" id="loft">
        </div>
        <br>
        <div>
        <input type="submit" value="submit" id="login" onClick="Club.newClubFromForm(); return false;">
        </div>
    </form>
        <ul id="new-club-errors">
        </ul>
        `
        )
        
    }

    static renderProsHTML(pro){
        return (
            `
            <div id="pro-club-list">
            
            <ul id=${pro.combineFirstLastNameForId()}>
            <h3>${pro.combineFirstLastName()}</h3>
            <li>Hometown: ${pro.homeTown}</li>
            <li>Home State: ${pro.homeState}</li>
            <li>Age: ${pro.age}</li>
            <h4>Clubs</h4>
            <a id ="add-club-button" href="#" onClick="Club.renderClubForm(${pro.id}); return false;">Add a Club</a>
            <br>
            </ul>
            </div>
            `
            )
    }

    static renderClubsHTML(club) {
        return (
            `
            <li>Club Type: ${club.club_type}</li>
            <li>Club Brand: ${club.brand}</li>
            <li>Club Model: ${club.model}</li>
            <li>Club Loft: ${club.loft}</li>
            <br>
            `
        )
    }
    
}