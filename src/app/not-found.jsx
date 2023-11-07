import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-white relative">
      <img src="/not-found.jpg" alt="" className="absolute h-screen w-screen" />
      <Link href="/" className="relative flex justify-center items-center pt-5 text-5xl hover:text-orange-500">Back to Home</Link>
    </div>
  );
}
