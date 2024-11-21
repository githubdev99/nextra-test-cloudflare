import nextra from 'nextra'
 
const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
export default withNextra({
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  }
})
 
// If you have other Next.js configurations, you can pass them as the parameter:
// export default withNextra({ /* other next.js config */ })