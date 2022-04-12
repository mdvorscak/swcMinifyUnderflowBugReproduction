import swc from '@swc/core';
const testCode = 'var min_float = -1.79769313486231e308';
const res = await swc.minify(testCode, {
  compress: true,
  mangle: true,
  sourceMap: false,
});
console.log(res.code);
