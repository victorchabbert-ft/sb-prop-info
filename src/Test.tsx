import React from "react"

interface TestProps {
  /**
   * React children
   */
  children?: React.ReactChildren
}

const Test: React.FC<TestProps> = ({ children }) => (
  <div>
    <h1>Testing the info block</h1>
    {children}
  </div>
)

export default Test
