import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Exhibition {
  id: number;
  title: string;
  region: string;
  image: string;
  difficulty: string;
  plays: number;
}

interface Discussion {
  id: number;
  title: string;
  author: string;
  replies: number;
  date: string;
}

interface Bug {
  id: number;
  title: string;
  status: 'new' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
}

const Index = () => {
  const [exhibitions] = useState<Exhibition[]>([
    {
      id: 1,
      title: 'Коллекция РГАДА',
      region: 'Москва',
      image: 'https://images.unsplash.com/photo-1577083165633-14ebcdb0f658?w=800&q=80',
      difficulty: 'Средняя',
      plays: 1247
    },
    {
      id: 2,
      title: 'Архив Санкт-Петербурга',
      region: 'Санкт-Петербург',
      image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80',
      difficulty: 'Сложная',
      plays: 892
    },
    {
      id: 3,
      title: 'Сибирские документы',
      region: 'Новосибирск',
      image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
      difficulty: 'Легкая',
      plays: 2103
    }
  ]);

  const [discussions] = useState<Discussion[]>([
    { id: 1, title: 'Идея: добавить режим командной игры', author: 'Иван П.', replies: 15, date: '2 часа назад' },
    { id: 2, title: 'Предложение по улучшению UI карточек', author: 'Мария С.', replies: 8, date: '5 часов назад' },
    { id: 3, title: 'Как улучшить систему подсказок?', author: 'Алексей К.', replies: 23, date: '1 день назад' }
  ]);

  const [bugs] = useState<Bug[]>([
    { id: 1, title: '3D-модель не загружается в Firefox', status: 'in-progress', priority: 'high' },
    { id: 2, title: 'Неправильный подсчет очков в режиме "Эксперт"', status: 'new', priority: 'medium' },
    { id: 3, title: 'Текст накладывается на мобильных', status: 'resolved', priority: 'low' }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'in-progress': return 'bg-purple-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTQgMC02IDIuNjg2LTYgNnMyLjY4NiA2IDYgNiA2LTIuNjg2IDYtNi0yLjY4Ni02LTYtNnoiIHN0cm9rZT0iIzliODdmNSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <header className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center animate-scale-in">
                <Icon name="Library" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">ArchiveGuessr</h1>
                <p className="text-sm text-slate-400">Краудсорсинговая платформа</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </header>

        <section className="container mx-auto px-4 py-20 relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Браузерная онлайн-игра
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Угадай архив по <span className="text-primary">3D-выставке</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Исследуйте виртуальные архивные выставки и определяйте, какой архив или регион России представлен
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 hover:bg-slate-800 text-lg px-8">
                <Icon name="Info" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </section>
      </div>

      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="exhibitions" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="exhibitions" className="data-[state=active]:bg-primary">
              <Icon name="Image" size={18} className="mr-2" />
              Выставки
            </TabsTrigger>
            <TabsTrigger value="discussions" className="data-[state=active]:bg-primary">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Обсуждения
            </TabsTrigger>
            <TabsTrigger value="testing" className="data-[state=active]:bg-primary">
              <Icon name="Gamepad2" size={18} className="mr-2" />
              Тесты
            </TabsTrigger>
            <TabsTrigger value="bugs" className="data-[state=active]:bg-primary">
              <Icon name="Bug" size={18} className="mr-2" />
              Ошибки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exhibitions" className="mt-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">3D-выставки архивов</h3>
              <div className="flex gap-3">
                <Input 
                  placeholder="Поиск по региону..." 
                  className="w-64 bg-slate-800 border-slate-700 text-white"
                />
                <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                  <Icon name="Filter" size={18} />
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exhibitions.map((exhibition, index) => (
                <Card 
                  key={exhibition.id} 
                  className="group overflow-hidden bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all duration-300 hover-scale cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={exhibition.image} 
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    <Badge className="absolute top-3 right-3 bg-primary">
                      {exhibition.difficulty}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-semibold text-white mb-2">{exhibition.title}</h4>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 flex items-center gap-1">
                        <Icon name="MapPin" size={14} />
                        {exhibition.region}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {exhibition.plays}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-slate-700 hover:bg-slate-800">
                Загрузить ещё
                <Icon name="ChevronDown" size={18} className="ml-2" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="mt-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Обсуждения и предложения</h3>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={18} className="mr-2" />
                Создать тему
              </Button>
            </div>

            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card 
                  key={discussion.id}
                  className="bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all cursor-pointer p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 hover:text-primary transition-colors">
                        {discussion.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <Icon name="User" size={14} />
                          {discussion.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MessageCircle" size={14} />
                          {discussion.replies} ответов
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={14} />
                          {discussion.date}
                        </span>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-slate-600" />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Создать новое обсуждение</h4>
              <div className="space-y-4">
                <Input 
                  placeholder="Заголовок темы"
                  className="bg-slate-900 border-slate-700 text-white"
                />
                <Textarea 
                  placeholder="Описание вашего предложения или вопроса..."
                  className="bg-slate-900 border-slate-700 text-white min-h-32"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Опубликовать
                </Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="testing" className="mt-8 animate-fade-in">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Тестовые версии игры</h3>
              <p className="text-slate-400">Попробуйте предварительные версии и поделитесь отзывами</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name="TestTube" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">Версия 0.9.5 Beta</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Активная
                    </Badge>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  Добавлены новые подсказки, улучшена навигация в 3D-пространстве, исправлены критические баги
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <Icon name="Play" size={18} className="mr-2" />
                  Запустить тест
                </Button>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">Версия 1.0 RC1</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      Скоро
                    </Badge>
                  </div>
                </div>
                <p className="text-slate-300 mb-4">
                  Релиз-кандидат с режимом мультиплеера, достижениями и новым интерфейсом
                </p>
                <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800" disabled>
                  <Icon name="Lock" size={18} className="mr-2" />
                  В разработке
                </Button>
              </Card>
            </div>

            <Card className="mt-6 bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/30 p-6">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" size={24} className="text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Станьте бета-тестером</h4>
                  <p className="text-slate-300 mb-4">
                    Получайте доступ к новым версиям раньше всех и влияйте на развитие проекта
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Присоединиться
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="bugs" className="mt-8 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Отслеживание ошибок</h3>
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="Plus" size={18} className="mr-2" />
                Сообщить об ошибке
              </Button>
            </div>

            <div className="space-y-4">
              {bugs.map((bug) => (
                <Card 
                  key={bug.id}
                  className="bg-slate-800/50 border-slate-700 hover:border-primary/50 transition-all p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`${getPriorityColor(bug.priority)} text-white border-0`}>
                          {bug.priority === 'high' ? 'Высокий' : bug.priority === 'medium' ? 'Средний' : 'Низкий'}
                        </Badge>
                        <Badge className={`${getStatusColor(bug.status)} text-white border-0`}>
                          {bug.status === 'new' ? 'Новая' : bug.status === 'in-progress' ? 'В работе' : 'Решено'}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-medium text-white">
                        {bug.title}
                      </h4>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-slate-600" />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-slate-800/50 border-slate-700 p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Сообщить о новой ошибке</h4>
              <div className="space-y-4">
                <Input 
                  placeholder="Краткое описание проблемы"
                  className="bg-slate-900 border-slate-700 text-white"
                />
                <Textarea 
                  placeholder="Подробное описание: что произошло, как воспроизвести..."
                  className="bg-slate-900 border-slate-700 text-white min-h-32"
                />
                <div className="flex gap-3">
                  <select className="flex-1 px-3 py-2 bg-slate-900 border border-slate-700 rounded-md text-white">
                    <option>Приоритет</option>
                    <option>Высокий</option>
                    <option>Средний</option>
                    <option>Низкий</option>
                  </select>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <footer className="border-t border-slate-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Library" size={24} className="text-primary" />
                <span className="text-lg font-bold text-white">ArchiveGuessr</span>
              </div>
              <p className="text-slate-400 text-sm">
                Краудсорсинговая платформа для создания образовательных игр на основе архивных материалов
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Проект</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-primary cursor-pointer transition-colors">О платформе</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Как участвовать</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Документация</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Сообщество</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Форум</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Telegram</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3">Контакты</h5>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Связаться с нами</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Поддержка</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Партнёрство</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 ArchiveGuessr. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
