import React from 'react';
import FindJob from './(dashboardComponent)/sitter/Findjob';

type Role = 'Parent' | 'Sitter';

const current_role = 'Sitter';

const Dashboard = () => {
  return <>{current_role === 'Sitter' && <FindJob />}</>;
};

export default Dashboard;
