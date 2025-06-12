import React, {useState} from 'react';
export const SuppliesView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>SUPPLIES - Supplies - donations, inventory, distrib</h2><p>donations</p></div>
};
export default SuppliesView;
