     import React, { Component } from 'react';
     import { Text, View, Image, TouchableOpacity, ScrollView, Button} from 'react-native';
     import Sound from 'react-native-sound';
     import BackgroundTimer from 'react-native-background-timer';
     import LinearGradient from 'react-native-linear-gradient';
    //  import Slider from "react-native-slider";
    import Slider from '@react-native-community/slider';
    import styles from './src/components/ItemList/style';
    import Ball2 from './src/ball';
    import tetsApp from './src/test';
// import testApp from './src/test';

     let currSeconds = 900
     console.log(currSeconds, "currSeconds - global")

     class App2 extends React.Component {
         renderCard(item) {}

         render() {
             return (
                 <View></View>
             )
         }
     }
 
     export default class App extends Component {

     sound = new Sound('water.mp3');
     sound2 = new Sound('rain.mp3');
     sound3 = new Sound('tropical_ambience.mp3');
     sound4 = new Sound('frog.mp3');
     sound5 = new Sound('fire.mp3');
     sound6 = new Sound('wind.mp3');
     sound7 = new Sound('guitar.mp3');
     sound8 = new Sound('piano_loop.mp3');
     sound9 = new Sound('piano.mp3');
     sound10 = new Sound('chinese_mix.mp3');
     sound11 = new Sound('bird.mp3');
     sound12 = new Sound('forest.mp3');
     sound13 = new Sound('owl.mp3');
     sound14 = new Sound('sunset.mp3');
     sound15 = new Sound('sunset.mp3');

     constructor(props) {
     super(props);
     this.state = {
        text: '0h 15m 00s',
        sessionInProgress: false,
        
    }
}

// Zatrzymanie dźwięków oraz wyłączenie slidera za pomoca przycisku "Begin Sesion"
options() {
    this.sound.stop(),
    this.sound2.stop()
    this.sound3.stop()
    this.sound4.stop()
    this.sound5.stop()
    this.sound6.stop()
    this.sound7.stop()
    this.sound8.stop()
    this.sound9.stop()
    this.sound10.stop()
    this.sound11.stop()
    this.sound12.stop()
    this.sound13.stop()
    this.sound14.stop()
    this.sound15.stop()
    this.setState({styleIndex: 1})
    this.setState({styleIndex2: 1})
    this.setState({styleIndex3: 1})
    this.setState({styleIndex4: 1})
    this.setState({styleIndex5: 1})
    this.setState({styleIndex6: 1})
    this.setState({styleIndex7: 1})
    this.setState({styleIndex8: 1})
    this.setState({styleIndex9: 1})
    this.setState({styleIndex10: 1})
    this.setState({styleIndex11: 1})
    this.setState({styleIndex12: 1})
    this.setState({styleIndex13: 1})
    this.setState({styleIndex14: 1})
    this.setState({styleIndex15: 1})
}

addTimer = () => {
    currSeconds += 900
    // let minuteAdd = currSeconds / 60
    //  console.log(minuteAdd, "minuteAdd")
     console.log(currSeconds, "currSeconds")
     

     let minuteAdd = (currSeconds  % 3600 / 60)
     console.log(minuteAdd, "minuteAdd")
        // console.log(TimeSharing, "TimeSharing")
        // let minute = Math.floor(TimeSharing)
        minuteAdd = ( minuteAdd == 0) ? `0${minuteAdd}` : minuteAdd
     let displayTimer = `${Math.floor(currSeconds/3600)}h ${Math.floor(minuteAdd)}m 00s`
 //    let displayTimer = `${Math.floor(currSeconds/3600)}h ${Math.floor(currSeconds/60)}m 00sec`
 
     this.setState({
         text: displayTimer
     }) 
 }
 
 subtractTimer = () => {
     currSeconds-=900;
     currSeconds = (currSeconds <= 600) ? currSeconds += 900 : currSeconds
     let AddSubtract = currSeconds % 3600 / 60
     AddSubtract = ( AddSubtract == 0) ? '00' : AddSubtract
     console.log(AddSubtract, "minuteAdd")
     let displayTimer = `${Math.floor(currSeconds/3600)}h ${Math.floor(AddSubtract)}m 00s`
     
     console.log(currSeconds, "currSeconds - subtracTimer")
     this.setState({
         text: displayTimer
     }) 
    
 }
 

// Obługa licznika - timer operation

 resetTimer () {
     this.setState({
        text: '0h 15m 00s',
        sessionInProgress: false
    })
}


// Obługa licznika - timer operation
 startTimer () {
        currSeconds 
     
        this._interval = BackgroundTimer.setInterval(() => {
        // Sekundy stopera - Stopwatch seconds
        let secondHand = currSeconds % 60 // modulo
        // TimeSharing podzielenie mi
        let TimeSharing = (currSeconds  % 3600 / 60)
        console.log(TimeSharing, "TimeSharing")
        let minute = Math.floor(TimeSharing)
        let hours = currSeconds / 3600
       
    
        // console.log(currSeconds, "currSecond")
        // console.log(minute, "minute")
        // console.log(secondHand, "seconHand")
        // console.log(hours, "hours")
        // minute = (minute == 3590) ? '00' : minute // sekundy
        // minute = (minute !== '00' && secondHand < 10) ? `0${minute}` : minute //sekundy
        secondHand = (secondHand === 0) ? '00' : secondHand // sekundy
        secondHand = (secondHand !== '00' && secondHand < 10) ? `0${secondHand}` : secondHand //sekundy
        minute = (minute < 10) ? `0${minute}` : minute //sekundy
        minute = ( minute == 60) ? '00' : minute

        let displayTimer = `${Math.floor(hours)}h ${minute}m ${secondHand}s`
        // let displayTimer = `${Math.floor(hours)}h ${Math.floor(minute/60)}m ${secondHand}s`
       
      
        // Czas wyświetlany na ekranie telefon - Displaying time the smartphone screen
        this.setState({
            text: displayTimer
        })

           if (currSeconds === 0) {   
            this.options()
            this.stopSession()
        }
        currSeconds--
        minute--
    }, 1000);  
}


beginSession = () => {
    this.startTimer()
    this.setState({
        sessionInProgress: true
    })
   
}

stopSession = () => {
   currSeconds = 1800

   this.options()
    BackgroundTimer.clearInterval(this._interval);
    this.sound3.pause()
    this.resetTimer()
    this.setState({
        sessionInProgress: false
    })   
}


// Regulacja głośności  - 
     changeVolume = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),   
            };
           
        });
        this.sound.setVolume(value)
        // valueX={value}
     }

    changeVolume2 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound2.setVolume(value)
        
     }

    changeVolume3 = (value3) => {
        this.setState(() => {
            return {
                value: parseFloat(value3),
            };
        });
        this.sound3.setVolume(value3)
     }

    changeVolume4 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound4.setVolume(value)
     }

    changeVolume5 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound5.setVolume(value)
     }

    changeVolume6 = (value6) => {
        this.setState(() => {
            return {
                value: parseFloat(value6),
            };
        });
        this.sound6.setVolume(value6)
     }

    changeVolume7 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound7.setVolume(value)
     }

    changeVolume8 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
         this.sound8.setVolume(value)
     }

    changeVolume9 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound9.setVolume(value)
     }

      changeVolume10 = (value) => {
        this.setState(() => {
            return {
                value: parseFloat(value),
            };
        });
        this.sound10.setVolume(value)
     }
   
     playSound = () => {
         if (this.state.styleIndex === 0) 
            { this.setState({styleIndex: 1}) 
            } else 
            { this.setState({styleIndex: 0}) }

        if (!this.sound.isPlaying()) {
            this.sound.play()
            this.sound.setNumberOfLoops(-1);
        } else {
            this.sound.pause()
        } 
     }

     playSound2 = () => {
         if (this.state.styleIndex2 === 0) 
            { this.setState({styleIndex2: 1}) 
            } else 
            { this.setState({styleIndex2: 0}) }

        if (!this.sound2.isPlaying()) {
            this.sound2.play()
            this.sound2.setNumberOfLoops(-1);
        } else {
            this.sound2.pause()
        }
     }

     playSound3 = () => {
         if (this.state.styleIndex3 === 0) 
            { this.setState({styleIndex3: 1}) 
            } else 
            { this.setState({styleIndex3: 0}) }

        if (!this.sound3.isPlaying()) {
            this.sound3.play()
            this.sound3.setNumberOfLoops(-1);
        } else {
            this.sound3.pause()
        }
     }

     playSound4 = () => {
           if (this.state.styleIndex4 === 0) 
            { this.setState({styleIndex4: 1})
            } else 
            { this.setState({styleIndex4: 0}) }

        if (!this.sound4.isPlaying()) {
            this.sound4.play()
            this.sound4.setNumberOfLoops(-1);
        } else {
            this.sound4.pause()
         }
     }

     playSound5 = () => {
        if (this.state.styleIndex5 === 0) 
            { this.setState({styleIndex5: 1}) 
            } else 
            { this.setState({styleIndex5: 0}) }

        if (!this.sound5.isPlaying()) {
            this.sound5.play()
            this.sound5.setNumberOfLoops(-1);
        } else {
            this.sound5.pause()
        }
     }

     playSound6 = () => {
        if (this.state.styleIndex6 === 0) 
            { this.setState({styleIndex6: 1}) 
            } else 
            { this.setState({styleIndex6: 0}) }
     
        if (!this.sound6.isPlaying()) {
            this.sound6.play()
            this.sound6.setNumberOfLoops(-1);
            this.sound6.setVolume(1)
        } else {
            this.sound6.pause()
        }
     }

     playSound7 = () => {
        //styles slider and icons
        if (this.state.styleIndex7 === 0) 
            { this.setState({styleIndex7: 1}) 
            } else 
            { this.setState({styleIndex7: 0}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
            { this.setState({styleIndex10: 1}) }
       
       //sounds navigation

        if (!this.sound7.isPlaying()) {
            this.sound7.play()
            this.sound7.setNumberOfLoops(-1);
            this.sound7.setVolume(0.6);
            this.sound8.stop()
            this.sound9.stop()
            this.sound10.stop()
                  
        } else {
            this.sound7.pause()
        }
     }

     playSound8 = () => {
        if (this.state.styleIndex8 === 0) 
            { this.setState({styleIndex8: 1}) 
            } else 
            { this.setState({styleIndex8: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex9: 1}) }
            { this.setState({styleIndex10: 1}) }
           
       
        if (!this.sound8.isPlaying()) {
            this.sound8.play()
            this.sound8.setNumberOfLoops(-1);
            this.sound8.setVolume(1);
            this.sound7.stop()
            this.sound9.stop()
            this.sound10.stop()
        } else {
            this.sound8.pause()
        }
     }

     playSound9 = () => {
        if (this.state.styleIndex9 === 0) 
            { this.setState({styleIndex9: 1}) 
            } else 
            { this.setState({styleIndex9: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex10: 1}) }
       
        if (!this.sound9.isPlaying()) {
            this.sound9.play()
            this.sound9.setNumberOfLoops(-1);
            this.sound9.setVolume(0.6);
            this.sound7.stop()
            this.sound8.stop()
            this.sound10.stop()
        } else {
            this.sound9.pause()
        }
     }

     playSound10 = () => {
        if (this.state.styleIndex10 === 0) 
            { this.setState({styleIndex10: 1}) 
            } else 
            { this.setState({styleIndex10: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound10.isPlaying()) {
            this.sound10.play()
            this.sound10.setNumberOfLoops(-1);
            this.sound10.setVolume(0.6);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound10.pause()
        }
     }

     playSound11 = () => {
        if (this.state.styleIndex11 === 0) 
            { this.setState({styleIndex11: 1}) 
            } else 
            { this.setState({styleIndex11: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound11.isPlaying()) {
            this.sound11.play()
            this.sound11.setNumberOfLoops(-1);
            this.sound11.setVolume(1);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound11.pause()
        }
     }

     playSound12 = () => {
        if (this.state.styleIndex12 === 0) 
            { this.setState({styleIndex12: 1}) 
            } else 
            { this.setState({styleIndex12: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound12.isPlaying()) {
            this.sound12.play()
            this.sound12.setNumberOfLoops(-1);
            this.sound12.setVolume(1);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound12.pause()
        }
     }

     playSound13 = () => {
        if (this.state.styleIndex13 === 0) 
            { this.setState({styleIndex13: 1}) 
            } else 
            { this.setState({styleIndex13: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound13.isPlaying()) {
            this.sound13.play()
            this.sound13.setNumberOfLoops(-1);
            this.sound13.setVolume(1);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound13.pause()
        }
     }

     playSound14 = () => {
        if (this.state.styleIndex14 === 0) 
            { this.setState({styleIndex14: 1}) 
            } else 
            { this.setState({styleIndex14: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound14.isPlaying()) {
            this.sound14.play()
            this.sound14.setNumberOfLoops(-1);
            this.sound14.setVolume(1);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound14.pause()
        }
     }

     playSound15 = () => {
        if (this.state.styleIndex15 === 0) 
            { this.setState({styleIndex10: 1}) 
            } else 
            { this.setState({styleIndex15: 0}) }
            { this.setState({styleIndex7: 1}) }
            { this.setState({styleIndex8: 1}) }
            { this.setState({styleIndex9: 1}) }
       
        if (!this.sound15.isPlaying()) {
            this.sound15.play()
            this.sound15.setNumberOfLoops(-1);
            this.sound15.setVolume(1);
            this.sound7.stop()
            this.sound8.stop()
            this.sound9.stop()
        } else {
            this.sound15.pause()
        }
     }

render() {
  
}
     render() {
        return (

            <ScrollView>
                    <View style={styles.flex}>
                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound}>
                                <LinearGradient colors={['#1571E8', '#17D2FF']}>
                                    <Image style={styles.icons} source={require('./src/asset/images/rain.png')} 
                                        style={this.state.styleIndex === 0 ? styles.imageSmall : styles.imageBig} />
                                </LinearGradient>
                                </TouchableOpacity>  
                               <Slider style={this.state.styleIndex === 0 ? styles.slider : styles.sliderNone}
                                step={0.1}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume}
                                minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                                // thumbTintColor = "#FFFFFF"
                                value={1}/>
                                                          
                        </View>
                      
                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound2}>
                                <LinearGradient colors={['#1571E8', '#17D2FF']}>
                                    <Image style={styles.icons} source={require('./src/asset/images/storm2.png')}
                                        style={this.state.styleIndex2 === 0 ? styles.imageSmall : styles.imageBig}/>
                                </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                <Slider style={this.state.styleIndex2 === 0 ? styles.slider : styles.sliderNone}
                                step={0.1}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume2}
                                minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                                thumbTintColor = "#FFFFFF"
                                value={1} />
                                </TouchableOpacity>
                                
                        </View>
                       
                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound3}>
                                <LinearGradient colors={['#1571E8', '#17D2FF']}>
                                    <Image 
                                    source={this.state.styleIndex3 === 0 ? require('./src/asset/images/jungle2.png') : require('./src/asset/images/jungle.png')}
                                        style={this.state.styleIndex3 === 0 ? styles.imageSmall : styles.imageBig} />
                                </LinearGradient>
                                </TouchableOpacity>
                               <Slider style={this.state.styleIndex3 === 0 ? styles.slider : styles.sliderNone}
                                step={0.1}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume3}
                                minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                                thumbTintColor = "#FFFFFF"
                                value={1} 
                                
                                />
                        </View>
                        </View>

                        <View style={styles.flex}>
                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound4}>
                                <LinearGradient colors={['#17D2FF', '#1571E8']}>
                                    <Image source={require('./src/asset/images/frog.png')}
                                  style={this.state.styleIndex4 === 0 ? styles.imageSmall : styles.imageBig} />
                                  </LinearGradient>
                                  </TouchableOpacity>  
                                 <Slider style={this.state.styleIndex4 === 0 ? styles.slider : styles.sliderNone}
                                step={0.1}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume4}
                                minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                                thumbTintColor = "#FFFFFF"
                                value={1} />

                            
                        </View>
                    
                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound5}>
                                <LinearGradient colors={['#17D2FF', '#1571E8']}>
                                <Image 
                                    source={this.state.styleIndex5 === 0 ? require('./src/asset/images/bonfire2.png') : require('./src/asset/images/bonfire.png')}
                                         style={this.state.styleIndex5 === 0 ? styles.imageSmall : styles.imageBig} />
                                         </LinearGradient>
                                         </TouchableOpacity>  
                                        <Slider style={this.state.styleIndex5 === 0 ? styles.slider : styles.sliderNone}
                                step={0.001}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume5}
                                minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                        
                                thumbTintColor = {this.state.styleIndex6 === 0 ? "#FFFFF" : "#424242"}
                                value={1} 
                                // debugTouchArea={true}
                                animateTransitions={true}  
                                thumbTouchSize={false}
                                />
                                
                        </View>

                        <View>
                            <TouchableOpacity style={styles.pressButton} onPress={this.playSound6}>
                                <LinearGradient colors={['#17D2FF', '#1571E8']}>
                                    <Image source={require('./src/asset/images/wind.png')}
                                         style={this.state.styleIndex6 === 0 ? styles.imageSmall : styles.imageBig} />
                                         </LinearGradient>
                                         </TouchableOpacity>  
                                        <Slider style={this.state.styleIndex6 === 0 ? styles.slider : styles.sliderNone}
                                step={0.1}
                                maximumValue={1.0}
                                minimumValue={0.2}
                                onValueChange={this.changeVolume6}   
                                 minimumTrackTintColor = "#FFFFFF" 
                                maximumTrackTintColor = "#424242"
                                thumbTintColor = "#FFFFFF"
                                value={1} />
                        </View>

                    </View>

                    <View style={styles.flex}>
                        <View>
                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound7}>
                                    <LinearGradient colors={['#1571E8', '#2432FF']}>
                                        <Image source={require('./src/asset/images/guitar.png')}
                                          style={this.state.styleIndex7 === 0 ? styles.imageSmall : styles.imageBig} />
                                          </LinearGradient>
                                          </TouchableOpacity>  
                                         <Slider style={this.state.styleIndex7 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume7}
                                    minimumTrackTintColor = "#FFFFFF"   
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>
                        </View>

                        <View>
                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound8}>
                                    <LinearGradient colors={['#1571E8', '#2432FF']}>
                                        <Image source={require('./src/asset/images/piano.png')}
                                             style={this.state.styleIndex8 === 0 ? styles.imageSmall : styles.imageBig} />
                                             </LinearGradient>
                                             </TouchableOpacity>  
                                            <Slider style={this.state.styleIndex8 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume8}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1}/>
                            </View>
                        </View>
                        <View>
                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound9}>
                                    <LinearGradient colors={['#1571E8', '#2432FF']}>
                                        <Image source={require('./src/asset/images/piano2.png')}
                                           style={this.state.styleIndex9 === 0 ? styles.imageSmall : styles.imageBig} />
                                           </LinearGradient>
                                           </TouchableOpacity>  
                                          <Slider style={this.state.styleIndex9 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume9}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>

                        </View>

                        <View style={styles.flex}>

                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound10}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/yin-yang-symbol.png')}
                                          style={this.state.styleIndex10 === 0 ? styles.imageSmall : styles.imageBig} />
                                          </LinearGradient>
                                          </TouchableOpacity>  
                                         <Slider style={this.state.styleIndex10 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>

                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound11}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/bird.png')}
                                           style={this.state.styleIndex11 === 0 ? styles.imageSmall : styles.imageBig} />
                                           </LinearGradient>
                                           </TouchableOpacity>  
                                          <Slider style={this.state.styleIndex11 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>

                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound12}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/forest.png')}
                                       style={this.state.styleIndex12 === 0 ? styles.imageSmall : styles.imageBig} />
                                       </LinearGradient>
                                       </TouchableOpacity>  
                                      <Slider style={this.state.styleIndex12 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>
                        </View>

                        <View style={styles.flex}>
                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound13}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/owl.png')}
                                         style={this.state.styleIndex13 === 0 ? styles.imageSmall : styles.imageBig} />
                                         </LinearGradient>
                                         </TouchableOpacity>  
                                        <Slider style={this.state.styleIndex13 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>

                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound14}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/sunset.png')}
                                           style={this.state.styleIndex14 === 0 ? styles.imageSmall : styles.imageBig} />
                                           </LinearGradient>
                                           </TouchableOpacity>  
                                          <Slider style={this.state.styleIndex14 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>

                            <View>
                                <TouchableOpacity style={styles.pressButton} onPress={this.playSound15}>
                                    <LinearGradient colors={['#2432FF', '#17D2FF']}>
                                        <Image source={require('./src/asset/images/train.png')}
                                        style={this.state.styleIndex15 === 0 ? styles.imageSmall : styles.imageBig} />
                                        </LinearGradient>
                                        </TouchableOpacity>  
                                       <Slider style={this.state.styleIndex15 === 0 ? styles.slider : styles.sliderNone}
                                    step={0.1}
                                    maximumValue={1.0}
                                    minimumValue={0.2}
                                    onValueChange={this.changeVolume10}
                                    minimumTrackTintColor = "#FFFFFF" 
                                    maximumTrackTintColor = "#424242"
                                    thumbTintColor = "#FFFFFF"
                                    value={1} />
                            </View>
                        </View>

                    </View>

                  <View style={styles.container}>
  
                    <Text style={styles.timer}>{this.state.text}</Text>
                
                       
                    <Text style={styles.instructions}>Close your eyes, relax, and breath naturally.</Text>

                    <TouchableOpacity style={styles.buttonTime}>
                    <Button
          title="Dodaj Czas"
          color="#737373"
          onPress={this.addTimer}
        />
                    </TouchableOpacity>

                    <View style={styles.container}>
                       <Ball2 onPress={this.addTimer} />
                     </View>

     <View style={styles.container}>
                { !this.state.sessionInProgress &&
     <TouchableOpacity style={styles.beginButton} onPress={this.beginSession}>
        <Text style={styles.btnSession}>Begin Session</Text>
     </TouchableOpacity>
        }
     { this.state.sessionInProgress &&
     <TouchableOpacity style={styles.stopButton} onPress={this.stopSession}>
        <Text style={styles.btnSession}>Stop Session</Text>
      </TouchableOpacity>
     }
     </View>
     <TouchableOpacity style={styles.buttonTime2} >
                    <Button 
          title="Odejmij Czas"
          color="#737373"
          onPress={this.subtractTimer}
        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )}};

