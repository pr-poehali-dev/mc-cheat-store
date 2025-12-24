import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Cheat {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  server: string[];
  version: string;
  type: string;
  features: string[];
  popular?: boolean;
}

const cheats: Cheat[] = [
  {
    id: 1,
    name: 'Monoton (crack)',
    description: 'Мощный чит-клиент с расширенными возможностями',
    price: 0,
    oldPrice: 250,
    server: ['FunTime', 'ReallyWorld', 'HolyWorld'],
    version: '1.12.2',
    type: 'Combat',
    features: ['KillAura', 'Velocity', 'Criticals', 'AutoPot'],
    popular: true
  },
  {
    id: 2,
    name: 'Dimasik (crack)',
    description: 'Продвинутый клиент для профессионалов',
    price: 0,
    oldPrice: 350,
    server: ['FunTime', 'SpookyTime'],
    version: '1.12.2',
    type: 'Universal',
    features: ['XRay', 'AutoMine', 'Nuker', 'ChestESP'],
    popular: true
  },
  {
    id: 3,
    name: 'RelakeDLC',
    description: 'Легкий и быстрый чит-клиент',
    price: 0,
    oldPrice: 100,
    server: ['ReallyWorld', 'HolyWorld', 'SpookyTime'],
    version: '1.12.2',
    type: 'Movement',
    features: ['Speed', 'Fly', 'Jesus', 'Spider'],
    popular: true
  },
  {
    id: 4,
    name: 'Nursultan',
    description: 'Премиум чит-клиент с уникальными функциями',
    price: 0,
    oldPrice: 863,
    server: ['FunTime', 'ReallyWorld', 'SpookyTime', 'HolyWorld'],
    version: '1.12.2',
    type: 'Ghost',
    features: ['AimAssist', 'Reach', 'AutoClicker', 'NoFall'],
    popular: true
  }
];

const updates = [
  { date: '2024-12-20', title: 'Обновление античита на FunTime', description: 'Обновлены модули для обхода нового античита' },
  { date: '2024-12-18', title: 'Новый модуль AutoTotem', description: 'Добавлен автоматический тотем для всех паков' },
  { date: '2024-12-15', title: 'Оптимизация Ghost Client', description: 'Улучшена производительность и незаметность' },
  { date: '2024-12-10', title: 'Поддержка SpookyTime', description: 'Добавлена полная поддержка сервера SpookyTime' }
];

export default function Index() {
  const [selectedServer, setSelectedServer] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState<Cheat[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const addToCart = (cheat: Cheat) => {
    if (!cart.find(item => item.id === cheat.id)) {
      setCart([...cart, cheat]);
    }
  };

  const removeFromCart = (cheatId: number) => {
    setCart(cart.filter(item => item.id !== cheatId));
  };

  const handlePay = () => {
    setIsPaid(true);
  };

  const handleGoToFiles = () => {
    window.open('https://collapseloader.org/', '_blank');
  };

  const filteredCheats = cheats.filter(cheat => {
    const serverMatch = selectedServer === 'all' || cheat.server.includes(selectedServer);
    const typeMatch = selectedType === 'all' || cheat.type === selectedType;
    return serverMatch && typeMatch;
  });

  const servers = ['FunTime', 'ReallyWorld', 'SpookyTime', 'HolyWorld'];
  const types = ['Combat', 'Mining', 'Movement', 'Ghost', 'Building', 'Universal'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <header className="border-b border-purple-500/20 backdrop-blur-lg bg-slate-950/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                MCCheats Pro
              </h1>
            </div>
            <nav className="flex gap-6">
              <button 
                onClick={() => setActiveTab('home')}
                className={`transition-colors ${activeTab === 'home' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveTab('catalog')}
                className={`transition-colors ${activeTab === 'catalog' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
              >
                Каталог
              </button>
              <button 
                onClick={() => setActiveTab('updates')}
                className={`transition-colors ${activeTab === 'updates' ? 'text-purple-400' : 'text-gray-400 hover:text-white'}`}
              >
                Обновления
              </button>
            </nav>
          </div>
        </div>
      </header>

      {cart.length > 0 && !isCartOpen && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/50 flex items-center justify-center transition-transform hover:scale-110 animate-scale-in"
        >
          <Icon name="ShoppingCart" className="text-white" size={24} />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {cart.length}
          </span>
        </button>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="bg-slate-900 border-purple-500/20 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            <CardHeader className="border-b border-purple-500/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="ShoppingCart" size={24} />
                  Корзина ({cart.length})
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <Icon name="X" size={20} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-6">
              {!isPaid ? (
                <div className="space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">Корзина пуста</p>
                  ) : (
                    cart.map(cheat => (
                      <div key={cheat.id} className="bg-slate-800/50 rounded-lg p-4 flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-bold">{cheat.name}</h4>
                          <p className="text-sm text-gray-400">{cheat.version}</p>
                          <div className="flex items-center gap-2 mt-2">
                            {cheat.oldPrice && (
                              <span className="text-sm text-gray-500 line-through">{cheat.oldPrice}₽</span>
                            )}
                            <span className="text-lg font-bold text-green-400">{cheat.price}₽</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(cheat.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Icon name="Trash2" size={20} />
                        </Button>
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="text-center py-8 space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Icon name="Check" className="text-green-400" size={40} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Успешная оплата!</h3>
                    <p className="text-gray-400">Ваш заказ успешно обработан</p>
                  </div>
                  <Button
                    size="lg"
                    onClick={handleGoToFiles}
                    className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                  >
                    <Icon name="Download" className="mr-2" size={20} />
                    Перейти к файлам
                  </Button>
                </div>
              )}
            </CardContent>
            {!isPaid && cart.length > 0 && (
              <CardFooter className="border-t border-purple-500/20 flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-gray-400">Итого:</p>
                  <p className="text-2xl font-bold text-green-400">
                    {cart.reduce((sum, cheat) => sum + cheat.price, 0)}₽
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={handlePay}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Оплатить
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      )}

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-20 space-y-6">
              <div className="inline-block">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 mb-4">
                  Версия 1.12.2
                </Badge>
              </div>
              <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
                Лучшие читы для Minecraft
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Профессиональные читы для популярных серверов. Обход античита, регулярные обновления и техподдержка 24/7
              </p>
              <div className="flex gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/50"
                  onClick={() => setActiveTab('catalog')}
                >
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Смотреть каталог
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                  onClick={() => setActiveTab('updates')}
                >
                  <Icon name="Bell" className="mr-2" size={20} />
                  Обновления
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              {[
                { icon: 'Shield', title: 'Обход античита', desc: 'Работает на всех популярных серверах' },
                { icon: 'Zap', title: 'Регулярные обновления', desc: 'Постоянная поддержка и новые функции' },
                { icon: 'Headphones', title: 'Поддержка 24/7', desc: 'Всегда на связи для помощи' }
              ].map((feature, i) => (
                <Card key={i} className="bg-slate-900/50 border-purple-500/20 backdrop-blur transition-transform duration-200 hover:scale-105">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-400">{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </section>

            <section className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Популярные читы</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {cheats.filter(c => c.popular).map(cheat => (
                  <Card key={cheat.id} className="bg-slate-900/50 border-purple-500/20 backdrop-blur transition-transform duration-200 hover:scale-105">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-white">{cheat.name}</CardTitle>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                          {cheat.type}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-400">{cheat.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {cheat.server.map(server => (
                          <Badge key={server} variant="outline" className="border-blue-500/50 text-blue-300">
                            {server}
                          </Badge>
                        ))}
                      </div>
                      <div className="space-y-1">
                        {cheat.features.slice(0, 3).map(feature => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                            <Icon name="Check" size={16} className="text-green-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {cheat.oldPrice && (
                          <span className="text-lg text-gray-500 line-through">{cheat.oldPrice}₽</span>
                        )}
                        <span className="text-2xl font-bold text-green-400">{cheat.price}₽</span>
                      </div>
                      <Button 
                        onClick={() => addToCart(cheat)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-white">Каталог читов</h2>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                {filteredCheats.length} читов
              </Badge>
            </div>

            <Card className="bg-slate-900/50 border-purple-500/20 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Filter" size={20} />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Сервер</label>
                    <Select value={selectedServer} onValueChange={setSelectedServer}>
                      <SelectTrigger className="bg-slate-800 border-purple-500/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-purple-500/30">
                        <SelectItem value="all">Все серверы</SelectItem>
                        {servers.map(server => (
                          <SelectItem key={server} value={server}>{server}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Тип чита</label>
                    <Select value={selectedType} onValueChange={setSelectedType}>
                      <SelectTrigger className="bg-slate-800 border-purple-500/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-purple-500/30">
                        <SelectItem value="all">Все типы</SelectItem>
                        {types.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {filteredCheats.map(cheat => (
                <Card key={cheat.id} className="bg-slate-900/50 border-purple-500/20 backdrop-blur transition-transform duration-200 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-white">{cheat.name}</CardTitle>
                      {cheat.popular && (
                        <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
                          <Icon name="Star" size={12} className="mr-1" />
                          Хит
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-400">{cheat.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50">
                        {cheat.type}
                      </Badge>
                      <Badge variant="outline" className="border-gray-500/50 text-gray-300">
                        {cheat.version}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cheat.server.map(server => (
                        <Badge key={server} variant="outline" className="border-blue-500/50 text-blue-300 text-xs">
                          {server}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-1">
                      {cheat.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                          <Icon name="Check" size={14} className="text-green-400" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {cheat.oldPrice && (
                        <span className="text-lg text-gray-500 line-through">{cheat.oldPrice}₽</span>
                      )}
                      <span className="text-2xl font-bold text-green-400">{cheat.price}₽</span>
                    </div>
                    <Button 
                      onClick={() => addToCart(cheat)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      Купить
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-white">Обновления</h2>
            <div className="space-y-4">
              {updates.map((update, i) => (
                <Card key={i} className="bg-slate-900/50 border-purple-500/20 backdrop-blur transition-transform duration-200 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-white flex items-center gap-2">
                          <Icon name="Sparkles" size={20} className="text-purple-400" />
                          {update.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">{update.description}</CardDescription>
                      </div>
                      <Badge variant="outline" className="border-gray-500/50 text-gray-300">
                        {update.date}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-purple-500/20 mt-20 py-8 backdrop-blur-lg bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">MCCheats Pro</h4>
              <p className="text-gray-400 text-sm">Лучшие читы для Minecraft 1.12.2</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Серверы</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {servers.map(server => <li key={server}>{server}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Telegram</li>
                <li>Discord</li>
                <li>Email</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Правила</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}