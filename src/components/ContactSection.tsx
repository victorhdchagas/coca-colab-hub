import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageCircle, Clock, Send, Twitch, Youtube } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-6 py-2 mb-6">
              <Mail className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Entre em Contato</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fale{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Conosco
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tem alguma dúvida, sugestão ou quer colaborar? Entre em contato conosco! 
              Adoramos conversar com nossa comunidade.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-primary" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome" 
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input 
                    id="subject" 
                    placeholder="Sobre o que você quer falar?" 
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Escreva sua mensagem aqui..." 
                    className="min-h-[120px] bg-background/50"
                  />
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Enviar Mensagem
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Email Direto</h3>
                      <p className="text-muted-foreground mb-2">
                        Para dúvidas gerais, sugestões ou feedback
                      </p>
                      <a 
                        href="mailto:contato@canaldococa.com" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        contato@canaldococa.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Contact */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-secondary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Parcerias & Negócios</h3>
                      <p className="text-muted-foreground mb-2">
                        Para colaborações, sponsorships e parcerias
                      </p>
                      <a 
                        href="mailto:parcerias@canaldococa.com" 
                        className="text-secondary hover:text-secondary/80 font-medium"
                      >
                        parcerias@canaldococa.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Live Schedule */}
              <Card className="bg-gradient-card border-border/50 hover:shadow-glow-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Horário das Lives</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-muted-foreground">Segunda à Sexta: <span className="text-foreground font-medium">20h às 23h</span></p>
                        <p className="text-muted-foreground">Sábados: <span className="text-foreground font-medium">19h às 00h</span></p>
                        <p className="text-muted-foreground">Domingos: <span className="text-foreground font-medium">Dia livre (às vezes rolam lives surpresa!)</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto p-4 flex-col gap-2" asChild>
                  <a href="#" className="text-center">
                    <Twitch className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-medium">Chat ao Vivo</div>
                      <div className="text-xs text-muted-foreground">na Twitch</div>
                    </div>
                  </a>
                </Button>
                
                <Button variant="outline" className="h-auto p-4 flex-col gap-2" asChild>
                  <a href="#" className="text-center">
                    <MessageCircle className="w-6 h-6 text-indigo-400" />
                    <div>
                      <div className="font-medium">Discord</div>
                      <div className="text-xs text-muted-foreground">Comunidade</div>
                    </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Quick Links */}
          <div className="mt-16 text-center bg-gradient-card rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
            <p className="text-muted-foreground mb-6">
              Algumas dúvidas comuns que podem te ajudar antes de entrar em contato
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <Button variant="outline" size="sm">
                Como participar dos sorteios?
              </Button>
              <Button variant="outline" size="sm">
                Posso sugerir jogos?
              </Button>
              <Button variant="outline" size="sm">
                Como virar moderador?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};