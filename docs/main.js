function groupings(s, grN, grS){
    var students = s;
    var groupNumbers = grN;
    var groupSize = grS;
    
    if(groupNumbers * groupSize != students.length){
        alert("Group numbers and group size should be the factor of how many students you gave. So, the result will be an equal distribution");
      throw "Group numbers and group size should be the factor of how many students you gave. So, the result will be an equal distribution";
    }else{
      var groups = {}
    
    for(let i = 0; i < groupNumbers; i++){
      groups["gr" + (i + 1)] = [];
    }
    
    let currentIndex = students.length, randomIndex;
    
    while (currentIndex != 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [students[currentIndex], students[randomIndex]] = [
          students[randomIndex], students[currentIndex]];
      }
    
    
    for(let i = 0, w = 1; i < students.length; i++){
     
     groups["gr" + w].push(students[i]);
     if(groups["gr" + w].length == groupSize){
       w += 1 
     }
    }
    }
    let groupC = document.getElementById('grouped');
    let groupDOM = "";

     for(let i = 1; i < (Object.keys(groups).length + 1); i++){
        groupDOM += "<tr> <td> <b> Group " + i + "</b> </td>";
        
        for (let u = 0 ; u < groups["gr" + i].length ; u++) {
            groupDOM += "<td>" + groups["gr" + i][u] + "</td>";
        }
        groupDOM += "<tr>";
        
    }

    

    groupC.innerHTML = groupDOM;
    
    }

var gS;
var gN;
var names = [];

    function addToArray(){
        let n2a = document.getElementById('groupnames').value;
        if (!n2a == "") {
        var namesC = document.getElementById("namess");
        document.getElementById('groupnames').value = "";
        names.push(n2a);
        namesC.innerHTML += n2a + "<br>";
        
        }
    }
    function refreshValues(){
        gS = document.getElementById('gS').value;
        gN = document.getElementById('gN').value;
        

    }

