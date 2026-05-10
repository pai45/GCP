import svgPaths from "./svg-zlsw99bely";

function LabelWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[-0.14px] whitespace-nowrap" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] relative shrink-0 text-[#414651]">PAN Number</p>
      <p className="font-['Lato:Medium',sans-serif] relative shrink-0 text-[#d92d20]">*</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">ASDFG1234I</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Check Circle">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path clipRule="evenodd" d={svgPaths.p82ea180} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper />
      <Input />
    </div>
  );
}

function SupportingText() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Supporting text">
      <p className="font-['Lato:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#717680] text-[14px] tracking-[-0.14px] w-[min-content]">PAN details will be matched against the type of entity/organisation.</p>
    </div>
  );
}

function LabelWrapper1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">Legal Name</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">John Doe</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <Content1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper1 />
      <Input1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel />
        <SupportingText />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel1 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px] tracking-[-0.2px] whitespace-nowrap">PAN details</p>
      <Frame4 />
    </div>
  );
}

function Button() {
  return <div className="bg-white relative rounded-[9999px] shrink-0 size-[14px]" data-name="Button" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">Is GST Present?</p>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Toggle">
        <div className="bg-[#e9eaeb] content-stretch flex h-[16px] items-center p-px relative rounded-[9999px] shrink-0 w-[30px]" data-name="_Toggle base">
          <Button />
        </div>
      </div>
      <p className="font-['Lato:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#717680] text-[14px] tracking-[-0.14px] w-[min-content]">If selected yes, the GSTIN state must match your billing/registered address.</p>
    </div>
  );
}

function LabelWrapper2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">GSTIN Number</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">27AAAAA0000A1Z5</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Check Circle">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path clipRule="evenodd" d={svgPaths.p82ea180} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper2 />
      <Input2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame10 />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel2 />
      </div>
    </div>
  );
}

function LabelWrapper3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">GSTIN Name</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#414651] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">PINE LABS LIMITED</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper3 />
      <Input3 />
    </div>
  );
}

function LabelWrapper4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">GSTIN State</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#414651] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">KARNATKA</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper4 />
      <Input4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel4 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Lato:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px] tracking-[-0.2px] whitespace-nowrap">GST details</p>
      <Frame8 />
      <Frame3 />
    </div>
  );
}

function LabelWrapper5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">CIN/LLP No</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#181d27] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">U31900DL1991PLC043974</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content5 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Check Circle">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                <path clipRule="evenodd" d={svgPaths.p82ea180} fill="var(--fill-0, #079455)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper5 />
      <Input5 />
    </div>
  );
}

function SupportingText1() {
  return <div className="content-stretch flex flex-col gap-[4px] h-[20px] items-end relative shrink-0 w-full" data-name="Supporting text" />;
}

function LabelWrapper6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">CIN/LLP Name</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#414651] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">PINE LABS LIMITED</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <Content6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper6 />
      <Input6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel5 />
        <SupportingText1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel6 />
      </div>
    </div>
  );
}

function LabelWrapper7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">TAN No.</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#a4a7ae] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">Enter TAN Number</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <Content7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function InputWithLabel7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper7 />
      <Input7 />
    </div>
  );
}

function SupportingText2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full" data-name="Supporting text">
      <p className="font-['Lato:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#717680] text-[14px] tracking-[-0.14px] w-[min-content]">Provide only if available</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[288px]">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px relative" data-name="Input field">
        <InputWithLabel7 />
        <SupportingText2 />
      </div>
    </div>
  );
}

function LabelWrapper8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Label wrapper">
      <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#414651] text-[14px] tracking-[-0.14px] whitespace-nowrap">Expected Annual Gift Card Spend</p>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[24px] min-w-px not-italic overflow-hidden relative text-[#414651] text-[16px] text-ellipsis tracking-[-0.16px] whitespace-nowrap">50Lac-1cr</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content8 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Alt Arrow Down">
            <div className="absolute inset-[37.5%_20.83%]" data-name="Vector">
              <div className="absolute inset-[-15%_-6.43%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1667 6.50001">
                  <path d={svgPaths.p1b1acb00} id="Vector" stroke="var(--stroke-0, #717680)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWithLabel8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input with label">
      <LabelWrapper8 />
      <Input8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
        <InputWithLabel8 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame />
    </div>
  );
}

export default function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full">
      <Frame5 />
      <Frame7 />
      <Frame1 />
      <Frame9 />
    </div>
  );
}