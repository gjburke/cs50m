import { useState, useRef, useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import vibrate from '../utils/vibrate'

//TODO: Set timer as toggle, figure out work vs not logic, add phone vibrate

export default function Timer() {
    let startingWorkMinutes = 25;
    let startingRestMinutes = 5;
    const [secondsLeft, changeSecondsLeft] = useState(startingWorkMinutes * 60);
    const [countingDown, setCountingDown] = useState(false);
    const [isWorking, setIsWorking] = useState(true)

    useEffect(() => {
        let timeout_id = 0;
        // Handling timer hitting zero
        if (secondsLeft < 0) { 
            setCountingDown(false)
            changeSecondsLeft(0);
            // Handling transitions from work to rest or vice versa
            if (isWorking) {
                setIsWorking(false)
                changeSecondsLeft(startingRestMinutes * 60)
                setCountingDown(true)
                vibrate()
            } else {
                setIsWorking(true)
                changeSecondsLeft(startingWorkMinutes * 60)
                vibrate()
            }
        } else {
            if (countingDown) {
                // Counting down a second
                const timeout_id = setTimeout(() => {
                    changeSecondsLeft(secondsLeft - 1);
                }, 1000);
            } else if (!countingDown && secondsLeft != 0) {
                clearTimeout(timeout_id);
            }
        }
        return () => clearTimeout(timeout_id);
    }, [countingDown, secondsLeft, isWorking]);

    function StartTimer() {
        setCountingDown(true);
    }
    function StopTimer() {
        setCountingDown(false);
    }
    function ResetTimer() {
        setCountingDown(false);
        changeSecondsLeft(startingWorkMinutes * 60);
        setIsWorking(true);
    }

    return (
        <View>
            <Text style={styles.typeDisplay}>
                { isWorking ? (
                    'Work'
                ) : (
                    'Rest'
                )}
            </Text>
            <Text style={styles.timer}>{Math.floor(secondsLeft / 60) + ":" + (secondsLeft - (Math.floor(secondsLeft / 60) * 60))}</Text>
            <View style={styles.controls}>
                <View style={styles.button}>
                    <Button onPress={StartTimer} title="Start"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={StopTimer} title="Stop"/>
                </View>
                <View style={styles.button}>
                    <Button onPress={ResetTimer} title="Reset"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 72,
        textAlign: 'center',
    },
    controls: {
        flexDirection: 'row',
    },
    button: {
        margin: 10,
    },
    typeDisplay: {
        fontSize: 36,
        textAlign: 'center',
    }
  });