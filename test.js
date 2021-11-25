function see(){
    var k=0
    for (var i=0;i<30;i++)
    { if(document.test.elements[i].checked)
    { k=k+Number(document.test.elements[i].value) } }
    if(k<=5) document.test.rez.value="результат No1 "
    if (k>5&&k<=12) document.test.rez.value="результат No2" 
    if (k>12) document.test.rez.value="результат No3"
}
