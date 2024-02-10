import Link from "next/link";
import Header from "@/componets/header";
export default function Home() {
  console.log('Home.....');
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href='/about'>About Us</Link></p>
    </main>
  );
}
