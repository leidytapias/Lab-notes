import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material"


export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant='permanent'
        open={true}
        sx={{
          display: { xs: 'block' },
          '&.MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            Leidy Tapias
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map(text =>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secundary={'loren inset void'} />

                  </Grid>
                </ListItemButton>

              </ListItem>
            )}
        </List>
      </Drawer>

    </Box>

  )
}
