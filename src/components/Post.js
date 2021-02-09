import React from 'react';

const Post = React.memo(({post}) => {

  return (
      <li className="post-item">
        {/* если не задано ownerName используется заданное через форму имя в userName */}
        <h2 className="post-item__title">{post.ownerName || post.userName || ''}</h2>
        <div className="post-item__message-subject">{post.title}</div>
        <div className="post-item__text">{post.body}</div>
      </li>
  )
})

export default Post;

// {
//     "userId": 10,
//     "id": 100,
//     "title": "at nam consequatur ea labore ea harum",
//     "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
//   }