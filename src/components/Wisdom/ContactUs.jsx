import React, { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { MdEmail, MdPhone, MdTag } from "react-icons/md";
import "../../styles/contact.css"
import Nextlevel from '../Chiemerie/Nextlevel';

const ContactUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faq = [
    {
      question: "Is creating a profile free?",
      answer: "Yes! You can create a basic profile for free. However, upgrading gives you better visibility and profile optimization."
    },
    {
      question: "How do I get noticed by scouts?",
      answer: "Ensure your profile is complete, upload high-quality videos, and consider optimizing your profile for better  visibility."
    },
    {
      question: "How can I find players?",
      answer: "You can browse player profiles, filter based on criteria, and watch vidoes to evaluate their skills."
    },
    {
      question: "Do I need to pay to contact players?",
      answer: "You can browse players for free, but full access to their contact details requires a paid plan."
    },
    {
      question: "What’s the difference between free and paid plans?",
      answer: "Free users get basic access, while paid users enjoy enhanced visibility, profile optimization, and full contact access."
    },
    {
      question: "How do I upgrade my plan?",
      answer: "Go to your dashboard, select a plan, and proceed with payment."
    },
    {
      question: "What do I do if I encounter a technical issue?",
      answer: "Contact us via email us at zscoutzscouts@gmail.com"
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We prioritize data security and use encryption to protect your personal information."
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className='contact_body'>
      <div className="contact_hero">
        <div className="contact_hero_content">
          <h2>Contact us</h2>
          <p>Need help? Reach out--we're here for you!</p>
        </div>
      </div>
      <div className="message_board">
        <div className="board_wrapper">
          <div className="board_header">
            <h4>Talk to us</h4>
            <h2>Let’s connect! Message or email.</h2>
          </div>
          <div className="board_content">
            <div className="board_input">
              <div className="boardinput_header">
                <h4>Send us a message</h4>
              </div>
              <input type="text" placeholder='Full Name' className='board_text' />
              <input type="email" placeholder='Email address' className='board_text' />
              <div className="board_textarea_container">
                <textarea placeholder='Comments' className='board_textarea' />
                <div className="board_terms">
                  <input type="checkbox" className='board_checkbox' />
                  <p>I agree to <span>Terms & Condition</span></p>
                </div>
              </div>
              <button className='board_button'>Submit</button>
            </div>
            <div className="board_contact">
              <div className="contact_card">
                <div className="inner_card">
                  <div className="board_email">
                    <MdEmail className='board_icon' />
                  </div>
                  <h4>Email</h4>
                  <p>zscoutzscouts@gmail.com</p>
                </div>
              </div>
              <div className="contact_card">
                <div className="inner_card">
                  <div className="board_email">
                    <MdPhone className='board_icon' />
                  </div>
                  <h4>Phone</h4>
                  <p>+234 9059 461 351</p>
                </div>
              </div>
              <div className="contact_card1">
                <div className="inner_card">
                  <div className="board_email">
                    <MdTag className='board_icon' />
                  </div>
                  <h4>Addresses</h4>
                  <p>163, Muyibi street, Olodi-Apapa, Lagos | Carat24, 24 road, Festac town, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Nextlevel />
      <div className="faq_container">
        <div className="faq_wrapper">
          <div className="faq_header">
            <h4>Frequently Asked Questions (FAQ)</h4>
            <h2>Answers to your most common questions.</h2>
          </div>
          <div className="question_container">
            {faq.map((item, index) => (
              <div className="question_box" key={index}>
                <div className="question_box_wrapper">
                  <div
                    className="question_card"
                    onClick={() => toggleAccordion(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <h4>{item.question}</h4>
                    <div className={`arrow_down ${openIndex === index ? 'rotate' : ''}`}>
                      <RiArrowDownSLine />
                    </div>
                  </div>
                  {openIndex === index && (
                    <div className="answer_card">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;