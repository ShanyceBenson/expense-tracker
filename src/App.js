import './App.css';
import { Header } from './components/Header/Header.js';
import { Balance } from './components/Balance/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTranaction/AddTransaction';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className= "container" >
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}



export default App;
