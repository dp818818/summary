class ajax {
    constructor(url, fn) {
        this.url = url;
        this.xhr = new XMLHttpRequest();
    }
    get() {
        this.xhr.open('GET', url, false)
        this.xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status === 200) {
                   fn(xhr.responseText);
                }
            }
        }
        this.xhr.send()
    }
    post() {

    }
}


