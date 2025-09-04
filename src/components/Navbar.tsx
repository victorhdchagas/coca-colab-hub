import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Twitch, Youtube, Instagram, Twitter, MessageCircle, Music } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter/X' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Music, href: '#', label: 'TikTok' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Canal do Coca
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#noticias" className="text-foreground hover:text-primary transition-colors">
              Notícias
            </a>
            <a href="#eventos" className="text-foreground hover:text-primary transition-colors">
              Eventos
            </a>
            <a href="#loja" className="text-foreground hover:text-primary transition-colors">
              Loja
            </a>
          </div>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="nav"
                size="icon"
                asChild
                className="hover:shadow-glow-primary"
              >
                <a href={href} aria-label={label}>
                  <Icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="nav"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#inicio"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#noticias"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </a>
              <a
                href="#eventos"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Eventos
              </a>
              <a
                href="#loja"
                className="block text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Loja
              </a>
              
              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Conecte-se conosco:</p>
                <div className="flex space-x-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Button
                      key={label}
                      variant="nav"
                      size="icon"
                      asChild
                    >
                      <a href={href} aria-label={label}>
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};