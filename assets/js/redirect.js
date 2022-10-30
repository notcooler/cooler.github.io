const discord = "https://discord.gg/JKKdjN8VEY";
const youtube = "https://www.youtube.com/channel/UCRabaDtEYQH0f8l1UlRJyQg";
const twitter = "https://twitter.com/BusyCooler";
const github = "https://github.com/notcooler";
const email = "";

const questionString = new URLSearchParams(window.location.search);
const redirectValue = questionString.get('rd');

function redirect(url){
    window.location.assign(url);
}
function autoRedirect(){
    console.log(redirectValue);
    if(redirectValue === "discord"){
        redirect(discord);
    }
    else if(redirectValue === "youtube"){
        redirect(youtube);
    }
    else if(redirectValue === "twitter"){
        redirect(twitter);
    }
    else if(redirectValue === "github"){
        redirect(github);
    }
    else{
        alert("invalid query string");
        window.close()
    }
}

if(redirectValue != null){
    autoRedirect();
}
else{
    alert("invalid query string");
    window.close()
}
