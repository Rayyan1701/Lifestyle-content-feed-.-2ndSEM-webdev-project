const page = document.body

const navbar = document.getElementsByTagName("nav")[0]

const changeThemeDropdownLink = document.getElementsByClassName('themeChangeDropdown')[0]
const lightModeLink = document.getElementsByClassName('lightMode')[0]
const darkModeLink = document.getElementsByClassName('darkMode')[0]

const tables = document.getElementsByTagName('table')
const resTable = document.getElementById('resulttable')
const infoTable = document.getElementsByClassName('infoTable')
const main = document.getElementById('mainHead')

function lightMode()
{
    page.style.backgroundColor = "white"
    page.style.color = "black"
    changeThemeDropdownLink.style.color = 'black'
    main.style.color = 'black'

    navbar.classList.add("navbar-light")
    navbar.classList.add("bg-light")
    navbar.classList.remove("navbar-dark")
    navbar.classList.remove("bg-dark")

    lightModeLink.style.outline = "-webkit-focus-ring-color auto 1px"
    darkModeLink.style.outline = "none"

    resTable.style.borderColor = "black"
    resTable.style.color = "black"

    for(var i = 0; i < infoTable.length; i++)
    {
        infoTable[i].style.borderColor = "black"
    }
}
function darkMode()
{
    page.style.backgroundColor = "#212529"
    page.style.color = "lightgrey"
    changeThemeDropdownLink.style.color = 'white'
    main.style.color = 'white'

    navbar.classList.remove("navbar-light")
    navbar.classList.remove("bg-light")
    navbar.classList.add("navbar-dark")
    navbar.classList.add("bg-dark")

    lightModeLink.style.outline = "none"
    darkModeLink.style.outline = "-webkit-focus-ring-color auto 1px"

    resTable.style.color = "lightgrey"

    for(var i = 0; i < infoTable.length; i++)
    {
        infoTable[i].style.borderColor = "lightgrey"
    }
}
