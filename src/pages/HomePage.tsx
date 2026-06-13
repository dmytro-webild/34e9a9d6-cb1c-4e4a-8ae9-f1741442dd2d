import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBrand from '@/components/sections/hero/HeroBrand';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TestimonialQuoteCards from '@/components/sections/testimonial/TestimonialQuoteCards';
import { Award, Mountain, Star } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBrand
      brand="ALPINE LUXE"
      description="Redefining alpine elegance. Discover a sanctuary of unparalleled luxury nestled in the heart of the Swiss Alps, where breathtaking vistas meet world-class service."
      primaryButton={{
        text: "Reserve Now",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Experiences",
        href: "#features",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/gondola-cable-car-mountains_1204-282.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Where Nature Meets Unmatched Sophistication"
      primaryButton={{
        text: "Our Heritage",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesBentoGrid
      tag="Elevate Your Stay"
      title="Curated Experiences"
      description="From private wellness retreats to high-altitude adventures, every detail is crafted for your utmost comfort."
      features={[
        {
          title: "Wellness Sanctuary",
          description: "Experience deep rejuvenation in our world-class spa facilities overlooking the peaks.",
          imageSrc: "http://img.b2bpic.net/free-photo/panoramic-lakeside-sauna-geometric-heaters-scandinavian-style_169016-68879.jpg",
        },
        {
          title: "Culinary Excellence",
          description: "Savor authentic Swiss flavors paired with international delicacies at our fine-dining restaurant.",
          imageSrc: "http://img.b2bpic.net/free-photo/crispy-fried-crepes-stuffed-with-minced-meat-herb-garnished-with-sauce_140725-5793.jpg",
        },
        {
          title: "Mountain Suites",
          description: "Wake up to stunning sunrise views in our meticulously designed luxury suites.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-design-luxury-resort_23-2150497281.jpg",
        },
        {
          title: "Exclusive Access",
          description: "Enjoy private helicopter transfers and personalized guides to secret alpine spots.",
          imageSrc: "http://img.b2bpic.net/free-photo/amazing-shot-human-flying-hang-glider_181624-21757.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesRevealCardsBento
      tag="Adventures"
      title="Winter & Summer Highlights"
      description="Bespoke itineraries designed by our local mountain specialists."
      items={[
        {
          title: "Off-Piste Skiing",
          description: "Unlimited access to pristine, untouched powder.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-view-ski-slope-surrounded-by-trees-bosnia-herzegovina_181624-36432.jpg",
        },
        {
          title: "Alpine Trekking",
          description: "Guided paths through ancient forests and meadows.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/men-trekking-nature_23-2148106689.jpg",
        },
        {
          title: "Peak Climbing",
          description: "Breathtaking ascents with experienced mountain guides.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/person-climbing-mountains-around-watzmannhaus-sunny-day_181624-5842.jpg",
        },
        {
          title: "Winter Safaris",
          description: "Speed through snowy landscapes on exclusive tours.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/winter-scene-with-people-snowboarding_23-2151472510.jpg",
        },
        {
          title: "Mountain Yoga",
          description: "Morning sessions on the plateau at sunrise.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-practices-yoga-morning-terrace-fresh-air_1153-4922.jpg",
        },
        {
          title: "Sommelier Tastings",
          description: "Private tastings of the rarest Swiss wines.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/bottles-with-champagne-are-cooling-pail-with-ice-bottles-with-wine-are-near_8353-9526.jpg",
        },
        {
          title: "Observatory Nights",
          description: "Clear night-sky viewing at our private station.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-sitting-logs-near-campfire-mountains-sky-full-stars_651396-3451.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Impact"
      title="The Alpine Standard"
      description="Statistics that define our excellence in hospitality."
      metrics={[
        {
          icon: Star,
          title: "Guest Rating",
          value: "4.9/5",
        },
        {
          icon: Award,
          title: "Luxury Awards",
          value: "24",
        },
        {
          icon: Mountain,
          title: "Altitudes Reached",
          value: "4000m+",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialQuoteCards
      tag="Testimonials"
      title="Voices of the Mountains"
      testimonials={[
        {
          name: "Anna S.",
          role: "Traveler",
          quote: "The most exclusive experience in the Alps. Everything was perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg",
        },
        {
          name: "Marcus V.",
          role: "CEO",
          quote: "I have traveled everywhere, but this hospitality level is unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-beautiful-young-woman-portrait_23-2148148150.jpg",
        },
        {
          name: "Elena R.",
          role: "Architect",
          quote: "Beautifully designed space. A truly rejuvenating sanctuary.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9660.jpg",
        },
        {
          name: "James B.",
          role: "Adventureist",
          quote: "Unparalleled access to the best trails and powder in the world.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-dressed-black-sweater-posing_114579-81852.jpg",
        },
        {
          name: "Sophie M.",
          role: "Curator",
          quote: "The attention to detail and personal service was impeccable.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-smiling-woman-dressed-black-sweater-posing_114579-81856.jpg",
        },
      ]}
      description="What our distinguished guests have to say about their experience."
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Info"
      title="Frequently Asked"
      description="Everything you need for a seamless stay."
      items={[
        {
          question: "What is the best season to visit?",
          answer: "The Alps offer unique experiences year-round, from pristine winter skiing to lush summer hikes.",
        },
        {
          question: "Do you offer private transfers?",
          answer: "Yes, we provide luxury helicopter and chauffeured limousine services to our resort.",
        },
        {
          question: "Are children welcome?",
          answer: "We welcome families and provide specialized services to ensure everyone enjoys their stay.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/designer-sauna-heaters-geometric-forms-sunny-interior_169016-68905.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Inquiry"
      text="Start your journey to the summit of luxury. Contact our concierge team today."
      primaryButton={{
        text: "Contact Concierge",
        href: "#",
      }}
      secondaryButton={{
        text: "Check Availability",
        href: "#",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
