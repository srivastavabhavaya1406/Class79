students = [];
function submit() {
    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
    var name5=document.getElementById("student5").value;
    var name6=document.getElementById("student6").value;
    var name7=document.getElementById("student7").value;
    var name8=document.getElementById("student8").value;
    var name9=document.getElementById("student9").value;
    var name10=document.getElementById("student10").value;

students.push(name1);
students.push(name2);
students.push(name3);
students.push(name4);
students.push(name5);
students.push(name6);
students.push(name7);
students.push(name8);
students.push(name9);
students.push(name10);

document.getElementById("displayname").innerHTML=students;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sorting() {
    students.sort();
    document.getElementById("displayname").innerHTML=students;
    
}