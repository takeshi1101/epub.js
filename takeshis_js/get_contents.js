function get_contents_date(){
  /*
  iframeのid要素うまく取得する方法がわからないため、
  idを書き換えて要素を取得
  */
  var new_iframe_id = document.getElementsByTagName('iframe');
  //console.log(new_iframe_id);//getElementsByTagNameは該当するタグ全てを配列で返す
  new_iframe_id[0].setAttribute("id","test");

  var color_list = ["#BBCCDD", "#DDA0DD", "#00FA9A", "#F0E68C", "#B0C4DE"]

  //console.log(document.getElementById("test").contentWindow.getSelection().toString());
  contents_date = document.getElementById("test").contentWindow.getSelection();

  if (contents_date == '') {return false;}
  var range = contents_date.getRangeAt(0);
  var span = document.createElement("span");
  span.style.backgroundColor = color_list[1];
  range.surroundContents(span);

  return contents_date.toString();
}
