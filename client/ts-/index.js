// Functions
function goMain() {
    location.href = "http://tsitel.github.io/tsite.github.io/index.html";
}
function search() {
}
function goto_settings() {
    var set_url = 'http://tsitel.github.io/tsite.github.io/settings/index.html';
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
    //const id = Math.floor(Math.random() * 1000000000000);
    var url = "localhost:3100/rooms?rname=" + rnam.value + "id=";
    fetch(url);
    location.href = "http://tsitel.github.io/tsite.github.io/room_design/room.html?rname=" + rnam.value; //+ "&id=" + id;
}
function leave() {
    console.log("leaving")
}
function mute() {
}
function deafen() {
}
function invite() {
    var url = new URL(location.href);
    var id = url.searchParams.get("id");
    var rnam = url.searchParams.get("rname");
    location.href = "http://tsitel.github.io/tsite.github.io/room_design/room.html?rname&id=" + id;
}
function rsettings() {
}
