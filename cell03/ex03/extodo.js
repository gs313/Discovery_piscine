function addtask() {
    var inputValue = document.getElementById('newtask').value;
    addlist(inputValue);
    setCookie(`task${Date.now()}`, inputValue);
}

function addlist(inputValue, name = "none") {
    var tag = document.createElement("div");
    var t = document.createTextNode(inputValue);
    tag.appendChild(t);
    tag.id = name;
    if (inputValue === '' && name == "none") {
        alert("You must write something!");
    } else {
        document.getElementById("ft_list").appendChild(tag);
    }
    document.getElementById("newtask").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function(event) {
        if (confirm(`Are you sure you want to delete this ${tag.id}`)) {
            var div = this.parentElement;
            delete_cookie(div.id, inputValue);
            div.remove();
        }
    };
    tag.appendChild(span);
}

// Below are for cookie
function setCookie(cname, cvalue) {
    document.cookie = cname + '=' + cvalue;
    var date = new Date();
    date.setMonth(date.getYear() + 1);
    document.cookie += ('; expires=' + date.toUTCString());
}

function checkCookie() {
    var cookies = document.cookie.split('; ');
    console.log(cookies);
    cookies.sort();
    for (var i = 0; i < cookies.length; i++) {
        var part = cookies[i].split('=');
        if (part[0].indexOf('task') === 0) {
            try {
                var inputValue = part[1];
                addlist(inputValue, part[0]);
            } catch (error) {
                console.log(error.message + ' ' + part[1]);
            }
        }
    }
}

function delete_cookie(cname, value) {
    console.log(cname + "=" + value);
    document.cookie = cname + '=; expires=Fri, 31 Dec 1999 23:59:59 GMT;';
}