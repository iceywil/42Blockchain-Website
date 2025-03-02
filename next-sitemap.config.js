// SEO MA GUEULE

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://42blockchain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://42blockchain.com/server-sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
}