import svgPaths from "./svg-qnkm2l2ssr";
import imgScreenshot20260121At103936Am1 from "figma:asset/61d05eed8b6bbc3a5260067ea9eccc6038a13043.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Our Products</p>
      </div>
      <div className="bg-[#137fec] h-[4px] shrink-0 w-[80px]" data-name="Background" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[16px]">
        <p className="css-ew64yg leading-[24px]">View Product Portfolio</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] relative w-[14.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.02 16">
        <g id="Icon">
          <path d={svgPaths.p209e600} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start py-[2px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Link">
      <Container1 />
      <Margin />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Link />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p39fc5900} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[33px] size-[48px] top-[33px]" data-name="Background">
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px]">
        <p className="css-ew64yg leading-[28px]">{`Methanol & Derivatives`}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[149px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">High-purity building blocks for</p>
        <p className="css-ew64yg">industrial chemicals.</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background />
      <Heading2 />
      <Container5 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[20px] justify-center leading-[0] left-[33px] not-italic text-[#137fec] text-[14px] top-[223px] translate-y-[-50%] w-[97.271px]">
        <p className="css-4hzbpn leading-[20px]">Explore Details</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p1237cf00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[33px] size-[48px] top-[33px]" data-name="Background">
      <Container6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px]">
        <p className="css-ew64yg leading-[28px]">Formaldehyde Products</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[149px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Versatile resin components and</p>
        <p className="css-ew64yg">chemical intermediates.</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background1 />
      <Heading3 />
      <Container7 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[20px] justify-center leading-[0] left-[33px] not-italic text-[#137fec] text-[14px] top-[223px] translate-y-[-50%] w-[97.271px]">
        <p className="css-4hzbpn leading-[20px]">Explore Details</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p27f4e530} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[33px] size-[48px] top-[33px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px]">
        <p className="css-ew64yg leading-[28px]">Specialty Chemicals</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[149px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Tailored solutions for specific</p>
        <p className="css-ew64yg">technical requirements.</p>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background2 />
      <Heading4 />
      <Container9 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[20px] justify-center leading-[0] left-[33px] not-italic text-[#137fec] text-[14px] top-[223px] translate-y-[-50%] w-[97.271px]">
        <p className="css-4hzbpn leading-[20px]">Explore Details</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p14e3fd80} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[33px] size-[48px] top-[33px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[105px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px]">
        <p className="css-ew64yg leading-[28px]">UFC-85</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[149px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Optimized Urea Formaldehyde</p>
        <p className="css-ew64yg">Concentrate.</p>
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background3 />
      <Heading5 />
      <Container11 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Medium',sans-serif] h-[20px] justify-center leading-[0] left-[33px] not-italic text-[#137fec] text-[14px] top-[223px] translate-y-[-50%] w-[97.271px]">
        <p className="css-4hzbpn leading-[20px]">Explore Details</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Border />
      <Border1 />
      <Border2 />
      <Border3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start px-[24px] relative w-full">
        <Container3 />
        <Container12 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[97px] pt-[96px] px-[320px] right-0 top-[600px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-b border-solid inset-0 pointer-events-none" />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] tracking-[1.4px] uppercase">
          <p className="css-ew64yg leading-[20px]">Resource Portal Illustration</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-px py-[152px] relative" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#111827] border-dashed inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] w-full">
        <p className="css-4hzbpn leading-[36px]">Technical Resources</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[26px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">Access comprehensive technical documentation, safety data sheets (SDS), and</p>
        <p className="css-4hzbpn mb-0">product specifications. We provide the data you need for safe and efficient</p>
        <p className="css-4hzbpn">operations.</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p1961dc00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-2px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.02px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] w-full">
          <p className="css-4hzbpn leading-[24px]">Product Technical Data Sheets (TDS)</p>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p174b9400} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="opacity-0 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <Icon6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[15px] relative w-full">
          <Margin1 />
          <Container17 />
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p3e27b6f0} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[-2px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40.02px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] w-full">
          <p className="css-4hzbpn leading-[24px]">Safety Data Sheets (SDS)</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[28px] relative w-[24.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.02 28">
        <g id="Icon">
          <path d={svgPaths.p174b9400} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="opacity-0 relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none scale-y-[-100%]">
            <Icon8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[17px] py-[15px] relative w-full">
          <Margin2 />
          <Container20 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading1 />
      <Container15 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <Container23 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[344px] py-[96px] right-0 top-[1787px]" data-name="Section">
      <Container24 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white">
        <p className="css-ew64yg leading-[36px]">Sustainability Commitment</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#9ca3af] text-[16px]">
        <p className="css-ew64yg mb-0">Our ESG strategy is integrated into every aspect of our manufacturing process,</p>
        <p className="css-ew64yg">ensuring a sustainable future for the chemical industry.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[576px] min-w-[576px] relative shrink-0" data-name="Container">
      <Heading6 />
      <Container25 />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-col items-start px-[32px] py-[12px] relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white">
        <p className="css-ew64yg leading-[24px]">View 2026 ESG Report</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[426.86px] items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Link3 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white">
        <p className="css-ew64yg leading-[40px]">30%</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Carbon Reduction Target</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white">
        <p className="css-ew64yg leading-[40px]">Zero</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Industrial Waste Incidents</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[378.67px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white">
        <p className="css-ew64yg leading-[40px]">Renewable</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Energy Integration</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[378.66px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container33 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container27 />
        <Container37 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#111827] content-stretch flex flex-col items-start left-0 px-[320px] py-[96px] right-0 top-[2303px]" data-name="Section">
      <Container38 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Media Center</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Browse All News</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Link4 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f3f4f6] h-[192px] relative shrink-0 w-[387.33px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 387.33 192\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.388 0 0 13.576 193.66 96)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">OCTOBER 24, 2026</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">
        <p className="css-4hzbpn mb-0">Chemanol Announces Q3 Financial</p>
        <p className="css-4hzbpn">Results</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">{`A comprehensive look at the company's performance`}</p>
        <p className="css-4hzbpn">and growth trajectory for the third quarter...</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Container40 />
        <Heading8 />
        <Container41 />
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[1.2px] uppercase">
          <p className="css-ew64yg leading-[16px]">Read More</p>
        </div>
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative self-stretch shrink-0 w-[389.33px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background4 />
      <Container42 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f3f4f6] h-[192px] relative shrink-0 w-[387.33px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 387.33 192\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.388 0 0 13.576 193.66 96)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">SEPTEMBER 12, 2026</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">
        <p className="css-4hzbpn leading-[28px]">New Specialty Chemical Unit Inauguration</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Expanding our production capacity with state-of-the-art</p>
        <p className="css-4hzbpn">facilities in Jubail Industrial City...</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[387.33px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Container43 />
        <Heading9 />
        <Container44 />
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[1.2px] uppercase">
          <p className="css-ew64yg leading-[16px]">Read More</p>
        </div>
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative self-stretch shrink-0 w-[389.33px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background5 />
      <Container45 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f3f4f6] h-[192px] relative shrink-0 w-[387.34px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px opacity-30" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 387.34 192\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.389 0 0 13.576 193.67 96)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">AUGUST 05, 2026</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[18px] w-full">
        <p className="css-4hzbpn leading-[28px]">Sustainability Excellence Award 2026</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Recognized for our environmental stewardship and</p>
        <p className="css-4hzbpn">commitment to circular economy principles...</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[387.34px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[24px] relative w-full">
        <Container46 />
        <Heading10 />
        <Container47 />
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px] tracking-[1.2px] uppercase">
          <p className="css-ew64yg leading-[16px]">Read More</p>
        </div>
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative self-stretch shrink-0 w-[389.34px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Background6 />
      <Container48 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
      <Article2 />
    </div>
  );
}

function Container50() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container39 />
        <Container49 />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col items-start left-0 pb-[96px] pt-[97px] px-[320px] right-0 top-[3256.34px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container50 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[72px] relative w-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 72">
        <g id="Icon">
          <path d={svgPaths.p1d7a9900} fill="var(--fill-0, #111827)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] text-center tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Video Reel / Banner Placeholder</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center pb-[254px] pt-[248px]" data-name="Container">
      <Container53 />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-[590px]" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[48px] not-italic relative shrink-0 text-[#111827] text-[48px]">
          <p className="css-ew64yg mb-0">Leading Global Chemical</p>
          <p className="css-ew64yg">Manufacturer</p>
        </div>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-[590px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">
          <p className="css-ew64yg mb-0">Delivering excellence in methanol and chemical derivatives through</p>
          <p className="css-ew64yg">sustainable innovation and operational efficiency.</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center pb-[13.5px] pt-[12.5px] px-[32px] relative shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">Explore Our Portfolio</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[13px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#137fec] border-solid inset-0 pointer-events-none" />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Learn More</p>
      </div>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Button:margin">
      <Button1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-[590px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[8px] relative w-full">
        <Button />
        <ButtonMargin />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col gap-[24px] items-start max-w-[672px] p-[41px] relative shrink-0 w-[672px]" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Heading />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <OverlayBorder />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex h-[600px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Section">
      <div className="absolute inset-0 opacity-50" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1920 600\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(135.76 0 0 42.426 960 300)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
      <Container54 />
      <Container57 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] w-full">
        <p className="css-4hzbpn leading-[36px]">{`Industries & Applications`}</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="css-4hzbpn leading-[28px]">Supporting global value chains through innovative chemical applications across diverse sectors.</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <Heading11 />
      <Container58 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[44px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 44">
        <g id="Icon">
          <path d={svgPaths.p19a26300} fill="var(--fill-0, #111827)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex items-start left-[68.36px] top-[22px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[80px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] text-center">
        <p className="css-ew64yg leading-[28px]">Construction</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[14px] relative w-[12.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.02 14">
        <g id="Icon">
          <path d={svgPaths.p3fd3cf00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container61 />
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] right-[24px] top-[116px]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">View Applications</p>
      </div>
      <Margin3 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[160px] relative shrink-0 w-[172.72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container60 />
        <Heading12 />
        <Link5 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="aspect-[394.6600036621094/295.9800109863281] bg-white relative shrink-0" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[68px] pt-[67.98px] px-px relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 392.66 293.98\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.765 0 0 20.788 196.33 146.99)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
        <Container62 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[44px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 44">
        <g id="Icon">
          <path d={svgPaths.p2baf2db2} fill="var(--fill-0, #111827)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex items-start left-[68.35px] top-[22px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[80px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] text-center">
        <p className="css-ew64yg leading-[28px]">Agriculture</p>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[13.988px] relative w-[12.01px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.01 13.9884">
        <g id="Icon">
          <path d={svgPaths.p3fe8440} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container64 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] right-[24px] top-[116px]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">View Applications</p>
      </div>
      <Margin4 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[160px] relative shrink-0 w-[172.72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container63 />
        <Heading13 />
        <Link6 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="aspect-[394.6700134277344/296] bg-white relative shrink-0" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip px-px py-[68px] relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 392.67 294\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.766 0 0 20.789 196.34 147)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
        <Container65 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[44px] relative w-[36px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 44">
        <g id="Icon">
          <path d={svgPaths.p39911a80} fill="var(--fill-0, #111827)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex items-start left-[68.36px] top-[22px]" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[80px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] text-center">
        <p className="css-ew64yg leading-[28px]">Healthcare</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[14px] relative w-[12.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.02 14">
        <g id="Icon">
          <path d={svgPaths.p3fd3cf00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container67 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[24px] right-[24px] top-[116px]" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px] text-center">
        <p className="css-ew64yg leading-[20px]">View Applications</p>
      </div>
      <Margin5 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[160px] relative shrink-0 w-[172.72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container66 />
        <Heading14 />
        <Link7 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="aspect-[394.6600036621094/295.9800109863281] bg-white relative shrink-0" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip pb-[68px] pt-[67.98px] px-px relative rounded-[inherit] w-full">
        <div className="absolute inset-px opacity-20" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 392.66 293.98\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(27.765 0 0 20.788 196.33 146.99)\\\'><stop stop-color=\\\'rgba(209,213,219,1)\\\' offset=\\\'0.035355\\\'/><stop stop-color=\\\'rgba(209,213,219,0)\\\' offset=\\\'0.035355\\\'/></radialGradient></defs></svg>')" }} />
        <Container68 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container70() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[24px] relative w-full">
        <Container59 />
        <Container69 />
      </div>
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col items-start left-0 px-[320px] py-[96px] right-0 top-[1155px]" data-name="Section">
      <Container70 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Helvetica_Neue:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] w-full">
        <p className="css-4hzbpn leading-[36px]">About Chemanol</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">Established in 1989, Methanol Chemicals Company (Chemanol) is</p>
        <p className="css-4hzbpn mb-0">{`one of the world's most integrated formaldehyde production`}</p>
        <p className="css-4hzbpn">complexes and the largest manufacturer in the GCC.</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[24px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">Headquartered in Al Jubail Industrial City, we export our products to</p>
        <p className="css-4hzbpn">over 50 countries worldwide across multiple continents.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative self-stretch shrink-0 w-[485.33px]" data-name="Container">
      <Heading15 />
      <Container71 />
      <Container72 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[16px]">
        <p className="css-ew64yg decoration-solid leading-[24px] underline">{`Our Heritage & Leadership`}</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] tracking-[-0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Facility Image</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="aspect-[341.3299865722656/341.3299865722656] bg-[#f3f4f6] content-stretch flex h-full items-center justify-center p-px relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Container74 />
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[12px] tracking-[-0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Logistics Image</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="aspect-[341.3399963378906/341.3399963378906] bg-[#f3f4f6] content-stretch flex h-full items-center justify-center p-px relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Container75 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative self-stretch shrink-0 w-[698.67px]" data-name="Container">
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex gap-[48px] items-start justify-center min-h-[341.3399963378906px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container76 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[344px] py-[96px] right-0 top-[2723px]" data-name="Section">
      <Container77 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[3966px] left-0 right-0 top-[91px]" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Methanol</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79px]" data-name="Item">
      <Link8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Formaldehyde</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Resins</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Specialty</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Specialty Chemicals</p>
      </div>
      <div className="flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[min-content]">
        <p className="css-4hzbpn leading-[20px]">Products Pages</p>
      </div>
    </div>
  );
}

function ContainerNav() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[137px]" data-name="Container nav">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#111827] text-[18px] text-right">Products</p>
      <List />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Construction</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link9 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Pharmaceuticals</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Textiles</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Agriculture</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link11 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[104px]" data-name="List">
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function ContainerNav1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Container nav">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#111827] text-[18px] text-right">Industries</p>
      <List1 />
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">TDS Finder</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">SDS Portal</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Certifications</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function ContainerNav2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Container nav">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#111827] text-[18px] text-right">Resources</p>
      <List2 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">About Us</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Governance</p>
      </div>
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Investors</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Sustainability</p>
      </div>
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link18 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
      <Item11 />
    </div>
  );
}

function ContainerSocialNetworks() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Container Social networks">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#111827] text-[18px] text-right">Company</p>
      <List3 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Jubail Industrial City, Saudi Arabia</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link19 />
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[16px]">info@chemanol.com</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link20 />
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[16px]">+966 13 358 5555</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link21 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item12 />
      <Item13 />
      <Item14 />
    </div>
  );
}

function ContainerSocialNetworks1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="Container Social networks">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#111827] text-[18px] text-right">{`Contact & Support`}</p>
      <List4 />
    </div>
  );
}

function InputForm() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center p-[13.3px] relative shrink-0 w-[315px]" data-name="input form">
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.2)] border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(22,22,22,0.2)]">Your name</p>
    </div>
  );
}

function InputForm1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center p-[13.3px] relative shrink-0 w-[315px]" data-name="input form">
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.2)] border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(22,22,22,0.2)]">Your email</p>
    </div>
  );
}

function InputForm2() {
  return (
    <div className="bg-white content-stretch flex h-[63px] items-start px-[13.3px] py-[6px] relative shrink-0 w-[315px]" data-name="input form">
      <div aria-hidden="true" className="absolute border border-[rgba(22,22,22,0.2)] border-solid inset-0 pointer-events-none" />
      <p className="css-4hzbpn flex-[1_0_0] font-['Helvetica:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[14px] text-[rgba(22,22,22,0.2)]">Your message</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <InputForm />
      <InputForm1 />
      <InputForm2 />
    </div>
  );
}

function RegisterButton() {
  return (
    <div className="bg-[#06c] content-stretch flex h-[45px] items-center justify-center px-[30px] py-[13.3px] relative shrink-0 w-[121px]" data-name="Register button">
      <p className="css-ew64yg font-['Helvetica:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-right text-white">Send</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[153px] items-start relative shrink-0">
      <Frame7 />
      <RegisterButton />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex h-[40px] items-start relative shrink-0" data-name="Form">
      <Frame6 />
    </div>
  );
}

function FormRegister() {
  return (
    <div className="content-stretch flex flex-col gap-[13.3px] h-[247px] items-start max-w-[540px] relative shrink-0 w-[315px]" data-name="Form register">
      <p className="css-4hzbpn font-['Helvetica:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#111827] text-[14px] w-[min-content]">Submit Enquiry</p>
      <Form />
    </div>
  );
}

function ContainerForm() {
  return (
    <div className="content-stretch flex flex-col h-[247px] items-start max-w-[540px] relative shrink-0" data-name="Container form">
      <FormRegister />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0">
      <ContainerNav />
      <ContainerNav1 />
      <ContainerNav2 />
      <ContainerSocialNetworks />
      <ContainerSocialNetworks1 />
      <ContainerForm />
    </div>
  );
}

function InnerContainer() {
  return (
    <div className="content-stretch flex h-[247px] items-start relative shrink-0" data-name="Inner container">
      <Frame8 />
    </div>
  );
}

function ContainerTop() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-center justify-center p-[30px] relative shrink-0 w-[1280px]" data-name="Container top">
      <InnerContainer />
    </div>
  );
}

function LegalLinks() {
  return (
    <div className="content-stretch flex font-['Helvetica:Bold',sans-serif] gap-[19px] items-center leading-[1.5] relative shrink-0 text-right" data-name="Legal links">
      <p className="css-ew64yg relative shrink-0">Privacy Policy</p>
      <p className="css-ew64yg relative shrink-0">Terms of Use</p>
      <p className="css-ew64yg relative shrink-0">Sitemap</p>
    </div>
  );
}

function ContainerBot() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[1350px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-[1169px]" data-name="Container bot">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] text-center">
        <span className="leading-[1.5]">{`© 2026 Chemanol (Methanol Chemicals Company). All rights reserved. Developed by `}</span>
        <span className="font-['Helvetica:Bold',sans-serif] leading-[1.5]">GO-Globe</span>
      </p>
      <LegalLinks />
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Container">
      <ContainerTop />
      <ContainerBot />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-1/2 overflow-clip p-[45px] top-[4057px] translate-x-[-50%] w-[1920px]" data-name="Footer">
      <Container78 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[78.5px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[17.5px]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(75, 85, 99, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                <path d={svgPaths.p26c81ac0} fill="var(--fill-0, #4B5563)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold','Noto_Sans_Arabic:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#06c] text-[14px] text-center uppercase" style={{ fontVariationSettings: "'wdth' 100, 'wght' 700" }}>
        <p className="css-ew64yg leading-[20px]" dir="auto">
          عربي
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[694.25px]">
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[1280px]">
      <Frame3 />
    </div>
  );
}

function MenuItemDropdown() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Menu item dropdown">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">Technical Resources</p>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[22px] items-start relative shrink-0 w-[1007px]" data-name="Menu">
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5462] text-[18px] text-right">Home</p>
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">Products</p>
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">{`Industries & Applications`}</p>
      <MenuItemDropdown />
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">Sustainability</p>
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">Innovation</p>
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">About Chemanol</p>
      <p className="css-ew64yg font-['Helvetica:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-right">{`Contact & Support`}</p>
    </div>
  );
}

function MenuWrapper() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[1047px]" data-name="Menu wrapper">
      <Menu />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-center min-h-px min-w-px relative w-full">
      <div className="h-[56px] relative shrink-0 w-[102px]" data-name="Screenshot 2026-01-21 at 10.39.36 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260121At103936Am1} />
      </div>
      <MenuWrapper />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-[1280px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function ContainerBot1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container bot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[30px] py-[13.3px] relative size-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start justify-center relative shrink-0 w-full">
      <ContainerBot1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[91px] items-center justify-center overflow-clip pointer-events-auto sticky top-0 translate-x-[-50%] w-[1920px]" data-name="Header">
      <Frame4 />
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute bg-white h-[4505px] left-0 right-0 top-0" data-name="Home Page">
      <Main />
      <Footer />
      <div className="absolute bottom-0 h-[4496px] left-1/2 pointer-events-none top-[9px]">
        <Header />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <HomePage />
    </div>
  );
}