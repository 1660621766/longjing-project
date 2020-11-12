import Cookies from 'js-cookie';

const user = {
		//state状态 类似于vue中的data
		state: {
			uid: "", //用户名
			password: "", //密码
			entCode: "", //标识
			routerPath: Cookies.get('routerPath'), //路由重定向
			userInfo: null, //用户信息
		},
		//Vuex 中的 mutation 类似于事件  第一个参数是state 传入额外的参数，即 mutation 的 载荷（payload）
	//mutations,里面装着一些改变数据方法的集合，处理数据逻辑方法全部放在mutations里面，使得数据和视图分离。
	mutations: {
		//设置用户标识
		SET_ENTCODE: (state, entCode) => {
			state.entCode = entCode;
		},
		//设置用户ID
		SET_UID: (state, uid) => {
			state.uid = uid;
		},
		//设置密码
		SET_PWD: (state, password) => {
			state.password = password;
		},
		//设置路由重定向的路由
		SET_PATH: (state, routerPath) => {
			state.routerPath = routerPath;
		},
		//设置userInfo
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = userInfo;
		},
		//登录成功打印日志
		LOGIN_SUCCESS: () => {
			// console.log('login success');
		},
	},
	//通过action commit 找到相对应的mutations  来改变state
	actions: {
				// 登录
				Login({
					commit
				}, userInfo) {
					//es6 Promise 是一个对象，从它可以获取异步操作的消息 resolve函数的作用是，
					//将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
					//在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，
					//将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。
					return new Promise((resolve, reject) => {
						// console.log('登录入参：', userInfo);
						//调用接口
						instance.post('/proxy/auth/login', userInfo).then(res => {
							if(res.status == 200 && res.data.success) {
								Cookies.set('userName', userInfo.account, {expires: 14,path: ''}); //设置token
								Cookies.set('refresh', true); //设置是否刷新参数refresh
								Cookies.set('entCode', userInfo.entCode, {expires: 14,path: ''}); //设置token
								if(userInfo.checked) {
									let base = new Base64();
									let basePassWord = base.encode(userInfo.password); //base64加密设置密码
									Cookies.set('password', basePassWord, {expires: 14,path: ''}); 
									commit('SET_PWD', userInfo.password); //修改密码
								} else {
									Cookies.set('password', ''); //设置密码
									commit('SET_PWD', ''); //修改密码
								}
								commit('SET_UID', userInfo.account); //修改用户
								commit('SET_ENTCODE', userInfo.entCode); //修改企业标识
								resolve(); //异步操作成功
							} else {
								reject(res.data.errorMsg);
								// Message.error(res.data.errorMsg);
							}
						}).catch(error => {});
					});
				},
	}
}


export default user;