document.addEventListener('DOMContentLoaded', function () {
    DOM.eListenerForNav()
  })

  const getViewPros = () => document.getElementById('view-pros-button')
  const mainContainer = () => document.getElementById('main')
  const proListDiv = () => document.getElementById('pro-list')
  const getAddPro = () => document.getElementById('add-pro-button')
  const newProForm = () => document.getElementById('new-pro-form')
  const addClubButton = (id) => document.getElementById(id)
  const newClubForm = () => document.getElementById('new-club-form')
  const newProErrorField = () => document.getElementById("new-pro-errors")
  const newClubErrorField = () => document.getElementById("new-club-errors")




