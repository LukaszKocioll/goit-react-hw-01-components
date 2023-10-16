import Profile from './Profile/profile';
import user from './Profile/user.json';

import Transactions from './Transaction/transaction';
import transactionStats from './Transaction/transaction.json';

import FriendList from './FriendList/friendList';
import friendUsers from './FriendList/friendList.json';

import Statistics from './Data/data';
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
      <Statistics title="Upload stats" stats={DataStats} />
      <FriendList friends={friendUsers} />
      <Transactions items={transactionStats}/>;
    </>
  );
};