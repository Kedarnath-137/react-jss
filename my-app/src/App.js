import TableComp from './components/function components/table/tablecomp';
import ButtonComponent from './components/function components/button/button-component';
import OrderList from './components/function components/list/order-list/ordered-list';
import UnorderedList from './components/function components/list/unorder-list/unordered-list';
import ImageComponent from './components/function components/image/imagecmpnt';

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <ButtonComponent />
      <br></br>
      <ButtonComponent />
      <ButtonComponent />
      <OrderList></OrderList>
      <UnorderedList></UnorderedList>
      <ImageComponent></ImageComponent>
      <TableComp></TableComp>
    </div>
  );
}

export default App;
