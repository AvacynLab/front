import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Avacyn',
    description: "Avacyn est un assistant intelligent qui aide les professionnels de l'immobilier à décupler leur productivité.",
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Fonctionnalités',
      },
      {
        id: 'pricing',
        label: 'Prix & Formation',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Connexion',
        href: 'https://app.avacyn.fr/',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
         2024 © Avacyn
      </>
    ),
    links: [
      {
        href: '#',
        label: <FaTwitter size="14" />,
      },
      {
        href: '#',
        label: <FaDiscord size="14" />,
      },
      {
        href: '#',
        label: <FaLinkedin size="14" />,
      },
    ],
  },
}

export default siteConfig
