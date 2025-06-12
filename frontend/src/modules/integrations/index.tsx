import React, {useState} from 'react';
export const IntegrationsView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>INTEGRATIONS - Integrations - SMS, FEMA, Red Cross</h2><p>SMS</p></div>
};
export default IntegrationsView;
