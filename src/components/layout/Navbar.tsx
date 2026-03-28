import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home",           to: "/" },
  { label: "Projets",        to: "/projects" },
  { label: "Certifications", to: "/certifications" },
  { label: "À propos",       to: "/about" },
  { label: "Contact",        to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent",
      )}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-sm hover:text-primary transition-colors"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
              <Terminal className="h-3.5 w-3.5 text-primary" />
            </span>
            <span>{siteConfig.name}</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-150",
                      isActive
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-4 rounded-full bg-primary" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <ThemeToggle />
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg hover:bg-accent transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-fade-in">
          <Container>
            <ul className="flex flex-col py-3 gap-0.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg transition-colors",
                        isActive
                          ? "text-foreground font-medium bg-accent/60"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/40",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span className="h-4 w-0.5 rounded-full bg-primary shrink-0" />
                        )}
                        {item.label}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
