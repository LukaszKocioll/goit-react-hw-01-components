import {Profile} from './Profile/Profile.jsx';
import user from './Profile/user.json';

import {Transaction} from './Transaction/Transaction.jsx';
import transactionStats from './Transaction/transaction.json';

import {FriendList} from './FriendList/FriendList.jsx';
import friendUsers from './FriendList/friendList.json';

import {Stats} from './Data/Data.jsx';
import DataStats from './Data/data.json';







export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={DataStats} />
      <FriendList friends={friendUsers} />
      <Transaction transactions={transactionStats}/>;
    </>
  );
};