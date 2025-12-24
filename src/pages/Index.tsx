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
  server: string[];
  version: string;
  type: string;
  features: string[];
  popular?: boolean;
}

const cheats: Cheat[] = [
  {
    id: 1,
    name: 'Ultimate PvP Pack',
    description: 'Полный набор для доминирования в PvP боях',
    price: 499,
    server: ['FunTime', 'ReallyWorld', 'HolyWorld'],
    version: '1.16.5',
    type: 'Combat',
    features: ['KillAura', 'Velocity', 'Criticals', 'AutoPot'],
    popular: true
  },
  {
    id: 2,
    name: 'Mega Miner Pro',
    description: 'Профессиональный набор для добычи ресурсов',
    price: 299,
    server: ['FunTime', 'SpookyTime'],
    version: '1.16.5',
    type: 'Mining',
    features: ['XRay', 'AutoMine', 'Nuker', 'ChestESP'],
    popular: true
  },
  {
    id: 3,
    name: 'Speed Demon',
    description: 'Максимальная скорость передвижения',
    price: 199,
    server: ['ReallyWorld', 'HolyWorld', 'SpookyTime'],
    version: '1.16.5',
    type: 'Movement',
    features: ['Speed', 'Fly', 'Jesus', 'Spider']
  },
  {
    id: 4,
    name: 'Ghost Client',
    description: 'Незаметный чит для обхода античита',
    price: 799,
    server: ['FunTime', 'ReallyWorld'],
    version: '1.16.5',
    type: 'Ghost',
    features: ['AimAssist', 'Reach', 'AutoClicker', 'NoFall'],
    popular: true
  },
  {
    id: 5,
    name: 'Builder Plus',
    description: 'Инструменты для быстрого строительства',
    price: 249,
    server: ['SpookyTime', 'HolyWorld'],
    version: '1.16.5',
    type: 'Building',
    features: ['Scaffold', 'FastPlace', 'AutoTool', 'Freecam']
  },
  {
    id: 6,
    name: 'Total Control',
    description: 'Полный контроль над игрой',
    price: 999,
    server: ['FunTime', 'ReallyWorld', 'SpookyTime', 'HolyWorld'],
    version: '1.16.5',
    type: 'Universal',
    features: ['All Features', 'Custom Modules', 'GUI', 'ClickGUI']
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

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-20 space-y-6">
              <div className="inline-block">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 mb-4">
                  Версия 1.16.5
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
                      <span className="text-2xl font-bold text-white">{cheat.price}₽</span>
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
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
                    <span className="text-2xl font-bold text-white">{cheat.price}₽</span>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
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
              <p className="text-gray-400 text-sm">Лучшие читы для Minecraft 1.16.5</p>
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