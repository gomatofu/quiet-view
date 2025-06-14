import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-400">
          © Quietview –{" "}
          <Link 
            href="/terms" 
            className="hover:text-zinc-200 transition-colors"
          >
            Terms
          </Link>
          {" | "}
          <Link 
            href="/privacy" 
            className="hover:text-zinc-200 transition-colors"
          >
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}