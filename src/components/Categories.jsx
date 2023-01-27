export default function Categories({ menus, onSelect, setMenus }) {
  const categories = [
    {
      name: 'all',
    },
    {
      name: 'audio',
    },
    {
      name: 'mouse',
    },
    {
      name: 'keyboard',
    },
  ];

  return (
    <ul className="flex font-bold">
      {categories.map((item, index) => (
        <li
          className="flex items-center ml-2 mr-4 mt-8 cursor-pointer bg-brand text-white px-4 py-2 rounded-md"
          key={index}
          onClick={() => onSelect(item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
