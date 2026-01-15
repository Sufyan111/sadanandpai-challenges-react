import React, { Children, useState } from "react";
import SingleComment from "./SingleComment";
const data = [
  {
    id: crypto.randomUUID(),
    text: "Hello! How are you?",
    replies: [
      {
        id: crypto.randomUUID(),
        text: "Im fine... wbu?",
        replies: [
          { id: crypto.randomUUID(), text: "fine as well! ", children: [] },
        ],
      },
    ],
  },
];
const NestedComments = () => {
  const [comments, setComments] = useState(data);
  const [value, setValue] = useState("");

  function addNewComment(text) {
    if (text.trim() === "") return;
    let newComment = { id: crypto.randomUUID(), text, replies: [] };
    setComments((prev) => [...prev, newComment]);
    setValue("");
  }

  function addReply(comments, parentId, reply) {
    return comments.map((p) => {
      const replies = p.replies ?? [];
      if (p.id === parentId) {
        return {
          ...p,
          replies: [...replies, reply],
        };
      } else if (p.replies.length > 0) {
        return {
          ...p,
          replies: addReply(replies, parentId, reply),
        };
      } else {
        return p;
      }
    });
  }

  function deleteComment(comments, id) {
    return comments
      .filter((c) => c.id !== id)
      .map((c) => ({
        ...c,
        replies: deleteComment(c.replies ?? [], id),
      }));
  }

  function handleDelete(id) {
    setComments((prev) => deleteComment(prev, id));
  }

  function handleAddReply(parentId, text) {
    let reply = { id: crypto.randomUUID(), text, replies: [] };
    setComments((prev) => addReply(prev, parentId, reply));
  }

  return (
    <div>
      <div className="">
        <h1>Comments</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-50 border p-1"
        />
        <button
          onClick={() => addNewComment(value)}
          className="border bg-gray-200"
        >
          add
        </button>
      </div>
      <div>
        {comments.map((c) => {
          return (
            <SingleComment
              comment={c}
              onReply={handleAddReply}
              onDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NestedComments;
