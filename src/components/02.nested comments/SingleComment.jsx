import React, { useState } from "react";

const SingleComment = ({ comment, onReply, onDelete }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="">
      <div className="bg-blue-200 my-2">
        <div>{comment.text}</div>
        {!show ? (
          <div>
            <button
              className="border rounded cursor-pointer mx-2"
              onClick={() => setShow((p) => !p)}
            >
              Reply
            </button>
            <button
              className="border rounded cursor-pointer mx-2"
              onClick={() => onDelete(comment.id)}
            >
              delete
            </button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={value}
              autoFocus
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="border bg-gray-100"
              onClick={() => {
                if (!value.trim()) return;
                onReply(comment.id, value);
                setValue("");
                setShow(false);
              }}
            >
              add
            </button>
          </div>
        )}
      </div>
      <div className="ms-2">
        {comment?.replies?.length > 0 &&
          comment.replies.map((child) => (
            <SingleComment
              key={child.id}
              comment={child}
              onReply={onReply}
              onDelete={onDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default SingleComment;
