// 代码生成时间: 2025-10-13 21:35:50
const _ = require('lodash');

// 使用简单的计数器实现限流
class RateLimiter {
    constructor(maxRequests) {
        this.maxRequests = maxRequests;
        this.requests = [];
    }

    // 检查是否可以继续请求
    canRequest() {
        const now = Date.now();
        this.requests = this.requests.filter(request => (now - request) > 1000); // 1秒
        return this.requests.length < this.maxRequests;
    }

    // 记录请求
    recordRequest() {
        if (this.canRequest()) {
            this.requests.push(Date.now());
            return true;
        }
        return false;
    }
}

// 实现熔断器模式
class CircuitBreaker {
    constructor() {
        this.state = 'closed';
        this.failures = 0;
        this.threshold = 3; // 允许失败的次数
        this.halfOpenAfter = 1000 * 60 * 5; // 5分钟半开状态
        this.lastFailureTime = 0;
    }

    // 尝试执行函数并处理熔断状态
    execute(fn) {
        switch (this.state) {
            case 'open':
                throw new Error('Circuit is open, operation failed.');
            case 'half-open':
                try {
                    return fn();
                } catch (error) {
                    this.failures++;
                    this.state = 'open';
                    this.lastFailureTime = Date.now();
                    throw error;
                }
            case 'closed':
                try {
                    return fn();
                } catch (error) {
                    this.failures++;
                    if (this.failures >= this.threshold) {
                        this.state = 'open';
                        this.lastFailureTime = Date.now();
                    } else {
                        // 重置失败次数
                        this.failures = 0;
                    }
                    throw error;
                }
            default:
                throw new Error('Invalid circuit breaker state.');
        }
    }

    // 检查熔断器是否应该转换为半开状态
    checkState() {
        if (this.state === 'open' && (Date.now() - this.lastFailureTime) > this.halfOpenAfter) {
            this.state = 'half-open';
        }
    }
}

// 示例API函数，模拟外部API请求
const apiFunction = () => {
    // 模拟API请求
    const randomNumber = Math.random();
    if (randomNumber < 0.8) {
        throw new Error('API request failed');
    }
    return 'API response';
};

// 实例化限流器和熔断器
const rateLimiter = new RateLimiter(5); // 每秒最多5个请求
const circuitBreaker = new CircuitBreaker();

// 封装API调用，集成限流和熔断
const apiCall = () => {
    if (rateLimiter.recordRequest()) {
        return circuitBreaker.execute(apiFunction).catch(error => {
            console.error('API call failed:', error.message);
            return null;
        });
    }
    throw new Error('Rate limit exceeded');
};

// 测试API调用
const testApiCall = () => {
    for (let i = 0; i < 10; i++) {
        apiCall().then(response => {
            if (response) {
                console.log(response);
            }
        }).catch(error => {
            console.error(error.message);
        });
    }
};

// 启动测试
testApiCall();