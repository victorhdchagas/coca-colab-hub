import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Star, Shirt, Coffee, Users } from 'lucide-react';

export const StoreSection = () => {
  const products = [
    {
      id: 1,
      name: 'Camiseta Canal do Coca',
      price: 'R$ 59,90',
      category: 'Vestuário',
      rating: 4.9,
      sales: 150,
      icon: Shirt,
      description: 'Camiseta premium 100% algodão com estampa exclusiva'
    },
    {
      id: 2,
      name: 'Caneca Gaming Coca',
      price: 'R$ 39,90',
      category: 'Acessórios',
      rating: 4.8,
      sales: 89,
      icon: Coffee,
      description: 'Caneca de cerâmica para os verdadeiros gamers'
    },
    {
      id: 3,
      name: 'Moletom Comunidade',
      price: 'R$ 129,90',
      category: 'Vestuário',
      rating: 5.0,
      sales: 45,
      icon: Users,
      description: 'Moletom com capuz, super macio e confortável'
    }
  ];

  return (
    <section id="loja" className="py-20 bg-muted/30 relative overflow-hidden">
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
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Loja Oficial</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Loja do{' '}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Coca
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Acesse nossa loja e garante camisetas, canecas e moletons exclusivos 
              para mostrar que você faz parte da tropa do Coca!
            </p>
          </div>

          {/* Featured Products */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <Card 
                  key={product.id} 
                  className="bg-gradient-card border-border/50 hover:shadow-glow-primary transition-all duration-300 group cursor-pointer overflow-hidden"
                >
                  <CardContent className="p-6">
                    {/* Product Icon/Image */}
                    <div className="aspect-square bg-muted/30 rounded-lg mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <IconComponent className="w-16 h-16 text-primary group-hover:scale-110 transition-transform" />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {product.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>

                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {product.sales} vendidos
                        </span>
                      </div>

                      <Button 
                        className="w-full" 
                        variant={index === 1 ? 'gaming' : 'hero'}
                      >
                        Comprar Agora
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Store CTA */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 border border-border/50 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-secondary-foreground" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">
                Visite Nossa Loja Completa
              </h3>
              
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Encontre muito mais produtos exclusivos, edições limitadas e 
                lançamentos especiais na nossa loja oficial. Frete grátis para 
                todo o Brasil em compras acima de R$ 100!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Ir para a Loja
                  <ShoppingBag className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Ver Promoções
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl mb-1">🚚</div>
                  <p className="text-sm text-muted-foreground">Frete Grátis</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">🔒</div>
                  <p className="text-sm text-muted-foreground">Compra Segura</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">⭐</div>
                  <p className="text-sm text-muted-foreground">5 Estrelas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};