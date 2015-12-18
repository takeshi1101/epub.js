#!/usr/bin/env node
var connect = require('connect'),
	colors = require('colors'),
	argv = require('optimist').argv,
	portfinder = require('portfinder');

var port = argv.p,
	logger = argv.l,
	log = console.log;

if (!argv.p) {
	portfinder.basePort = 8080;
	portfinder.getPort(function (err, port) {
	if (err) throw err;
	listen(port);
	});
} else {
	listen(port);
}


// 1.モジュールオブジェクトの初期化
var fs = require("fs");
var server2 = require("http").createServer(function(req, res) {
     res.writeHead(200, {"Content-Type":"text/html"});
     var output = fs.readFileSync("./basic.html", "utf-8");
     res.end(output);
}).listen(7000);


var io = require("socket.io").listen(server2);

// ユーザ管理ハッシュ
var userHash = {};

// 2.イベントの定義
io.sockets.on("connection", function (socket) {

  // 接続開始カスタムイベント(接続元ユーザを保存し、他ユーザへ通知)
  socket.on("connected", function (name) {
    var msg = name + "が入室しました";
    userHash[socket.id] = name;
    io.sockets.emit("publish", {value: msg});
  });

  // メッセージ送信カスタムイベント
  socket.on("publish", function (data) {
    io.sockets.emit("publish", {value:data.value});
  });

  // 接続終了組み込みイベント(接続元ユーザを削除し、他ユーザへ通知)
  socket.on("disconnect", function () {
    if (userHash[socket.id]) {
      var msg = userHash[socket.id] + "が退出しました";
      delete userHash[socket.id];
      io.sockets.emit("publish", {value: msg});
    }
  });
});



function listen(port) {

	var server = connect();
		server.use(connect.static(__dirname))

		if(!logger) server.use(connect.logger(logger))

		server.listen(port);

	log('Starting up Server, serving '.yellow
		+ __dirname.green
		+ ' on port: '.yellow
		+ port.toString().cyan);
	log('Hit CTRL-C to stop the server');
}



process.on('SIGINT', function () {
	log('http-server stopped.'.red);
	process.exit();
});
