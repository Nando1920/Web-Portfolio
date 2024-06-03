import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function StoreBadges({
  appStore,
  playStore,
}: {
  appStore: string;
  playStore: string;
}) {
  return (
    <div className="flex gap-4 w-full justify-center items-center p-2">
      <Link href={playStore}>
        <Image alt="app store" src={"/playStore.svg"} width={120} height={16} />
      </Link>
      <Link href={appStore}>
        <Image alt="app store" src={"/appStore.svg"} width={112} height={16} />
      </Link>
    </div>
  );
}
