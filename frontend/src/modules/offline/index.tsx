import React, {useState} from 'react';
export const OfflineView: React.FC = () => {
  const [filter,setFilter]=useState('high');
  return <div><h2>OFFLINE - Offline - resilient, queue, sync when on</h2><p>resilient</p></div>
};
export default OfflineView;
