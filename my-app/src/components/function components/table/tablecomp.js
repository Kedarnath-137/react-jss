import Tablenonrepeat from './nonrepeat_table';
function TableComp() {
  return (
    <table border={2}>
      <tr>
        <th>
          <h3>kedar</h3>
        </th>
        <th>
          <h3>sai</h3>
        </th>
        <th>
          <h3>surya</h3>
        </th>
      </tr>

      <Tablenonrepeat />
      <Tablenonrepeat></Tablenonrepeat>
    </table>
  );
}

export default TableComp;
