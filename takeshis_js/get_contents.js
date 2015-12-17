function get_contents_date(){
  /*
  iframeのid要素うまく取得する方法がわからないため、
  idを書き換えて要素を取得
  */
  var new_iframe_id = document.getElementsByTagName('iframe');
  //console.log(new_iframe_id);//getElementsByTagNameは該当するタグ全てを配列で返す
  new_iframe_id[0].setAttribute("id","test");

  //console.log(document.getElementById("test").contentWindow.getSelection().toString());
  return document.getElementById("test").contentWindow.getSelection().toString();

}
