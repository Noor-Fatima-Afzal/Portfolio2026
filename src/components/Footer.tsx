import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Noor Fatima · AI Engineer & Machine Learning Engineer</p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:noorfatimaafzalbutt@gmail.com"
            className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
