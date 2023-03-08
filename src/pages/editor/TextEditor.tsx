import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import editorLabels from './config.json';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Paper } from "@mui/material";

interface State {
    editorState: EditorState;
}

const TextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState: State['editorState']): void => {
        setEditorState(editorState)
    };

    return (
        <Paper>
            <Editor
                placeholder="اینجا تایپ کن"
                localization={{ locale: 'en', translations: editorLabels }}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                    options: ['blockType', 'inline', 'fontSize', 'textAlign', 'remove', 'list', 'colorPicker', 'emoji', 'link'],
                    blockType: { options: ['Normal', 'H1', 'H3', 'H6', 'Blockquote', 'Code'] },
                    inline: { inDropdown: true, options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'] },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                }}
            />
        </Paper>
    )
}

export default TextEditor