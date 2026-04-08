import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router";
import facebookIcon from "@/assets/ic_baseline-facebook.svg";
import youtubeIcon from "@/assets/line-md_youtube-filled.svg";
import linkedinIcon from "@/assets/mdi_linkedin.svg";
import instagramIcon from "@/assets/ri_instagram-fill.svg";
import { useLanguage } from "../contexts/language-context";

type FooterFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  isRTL: boolean;
  type?: string;
  multiline?: boolean;
};

type FooterNavLinkProps = {
  to: string;
  label: string;
  isRTL: boolean;
};

function FooterNavLink({ to, label, isRTL }: FooterNavLinkProps) {
  return (
    <Link
      to={to}
      className="group inline-flex w-full items-center py-1 text-[14px] font-normal text-white transition-colors duration-300 hover:text-[#2DABE2]"
      style={{
        fontFamily: isRTL
          ? "'DIN Next LT W23', 'Cairo', sans-serif"
          : '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <span className="relative inline-flex w-full max-w-full pb-1">
        <span className="whitespace-normal break-words">{label}</span>
        <span
          className={`absolute bottom-0 h-[2px] w-full bg-[#2DABE2] transition-transform duration-300 ease-out ${
            isRTL ? "right-0 origin-right" : "left-0 origin-left"
          } scale-x-0 group-hover:scale-x-100`}
        />
      </span>
    </Link>
  );
}

function FooterField({
  id,
  label,
  value,
  onChange,
  isRTL,
  type = "text",
  multiline = false,
}: FooterFieldProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute transition-all duration-300 ${isRTL ? "right-0" : "left-0"}`}
        style={{
          top: isActive ? "0.55rem" : "1rem",
          [isRTL ? "right" : "left"]: "1rem",
          fontSize: isActive ? "10px" : "14px",
          letterSpacing: isActive ? "0.08em" : "0.01em",
          color: isActive ? "#2DABE2" : "rgba(11, 23, 40, 0.42)",
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={3}
          className="block w-full resize-none rounded-[14px] bg-[#EEF2F5] px-4 pb-4 pt-7 text-[15px] text-[#0E2233] outline-none transition-all duration-300"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="h-[56px] w-full rounded-[14px] bg-[#EEF2F5] px-4 pb-3 pt-5 text-[15px] text-[#0E2233] outline-none transition-all duration-300"
          style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
        />
      )}

      <span
        className="pointer-events-none absolute inset-0 rounded-[14px] border transition-all duration-300"
        style={{
          borderColor: focused ? "#2DABE2" : "rgba(14,34,51,0.08)",
          boxShadow: focused ? "0 0 0 3px rgba(45,171,226,0.14)" : "none",
        }}
      />
    </div>
  );
}

export function Footer() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const magneticButtonRef = useRef<HTMLButtonElement>(null);

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.message.trim().length > 0;

  const headerFont = isRTL
    ? "'DIN Next LT W23', 'Cairo', sans-serif"
    : '"Helvetica Neue", Helvetica, Arial, sans-serif';

  const legalFont = isRTL
    ? "'DIN Next LT W23', 'Cairo', sans-serif"
    : '"Helvetica Neue", Helvetica, Arial, sans-serif';

  const linkGroups = [
    {
      title: t("footer.products.title"),
      links: [
        { label: t("footer.products.portfolio"), href: "/products" },
        { label: t("footer.products.methanol"), href: "/products/methanol" },
        { label: t("footer.products.formaldehyde"), href: "/products/formaldehyde" },
        { label: t("footer.products.derivatives"), href: "/products/derivatives" },
        { label: t("footer.products.specialty"), href: "/products/specialty" },
      ],
    },
    {
      title: t("footer.industries.title"),
      links: [
        { label: t("footer.industries.overview"), href: "/industries" },
        { label: t("footer.industries.automotive"), href: "/industries/automotive" },
        { label: t("footer.industries.construction"), href: "/industries/construction" },
        { label: t("footer.industries.pharmaceuticals"), href: "/industries/pharmaceuticals" },
        { label: t("footer.industries.paints"), href: "/industries/paints-coatings" },
      ],
    },
    {
      title: t("footer.technical.title"),
      links: [
        { label: t("footer.technical.sds"), href: "/technical-resources#sds" },
        { label: t("footer.technical.tds"), href: "/technical-resources#tds" },
        { label: t("footer.technical.certifications"), href: "/technical-resources#certifications" },
        { label: t("footer.technical.brochures"), href: "/technical-resources#brochures" },
        { label: t("footer.technical.policies"), href: "/technical-resources#policies" },
      ],
    },
    {
      title: t("footer.sustainability.title"),
      links: [
        { label: t("footer.sustainability.overview"), href: "/sustainability#overview" },
        { label: t("footer.sustainability.ehss"), href: "/sustainability#ehss" },
        { label: t("footer.sustainability.operations"), href: "/sustainability#operations" },
      ],
    },
    {
      title: t("footer.innovation.title"),
      links: [{ label: t("footer.innovation.digital"), href: "/innovation" }],
    },
    {
      title: t("footer.about.title"),
      links: [
        { label: t("footer.about.overview"), href: "/about#overview" },
        { label: t("footer.about.leadership"), href: "/about#leadership" },
        { label: t("footer.about.compliance"), href: "/about#compliance" },
        { label: t("footer.about.investor"), href: "/about#investor-relations" },
        { label: t("footer.about.mediaCenter"), href: "/media-center" },
        { label: t("footer.about.careers"), href: "/careers" },
      ],
    },
    {
      title: t("footer.contact.title"),
      links: [
        { label: t("footer.contact.enquiry"), href: "/contact" },
        { label: t("footer.contact.sales"), href: "/contact" },
        { label: t("footer.contact.supplier"), href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { iconSrc: linkedinIcon, href: "https://www.linkedin.com/company/chemanol", label: "LinkedIn" },
    { iconSrc: facebookIcon, href: "https://www.facebook.com/chemanol", label: "Facebook" },
    { iconSrc: instagramIcon, href: "https://www.instagram.com/chemanol", label: "Instagram" },
    { iconSrc: youtubeIcon, href: "https://www.youtube.com/chemanol", label: "YouTube" },
  ];

  const sustainabilityTitle = t("footer.sustainability.title");
  const innovationTitle = t("footer.innovation.title");
  const innovationGroup = linkGroups.find((group) => group.title === innovationTitle);
  const desktopLinkGroups = linkGroups.filter((group) => group.title !== innovationTitle);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMagneticMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const button = magneticButtonRef.current;

    if (!button || !isFormValid || isSubmitting) {
      return;
    }

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);
    const radius = Math.max(rect.width, rect.height) / 2 + 30;

    if (distance > radius) {
      button.style.transform = "translate3d(0, 0, 0) scale(1)";
      return;
    }

    const strength = ((radius - distance) / radius) * 10;
    const offsetX = (deltaX / radius) * strength;
    const offsetY = (deltaY / radius) * strength;
    button.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1.03)`;
  };

  const resetMagneticButton = () => {
    const button = magneticButtonRef.current;

    if (!button) {
      return;
    }

    button.style.transform = isFormValid ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 0, 0) scale(0.995)";
    button.style.animation = "none";
  };

  const toggleSection = (title: string) => {
    setOpenSections((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <footer className="bg-white px-0 pb-0 pt-14 sm:px-0 sm:pt-16">
      <style>{`
        @keyframes footerButtonGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250, 192, 47, 0); }
          50% { box-shadow: 0 0 22px 3px rgba(250, 192, 47, 0.24); }
        }
      `}</style>

      <div className="mx-0 rounded-none bg-black sm:mx-10 sm:mb-10 sm:rounded-[36px]">
        <div className="relative overflow-hidden px-6 py-10 sm:px-[40px] sm:py-[56px] lg:px-[40px] lg:py-[56px] xl:px-[40px] xl:py-[56px]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: [
                "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.18) 0, transparent 28%)",
                "radial-gradient(circle at 82% 18%, rgba(255,255,255,0.12) 0, transparent 24%)",
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 42px)",
              ].join(","),
            }}
          />

          <div className={`relative z-10 grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-10 ${isRTL ? "xl:[direction:rtl]" : ""}`}>
            <div>
              <div className="hidden min-[1000px]:grid min-[1000px]:grid-cols-2 min-[1000px]:gap-x-12 min-[1000px]:gap-y-10 xl:grid-cols-6 xl:gap-x-10 xl:gap-y-10">
                {desktopLinkGroups.map((group) => (
                  <div key={group.title} className="space-y-5">
                    <h3
                      className="block min-h-[2.75rem] w-full border-b border-white/16 pb-3 text-[15px] font-bold uppercase leading-none text-white/75"
                      style={{
                        letterSpacing: "0.14em",
                        fontFamily: headerFont,
                      }}
                    >
                      {group.title}
                    </h3>

                    <div className="flex flex-col gap-3">
                      {group.links.map((link) => (
                        <FooterNavLink key={`${group.title}-${link.href}-${link.label}`} to={link.href} label={link.label} isRTL={isRTL} />
                      ))}
                    </div>

                    {group.title === sustainabilityTitle && innovationGroup ? (
                      <div className="space-y-5 pt-4">
                        <h3
                          className="block min-h-[2.75rem] w-full border-b border-white/16 pb-3 text-[15px] font-bold uppercase leading-none text-white/75"
                          style={{
                            letterSpacing: "0.14em",
                            fontFamily: headerFont,
                          }}
                        >
                          {innovationGroup.title}
                        </h3>

                        <div className="flex flex-col gap-3">
                          {innovationGroup.links.map((link) => (
                            <FooterNavLink key={`${innovationGroup.title}-${link.href}-${link.label}`} to={link.href} label={link.label} isRTL={isRTL} />
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="min-[1000px]:hidden">
                {linkGroups.map((group) => {
                  const isOpen = Boolean(openSections[group.title]);

                  return (
                    <div key={group.title} className="border-b border-white/10 py-4">
                      <button
                        type="button"
                        onClick={() => toggleSection(group.title)}
                        className={`flex w-full items-center justify-between gap-4 text-left ${isRTL ? "flex-row-reverse text-right" : ""}`}
                      >
                        <span
                          className="block min-h-[2.75rem] flex-1 text-[15px] font-bold uppercase leading-none text-white/85"
                          style={{
                            letterSpacing: "0.18em",
                            fontFamily: headerFont,
                          }}
                        >
                          {group.title}
                        </span>
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className={`h-4 w-4 shrink-0 text-white/70 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                        >
                          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      {isOpen ? (
                        <div className="flex flex-col gap-4 pt-4">
                          {group.links.map((link) => (
                            <FooterNavLink key={`${group.title}-${link.href}-${link.label}`} to={link.href} label={link.label} isRTL={isRTL} />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className={`w-full max-w-[24rem] rounded-[18px] bg-white px-4 py-4 shadow-none max-[1260px]:max-w-none sm:px-6 sm:py-6 ${isRTL ? "xl:mr-auto" : "xl:ml-auto"}`}>
                <div className="mb-5 flex items-start justify-between gap-6">
                  <div>
                    <div
                      className="text-[18px] font-bold uppercase leading-none text-[#0658A5]"
                      style={{
                        letterSpacing: "0.12em",
                        fontFamily: headerFont,
                      }}
                    >
                      {t("footer.form.title")}
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <FooterField
                    id="footer-name"
                    label={t("footer.form.name")}
                    value={formData.name}
                    onChange={(value) => setFormData((current) => ({ ...current, name: value }))}
                    isRTL={isRTL}
                  />
                  <FooterField
                    id="footer-email"
                    label={t("footer.form.email")}
                    type="email"
                    value={formData.email}
                    onChange={(value) => setFormData((current) => ({ ...current, email: value }))}
                    isRTL={isRTL}
                  />
                  <FooterField
                    id="footer-message"
                    label={t("footer.form.message")}
                    value={formData.message}
                    onChange={(value) => setFormData((current) => ({ ...current, message: value }))}
                    isRTL={isRTL}
                    multiline
                  />

                  <div className="mt-2" onMouseMove={handleMagneticMove} onMouseLeave={resetMagneticButton}>
                    <button
                      ref={magneticButtonRef}
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      aria-busy={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-sm bg-[#0658A5] px-6 py-3.5 text-sm text-white transition-all duration-300 disabled:cursor-not-allowed disabled:bg-[#0658A5]/55"
                      style={{
                        fontFamily: headerFont,
                        transform: isFormValid ? "translate3d(0, 0, 0) scale(1)" : "translate3d(0, 0, 0) scale(0.995)",
                        willChange: "transform",
                      }}
                      onMouseEnter={(event) => {
                        if (!isFormValid || isSubmitting) {
                          return;
                        }
                        event.currentTarget.style.animation = "footerButtonGlow 1.8s ease-in-out infinite";
                      }}
                      onMouseLeave={resetMagneticButton}
                    >
                      Send Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 border-t border-white/10 pt-6">
            <div className={`flex flex-col gap-5 min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:justify-between ${isRTL ? "min-[1000px]:flex-row-reverse" : ""}`}>
              <p
                className="max-w-3xl text-[15px] leading-6 text-white/52"
                style={{ fontFamily: legalFont }}
              >
                {t("footer.copyright")} {" "}
                <a
                  href="https://www.go-globe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2DABE2] transition-colors duration-300 hover:text-white"
                >
                  GO-Globe
                </a>
              </p>

              <div className={`flex items-center gap-5 ${isRTL ? "min-[1000px]:flex-row-reverse" : ""}`}>
                <Link
                  to="/privacy-terms"
                  className="text-[15px] text-white/52 transition-colors duration-300 hover:text-[#2DABE2]"
                  style={{ fontFamily: legalFont }}
                >
                  {t("footer.privacy")}
                </Link>

                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src={social.iconSrc}
                        alt=""
                        aria-hidden="true"
                        className="h-[28px] w-[28px] opacity-95 brightness-0 invert transition-all duration-300 hover:opacity-100 hover:[filter:brightness(0)_saturate(100%)_invert(58%)_sepia(80%)_saturate(1564%)_hue-rotate(164deg)_brightness(96%)_contrast(83%)]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
