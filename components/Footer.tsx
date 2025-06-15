import Link from "next/link";
import XShareButton from "./XShareButton";

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Share and Creator Section */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <XShareButton />
          <span className="text-xs text-zinc-500">|</span>
          <a
            href="https://x.com/AuNEGqil1FrGWHI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            @AuNEGqil1FrGWHI
          </a>
        </div>
        
        {/* Legal Links */}
        <div className="text-center">
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
      </div>
    </footer>
  );
}