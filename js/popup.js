function getUrlPath(href) {
    const url = new URL(href);
    return url.pathname.slice(1);
}

function getUsername(href) {
    return getUrlPath(href).split('/')[0];
}

document.addEventListener('DOMContentLoaded', function () {
    browser.tabs.query({currentWindow: true, active: true}, function (tabs) {
        let tab = tabs[0];
        href = tab.url;
        $.ajax({
            url: "https://api.github.com/users/" + getUsername(href),
            dataType: "json",
            success: function (data) {
                document.getElementById("avatar").src = data.avatar_url;
                document.getElementById("name").innerHTML = data.name;
                document.getElementById("login").innerHTML = data.login;
                document.getElementById("id").innerHTML = data.id;
                document.getElementById("location").innerHTML = data.location;
            },
        });
    });
}, false);