var user = ["admin","Sarayu","Musicpage"];
var pass = ["admin@123","Sarayu@2004","Music@123"];
function checkLogin()
{
    var username = document.getElementById("s").value;
    var password = document.getElementById("ps").value;
    var flag = 0;
    for(let i=0;i < user.length; i++)
    {
        if(user[i]===username && pass[i]===password)
        {
            flag=1;
            break;
        }
    }
    if(flag==1)
    {
        window.open("./home.html");
    }
    else{
        document.getElementById("res").textContent = "Invalid Username / Password. Please Try again"
    }
}
function checkSignUp()
{
    var username = document.getElementById("us").value;
    var apassword = document.getElementById("ps").value;
    var cpassword = document.getElementById("cs").value;

    if (username === "" || apassword === "" || cpassword === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if(apassword == cpassword)
    {
        window.open("./login.html");
    }
    else{
        alert("Password does not match. Please try again..");
    }
}