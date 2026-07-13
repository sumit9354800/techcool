import Image from "next/image";
import Link from "next/link";

type NavLogoProps = {
  mobile?: boolean;
};

export function FooterLogo({ mobile = false }: NavLogoProps) {
  return (
    <Link
      href="/"
      aria-label="MRTECHYCOOL Home"
      className="flex items-center shrink-0"
    >
      <Image
        src={mobile ? "/logos/logo-icon-v2.png" : "/logos/logo-dark-v2.png"}
        alt="MRTECHYCOOL"
        width={mobile ? 64 : 1110}
        height={mobile ? 64 : 269}
        priority
        className={mobile ? "h-12 w-auto" : "h-[60px] w-auto"}
      />
    </Link>
  );
}