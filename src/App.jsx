import "./App.css";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import { MuiResponsiveness } from "./components/MuiResponsiveness";
import MuiSlider from "./components/MuiSlider";
import MuiBackdrop from "./components/MuiBackdrop";
import { MuiLoadingButton } from "./components/MuiLoadingButton";
import { MuiMasonry } from "./components/MuiMasonry";
import { MuiTabs } from "./components/MuiTabs";
import { MuiTimeline } from "./components/MuiTimeline";
import { MuiAlert } from "./components/MuiAlert";
import { MuiDialog } from "./components/MuiDialog";
import { MuiProgress } from "./components/MuiProgress";
import { MuiSkeleton } from "./components/MuiSkeleton";
import { MuiSnackbar } from "./components/MuiSnackbar";
import { MuiTable } from "./components/MuiTable";
import { MuiChip } from "./components/MuiChip";
import { MuiTooltip } from "./components/MuiTooltip";
import { MuiBadge } from "./components/MuiBadge";
import { MuiList } from "./components/MuiList";
import { MuiAvatar } from "./components/MuiAvatar";
import { MuiBottomNavigation } from "./components/MuiBottomNavigation";
import { MuiSpeedDial } from "./components/MuiSpeedDial";
import { MuiDrawer } from "./components/MuiDrawer";
import { MuiBreadCrumbs } from "./components/MuiBreadcrumbs";
import { MuiLink } from "./components/MuiLink";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiImageList } from "./components/MuiImageList";
import { MuiAccordion } from "./components/MuiAccordion";
import { MuiCard } from "./components/MuiCard";
import { MuiLayout } from "./components/MuiLayout";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiRating } from "./components/MuiRating";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiCheckbox } from "./components/MuiCheckbox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiButton } from "./components/MuiButton";
import { MuiTextField } from "./components/MuiTextField";
import { MuiTypography } from "./components/MuiTypography";
import { MuiSelect } from "./components/MuiSelect";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500], //hima qani vor providerov es poxancel enq sax komponentnerin, secondary-n amen tex es guyna, voch menak main-y ightnela poxvel sra lighty u tenc
    },
    neutral: {
      main: colors.green[500],
      darker: colors.green[800],
    },
  },
});

function App() {  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h3 className="line">MuiTypography</h3>
        <MuiTypography />
        <h3 className="line">MuiButton</h3>
        <MuiButton />
        <h3 className="line">MuiTextField</h3>
        <MuiTextField />
        <h3 className="line">MuiSelect</h3>
        <MuiSelect />
        <h3 className="line">MuiRadioButton</h3>
        <MuiRadioButton />
        <h3 className="line">MuiCheckbox</h3>
        <MuiCheckbox />
        <h3 className="line">MuiSwitch</h3>
        <MuiSwitch />
        <h3 className="line">MuiRating</h3>
        <MuiRating />
        <h3 className="line">MuiAutocomplete</h3>
        <MuiAutocomplete />
        <h3 className="line">MuiLayout</h3>
        <MuiLayout />
        <h3 className="line">MuiCard</h3>
        <MuiCard />
        <h3 className="line">MuiAccordion</h3>
        <MuiAccordion />
        <h3 className="line">MuiImageList</h3>
        <MuiImageList />
        <h3 className="line">MuiNavbar</h3>
        <MuiNavbar />
        <h3 className="line">MuiLink</h3>
        <MuiLink />
        <h3 className="line">MuiBreadCrumbs</h3>
        <MuiBreadCrumbs />
        <h3 className="line">MuiSpeedDial</h3>
        <MuiSpeedDial />
        <h3 className="line">MuiBottomNavigation</h3>
        <MuiBottomNavigation />
        <h3 className="line">MuiAvatar</h3>
        <MuiAvatar />
        <h3 className="line">MuiBadge</h3>
        <MuiBadge />
        <h3 className="line">MuiList</h3>
        <MuiList />
        <h3 className="line">MuiChip</h3>
        <MuiChip />
        <h3 className="line">MuiTooltip</h3>
        <MuiTooltip />
        <h3 className="line">MuiTable</h3>
        <MuiTable />
        <h3 className="line">MuiAlert</h3>
        <MuiAlert />
        <h3 className="line">MuiDialog</h3>
        <MuiDialog />
        <h3 className="line">MuiSnackbar</h3>
        <MuiSnackbar />
        <h3 className="line">MuiProgress</h3>
        <MuiProgress />
        <h3 className="line">MuiSkeleton</h3>
        <MuiSkeleton />
        <h3 className="line">MuiLoadingButton</h3>
        <MuiLoadingButton />
        <h3 className="line">MuiLoadingButton</h3>
        <MuiLoadingButton />
        <h3 className="line">MuiTabs</h3>
        <MuiTabs />
        <h3 className="line">MuiTimeline</h3>
        <MuiTimeline />
        <h3 className="line">MuiMasonry</h3>
        <MuiMasonry />
        <h3 className="line">MuiResponsiveness</h3>
        <MuiResponsiveness />
        <h3 className="line">MuiSlider</h3>
        <MuiSlider />
        <h3 className="line">MuiBackdrop</h3>
        <MuiBackdrop />
        <h3 className="line">MuiDrawer</h3>
        <MuiDrawer />
      </div>
    </ThemeProvider>
  );
}

export default App;
