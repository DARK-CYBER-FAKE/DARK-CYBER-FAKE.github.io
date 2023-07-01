var counter = 20;
function countDown() {
    if(counter>=0) {
        document.getElementById("timer").innerHTML = counter;
    }
    else {
        download();
        return;
    }
    counter -= 1;

    var counter2 = setTimeout("countDown()",1000);
    return;
}
function download() {
    document.getElementById("link").innerHTML = "⇊ Klik Tombol Di Bawah ⇊<br><a href='login.php'>Lanjut</a>";
}