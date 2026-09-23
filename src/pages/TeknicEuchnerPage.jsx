import React from "react";
import PageLayout from "../layouts/PageLayout";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import ProductCard from "../components/ProductCard";
import WhyUsItem from "../components/WhyUsItem";
import ApplicationCard from "../components/ApplicationCard";
import StatCard from "../components/StatCard";
import { stats, products, whyUs, applications, contactInfo } from "../data";

/* ── Section Components ─────────────────────────────── */

const HeroSection = () => (
  <section className="bg-black text-white" aria-label="Hero">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 py-16 sm:py-24 items-center">
      <div>
        <Eyebrow>Industrial Sensing &amp; Control</Eyebrow>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Precision That Keeps Industry Moving.
        </h1>
        <p className="text-neutral-400 text-lg mb-8 max-w-lg leading-relaxed">
          Engineered sensing, switching and control solutions for machines that demand reliability. Trusted by manufacturers since 1989.
        </p>
        <Button href="#products">Explore Our Products</Button>
      </div>
      <div className="relative">
        <img src="/assets/hero_machine.png" alt="Precision machined industrial component" className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-2xl" />
      </div>
    </div>
  </section>
);

const IntroductionSection = () => (
  <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-label="Introduction">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div>
        <Eyebrow>Introduction</Eyebrow>
        <div className="grid grid-cols-2 gap-3 mt-4">
          <img src="/assets/sensors_intro.png" alt="Industrial sensors" className="w-full h-48 sm:h-56 object-cover rounded" loading="lazy" />
          <img src="/assets/robot_intro.png" alt="Robot arm in factory" className="w-full h-48 sm:h-56 object-cover rounded" loading="lazy" />
        </div>
      </div>
      <div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">
          Engineering You Can Rely On.{" "}
          <span className="text-red-600">Experience You Can Trust.</span>
        </h2>
        <p className="text-neutral-700 mb-4 leading-relaxed">
          Since 1989, Teknic Euchner has been building its expertise around one simple principle:{" "}
          <strong>industrial components should perform reliably, every time they are called upon.</strong>
        </p>
        <p className="text-neutral-700 mb-4 leading-relaxed">
          With the engineering know-how of Euchner Germany and decades of manufacturing experience in India,
          we develop control gear and sensing solutions for demanding industrial applications.
        </p>
        <p className="text-neutral-700 mb-8 leading-relaxed">
          From machine positioning and object detection to switching and safety-related applications, our
          products are built to deliver consistent performance where it matters most.
        </p>
        <Button href="#products">Discover Teknic Euchner</Button>
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section
    className="relative bg-cover bg-center text-white py-16 sm:py-24"
    style={{ backgroundImage: "url('/assets/stats_bg.png')" }}
    aria-label="Company stats"
  >
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Eyebrow>Our Journey</Eyebrow>
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12 max-w-lg">Decades of Engineering. Built for Industry.</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} desc={s.desc} />
        ))}
      </div>
    </div>
  </section>
);

const ProductsIntroSection = () => (
  <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24" id="products" aria-label="Products">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div>
        <Eyebrow>Our Products</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">The Right Control Gear for Every Application.</h2>
      </div>
      <div>
        <p className="text-neutral-700 mb-4 leading-relaxed">
          Industrial machines depend on components that can sense movement, detect position, control
          processes and respond when it matters.
        </p>
        <p className="text-neutral-700 mb-8 leading-relaxed">
          Teknic Euchner offers a focused range of industrial products engineered for reliable operation
          across demanding applications.
        </p>
        <Button href="#product-grid">Explore Our Products</Button>
      </div>
    </div>
  </section>
);

const ProductGridSection = () => (
  <section className="border-t border-neutral-200 bg-white" id="product-grid" aria-label="Product catalog">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2">
        {products.map((p) => (
          <ProductCard key={p.name} name={p.name} tag={p.tag} desc={p.desc} img={p.img} />
        ))}
      </div>
    </div>
  </section>
);

const WhyUsSection = () => (
  <section className="bg-neutral-50 px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-label="Why Teknic Euchner">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div>
        <Eyebrow>Why Teknic Euchner</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Built Around What Industry Needs.</h2>
        <p className="text-neutral-700 mb-8 leading-relaxed">
          Industrial environments leave little room for uncertainty. That's why our approach combines
          engineering expertise, robust materials and manufacturing experience to create products designed
          for dependable performance.
        </p>
        <img src="/assets/robot_welding.png" alt="Robotic welding in industrial setting" className="w-full h-56 sm:h-72 object-cover rounded-lg shadow-lg" loading="lazy" />
      </div>
      <div className="divide-y divide-neutral-300">
        {whyUs.map((w) => (
          <WhyUsItem key={w.title} title={w.title} desc={w.desc} />
        ))}
      </div>
    </div>
  </section>
);

const ApplicationsSection = () => (
  <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-label="Applications">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <Eyebrow>Our Applications</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Designed for Machines. Trusted Across Industries.</h2>
        </div>
        <p className="text-neutral-700 self-end leading-relaxed">
          Our products support the machines and systems that keep modern manufacturing moving.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {applications.map((a) => (
          <ApplicationCard key={a.name} name={a.name} desc={a.desc} img={a.img} />
        ))}
      </div>
    </div>
  </section>
);

const QualitySection = () => (
  <section className="bg-neutral-700 text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative overflow-hidden" aria-label="Quality">
    {/* Cable connector bleed from right */}
    <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 overflow-hidden pointer-events-none">
      <img src="/assets/cable_connectors.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>
    <div className="absolute right-0 bottom-0 h-1/2 w-1/2 opacity-10 overflow-hidden pointer-events-none">
      <img src="/assets/cable_connectors.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </div>

    <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6 leading-tight">Quality Isn't an Inspection. It's a Commitment.</h2>
        <div className="space-y-3 mb-8">
          <p className="font-mono text-sm sm:text-base leading-relaxed text-neutral-200">IT'S ABOUT CONSISTENT PERFORMANCE.</p>
          <p className="font-mono text-sm sm:text-base leading-relaxed text-neutral-200">IT'S ABOUT DEPENDABLE OPERATION.</p>
          <p className="font-mono text-sm sm:text-base leading-relaxed text-neutral-200">IT'S ABOUT BUILDING COMPONENTS THAT CUSTOMERS CAN SPECIFY WITH CONFIDENCE.</p>
        </div>
      </div>
      <div>
        <p className="mb-4 text-neutral-300 leading-relaxed">For industrial components, quality is about more than meeting a specification.</p>
        <p className="mb-8 text-neutral-300 leading-relaxed">
          At Teknic Euchner, quality is built into our approach to product development, manufacturing and customer service. Every product undergoes rigorous testing to ensure it performs reliably in the harshest industrial environments.
        </p>
        <Button href="#quality">View Our Quality Policy</Button>
      </div>
    </div>
  </section>
);

const DealerSection = () => (
  <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-label="Dealer network">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Eyebrow>Dealer Network</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Looking for Teknic Euchner Products?</h2>
        <p className="text-neutral-700 mb-8 leading-relaxed">
          Find an authorised dealer near you and get connected with the right product for your application.
        </p>
        <Button href="#dealers">Find a Dealer</Button>
      </div>
      <div className="flex justify-center">
        <img src="/assets/globe_illustration.png" alt="Global dealer network" className="w-full max-w-md h-56 sm:h-72 object-contain" loading="lazy" />
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="bg-black text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-24" aria-label="Final call to action">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">Let's Find the Right Solution for Your Application.</h2>
        <p className="text-neutral-400 mb-8 leading-relaxed max-w-lg">
          Whether you're designing a new machine, upgrading an existing system or looking for a reliable replacement, our team can help you identify the right control gear for your requirements.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" href="#contact">Talk to Our Team</Button>
          <Button href="#products">Explore Our Products</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/assets/limit_switch_product.png" alt="Limit switch product" className="w-full max-w-md h-56 sm:h-72 object-contain" loading="lazy" />
      </div>
    </div>
  </section>
);

/* ── Main Page ──────────────────────────────────────── */

const TeknicEuchnerPage = () => (
  <PageLayout>
    <HeroSection />
    <IntroductionSection />
    <StatsSection />
    <ProductsIntroSection />
    <ProductGridSection />
    <WhyUsSection />
    <ApplicationsSection />
    <QualitySection />
    <DealerSection />
    <FinalCTASection />
  </PageLayout>
);

export default TeknicEuchnerPage;
