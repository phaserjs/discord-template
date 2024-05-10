import { initiateDiscordSDK, discordSdk } from './utils/discordSdk';

import { Boot } from './scenes/Boot';
import { Game } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';


//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.80.0/Phaser.Types.Core.GameConfig
(async () => {
  initiateDiscordSDK();
  // You can use discordSdk to access the Discord SDK and make the requests you need
  
  const config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      parent: 'game-container',
      backgroundColor: '#028af8',
      scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH
      },
      scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
      ]
  };

  new Phaser.Game(config);
})();