/*
 * @Author: heye
 * @Date: 2022-07-20 11:07:59
 * @LastEditors: heye
 * @LastEditTime: 2022-07-29 10:51:49
 * @FilePath: \Realtime-Chat-App\REALTIME-CHAT-APP\server\index.js
 * @Description:
 *
 */
/** 1  do-while */
function toWhile() {
	var x = 0
	do {
		x++
		console.log(x)
	} while (x < 5)
}
/** 2  fs */
function doFS() {
	var fs = require('fs')
	var data = fs.readFileSync('input.txt')
	console.log(data.toString())
	console.log('1 - 阻塞代码运行结束！')
	console.log('-----------------------------')
	fs.readFile('input.txt', function (err, data) {
		if (err) return console.error(err)
		console.log(data.toString())
	})
	console.log('2 - 非阻塞代码运行结束！')
}

/** 3 events */
function doEvents() {
	const events = require('events')
	const emitter = new events.EventEmitter()
	emitter.on('name', function (arg1, arg2) {
		console.log('on-one', arg1, arg2)
	})
	emitter.on('name', function (arg1, arg2) {
		console.log('on-two', arg1, arg2)
	})
	emitter.emit('name', '这是第一个参数', '这是第二个参数')
}

/** 4 Buffer */
function toBuffer() {
	const buf = Buffer.from('runoob', 'ascii')
	buf.write('feynman', 5)
	console.log(buf)
	console.log(buf.toString('hex'))
	console.log(buf.toString('base64'))
	console.log(buf.toString('utf8'))
	console.log(buf.toString('ascii'))
}
// toBuffer()

/** 5 Stream */
function toStream() {
	//读取数据流
	function toRead() {
		const fs = require('fs')
		let data = ''
		const readStream = fs.createReadStream('input.txt')
		readStream.on('data', function (chunk) {
			data += '22'
			data += chunk
		})
		readStream.on('end', function () {
			console.log(data)
		})
		readStream.on('error', function (err) {
			console.log(err, err.stack)
			console.log(err.stack)
		})
		console.log('程序执行完毕')
	}
	//写入数据流
	function toWrite() {
		const fs = require('fs')
		let data = '这是写入数据'
		const writerStream = fs.createWriteStream('output.txt')
		writerStream.write(data, 'utf8')
		writerStream.end()
		writerStream.on('finish', function () {
			console.log('写入完成')
		})
		writerStream.on('error', function (err) {
			console.log(err.stack)
		})
		console.log('程序执行完毕')
	}
	function toPipe() {
		const fs = require('fs')
		const readStream = fs.createReadStream('input.txt')
		const writerStream = fs.createWriteStream('output.txt')
		readStream.pipe(writerStream)
		console.log('程序执行完成')
	}
	function toChain() {
		const fs = require('fs')
		const zlib = require('zlib')
		fs.createReadStream('input.txt')
			.pipe(zlib.createGzip())
			.pipe(fs.createWriteStream('input.txt.gz'))
		console.log('文件压缩完成')
	}
	// toRead()
	// toWrite()
	// toPipe()
	toChain()
}

/** 6 模块 */
function toModule() {
	//方法模块
	function toExports() {
		var Exports = require('./extra/aboutModule/exports')
		Exports.funOne()
	}
	//自定义对象模块
	function toCustom() {
		var Module = require('./extra/aboutModule/module')
		var shili = new Module()
		shili.setName('Feynman')
		shili.sayHello()
	}
}

/** url */
function toRequest() {
	function toGet() {
		var http = require('http')
		var url = require('url')
		http.createServer(function (req, res) {
			res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
			// 解析 url 参数
			var params = url.parse(req.url, true).query
			res.write('网站名：' + params.name)
			res.write('\n')
			res.write('网站 URL：' + params.url)
			res.end()
		}).listen(3000)
		//在浏览器地址栏中中输入
		// http://localhost:3000/user?name=%E8%8F%9C%E9%B8%9F%E6%95%99%E7%A8%8B&url=www.runoob.com
		//查看输出内容
	}
	// toGet()
	function toPost() {
		var http = require('http')
		var querystring = require('querystring')

		var postHTML =
			'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
			'<body>' +
			'<form method="post">' +
			'网站名： <input name="name"><br>' +
			'网站 URL： <input name="url"><br>' +
			'<input type="submit">' +
			'</form>' +
			'</body></html>'
		http.createServer(function (req, res) {
			console.log(req.data, 'req')
			var body = ''
			req.on('data', function (chunk) {
				body += chunk
			})
			req.on('end', function () {
				// 解析参数
				console.log(body, 'body')
				body = querystring.parse(body)
				// 设置响应头部信息及编码
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' })
				if (body.name && body.url) {
					// 输出提交的数据
					res.write('网站名：' + body.name)
					res.write('<br>')
					res.write('网站 URL：' + body.url)
				} else {
					// 输出表单
					res.write(postHTML)
				}
				res.end()
			})
		}).listen(3000)
	}
	toPost()
}

/** Web */
var http = require('http')
var fs = require('fs')
var url = require('url')

// 创建服务器
http.createServer(function (req, res) {
	var pathname = url.parse(req.url).pathname
	console.log('Request for ' + pathname + ' received.')

	// 从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1), function (err, data) {
		if (err) {
			console.log(err)
			res.writeHead(404, { 'Content-Type': 'text/html' })
		} else {
			res.writeHead(200, { 'Content-Type': 'text/html' })
			res.write(data)
		}
		//  发送响应数据
		res.end()
	})
}).listen(3000)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/')
