function addbox() {
    let box = document.createElement("input");
    document.getElementById("boxes").appendChild(box)


}
addbox();
// function on button reset 
function check() {
    let vai = document.getElementById("reset");
    if (vai !== "") {
        confirm("Do you want reset form");
        return false;

    }
    else {
        return true;
    }
}