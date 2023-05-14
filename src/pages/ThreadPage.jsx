/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { asyncThreadDetailById } from '../states/threadDetail/action';
import DiscussItem from '../components/DiscussItem';

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

  return (
    <section className="detail-page">
      <DiscussItem {...threadDetail} />
    </section>
  );
}

export default ThreadPage;
