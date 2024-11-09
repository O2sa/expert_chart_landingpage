export const mainSectionHeight = "-250px";
export const layoutStyle = (theme) => ({
  [theme.fn.smallerThan("lg")]: {
    // height: `100vh)`,

    minHeight: `calc(${mainSectionHeight} + 100vh)`,
  },
  [theme.fn.largerThan("lg")]: {
    height: `calc(${mainSectionHeight} + 100vh)`,
  },
});



export const VITE_APP_TAWK_PROPERTY_ID='66e353e1ea492f34bc12aad5'
export const  VITE_APP_TAWK_EN_WIDGET_ID='1i7jvvah9'
export const VITE_APP_TAWK_FR_WIDGET_ID='1i9k8v1lq'
