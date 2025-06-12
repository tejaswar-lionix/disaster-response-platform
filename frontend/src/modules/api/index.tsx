import React, {useState} from 'react';
export const ApiView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>API - API - REST for shelters, volunteers, sup</h2><p>POST shelter</p></div>
};
export default ApiView;
