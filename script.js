/*
go-inso_bookmark.html�ļ��а����ýű�������
*/
(function() {
// �ж��Ƿ�Ϊosu����
if(["osu.ppy.sh", "new.ppy.sh"].indexOf(location.hostname) == -1)
{
   alert("����osu����");
   return;
}
// �õ�beatmap id
var url = location.href;
var bid = url.substr(url.lastIndexOf("/") + 1);
if(isNaN(parseInt(bid)))
{
  alert("���ܻ�ȡͼ��id");
  return;
}
// ƴ��inso URL
url = "http://inso.link/yukiho/?b=" + bid;
// �ڵ�ǰҳ��򿪸�URL
location.href = url;
})();