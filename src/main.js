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
      content: 'multichat, chat, messages, multichat.network, instant messaging, secure messaging, encrypted chat, real-time messaging, group chat, private messaging, chat application, messaging app, chat platform, online chat, message encryption, message security, secure communication, multi-user chat, chat software, chat service, messaging network, chat network, encrypted communication, live chat, chatrooms, chat channels, chat privacy, chat app security, real-time updates, instant communication, secure messages, message delivery, chat server, messaging system, chat interface, chat API, secure chat app, chat application development, chat security measures, chat encryption, messaging protocols, chat clients, chat encryption algorithms, messaging security, secure message storage, chat app features, chat notifications, chat backend, chat frontend, chat architecture, chat scalability, chat database, message integrity, secure messaging network, chat system design, chat reliability, chat performance, chat app infrastructure, chat load balancing, chat rate limiting, chat traffic management, chat proxy server, chat firewall, chat data protection, chat privacy policies, chat app compliance, chat encryption keys, chat authentication, chat authorization, chat user management, chat user roles, chat permissions, chat logging, chat monitoring, chat analytics, chat reporting, chat error handling, chat debugging, chat troubleshooting, chat user experience, chat interface design, chat usability, chat customization, chat personalization, chat themes, chat emoticons, chat file sharing, chat media sharing, chat voice messages, chat video messages, chat support, chat customer service, chat integration, chat API endpoints, chat documentation, chat tutorials, chat developer tools, chat SDK, chat framework, chat libraries, chat plugins, chat extensions, chat widgets, chat microservices, chat containerization, chat deployment, chat hosting, chat cloud services, chat on-premise, chat hybrid solutions, chat scalability, chat latency, chat synchronization, chat real-time collaboration.'
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
