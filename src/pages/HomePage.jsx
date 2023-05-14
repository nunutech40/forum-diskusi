import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetAllDiscussAndUsers } from '../states/shared/action';
import ThreadList from '../components/ThreadList';
import { asyncDoLikeThread, asyncDoUnlikeThread } from '../states/threads/action';

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
    authUserId: authUser.id,
  }));

  const doLike = (threadId) => {
    dispatch(asyncDoLikeThread({ threadId }));
  };

  const doUnlike = (threadId) => {
    dispatch(asyncDoUnlikeThread({ threadId }));
  };

  return (
    <section className="home-page">
      <ThreadList threads={threadList} doLike={doLike} doUnlike={doUnlike} />
    </section>
  );
}

export default HomePage;
