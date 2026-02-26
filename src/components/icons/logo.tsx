import Image from "next/image";

export function HSLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-technologies.png"
      alt="Hina Shahrukh Technologies"
      width={910}
      height={250}
      className={`dark:brightness-0 dark:invert ${className}`}
      priority
    />
  );
}

export function HSLogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo-technologies.png"
      alt="HS Technologies"
      width={910}
      height={250}
      className={`dark:brightness-0 dark:invert ${className}`}
    />
  );
}
