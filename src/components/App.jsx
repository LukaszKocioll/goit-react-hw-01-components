import {Profile} from './Profile';
import user from './Profile/user.json';

import {Transaction} from './Transaction';
import transactionStats from './Transaction/transaction.json';

import {FriendList} from './FriendList';
import friendUsers from './FriendList/friendList.json';

import {Stats} from './Data';
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