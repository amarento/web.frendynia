import Image from "next/image";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-stary-night bg-cover font-hornbill text-white-secondary-default">
      <div className="relative">
        <Image
          src={"/amarento-vertical.png"}
          alt="amarento-logo"
          width={100}
          height={100}
          className="absolute bottom-2 left-12 h-24 w-32"
        />
        {children}
      </div>
    </div>
  );
}
