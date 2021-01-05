reStore()


$("#Removebutton1").click(function Clearcard1Fields() {

    document.getElementById("address1").textContent = "";
    document.getElementById("price1").textContent = "";
    document.getElementById("size1").textContent = "";
    document.getElementById("rooms1").textContent = "";
    document.getElementById("baths1").textContent = "";
    document.getElementById("propertyimage1").innerHTML = "";
    document.getElementById("mapContainer1").innerHTML = "";
    localStorage.setItem("mlsId1", "")

});


$("#Removebutton2").click(function Clearcard2Fields() {

    document.getElementById("address2").textContent = "";
    document.getElementById("price2").textContent = "";
    document.getElementById("size2").textContent = "";
    document.getElementById("rooms2").textContent = "";
    document.getElementById("baths2").textContent = "";
    document.getElementById("propertyimage2").innerHTML = "";
    document.getElementById("mapContainer2").innerHTML = "";
    localStorage.setItem("mlsId2", "")

});

//MaterialBoxed Zoom
$(document).ready(function () {
    $('.materialboxed').materialbox();
});

//Managed local storage with global variable c for card number populated by fillig c on api call
function putStore(getmlsid, c) {

    let mlsRef = getmlsid.mlsid

    if (c === 1) { localStorage.setItem("mlsId" + c, mlsRef) }

    else if (c === 2) { localStorage.setItem("mlsId" + c, mlsRef) }

}

// Is exeuted at reload to pull last queried properties (live) - checking to make sure value exists to restore
function reStore() {

    for (c = 1; c < 3; c++) {

        // error handling
        let mlsRef = localStorage.getItem("mlsId" + c)
        let mlsRef2 = localStorage.getItem("mlsId" + (c + 1))

        // if both are empty exists function = nothing to load
        if (mlsRef === "" && mlsRef2 === "") { return }

        // patch to handle first empty window it adds storage value
        if (mlsRef === "" && mlsRef2 !== "") {
            localStorage.setItem("mlsId1", mlsRef2)
            localStorage.setItem("mlsId2", "")
            mlsRef = mlsRef2
        }

        // reg loop
        if (mlsRef !== "") {
            let getmlsid = { "mlsid": mlsRef }
            apiCall(getmlsid)

        }
    }
}