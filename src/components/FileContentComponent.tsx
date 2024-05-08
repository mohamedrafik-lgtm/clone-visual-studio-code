import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProp {
    content: string
}
const FileContentComponent = ({content}:IProp) => {
  return (
    <SyntaxHighlighter language="javascript" 
    style={atomOneDark}
    Language="javascript"
    customStyle={{
      backgroundColor:"transparent",
      width:"100%",
      maxHeight:"100vh",
      overflow:"auto",
      fontSize:"1.5rem",
    }}
    showLineNumbers
    >
      {String(content)}
    </SyntaxHighlighter>
  );
};


export default FileContentComponent