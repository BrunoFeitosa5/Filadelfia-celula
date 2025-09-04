import React, { useState } from 'react';
import { Menu, X, Heart, Users, Phone, Mail, MapPin, Star, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <h1 className="text-2xl font-bold text-gray-900">Célula Filadélfia</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Início</a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Sobre Nós</a>
              <a href="#proposito" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Propósito</a>
              <a href="#galeria" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Galeria</a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                <a href="#inicio" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Início</a>
                <a href="#sobre" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Sobre Nós</a>
                <a href="#proposito" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Propósito</a>
                <a href="#galeria" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Galeria</a>
                <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300" onClick={toggleMenu}>Contato</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Início */}
      <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bem-vindos à
              <span className="text-blue-600 block">Célula Filadélfia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Um lugar onde corações se unem para adorar a Deus e compartilhar Seu amor
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <Star className="h-8 w-8 text-yellow-500 mx-auto mb-4" />
              <p className="text-lg italic text-gray-700 mb-2">
                "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles."
              </p>
              <p className="text-sm font-semibold text-blue-600">Mateus 18:20</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nossa História</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Célula Filadélfia nasceu do desejo de criar um espaço íntimo onde as pessoas possam 
                se conectar com Deus e umas com as outras. Somos uma comunidade de fé que se reúne 
                regularmente para estudar a Palavra, orar juntos e crescer espiritualmente.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Acreditamos no poder da comunhão e no amor fraternal que nos une como família em Cristo. 
                Cada encontro é uma oportunidade de fortalecer nossa fé e compartilhar as bênçãos que 
                Deus tem derramado sobre nossas vidas.
              </p>
              <div className="flex items-center text-blue-600">
                <Users className="h-5 w-5 mr-2" />
                <span className="font-semibold">Unidos em Cristo</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Nossos Valores</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Amor incondicional a Deus e ao próximo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comunhão e apoio mútuo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Crescimento espiritual contínuo</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Evangelização e discipulado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito */}
      <section id="proposito" className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nosso Propósito</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Existimos para falar sobre Deus e Seu infinito amor por cada um de nós
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Adoração</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Reunimo-nos para louvar e adorar a Deus, reconhecendo Sua grandeza e bondade em nossas vidas através de oração e cânticos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Comunhão</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Criamos laços de amor fraternal, apoiando uns aos outros nos momentos de alegria e dificuldade, como uma verdadeira família.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Evangelização</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Compartilhamos o evangelho de Cristo com amor, levando a mensagem de salvação para aqueles que ainda não conhecem Jesus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section id="galeria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Galeria</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Momentos especiais da nossa caminhada juntos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/2.jpeg" 
                alt="Momento de oração em grupo"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Momento de Oração</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/eu.jpeg" 
                alt="Estudo bíblico em grupo"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Estudo Bíblico</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/Celula4.jpeg"
                alt="Comunhão entre irmãos"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Comunhão Fraternal</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/cl.jpeg" 
                alt="Louvor e adoração"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Louvor e Adoração</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/1.jpeg" 
                alt="Jovens em oração"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Momento em Cristo</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="images/comunh.jpeg" 
                alt="Família cristã"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">Comunhão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Versículos */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Palavra de Deus</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-lg italic text-gray-700 mb-4">
                "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos, 
                guia-me mansamente a águas tranquilas."
              </p>
              <p className="text-sm font-semibold text-blue-600">Salmos 23:1-2</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-lg italic text-gray-700 mb-4">
                "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, 
                para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
              </p>
              <p className="text-sm font-semibold text-blue-600">João 3:16</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-lg italic text-gray-700 mb-4">
                "Posso todas as coisas naquele que me fortalece."
              </p>
              <p className="text-sm font-semibold text-blue-600">Filipenses 4:13</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Star className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-lg italic text-gray-700 mb-4">
                "E sabemos que todas as coisas contribuem juntamente para o bem daqueles 
                que amam a Deus, daqueles que são chamados segundo o seu propósito."
              </p>
              <p className="text-sm font-semibold text-blue-600">Romanos 8:28</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Venha fazer parte da nossa família em Cristo</p>
          </div>

         <div className="grid md:grid-cols-2 gap-12">
  <div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Fale Conosco</h3>
    <div className="space-y-6">
      
      {/* Telefone */}
      <div className="flex items-start">
        <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-gray-900">Telefone</h4>
          <p className="text-gray-600">(11) 98447-8855</p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start">
        <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-gray-900">Email</h4>
          <p className="text-gray-600">celula.filadelfia@gmail.com</p>
        </div>
      </div>

      {/* Localização */}
      <div className="flex items-start">
        <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-gray-900">Localização</h4>
          <p className="text-gray-600">
            Rua: Bertoldo torres galvão, número 30, vila gepina, Itaquaquecetuba, SP
          </p>
        </div>
      </div>

      {/* WhatsApp */}
      <div className="flex items-start">
        <MessageCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-gray-900">WhatsApp</h4>
          <a 
            href="https://wa.me/5511984478855" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            Chame no WhatsApp
          </a>
        </div>
      </div>

    </div>
  


              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Horário dos Encontros</h4>
                <p className="text-gray-600">Todas as quartas-feiras às 20:00.</p>
                <p className="text-gray-600 mt-2">Você é sempre bem-vindo!</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma Mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-400 mr-2" />
              <h3 className="text-2xl font-bold">Célula Filadélfia</h3>
            </div>
            <p className="text-gray-400 mb-4">
              "Mas vós sois geração eleita, sacerdócio real, nação santa, povo adquirido..."
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Célula Filadélfia. Todos os direitos reservados. | Feito com ❤️ para a glória de Deus
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;