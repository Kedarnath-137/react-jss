// {txt} it is a destructing of Prop
// we can use without destructing by taking parameter like any name eg prop in h3 prop.txt

let TableComponent = ({ txt, txtColor }) => {
  return <h3 style={{ color: txtColor }}>{txt}</h3>;
};

export default TableComponent;
