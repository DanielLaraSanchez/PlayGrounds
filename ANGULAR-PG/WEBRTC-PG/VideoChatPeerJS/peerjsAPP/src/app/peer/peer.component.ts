import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.css']
})
export class PeerComponent implements OnInit {

  peer;
  anotherid;
  mypeerid;

  constructor() {

   }

  ngOnInit() {
    this.peer = new Peer({key: 'lwjd5qra8257b9'})
    console.log(this.peer)
    setTimeout(()=> {
      this.mypeerid = this.peer.options.token;
      console.log(this.myId)
    }, 3000);


    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        console.log(data);
      });
    });

  }


  connect(){
    var conn = this.peer.connect(this.anotherPeerID);
    conn.on('open', function(){
      console.log(conn.id)
      conn.send('message from that id');
    });
  }

 



}
