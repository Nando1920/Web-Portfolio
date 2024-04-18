import { LegacyRef } from "react";

export default function ExperienceSection({
  forwardedRef,
}: {
  forwardedRef: LegacyRef<HTMLElement> | undefined;
}) {
  return (
    <section
      ref={forwardedRef}
      className=" bg-emerald-500 flex flex-col justify-center gap-[64px]  h-screen">
      Experience Section
    </section>
  );
}
