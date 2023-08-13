import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor() {}

    address = "";
    nativeBalance = "";
    tokenBalances = "";

    async ngOnInit() {
      const { data } = await axios('https://7d32-186-28-174-197.ngrok-free.app/balances');
      this.address = data.address;
      this.nativeBalance = data.nativeBalance;
      this.tokenBalances = data.tokenBalances;

    }
    
}
