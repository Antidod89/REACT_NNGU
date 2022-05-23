import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constats';

const UsersPage = () => {
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    fetch(usersUrl)
      .then((response) => response.json())
      .then((data) => setUsersData(data));
  }, []);
  console.log(usersData);
  return <div>UsersPage</div>;
};

export default UsersPage;
