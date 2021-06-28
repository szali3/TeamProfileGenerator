const { join } = require('path');
const Manager = require('../lib/Manager');

fs = require('fs');

generateHTML = (answers) => {
col=answers.length;
row= 1; 

return  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <header class=".container">
        <h2>Teams</h2>
    </header>
    <main class=".container cardContainer">
    <div class="row rowCard m-3 justify-content-center" >   
        ${loopCard(answers,col,row)} 
    </div> 
    </main>
</body>
</html>`
}

loopCard = (answer,col,row) => {
    let loopStr = ''
    for (i=0;i<col;i++){
        loopStr += cardGenerate(answer[i])
    }
    return loopStr
}

cardGenerate = (answer) => {
    if (answer.getRole() === 'Manager') {
        ansRole = `Office Number: ${answer.officeNumber}`
        ansIcon = 'manage_accounts';
    } else if (answer.getRole() === 'Engineer'){
        ansRole = `GitHub: <a href="https://github.com/${answer.github}" target="_blank">${answer.github}</a>`
        ansIcon= 'code';
    } else if (answer.getRole() === 'Intern'){
        ansRole = `School: ${answer.school}`
        ansIcon = 'school';
    }

    return ` 
        <div class="card col-3 m-3 shadow mb-5 bg-white rounded">
            <div class="card-body cardTitle">  
                <p class="card-text">Name: ${answer.name}</p>
                <p class="card-text"><span class="material-icons icons">${ansIcon}</span>${answer.getRole()}</p>
            </div>
            <div class="card-body cardText">
                <p class="card-text bodyCardTxt">ID: ${answer.id}</p>
                <p class="card-text bodyCardTxt">Email: <a href="mailto:${answer.email}">${answer.email}</a></p>
                <p class="card-text bodyCardTxt">${ansRole}</p>
            </div>
        </div>`
}

module.exports = generateHTML;

