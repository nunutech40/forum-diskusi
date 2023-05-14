import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllDiscussAndUsers } from '../states/shared/action';
import ThreadList from '../components/ThreadList';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllDiscussAndUsers());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <ThreadList threads={threadList} />
    </section>
  );
}

export default HomePage;
