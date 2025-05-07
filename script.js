// document.getElementById("myButton").onclick = function() {

// 	navigator.bluetooth.requestDevice({
// 			// 过滤器用于指定我们想要连接的蓝牙设备
// 			filters: [{
// 				services: ['battery_service']
// 			}]
// 		})
// 		.then(device => {
// 			console.log('连接设备:', device.name);
// 			// 连接到设备
// 			return device.gatt.connect();
// 		})
// 		.then(server => {
// 			console.log('已连接到GATT服务器');
// 			// 进一步操作...
// 		})
// 		.catch(error => {
// 			console.error('连接蓝牙设备失败:', error);
// 		});
// }

function search() {
	navigator.bluetooth.requestDevice({
			// 过滤器用于指定我们想要连接的蓝牙设备
			filters: [{
				services: ['battery_service']
			}]
		})
		.then(device => {
			console.log('连接设备:', device.name);
			// 连接到设备
			return device.gatt.connect();
		})
		.then(server => {
			console.log('已连接到GATT服务器');
			// 进一步操作...
		})
		.catch(error => {
			console.error('连接蓝牙设备失败:', error);
		});
}