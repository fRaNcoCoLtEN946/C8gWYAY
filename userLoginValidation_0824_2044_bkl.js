// 代码生成时间: 2025-08-24 20:44:20
// 引入lodash库
const _ = require('lodash');

// 模拟的用户数据库
const users = {
    "user1": {
        "username": "user1",
        "password": "password1"
    },
    "user2": {
        "username": "user2",
        "password": "password2"
    }
};

// 用户登录验证函数
function validateUserLogin(username, password) {
    // 查找用户
    const user = users[username];
    
    // 检查用户是否存在
    if (!user) {
        throw new Error("用户不存在");
    }
    
    // 检查密码是否正确
    if (user.password !== password) {
        throw new Error("密码错误");
    }
    
    // 如果验证通过，返回用户信息
    return user;
}

// 使用示例
try {
    const username = "user1";
    const password = "password1";
    const user = validateUserLogin(username, password);
    console.log("登录成功: ", user);
} catch (error) {
    console.error(error.message);
}
