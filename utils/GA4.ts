// import ReactGA from "react-ga";
import ReactGA4 from 'react-ga4';
const InitializeGoogleAnalytics = () => {
  // Initialize UA
  // ReactGA.initialize("UA-XXXXXXXX-X");
  // Initialize GA4 - Add your measurement ID
  ReactGA4.initialize('G-TEC76FBRX2');

  console.log('GA INITIALIZED');
};

const TrackGoogleAnalyticsEvent = (
  category: string,
  event_name: string,
  label: string,
  data: object
) => {
  console.log('GA event:', category, ':', event_name, ':', label);
  // Send UA Event
  // ReactGA.event({
  //   category: category,
  //   action: action,
  //   label: label,
  // });
  // Send GA4 Event
  const event_params = {
    category,
    label,
    ...data,
  };
  ReactGA4.event(event_name, event_params);
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };
