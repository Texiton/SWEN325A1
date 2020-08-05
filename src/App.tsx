import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, barChartOutline } from 'ionicons/icons';
import ListMigraines from './pages/ListMigraines';
import AddMigraine from './pages/AddMigraine';
import Highlights from './pages/Highlights';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {Name, NameContextProvider, NameContextConsumer} from './NameState';

const App: React.FC = () => (
  <IonApp>
    <NameContextProvider value = {{name: ""}}>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/listmigrainestab" component={ListMigraines} exact={true} />
          <Route path="/addmigrainetab" component={AddMigraine} exact={true} />
          <Route path="/highlightstab" component={Highlights} />
          <Route path="/" render={() => <Redirect to="/listmigrainestab" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="listmigrainestab" href="/listmigrainestab">
            <IonIcon icon={triangle} />
            <IonLabel>List Migraines</IonLabel>
          </IonTabButton>
          <IonTabButton tab="addmigrainetab" href="/addmigrainetab">
            <IonIcon icon={ellipse} />
            <IonLabel>Add Migraine</IonLabel>
          </IonTabButton>
          <IonTabButton tab="highlightstab" href="/highlightstab">
            <IonIcon icon ={barChartOutline} />
            <IonLabel>Highlights</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    </NameContextProvider>
  </IonApp>
);

export default App;
