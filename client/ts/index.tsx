// Functions
function goMain() {
    location.href = "http://tsitel.github.io/tsite.github.io/client/index.html";
}
function search() {

}
function goto_settings() {
    var set_url = 'http://tsitel.github.io/tsite.github.io/client/settings/index.html';
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
    //const id = Math.floor(Math.random() * 1000000000000);
    const url = "localhost:3100/rooms?rname=" + rnam.value + "id="
    fetch(url);
    location.href = "http://tsitel.github.io/tsite.github.io/client/room_design/room.html?rname=" + rnam.value //+ "&id=" + id;
}
function leave() {
    // test
}
function mute() {

}
function deafen() {

}
function invite() {
    const url = new URL (location.href);
    const id = url.searchParams.get("id");
    const rnam = url.searchParams.get("rname");
    location.href = "http://tsitel.github.io/tsite.github.io/client/room_design/invite.html?rname&id=" + id;
}
function rsettings() {

}
