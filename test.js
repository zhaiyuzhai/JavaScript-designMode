var str="<a href='{#href#}'></a>";
function formateString(str,data) {
    return str.replace(/\{#(\w+)#}/g,function (match,key) {
        console.log(match,key)
    })
}
formateString(str,[]);