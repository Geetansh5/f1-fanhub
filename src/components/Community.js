// src/components/Community.js

import React, { useState } from 'react';
import './Community.css';

const Community = () => {
  const initialPosts = [
    {
      id: 1,
      author: 'Speedster99',
      content: 'F1 2025 Predictions: I think McLaren might surprise everyone this year!',
      timestamp: 'Posted 2 hours ago',
      upvotes: 12
    },
    {
      id: 2,
      author: 'RedFlagFan',
      content: 'Best Overtakes of 2024? Has to be Alonso in Monaco. Pure skill.',
      timestamp: 'Posted yesterday',
      upvotes: 9
    },
    {
      id: 3,
      author: 'DRSwarrior',
      content: 'Do you think sprint races should stay or go? I’m on the fence.',
      timestamp: 'Posted 3 days ago',
      upvotes: 4
    }
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleUpvote = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="community-container">
      <h1 className="community-header">🏁 F1 FanHub Community</h1>
      {posts.map((post) => (
        <div key={post.id} className="community-post">
          <div className="post-author">{post.author}</div>
          <div className="post-content">{post.content}</div>
          <div className="post-timestamp">{post.timestamp}</div>
          <div className="post-footer">
            <button onClick={() => handleUpvote(post.id)} className="upvote-button">⬆ Upvote</button>
            <span className="upvote-count">{post.upvotes} Upvotes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Community;


