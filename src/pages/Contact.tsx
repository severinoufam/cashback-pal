
import React from 'react';
import { Phone, ArrowLeft, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-container">
        <Link to="/" className="flex items-center text-brand-green-600 mb-4">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Voltar
        </Link>
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <Phone className="mr-2 text-brand-green-600" /> 
            Contato
          </h1>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Fale Conosco</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-brand-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Atendimento Telefônico</h3>
                  <p className="text-gray-600 mt-1">0800 123 4567</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, das 8h às 20h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-brand-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">E-mail</h3>
                  <p className="text-gray-600 mt-1">contato@mrjomar.com.br</p>
                  <p className="text-sm text-gray-500">Respondemos em até 24 horas úteis</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageSquare className="w-5 h-5 text-brand-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Chat Online</h3>
                  <p className="text-gray-600 mt-1">Disponível no aplicativo</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, das 8h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-green-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-800">Endereço</h3>
                  <p className="text-gray-600 mt-1">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-sm text-gray-500">São Paulo - SP, 01310-100</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Envie uma Mensagem</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <select className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all">
                  <option value="">Selecione o assunto</option>
                  <option value="duvida">Dúvida</option>
                  <option value="sugestao">Sugestão</option>
                  <option value="reclamacao">Reclamação</option>
                  <option value="elogio">Elogio</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva sua mensagem..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:border-brand-green-400 focus:ring-2 focus:ring-brand-green-200 focus:outline-none transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-brand-green-500 text-white rounded-xl font-medium hover:bg-brand-green-600 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-4">FAQ - Perguntas Frequentes</h2>
            
            <div className="space-y-3">
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="font-medium text-gray-800">Como funciona o cashback?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  O cashback é um sistema de recompensa em que parte do valor das suas compras com parceiros volta para você como crédito.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="font-medium text-gray-800">Como resgatar meus pontos?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Você pode resgatar seus pontos na seção "Loja" do aplicativo, trocando por produtos ou serviços disponíveis.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-3">
                <h3 className="font-medium text-gray-800">Qual o prazo para receber meu cashback?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  O cashback é creditado em até 30 dias após a confirmação da compra pelo parceiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Contact;
