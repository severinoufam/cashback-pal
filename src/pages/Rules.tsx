import React from 'react';
import { FileCode, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import BottomNavigation from '../components/layout/BottomNavigation';

const Rules: React.FC = () => {
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
            <FileCode className="mr-2 text-brand-green-600" /> 
            Regulamento
          </h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
          <h2 className="text-lg font-medium text-gray-800 mb-3">Regulamento do Programa MR Jomar Vantagens</h2>
          
          <div className="prose prose-sm max-w-none text-gray-700">
            <p>
              Este regulamento estabelece as regras de participação, acúmulo e resgate de vantagens do programa 
              MR Jomar Vantagens. Ao utilizar o aplicativo, você concorda com todos os termos descritos abaixo.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">1. ELEGIBILIDADE</h3>
            <p>
              1.1. O programa MR Jomar Vantagens é destinado exclusivamente aos clientes da MR Jomar, 
              pessoas físicas maiores de 18 anos, que possuam cadastro ativo.
            </p>
            <p>
              1.2. A adesão ao programa é gratuita e ocorre automaticamente após a confirmação do cadastro.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">2. ACÚMULO DE PONTOS E CASHBACK</h3>
            <p>
              2.1. O participante acumulará pontos e cashback mediante a realização de transações com os parceiros do programa.
            </p>
            <p>
              2.2. Cada parceiro do programa possui uma porcentagem específica de cashback, que pode variar entre 1% e 15% do valor da compra.
            </p>
            <p>
              2.3. O cálculo de pontos segue a seguinte regra: para cada R$ 1,00 em compras, o cliente recebe 1 ponto.
            </p>
            <p>
              2.4. O cashback e os pontos serão creditados na conta do participante em até 30 dias após a confirmação da transação pelo parceiro.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">3. VALIDADE</h3>
            <p>
              3.1. Os pontos acumulados têm validade de 12 meses a contar da data de crédito na conta do participante.
            </p>
            <p>
              3.2. O cashback acumulado não possui prazo de validade, permanecendo disponível enquanto o cadastro do cliente estiver ativo.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">4. RESGATE DE VANTAGENS</h3>
            <p>
              4.1. O participante poderá utilizar seus pontos e cashback para:
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>Adquirir produtos e serviços disponíveis na Loja do aplicativo;</li>
              <li>Obter descontos em faturas;</li>
              <li>Realizar transferências de cashback para outros clientes;</li>
              <li>Utilizá-los em compras com parceiros participantes.</li>
            </ul>
            <p>
              4.2. A disponibilidade dos produtos, serviços e descontos está sujeita a alterações sem aviso prévio.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">5. CANCELAMENTO</h3>
            <p>
              5.1. O participante poderá solicitar o cancelamento da sua participação no programa a qualquer momento.
            </p>
            <p>
              5.2. Em caso de cancelamento, os pontos e cashback disponíveis poderão ser utilizados no prazo de 30 dias. 
              Após este período, serão automaticamente cancelados.
            </p>
            
            <h3 className="text-base font-medium mt-4 mb-2">6. ALTERAÇÕES NO REGULAMENTO</h3>
            <p>
              6.1. MR Jomar reserva-se o direito de alterar, suspender ou cancelar o programa, mediante comunicação 
              prévia aos participantes com 30 dias de antecedência.
            </p>
            
            <div className="mt-6 text-center text-sm">
              <p>Última atualização: 01 de novembro de 2023</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
};

export default Rules;
