// Inports
// Variables
var light_mode = false;
// Functions
function goMain() {
    location.href = "file:///C:/Users/user/Desktop/Html/Tsite/index.html";
}
function search() {
}
function goto_settings() {
    var set_url = 'file:///C:/Users/user/Desktop/Html/Tsite/settings/index.html';
    window.open(set_url, '_blank');
}
function openNewRoomDialog() {
    document.getElementById("modal").style.display = "block";
}
function openNewRoomCancel() {
    document.getElementById("modal").style.display = "none";
}
function makeNewRoom() {
    var rnam = document.getElementById("rnam");
    var rdsc = document.getElementById("rdsc");
    if (rnam.value.trim() == "" || rnam.value.length > 20 || rnam.value.length < 3) {
        rnam.className += " error";
        return;
    }
    if (rdsc.value == "" || rdsc.value.length > 250) {
        rdsc.className += " error";
        return;
    }
    location.href = "file:///C:/Users/user/Desktop/Html/Tsite/room_design/room.html?id=12345&rname=" + rnam.value;
}
