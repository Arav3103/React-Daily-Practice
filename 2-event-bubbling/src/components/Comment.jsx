import React, { useRef, useState } from "react";

const Comment = () => {
  const [data, setData] = useState({
    user: "Katak",
    comment: "Keep Grinding",
    like: false,
    reply: "",
  });

  const replyData = useRef("");
  const [replyStatus, setReplyStatus] = useState(false);
  const handleReply = (e) => {
    e.stopPropagation(); //This line actually stops the event bubbling which again triggers this function
    setReplyStatus(true);
  };
  const handleLike = () =>
    setData((prevState) => {
      console.log(prevState);
      return { ...prevState, like: !prevState.like };
    });

  const handleSend = () => {
    const replyinput = replyData.current.value;
    setData((prevState) => {
      console.log(prevState);
      return { ...prevState, reply: replyinput };
    });
    setReplyStatus(false);
  };

  const handleClosure = () => {
    setReplyStatus(false);
  };
  return (
    <section onClick={handleClosure}>
      <h3>{data.user}</h3>
      <p>{data.comment}</p>
      <>
        {!replyStatus && (
          <>
            <button className="p-2 border-black border-2" onClick={handleReply}>
              Reply
            </button>
            <button
              className="p-2 border-black border-2"
              onClick={handleLike}
              disabled={data.like}
            >
              Like
            </button>
          </>
        )}
        {replyStatus && (
          <>
            <input type="text" placeholder="Reply here" ref={replyData} />
            <button className="p-2 border-black border-2" onClick={handleSend}>
              Send
            </button>
          </>
        )}
      </>
    </section>
  );
};

export default Comment;
