import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiFilePlus,
  FiCopy,
  FiFlag,
  FiGrid,
  FiDatabase,
  FiSearch,
  FiSliders,
  FiSmile,
  FiUsers,
  FiServer,
  FiChrome,
  FiUploadCloud,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Avacyn"
        description="Avacyn est un assistant intelligent
qui aide les professionnels de l'immobilier
à décupler leur productivité."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Plus de temps,
                <Br /> plus d&apos;argent,
                <Br /> moins d&apos;efforts.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Avacyn est un <Em>assistant intelligent</Em>
                <Br /> qui aide les professionnels de l&apos;immobilier <Br />{" "}
                à décupler leur productivité.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack  pb="12" spacing="8">

              </HStack>

              <Box alignItems="center" justifyContent="flex-start" w="100%" >
                <ButtonLink colorScheme="primary" size="lg" href="https://app.avacyn.fr/" marginRight={'4'} mt="4">
                  Connexion
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://app.avacyn.fr/"
                  variant="outline"
                  mt="4"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Réserver une démonstration
                </ButtonLink>
              </Box>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a Page in AvacynApp"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accessible",
            icon: FiSmile,
            description: "Notre plateforme a été conçue pour s'adresser à tous, quelle que soit votre compétence technique.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Hyper-personnalisé",
            icon: FiSliders,
            description:
              "Comprenant que chaque entreprise a ses exigences et ses aspirations uniques, Avacyn s'harmonisent avec vos opérations et vos défis distinctifs.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Français & multimodale",
            icon: FiGrid,
            description:
              "Avacyn englobe des fonctionnalités multimodales, permettant une interaction avec l’IA via le texte, la voix et l’imagerie.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Respect des données",
            icon: FiServer,
            description:
              "Dédiés à la protection de vos données et au respect des réglementations en vigueur sur la confidentialité des données, nous adhérons rigoureusement aux normes de sécurité les plus élevées.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Votre futur meilleur ami 😄">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Que vous ayez besoin d&apos;améliorer votre annonce, corriger la qualité d&apos;une photo ou encore consulter une référence juridique, Avacyn est en mesure de vous assister et vous faire gagner un temps précieux.
            Elle dispose de <Em>20+ outils</Em> pour quotidiennement vous épauler.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="purple.300" display="inline">
                app.
              </Text>{""}
              <Text color="purple.500" display="inline">
                avacyn.fr
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Des fondations solides.">
        <Text color="muted" fontSize="lg">
        Nous n&apos;aimons pas réinventer la roue, et vous non plus. Nous avons sélectionné les outils les plus productifs et les plus établis de la scène et construit notre modèle par-dessus.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Guillaume MATILLA"
        description="Fondateur, CEO"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Depuis que j&apos;utilise l&apos;assistant IA multimodal, j&apos;ai libéré du temps pour me concentrer sur mes clients et conclure des transactions plus rapidement. L&apos;IA a vraiment révolutionné ma façon de travailler en immobilier.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Mandatez avec deux longueurs d'avance."
      >
        <Text color="muted" fontSize="lg">
        Nous prenons en charge tous vos besoins de base en matière d&apos;immobilier, c&apos;est pourquoi nous créons des fonctionnalités qui rendent notre produit unique.
        </Text>
        <Wrap mt="8">
          {[
            "recherche avancée",
            "documents automatiques",
            "visites virtuelles",
            "suivi propriétés",
            "annonces optimisées",
            "rapports performances",
            "recommandations personnalisées",
            "interaction vocale",
            "évaluation automatique",
            "documentation",
            "vidéos 360°",
            "formation interactive",
            "gestion tâches",
            "support multilingue",
            "analyse performances",
            "gestion rendez-vous",
            "prospection",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Ce n&apos;est pas
          <Br /> un énième GPT.
        </Heading>
      }
      description={
        <>
          Si les modèles linguistiques tels que GPT ont ouvert la voie à des applications révolutionnaires, ils rencontrent souvent leurs limites lorsqu&apos;ils sont confrontés à des tâches complexes ou exigeant une expertise spécialisée. 
          <Br /><Br />
          Avacyn transcende ces modèles génériques en exploitant une architecture et un apprentissage adaptés à l&apos;immobilier.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Génération.",
          icon: FiBox,
          description:
            "La génération multimodale exploite l'IA pour assembler du texte, des images, du son, et même de la vidéo.",
          variant: "inline",
        },
        {
          title: "Mémoire court/long terme.",
          icon: FiDatabase,
          description:
          "Avacyn utilise une mémoire court terme et long terme pour stocker et récupérer des informations.",
          variant: "inline",
        },
        {
          title: "Documentation.",
          icon: FiSearch,
          description:
          "Alimentée par une documentation conséquente (ex: juridique), notre IA peut répondre à vos questions et même générer des documents adaptés.",
          variant: "inline",
        },
        {
          title: "Prospection assistée.",
          icon: FiUserPlus,
          description:
          "Elle automatise les tâches de prospection et vous offre des analyses précises pour convertir plus de leads.",
          variant: "inline",
        },
        {
          title: "Assistance & conseils.",
          icon: FiFlag,
          description:
          "Vous avez un doute ? Avacyn est apte à vous assister et vous conseiller sur tous les sujets.",
          variant: "inline",
        },
        {
          title: "Traitement de document.",
          icon: FiUploadCloud,
          description:
          "Ne vous chargez pas du traitement manuel, Avacyn analyse, gère directement votre document et réponds à vos questions.",
          variant: "inline",
        },
        {
          title: "Recherche en temps réel.",
          icon: FiChrome,
          description:
          "Avacyn peut rechercher en temps réel pour permettre aux utilisateurs de trouver des informations rapidement et facilement.",
          variant: "inline",
        },
        {
          title: "Multi-agents",
          icon: FiUsers,
          description:
          "Notre architecture multi-agent accélère l'exécution en parallélisant les tâches pour des résultats ultra-rapides.",
          variant: "inline",
        },
        {
          title: "Rédaction spécifique.",
          icon: FiFilePlus,
          description:
          "Avacyn utilise une technologie de génération de texte pour rédiger des documents automatiquement.",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        Notre application est en bêta.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "v0.1.5 est disponible !",
        description:
          '<img alt="X (formerly Twitter) URL" src="https://img.shields.io/badge/Je%20veux%20essayer%20!%20🚀-8952E0">',
        href: "https://app.avacyn.fr/",
        action: false,
      },
    },
  };
}
