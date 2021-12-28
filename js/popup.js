function getUrlPath(href) {
    const url = new URL(href);
    return url.pathname.slice(1);
}

function getUsername(href) {
    return getUrlPath(href).split('/')[0];
}

document.addEventListener('DOMContentLoaded', function () {
    browser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        let tab = tabs[0];
        href = tab.url;
        $.ajax({
            url: "https://api.github.com/users/" + getUsername(href),
            dataType: "json",
            success: function (data) {
                document.getElementById("avatar").src = data.avatar_url;
                document.getElementById("name").innerHTML = "Name: " + data.name;
                document.getElementById("login").innerHTML = "Username: " + data.login;
                document.getElementById("id").innerHTML = "User ID: " + data.id;
                document.getElementById("location").innerHTML = "Location: " + data.location;
            },
        });
        document.getElementById("contribution-graph").src = "https://activity-graph.herokuapp.com/graph?username=" + getUsername(href) + "&theme=xcode&line=e05397&point=FFFFFF&hide_border=true&";
    });
}, false);