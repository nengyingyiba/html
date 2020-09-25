document.write('hello');
document.getElementById('p1').style.color='blue'
var money;
money=5000;
if(money>20000)
document.write('白领');
else
document.write('蓝领');

function add(a,b){
    var sum=a+b;
    alert(sum);
}
add(3,2);

// 确认
var message=confirm("cpdd");
if(message==true)
document.write('dd')
else 
document.write('get out')

// 提问
var message=prompt('cpdd');
if(message!=null)
document.write(message);

// var s=window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');
// s.close();

function openwindow(){
    var a=confirm('是否打开新的页面');
    if(a==true){
        var c =window.open('http://www.imooc.com/','_blank','height=500px,height=400px,menubar=no,toolbar=no');
    }
}

var fix=document.getElementById('p2');
fix.style.color='red';
fix.style.background='blue';
fix.style.fontSize='25px';
fix.style.display='block';
