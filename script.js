/*
go-inso_bookmark.html�ļ��а����ýű�������
*/
(function() {
var retries = 10;
function waitLoad(onLoad) {
    if(location.hostname == "") {
       if(retries == 0) {
           alert("�޷���ȡURL, �������԰�");
           return;
       }
       retries--;
       setTimeout(waitLoad, 1000);
    } else {
        onLoad();
    }
}

waitLoad(main);

function main() {
    if(["osu.ppy.sh", "new.ppy.sh"].indexOf(location.hostname) == -1) {
        alert("���ܲ���osu����");
        return;
    }
    
    /* ��ȡurl·���� */
    var pathname = location.pathname;
    /* �����ͼ�׼�url */
    if(pathname.substring(2,1) == 's') {
        /* ��ȡͼ�׼���Ĭ���Ѷ�ͼ�׵�·���� */
        pathname = getActivePathname();
        if(pathname == null) {
            alert("����ѡ��һ���ض���ͼ��");
            return;
        }
    }

    /* �õ�beatmap id */
    var m = pathname.match(/\d+/);
    if(m == null) {
        alert("���ܻ�ȡͼ��id");
        return;
    }
    var beatmapid = m[0];
    
    /* ƴ��inso URL */
    var url = "http://inso.link/yukiho/?b=" + beatmapid;
    /* �ڵ�ǰҳ��򿪸�URL */
    location.href = url;
}


function getActivePathname() {
    var a = document.getElementById("tablist").getElementsByClassName("active")[0];
    return a ? a.href.substr(a.href.indexOf("/", 9)) : null;
}
})();