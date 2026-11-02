import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { MagneticCta, PageHero } from "@/components/site/page-hero";
import { SiteShell } from "@/components/site/shell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mohid Imran | Discuss Your Development Project" },
      {
        name: "description",
        content:
          "Contact Mohid Imran about Shopify, WordPress, web applications or automation. Share your website, project requirements or technical issue to discuss the next step.",
      },
      {
        property: "og:title",
        content: "Contact Mohid Imran | Discuss Your Development Project",
      },
      {
        property: "og:description",
        content:
          "Contact Mohid Imran about Shopify, WordPress, web applications or automation. Share your website, project requirements or technical issue to discuss the next step.",
      },
    ],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Shopify Store Development or Redesign",
  "Shopify Theme Development",
  "Shopify Apps or Integrations",
  "Headless Shopify Development",
  "Shopify Fixes or Ongoing Support",
  "Store Speed or Conversion Improvements",
  "WordPress or WooCommerce",
  "Custom Web Application",
  "SaaS or MVP Development",
  "Dashboard, Portal or Internal Tool",
  "Automation or Web Scraping",
  "I’m Not Sure Yet",
];

const inquiryHelp = [
  {
    title: "For a New Website or Store",
    text: "Explain what your business offers, who the website serves and what visitors should be able to do. Include any existing designs or reference websites.",
  },
  {
    title: "For a Technical Problem",
    text: "Share the affected page, what you expected to happen and what actually happens. Mention any recent changes that may be relevant.",
  },
  {
    title: "For a Custom Application",
    text: "Describe the users, their main tasks and the information the application needs to manage. Existing spreadsheets or systems can be discussed during the review.",
  },
  {
    title: "For Automation or Data Collection",
    text: "Explain the repeated task, the tools or sources involved and the output you need.",
  },
];

const nextSteps = [
  {
    title: "Review the Requirement",
    text: "I review the information you provide to understand the project and whether it fits my development work.",
  },
  {
    title: "Clarify the Details",
    text: "If needed, we discuss the missing requirements, relevant access and any investigation required before estimating implementation.",
  },
  {
    title: "Define the Scope",
    text: "For a suitable project, we agree on the deliverables, responsibilities, estimated timeline and commercial terms before work begins.",
  },
];

const faqs = [
  {
    q: "Can I contact you before I know exactly what I need?",
    a: "Yes. Describe the problem or intended outcome. We can identify which details need to be clarified.",
  },
  {
    q: "Do you take smaller development tasks?",
    a: "You can inquire about a focused fix or feature. Suitability depends on the requirement and availability.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely. Communication, review points and suitable working-hour overlap are agreed before starting.",
  },
  {
    q: "Can you estimate the project from the first message?",
    a: "Sometimes the information is sufficient for an initial estimate. More complex requirements or unknown technical problems may need further review.",
  },
  {
    q: "Should I send access credentials with my inquiry?",
    a: "No. Start with the relevant URLs and a description. Appropriate access can be arranged after discussing the work.",
  },
  {
    q: "Can we discuss an existing project another developer started?",
    a: "Yes. Explain its current state and what you need completed. The code, documentation and dependencies may need review before the work can be confirmed.",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  company: string;
  website: string;
  service: string;
  details: string;
  timeline: string;
  budget: string;
};

const emptyForm: FormFields = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  details: "",
  timeline: "",
  budget: "",
};

function ContactPage() {
  const [fields, setFields] = useState<FormFields>(emptyForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldError, setFieldError] = useState<string | null>(null);

  function updateField<K extends keyof FormFields>(key: K, value: FormFields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (fieldError) setFieldError(null);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFieldError(null);

    const name = fields.name.trim();
    const email = fields.email.trim();
    const service = fields.service.trim();
    const details = fields.details.trim();

    if (!name || !email || !service || !details) {
      setFieldError(
        "Please complete your name, email address, service selection and project details.",
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError("Please enter a valid email address so I can contact you.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/mirzamohidimran@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Project inquiry from ${name}`,
          _template: "table",
          name,
          email,
          company: fields.company.trim() || "Not provided",
          website: fields.website.trim() || "Not provided",
          service,
          details,
          timeline: fields.timeline.trim() || "Not provided",
          budget: fields.budget.trim() || "Not provided",
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      setFields(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact Mohid Imran"
        breadcrumb={[{ label: "Home", to: "/" }, { label: "Contact" }]}
        title={
          <>
            What Do You Need to Build, Change{" "}
            <span className="font-serif italic text-acid">or Fix?</span>
          </>
        }
        actions={
          <>
            <MagneticCta href="#inquiry-form">Share Your Project</MagneticCta>
            <MagneticCta to="/services" variant="ghost">
              Explore Services
            </MagneticCta>
          </>
        }
        rail="Shopify · Full Stack · WordPress · Automation · Project Scoping"
      >
        <p>Tell me about your project or the problem you are facing.</p>
        <p>
          You might need a new Shopify store, help with an existing website, a custom web
          application or a more practical way to handle repetitive work.
        </p>
        <p>You do not need a complete technical brief to start.</p>
      </PageHero>

      <section
        id="inquiry-form"
        className="scroll-mt-28 bg-bone px-6 py-24 text-ink md:px-10 md:py-40"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Inquiry Form
            </p>
            <h2 className="mt-6 max-w-md font-display text-4xl leading-[0.95] tracking-tight md:text-5xl">
              Give Me a Useful
              <span className="font-serif italic text-acid"> Starting Point</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist md:text-base">
              Share what you know about the requirement. If some details are undecided, explain the
              outcome you want and what is currently getting in the way.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            {status === "success" ? (
              <div className="border border-ink/10 px-6 py-12 md:px-10 md:py-16">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-acid">/ Sent</p>
                <h3 className="mt-6 font-display text-3xl leading-[0.95] tracking-tight md:text-5xl">
                  Your Inquiry Has Been
                  <span className="font-serif italic text-acid"> Sent</span>
                </h3>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
                  Thank you for sharing the details. I’ll review your message and use the email
                  address provided to follow up.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-10 inline-flex items-center gap-2 border-b border-ink/30 pb-1 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-acid hover:text-acid"
                >
                  Send Another Inquiry →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-ink/10 px-6 py-8 md:px-10 md:py-12"
              >
                {status === "error" ? (
                  <div className="mb-8 border border-ink/15 bg-ink/[0.03] px-5 py-5">
                    <h3 className="font-serif text-2xl italic">Your Inquiry Could Not Be Sent</h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                      Please try again. If the problem continues, email your project details to{" "}
                      <a
                        href="mailto:mirzamohidimran@gmail.com"
                        className="underline decoration-acid/50 underline-offset-4 transition-colors hover:text-acid"
                      >
                        mirzamohidimran@gmail.com
                      </a>
                      .
                    </p>
                  </div>
                ) : null}

                {fieldError ? (
                  <p
                    role="alert"
                    className="mb-6 border border-ink/15 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink"
                  >
                    {fieldError}
                  </p>
                ) : null}

                <div className="grid gap-6 md:grid-cols-2">
                  <Field
                    label="Your Name"
                    required
                    name="name"
                    value={fields.name}
                    placeholder="Your full name"
                    onChange={(value) => updateField("name", value)}
                  />
                  <Field
                    label="Email Address"
                    required
                    name="email"
                    type="email"
                    value={fields.email}
                    placeholder="Where I can contact you"
                    onChange={(value) => updateField("email", value)}
                  />
                  <Field
                    label="Company or Business"
                    name="company"
                    value={fields.company}
                    placeholder="Your business or agency name"
                    onChange={(value) => updateField("company", value)}
                  />
                  <Field
                    label="Website or Application URL"
                    name="website"
                    type="url"
                    value={fields.website}
                    placeholder="Link to the existing website or application"
                    onChange={(value) => updateField("website", value)}
                  />
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="service"
                    className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist"
                  >
                    What Do You Need Help With? <span className="text-acid">— Required</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={fields.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="mt-2 w-full appearance-none rounded-none border border-ink/20 bg-transparent px-4 py-3 text-ink focus:border-acid focus:outline-none"
                  >
                    <option value="">Select a service area</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="details"
                    className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist"
                  >
                    Project Details <span className="text-acid">— Required</span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={6}
                    value={fields.details}
                    placeholder="What do you want to build or improve? Describe the current situation, required features and any useful examples."
                    onChange={(e) => updateField("details", e.target.value)}
                    className="mt-2 w-full resize-y border border-ink/20 bg-transparent px-4 py-3 text-ink placeholder:text-mist focus:border-acid focus:outline-none"
                  />
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <Field
                    label="Preferred Timeline"
                    name="timeline"
                    value={fields.timeline}
                    placeholder="Your target date, or let me know if it is flexible"
                    onChange={(value) => updateField("timeline", value)}
                  />
                  <Field
                    label="Approximate Budget"
                    name="budget"
                    value={fields.budget}
                    placeholder="Your working budget and currency, if known"
                    onChange={(value) => updateField("budget", value)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-acid hover:text-ink disabled:cursor-wait disabled:opacity-70 md:w-auto md:text-xs"
                >
                  {status === "submitting" ? "Sending Inquiry…" : "Send Project Inquiry"}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mist">
                  Please share project information only. Keep passwords, API keys, payment details
                  and confidential customer information out of this form.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Help With Your Inquiry
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Should You
            <span className="font-serif italic text-acid"> Include?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {inquiryHelp.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            A short, clear explanation is enough to begin the conversation.
          </p>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Direct Contact
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              Prefer to Start With
              <span className="font-serif italic text-acid"> an Email?</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>Send your project details directly to:</p>
              <p>
                <a
                  href="mailto:mirzamohidimran@gmail.com"
                  className="font-serif text-2xl italic text-ink transition-colors hover:text-acid md:text-3xl"
                >
                  mirzamohidimran@gmail.com
                </a>
              </p>
              <p>
                A website link and a description of the requirement will help me understand the
                starting point.
              </p>
            </div>
            <dl className="mt-10 max-w-xl space-y-4 border-t border-ink/10 pt-8">
              <div className="grid gap-2 sm:grid-cols-3 sm:items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  Location
                </dt>
                <dd className="sm:col-span-2 text-base text-ink">Lahore, Pakistan</dd>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 sm:items-baseline">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                  Working Arrangement
                </dt>
                <dd className="sm:col-span-2 text-base text-ink">
                  Remote projects with businesses and agencies
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / After You Get in Touch
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            What Happens
            <span className="font-serif italic text-acid"> Next?</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {nextSteps.map((step, i) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.55 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl italic md:col-span-4 md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-bone/70 md:col-span-7 md:text-base">
                  {step.text}
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-base leading-relaxed text-bone/70 md:text-lg">
            Sending an inquiry starts the discussion. Development begins after the engagement is
            agreed.
          </p>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
              / Working Together
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              New Builds, Focused Fixes and
              <span className="font-serif italic text-acid"> Agency Support</span>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mist md:text-lg">
              <p>
                You can get in touch about a complete project or a specific development requirement.
              </p>
              <p>
                I also work with agencies that need implementation assistance. Share the work
                involved, your review process and how you would like responsibilities organized.
              </p>
              <p>
                If the requirement needs a different service or further investigation, we can
                establish that during the initial discussion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">
            / Frequently Asked Questions
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Frequently Asked
            <span className="font-serif italic text-acid"> Questions</span>
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, i) => (
              <motion.article
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="grid gap-4 py-8 md:grid-cols-12 md:gap-8"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-acid md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-serif text-2xl italic md:text-3xl">{item.q}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-bone/70 md:text-base">
                    {item.a}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone px-6 py-24 text-ink md:px-10 md:py-40">
        <div className="mx-auto max-w-[1400px] border-y border-ink/10 py-14 md:py-20 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-mist">/ Next</p>
          <h2 className="mx-auto mt-6 max-w-5xl font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
            Start With the Problem You Want
            <span className="font-serif italic text-acid"> to Solve</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            A clear description helps us work out whether you need a focused fix, an initial
            investigation or a wider development project.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row justify-center items-center">
            <a
              href="#inquiry-form"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:bg-acid hover:text-ink md:text-xs"
            >
              Share Your Project
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↓
              </span>
            </a>
            <Link
              to="/portfolio"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-acid hover:text-acid md:text-xs"
            >
              View My Work
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  onChange,
  required = false,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
        {label}{" "}
        {required ? (
          <span className="text-acid">— Required</span>
        ) : (
          <span className="text-mist/70">— Optional</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-ink/20 bg-transparent px-4 py-3 text-ink placeholder:text-mist focus:border-acid focus:outline-none"
      />
    </div>
  );
}

function SecondaryLink({ children, to }: { children: string; to: "/services" | "/portfolio" }) {
  return (
    <Link
      to={to}
      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid md:text-xs"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </Link>
  );
}
