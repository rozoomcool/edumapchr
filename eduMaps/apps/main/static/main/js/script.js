let map = L.map('map',{
    minZoom: 7
}).setView([43.2700, 45.6930], 8.75)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map)

let southWest = L.latLng(41.03025390529182,41.7412567878706),
northEast = L.latLng(45.67654332720984,48.7725067878706)
let bounds = L.latLngBounds(southWest, northEast)

map.setMaxBounds(bounds)

let customIcon = L.icon({
   iconUrl: 'static/main/img/marker.svg',
   shadowUrl: 'static/main/img/marker_shadow.png',
   iconSize: [50, 50],
   shadowSize: [23, 23],
   shadowAnchor: [0, 5],
})
let markerOptions = {
   title: "Школа",
   clickable: true,
   draggable: false,
   icon: customIcon
}

let markerGroup = L.layerGroup()

markerGroup.addTo(map)

function clearMarkers() {
    markerGroup.clearLayers()
}

function addMarkers(educations){
    clearMarkers()

    for(let i = 0; i < educations.length; i++){

    //    try{
        let x = educations.at(i).fields.location.split(' ')[0]
        let y = educations.at(i).fields.location.split(' ')[1]

        new L.Marker([parseFloat(x), parseFloat(y)], markerOptions)
            .bindPopup(L.popup({maxWidth: 500})
                .setContent(
                    setMarkerContent(educations[i])
                )).addTo(markerGroup)

        // } catch (e) {

        // }
    }
    if(markerGroup.getLayers().length > 0)
        map.fitBounds(L.latLngBounds(markerGroup.getLayers().map((marker) => marker.getLatLng())), {padding:[100,100]})
}

const setMarkerContent = (edu) => {

    let directorName = ''
    if(edu.fields.director_name !== null){
        directorName = `<p><b>Директор: </b>${edu.fields.director_name}</p>`
    }

    let address = ''
    if(edu.fields.address !== null){
        address = `<p><b>Адресс: </b>${edu.fields.address}</p>`
    }

    let contacts = ''
    if (edu.fields.contacts !== null){
        contacts = `<p><b>Контакты: </b>${edu.fields.contacts}</p>`
    }

    let email = ''
    if (edu.fields.email !== null){
        email = `<p><b>Электронная почта: </b>${edu.fields.email}</p>`
    }

    let webSiteUrl = ''
    if (edu.fields.web_site_url != null){
        webSiteUrl = `<hr><p><b>Адрес сайта: </b><a href="${edu.fields.web_site_url}">${edu.fields.title}</a></p>`
    }

    let desc = edu.fields.description

    if(desc.length > 150){
        desc = `
        <div class="desc-text" onclick="toggleDesc(this)">
        <p class="full" style="display: none;">${desc} <span style="color: #2196f3">Скрыть</p>
        <p class="short ml-2" style="display: block;">${desc.substring(0, 150).trim()}... <span style="color: #2196f3">Показать полностью</span></p>
        </div>
        `
    }

    // let more = document.getElementById('more')

    // more.addEventListener('onclick', (e) => {
    //     desc = edu.fields.description + ' <span id="more" style="color: #2196f3">Показать полностью</span>'
    // })
    let imageOneUrl = edu.fields.image_one ? `<div><img width="150px" height="100px" src="media/${edu.fields.image_one}"></div>` : ''
    let imageTwoUrl = edu.fields.image_two ?`<div><img width="150px" height="100px" src="media/${edu.fields.image_two}"></div>` : ''
    let imageThreeUrl = edu.fields.image_three ? `<div><img width="150px" height="100px" src="media/${edu.fields.image_three}"></div>` : ''
    console.log()

    let content = `
        <div class="popup-content" style="display: flex;">
            <div class="popup-images-container" style="flex: auto; margin: 5px;align-self: center;">
                ${imageOneUrl}
                ${imageTwoUrl}
                ${imageThreeUrl}
            </div>
            <div style="width:10px;align-self: stretch;background-color: #2196f3;"></div>
            <div class="text-left" style="flex: auto; margin: 10px;">
                <h3>${edu.fields.title}</h3>
                ${desc}
                ${directorName}
                ${address}
                ${contacts}
                ${email}
                ${webSiteUrl}
            </div>
        </div>
    `

    return content
}