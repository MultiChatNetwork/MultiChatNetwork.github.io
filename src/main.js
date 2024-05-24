// main
import MainLayout from '~/layouts/Main.vue'

import '~/assets/js/script.js'
import '~/assets/css/styles.css'

export default function (Vue, { head, isClient }) {
  // Set Main Main as a global component
  Vue.component('MainLayout', MainLayout)

  if (isClient) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-RQWETTJBTY`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-RQWETTJBTY');
    };
  }

  // head links
  head.link.push(
    {
      rel: 'canonical',
      href: 'https://multichat.network'
    },
    {
      rel: 'icon',
      href: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      rel: 'shortcut icon',
      href: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      rel: 'stylesheet',
      href: 'https://res.cloudinary.com/db1e0b4ka/raw/upload/v1698339335/mv-scss/main.css'
    }
  )

  // meta headers
  head.meta.push(
    {
      name: 'theme-color',
      content: '#0f4c81'
    },
    {
      name: 'locale',
      content: 'en_US'
    },
    {
      name: 'type',
      content: 'MultiChat Messaging app'
    },
    {
      name: 'title',
      content: 'Multichat is a messaging app with focus on security & user experience'
    },
    {
      name: 'description',
      content: 'Multichat is a messaging app with focus on security & user experience'
    },
    {
      name: 'keywords',
      content: 'multividas, multividas api documentation, multividas threads, multividas status, multividas help center, multividas developer, multividas about us, multividas ads, multividas engineering blog, multividas developers documentation, multividas embed threads'
    },
    {
      name: 'author',
      content: 'Soulaimane Yahya'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  )

  // opengraph meta tags
  head.meta.push(
    {
      property: 'og:description',
      content: 'Multichat is a messaging app with focus on security & user experience'
    },
    {
      property: 'og:image',
      content: 'https://developers.multividas.com/images/logo.svg'
    },
    {
      property: 'og:url',
      content: 'https://multichat.network'
    },
    {
      property: 'og:site_name',
      content: 'MultiChat'
    }
  )

  // Twitter Card
  head.meta.push(
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@multichateng'
    },
    {
      name: 'twitter:title',
      content: 'MultiChat Messaging app'
    },
    {
      name: 'twitter:description',
      content: 'Multichat is a messaging app with focus on security & user experience'
    },
    {
      name: 'twitter:image',
      content: 'https://developers.multividas.com/images/logo.svg'
    }
  )
}
