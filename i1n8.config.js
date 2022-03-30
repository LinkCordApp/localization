module.exports = {
  defaultLocale: 'English',
  locales: [
    'English', 
    'Spanish'
  ],
  pages: {
    '*': ['common'],
    '/': ['home', 'dashboard', 'status', 'profile', 'terms', 'privacy'],
    '/about': ['about']
  },
}