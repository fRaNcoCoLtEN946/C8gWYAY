// 代码生成时间: 2025-10-02 17:10:47
const _ = require('lodash');

// API信息模板
const apiTemplate = `// {apiName} - {apiDescription}
//
// {method} {url}
//
// Parameters:
// {parameters}
//
// Response:
// {response}
//`;

// 生成API文档
function generateApiDoc(apiData) {
  // 检查apiData是否有效
  if (!_.isArray(apiData)) {
    throw new Error('apiData must be an array');
  }

  // 遍历apiData，为每个API生成文档
  return apiData.map(api => {
    // 检查API信息是否完整
    if (!_.has(api, 'name') || !_.has(api, 'description') || !_.has(api, 'method') || !_.has(api, 'url')) {
      throw new Error('API information is incomplete');
    }

    // 生成参数和响应的描述
    const parameters = _(api.parameters)
      .map(param => `${param.name}: ${param.type} - ${param.description}`)
      .join('
');

    const response = _.map(api.response, (res, status) => `${status}: ${res.type} - ${res.description}`).join('
');

    // 替换模板中的占位符
    return _.template(apiTemplate)({
      apiName: api.name,
      apiDescription: api.description,
      method: api.method,
      url: api.url,
      parameters: parameters,
      response: response
    });
  });
}

// 示例API信息
const apiData = [
  {
    name: 'Get User',
    description: '获取用户信息',
    method: 'GET',
    url: '/user/:id',
    parameters: [
      { name: 'id', type: 'string', description: '用户ID' }
    ],
    response: {
      '200': { type: 'User', description: '用户信息' },
      '404': { type: 'Error', description: '用户不存在' }
    }
  },
  // ...其他API信息
];

// 生成API文档
try {
  const apiDocs = generateApiDoc(apiData);
  console.log(apiDocs);
} catch (error) {
  console.error(error.message);
}