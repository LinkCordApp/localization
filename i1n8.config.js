module.exports = {
  defaultLocale: 'English',
  locales: [
    'English', 
    'Spanish',
    'German',
    'Italian'
    'Swedish'
  ],
  pages: {
    '*': ['common'],
    '/': ['home', 'dashboard', 'status', 'profile', 'terms', 'privacy'],
    '/about': ['about']
  },
}
