import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  Check,
  ChevronRight,
  CreditCard,
  ExternalLink,
  Globe2,
  Instagram,
  LayoutDashboard,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  PlayCircle,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Send,
  Truck,
  Users,
  Youtube,
  Zap,
} from 'lucide-react';
import './styles.css';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  ['100+', 'Businesses'],
  ['50K+', 'Orders processed'],
  ['99.9%', 'Uptime'],
  ['24/7', 'Managed hosting'],
];

const painPoints = [
  'Expensive development',
  'Technical maintenance',
  'Multiple software subscriptions',
  'Difficult scaling',
  'Poor customer experience',
];

const features = [
  [Store, 'Store Builder', 'Create your branded online store without writing a line of code.'],
  [Boxes, 'Product Management', 'Organize unlimited products, categories, pricing, and stock with ease.'],
  [PackageCheck, 'Order Tracking', 'Track every order in real time from checkout to delivery.'],
  [Users, 'Customer Management', 'Keep profiles, purchase history, and repeat customer insights together.'],
  [BarChart3, 'Analytics Dashboard', 'See revenue, conversion, inventory, and growth signals at a glance.'],
  [Search, 'SEO Optimization', 'Launch with fast pages, clean metadata, and search-ready storefronts.'],
];

const productStory = [
  [LayoutDashboard, 'Admin Panel', 'Add products, manage pricing, inventory, customers, and orders.'],
  [Store, 'Customer Portal', 'Every product appears instantly in a polished mobile-ready storefront.'],
  // [CreditCard, 'Payment Flow', 'Customer orders reflect in admin with payment and order status.'],
  [Truck, 'Delivery Updates', 'Admin changes delivery status and customers see live progress.'],
  // [BarChart3, 'Analytics', 'Track revenue, daily orders, catalog growth, and business performance.'],
  // [Globe2, 'Domain + Hosting', 'Launch with your own domain, secure hosting, SEO, and scale support.'],
];

const workflow = [
  ['01', 'Admin adds products', 'Upload product images, prices, variants, categories, inventory, SEO data, and offers from the admin panel.'],
  ['02', 'Customer portal updates', 'Every approved product reflects instantly in the customer storefront with mobile-ready product pages.'],
  ['03', 'Customer places order', 'A shopper signs up, adds products to cart, checks out, and completes a demo order with payment status.'],
  ['04', 'Admin manages delivery', 'The order appears in admin with payment status, customer details, order value, and delivery controls.'],
  ['05', 'Live user updates', 'When admin changes delivery status, the customer portal updates live so buyers always know what is happening.'],
];

const plans = [
  ['Starter', '₹6,999', 'For brands launching their first serious online store', ['Up to 100 products', 'Up to 1,000 orders a day', 'Design customization available', 'Hosting, storefront, admin panel']],
  ['Growth', '₹14,999', 'For fast-moving stores with higher daily volume', ['Up to 200 products', 'Up to 5,000 orders a day', 'Design customization available', 'Analytics and order workflows'], true],
  ['Scale', '₹24,999', 'For stores ready for unlimited catalog and order growth', ['Unlimited products', 'Unlimited orders', 'Design customization available', 'Priority scaling support']],
  ['Enterprise Edition', 'Please contact', 'For worldwide supply, trillion users, and fully customized commerce systems', ['Worldwide supply operations', 'Trillion-user scale planning', 'Customized architecture and UI', 'Dedicated consultation']],
];

const faqItems = [
  ['What is Ready To Scale?', 'Ready To Scale is an eCommerce platform that helps businesses launch an online store with a customer storefront, admin panel, product management, order management, payments, delivery updates, analytics, SEO and hosting.'],
  ['Can I manage products and orders from one admin panel?', 'Yes. The admin panel lets you add products, manage catalog details, see customer orders, view payment status and update delivery status.'],
  ['Does Ready To Scale include a customer portal?', 'Yes. Customers can use the portal to browse products, sign up, place demo orders and receive live delivery status updates.'],
  ['Is design customization available?', 'Design customization is available across Ready To Scale plans so the storefront can match your business identity.'],
  ['Does Ready To Scale support domain, hosting and SEO?', 'Yes. Ready To Scale supports own business domain setup, managed hosting and SEO-ready storefront pages.'],
];

const whatsappLink = `https://wa.me/919659245977?text=${encodeURIComponent(
  'Hi Ready To Scale team, I want to launch my online store. Please guide me with pricing, demo, and setup details.'
)}`;

function AdminLoginInfo({ compact = false }) {
  return (
    <div className={`admin-login-info ${compact ? 'compact' : ''}`}>
      <span>Admin login</span>
      <strong>Username: admin@readytoscale.in</strong>
      <strong>Password: 12345678</strong>
    </div>
  );
}

function BrandLogo({ large = false }) {
  return (
    <span className={`brand-logo ${large ? 'large' : ''}`} aria-hidden="true">
      <span className="brand-orbit" />
      <img className="brand-logo-image" src="/assets/readytoscale_logo_R.png" alt="" />
    </span>
  );
}

function LoadingScreen({ visible }) {
  return (
    <div className={`loading-screen ${visible ? '' : 'loaded'}`} aria-hidden={!visible}>
      <div className="loader-particles">
        {Array.from({ length: 16 }).map((_, index) => <span key={index} style={{ '--i': index }} />)}
      </div>
      <BrandLogo large />
      <strong>Ready To Scale</strong>
      <p>Preparing your commerce engine</p>
      <div className="loader-track"><span /></div>
    </div>
  );
}

function DemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const handleKeydown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeydown);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close demo modal">x</button>
        <div className="modal-copy">
          <span className="section-kicker">Live demo</span>
          <h2 id="demo-modal-title">Try The Storefront And Admin Workflow</h2>
          <p>Open the customer portal to sign up and place a demo order, then use the admin panel to add products, see orders, confirm payment status, and update delivery progress.</p>
        </div>
        <div className="modal-flow" aria-hidden="true">
          <div className="modal-node admin-node"><LayoutDashboard size={20} /> Add products</div>
          <div className="modal-sync"><span /><RefreshCw size={32} /></div>
          <div className="modal-node user-node"><Store size={20} /> Demo order</div>
          <div className="modal-status"><Truck size={18} /> Live delivery update</div>
        </div>
        <div className="modal-actions">
          <a className="button primary" href="https://user.readytoscale.in" target="_blank" rel="noreferrer">User Portal <ExternalLink size={17} /></a>
          <a className="button secondary" href="https://admin.readytoscale.in" target="_blank" rel="noreferrer">Admin Panel <ExternalLink size={17} /></a>
          <AdminLoginInfo compact />
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', contactDetails: '', message: '' });
  const [status, setStatus] = useState('idle');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://mail.gentrobyte.com/sendmail/readytoscale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contactDetails: form.contactDetails,
          message: form.message,
          source: 'Ready To Scale landing page',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setForm({ name: '', contactDetails: '', message: '' });
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={updateField} required placeholder="Your name" />
      </label>
      <label>
        Contact Details
        <input name="contactDetails" value={form.contactDetails} onChange={updateField} required placeholder="Phone or email" />
      </label>
      <label>
        Message
        <textarea name="message" value={form.message} onChange={updateField} required placeholder="Tell us about your business" rows="5" />
      </label>
      <button className="button primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={17} />
      </button>
      {status === 'success' && (
        <p className="form-status success">
          Sent Successfully... For faster connect, send a message in{' '}
          <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>.
        </p>
      )}
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <div>
        <span className="section-kicker">Contact us</span>
        {/* <h2>Tell Us What You Want To Sell</h2> */}
        <p>Share your details and message. Our team will help you choose the right store setup, demo path, and launch plan.</p>
      </div>
      <div className="contact-highlight">
        <a className="contact-line phone-line" href="tel:+919659245977">
          <Phone size={22} />
          <span>
            <small>Call / WhatsApp</small>
            <strong>(+91) 9659245977</strong>
          </span>
        </a>
        <div className="contact-line">
          <MapPin size={22} />
          <span>
            <small>Office</small>
            <strong>Ready To Scale by Gentrobyte AI Labs</strong>
            <em>9th floor, BLOCK D3, Manyata Tech Park Rd, Manayata Tech Park, Thanisandra, Bengaluru, Karnataka 560045</em>
          </span>
        </div>
        <div className="gst-line">GST: 33DKUPP4601K1ZR</div>
      </div>
    </div>
  );
}

function ProcessAnimation() {
  return (
    <div className="flow-stage" aria-label="Animated order flow from admin to customer portal">
      <div className="portal-card admin-screen">
        <div className="portal-top"><LayoutDashboard size={17} /> Admin Panel</div>
        <div className="admin-form">
          <span>Product image</span>
          <span>Price: ₹1,499</span>
          <span>Stock: 240</span>
          <button type="button">Add Product</button>
        </div>
      </div>
      <div className="sync-lane">
        <span className="data-chip chip-product"><ShoppingBag size={15} /> Product live</span>
        <span className="data-chip chip-order"><CreditCard size={15} /> Paid order</span>
        <span className="data-chip chip-status"><Truck size={15} /> Out for delivery</span>
        <div className="sync-line" />
      </div>
      <div className="portal-card customer-screen">
        <div className="portal-top"><Store size={17} /> Customer Portal</div>
        <div className="phone-store">
          <div className="mini-product" />
          <strong>New arrival</strong>
          <span>Live catalog update</span>
          <button type="button">Order now</button>
        </div>
        <div className="live-toast"><Bell size={15} /> Delivery status updated</div>
      </div>
    </div>
  );
}

function VisualShowcase() {
  return (
    <section className="visual-story section-pad">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Premium store experience</span>
        <h2>Dashboards, storefronts, and updates that feel alive</h2>
      </div>
      <div className="visual-grid">
        <figure className="generated-visual" data-reveal>
          <img src="/assets/commerce-platform-visual.png" alt="Premium eCommerce dashboard and mobile storefront mockup" />
        </figure>
        <div className="demo-reel" data-reveal>
          <div className="reel-header">
            <span><PlayCircle size={18} /> Live sync demo</span>
            <strong>00:24</strong>
          </div>
          <div className="reel-scene">
            <div className="reel-card add-card">Admin adds product</div>
            <div className="reel-card user-card">Customer sees it</div>
            <div className="reel-card order-card">Order + payment arrives</div>
            <div className="reel-card ship-card">Delivery status updates</div>
            <RefreshCw className="reel-spinner" size={42} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="faq section-pad">
      <div className="section-heading" data-reveal>
        <span className="section-kicker">Questions businesses ask</span>
        <h2>Ready To Scale, Explained Clearly</h2>
      </div>
      <div className="faq-grid" data-stagger>
        {faqItems.map(([question, answer]) => (
          <article className="faq-item" key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function useLandingAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from('.nav', { y: -24, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero-copy > *', {
        y: 34,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      });
      gsap.from('.product-info-card', {
        y: 40,
        rotateX: 14,
        rotateY: -18,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
      gsap.to('.product-info-card', {
        y: -14,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.parallax-glow', {
        yPercent: 18,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 84%',
          },
        });
      });

      gsap.utils.toArray('[data-stagger]').forEach((section) => {
        gsap.from(section.children, {
          y: 34,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 82%',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
}

function ParticleField() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 38 }).map((_, index) => (
        <span
          key={index}
          style={{
            '--x': `${(index * 37) % 100}%`,
            '--y': `${(index * 53) % 100}%`,
            '--d': `${5 + (index % 8)}s`,
            '--s': `${2 + (index % 4)}px`,
          }}
        />
      ))}
    </div>
  );
}

function ProductInfoCard() {
  return (
    <div className="product-info-card" aria-label="Ready To Scale product summary">
      <div className="info-card-bg" aria-hidden="true" />
      <div className="info-card-header">
        <div className="info-brand">
          <BrandLogo />
          <div>
            <span>Ready To Scale</span>
            <strong>One platform to launch, sell, and scale</strong>
          </div>
        </div>
        <div className="live-badge"><Sparkles size={16} /> Live sync</div>
      </div>

      <div className="story-card-body">
        <div className="story-orbit" aria-hidden="true">
          <span className="orbit-path" />
          <span className="orbit-chip chip-admin"><LayoutDashboard size={15} /> Admin</span>
          <span className="orbit-chip chip-store"><Store size={15} /> Store</span>
          <span className="orbit-chip chip-pay"><CreditCard size={15} /> Paid</span>
          <span className="orbit-chip chip-ship"><Truck size={15} /> Delivery</span>
          <div className="story-core">
            <Store size={42} />
            <strong>Commerce OS</strong>
            <small>Storefront + admin + customer portal</small>
          </div>
        </div>

        <div className="story-feed">
          <div className="feed-item feed-one"><ShoppingBag size={18} /><span>Admin adds product</span></div>
          <div className="feed-item feed-two"><Store size={18} /><span>Customer sees live catalog</span></div>
          <div className="feed-item feed-three"><CreditCard size={18} /><span>Order + payment reaches admin</span></div>
          <div className="feed-item feed-four"><Truck size={18} /><span>Delivery status updates user</span></div>
          {/* <div className="feed-metric">
            <span>Daily capacity</span>
            <strong>Unlimited growth</strong>
          </div> */}
        </div>
      </div>

      <div className="capability-strip">
        {productStory.map(([Icon, title, copy]) => (
          <div className="capability-item" key={title}>
            <Icon size={18} />
            <span>{title}</span>
            <small>{copy}</small>
          </div>
        ))}
      </div>

      <div className="info-card-footer">
        <span><Globe2 size={15} /> Own domain</span>
        <span><ShieldCheck size={15} /> Managed hosting</span>
        <span><Search size={15} /> SEO ready</span>
      </div>
    </div>
  );
}

function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  useLandingAnimations();

  useEffect(() => {
    const minimumDelay = new Promise((resolve) => setTimeout(resolve, 2000));
    const pageLoaded = document.readyState === 'complete'
      ? Promise.resolve()
      : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

    Promise.all([minimumDelay, pageLoaded]).then(() => setIsLoading(false));
  }, []);

  const openDemoModal = (event) => {
    event.preventDefault();
    setIsDemoOpen(true);
  };

  return (
    <div ref={containerRef} className="app">
      <LoadingScreen visible={isLoading} />
      <DemoModal open={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
      <header className="nav">
        <a className="logo" href="#top"><BrandLogo /> Ready To Scale</a>
        <nav>
          <a href="#features">Platform</a>
          <a href="#process">How it works</a>
          <a href="#demo">Live demo</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <a className="nav-cta" href="#demo" onClick={openDemoModal}>Start Free Trial <ChevronRight size={16} /></a>
      </header>

      <section id="top" className="hero">
        <ParticleField />
        <div className="parallax-glow glow-one" />
        <div className="parallax-glow glow-two" />
        <div className="hero-copy">
          <div className="eyebrow"><Zap size={16} /> Launch. Sell. Scale.</div>
          <h1>Launch Your Online Store In Minutes</h1>
          <p>
            Ready To Scale gives your business everything needed to sell online,
            manage orders, and grow without technical complexity.
          </p>
          <div className="hero-actions">
            <a className="button primary pulse" href="#demo" onClick={openDemoModal}>Start Free Trial <ArrowRight size={18} /></a>
            <a className="button secondary" href="#demo" onClick={openDemoModal}>Book Demo</a>
          </div>
          <div className="hero-trust">
            <span><ShieldCheck size={16} /> Hosting included</span>
            <span><CreditCard size={16} /> Payments ready</span>
            <span><Globe2 size={16} /> Own domain</span>
          </div>
        </div>
        <ProductInfoCard />
      </section>

      <section className="logos-section section-pad" data-reveal>
        <p className="section-kicker">Trusted by ambitious local brands</p>
        <div className="logo-strip" data-stagger>
          {['Luna Boutique', 'Urban Cart', 'Bloom Foods', 'Kraft Lab', 'Thrupthi Foods'].map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <div className="metrics" data-stagger>
          {metrics.map(([value, label]) => (
            <div className="metric" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="problem section-pad">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">The old way is costly</span>
          <h2>Growing Online Shouldn't Be Complicated</h2>
        </div>
        <div className="comparison">
          <div className="pain-panel" data-stagger>
            {painPoints.map((point) => (
              <div className="pain-item" key={point}><span>x</span>{point}</div>
            ))}
          </div>
          <div className="solution-panel" data-reveal>
            <div className="solution-orbit"><Store size={54} /></div>
            <h3>One managed platform</h3>
            <p>Your storefront, domain, products, customers, orders, analytics, payments, SEO, and hosting live in one premium operating system.</p>
          </div>
        </div>
      </section>

      <section id="features" className="features section-pad">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Complete commerce stack</span>
          <h2>Everything You Need In One Platform</h2>
        </div>
        <div className="feature-grid" data-stagger>
          {features.map(([Icon, title, copy]) => (
            <article className="feature-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process section-pad">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Simple by design</span>
          <h2>From Admin Product Entry To Live Customer Updates</h2>
          <p>Ready To Scale connects the admin panel and customer portal as one live commerce system, so every product, payment, and delivery status stays in sync.</p>
        </div>
        <ProcessAnimation />
        <div className="steps workflow-steps" data-stagger>
          {workflow.map(([number, title, copy]) => (
            <article className="step" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <VisualShowcase />

      <section id="demo" className="live-demo section-pad">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Live demo</span>
          <h2>Try The Storefront And Admin Workflow</h2>
          <p>Use the customer portal to sign up and place a demo order, then manage products, orders, payments, and delivery status from the admin experience.</p>
        </div>
        <div className="demo-actions" data-stagger>
          <a className="demo-card" href="https://user.readytoscale.in" target="_blank" rel="noreferrer">
            <Store size={28} />
            <span>User Portal</span>
            <strong>Signup and do demo order</strong>
            <small>Open user.readytoscale.in <ExternalLink size={14} /></small>
          </a>
          <a className="demo-card admin-demo" href="https://admin.readytoscale.in" target="_blank" rel="noreferrer">
            <LayoutDashboard size={28} />
            <span>Admin Panel</span>
            <strong>Add products, see orders, update delivery status</strong>
            <AdminLoginInfo />
            <small>Open admin panel <ExternalLink size={14} /></small>
          </a>
        </div>
      </section>

      <section id="pricing" className="pricing section-pad">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Built to grow</span>
          <h2>Start Small. Scale Without Limits.</h2>
        </div>
        <div className="plans" data-stagger>
          {plans.map(([name, price, copy, items, highlighted]) => (
            <article className={`plan ${highlighted ? 'highlighted' : ''}`} key={name}>
              <div>
                <h3>{name}</h3>
                <p>{copy}</p>
              </div>
              <strong>{price}</strong>
              {items.map((item) => <span className="checkline" key={item}><Check size={16} /> {item}</span>)}
              <a className="button plan-button" href={name === 'Enterprise Edition' ? '#contact' : '#demo'}>
                {name === 'Enterprise Edition' ? 'Contact Sales' : `Choose ${name}`}
              </a>
            </article>
          ))}
        </div>
      </section>

      <FAQSection />

      <section id="contact" className="cta section-pad" data-reveal>
        <div className="cta-inner">
          <div>
            <span className="section-kicker">Ready when you are</span>
            <h2>Give Your Business A Store Built For Growth</h2>
            <p>Launch with a premium storefront, managed infrastructure, and the dashboards you need to keep selling smarter.</p>
          </div>
          <a className="button primary" href="#demo" onClick={openDemoModal}>Start Free Trial <ArrowRight size={18} /></a>
        </div>
        <div className="contact-panel">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with Ready To Scale on WhatsApp">
        <MessageCircle size={30} />
      </a>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="footer-logo" href="#top" aria-label="Ready To Scale home">
            <img src="/assets/readytoscale_logo_with_name.png" alt="Ready To Scale" />
          </a>
          <p>A complete eCommerce operating system for ambitious businesses.</p>
          <a className="powered-by" href="https://gentrobyte.com" target="_blank" rel="noreferrer">Engineered by Gentrobyte AI Labs <ExternalLink size={14} /></a>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="https://user.readytoscale.in" target="_blank" rel="noreferrer">Customer Panel Demo</a>
          <a href="https://admin.readytoscale.in" target="_blank" rel="noreferrer">Admin Panel Demo</a>
          {/* <AdminLoginInfo compact /> */}
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <h3>Social</h3>
          <a href="https://www.instagram.com/readytoscaleyourbusiness/" target="_blank" rel="noreferrer"><Instagram size={16} /> Instagram</a>
          <a href="https://x.com/ready_to_scale" target="_blank" rel="noreferrer">X</a>
          <a href="https://www.youtube.com/@ReadyToScale" target="_blank" rel="noreferrer"><Youtube size={16} /> YouTube</a>
          <a href="mailto:info@readytoscale.in"><Mail size={16} /> Email</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
