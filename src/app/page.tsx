'use client'
import comments from './comments.json'
import styles from './page.module.scss'
import {useEffect, useState} from "react";
import {Comment} from "@/app/_components/Comment";
import {CommentArea} from "@/app/_components/CommentArea";

export default function Home() {
  const [commentsRender, setCommentsRender] = useState(comments);

  useEffect(() => {
    console.log("HOLAAA")
  }, [commentsRender])

  return (
    <div className={styles.main}>
      <div className='container'>
        <h1>Incorrect &quot;unexpected token&quot; error when using variable interpolation</h1>

        <div className='container__data'>
          <h4 className="attribute__name">Status</h4>
          <span className="attribute__value">Work in progress</span>
          <h4 className="attribute__name">Priority</h4>
          <span className="attribute__value">High</span>
          <h4 className="attribute__name">Status</h4>
          <span className="attribute__value">High</span>
          <h4 className="attribute__name">Assignee</h4>
          <span className="attribute__value">Kaisha Cleveland</span>
        </div>

        <h4>
          Description
        </h4>
        <p className="task__description">
          Attempt to use variable interpolation to define operation in function() expression results in &quot;unexpected token&quot; error while compiler produces correct result.
        </p>

        <h4>
          Comments
        </h4>

        <CommentArea
          submit={(text) => {
            console.log('Text')
            let value = commentsRender
            value.unshift({
              id: commentsRender.length + 1,
              name: 'You',
              text: text
            })
            const finalValue= [...value]
            setCommentsRender(finalValue)
          }}
        />

        {
          commentsRender.map((comment) => {
            return <Comment
                key={comment.id}
                name={comment.name}
                text={comment.text}
            />
          })
        }
      </div>
    </div>
  )
}
