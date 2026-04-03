import svgPaths from "./svg-1327376ifn";
import imgScreenshot20260121At103936Am1 from "figma:asset/61d05eed8b6bbc3a5260067ea9eccc6038a13043.png";

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pt-[5px] relative shrink-0" data-name="Item">
      <Link />
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[8px] relative shrink-0" data-name="Item:margin">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[16px]">
        <p className="css-ew64yg leading-[24px]">/</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item → Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Products</p>
      </div>
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pl-[8px] pt-[5px] relative shrink-0" data-name="Item:margin">
      <ItemLink />
    </div>
  );
}

function ItemMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] pl-[8px] pt-[5px] relative shrink-0" data-name="Item:margin">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Formaldehyde Products</p>
      </div>
    </div>
  );
}

function OrderedList() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Ordered List">
      <Item />
      <ItemMargin />
      <ItemMargin1 />
      <ItemMargin />
      <ItemMargin2 />
    </div>
  );
}

function NavBreadcrumb() {
  return (
    <div className="relative shrink-0 w-full" data-name="Nav - Breadcrumb">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <OrderedList />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[13px] pt-[12px] px-[112px] right-0 top-[81px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <NavBreadcrumb />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[36px] tracking-[-0.9px] uppercase w-full">
        <p className="css-4hzbpn leading-[40px]">Formaldehyde Solutions</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#4b5563] text-[18px]">
        <p className="css-ew64yg mb-0">As a key intermediate in the chemical industry, our formaldehyde portfolio powers essential</p>
        <p className="css-ew64yg mb-0">applications from wood adhesives to automotive coatings. We produce high-purity aqueous</p>
        <p className="css-ew64yg">solutions tailored for industrial efficiency and stability.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p3a4f6f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
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
    <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Margin">
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#137fec] content-stretch flex items-center px-[24px] py-[12px] relative rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <Margin />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">View Product Brochure</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center pb-[14.5px] pt-[13.5px] px-[25px] relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Request a Quote</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_16px] items-start pt-[8.7px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[23.3px] items-start relative shrink-0 w-[810.66px]" data-name="Container">
      <Heading />
      <Container />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 pb-[65px] pt-[64px] px-[80px] right-0 top-[130px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[24px]">
        <p className="css-ew64yg leading-[32px]">Product Grades</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Explore our range of formaldehyde concentrations and stabilized solutions.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[25px] content-stretch flex flex-col gap-[8px] items-start left-0" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="image">
          <path d={svgPaths.p356fcc60} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.575" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="h-[38px] relative shrink-0 w-[281px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center overflow-clip pl-[251px] pr-[9px] py-[8.5px] relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-px relative rounded-[6px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <ImageFill />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex flex-col items-start left-[934px]" data-name="Container">
      <Options />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Industrial Grade</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Background />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container8 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Formaldehyde 37%</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Formalin-37</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5.625px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Standard aqueous solution widely used in the</p>
        <p className="css-4hzbpn mb-0">manufacture of resins, industrial chemicals, and</p>
        <p className="css-4hzbpn mb-0">disinfectants. Stabilized with methanol to prevent</p>
        <p className="css-4hzbpn">polymerization.</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative w-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Concentration</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container11 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">37.0% ± 0.5%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Methanol</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container13 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">7-10% (Stabilized)</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center relative w-full">
        <Container12 />
        <Container14 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.pd12b00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container16 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin4 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Download TDS</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p21dc2300} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin5 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">View Safety Data Sheet (SDS)</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Link1 />
        <LinkMargin />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative w-full">
        <Container15 />
        <Container18 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_832px_437.63px_0] items-start justify-between p-[25px] rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin1 />
      <Heading3Margin />
      <Margin2 />
      <Margin3 />
      <HorizontalBorder1 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[12px]">
        <p className="css-ew64yg leading-[16px]">High Concentration</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Background1 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Formaldehyde 50%</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Formalin-50</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[28px] right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Concentrated solution designed for high-efficiency</p>
        <p className="css-ew64yg mb-0">resin production, reducing transportation volume and</p>
        <p className="css-ew64yg">water content in final formulations.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[120.25px] relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Concentration</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container22 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">50.0% ± 0.5%</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Temp Req.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container24 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">{`> 55°C Storage`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center relative w-full">
        <Container23 />
        <Container25 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.pd12b00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin9 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Download TDS</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p21dc2300} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin10 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">View Safety Data Sheet (SDS)</p>
      </div>
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Link3 />
        <LinkMargin1 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative w-full">
        <Container26 />
        <Container29 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_416px_438px_416px] items-start justify-between p-[25px] rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin6 />
      <Heading3Margin1 />
      <Margin7 />
      <Margin8 />
      <HorizontalBorder2 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Urea Stabilized</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Background2 />
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container30 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[28px] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn mb-0">UFC 85 (Urea Formaldehyde</p>
        <p className="css-4hzbpn">Concentrate)</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">UFC-85</p>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container31 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">A highly concentrated, clear, and viscous solution of</p>
        <p className="css-ew64yg mb-0">formaldehyde and urea. The primary feedstock for</p>
        <p className="css-ew64yg">urea-formaldehyde resins and fertilizers.</p>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Total Solids</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container33 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">85.0% Min</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Formaldehyde</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container35 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">60.0%</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center relative w-full">
        <Container34 />
        <Container36 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.pd12b00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container38 />
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin14 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Download TDS</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p21dc2300} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin15 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">View Safety Data Sheet (SDS)</p>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link6 />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Link5 />
        <LinkMargin2 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative w-full">
        <Container37 />
        <Container40 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_438px_832px] items-start justify-between p-[25px] rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin11 />
      <Heading3Margin2 />
      <Margin12 />
      <Margin13 />
      <HorizontalBorder3 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px]">
        <p className="css-ew64yg leading-[16px]">Specialty Grade</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Background3 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container41 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Low Methanol Formaldehyde</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Formalin-LM</p>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Container42 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Specifically formulated with low methanol content for</p>
        <p className="css-4hzbpn mb-0">sensitive catalytic applications and specialized</p>
        <p className="css-4hzbpn mb-0">synthesis processes where methanol interference</p>
        <p className="css-4hzbpn">must be minimized.</p>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative w-full">
        <Container43 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Concentration</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container44 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">37-44%</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] uppercase w-full">
        <p className="css-4hzbpn leading-[16px]">Methanol</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch" data-name="Container">
      <Container46 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[14px]">
        <p className="css-ew64yg leading-[20px]">{`< 1.0%`}</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center relative w-full">
        <Container45 />
        <Container47 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.pd12b00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container49 />
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin19 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Download TDS</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p21dc2300} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Margin20() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Margin">
      <Container50 />
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Margin20 />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">View Safety Data Sheet (SDS)</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0 w-full" data-name="Link:margin">
      <Link8 />
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Link7 />
        <LinkMargin3 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-[334px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[17px] relative w-full">
        <Container48 />
        <Container51 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[431.75px_832px_-11.5px_0] items-start justify-between p-[25px] rounded-[8px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin16 />
      <Heading3Margin3 />
      <Margin17 />
      <Margin18 />
      <HorizontalBorder4 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[849.25px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container53() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] px-[32px] relative w-full">
        <HorizontalBorder />
        <Container52 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[80px] py-[64px] right-0 top-[502.75px]" data-name="Section">
      <Container53 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] text-center">
        <p className="css-ew64yg leading-[36px]">Industrial Applications</p>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[36px] relative w-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 36">
        <g id="Icon">
          <path d={svgPaths.p8c21d00} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[24px] translate-x-[-50%]" data-name="Background">
      <Container54 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Wood Adhesives</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[136px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-center">
        <p className="css-ew64yg mb-0">Essential component for</p>
        <p className="css-ew64yg mb-0">particleboard, plywood, and MDF</p>
        <p className="css-ew64yg">resins.</p>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Background4 />
      <Heading7 />
      <Container55 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[36px] relative w-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 36">
        <g id="Icon">
          <path d={svgPaths.p13cd7700} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[24px] translate-x-[-50%]" data-name="Background">
      <Container56 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Automotive</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[136px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-center">
        <p className="css-ew64yg mb-0">Used in the production of molded</p>
        <p className="css-ew64yg mb-0">components, coatings, and fuel</p>
        <p className="css-ew64yg">systems.</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Background5 />
      <Heading8 />
      <Container57 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[36px] relative w-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 36">
        <g id="Icon">
          <path d={svgPaths.p24a55470} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[24px] translate-x-[-50%]" data-name="Background">
      <Container58 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Pharmaceuticals</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[136px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-center">
        <p className="css-ew64yg mb-0">High-purity grades serve as critical</p>
        <p className="css-ew64yg">intermediates in drug synthesis.</p>
      </div>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Background6 />
      <Heading9 />
      <Container59 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[36px] relative w-[30px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 36">
        <g id="Icon">
          <path d={svgPaths.p30864000} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-[#f6f7f8] content-stretch flex items-center justify-center left-1/2 rounded-[9999px] size-[64px] top-[24px] translate-x-[-50%]" data-name="Background">
      <Container60 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[104px]" data-name="Heading 3">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Agrochemicals</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[24px] right-[24px] top-[136px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#6b7280] text-[14px] text-center">
        <p className="css-ew64yg mb-0">Key ingredient for slow-release</p>
        <p className="css-ew64yg mb-0">fertilizers and crop protection</p>
        <p className="css-ew64yg">products.</p>
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" data-name="Background+Shadow">
      <Background7 />
      <Heading10 />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <BackgroundShadow1 />
      <BackgroundShadow2 />
      <BackgroundShadow3 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[22px] relative w-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
        <g id="Icon">
          <path d={svgPaths.p1fa1da80} fill="var(--fill-0, #137FEC)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start py-[3px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container63 />
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#137fec] text-[16px] text-center">
        <p className="css-ew64yg leading-[24px]">Explore All Industries</p>
      </div>
      <Margin21 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link9 />
    </div>
  );
}

function Container65() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start max-w-[inherit] px-[32px] relative w-full">
        <Heading6 />
        <Container62 />
        <Container64 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col items-start left-0 px-[80px] py-[65px] right-0 top-[1609px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container65 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
        <p className="css-4hzbpn leading-[32px]">Need a Custom Formulation?</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[16px] w-[544px]">
        <p className="css-4hzbpn leading-[24px]">{`Our technical team can adjust stabilization levels and concentrations to meet your specific process requirements. Contact our R&D specialists for tailored solutions.`}</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#137fec] content-stretch flex flex-col items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white">
        <p className="css-ew64yg leading-[24px]">Speak to a Technical Expert</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[48px] relative self-stretch shrink-0 w-[639.98px]" data-name="Container">
      <Heading11 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[72px] relative w-[60px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 72">
        <g id="Icon">
          <path d={svgPaths.pb367a70} fill="var(--fill-0, #6B7280)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon14 />
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#1e293b] content-stretch flex items-center justify-center p-[32px] relative self-stretch shrink-0 w-[319.98px]" data-name="Background">
      <Container69 />
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-[#111827] content-stretch flex items-start overflow-clip relative rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 296">
        <g id="SVG" opacity="0.2">
          <g id="Vector"></g>
        </g>
      </svg>
      <Container68 />
      <Background8 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 px-[240px] py-[64px] right-0 top-[2111px]" data-name="Section">
      <BackgroundShadow4 />
    </div>
  );
}

function Link10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Methanol</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79px]" data-name="Item">
      <Link10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item1 />
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

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Construction</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link11 />
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Pharmaceuticals</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Textiles</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Agriculture</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link13 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[104px]" data-name="List">
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
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

function Link14() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">TDS Finder</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link14 />
    </div>
  );
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">SDS Portal</p>
      </div>
    </div>
  );
}

function Item7() {
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
        <p className="css-ew64yg leading-[20px]">Certifications</p>
      </div>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
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

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">About Us</p>
      </div>
    </div>
  );
}

function Item9() {
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
        <p className="css-ew64yg leading-[20px]">Governance</p>
      </div>
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link18 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Investors</p>
      </div>
    </div>
  );
}

function Item11() {
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
        <p className="css-ew64yg leading-[20px]">Sustainability</p>
      </div>
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link20 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
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

function Link21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-[1_0_0] flex-col font-['Helvetica:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#4b5563] text-[14px]">
        <p className="css-4hzbpn leading-[20px]">Jubail Industrial City, Saudi Arabia</p>
      </div>
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link21 />
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[16px]">info@chemanol.com</p>
      </div>
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link22 />
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg leading-[16px]">+966 13 358 5555</p>
      </div>
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link23 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item13 />
      <Item14 />
      <Item15 />
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

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Container">
      <ContainerTop />
      <ContainerBot />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 overflow-clip p-[45px] right-0 top-[2535px]" data-name="Footer">
      <Container70 />
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
    <div className="bg-white content-stretch flex flex-col h-[91px] items-center justify-center overflow-clip pointer-events-auto sticky top-0" data-name="Header">
      <Frame4 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <BackgroundHorizontalBorder />
      <BackgroundHorizontalBorder1 />
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
      <div className="absolute h-[2983px] inset-0 pointer-events-none">
        <Header />
      </div>
    </div>
  );
}