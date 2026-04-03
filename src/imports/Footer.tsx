function Link() {
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
      <Link />
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

function Link1() {
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
      <Link1 />
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

function Link2() {
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
      <Link2 />
    </div>
  );
}

function Link3() {
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
      <Link3 />
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

function Link4() {
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
      <Link4 />
    </div>
  );
}

function Link5() {
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
      <Link5 />
    </div>
  );
}

function Link6() {
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
      <Link6 />
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

function Link7() {
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
      <Link7 />
    </div>
  );
}

function Link8() {
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
      <Link8 />
    </div>
  );
}

function Link9() {
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
      <Link9 />
    </div>
  );
}

function Link10() {
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
      <Link10 />
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

function Link11() {
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
      <Link11 />
    </div>
  );
}

function Link12() {
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
      <Link12 />
    </div>
  );
}

function Link13() {
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
      <Link13 />
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

function Frame1() {
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] h-[153px] items-start relative shrink-0">
      <Frame1 />
      <RegisterButton />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex h-[40px] items-start relative shrink-0" data-name="Form">
      <Frame />
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

function Frame2() {
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
      <Frame2 />
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0" data-name="Container">
      <ContainerTop />
      <ContainerBot />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center p-[45px] relative size-full" data-name="Footer">
      <Container />
    </div>
  );
}