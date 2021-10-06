/*
 * @Author       : LQ
 * @Description  : 
 * @version      : 1.0
 * @Date         : 2021-08-20 16:44:21
 * @LastAuthor   : LQ
 * @lastTime     : 2021-08-20 17:23:14
 * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
 */
export default {
	// 
	tabs: {
		duration: 300,
		list: () => [],
		lineColor: '#3c9cff',
		activeStyle: () => {
			return {
				color: '#303133',
			}
		},
		inactiveStyle: () => {
			return {
				color: '#606266',
			}
		},
		lineWidth: 20,
		lineHeight: 3,
		itemStyle: () => {
			return {
				height: '44px'
			}
		},
		scrollable: true
	},
}
