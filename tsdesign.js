var flag=1;
function tsplay1()
{
    var aud = document.getElementById("tsp1");
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
function tsplay2()
{
    var aud = document.getElementById("tsp2");
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
function tsplay3()
{
    var aud = document.getElementById("tsp3");
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