var com_num = 1;
var yuser_name = "takeshi";

function get_com_date(){
  var com_date = document.getElementById("com_form").value;
  //console.log(com_date);

  var new_com = document.createElement('p');
  new_com.setAttribute("id","com_num_"+com_num);
  document.getElementById('com_area').appendChild(new_com);
  document.getElementById('com_num_'+com_num).innerHTML = "<p id='com_num_'" + com_num + ">" + get_contents_date() +"<br>"+com_date +"@"+yuser_name + "</p>";
  //console.log(document.getElementById('com_num_'+com_num));
  com_num++;
  //console.log(com_num);
}
