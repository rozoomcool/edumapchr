function sendRegionParam(region){
       let http = new XMLHttpRequest();
    http.open('GET', `/?region=${region}`, true)
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            let educations = JSON.parse(this.responseText)
            addMarkers(educations)
        }
    }
    http.send();
}

function findEduInRegion(param){
    sendRegionParam(param)
}


