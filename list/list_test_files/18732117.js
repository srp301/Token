document.write ('<a href="http://www.51.la/?18732117" target="_blank" title="51.La &#x7F51;&#x7AD9;&#x6D41;&#x91CF;&#x7EDF;&#x8BA1;&#x7CFB;&#x7EDF;">&#x7F51;&#x7AD9;&#x7EDF;&#x8BA1;</a>\n');
var a2117tf="51la";
var a2117pu="";
var a2117pf="51la";
var a2117su=window.location;
var a2117sf=document.referrer;
var a2117of="";
var a2117op="";
var a2117ops=1;
var a2117ot=1;
var a2117d=new Date();
var a2117color="";
if (navigator.appName=="Netscape"){
    a2117color=screen.pixelDepth;
} else {
    a2117color=screen.colorDepth;
}
try{
    a2117tf=top.document.referrer;
}catch(e){}
try{
    a2117pu =window.parent.location;
}catch(e){}
try{
    a2117pf=window.parent.document.referrer;
}catch(e){}
try{
    a2117ops=document.cookie.match(new RegExp("(^| )a2117_pages=([^;]*)(;|$)"));
    a2117ops=(a2117ops==null)?1: (parseInt(unescape((a2117ops)[2]))+1);
    var a2117oe =new Date();a2117oe.setTime(a2117oe.getTime()+60*60*1000);
    document.cookie="a2117_pages="+a2117ops+ ";path=/;expires="+a2117oe.toGMTString();
    a2117ot=document.cookie.match(new RegExp("(^| )a2117_times=([^;]*)(;|$)"));
    if(a2117ot==null){
        a2117ot=1;
    }else{
        a2117ot=parseInt(unescape((a2117ot)[2]));
        a2117ot=(a2117ops==1)?(a2117ot+1):(a2117ot);
    }
    a2117oe.setTime(a2117oe.getTime()+365*24*60*60*1000);
    document.cookie="a2117_times="+a2117ot+";path=/;expires="+a2117oe.toGMTString();
}catch(e){}
try{
    if(document.cookie==""){a2117ops=-1;a2117ot=-1;}
}catch(e){}
a2117of=a2117sf;
if(a2117pf!=="51la"){a2117of=a2117pf;}if(a2117tf!=="51la"){a2117of=a2117tf;}a2117op=a2117pu;try{lainframe}catch(e){a2117op=a2117su;}
a2117src='http://web.51.la:82/go.asp?svid=21&id=18732117&tpages='+a2117ops+'&ttimes='+a2117ot+'&tzone='+(0-a2117d.getTimezoneOffset()/60)+'&tcolor='+a2117color+'&sSize='+screen.width+','+screen.height+'&referrer='+escape(a2117of)+'&vpage='+escape(a2117op)+'&vvtime='+a2117d.getTime();
setTimeout('a2117img = new Image;a2117img.src=a2117src;',0);