var j = 3,
    score, totalCredit = 0,
    totalEarnCredit = 0,
    totalScore = 0,
    cgpa = 0;
const addFunction = () => {

    let table = document.getElementById("textbox");
    let rowlen = table.rows.length;
    let crowlen = rowlen;
    var row = table.insertRow(rowlen);
    console.log(crowlen);
    console.log(rowlen);
    console.log(row);
    row.id = rowlen;

    let id = ['courseTitleId', 'creditId', 'earnCreditId', 'gradeId'];
    for (i = 0; i < 4; i++) {
        var x = row.insertCell(i)
        if (i === 3) {
            x.innerHTML = "<input type='text' class='score' id='" + id[i] + j + "' value ='A' onchange = 'cgpaCalculation()' onclick = 'this.select()' readonly>"
        } else if (i === 2) {
            x.innerHTML = "<input type='number' class='earnCredit' id='" + id[i] + j + "' step='.25' value='3.75' onchange = 'cgpaCalculation()' onclick = 'this.select()' >"
        } else if (i === 1) {
            x.innerHTML = "<input type='number' class='credit' id='" + id[i] + j + "' step='.5' value ='3.00' onchange = 'cgpaCalculation()' onclick = 'this.select()' >"
        } else {
            x.innerHTML = "<input type='text' class='courseTitle' id='" + id[i] + j + "' value ='CSE:1101' onclick = 'this.select()' >"
        }
    }
    j++;
}

const removeCell = (rowlen) => {
    let table = document.getElementById(rowlen).remove();
}


const cgpaCalculation = () => {
    let table = document.getElementById("textbox");
    let rowlen = table.rows.length;
    console.log(rowlen);

    for (i = 2; i < rowlen; i++) {
        let creditId = document.getElementById("creditId" + i);
        console.log(creditId);
        let earnCreditId = document.getElementById("earnCreditId" + i);
        console.log(earnCreditId);
        creditId = parseFloat(creditId.value);
        console.log(creditId);

        earnCreditId = parseFloat(earnCreditId.value);
        console.log(earnCreditId);


        if (creditId !== '' && creditId >= 0 && creditId < 5 && earnCreditId !== '' && earnCreditId >= 0 && earnCreditId < 5) {
            score = creditId * earnCreditId;
            console.log(score);
            if (earnCreditId >= 2 && earnCreditId != 'NaN') {
                totalEarnCredit = totalEarnCredit + creditId;
                totalScore = totalScore + score;
                
            }
            
            totalCredit = totalCredit + creditId;
            console.log(totalCredit);
            
            cgpa = totalScore / totalEarnCredit;

console.log(earnCreditId);
            if (earnCreditId >= 4) {
                document.getElementById("gradeId" + i).value = 'A+';

            } else if (earnCreditId < 4 && earnCreditId >= 3.75) {
                document.getElementById("gradeId" + i).value = 'A';

            } else if (earnCreditId < 3.75 && earnCreditId >= 3.50) {

                document.getElementById("gradeId" + i).value = 'A-';
            } else if (earnCreditId < 3.50 && earnCreditId >= 3.25) {

                document.getElementById("gradeId" + i).value = 'B+';
            } else if (earnCreditId < 3.25 && earnCreditId >= 3) {

                document.getElementById("gradeId" + i).value = 'B';
            } else if (earnCreditId < 3 && earnCreditId >= 2.75) {

                document.getElementById("gradeId" + i).value = 'B-';
            } else if (earnCreditId < 2.75 && earnCreditId >= 2.50) {

                document.getElementById("gradeId" + i).value = 'C+';
            } else if (earnCreditId < 2.50 && earnCreditId >= 2.25) {

                document.getElementById("gradeId" + i).value = 'C';
            } else if (earnCreditId < 2.25 && earnCreditId >= 2) {

                document.getElementById("gradeId" + i).value = 'D';
            } else if (earnCreditId < 2) {

                document.getElementById("gradeId" + i).value = 'F';
            }


        }




    }
    console.log(score);
    console.log(totalCredit);
    console.log(totalScore);
    console.log(cgpa);
    document.getElementById('totalCreditId').value = totalCredit.toFixed(2);
    document.getElementById('totalEarnCreditId').value = totalEarnCredit.toFixed(2);
    document.getElementById('totalScoreId').value = totalScore.toFixed(2);
    
    if (totalScore == 0)
        document.getElementById('cgpaId').value = '0.00';
    else
        document.getElementById('cgpaId').value = cgpa.toFixed(2);
    totalCredit = 0;
    totalEarnCredit = 0;
    totalScore = 0;
}

const cgpaCalculationPdfDownload = () => {
    
    var univasityName = document.getElementById('univasityNameId').value;
    var studentName = document.getElementById('studentNameId').value;
    var department = document.getElementById('departmentId').value;
    var rollNo = document.getElementById('rollNoId').value;
    var session = document.getElementById('sessionId').value;
    var semester = document.getElementById('semesterId').value;

    const doc = new jsPDF({
        size: 'a4'
    });

    let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    let widthCenter = pageWidth / 2;
    let heightCenter = (pageWidth * 3) / 4;
    let distance = 10
    let margin = 20

    //color
    console.log(pageWidth);
    console.log(pageHeight);
    console.log(doc);

    //add logo for watermark
    //let imageData = 'D:/Web Design/React js/cgpaCalculator/img/justLogo.png'
    //doc.addImage(imageData, 'png', 15, 15, 60, 30);
    //doc.addImage("D:/Web Design/React js/cgpaCalculator/img/sabbir.jpg", "JPEG", 15, 40, 180, 180);



    doc.setFontSize(22).setFontType('times new roman').setTextColor('#FE0000').text(widthCenter, distance * 2, univasityName, "center");
    doc.setFontSize(16).setTextColor('#000').text(widthCenter, distance * 3, 'Department: ' + department, "center");
    doc.setFontSize(16).text(widthCenter, distance * 4, 'Semester: ' + semester, "center");
    doc.setFontSize(16).text(widthCenter, distance * 5, 'Name: ' + studentName.toUpperCase(), "center");
    doc.setFontSize(16).text(widthCenter, distance * 6, 'Session: ' + session, "center");

    doc.setFontSize(16).text(widthCenter, distance * 7, 'Roll: ' + rollNo, "center");


    let table = document.getElementById("textbox");
    let rowlen = table.rows.length;
    console.log(rowlen);

    // result headers title
    var columValue1 = 45;
    var columValue2 = 90;
    var columValue3 = 130;
    var columValue4 = 170;
    var horizontalValueDistance = 77;
    var horizontalValueDistanceHeader = 87;

    doc.text(columValue1, horizontalValueDistanceHeader, 'Course Code', 'center');
    doc.text(columValue2, horizontalValueDistanceHeader, 'Credit', 'center');
    doc.text(columValue3, horizontalValueDistanceHeader, 'Earn Point', 'center');
    doc.text(columValue4, horizontalValueDistanceHeader, 'Grade', 'center');

    for (var i = 2; i < rowlen; i++) {
        var lineWidthHorizontal = ((i - 1) * 10) + 80;
        var lineWidthHorizontal1 = 80;
        if (i === rowlen - 1) {
            doc.line(20, lineWidthHorizontal1, 190, lineWidthHorizontal1);
            doc.line(20, lineWidthHorizontal + 10, 190, lineWidthHorizontal + 10);
        }

        doc.line(20, lineWidthHorizontal, 190, lineWidthHorizontal);

        let courseTitleId = document.getElementById("courseTitleId" + i);
        console.log(courseTitleId);
        let creditId = document.getElementById("creditId" + i);
        console.log(creditId);
        let earnCreditId = document.getElementById("earnCreditId" + i);
        console.log(earnCreditId);
        let gradeId = document.getElementById("gradeId" + i);
        


        courseTitleId = courseTitleId.value;
        creditId = parseFloat(creditId.value);
        console.log(creditId);

        earnCreditId = parseFloat(earnCreditId.value);
        console.log(earnCreditId);
        
        gradeId = gradeId.value;
        console.log(gradeId);


        doc.text(columValue1, horizontalValueDistance + i * 10, courseTitleId, 'center');
        doc.text(columValue2, horizontalValueDistance + i * 10, creditId.toFixed(2), 'center');
        doc.text(columValue3, horizontalValueDistance + i * 10, earnCreditId.toFixed(2), 'center');
        doc.text(columValue4, horizontalValueDistance + i * 10, gradeId, 'center');
    }

    var columLine1 = 20;
    var columLine2 = 70;
    var columLine3 = 110;
    var columLine4 = 150;
    var columLine5 = 190;
    var lineStart = 80;
    console.log(i);
    var lineWidthVertical = ((i - 1) * 10) + lineStart;
    doc.line(columLine1, lineStart, columLine1, lineWidthVertical);
    doc.line(columLine2, lineStart, columLine2, lineWidthVertical);
    doc.line(columLine3, lineStart, columLine3, lineWidthVertical);
    doc.line(columLine4, lineStart, columLine4, lineWidthVertical);
    doc.line(columLine5, lineStart, columLine5, lineWidthVertical);


    let totalCreditId = document.getElementById('totalCreditId');
    totalCreditId = parseFloat(totalCreditId.value);

    let totalEarnCreditId = document.getElementById('totalEarnCreditId');
    totalEarnCreditId = parseFloat(totalEarnCreditId.value);

    let totalScoreId = document.getElementById('totalScoreId');
    totalScoreId = parseFloat(totalScoreId.value);

    let cgpaId = document.getElementById('cgpaId');
    cgpaId = parseFloat(cgpaId.value);

    doc.setFontSize(16).text(margin, lineWidthVertical + 20, 'Total Credit:        ' + totalCreditId.toFixed(2));
    doc.setFontSize(16).text(margin, lineWidthVertical + 30, 'Total Earn Credit: ' + totalEarnCreditId.toFixed(2));
    doc.setFontSize(16).text(margin, lineWidthVertical + 40, 'Total Earn Score: ' + totalScoreId.toFixed(2));
    doc.setFontSize(16).text(margin, lineWidthVertical + 50, 'CGPA:                 ' + cgpaId.toFixed(2));
    doc.save(rollNo + 'result');
}
