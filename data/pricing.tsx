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
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            59€
          </Text>
          <Text>40€</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Économiser votre temps et booster votre productivité',
        },

        {
          title: 'Automatiser vos tâches répétitives',
        },
        {
          title: 'Obtenir des informations et des analyses précieuses',
        },
        {
          title: 'Améliorer votre prise de décision',
        },
        null,
        "Cette offre est parfaite pour ceux qui veulent :",
        {
          title: "Explorer les capacités de l'IA sans engagement à long terme",
          iconColor: 'green.500',
        },
        {
          title: 'Gérer des tâches simples et quotidiennes',
          iconColor: 'green.500',
        },
        {
          title: 'Se familiariser avec Avacyn et son potentiel',
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
      description: 'Une solution IA personnalisée qui répond parfaitement à vos besoins spécifiques.',
      price: 'Nous contacter.',
      isRecommended: true,
      features: [
        {
          title: 'Un agent IA unique, conçu pour vos besoins et objectifs',
        },
        {
          title: "Une intégration transparente à vos systèmes existants",
        },

        {
          title: 'Formation et un support personnalisés',
        },
        {
          title: 'Mis à jour régulièrement pour répondre à vos besoins croissants',
        },
        null,
        "Cette offre est idéale pour les entreprises qui :",
        {
          title: 'Ont des besoins complexes et spécifiques',
          iconColor: 'green.500',
        },
        {
          title: 'Souhaitent maximiser le retour sur investissement de leur IA',
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
