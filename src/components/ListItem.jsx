// eslint-disable-next-line react/prop-types
const List_item = ({ href, text }) => {
  return (
    <li>
      <a href={href}> {text} </a>
    </li>
  );
};
export default List_item;
