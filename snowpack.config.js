// filepath: c:\0_MyNewWork\mre\snowpack.config.js
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh'
  ],
};