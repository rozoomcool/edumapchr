let schools = `
<div class="region-button" onclick="sendRegionParam('GROZ')">Грозный</div>
                            <div class="region-button" onclick="sendRegionParam('ARGN')">Аргун</div>
                            <div class="region-button" onclick="sendRegionParam('GRZR')">Грозненский район</div>
                            <div class="region-button" onclick="sendRegionParam('URUS')">Урус-Мартановский район</div>
                            <div class="region-button" onclick="sendRegionParam('ACHM')">Ачхой-Мартановский район</div>
                            <div class="region-button" onclick="sendRegionParam('VEDN')">Веденский район</div>
                            <div class="region-button" onclick="sendRegionParam('GUMS')">Гудермесский район</div>
                            <div class="region-button" onclick="sendRegionParam('ITUM')">Итум-Калинский район</div>
                            <div class="region-button" onclick="sendRegionParam('KURC')">Курчалоевский район</div>
                            <div class="region-button" onclick="sendRegionParam('NTRK')">Надтеречный район</div>
                            <div class="region-button" onclick="sendRegionParam('NAUR')">Наурский район</div>
                            <div class="region-button" onclick="sendRegionParam('NOJU')">Ножай-Юртовский район</div>
                            <div class="region-button" onclick="sendRegionParam('SERN')">Серноводский район</div>
                            <div class="region-button" onclick="sendRegionParam('SHAL')">Шалинский район</div>
                            <div class="region-button" onclick="sendRegionParam('SHAR')">Шаройский район</div>
                            <div class="region-button" onclick="sendRegionParam('SHAT')">Шатойский район</div>
                            <div class="region-button" onclick="sendRegionParam('SHEL')">Шелковской район</div>
`
let others = `
    <div class="region-button" onclick="setChguContent()">Чеченский государственный университет</div>
`

let elList = document.querySelector('.elements-list')
let mapContainer = document.querySelector('.map-container')
let contentContainer = document.querySelector('.content-container')

elList.innerHTML = schools

function toggleList(el){
    let schoolsBtn = document.querySelector('.schools-btn')
    let otherBtn = document.querySelector('.other-btn')

    console.log(otherBtn.getAttribute('active'))

    if(el === schoolsBtn){
        schoolsBtn.removeAttribute('active')
        schoolsBtn.setAttribute('disabled', '')
        otherBtn.removeAttribute('disabled')
        otherBtn.setAttribute('active', '')

        elList.innerHTML = schools
        contentContainer.style.display = 'none'
        mapContainer.style.display = 'block'

    } else {
        schoolsBtn.removeAttribute('disabled')
        schoolsBtn.setAttribute('active', '')
        otherBtn.setAttribute('disabled', '')
        otherBtn.removeAttribute('active')

        elList.innerHTML = others

    }
}

function setChguContent () {
    mapContainer.style.display = 'none'
    contentContainer.style.display = 'block'
    console.log(contentContainer)
}