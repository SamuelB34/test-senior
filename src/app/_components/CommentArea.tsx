import {FormEvent, useState} from "react";

interface Props {
    submit: (text: string) => void
}

export const CommentArea = ( {submit}: Props ) => {
    const [comment, setComment] = useState('');

    const submitComment = (event: FormEvent) => {
        event.preventDefault()
        submit(comment)
        setComment('')
    }

    return (
        <form className={'add-comment-form'} onSubmit={submitComment} >
            <textarea name="comment" id="comment" value={comment} onChange={(text) => {
                setComment(text.target.value)
            }}></textarea>
            <button type={"submit"}>Publish</button>
        </form>
    );
};