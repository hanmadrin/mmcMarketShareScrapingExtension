import React from 'react'
import { createRoot } from 'react-dom/client'
import ContentApp from './ContentApp'

// KEY CHANGE: Import with ?inline
import tailwindStyles from '../tailwind.css?inline'

const root = document.createElement('div')
root.id = 'hanmadrin-content-root'
document.body.appendChild(root)

const shadowRoot = root.attachShadow({ mode: 'open' })

// 1. Create a style tag
const styleTag = document.createElement('style')
// 2. Set its content to the Tailwind string
styleTag.textContent = tailwindStyles
// 3. Append style tag to Shadow DOM
shadowRoot.appendChild(styleTag)

const rootIntoShadow = document.createElement('div')
shadowRoot.appendChild(rootIntoShadow)

createRoot(rootIntoShadow).render(
  <React.StrictMode>
    <ContentApp />
  </React.StrictMode>
)