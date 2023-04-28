import { Component } from '@angular/core';
import OBSWebSocket, { OBSRequestTypes } from 'obs-websocket-js';
import axios from 'axios';
import * as debug from 'debug';

// import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OBSWebSocketJS';
  obs = new OBSWebSocket();
  // constructor(private http: HttpClient) { }

  connection() {
    // const obs = new OBSWebSocket()

    this.obs.connect('ws://localhost:4444', '', { rpcVersion: 1 });
    // console.log(`Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`
    // const req: OBSRequestTypes['SetSceneName'] = {
    //   sceneName: 'old-and-busted',
    //   newSceneName: 'new-hotness'
  }

  // getRandomJoke1() 
  // { return this.http.get('http://localhost:8080')
  //     .pipe(map(response => { 
  //       console.log(response);
  //       // if (response.status === 302) 
  //       // { 
  //       //   const location = response.headers.get('Location'); 
  //       //   window.location.href = location; 
  //       // } else { return response; } 
  //     })); 
  //     }
  getRandomJoke() {
    fetch("http://localhost:8080").then(res => console.log(res));

    return axios.get('http://localhost:8080/').then(res => console.log(res.headers)).catch(err => console.log(err));
  }

  send() {
    // ------ get all scene list --------
    this.obs.call('GetSceneList').then((res) => console.log(res));

    // ----------- activate a particular event ----------
    // this.obs
    //   .call('SetCurrentSceneCollection', { sceneCollectionName: 'Naveen' })
    //   .then((res) => console.log(res));

    // ---------------- create image source ------------
    // var min = 1;
    // var max = 100;
    // var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    // var id =
    //   'HP HD Camera:\\\\?\\usb#vid_04ca&pid_7089&mi_00#6&4fec0f5&0&0000#{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global';
    // var videoJson = {
    //   video_device_id: id,
    // };
    // var payload = {
    //   sceneName: 'test',
    //   inputName: 'message',
    //   inputKind: 'dshow_input',
    //   inputSettings: videoJson,
    //   sceneItemEnabled: true,
    // };
    // var rqPayload = {
    //   op: 0,
    //   d: {
    //     requestType: 'CreateInput',
    //     requestId: randomNum,
    //     requestData: payload,
    //   },
    // };
    // var jsonString = JSON.stringify(rqPayload);
    // console.log(jsonString);
    // this.obs.call('CreateInput', payload).then((result) => {
    //   console.log(result);
    //   console.log(result['sceneItemId']);
    //   this.obs
    //     .call('GetSceneItemTransform', {
    //       sceneName: 'test',
    //       sceneItemId: result['sceneItemId'],
    //     })
    //     .then((res) => console.log(res));
    // });
    // ------------------ alter position of a source ---------------
    // var pos = {
    //   positionX: 40,
    //   positionY: 40,
    //   scaleX: 200 / 1920,
    //   scaleY: 200 / 1080,
    // };
    // this.obs
    //   .call('SetSceneItemTransform', {
    //     sceneName: 'test',
    //     sceneItemId: 9,
    //     sceneItemTransform: pos,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     this.obs
    //       .call('GetSceneItemTransform', {
    //         sceneName: 'test',
    //         sceneItemId: 9,
    //       })
    //       .then((res) => console.log(res));
    //   });
    // ---------------- get all source details for given scene -------------
    // this.obs
    //   .call('GetSceneItemList', { sceneName: 'test' })
    //   .then((result) => console.log(result));
    // -------------------
    // this.socketService.sendMessage().next(jsonString);
    // call(requestType: string, requestData?: object): Promise
    // --------------------------------------------------------
    this.obs.call('GetInputSettings').then((result) => console.log(result));

    // this.obs.call('GetInputList').then((result) => console.log(result));
  }
}
