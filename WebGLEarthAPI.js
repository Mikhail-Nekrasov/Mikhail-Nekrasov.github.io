var earth;
var result = "";

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);
  
    WE.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Â© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHaaga() {
    earth.setView([60.201702584772704,24.934343647420686]);
    earth.setZoom(17);
    document.getElementById("result").innerHTML = "Haaga-Helia University of Applied Sciences, Pasila campus. <br> Address: Ratapihantie 13, 00520 Helsinki"
}

function goOodi() {
    earth.setView([60.173657577064134,24.938366787461497]);
    earth.setZoom(17);
    document.getElementById("result").innerHTML = "Helsinki Central Library Oodi. <br> Address: Töölönlahdenkatu 4, 00100 Helsinki"
}
