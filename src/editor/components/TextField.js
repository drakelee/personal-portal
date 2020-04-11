import React, {useState, useEffect} from 'react';
import {Editor, EditorState} from 'draft-js';

function TextField() {
    const [editorState, setEditorState] = useState(
        EditorState.createEmpty()
    );

    const editor = React.useRef(null);

    const focusEditor = () => {
        editor.current.focus();
    }

    console.log(editorState)

    useEffect(() => {
        focusEditor()
    })

    return (
        <div>
            <Editor
                ref={editor}
                editorState={editorState}
                onChange={editorState => setEditorState(editorState)}
            />
        </div>
    )
}

export default TextField