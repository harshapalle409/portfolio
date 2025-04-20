import React, { useState } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([
    { id: 1, name: 'John Doe', text: 'Great portfolio! Love your projects.' },
    { id: 2, name: 'Jane Smith', text: 'Impressive work, especially the AI creations.' }
  ]);
  
  const [newComment, setNewComment] = useState({
    name: '',
    text: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.text.trim()) {
      setComments(prev => [
        ...prev,
        {
          id: Date.now(),
          name: newComment.name,
          text: newComment.text
        }
      ]);
      setNewComment({
        name: '',
        text: ''
      });
    }
  };

  return (
    <section className="comments">
      <div className="comments__container">
        <h2 className="comments__title">Visitor Feedback</h2>
        
        <form onSubmit={handleSubmit} className="comments__form">
          <div className="comments__form-group">
            <label htmlFor="name" className="comments__form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              className="comments__form-input"
              placeholder="Your name"
              required
            />
          </div>
          <div className="comments__form-group">
            <label htmlFor="text" className="comments__form-label">Comment</label>
            <textarea
              id="text"
              name="text"
              value={newComment.text}
              onChange={handleInputChange}
              className="comments__form-textarea"
              placeholder="Your feedback"
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="comments__form-button">Submit</button>
        </form>
        
        <div className="comments__list">
          {comments.map(comment => (
            <div key={comment.id} className="comments__item">
              <h3 className="comments__item-name">{comment.name}</h3>
              <p className="comments__item-text">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comments;