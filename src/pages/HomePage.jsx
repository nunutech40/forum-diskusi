import React, { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

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

  const handleAddThreadButtonClick = () => {
    navigate('/add-thread');
  };

  return (
    <section className="home-page">
      <ThreadList threads={threadList} doLike={doLike} doUnlike={doUnlike} />
      <button type="button" className="add-thread-button" onClick={handleAddThreadButtonClick}>
        <FaPlus />
      </button>
    </section>
  );
}

export default HomePage;
