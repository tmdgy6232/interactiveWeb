function srvTime(){

    if (window.XMLHttpRequest) {//분기하지 않으면 IE에서만 작동된다.

        xmlHttp = new XMLHttpRequest(); // IE 7.0 이상, 크롬, 파이어폭스 등

        //헤더 정보만 받기 위해 HEAD방식으로 요청.
        xmlHttp.open('HEAD', window.location.href.toString(), false); // window.location.href.toString() or Target URL

        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');

        return xmlHttp.getResponseHeader("Date");   //받은 헤더정보에서 Date 속성만 적출

    }else if (window.ActiveXObject) {
        xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        xmlHttp.open('HEAD',window.location.href.toString(),false);
        xmlHttp.setRequestHeader("Content-Type", "text/html");
        xmlHttp.send('');
        return xmlHttp.getResponseHeader("Date");
    }
}

function test(){
    var st = new Date(srvTime());
    var rt = new Date();

    return [st, rt];
}

test();
