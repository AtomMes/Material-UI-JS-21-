import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
//import { MuiLoadingButton } from "./components/MuiLoadingButton";
//import { MuiMasonry } from "./components/MuiMasonry";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
//import { MuiTabs } from "./components/MuiTabs";
//import { MuiTimeline } from "./components/MuiTimeline";
//import { MuiLoadingButton } from "./components/MuiLoadingButton";
// import { MuiAlert } from "./components/MuiAlert";
// import { MuiDialog } from "./components/MuiDialog";
// import { MuiProgress } from "./components/MuiProgress";
// import { MuiSkeleton } from "./components/MuiSkeleton";
// import { MuiSnackbar } from "./components/MuiSnackbar";
// import { MuiTable } from "./components/MuiTable";
// import { MuiChip } from "./components/MuiChip";
// import { MuiTooltip } from "./components/MuiTooltip";
// import { MuiBadge } from "./components/MuiBadge";
// import { MuiList } from "./components/MuiList";
// import { MuiAvatar } from "./components/MuiAvatar";
// import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
// import { MuiSpeedDial } from "./components/MuiSpeedDial";
//import { MuiDrawer } from "./components/MuiDrawer";
// import { MuiBreadCrumbs } from "./components/MuiBreadcrumbs";
// import { MuiLink } from "./components/MuiLink";
//import { MuiNavbar } from './components/MuiNavbar';
// import { MuiImageList } from "./components/MuiImageList";
//  import { MuiAccordion } from "./components/MuiAccordion";
//  import { MuiCard } from "./components/MuiCard";
//  import { MuiLayout } from "./components/MuiLayout";
//  import { MuiAutocomplete } from "./components/MuiAutocomplete";
//  import { MuiRating } from "./components/MuiRating";
//  import { MuiSwitch } from "./components/MuiSwitch";
//  import { MuiCheckbox } from "./components/MuiCheckbox";
//  import { MuiRadioButton } from "./components/MuiRadioButton";
//  import { MuiButton } from "./components/MuiButton";
//  import { MuiTextField } from "./components/MuiTextField";
//  import { MuiTypography } from "./components/MuiTypography";
//  import { MuiSelect } from "./components/MuiSelect";

const theme = createTheme({
  status:{
    danger:'#e53e3e'
  },
  palette:{
    secondary:{
      main:colors.orange[500]//hima qani vor providerov es poxancel enq sax komponentnerin, secondary-n amen tex es guyna, voch menak main-y ightnela poxvel sra lighty u tenc
    },
    neutral:{
      main:colors.green[500],
      darker:colors.green[800]
    }
  }
})

function App() {
  return (
   <ThemeProvider theme={theme} >
     <div className="App">
      {/* <div className='line' />
      <MuiTypography />
      <div className='line' />
      <MuiButton /> 
      <div className='line' />
      <MuiTextField />
      <div className='line' />
      <MuiSelect />
      <div className='line' />
      <MuiRadioButton />
      <div className='line' />
      <MuiCheckbox />
      <div className='line' />
      <MuiSwitch />
      <div className='line' />
      <MuiRating />
      <div className='line' />
      <MuiAutocomplete />
      <div className='line' />
      <MuiLayout />
      <div className='line' />
      <MuiCard />
      <div className='line' />
      <MuiAccordion />
      <div className='line' />
      <MuiImageList />
      <div className='line' />
      <MuiNavbar />  
      <div className='line' />
      <MuiLink /> 
      <div className='line' />
      <MuiBreadCrumbs />
      <div className='line' />
      <MuiDrawer />
      <div className='line' />
      <MuiSpeedDial />
      <div className='line' />
      <MuiBottomNavigation />
      <div className='line' />
      <MuiAvatar />
      <div className='line' />
      <MuiBadge />
      <div className='line' />
      <MuiList />
      <div className='line' />
      <MuiChip />
      <div className='line' />
      <MuiTooltip />
      <div className='line' />
      <MuiTable />
      <div className='line' />
      <MuiAlert />
      <div className='line' />
      <MuiDialog />
      <div className='line' />
      <MuiSnackbar />
      <div className='line' />
      <MuiProgress />
      <div className='line' /> 
      <MuiSkeleton />
      <div className='line' /> 
      <MuiLoadingButton />
    <div className='line' /> 
    <MuiLoadingButton />
  <div className='line' /> 
  <MuiTabs />
<div className='line' /> 
<MuiTimeline /> 
<div className='line' /> 
      <MuiMasonry />
<div className='line' /> */}
      <MuiResponsiveness />
    </div>
   </ThemeProvider>
  );
}

export default App;
