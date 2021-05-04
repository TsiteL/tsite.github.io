// Inports

// Variables
var light_mode = false;
// Functions
function goMain() {
    location.href = "http://tsitel.github.io/index.html";
}
function search() {

}
function goto_settings() {
    var set_url = 'http://tsitel.github.io/settings/index.html';
    window.open(set_url, '_blank');
}
function openNewRoomDialog() {
    document.getElementById("modal").style.display = "block";
}
function openNewRoomCancel() {
    document.getElementById("modal").style.display = "none";
}
function makeNewRoom() {
    const rnam = document.getElementById("rnam") as HTMLInputElement;
    const rdsc = document.getElementById("rdsc") as HTMLInputElement;
    if(rnam.value.trim() == "" || rnam.value.length > 20 || rnam.value.length < 3) {
        rnam.className += " error"
        return;
    }
    if(rdsc.value == "" || rdsc.value.length > 250) {
        rdsc.className += " error"
        return;
    }
    location.href = "http://tsitel.github.io/room_design/room.html?id=12345&rname=" + rnam.value;

}

