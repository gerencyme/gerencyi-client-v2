import Image from "next/image";
import { Parallax } from "@shared/components/Parallax";

export default function Home() {
  return (
    <Parallax>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] duration-300 hover:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </Parallax>
  );
}
