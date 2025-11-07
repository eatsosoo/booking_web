// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  ssr: true,

  app: {
    head: {
      titleTemplate: '%s | Booking App',
      meta: [
        { name: 'description', content: 'Trang web đặt chỗ trực tuyến nhanh chóng, dễ sử dụng, tối ưu SEO.' },
        { name: 'keywords', content: 'booking, đặt phòng, du lịch, khách sạn, nhà nghỉ, tour, resort' },
        { property: 'og:title', content: 'Booking App - Đặt chỗ nhanh, trải nghiệm tốt' },
        { property: 'og:description', content: 'Website booking hiện đại, thân thiện với SEO và người dùng' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],

  // eslint: {
  //   lintOnStart: false,
  // },

  // content: {
  //   // nếu sau này bạn có bài blog hoặc bài giới thiệu SEO
  //   documentDriven: false,
  // },

  image: {
    // tối ưu hình ảnh tự động
    format: ['webp', 'avif'],
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
    ],
  },

  // ui: {
  //   icons: ['heroicons', 'lucide'],
  // },
})