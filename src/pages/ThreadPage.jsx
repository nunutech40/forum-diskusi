/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncThreadDetailById } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import { asyncDoLikeThread, asyncDoUnlikeThread } from '../states/threads/action';

function ThreadPage() {
  const { id } = useParams();

  const {
    threadDetail = null,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncThreadDetailById(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  const doLike = (threadId) => {
    dispatch(asyncDoLikeThread({ threadId }));
  };

  const doUnlike = (threadId) => {
    dispatch(asyncDoUnlikeThread({ threadId }));
  };

  return (
    <section className="detail-page">
      <ThreadDetail {...threadDetail} doLike={doLike} doUnlike={doUnlike} />
    </section>
  );
}

export default ThreadPage;
