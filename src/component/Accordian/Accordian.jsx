import React from 'react'
import Accordion from '@mui/material/Accordion';
import styles from './Accordian.module.css'
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function Accordian({title,data}) {
  return (
    <>
        <Accordion className={`${styles.Acc}`}>
        <AccordionSummary
         expandIcon={<ExpandMoreIcon style={{ color: '#34C94B' }} />}
         

          aria-controls="panel1a-content"
          id="panel1a-header"
          className={`${styles.Summery}`}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={`${styles.details}`}>
          <Typography>
            {data}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
