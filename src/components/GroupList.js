import React, { useState } from 'react';

const dummyGroups = ['AI Club', 'Web Dev Team', 'Flutter Group'];

const GroupList = () => {
  const [query, setQuery] = useState('');

  const filteredGroups = dummyGroups.filter((group) =>
    group.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Groups</h2>
      <input
        type="text"
        placeholder="Search groups..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredGroups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
