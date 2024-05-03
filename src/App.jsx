import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
    if(window){
      getParentDocument();
    }
  };

  const getParentDocument = () => {
    console.log(window.parent.document, "parent");
    console.log(window.parent, "parent2");
    console.log(window.document, "Self");
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Editor
        apiKey='ew3aymb0j6kompypnggrtkkk90goygpbj5fz3hz6cd57d5gy'
        onInit={(_evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        
        init={{
          height: 604,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo underline | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
}