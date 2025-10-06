// 代码生成时间: 2025-10-06 22:45:51
 * Features:
 * - Manages audio clips
 * - Plays and stops sounds
 * - Supports volume control
 * - Error handling for media errors
 *
 * @version 1.0
 * @author Your Name
 */

const _ = require('lodash');

class SoundManager {
  // Map to hold audio elements
  sounds = {};

  /**
   * Initializes a new sound with an ID and URL
   *
   * @param {string} id
   * @param {string} url
   */
  addSound(id, url) {
    if (!id || !url) {
      throw new Error('Sound ID and URL are required.');
    }

    if (this.sounds[id]) {
      throw new Error(`Sound with ID ${id} already exists.`);
    }

    const audio = new Audio(url);
    this.sounds[id] = audio;
  }

  /**
   * Plays a sound by ID
   *
   * @param {string} id
   */
  play(id) {
    const audio = this.sounds[id];
    if (!audio) {
      throw new Error(`No sound found with ID ${id}.`);
    }

    audio.play().catch(error => {
      console.error(`Error playing sound ${id}: ${error.message}`);
    });
  }

  /**
   * Stops a sound by ID
   *
   * @param {string} id
   */
  stop(id) {
    const audio = this.sounds[id];
    if (!audio) {
      throw new Error(`No sound found with ID ${id}.`);
    }

    audio.pause();
    audio.currentTime = 0;
  }

  /**
   * Sets the volume of a sound by ID
   *
   * @param {string} id
   * @param {number} volume - Volume level between 0 and 1
   */
  setVolume(id, volume) {
    const audio = this.sounds[id];
    if (!audio) {
      throw new Error(`No sound found with ID ${id}.`);
    }

    if (volume < 0 || volume > 1) {
      throw new Error('Volume must be between 0 and 1.');
    }

    audio.volume = volume;
  }
}

// Example usage
const manager = new SoundManager();
manager.addSound('alert', 'alert.mp3');
manager.play('alert');
manager.setVolume('alert', 0.5);
manager.stop('alert');
