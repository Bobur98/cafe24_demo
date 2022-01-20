// import React, { useState } from 'react';
// import styles from './styles.module.css';
// import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const DraftEditor = () => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   const updateTextDescription = async (state) => {
//     await setEditorState(state);
//     const data = convertToRaw(editorState.getCurrentContent());
//   };
//   setEditorState(
//     EditorState.createWithContent(
//       convertFromRaw(JSON.parse(current.description))
//     )
//   );
//   return (
//     <div>
//       <Editor
//         editorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onEditorStateChange={updateTextDescription}
//       />
//     </div>
//   );
// };

// export default DraftEditor;
