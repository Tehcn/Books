function toTitlecase(str) {
    let noCapWords = ['and', 'as', 'as if', 'as long as', 'at', 'but', 'by', 'even if', 'for', 'from', 'if', 'if only', 'in', 'into', 'like', 'near', 'now that', 'nor', 'of', 'off', 'on', 'on top of', 'once', 'onto', 'or', 'out of', 'over', 'past', 'so', 'so that', 'than', 'that', 'till', 'to', 'up', 'upon', 'with', 'when', 'yet'];

    let arr = [];
    
    str.split('-').forEach((word, index) => {
        for(var i=0;i<noCapWords.length;i++) {
            if(word == noCapWords[i] && index != 0) {
                arr.push(`${word.split("")[0].toLowerCase()}${word.substring(1)}`);
                return;
            }
        }
        arr.push(`${word.split("")[0].toUpperCase()}${word.substring(1)}`);
    });

    return arr.join(' ');
}

(async() => {
    let data = await fetch("/books");
    let json = await data.json();
    json.names.forEach(name => {
        var li = document.createElement('li');
        li.setAttribute('id', name);
        
        var a = document.createElement('a');
        a.setAttribute('href', `/book/${name}`);
        a.innerText = toTitlecase(name);

        var ul = document.getElementById('books');

        ul.appendChild(li);
        li.appendChild(a);
    })
})();