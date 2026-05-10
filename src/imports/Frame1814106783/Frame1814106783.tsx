import svgPaths from "./svg-s09apalc33";

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[800px] not-italic relative shrink-0 w-full whitespace-nowrap">
      <p className="font-['PP_Telegraf:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#181d27] text-[24px]">Before You Begin</p>
      <p className="font-['Lato:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#717680] text-[14px] tracking-[-0.14px]">Please keep these documents handy for a seamless experience</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[24px] pt-[32px] px-[24px] relative shrink-0 w-[600px]">
      <div aria-hidden="true" className="absolute border-[#d5d7da] border-b border-solid inset-0 pointer-events-none" />
      <Frame18 />
    </div>
  );
}

function VuesaxLinearDocumentUpload() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/document-upload">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="document-upload">
          <path d={svgPaths.p2f095700} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 9.16667L9.16667 10.8333" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ea90c00} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3c271c00} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/document-upload">
        <VuesaxLinearDocumentUpload />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Lato:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#005656] text-[16px] tracking-[-0.16px] whitespace-nowrap">GST Number</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <Frame />
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#414651] text-[12px] tracking-[-0.12px] w-[255px]">We will need this for GST verification</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 24">
        <g id="Page">
          <path d={svgPaths.p16625300} fill="var(--fill-0, #4D7878)" id="Page background" />
          <path d={svgPaths.p2a1cd700} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function FileUpload() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0" data-name="File Upload">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="File type icon">
          <Page />
          <p className="absolute font-['Lato:Bold',sans-serif] inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[1.41px] text-center text-white">PDF</p>
        </div>
        <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#005656] text-[14px] text-ellipsis tracking-[-0.14px] w-[80px] whitespace-nowrap">GST Number</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trash Bin Minimalistic">
          <div className="absolute inset-[5.21%_11.46%_9.38%_11.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5001 20.5">
              <g id="Vector">
                <path d={svgPaths.p2169ff80} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p3f6e270} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.pdc7bc80} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p39592700} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p327d0500} fill="var(--fill-0, #D92D20)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <FileUpload />
    </div>
  );
}

function VuesaxLinearDocumentUpload1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/document-upload">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="document-upload">
          <path d={svgPaths.p2f095700} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 9.16667L9.16667 10.8333" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ea90c00} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3c271c00} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/document-upload">
        <VuesaxLinearDocumentUpload1 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Lato:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#005656] text-[16px] tracking-[-0.16px] whitespace-nowrap">CIN Number</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <Frame5 />
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#414651] text-[12px] tracking-[-0.12px] w-[min-content]">We will need this for company information</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 24">
        <g id="Page">
          <path d={svgPaths.p16625300} fill="var(--fill-0, #4D7878)" id="Page background" />
          <path d={svgPaths.p2a1cd700} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function FileUpload1() {
  return (
    <div className="bg-[#fafafa] relative rounded-[8px] shrink-0" data-name="File Upload">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="File type icon">
          <Page1 />
          <p className="absolute font-['Lato:Bold',sans-serif] inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[1.41px] text-center text-white">PNG</p>
        </div>
        <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic overflow-hidden relative shrink-0 text-[#005656] text-[14px] text-ellipsis tracking-[-0.14px] w-[80px] whitespace-nowrap">CIN Number</p>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Trash Bin Minimalistic">
          <div className="absolute inset-[5.21%_11.46%_9.38%_11.46%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5001 20.5">
              <g id="Vector">
                <path d={svgPaths.p2169ff80} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p3f6e270} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.pdc7bc80} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p39592700} fill="var(--fill-0, #D92D20)" />
                <path d={svgPaths.p327d0500} fill="var(--fill-0, #D92D20)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame14 />
      <FileUpload1 />
    </div>
  );
}

function VuesaxLinearDocumentUpload2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/document-upload">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="document-upload">
          <path d={svgPaths.p2f095700} id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 9.16667L9.16667 10.8333" id="Vector_2" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3ea90c00} id="Vector_3" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3c271c00} id="Vector_4" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_5" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex items-start p-[10px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="relative shrink-0 size-[20px]" data-name="vuesax/linear/document-upload">
        <VuesaxLinearDocumentUpload2 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Lato:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#005656] text-[16px] tracking-[-0.16px] whitespace-nowrap">Address Proof of the company</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px relative">
      <Frame8 />
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#414651] text-[12px] tracking-[-0.12px] w-[min-content]">{`Use Lease & License, Telephone, Electricity Bill, or Bank Statement for address proof.`}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-w-px relative">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function FileUpload2() {
  return (
    <div className="bg-[#fafafa] opacity-40 relative rounded-[8px] shrink-0 w-[184px]" data-name="File Upload">
      <div className="content-stretch flex gap-[12px] items-center justify-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <div className="relative shrink-0 size-[24px]" data-name="Cloud Upload">
          <div className="absolute inset-[12.5%_8.33%_20.83%_8.33%]" data-name="Vector">
            <div className="absolute inset-[-4.69%_-3.75%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
                <path d={svgPaths.p3d49d000} id="Vector" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
          <div className="absolute flex inset-[66.67%_41.67%_8.33%_41.67%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Vector">
                <div className="absolute inset-[-12.5%_-18.75%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 7.5">
                    <path d={svgPaths.p10bab56} id="Vector" stroke="var(--stroke-0, #535862)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Lato:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#005656] text-[14px] tracking-[-0.14px] whitespace-nowrap">Click to upload</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-dashed inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame15 />
      <FileUpload2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Checkbox/Radio">
        <div className="bg-white relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox/Radio base">
          <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#717680] text-[12px] tracking-[-0.12px]">{`We need this in case of you do not have GST or your registered address is different from your billing address `}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame22 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Line() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0 w-[4px]" data-name="Line">
      <div className="bg-[#0172cb] h-full relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-[3px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Lato:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#414651] text-[12px] tracking-[-0.12px] w-full">We assure you that the information collected will only be used for verification</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Wrapper">
      <Content />
    </div>
  );
}

function Wrapper() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Wrapper">
      <div className="content-stretch flex gap-[8px] items-start pr-[12px] py-[12px] relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Info Circle">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path clipRule="evenodd" d={svgPaths.p108d2880} fill="var(--fill-0, #0172CB)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <Wrapper1 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame10 />
        <div className="bg-[#f2f8fd] content-stretch flex gap-[8px] items-start relative rounded-[4px] shrink-0 w-full" data-name="Alert">
          <div aria-hidden="true" className="absolute border-[#b6d7f0] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-[4px]" />
          <Line />
          <Wrapper />
        </div>
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text padding">
      <p className="font-['Lato:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#252b37] text-[16px] tracking-[-0.16px] whitespace-nowrap">Skip</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Text padding">
      <p className="font-['Lato:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.16px] whitespace-nowrap">Continue</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0 w-full">
      <div className="bg-white min-w-[120px] relative rounded-[12px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] overflow-clip px-[24px] py-[12px] relative rounded-[inherit] size-full">
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
      <div className="bg-[#005656] content-stretch flex gap-[8px] items-center justify-center min-w-[120px] overflow-clip px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Buttons/Button">
        <TextPadding1 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Linear">
          <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-7.5%_-5.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8333 11.5">
                <path d={svgPaths.p1cce8500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center px-[24px] py-[16px] relative shrink-0 w-[600px]">
      <div aria-hidden="true" className="absolute border-[#d5d7da] border-solid border-t inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

export default function Frame11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[12px] size-full">
      <div aria-hidden="true" className="absolute border border-[#d5d7da] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame16 />
      <Frame12 />
      <Frame17 />
    </div>
  );
}