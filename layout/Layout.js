import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box>
        <main>{children}</main>
      </Box>
      {/* <Box sx={{ mt: 8, display: { sm: 'block', xs: 'none' } }}>
        <main>{children}</main>
      </Box> */}
    </>
  )
}