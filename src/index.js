import React, { useState } from 'react'
// @ts-ignore
import styles from './styles.module.css'

export function ModalComponent({ content = '' }) {
  const [open, setOpen] = useState(true)
  if (open) {
    return (
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          {content}
          <div className={styles.crossContainer} onClick={() => setOpen(false)}>
            <div className={styles.crossLeft}>
              <div className={styles.crossRight} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
}
