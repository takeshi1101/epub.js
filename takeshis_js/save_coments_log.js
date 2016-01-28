function save_coments_log(){
  var msg_num = sessionStorage.getItem("msg_num");
  var log_date = "";
  for(i=0;i<msg_num;i++){
    //log_date.push(document.getElementById("msg"+i).innerHTML+"\n");
    log_date = log_date + document.getElementById("msg"+i).innerHTML+"\n";
    console.log(log_date);
  }
  //create_file();
  return log_date;
}
/*
function create_file(){
  // Blob オブジェクトを作成（中身が空）
  var blob = new Blob(["文字列テスト"] , {type:"text/plain"});

  // 出力テスト
  console.log(blob);
}*/


/*nodeでのファイル保存
function save_comets_log(){
  var fs = require('fs');

  var text = "hoge foo bar";
  fs.writeFile('hoge.txt', text);
}
*/
