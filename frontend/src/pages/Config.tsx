import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks';
const Config = () => {
    const code = `import React from 'react'
    import { CodeBlock, dracula } from 'react-code-blocks';
    const Config = () => {
      return (
        <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
      />
      )
    }
    
    export default Config`;

    const credentials = `ID=8793827987
API_KEY=907209703`
  return (
    <>
    <div className='w-[50vw] mx-auto my-5'>
        <p>Copy below code!! and create this as component in your project.</p>
    <CodeBlock
    text={code}
    language={'typescript'}
    showLineNumbers={true}
    theme={dracula}
    codeBlockStyle={true}
  />
  <p>Add below credentials in your .env file.</p>
  <CodeBlock
    text={credentials}
    language={'dotenv'}
    theme={dracula}
    codeBlockStyle={true}
  />
  </div>
  <button className='px-4 py-2 bg-sky-600 text-white rounded-lg'>Done</button>
  </>
  )
}

export default Config