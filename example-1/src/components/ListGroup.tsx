function ListGroup() {
  let items = ['Badong', 'linhe', 'beijing', 'san diego'];
  // items = [];

  // const message = items.length === 0 ? <p>No item found</p> : null;
  const message = items.length === 0 && <p>No item found</p>;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item} className='list-group-item'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
