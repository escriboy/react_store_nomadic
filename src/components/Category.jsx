import React from 'react';

export default function Category({ menu, onMenu }) {
  const { name } = menu;

  return (
    <ul className="px-2 text-xl mt-6 flex">
      {menu.map((item, index) => (
        <li key={index} onClick={() => onMenu(name)}>
          <button className="px-2">{item.name}</button>
        </li>
      ))}
    </ul>
  );
}
