import { Button } from '@/components/ui/button';
import { Twitch, Youtube, Instagram, Twitter, MessageCircle, Music, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter/X' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
    { icon: Music, href: '#', label: 'TikTok' },
  ];

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Notícias', href: '#noticias' },
    { name: 'Eventos', href: '#eventos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">C</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Canal do Coca
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Uma comunidade unida pela paixão por games, diversão e boas energias. 
                Aqui todo mundo é bem-vindo e a zoeira nunca tem fim!
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="outline"
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
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contato</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">contato@canaldococa.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Parcerias</p>
                  <p className="text-sm font-medium text-foreground">parcerias@canaldococa.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Horário das Lives</p>
                  <p className="text-sm font-medium text-foreground">Segunda à Sexta - 20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Canal do Coca. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-destructive fill-current" />
              <span>para a comunidade</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute right-8 -top-6">
          <Button
            variant="hero"
            size="icon"
            className="rounded-full shadow-glow-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};