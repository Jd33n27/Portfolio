export function getBentoLayout(index: number) {
  const layoutIndex = index % 4;

  switch (layoutIndex) {
    case 0:
      return {
        wrapper: "md:col-span-2 md:row-span-1 flex-col",
        content: "p-8 pb-4",
        imageWrapper: "relative w-full grow min-h-[200px]",
        mockup:
          "absolute top-4 left-6 right-[-20px] bottom-[-20px] rounded-tl-[24px]",
      };
    case 1:
    case 2:
      return {
        wrapper: "md:col-span-3 md:row-span-1 flex-col md:flex-row",
        content: "p-8 md:w-[55%] flex flex-col justify-center",
        imageWrapper:
          "relative w-full md:w-[45%] grow min-h-[220px] md:min-h-full",
        mockup: "absolute inset-y-6 left-6 right-[-20px] rounded-l-[24px]",
      };
    case 3:
      return {
        wrapper: "md:col-span-2 md:row-span-1 flex-col",
        content: "p-8 pb-4",
        imageWrapper: "relative w-full grow min-h-[200px]",
        mockup:
          "absolute top-4 left-6 right-[-20px] bottom-[-20px] rounded-tl-[24px]",
      };
    default:
      return { wrapper: "", content: "", imageWrapper: "", mockup: "" };
  }
}
