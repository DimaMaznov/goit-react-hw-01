/* eslint-disable no-irregular-whitespace */
import Profile from "../Profile/Profile";
import FriendList from "../FriendList/Friendlist";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

    
    
    const App = () => {
      return (
        <>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}
            stats={userData.stats}
          />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
        </>
      );
    };
    
    export default App