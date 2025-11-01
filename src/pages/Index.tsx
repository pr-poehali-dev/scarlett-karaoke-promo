import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

export default function Index() {
  const [seatsLeft, setSeatsLeft] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft(prev => Math.max(8, prev - Math.floor(Math.random() * 2)));
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/79999999999?text=Здравствуйте!%20Хочу%20забронировать%20стол%20на%20Новый%20год%20в%20Scarlett', '_blank');
  };

  const benefits = [
    {
      icon: 'Volume2',
      title: 'Профессиональный звук',
      description: 'Современное караоке-оборудование и акустика премиум-класса'
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Изысканная кухня',
      description: 'Праздничное меню от шеф-повара и барная карта'
    },
    {
      icon: 'Sparkles',
      title: 'Уютная атмосфера',
      description: 'Стильный интерьер с праздничным оформлением'
    },
    {
      icon: 'Mic2',
      title: 'Караоке-библиотека',
      description: 'Более 10,000 песен на русском и английском языках'
    },
    {
      icon: 'Camera',
      title: 'Фотозоны',
      description: 'Инстаграмные локации для незабываемых снимков'
    },
    {
      icon: 'Users',
      title: 'Отдельные залы',
      description: 'Приватные пространства для компаний любого размера'
    }
  ];

  const formats = [
    {
      icon: 'Building2',
      title: 'Корпоративы',
      description: 'Организуем незабываемый корпоратив для вашей команды с развлекательной программой',
      price: 'от 5000₽ с человека'
    },
    {
      icon: 'PartyPopper',
      title: 'Новогодняя ночь 2025',
      description: 'Встреча Нового года с живой музыкой, шоу-программой и праздничным банкетом',
      price: 'от 8000₽ с человека'
    },
    {
      icon: 'Gift',
      title: 'Дни рождения',
      description: 'Отметьте день рождения с размахом в уютной атмосфере нашего клуба',
      price: 'от 4000₽ с человека'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/59da43af-1476-4b07-b5df-f0063d8458a6/files/b6a11d01-a724-4fc4-b37e-db3d163a11fb.jpg',
      title: 'Праздничная атмосфера'
    },
    {
      url: 'https://cdn.poehali.dev/projects/59da43af-1476-4b07-b5df-f0063d8458a6/files/13ffe48f-fa15-42d8-bb8b-826d5be9e10c.jpg',
      title: 'Сцена и караоке'
    },
    {
      url: 'https://cdn.poehali.dev/projects/59da43af-1476-4b07-b5df-f0063d8458a6/files/7b2ba299-aa76-4483-a992-2902027c048a.jpg',
      title: 'Фотозоны'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/59da43af-1476-4b07-b5df-f0063d8458a6/files/b6a11d01-a724-4fc4-b37e-db3d163a11fb.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/925f6bd4-f5cf-42fd-97d3-4592ac7696d4.JPG" 
              alt="Scarlett Logo" 
              className="w-32 h-32 mx-auto mb-8 rounded-full border-4 border-secondary/50 shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in text-white" style={{ animationDelay: '0.1s' }}>
            Встреть Новый год <br />
            <span className="text-secondary animate-glow">в Scarlett!</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Караоке-клуб премиум-класса в центре Анапы
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-2xl"
              onClick={scrollToBooking}
            >
              <Icon name="Calendar" className="mr-2" size={24} />
              Забронировать стол
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-secondary text-white hover:bg-secondary hover:text-black text-lg px-8 py-6"
              onClick={openWhatsApp}
            >
              <Icon name="MessageCircle" className="mr-2" size={24} />
              WhatsApp
            </Button>
          </div>

          <div className="inline-block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Badge className="bg-secondary text-secondary-foreground px-6 py-3 text-lg font-semibold">
              <Icon name="Gift" className="mr-2" size={20} />
              Бутылка шампанского в подарок при бронировании!
            </Badge>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-secondary" />
        </div>
      </div>

      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Почему выбирают <span className="text-primary">Scarlett</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Всё для незабываемого праздника
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Форматы <span className="text-secondary">праздников</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <Card 
                key={index} 
                className="bg-gradient-to-br from-card to-background border-2 border-border hover:border-secondary transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                    <Icon name={format.icon} size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-center text-foreground">{format.title}</h3>
                  <p className="text-muted-foreground mb-4 text-center">{format.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-primary">{format.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Атмосфера <span className="text-primary">клуба</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-xl group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-8 border-2 border-primary animate-fade-in">
            <Icon name="Timer" size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Торопитесь забронировать!
            </h2>
            <div className="text-6xl font-extrabold text-secondary mb-4 animate-glow">
              {seatsLeft}
            </div>
            <p className="text-xl text-muted-foreground mb-6">
              мест осталось на новогоднюю ночь
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={openWhatsApp}
            >
              <Icon name="Zap" className="mr-2" size={24} />
              Забронировать сейчас
            </Button>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Контакты
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Свяжитесь с нами удобным способом
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Адрес</h3>
                <p className="text-muted-foreground">г. Анапа, ул. Крымская, 123</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Icon name="Phone" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 999-99-99</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Icon name="Clock" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Режим работы</h3>
                <p className="text-muted-foreground">Ежедневно с 18:00 до 06:00</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8">
                <Icon name="Instagram" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Instagram</h3>
                <p className="text-muted-foreground">@scarlett_anapa</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-8 shadow-2xl"
              onClick={openWhatsApp}
            >
              <Icon name="MessageCircle" className="mr-3" size={28} />
              Написать в WhatsApp
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Ответим в течение 5 минут
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center">
          <img 
            src="https://cdn.poehali.dev/files/925f6bd4-f5cf-42fd-97d3-4592ac7696d4.JPG" 
            alt="Scarlett Logo" 
            className="w-16 h-16 mx-auto mb-4 rounded-full"
          />
          <p className="text-muted-foreground mb-2">
            Караоке-клуб Scarlett © 2024
          </p>
          <p className="text-sm text-muted-foreground">
            Встреть Новый год незабываемо!
          </p>
        </div>
      </footer>
    </div>
  );
}
