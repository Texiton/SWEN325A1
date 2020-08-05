import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './AddMigraine.css';
import {Name, NameContextConsumer} from '../NameState';

const AddMigraine: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Migraine</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h3 >Welcome to the SWEN325 App!</h3>
        <NameContextConsumer>
        { (context : Name ) =>
        <p> You must be: {context.name}</p>
        }
        </NameContextConsumer>
      </IonContent>
    </IonPage>
  );
};


export default AddMigraine;
