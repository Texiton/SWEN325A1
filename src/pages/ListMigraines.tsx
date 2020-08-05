import React from 'react';
import { IonButton, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonCol, IonInput} from '@ionic/react';
import './ListMigraines.css';
import {Name, NameContextConsumer} from '../NameState';

function InputEmpty(date : string) {
  return date == "lorem";
}

const ListMigraines: React.FC = () => {
  var name = "";
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h3 >What is your name?</h3>
        <IonItem>
            <IonInput placeholder="Enter Name" onIonChange={e => name = e.detail.value!}></IonInput>
        </IonItem>
        <NameContextConsumer>
          {(context : Name) => (
          <IonButton onClick = {e => 
              {
                context.name = name
              }
            } size="small" routerLink="/addmigrainetab">Enter
          </IonButton>
          )} 
          </NameContextConsumer>
      </IonContent>
    </IonPage>
  );
};

export default ListMigraines;
