/*
 * @Author: heye
 * @Date: 2022-07-28 16:58:26
 * @LastEditors: heye
 * @LastEditTime: 2022-07-28 16:59:40
 * @FilePath: \Realtime-Chat-Appf:\REALTIME-CHAT-APP\REALTIME-CHAT-APP\server\module.js
 * @Description:
 *
 */
function FirstModule() {
	var name
	this.setName = function (thyName) {
		name = thyName
	}
	this.sayHello = function () {
		console.log('Hello', name)
	}
}
module.exports = FirstModule
