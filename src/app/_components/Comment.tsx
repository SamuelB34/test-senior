import {useState} from "react";
import {set} from "immutable";

interface Example {
    name: string,
    text: string
}
export const Comment = ( {name, text}: Example ) => {
    const [value, setValue] = useState(text);
    const [edit, setEdit] = useState(false);


    return (
        <div className={'comment'}>
            <div className={'comment__left'}>
                <h5 className={'comment__user'}>
                    {name}
                </h5>
                {
                    !edit ?                 <p className={'comment__text'}>
                        {value}
                    </p>
                        :
                        <input type="text" name={text} id={text}  value={value} onChange={(value) => {
                            setValue(value.target.value)
                        }}/>
                }

            </div>

            <div onClick={() => {
                if(name === 'You') {
                    setEdit(!edit)
                }
            }}>
                {
                    name === 'You' && !edit ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/>
                        </svg>
                        :
                        name === 'You' && edit ?
                            <button > Done </button>
                            :
                            <></>
                }
            </div>

        </div>
    );
};