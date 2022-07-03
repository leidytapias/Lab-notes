


import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import {  NoteView, NothingSelectedView } from '../views';


export const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit dolorum neque nihil non facere placeat earum nemo unde laborum voluptatum amet eveniet dicta voluptates alias, fugiat accusantium autem nisi eius!</Typography> */}
        <NothingSelectedView />

        {/* <NoteView/>  */}
        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}>
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

      </JournalLayout>
    </>

  )
}
