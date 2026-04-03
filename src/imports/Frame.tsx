import svgPaths from "./svg-5vhvhjml3k";
import imgScreenshot20260121At103936Am1 from "figma:asset/61d05eed8b6bbc3a5260067ea9eccc6038a13043.png";

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[12px] tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Home</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[12px] tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">/</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[12px] relative self-stretch shrink-0" data-name="Margin">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[12px] tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">{`Industries & Applications`}</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Nav">
      <Link />
      <Margin />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[36px] tracking-[-0.9px] uppercase w-full">
        <p className="css-4hzbpn leading-[40px]">Industries We Serve</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] w-full">
        <p className="css-4hzbpn leading-[28px]">Chemanol provides essential chemical solutions that power a diverse range of global industries. From automotive coatings to pharmaceutical synthesis, our high-purity methanol derivatives drive innovation and reliability.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] relative w-full">
        <Nav />
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pb-[81px] pl-[104px] pr-[568px] pt-[80px] right-0 top-[101px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container3 />
    </div>
  );
}

function Link1() {
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
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Item">
      <Link1 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Item">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px]">
        <p className="css-ew64yg leading-[16px]">/</p>
      </div>
    </div>
  );
}

function ItemMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[8px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item1 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Item">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] text-[12px]">
        <p className="css-ew64yg leading-[16px]">{`Industries & Applications`}</p>
      </div>
    </div>
  );
}

function ItemMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[8px] relative self-stretch shrink-0" data-name="Item:margin">
      <Item2 />
    </div>
  );
}

function OrderedList() {
  return (
    <div className="relative shrink-0 w-full" data-name="Ordered List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Item />
        <ItemMargin />
        <ItemMargin1 />
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 pb-[13px] pt-[12px] px-[104px] right-0 top-[431.5px]" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <OrderedList />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px]">
        <p className="css-ew64yg leading-[36px]">Explore by Sector</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px]">
        <p className="css-ew64yg leading-[24px]">Discover how our products are applied across key market sectors.</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[8px] items-start left-0" data-name="Container">
      <Heading1 />
      <Container4 />
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
    <div className="h-[38px] relative shrink-0 w-[256px]" data-name="image fill">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end justify-center overflow-clip pl-[226px] pr-[9px] py-[8.5px] relative rounded-[inherit] size-full">
        <Image />
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white content-stretch flex items-start p-px relative rounded-[4px] shrink-0 w-[258px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ImageFill />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pe8ce700} fill="var(--fill-0, #9CA3AF)" id="Vector" />
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
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-px content-stretch flex items-center left-px pl-[12px] top-px" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[-1px] content-stretch flex flex-col items-start left-[975px]" data-name="Container">
      <Options />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d0f4c00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
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
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Automotive</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px] w-full">
        <p className="css-4hzbpn mb-0">Advanced resins and formaldehyde derivatives</p>
        <p className="css-4hzbpn mb-0">used in high-performance coatings, molded parts,</p>
        <p className="css-4hzbpn mb-0">and fuel additives to enhance vehicle durability and</p>
        <p className="css-4hzbpn">efficiency.</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative w-full">
        <Container11 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Automotive</p>
        </div>
        <Margin3 />
      </div>
    </div>
  );
}

function Article() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[-23px_842.67px_303.25px_0] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin1 />
      <Heading3Margin />
      <Margin2 />
      <Link2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p39af4600} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Construction</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[22.75px] right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Essential binding agents for wood products (MDF,</p>
        <p className="css-ew64yg mb-0">plywood), thermal insulation materials, and concrete</p>
        <p className="css-ew64yg">admixtures for modern infrastructure projects.</p>
      </div>
    </div>
  );
}

function Margin5() {
  return (
    <div className="h-[115px] relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container15 />
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Construction</p>
        </div>
        <Margin6 />
      </div>
    </div>
  );
}

function Article1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_421.34px_326.25px_421.33px] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin4 />
      <Heading3Margin1 />
      <Margin5 />
      <Link3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p12010d00} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Pharmaceuticals</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[22.75px] right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">High-purity chemical intermediates critical for the</p>
        <p className="css-ew64yg mb-0">synthesis of active pharmaceutical ingredients</p>
        <p className="css-ew64yg">(APIs), solvents, and sterilization processes.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="h-[115px] relative shrink-0 w-[323.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Pharmaceuticals</p>
        </div>
        <Margin9 />
      </div>
    </div>
  );
}

function Article2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_326.25px_842.66px] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin7 />
      <Heading3Margin2 />
      <Margin8 />
      <Link4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p37d5a600} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container19 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Agriculture</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Efficient nitrogen-based compounds and slow-</p>
        <p className="css-ew64yg mb-0">release fertilizers designed to maximize crop yield</p>
        <p className="css-ew64yg">while minimizing environmental impact.</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container21 />
    </div>
  );
}

function Link5() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Agriculture</p>
        </div>
        <Margin12 />
      </div>
    </div>
  );
}

function Article3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[349px_842.67px_0_0] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin10 />
      <Heading3Margin3 />
      <Margin11 />
      <Link5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p23361770} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
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
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container22 />
    </div>
  );
}

function Margin13() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">Textiles</p>
      </div>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading6 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Formaldehyde-free resins and finishing agents used</p>
        <p className="css-ew64yg mb-0">to improve fabric durability, crease resistance, and</p>
        <p className="css-ew64yg">color retention in modern textiles.</p>
      </div>
    </div>
  );
}

function Margin14() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-[323.33px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[4px] relative shrink-0" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Link6() {
  return (
    <div className="relative shrink-0 w-[323.33px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pr-[0.01px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] mr-[-0.01px] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Textiles</p>
        </div>
        <Margin15 />
      </div>
    </div>
  );
}

function Article4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[349px_421.34px_0_421.33px] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin13 />
      <Heading3Margin4 />
      <Margin14 />
      <Link6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p116f8440} fill="var(--fill-0, #4B5563)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[48px]" data-name="Background">
      <Container25 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="h-[72px] relative shrink-0 w-[48px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[20px] w-full">
        <p className="css-4hzbpn leading-[28px]">{`Paints & Coatings`}</p>
      </div>
    </div>
  );
}

function Heading3Margin5() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] relative w-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.75px]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#4b5563] text-[14px]">
        <p className="css-ew64yg mb-0">Solvents and binders that enable high-performance</p>
        <p className="css-ew64yg mb-0">industrial paints, providing corrosion resistance and</p>
        <p className="css-ew64yg">superior finish quality.</p>
      </div>
    </div>
  );
}

function Margin17() {
  return (
    <div className="h-[92.25px] relative shrink-0 w-[323.34px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p240ffd00} fill="var(--fill-0, #475569)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start py-[4px] relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Margin">
      <Container27 />
    </div>
  );
}

function Link7() {
  return (
    <div className="relative shrink-0 w-[323.34px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#475569] text-[12px] tracking-[0.6px] uppercase">
          <p className="css-ew64yg leading-[16px]">Explore Coatings</p>
        </div>
        <Margin18 />
      </div>
    </div>
  );
}

function Article5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[349px_0_0_842.66px] items-start justify-between p-[33px] rounded-[4px]" data-name="Article">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin16 />
      <Heading3Margin5 />
      <Margin17 />
      <Link7 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[643.25px] relative shrink-0 w-full" data-name="Container">
      <Article />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-[80px] max-w-[1280px] px-[24px] right-[80px] top-[536.5px]" data-name="Section">
      <Container9 />
      <Container28 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p2406d700} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Research Visualization</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#e5e7eb] relative rounded-[4px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[130.5px] relative w-full">
          <Margin19 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Background6 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Helvetica_Neue:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#111827] text-[30px] w-full">
        <p className="css-4hzbpn leading-[36px]">Innovation in Application</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Helvetica_Neue:Regular',sans-serif] justify-center leading-[26px] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-full">
        <p className="css-4hzbpn mb-0">Our technical teams work closely with industry partners to develop custom</p>
        <p className="css-4hzbpn mb-0">formulations. Learn how our methanol derivatives helped solve critical stability</p>
        <p className="css-4hzbpn">issues in next-generation composite materials.</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-[#475569] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[4px] self-stretch shrink-0" data-name="Link">
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white">
        <p className="css-ew64yg leading-[20px]">Read Case Studies</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px px-[25px] py-[13px] relative rounded-[4px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#cbd5e1] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="css-g0mm18 flex flex-col font-['Helvetica_Neue:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#374151] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Contact Technical Team</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link9 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Link8 />
      <LinkMargin />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <Heading8 />
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex flex-col items-start left-0 px-[104px] py-[64px] right-0 top-[1359.75px]" data-name="Section">
      <Container35 />
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

function Item3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[79px]" data-name="Item">
      <Link10 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
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

function Item4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link11 />
    </div>
  );
}

function Item5() {
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

function Item6() {
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

function Item7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[87px]" data-name="Item">
      <Link13 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[104px]" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
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

function Item8() {
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

function Item9() {
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

function Item10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link16 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item8 />
      <Item9 />
      <Item10 />
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

function Item11() {
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

function Item12() {
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

function Item13() {
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

function Item14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link20 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item11 />
      <Item12 />
      <Item13 />
      <Item14 />
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

function Item15() {
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

function Item16() {
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

function Item17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link23 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item15 />
      <Item16 />
      <Item17 />
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

function Frame8() {
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[153px] items-start relative shrink-0">
      <Frame8 />
      <RegisterButton />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex h-[40px] items-start relative shrink-0" data-name="Form">
      <Frame7 />
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

function Frame9() {
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
      <Frame9 />
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

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Container">
      <ContainerTop />
      <ContainerBot />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-center left-0 overflow-clip p-[45px] right-0 top-[1820.75px]" data-name="Footer">
      <Container36 />
    </div>
  );
}

function Frame3() {
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

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[694.25px]">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-[1280px]">
      <Frame4 />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[28px] items-center min-h-px min-w-px relative w-full">
      <div className="h-[56px] relative shrink-0 w-[102px]" data-name="Screenshot 2026-01-21 at 10.39.36 AM 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260121At103936Am1} />
      </div>
      <MenuWrapper />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start relative shrink-0 w-[1280px]">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function ContainerBot1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Container bot">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[30px] py-[13.3px] relative size-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-[71px] items-start justify-center relative shrink-0 w-full">
      <ContainerBot1 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[91px] items-center justify-center overflow-clip pointer-events-auto sticky top-0" data-name="Header">
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full" data-name="Frame" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 244, 246) 0%, rgb(243, 244, 246) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Section />
      <BackgroundHorizontalBorder />
      <Section1 />
      <Section2 />
      <Footer />
      <div className="absolute h-[2269px] inset-0 pointer-events-none">
        <Header />
      </div>
    </div>
  );
}