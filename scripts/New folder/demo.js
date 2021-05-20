// Don't forget, that there are CORS-Restrictions. So if you want to run it without a Server in your Browser you need to transform the image to a dataURL
// Use http://dataurl.net/#dataurlmaker
var doc = new jsPDF();

doc.setFontSize(40);
doc.text("Octonyan loves jsPDF", 35, 25);
doc.addImage("examples/images/Octonyan.jpg", "JPEG", 15, 40, 180, 180);

let point;

if (marks >= 4) {
    document.getElementById("gradeId" + i).value = 'A';

} 


else if (marks < 4 && marks >= 3.75) {
document.getElementById("gradeId" + i).value = 'A';
    
}

else if (marks < 3.75 && marks >= 3.50) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 3.50 && marks >= 3.25) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 3.25 && marks >= 3) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 3 && marks >= 2.75) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 2.75 && marks >= 2.50) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 2.50 && marks >= 2.25) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 2.25 && marks >= 2) {

    document.getElementById("gradeId" + i).value = 'A';
}

else if (marks < 2 ) {

    document.getElementById("gradeId" + i).value = 'A';
}




