// import React from 'react';
// import HeaderAction from "../components/HeaderAction";
// import Navbar from "../components/Navbar";
// import ProductContainer from "../components/ProductContainer";
// import SearchContainer from "../components/SearchContainer";
// import "../pages/cssPages/Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div className="dashboard-main">
//       <Navbar />
//       <HeaderAction />
//       <div className="content-main">
//         <div className="search-container-dash">
//           <SearchContainer />
//         </div>
//         <div className="product-container-dash">
//           <ProductContainer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;import * as React from 'react';
import * as React from 'react';
import { extendTheme, styled, Button } from '@mui/material';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddIcon from '@mui/icons-material/Add';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import AvdAssetsIcon from "../assets/images/AvdAssetsIcon.png";
import SearchContainer from "../components/SearchContainer";
import LogoutContainer from "../components/LogoutContainer";
import { getProducts, login, callAxiosApi } from "../utils/api_utils";



// Define navigation items for the sidebar
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'allproducts',
    title: 'All Products',
    icon: <AllInboxIcon />,
  },
  {
    segment: 'addproduct',
    title: 'Add Product',
    icon: <AddIcon />,
  },
];



// Define a custom theme
const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Custom router hook
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(() => ({
    pathname,
    searchParams: new URLSearchParams(),
    navigate: (path) => setPathname(String(path)),
  }), [pathname]);
}

// Skeleton placeholder component
const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

// Custom Toolbar Actions component to add a button next to the dark/light toggle
function CustomToolbarActions() {
  return (
    <LogoutContainer/>
    // <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    //   {/* Dark/Light Mode Toggle will be here by default */}
    //   <Button variant="contained" color="primary">
    //     Custom Action
    //   </Button>
    // </div>
  );
}

// Main Dashboard layout component
export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        title: '',
        logo: <img src={AvdAssetsIcon} alt="Avd Assets Logo" style={{ height: '40px' }} />, // Custom logo
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: CustomToolbarActions, // Set custom toolbar actions component
        }}
      >
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <div className='search-container-dash'>
                <SearchContainer height={14} />
                {/* <button>one</button> */}
              </div>
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}