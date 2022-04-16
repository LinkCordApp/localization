module.exports = {
  defaultLocale: 'English',
  locales: [
    'English', 
    'Spanish',
    'German',
    'Italian'
  ],
  pages: {
    '*': ['common'],
    '/': ['home', 'dashboard', 'status', 'profile', 'terms', 'privacy'],
    '/about': ['about']
  },
}