import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Animated, {
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
} from "react-native-reanimated";
const AnimatedImage = Animated.createAnimatedComponent(Image);

const images = [
    require("@/assets/images/loader_1.png"),
    require("@/assets/images/loader_2.png"),
    require("@/assets/images/loader_3.png"),
];

const SIZE = 100;
const GLOW_DURATION = 2000;

export const AppOverlayContent = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const tick = () => setIndex((i) => i + 1);
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const useGlowAnimationColor = () => {
        return useAnimatedStyle(() => ({
            backgroundColor: withRepeat(
                withSequence(
                    // Go to minimal value on half scaling duration
                    withTiming("rgba(0,0,0,0.1)", { duration: GLOW_DURATION / 2 }),
                    //and go to initial value during other half
                    withTiming("rgba(0,0,0,0.1)", { duration: GLOW_DURATION / 2 })
                ),
                // Loop the animation
                -1,
                // Loop in both direction (small=> big, big => small)
                true
            ),
        }));
    };

    const glowAnimation2 = useGlowAnimationColor();

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.glowContainer2, glowAnimation2]}>
                <AnimatedImage source={images[index % images.length]} style={[styles.image]} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: SIZE,
        height: SIZE,
    },
    container: {
        alignItems: "center",
        overflow: "visible",
        flex: 1,
        justifyContent: "center",
    },
    glowContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 8, //Top offset to align glow to image
        bottom: 0,
        left: 0,
        right: 4, // Right offset to align glow to image
    },
    glowContainer2: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0, // Right offset to align glow to image
        backgroundColor: "red",
        opacity: 1,
    },
});
