import React, { useState } from 'react'

const PostForm = ({ submit, errors }) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return (
        <form onSubmit={e => {
            e.preventDefault();
            submit({ title, content })
            setTitle('')
            setContent('')
        }}>
            {
                errors && <div style={{ color: 'red' }}>{errors.join(', ')}</div>
            }
            <span>New post</span>
            <input placeholder="Title" type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
            <textarea placeholder="Content" name="content" value={content} onChange={e => setContent(e.target.value)} />
            <input type="submit" />
        </form>
    )
}

export default PostForm