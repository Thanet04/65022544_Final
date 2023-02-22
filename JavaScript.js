function addData() {
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var gender = document.getElementById("dob").value;
    var birthdate = document.getElementById("date").value;
    var cells = [name, surname, gender, birthdate];
    for (var i = 0; i < cells.length; i++) {
        if (!cells[i]) {
            alert("ข้อมูลไม่ครบ");
            return;
        }
        var cell = newRow.insertCell(i);
        cell.appendChild(document.createTextNode(cells[i]));
    }
}
