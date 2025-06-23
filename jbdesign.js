var flag=1;
function jbplay1()
{
    var aud = document.getElementById("jay1");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else{
        aud.pause();
        flag=1;
    }
}
function jbplay2()
{
    var aud = document.getElementById("jay2");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else{
        aud.pause();
        flag=1;
    }
}
function jbplay3()
{
    var aud = document.getElementById("jay3");
    if(flag==1)
    {
        aud.play();
        flag=0;
    }
    else{
        aud.pause();
        flag=1;
    }
}