import React, { useEffect, useState } from "react";
import "./Home.css";
import Nav from "./Nav";
import Message from "./Message";

export default function Body() {
  const [userMsg, setuserMsg] = useState("");
  const [finalmsg, setfinalmsg] = useState("");
  const messages = [];
  const handleonchange = (e) => {
    setuserMsg(e.target.value);
  };
  const sendMsg = (e) => {
    e.preventDefault();
     
    setfinalmsg(userMsg);
    messages.push(userMsg);
   
  };
  return (
    <>
      <Nav menu={true} />
      <div
        className="main-container"
        style={{ backgroundImage: "url(/images/bg.png)" }}
      >
        <div className="text-quotes">
          <h1>PASSION FOR HEALING</h1>
          <h3>Learn More</h3>
        </div>
        <div className="chat-box">
          <div className="chatbox-header">
            <div className="icon-title">
              <img src="./images/message.png" alt="" />
              <p>Message</p>
            </div>
            <div className="person-info">
              <p>Dr.Aayush</p>
              <p>
                {" "}
                <small>Active</small>
              </p>
            </div>
          </div>
          <div className="chat-body">
            <div className="chat-names">
              <div className="first">
                <img src="./images/profile Box.png" alt="" />
                <p>Dr.Sudeep</p>
              </div>

              <div className="first">
                <img src="./images/profile Box.png" alt="" />
                <p>Dr.Aayush</p>
              </div>
            </div>
            <div className="chat-message">
            { messages.map(msg => <Message  message={finalmsg} />)}

              <div className="send-message-container">
                <a href="">
                  <img src="/images/Images.png" alt="" />
                </a>

                <textarea
                  name=""
                  id=""
                  cols="50"
                  rows="3"
                  value={userMsg}
                  onChange={handleonchange}
                ></textarea>
                <a href="" onClick={sendMsg}>
                  <img src="/images/sendmsg.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
