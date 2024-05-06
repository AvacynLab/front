import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Propulsez votre entreprise vers le succès avec des tarifs adaptés',
  description:
    "On s'adapte à vous, que vous soyez un entrepreneur solo à la conquête du marché ou une agence immobilière qui gère un empire de biens. Accédez à l'IA de pointe sans exploser votre budget !",
  plans: [
    {
      id: 'oss',
      title: 'Indépendant',
      description: 'Parfait pour les débutants et les agents solo',
      price: 'Nous contacter.',
      features: [
        {
          title: 'Une license',
        },
        null,
        {
          title: 'Accès prioritaire à la V1',
        },
        {
          title: 'Webinaire & communauté',
        },
        {
          title: 'Mis à jour régulièrement',
        },
        null,
        {
          title: 'Sans engagement',
          iconColor: 'green.500',
        },
        {
          title: 'Support sous 6h',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'bootstrap',
      title: 'Agence & Cabinet',
      description: 'Solution complète pour les équipes immobilières',
      price: 'Nous contacter.',
      isRecommended: true,
      features: [
        {
          title: 'Plusieurs licenses',
        },
        {
          title: "Données trans-utilisateurs",
        },
        null,
        {
          title: 'Accès prioritaire à la V1',
        },
        {
          title: 'Webinaire & communauté',
        },
        {
          title: 'Mis à jour régulièrement',
        },
        null,
        {
          title: 'Sans engagement',
          iconColor: 'green.500',
        },
        {
          title: 'Support sous 6h',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: '#',
        label: 'Réserver une démonstration',
      },
    },
    {
      id: 'startup',
      title: 'Formation',
      description: 'Take your ticket to the Moon 🚀',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            1299€
          </Text>
          <Text>999€</Text>
        </HStack>
      ),
      features: [
        {
          title: '2 jours de formation',
        },
        {
          title: 'X modules et supports numérique',
        },
        {
          title: "6 mois d'accompagnement",
        },
        {
          title: 'Mis à jour régulièrement',
        },
        null,
        {
          title: 'Accès numérique à vie',
          iconColor: 'blue.500',
        },
      ],
      action: {
        href: '#',
        label: 'Bientôt..',
      },
    },
  ],
}
