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
            mainContainer().innerHTML += `
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
            
            pro.renderClubs()
            
          })
        //   getAddPro().addEventListener('click', function(event) {
        //     event.preventDefault()
        //     Pro.renderAddProForm()
        // } )

      }

      renderClubs() {
        this.clubs.forEach(club => {
            const ul = document.getElementById(`${this.combineFirstLastNameForId()}`)  
            ul.innerHTML +=    
            `
            <li>Club Type: ${club.club_type}</li>
            <li>Club Brand: ${club.brand}</li>
            <li>Club Model: ${club.model}</li>
            <li>Club Loft: ${club.loft}</li>
            <br>
            `
         })
         
      }

      static renderAddProForm() {
          mainContainer().innerHTML = `
          <h3>Add a Pro</h3>
          <form id="new-pro-form">
          <div>
              <label for="first_name">First Name:</label>
              <input type="text" name="first_name" id="first_name">
          </div>
          <br>
          <div>
              <label for="last_name">Last Name:</label>
              <input type="text" name="last_name" id="last_name">
          </div>
          <br>
          <div>
              <label for="hometown">Hometown:</label>
              <input type="text" name="hometown" id="hometown">
          </div>
          <br>
          <div>
              <label for="home_state">Home State:</label>
              <input type="text" name="home_state" id="home_state">
          </div>
          <br>
          <div>
              <label for="age">Age:</label>
              <input type="text" name="age" id="age">
          </div>
          <br>
          <div>
          <input type="submit" value="submit" id="login" onClick="Pro.newFromForm()">
          </div>
          </form>
          `
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
          Pro.renderAddProForm()
            
      }

      combineFirstLastName() {
          return(this.firstName + " " + this.lastName)
      }

      combineFirstLastNameForId() {
        return(this.firstName + "-" + this.lastName)
      }

}