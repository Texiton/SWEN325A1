import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFabButton, IonIcon, IonFab, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Highlights.css';
import { addOutline, bookOutline } from 'ionicons/icons';

const Highlights: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color = "secondary">
          <IonTitle class = "ion-text-center">Journal<IonIcon icon ={bookOutline} /></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Highlights</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
          <IonCol>
        <IonCard>
          <IonCardContent>
          <IonCardTitle> August 10 </IonCardTitle>
          <IonCardSubtitle>Khruangbin</IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        </IonCol>
        <IonCol>
        <IonCard>
          <IonCardContent>
          <IonCardTitle> August 3 </IonCardTitle>
          <IonCardSubtitle>Lorem Ipsum</IonCardSubtitle>
          </IonCardContent>
        </IonCard>
        </IonCol>
        </IonRow>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton><IonIcon icon ={addOutline} /></IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Highlights;
