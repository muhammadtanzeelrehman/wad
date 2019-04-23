var database = {
    username:"tanzeel",
    password:"waja"
}
var newsFeed = [{
    friend:"Hassan",
    status:"Kahi Gum ho gya ha with Papa Ki pari"
},
    {
        friend:"Watto",
        status:"Felling Hot because it's Garmi Bro"
    }]
temp   =  prompt("Enter username");
temp2  =  prompt("Enter password");

if(temp === database.username && temp2 === database.password)
{
    console.log(newsFeed[0],newsFeed[1]);
}
else
{
    console.log("Wrong User Name and password");
}