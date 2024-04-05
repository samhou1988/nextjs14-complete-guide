import Image from "next/image";

export default function Header() {
  return (
    <>
      <Image
        width={250}
        height={243}
        src="/logo.png"
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  );
}