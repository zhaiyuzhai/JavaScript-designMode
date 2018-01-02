/*
用来获取元素在文档中的路径和位置*/


var  interPreter=(function () {
    function getSiblingName(node) {
        /* 如果存在前面的兄弟元素的话*/
        if(node.previousSibling){
            var name="",
                count=1,
                nodeName=node.nodeName,
                sibling=node.previousSibling;
            while(sibling){
                if(sibling.nodeType==1 && sibling.nodeType===node.nodeType && sibling.nodeName){
                    if(sibling.nodeName==node.nodeName){
                        name+=++conut;
                    }else{
                        count=1;
                        name+="|"+sibling.nodeName.toUpperCase();
                    }
                }
                sibling=sibling.previousSibling;
            }
            return name;
        }else{
            return "";
        }
    }
    return function (node,wrap) {
        var path=[],
            wrap=wrap||document;
        /*一种情况*/
        if(node===wrap){
            if(wrap.nodeName==1){
                path.push(wrap.nodeName.toUpperCase());
            }
            return path;
        }
        /*另一种情况*/
        if(node.parentNode!==wrap){
            path=arguments.callee(node.parentNode,wrap);
        }else{
            if(wrap.nodeType==1){
                path.push(wrap.nodeName.toUpperCase());
            }
        }
        var sibling=getSiblingName(node);
        if(node.nodeType==1){
            path.push(node.nodeName.toUpperCase()+sibling);
        }
        return path;
    }
})();
