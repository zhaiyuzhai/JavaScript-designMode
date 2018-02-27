/*
当需求不明的时候，比如创建一个模板，里面可能有几个图片，或者只有一个图片*/
var viewComman=(function () {
    var tpl={
        product:[
            '<div>',
            '<img src="{#src#}">',
            '<p>{#text#}</p>',
            '</div>'
        ].join(''),
        title:[
            '<div calss="title">',
                '<div calss="main">',
                    '<h2>{#h2#}</h2>',
                    '<p>{#h2#}</p>',
                '</div>',
            '</div>'
        ].join('')
    },
    html='';
    function formateString(str,obj) {
        return str.replace(/\{#(\w+)#\}/ig,function(match,key){
            return obj[key];
        })
    }
    var Action={
        create(){

        },
        display(){

        }
    }
    return function (msg) {

    }
})();
/*
调用*/
viewComman({
    command:'create',
    param:['title',titleData,'title']
})