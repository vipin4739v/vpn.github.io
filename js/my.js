
var head = document.getElementById("mainheading");
var header = document.getElementById("header");
var navicon = document.getElementById("closenav");
var wrap = document.getElementById("wrap1");



var arr = ["Developer" , "Designer"];

var idx = 0;
var i = 0;

var b="";
var a ;
var flag = 0;

function toggle()
{
    if(flag == 1)
    {
      a = arr[0];
      flag = 0;
    }
    else
    {
        a = arr[0];
        flag = 1;
    }

}
function typer()
{
    
    b = b + a.charAt(i);
    head.innerHTML=b;
     
    i++;

}

setInterval(toggle,2000);
setInterval(typer,100);


//-----------------------------------------------this is for open navbar mobile----------------------------------------------------------------------

var tog = 1;
function open1()
{
    // window.alert(mli);

    
    
    if(tog == 1)
    {
        header.style.display="block";
        header.style.position="absolute";
        header.style.zIndex="1";
        header.style.width="300px";
        wrap.style.position="fixed";
        wrap.style.zIndex="1";
        
        
        // mli.style.width="300px";
        // header.style.position="sticky";
        
        header.style.marginLeft="0px";
        tog = 0;
    }
    else
    {
        // header.style.display="none";
        header.style.marginLeft="-300px";

        tog = 1;

    }
}

// ---------------------------------this function for closing nav window on click anywhere-----------------------


function close1()
{
    var a1 = window.screen;
    // console.log(a1.width);

        
    if(a1.width <= 610)
    {
        header.style.marginLeft="-300px";
        tog = 1;

    }


}