import React from 'react'

interface TerminalProps {
  codeOutput: string
}
const Terminal: React.FC<TerminalProps> = ({ codeOutput }) => {
  return (
    <div className='p-2 text-sm whitespace-pre-line'>{codeOutput}</div>
  )
}

export default Terminal